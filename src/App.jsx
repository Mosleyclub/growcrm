import { useState, useEffect, useRef } from "react";
import { db, auth } from "./firebase";
import { collection, onSnapshot, doc, setDoc, writeBatch } from "firebase/firestore";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

// ─── GOOGLE CALENDAR INTEGRATION (OAuth real) ──────────────────────────────
const GOOGLE_CLIENT_ID = "382190286267-tr23lvv8bug5540csvmaffv296ck4vbt.apps.googleusercontent.com";
const CALENDAR_SCOPE = "https://www.googleapis.com/auth/calendar";

let gTokenClient = null;
let gAccessToken = null;

function loadGoogleScript() {
  return new Promise((resolve) => {
    if (window.google?.accounts?.oauth2) return resolve();
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.onload = resolve;
    document.body.appendChild(script);
  });
}

async function connectGoogleCalendar() {
  await loadGoogleScript();
  return new Promise((resolve, reject) => {
    gTokenClient = window.google.accounts.oauth2.initTokenClient({
      client_id: GOOGLE_CLIENT_ID,
      scope: CALENDAR_SCOPE,
      callback: (resp) => {
        if (resp.error) return reject(resp);
        gAccessToken = resp.access_token;
        localStorage.setItem("g_token", resp.access_token);
        localStorage.setItem("g_token_expiry", String(Date.now() + (resp.expires_in * 1000)));
        resolve(resp.access_token);
      },
    });
    gTokenClient.requestAccessToken();
  });
}

function getStoredGoogleToken() {
  const token = localStorage.getItem("g_token");
  const expiry = Number(localStorage.getItem("g_token_expiry") || 0);
  if (token && Date.now() < expiry) {
    gAccessToken = token;
    return token;
  }
  return null;
}

async function fetchCalendarEvents(rangeStart, rangeEnd) {
  const token = gAccessToken || getStoredGoogleToken();
  if (!token) return { needsAuth: true, events: [] };

  const timeMin = rangeStart.toISOString();
  const timeMax = rangeEnd.toISOString();

  try {
    const res = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/primary/events?timeMin=${encodeURIComponent(timeMin)}&timeMax=${encodeURIComponent(timeMax)}&singleEvents=true&orderBy=startTime`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    if (res.status === 401) {
      localStorage.removeItem("g_token");
      return { needsAuth: true, events: [] };
    }
    const data = await res.json();
    const events = (data.items || []).map(ev => ({
      id: ev.id,
      title: ev.summary || "(Sin título)",
      time: ev.start?.dateTime ? new Date(ev.start.dateTime).toLocaleTimeString("es-AR", { hour: "2-digit", minute: "2-digit" }) : "Todo el día",
      location: ev.location || "",
      description: ev.description || "",
      start: ev.start?.dateTime || ev.start?.date,
    }));
    return { needsAuth: false, events };
  } catch {
    return { needsAuth: false, events: [] };
  }
}

async function createCalendarEvent({ title, description, location, startDateTime, endDateTime }) {
  const token = gAccessToken || getStoredGoogleToken();
  if (!token) return { error: "needsAuth" };
  try {
    const res = await fetch("https://www.googleapis.com/calendar/v3/calendars/primary/events", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        summary: title,
        description,
        location,
        start: { dateTime: startDateTime, timeZone: "America/Argentina/Buenos_Aires" },
        end: { dateTime: endDateTime, timeZone: "America/Argentina/Buenos_Aires" },
      }),
    });
    return await res.json();
  } catch (e) {
    return { error: e.message };
  }
}

// ─── MOCK DATA (fallback / demo) ────────────────────────────────────────────
const MOCK_CLIENTS = [];

const STATUS_CONFIG = {
  hot:  { label: "Caliente", color: "#FF4D4D", bg: "#2A0A0A", bar: 100 },
  warm: { label: "Tibio",    color: "#FF9A3C", bg: "#2A1A0A", bar: 60  },
  cold: { label: "Frío",     color: "#4DB8FF", bg: "#0A1A2A", bar: 25  },
};

const TYPE_LABEL = {
  grow_shop:  "Grow Shop",
  distribuidor: "Distribuidor",
  consumidor: "Consumidor",
};

// ─── FIRESTORE SYNC ─────────────────────────────────────────────────────────
// Lee la colección "clients" en tiempo real. Si está vacía, la carga con los
// 743 clientes iniciales (solo pasa una vez, la primera vez que alguien abre la app).
function useFirestoreClients() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const seedingRef = useRef(false);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "clients"), async (snapshot) => {
      if (snapshot.empty && !seedingRef.current) {
        seedingRef.current = true;
        // Primera vez: cargar los clientes iniciales desde clients_data.json
        try {
          const res = await fetch("/clients_data.json");
          const initialClients = await res.json();
          const batch = writeBatch(db);
          initialClients.forEach(c => {
            batch.set(doc(db, "clients", String(c.id)), c);
          });
          await batch.commit();
        } catch (e) {
          console.error("Error seeding clients:", e);
        }
        setLoading(false);
        return;
      }
      const list = snapshot.docs.map(d => d.data());
      setClients(list);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  async function updateClient(updated) {
    try {
      await setDoc(doc(db, "clients", String(updated.id)), updated);
    } catch (e) {
      console.error("Error updating client:", e);
    }
  }

  async function addClient(client) {
    try {
      await setDoc(doc(db, "clients", String(client.id)), client);
    } catch (e) {
      console.error("Error adding client:", e);
    }
  }

  return { clients, loading, updateClient, addClient };
}

// ─── ICONS ──────────────────────────────────────────────────────────────────
const Icon = ({ d, size = 20, color = "currentColor", fill = "none" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    {Array.isArray(d) ? d.map((p, i) => <path key={i} d={p} />) : <path d={d} />}
  </svg>
);

const ICONS = {
  calendar: "M8 2v3M16 2v3M3 9h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z",
  clients:  "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75",
  plus:     "M12 5v14M5 12h14",
  back:     "M19 12H5M12 19l-7-7 7-7",
  whatsapp: "M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z",
  camera:   "M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2zM12 17a4 4 0 100-8 4 4 0 000 8",
  map:      "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0zM12 13a3 3 0 100-6 3 3 0 000 6",
  check:    "M20 6L9 17l-5-5",
  edit:     "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z",
  trash:    "M3 6h18M8 6V4h8v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6",
  thermo:   "M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z",
};


// Detecta si una direccion guardada es en realidad un link de Maps
function getMapsUrl(address, fallbackName) {
  if (!address) return `https://maps.google.com/?q=${encodeURIComponent(fallbackName)}`;
  const isLink = /^https?:\/\//i.test(address.trim());
  return isLink ? address.trim() : `https://maps.google.com/?q=${encodeURIComponent(address)}`;
}

// ─── THERMOMETER STATUS ──────────────────────────────────────────────────────
function ThermoBadge({ status }) {
  const cfg = STATUS_CONFIG[status];
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <div style={{ position: "relative", width: 10, height: 28 }}>
        <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: 4, height: 28, background: "#1E2E1F", borderRadius: 4 }} />
        <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: 4, height: `${cfg.bar * 0.28}px`, background: cfg.color, borderRadius: 4, transition: "height 0.4s ease" }} />
        <div style={{ position: "absolute", bottom: -4, left: "50%", transform: "translateX(-50%)", width: 10, height: 10, borderRadius: "50%", background: cfg.color }} />
      </div>
      <span style={{ fontSize: 11, fontWeight: 600, color: cfg.color, letterSpacing: "0.04em", textTransform: "uppercase" }}>{cfg.label}</span>
    </div>
  );
}

