# Garden Highpro CRM — Instrucciones de Deploy

## Lo que necesitás (todo gratis)
- Cuenta en [GitHub](https://github.com) 
- Cuenta en [Firebase](https://firebase.google.com)
- Cuenta en [Netlify](https://netlify.com)
- Node.js instalado en tu compu ([descargar acá](https://nodejs.org))

---

## PASO 1 — Crear proyecto en Firebase

1. Entrá a [console.firebase.google.com](https://console.firebase.google.com)
2. Click en **"Agregar proyecto"**
3. Nombre: `growcrm-highpro` → Continuar
4. Desactivar Google Analytics (no lo necesitamos) → **Crear proyecto**
5. Una vez creado, click en el ícono **`</>`** (Web app)
6. Nombre de la app: `GrowCRM` → **Registrar app**
7. Copiá el objeto `firebaseConfig` que aparece
8. Abrí el archivo `src/firebase.js` y reemplazá los valores

### Activar Firestore (base de datos)
1. En el menú izquierdo → **Firestore Database**
2. Click **Crear base de datos**
3. Elegir **Modo de prueba** → Siguiente → Seleccionar ubicación `southamerica-east1` → Listo

### Activar Storage (para las fotos)
1. En el menú izquierdo → **Storage**
2. Click **Comenzar** → Modo de prueba → Listo

---

## PASO 2 — Subir el código a GitHub

1. Crear cuenta en [github.com](https://github.com) si no tenés
2. Click en **"New repository"** → Nombre: `growcrm` → **Create repository**
3. Instalá [GitHub Desktop](https://desktop.github.com) (más fácil que la terminal)
4. Cloná el repo vacío que creaste
5. Copiá todos los archivos de esta carpeta dentro
6. Commit → **"Primera versión"** → Push

---

## PASO 3 — Deploy en Netlify

1. Entrá a [netlify.com](https://netlify.com) → **Sign up with GitHub**
2. Click **"Add new site"** → **"Import an existing project"**
3. Conectar con GitHub → Seleccionar el repo `growcrm`
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Click **Deploy site**
7. En 2 minutos tenés una URL tipo `growcrm-highpro.netlify.app`

---

## PASO 4 — Instalar en el celu como app

### Android (Chrome)
1. Abrí la URL de Netlify en Chrome
2. Toca los **3 puntitos** arriba a la derecha
3. **"Agregar a pantalla de inicio"**
4. ¡Listo! Aparece como app en el celu

### iPhone (Safari)
1. Abrí la URL en Safari
2. Toca el ícono de **compartir** (cuadrado con flecha)
3. **"Agregar a pantalla de inicio"**
4. ¡Listo!

---

## Problemas frecuentes

**"Module not found"** → Correr `npm install` en la carpeta del proyecto

**La app no carga en el celu** → Verificar que la URL sea HTTPS (Netlify la pone automático)

**Las fotos no se guardan** → Verificar que Firebase Storage esté activado en modo prueba
