# Guía de Instalación

## Requisitos Previos

Antes de ejecutar la aplicación, necesitas tener instalado:

### 1. Node.js y npm

**Descargar Node.js:**
- Ve a [https://nodejs.org/](https://nodejs.org/)
- Descarga la versión LTS (Long Term Support)
- Ejecuta el instalador y sigue las instrucciones
- Node.js incluye npm automáticamente

**Verificar la instalación:**
Abre PowerShell o CMD y ejecuta:
```bash
node --version
npm --version
```

Deberías ver las versiones instaladas (por ejemplo: v20.x.x y 10.x.x)

## Pasos de Instalación

### 1. Abrir la terminal en el proyecto
```bash
cd C:\Users\purop\reservas-app
```

### 2. Instalar las dependencias
```bash
npm install
```

Este comando instalará todas las dependencias necesarias:
- React y React DOM
- React Router para navegación
- Tailwind CSS para estilos
- TypeScript
- Vite como build tool
- date-fns para manejo de fechas

### 3. Iniciar el servidor de desarrollo
```bash
npm run dev
```

### 4. Abrir en el navegador
La aplicación se abrirá automáticamente en:
```
http://localhost:5173
```

Si no se abre automáticamente, copia y pega esa URL en tu navegador.

## Solución de Problemas

### Error: "npm no se reconoce como comando"
- Asegúrate de haber instalado Node.js
- Reinicia la terminal después de instalar Node.js
- Verifica que Node.js esté en el PATH del sistema

### Error al instalar dependencias
Si hay errores durante `npm install`, intenta:
```bash
npm cache clean --force
npm install
```

### Puerto 5173 ocupado
Si el puerto está ocupado, Vite usará automáticamente el siguiente disponible (5174, 5175, etc.)

### Problemas con TypeScript
Si hay errores de TypeScript, verifica que la versión de Node.js sea 18 o superior.

## Comandos Útiles

```bash
# Desarrollo
npm run dev          # Inicia el servidor de desarrollo

# Producción
npm run build        # Genera el build optimizado
npm run preview      # Previsualiza el build de producción

# Limpiar caché
npm cache clean --force
```

## Estructura de Archivos Generados

Después de `npm install`, se creará:
- `node_modules/` - Todas las dependencias
- `package-lock.json` - Versiones exactas de las dependencias

Después de `npm run build`, se creará:
- `dist/` - Archivos de producción listos para desplegar

## Despliegue

Para desplegar la aplicación en producción:

1. Genera el build:
```bash
npm run build
```

2. Los archivos en la carpeta `dist/` están listos para ser subidos a cualquier servicio de hosting:
   - Vercel
   - Netlify
   - GitHub Pages
   - Firebase Hosting
   - etc.

## Soporte

Si encuentras problemas, verifica:
1. Versión de Node.js (debe ser 18 o superior)
2. Permisos de escritura en la carpeta del proyecto
3. Conexión a internet para descargar dependencias
4. Antivirus no está bloqueando npm