// ─── TODAY TAB ───────────────────────────────────────────────────────────────

// ─── SCHEDULE VISIT (crear evento en Google Calendar) ──────────────────────
function ScheduleVisitForm({ clients, initialDate, onClose, onSaved }) {
  const [search, setSearch] = useState("");
  const [selectedClient, setSelectedClient] = useState(null);
  const [date, setDate] = useState(initialDate.toISOString().split("T")[0]);
  const [time, setTime] = useState("10:00");
  const [duration, setDuration] = useState(30);
  const [notes, setNotes] = useState("");
  const [saving, setSaving] = useState(false);

  const filtered = clients.filter(c => c.name.toLowerCase().includes(search.toLowerCase())).slice(0, 8);

  async function handleSave() {
    if (!selectedClient) return;
    setSaving(true);
    const start = new Date(`${date}T${time}:00`);
    const end = new Date(start.getTime() + duration * 60000);
    const result = await createCalendarEvent({
      title: `Visita: ${selectedClient.name}`,
      description: notes,
      location: selectedClient.address || "",
      startDateTime: start.toISOString(),
      endDateTime: end.toISOString(),
    });
    setSaving(false);
    if (!result.error) onSaved();
  }

  return (
    <div style={{ position: "fixed", inset: 0, background: "#0D1F0F", zIndex: 200, display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "16px 16px 0", display: "flex", alignItems: "center", gap: 12 }}>
        <button onClick={onClose} style={{ background: "none", border: "none", color: "#7AE84A", cursor: "pointer", padding: 4 }}>
          <Icon d={ICONS.back} size={22} />
        </button>
        <div style={{ fontSize: 14, fontWeight: 700, color: "#F2F5EE" }}>Agendar visita</div>
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: "20px 16px 100px" }}>
        <div style={{ marginBottom: 18 }}>
          <div style={{ fontSize: 11, color: "#4A6B4C", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Cliente</div>
          {selectedClient ? (
            <div style={{ background: "#0A2A10", border: "1px solid #7AE84A", borderRadius: 10, padding: 12, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ color: "#7AE84A", fontSize: 13, fontWeight: 600 }}>{selectedClient.name}</span>
              <button onClick={() => setSelectedClient(null)} style={{ background: "none", border: "none", color: "#4A6B4C", cursor: "pointer", fontSize: 12 }}>Cambiar</button>
            </div>
          ) : (
            <>
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Buscar cliente..."
                style={{ width: "100%", background: "#1E2E1F", border: "1px solid #2E4A30", borderRadius: 10, color: "#F2F5EE", fontSize: 14, padding: "11px 14px", fontFamily: "inherit", outline: "none", boxSizing: "border-box", marginBottom: 8 }} />
              {search && (
                <div style={{ display: "flex", flexDirection: "column", gap: 6, maxHeight: 200, overflowY: "auto" }}>
                  {filtered.map(c => (
                    <div key={c.id} onClick={() => { setSelectedClient(c); setSearch(""); }}
                      style={{ background: "#1E2E1F", borderRadius: 8, padding: "10px 12px", cursor: "pointer", fontSize: 13, color: "#F2F5EE" }}>
                      {c.name}
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        <div style={{ display: "flex", gap: 10, marginBottom: 18 }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, color: "#4A6B4C", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Fecha</div>
            <input type="date" value={date} onChange={e => setDate(e.target.value)}
              style={{ width: "100%", background: "#1E2E1F", border: "1px solid #2E4A30", borderRadius: 10, color: "#F2F5EE", fontSize: 13, padding: "11px 10px", fontFamily: "inherit", outline: "none", boxSizing: "border-box" }} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, color: "#4A6B4C", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Hora</div>
            <input type="time" value={time} onChange={e => setTime(e.target.value)}
              style={{ width: "100%", background: "#1E2E1F", border: "1px solid #2E4A30", borderRadius: 10, color: "#F2F5EE", fontSize: 13, padding: "11px 10px", fontFamily: "inherit", outline: "none", boxSizing: "border-box" }} />
          </div>
        </div>

        <div style={{ marginBottom: 18 }}>
          <div style={{ fontSize: 11, color: "#4A6B4C", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Duración</div>
          <div style={{ display: "flex", gap: 8 }}>
            {[15, 30, 45, 60].map(d => (
              <button key={d} onClick={() => setDuration(d)}
                style={{ flex: 1, padding: "9px 0", borderRadius: 8, border: `2px solid ${duration === d ? "#7AE84A" : "#2E4A30"}`, background: duration === d ? "#0A2A10" : "#1E2E1F", color: duration === d ? "#7AE84A" : "#4A6B4C", fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>
                {d} min
              </button>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: 18 }}>
          <div style={{ fontSize: 11, color: "#4A6B4C", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Notas (opcional)</div>
          <textarea value={notes} onChange={e => setNotes(e.target.value)} placeholder="Motivo de la visita..."
            style={{ width: "100%", minHeight: 70, background: "#1E2E1F", border: "1px solid #2E4A30", borderRadius: 10, color: "#F2F5EE", fontSize: 14, padding: 14, resize: "none", fontFamily: "inherit", boxSizing: "border-box", outline: "none" }} />
        </div>
      </div>

      <div style={{ padding: "12px 16px", background: "#0D1F0F", borderTop: "1px solid #1E2E1F" }}>
        <button onClick={handleSave} disabled={!selectedClient || saving}
          style={{ width: "100%", padding: "14px 0", borderRadius: 12, background: selectedClient && !saving ? "#7AE84A" : "#1E2E1F", color: selectedClient && !saving ? "#0D1F0F" : "#2E4A30", border: "none", fontSize: 15, fontWeight: 700, cursor: selectedClient && !saving ? "pointer" : "not-allowed", fontFamily: "inherit" }}>
          {saving ? "Agendando..." : "Agendar en Google Calendar"}
        </button>
      </div>
    </div>
  );
}

function TodayTab({ clients, onClientSelect }) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [needsAuth, setNeedsAuth] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [dayOffset, setDayOffset] = useState(0); // 0 = hoy, -1 = ayer, +1 = mañana
  const [showNewVisitForm, setShowNewVisitForm] = useState(false);

  const viewedDate = new Date();
  viewedDate.setDate(viewedDate.getDate() + dayOffset);

  function loadEvents() {
    setLoading(true);
    const start = new Date(viewedDate); start.setHours(0, 0, 0, 0);
    const end = new Date(viewedDate); end.setHours(23, 59, 59, 999);
    fetchCalendarEvents(start, end).then(({ needsAuth: na, events: evts }) => {
      setNeedsAuth(na);
      setEvents(evts);
      setLoading(false);
    });
  }

  useEffect(() => { loadEvents(); }, [dayOffset]);

  async function handleConnect() {
    setConnecting(true);
    try {
      await connectGoogleCalendar();
      loadEvents();
    } catch {
      setConnecting(false);
    }
    setConnecting(false);
  }

  const dateStr = viewedDate.toLocaleDateString("es-AR", { weekday: "long", day: "numeric", month: "long" });
  const dayLabel = dayOffset === 0 ? "Recorrida de hoy" : dayOffset < 0 ? `Hace ${Math.abs(dayOffset)} día${Math.abs(dayOffset) > 1 ? "s" : ""}` : `En ${dayOffset} día${dayOffset > 1 ? "s" : ""}`;

  // Match calendar events to clients by name similarity, y nos quedamos solo con los que matchean
  const matched = events
    .map(evt => {
      const title = (evt.title || "").toLowerCase();
      const client = clients.find(c => {
        const name = c.name.toLowerCase();
        // Compara por palabras significativas (>=3 letras) en común
        const nameWords = name.split(/\s+/).filter(w => w.length >= 3);
        return nameWords.some(w => title.includes(w)) || title.split(/\s+/).some(w => w.length >= 3 && name.includes(w));
      });
      return { ...evt, client };
    })
    .filter(evt => evt.client); // solo visitas a clientes reconocidos

  if (showNewVisitForm) {
    return <ScheduleVisitForm clients={clients} initialDate={viewedDate} onClose={() => setShowNewVisitForm(false)} onSaved={() => { setShowNewVisitForm(false); loadEvents(); }} />;
  }

  return (
    <div style={{ padding: "0 16px 100px" }}>
      <div style={{ paddingTop: 24, paddingBottom: 16, display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div style={{ fontSize: 11, color: "#7AE84A", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>{dayLabel}</div>
          <div style={{ fontSize: 22, fontWeight: 700, color: "#F2F5EE", textTransform: "capitalize", marginTop: 2 }}>{dateStr}</div>
        </div>
        {!needsAuth && (
          <button onClick={() => setShowNewVisitForm(true)}
            style={{ background: "#7AE84A", border: "none", borderRadius: 10, padding: "8px 12px", color: "#0D1F0F", fontSize: 12, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 4, fontFamily: "inherit" }}>
            <Icon d={ICONS.plus} size={14} color="#0D1F0F" /> Agendar
          </button>
        )}
      </div>

      {/* Day navigator */}
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <button onClick={() => setDayOffset(d => d - 1)} style={{ flex: 1, background: "#1E2E1F", border: "1px solid #2E4A30", borderRadius: 8, padding: "8px 0", color: "#7AE84A", fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>← Anterior</button>
        {dayOffset !== 0 && (
          <button onClick={() => setDayOffset(0)} style={{ background: "#1E2E1F", border: "1px solid #2E4A30", borderRadius: 8, padding: "8px 14px", color: "#4A6B4C", fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>Hoy</button>
        )}
        <button onClick={() => setDayOffset(d => d + 1)} style={{ flex: 1, background: "#1E2E1F", border: "1px solid #2E4A30", borderRadius: 8, padding: "8px 0", color: "#7AE84A", fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>Siguiente →</button>
      </div>

      {needsAuth ? (
        <div style={{ background: "#1E2E1F", borderRadius: 12, padding: 24, textAlign: "center" }}>
          <div style={{ fontSize: 13, color: "#F2F5EE", marginBottom: 4, fontWeight: 600 }}>Conectá tu Google Calendar</div>
          <div style={{ fontSize: 12, color: "#4A6B4C", marginBottom: 16 }}>Para ver y agendar visitas directamente desde la app</div>
          <button onClick={handleConnect} disabled={connecting}
            style={{ background: "#7AE84A", border: "none", borderRadius: 10, padding: "12px 24px", color: "#0D1F0F", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>
            {connecting ? "Conectando..." : "Conectar Google Calendar"}
          </button>
        </div>
      ) : loading ? (
        <div style={{ textAlign: "center", padding: 40, color: "#4A6B4C" }}>
          <div style={{ fontSize: 13 }}>Cargando calendario…</div>
        </div>
      ) : matched.length === 0 ? (
        <div style={{ background: "#1E2E1F", borderRadius: 12, padding: 20, textAlign: "center" }}>
          <div style={{ fontSize: 13, color: "#4A6B4C" }}>No hay visitas agendadas</div>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {matched.map((evt, i) => (
            <div key={i}
              onClick={() => evt.client && onClientSelect(evt.client)}
              style={{ background: "#1E2E1F", borderRadius: 12, padding: 16, cursor: evt.client ? "pointer" : "default", border: `1px solid ${evt.client ? "#2E4A30" : "#1A2A1B"}`, transition: "border-color 0.2s" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#F2F5EE" }}>{evt.title}</div>
                  {evt.time && <div style={{ fontSize: 11, color: "#7AE84A", marginTop: 2 }}>{evt.time}</div>}
                  {evt.location && <div style={{ fontSize: 11, color: "#4A6B4C", marginTop: 2 }}>{evt.location}</div>}
                </div>
                {evt.client && <ThermoBadge status={evt.client.status} />}
              </div>
              {evt.client && (
                <div style={{ marginTop: 10, paddingTop: 10, borderTop: "1px solid #2E4A30", display: "flex", gap: 8 }}>
                  <a href={`https://wa.me/${evt.client.phone}`} target="_blank" rel="noreferrer"
                    onClick={e => e.stopPropagation()}
                    style={{ flex: 1, background: "#0A2A10", color: "#7AE84A", border: "1px solid #2E4A30", borderRadius: 8, padding: "7px 0", fontSize: 12, fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}>
                    <Icon d={ICONS.whatsapp} size={14} /> WhatsApp
                  </a>
                  <a href={getMapsUrl(evt.client.address, evt.client.name)} target="_blank" rel="noreferrer"
                    onClick={e => e.stopPropagation()}
                    style={{ flex: 1, background: "#0A2A10", color: "#7AE84A", border: "1px solid #2E4A30", borderRadius: 8, padding: "7px 0", fontSize: 12, fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}>
                    <Icon d={ICONS.map} size={14} /> Maps
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Quick access to all clients */}
      <div style={{ marginTop: 24 }}>
        <div style={{ fontSize: 11, color: "#4A6B4C", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>Clientes activos</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {clients.slice(0, 3).map(c => (
            <div key={c.id} onClick={() => onClientSelect(c)}
              style={{ background: "#1E2E1F", borderRadius: 10, padding: "12px 14px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#F2F5EE" }}>{c.name}</div>
                <div style={{ fontSize: 11, color: "#4A6B4C", marginTop: 1 }}>{TYPE_LABEL[c.type]}</div>
              </div>
              <ThermoBadge status={c.status} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── VISIT FORM ──────────────────────────────────────────────────────────────
function VisitForm({ client, onSave, onClose }) {
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState(client.status);
  const [photos, setPhotos] = useState([]);
  const fileRef = useRef();

  function handlePhoto(e) {
    const files = Array.from(e.target.files);
    files.forEach(f => {
      const reader = new FileReader();
      reader.onload = ev => setPhotos(p => [...p, ev.target.result]);
      reader.readAsDataURL(f);
    });
  }

  function handleSave() {
    if (!notes.trim()) return;
    const visit = {
      id: Date.now(),
      date: new Date().toLocaleDateString("es-AR"),
      notes,
      status,
      photos,
    };
    onSave(visit, status);
  }

  return (
    <div style={{ position: "fixed", inset: 0, background: "#0D1F0F", zIndex: 200, display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "16px 16px 0", display: "flex", alignItems: "center", gap: 12 }}>
        <button onClick={onClose} style={{ background: "none", border: "none", color: "#7AE84A", cursor: "pointer", padding: 4 }}>
          <Icon d={ICONS.back} size={22} />
        </button>
        <div>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#F2F5EE" }}>Nueva visita</div>
          <div style={{ fontSize: 11, color: "#4A6B4C" }}>{client.name}</div>
        </div>
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: "20px 16px 100px" }}>
        {/* Status selector */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 11, color: "#4A6B4C", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>Estado del cliente</div>
          <div style={{ display: "flex", gap: 8 }}>
            {["cold", "warm", "hot"].map(s => (
              <button key={s} onClick={() => setStatus(s)}
                style={{ flex: 1, padding: "10px 0", borderRadius: 10, border: `2px solid ${status === s ? STATUS_CONFIG[s].color : "#2E4A30"}`, background: status === s ? STATUS_CONFIG[s].bg : "#1E2E1F", color: status === s ? STATUS_CONFIG[s].color : "#4A6B4C", fontSize: 12, fontWeight: 700, cursor: "pointer", transition: "all 0.2s" }}>
                {STATUS_CONFIG[s].label}
              </button>
            ))}
          </div>
        </div>

        {/* Notes */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 11, color: "#4A6B4C", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>Notas de la visita</div>
          <textarea value={notes} onChange={e => setNotes(e.target.value)}
            placeholder="¿Qué se habló? ¿Qué pidieron? ¿Próximos pasos?"
            style={{ width: "100%", minHeight: 120, background: "#1E2E1F", border: "1px solid #2E4A30", borderRadius: 10, color: "#F2F5EE", fontSize: 14, padding: 14, resize: "none", fontFamily: "inherit", boxSizing: "border-box", outline: "none" }} />
        </div>

        {/* Photos */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ fontSize: 11, color: "#4A6B4C", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>Fotos</div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {photos.map((p, i) => (
              <div key={i} style={{ position: "relative" }}>
                <img src={p} alt="" style={{ width: 80, height: 80, borderRadius: 8, objectFit: "cover", border: "1px solid #2E4A30" }} />
                <button onClick={() => setPhotos(ph => ph.filter((_, j) => j !== i))}
                  style={{ position: "absolute", top: -6, right: -6, background: "#FF4D4D", border: "none", borderRadius: "50%", width: 20, height: 20, color: "white", fontSize: 12, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", padding: 0 }}>×</button>
              </div>
            ))}
            <button onClick={() => fileRef.current.click()}
              style={{ width: 80, height: 80, borderRadius: 8, border: "2px dashed #2E4A30", background: "#1E2E1F", color: "#4A6B4C", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4 }}>
              <Icon d={ICONS.camera} size={20} />
              <span style={{ fontSize: 10 }}>Agregar</span>
            </button>
            <input ref={fileRef} type="file" accept="image/*" multiple onChange={handlePhoto} style={{ display: "none" }} />
          </div>
        </div>
      </div>

      <div style={{ padding: "12px 16px", background: "#0D1F0F", borderTop: "1px solid #1E2E1F" }}>
        <button onClick={handleSave} disabled={!notes.trim()}
          style={{ width: "100%", padding: "14px 0", borderRadius: 12, background: notes.trim() ? "#7AE84A" : "#1E2E1F", color: notes.trim() ? "#0D1F0F" : "#2E4A30", border: "none", fontSize: 15, fontWeight: 700, cursor: notes.trim() ? "pointer" : "not-allowed", transition: "all 0.2s", fontFamily: "inherit" }}>
          Guardar visita
        </button>
      </div>
    </div>
  );
}

// ─── CLIENT DETAIL ───────────────────────────────────────────────────────────
function ClientDetail({ client, onBack, onUpdate }) {
  const [showVisitForm, setShowVisitForm] = useState(false);
  const [editingAddress, setEditingAddress] = useState(false);
  const [addressInput, setAddressInput] = useState(client.address || "");

  function handleSaveVisit(visit, newStatus) {
    const updated = {
      ...client,
      status: newStatus,
      visits: [visit, ...(client.visits || [])],
    };
    onUpdate(updated);
    setShowVisitForm(false);
  }

  function handleSaveAddress() {
    onUpdate({ ...client, address: addressInput.trim() });
    setEditingAddress(false);
  }

  if (showVisitForm) return <VisitForm client={client} onSave={handleSaveVisit} onClose={() => setShowVisitForm(false)} />;

  const cfg = STATUS_CONFIG[client.status];

  return (
    <div style={{ position: "fixed", inset: 0, background: "#0D1F0F", zIndex: 100, display: "flex", flexDirection: "column", overflowY: "auto" }}>
      {/* Header */}
      <div style={{ background: "#1E2E1F", padding: "16px 16px 20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
          <button onClick={onBack} style={{ background: "none", border: "none", color: "#7AE84A", cursor: "pointer", padding: 4 }}>
            <Icon d={ICONS.back} size={22} />
          </button>
          <div style={{ fontSize: 11, color: "#4A6B4C", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>{TYPE_LABEL[client.type]}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{ flex: 1, marginRight: 12 }}>
            <div style={{ fontSize: 20, fontWeight: 700, color: "#F2F5EE", lineHeight: 1.2 }}>{client.name}</div>
            {client.phone_display && <div style={{ fontSize: 12, color: "#7AE84A", marginTop: 4 }}>{client.phone_display}</div>}
            {editingAddress ? (
              <div style={{ display: "flex", gap: 6, marginTop: 6 }}>
                <input value={addressInput} onChange={e => setAddressInput(e.target.value)} placeholder="Pegá el link de Maps o la dirección"
                  style={{ flex: 1, background: "#0D1F0F", border: "1px solid #2E4A30", borderRadius: 6, color: "#F2F5EE", fontSize: 12, padding: "6px 8px", fontFamily: "inherit", outline: "none" }} />
                <button onClick={handleSaveAddress} style={{ background: "#7AE84A", border: "none", borderRadius: 6, padding: "0 10px", color: "#0D1F0F", fontWeight: 700, fontSize: 12, cursor: "pointer" }}>OK</button>
              </div>
            ) : (
              <div onClick={() => setEditingAddress(true)} style={{ fontSize: 12, color: client.address ? "#4A6B4C" : "#FF9A3C", marginTop: 2, cursor: "pointer", textDecoration: client.address ? "none" : "underline" }}>
                {client.address || "Sin dirección · tocá para agregar"}
              </div>
            )}
          </div>
          <ThermoBadge status={client.status} />
        </div>

        {/* Action buttons */}
        <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
          <a href={`https://wa.me/${client.phone}`} target="_blank" rel="noreferrer"
            style={{ flex: 1, background: "#0A2A10", color: "#7AE84A", border: "1px solid #2E4A30", borderRadius: 10, padding: "10px 0", fontSize: 12, fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
            <Icon d={ICONS.whatsapp} size={16} /> WhatsApp
          </a>
          <a href={getMapsUrl(client.address, client.name)} target="_blank" rel="noreferrer"
            style={{ flex: 1, background: "#0A2A10", color: "#7AE84A", border: "1px solid #2E4A30", borderRadius: 10, padding: "10px 0", fontSize: 12, fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
            <Icon d={ICONS.map} size={16} /> {client.address ? "Maps" : "Buscar ubicación"}
          </a>
          <button onClick={() => setShowVisitForm(true)}
            style={{ flex: 1, background: "#7AE84A", color: "#0D1F0F", border: "none", borderRadius: 10, padding: "10px 0", fontSize: 12, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6, fontFamily: "inherit" }}>
            <Icon d={ICONS.plus} size={16} color="#0D1F0F" /> Visita
          </button>
        </div>
      </div>

      <div style={{ padding: "20px 16px 100px" }}>
        {/* General notes */}
        {client.notes && (
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 11, color: "#4A6B4C", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Notas generales</div>
            <div style={{ background: "#1E2E1F", borderRadius: 10, padding: 14, fontSize: 13, color: "#C8D9C9", lineHeight: 1.5 }}>{client.notes}</div>
          </div>
        )}

        {/* Visit history */}
        <div>
          <div style={{ fontSize: 11, color: "#4A6B4C", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>
            Historial de visitas {client.visits?.length > 0 && `(${client.visits.length})`}
          </div>
          {!client.visits?.length ? (
            <div style={{ background: "#1E2E1F", borderRadius: 10, padding: 20, textAlign: "center" }}>
              <div style={{ fontSize: 13, color: "#4A6B4C" }}>Sin visitas registradas</div>
              <div style={{ fontSize: 11, color: "#2E4A30", marginTop: 4 }}>Tocá "+ Visita" para registrar la primera</div>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {client.visits.map(v => (
                <div key={v.id} style={{ background: "#1E2E1F", borderRadius: 12, padding: 14 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                    <div style={{ fontSize: 11, color: "#7AE84A", fontWeight: 600 }}>{v.date}</div>
                    <ThermoBadge status={v.status} />
                  </div>
                  <div style={{ fontSize: 13, color: "#C8D9C9", lineHeight: 1.5, marginBottom: v.photos?.length ? 10 : 0 }}>{v.notes}</div>
                  {v.photos?.length > 0 && (
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 8 }}>
                      {v.photos.map((p, i) => (
                        <img key={i} src={p} alt="" style={{ width: 70, height: 70, borderRadius: 8, objectFit: "cover", border: "1px solid #2E4A30" }} />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── CLIENT FORM (new/edit) ──────────────────────────────────────────────────
function ClientForm({ client, onSave, onClose }) {
  const [form, setForm] = useState(client || { name: "", type: "grow_shop", phone: "", address: "", status: "cold", notes: "" });
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  return (
    <div style={{ position: "fixed", inset: 0, background: "#0D1F0F", zIndex: 200, display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "16px 16px 0", display: "flex", alignItems: "center", gap: 12 }}>
        <button onClick={onClose} style={{ background: "none", border: "none", color: "#7AE84A", cursor: "pointer", padding: 4 }}>
          <Icon d={ICONS.back} size={22} />
        </button>
        <div style={{ fontSize: 14, fontWeight: 700, color: "#F2F5EE" }}>{client ? "Editar cliente" : "Nuevo cliente"}</div>
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: "20px 16px 100px" }}>
        {[
          { label: "Nombre", key: "name", placeholder: "Ej: Green House Grow Shop" },
          { label: "Teléfono (sin 0 ni 15)", key: "phone", placeholder: "Ej: 1140001111", type: "tel" },
          { label: "Dirección", key: "address", placeholder: "Ej: Av. Corrientes 1234, CABA" },
        ].map(f => (
          <div key={f.key} style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 11, color: "#4A6B4C", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>{f.label}</div>
            <input value={form[f.key]} onChange={e => set(f.key, e.target.value)} placeholder={f.placeholder} type={f.type || "text"}
              style={{ width: "100%", background: "#1E2E1F", border: "1px solid #2E4A30", borderRadius: 10, color: "#F2F5EE", fontSize: 14, padding: "12px 14px", fontFamily: "inherit", outline: "none", boxSizing: "border-box" }} />
          </div>
        ))}

        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 11, color: "#4A6B4C", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Tipo</div>
          <div style={{ display: "flex", gap: 8 }}>
            {Object.entries(TYPE_LABEL).map(([k, v]) => (
              <button key={k} onClick={() => set("type", k)}
                style={{ flex: 1, padding: "9px 0", borderRadius: 8, border: `2px solid ${form.type === k ? "#7AE84A" : "#2E4A30"}`, background: form.type === k ? "#0A2A10" : "#1E2E1F", color: form.type === k ? "#7AE84A" : "#4A6B4C", fontSize: 11, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>
                {v}
              </button>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 11, color: "#4A6B4C", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Estado inicial</div>
          <div style={{ display: "flex", gap: 8 }}>
            {["cold", "warm", "hot"].map(s => (
              <button key={s} onClick={() => set("status", s)}
                style={{ flex: 1, padding: "9px 0", borderRadius: 8, border: `2px solid ${form.status === s ? STATUS_CONFIG[s].color : "#2E4A30"}`, background: form.status === s ? STATUS_CONFIG[s].bg : "#1E2E1F", color: form.status === s ? STATUS_CONFIG[s].color : "#4A6B4C", fontSize: 11, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>
                {STATUS_CONFIG[s].label}
              </button>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 11, color: "#4A6B4C", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Notas generales</div>
          <textarea value={form.notes} onChange={e => set("notes", e.target.value)} placeholder="Info relevante del cliente…"
            style={{ width: "100%", minHeight: 80, background: "#1E2E1F", border: "1px solid #2E4A30", borderRadius: 10, color: "#F2F5EE", fontSize: 14, padding: 14, resize: "none", fontFamily: "inherit", boxSizing: "border-box", outline: "none" }} />
        </div>
      </div>

      <div style={{ padding: "12px 16px", background: "#0D1F0F", borderTop: "1px solid #1E2E1F" }}>
        <button onClick={() => onSave(form)} disabled={!form.name.trim()}
          style={{ width: "100%", padding: "14px 0", borderRadius: 12, background: form.name.trim() ? "#7AE84A" : "#1E2E1F", color: form.name.trim() ? "#0D1F0F" : "#2E4A30", border: "none", fontSize: 15, fontWeight: 700, cursor: form.name.trim() ? "pointer" : "not-allowed", fontFamily: "inherit" }}>
          {client ? "Guardar cambios" : "Agregar cliente"}
        </button>
      </div>
    </div>
  );
}

// ─── CLIENTS TAB ─────────────────────────────────────────────────────────────
function ClientsTab({ clients, onClientSelect, onAddClient }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filtered = clients.filter(c => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.address.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "all" || c.status === filter || c.type === filter;
    return matchSearch && matchFilter;
  }).sort((a, b) => a.name.localeCompare(b.name, "es", { sensitivity: "base" }));

  return (
    <div style={{ padding: "0 16px 100px" }}>
      <div style={{ paddingTop: 24, paddingBottom: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: 11, color: "#7AE84A", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>Cartera</div>
          <div style={{ fontSize: 22, fontWeight: 700, color: "#F2F5EE", marginTop: 2 }}>{clients.length} clientes</div>
        </div>
        <button onClick={onAddClient}
          style={{ background: "#7AE84A", border: "none", borderRadius: 10, padding: "8px 14px", color: "#0D1F0F", fontSize: 13, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 5, fontFamily: "inherit" }}>
          <Icon d={ICONS.plus} size={16} color="#0D1F0F" /> Nuevo
        </button>
      </div>

      {/* Search */}
      <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Buscar cliente…"
        style={{ width: "100%", background: "#1E2E1F", border: "1px solid #2E4A30", borderRadius: 10, color: "#F2F5EE", fontSize: 14, padding: "11px 14px", fontFamily: "inherit", outline: "none", boxSizing: "border-box", marginBottom: 12 }} />

      {/* Filter chips */}
      <div style={{ display: "flex", gap: 6, marginBottom: 16, overflowX: "auto", paddingBottom: 4 }}>
        {[
          { k: "all", label: "Todos" },
          { k: "hot", label: "🔴 Caliente" },
          { k: "warm", label: "🟠 Tibio" },
          { k: "cold", label: "🔵 Frío" },
          { k: "grow_shop", label: "Grow" },
          { k: "distribuidor", label: "Distrib." },
          { k: "consumidor", label: "Consumidor" },
        ].map(f => (
          <button key={f.k} onClick={() => setFilter(f.k)}
            style={{ whiteSpace: "nowrap", padding: "6px 12px", borderRadius: 20, border: `1px solid ${filter === f.k ? "#7AE84A" : "#2E4A30"}`, background: filter === f.k ? "#0A2A10" : "#1E2E1F", color: filter === f.k ? "#7AE84A" : "#4A6B4C", fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>
            {f.label}
          </button>
        ))}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {filtered.map(c => (
          <div key={c.id} onClick={() => onClientSelect(c)}
            style={{ background: "#1E2E1F", borderRadius: 12, padding: "14px 16px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", border: "1px solid #1A2A1B" }}>
            <div style={{ flex: 1, marginRight: 12 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#F2F5EE" }}>{c.name}</div>
              <div style={{ fontSize: 11, color: "#4A6B4C", marginTop: 2 }}>{TYPE_LABEL[c.type]} · {c.visits?.length || 0} visita{c.visits?.length !== 1 ? "s" : ""}</div>
            </div>
            <ThermoBadge status={c.status} />
          </div>
        ))}
        {filtered.length === 0 && (
          <div style={{ background: "#1E2E1F", borderRadius: 10, padding: 20, textAlign: "center" }}>
            <div style={{ fontSize: 13, color: "#4A6B4C" }}>Sin resultados</div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── MAIN APP ────────────────────────────────────────────────────────────────

// ─── LOGIN ──────────────────────────────────────────────────────────────────
function LoginScreen({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
    } catch (err) {
      setError("Email o contraseña incorrectos");
    }
    setLoading(false);
  }

  return (
    <div style={{ background: "#0D1F0F", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 24, fontFamily: "'Space Grotesk', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&display=swap');`}</style>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 32 }}>
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#7AE84A" }} />
        <span style={{ fontSize: 13, fontWeight: 700, color: "#7AE84A", letterSpacing: "0.1em", textTransform: "uppercase" }}>Garden Highpro · CRM</span>
      </div>
      <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: 320, display: "flex", flexDirection: "column", gap: 14 }}>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required
          style={{ background: "#1E2E1F", border: "1px solid #2E4A30", borderRadius: 10, color: "#F2F5EE", fontSize: 14, padding: "13px 16px", fontFamily: "inherit", outline: "none" }} />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Contraseña" required
          style={{ background: "#1E2E1F", border: "1px solid #2E4A30", borderRadius: 10, color: "#F2F5EE", fontSize: 14, padding: "13px 16px", fontFamily: "inherit", outline: "none" }} />
        {error && <div style={{ color: "#FF4D4D", fontSize: 12 }}>{error}</div>}
        <button type="submit" disabled={loading}
          style={{ background: "#7AE84A", color: "#0D1F0F", border: "none", borderRadius: 10, padding: "13px 0", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", marginTop: 8 }}>
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
}

export default function GrowCRM() {
  const [user, setUser] = useState(undefined); // undefined = checking, null = logged out, object = logged in
  const { clients, loading, updateClient: fsUpdateClient, addClient: fsAddClient } = useFirestoreClients();
  const [tab, setTab] = useState("today");
  const [selectedClient, setSelectedClient] = useState(null);
  const [showClientForm, setShowClientForm] = useState(false);
  const [editClient, setEditClient] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);

  // Mantiene selectedClient sincronizado con los datos frescos de Firestore
  useEffect(() => {
    if (selectedClient) {
      const fresh = clients.find(c => c.id === selectedClient.id);
      if (fresh) setSelectedClient(fresh);
    }
  }, [clients]);

  function updateClient(updated) {
    fsUpdateClient(updated);
    setSelectedClient(updated);
  }

  function addClient(form) {
    const newClient = { ...form, id: Date.now(), visits: [] };
    fsAddClient(newClient);
    setShowClientForm(false);
  }

  if (user === undefined) {
    return (
      <div style={{ background: "#0D1F0F", minHeight: "100vh" }} />
    );
  }

  if (user === null) {
    return <LoginScreen />;
  }

  if (loading) {
    return (
      <div style={{ background: "#0D1F0F", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 12, fontFamily: "'Space Grotesk', sans-serif" }}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap');`}</style>
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#7AE84A" }} />
        <div style={{ color: "#4A6B4C", fontSize: 13 }}>Cargando clientes...</div>
      </div>
    );
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; -webkit-tap-highlight-color: transparent; }
        body { background: #0D1F0F; font-family: 'Space Grotesk', sans-serif; }
        ::-webkit-scrollbar { display: none; }
        input::placeholder, textarea::placeholder { color: #2E4A30; }
      `}</style>

      <div style={{ background: "#0D1F0F", minHeight: "100vh", maxWidth: 430, margin: "0 auto", fontFamily: "'Space Grotesk', sans-serif", position: "relative" }}>

        {/* Status bar spacer */}
        <div style={{ height: 44, background: "#0D1F0F" }} />

        {/* Brand header */}
        <div style={{ padding: "0 16px 4px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#7AE84A" }} />
            <span style={{ fontSize: 12, fontWeight: 700, color: "#4A6B4C", letterSpacing: "0.12em", textTransform: "uppercase" }}>Garden Highpro · CRM</span>
          </div>
          <button onClick={() => signOut(auth)} style={{ background: "none", border: "none", color: "#2E4A30", fontSize: 11, cursor: "pointer", fontFamily: "inherit" }}>Salir</button>
        </div>

        {/* Content */}
        <div style={{ paddingBottom: 0 }}>
          {tab === "today" && <TodayTab clients={clients} onClientSelect={setSelectedClient} />}
          {tab === "clients" && <ClientsTab clients={clients} onClientSelect={setSelectedClient} onAddClient={() => setShowClientForm(true)} />}
        </div>

        {/* Bottom nav */}
        <div style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 430, background: "#0D1F0F", borderTop: "1px solid #1E2E1F", display: "flex", zIndex: 50 }}>
          {[
            { key: "today", label: "Hoy", icon: ICONS.calendar },
            { key: "clients", label: "Clientes", icon: ICONS.clients },
          ].map(t => (
            <button key={t.key} onClick={() => setTab(t.key)}
              style={{ flex: 1, padding: "12px 0 20px", background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 4, color: tab === t.key ? "#7AE84A" : "#2E4A30", transition: "color 0.2s", fontFamily: "inherit" }}>
              <Icon d={t.icon} size={22} color={tab === t.key ? "#7AE84A" : "#2E4A30"} />
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>{t.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Overlays */}
      {selectedClient && (
        <ClientDetail
          client={selectedClient}
          onBack={() => setSelectedClient(null)}
          onUpdate={updateClient}
        />
      )}
      {showClientForm && (
        <ClientForm onSave={addClient} onClose={() => setShowClientForm(false)} />
      )}
      {editClient && (
        <ClientForm client={editClient} onSave={updated => { updateClient({ ...editClient, ...updated }); setEditClient(null); }} onClose={() => setEditClient(null)} />
      )}
    </>
  );
}
