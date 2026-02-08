# 🚀 Inicio Rápido

## ⚡ 3 Pasos para Empezar

### 1️⃣ Instalar Node.js
Si no lo tienes instalado:
- Ve a https://nodejs.org/
- Descarga la versión LTS
- Instala y reinicia tu terminal

### 2️⃣ Instalar Dependencias
Abre PowerShell o CMD y ejecuta:
```bash
cd C:\Users\purop\reservas-app
npm install
```

### 3️⃣ Iniciar la Aplicación
```bash
npm run dev
```

Abre tu navegador en: **http://localhost:5173**

---

## 🎯 ¿Qué Puedes Hacer?

### Ver Espacios Disponibles
- Explora 8 espacios pre-configurados
- Filtra por Pádel, Fútbol o Salones
- Ve precios y capacidades

### Hacer una Reserva
1. Haz clic en cualquier espacio
2. Clic en "Hacer una Reserva"
3. Selecciona fecha y horario
4. Completa tus datos
5. Confirma la reserva

### Gestionar Reservas
- Ve a "Mis Reservas" en el menú
- Revisa todas tus reservas
- Cancela si es necesario

---

## 📚 Más Información

- **Instalación Completa**: Ver `INSTALACION.md`
- **Guía de Uso**: Ver `GUIA_DE_USO.md`
- **Personalización**: Ver `EJEMPLOS_EXTENSION.md`
- **Documentación Técnica**: Ver `README.md`

---

## ❓ Problemas Comunes

**"npm no se reconoce"**
→ Instala Node.js y reinicia la terminal

**"Error al instalar"**
→ Ejecuta: `npm cache clean --force` y luego `npm install`

**"Puerto ocupado"**
→ Vite usará automáticamente otro puerto

---

## 🎉 ¡Listo!

Tu aplicación de reservas está lista para usar.

**Próximos pasos:**
1. Prueba hacer una reserva
2. Personaliza los espacios
3. Cambia los colores a tu gusto
4. ¡Despliega en producción!

---

**Archivos Importantes:**
- `package.json` - Dependencias
- `src/App.tsx` - Aplicación principal
- `src/data/initialData.ts` - Espacios disponibles
- `tailwind.config.js` - Colores y estilos

**Comandos Útiles:**
```bash
npm run dev      # Desarrollo
npm run build    # Producción
npm run preview  # Preview del build
```

¡Disfruta tu aplicación! 🚀
