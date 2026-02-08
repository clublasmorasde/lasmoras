# Guía de Uso - Sistema de Reservas

## Descripción General

ReservaFácil es un sistema completo para gestionar reservas de:
- 🎾 **Canchas de Pádel**
- ⚽ **Canchas de Fútbol** (5, 7 y 11 jugadores)
- 🎉 **Salones de Eventos**

## Funcionalidades Principales

### 1. Página de Inicio

Al abrir la aplicación, verás:
- **Barra de navegación** con el logo y enlaces a "Inicio" y "Mis Reservas"
- **Título principal** con descripción del servicio
- **Filtros** para ver todos los espacios o filtrar por tipo
- **Tarjetas de espacios** con:
  - Imagen o icono representativo
  - Nombre del espacio
  - Descripción breve
  - Precio por hora
  - Capacidad (personas)
  - Botón "Reservar Ahora"

**Cómo usar:**
1. Explora los espacios disponibles
2. Usa los botones de filtro para ver solo Pádel, Fútbol o Salones
3. Haz clic en cualquier tarjeta para ver los detalles

### 2. Detalles del Espacio y Reserva

Al hacer clic en un espacio, verás:
- **Información completa** del espacio
- **Imagen grande** o icono
- **Precio y capacidad** destacados
- **Botón "Hacer una Reserva"** que despliega el formulario

**Formulario de Reserva:**
1. **Fecha**: Selecciona la fecha (hasta 30 días adelante)
2. **Hora de Inicio**: Elige entre 08:00 y 22:00
   - Los horarios ocupados aparecen marcados como "(Ocupado)"
3. **Hora de Fin**: Se filtran automáticamente según disponibilidad
4. **Datos del Cliente**:
   - Nombre completo (requerido)
   - Teléfono (requerido)
   - Email (opcional)

**Resumen Automático:**
- Mientras completas el formulario, verás un resumen con:
  - Fecha formateada
  - Horario seleccionado
  - Duración en horas
  - **Precio total calculado automáticamente**

**Confirmar Reserva:**
- Haz clic en "Confirmar Reserva"
- Verás una confirmación
- Serás redirigido a "Mis Reservas"

### 3. Mis Reservas

En esta página verás todas tus reservas:

**Información mostrada:**
- Icono del tipo de espacio
- Nombre del espacio
- Estado (Confirmada/Cancelada)
- Fecha de la reserva
- Horario
- Precio total
- Tus datos de contacto
- Fecha de creación de la reserva

**Acciones disponibles:**
- **Cancelar Reserva**: Solo para reservas confirmadas
  - Aparece un botón rojo "Cancelar Reserva"
  - Se solicita confirmación antes de cancelar
  - La reserva pasa a estado "Cancelada"

### 4. Sistema de Disponibilidad

El sistema verifica automáticamente:
- ✅ **Horarios disponibles**: Puedes reservar
- ❌ **Horarios ocupados**: Marcados como "(Ocupado)"
- 🔒 **Bloqueo de conflictos**: No puedes reservar horarios que se superpongan

**Ejemplo:**
- Si hay una reserva de 10:00 a 12:00
- No podrás seleccionar 10:00, 11:00 como hora de inicio
- Si seleccionas 09:00 como inicio, solo podrás elegir hasta 10:00 como fin

## Datos Incluidos

La aplicación viene con 8 espacios pre-configurados:

### Canchas de Pádel
1. **Cancha de Pádel Premium** - $25/hora
2. **Cancha de Pádel Estándar** - $18/hora

### Canchas de Fútbol
3. **Cancha de Fútbol 11** - $60/hora (22 personas)
4. **Cancha de Fútbol 7** - $35/hora (14 personas)
5. **Cancha de Fútbol 5** - $25/hora (10 personas)

### Salones de Eventos
6. **Salón de Eventos Grande** - $100/hora (200 personas)
7. **Salón de Eventos Mediano** - $60/hora (80 personas)
8. **Salón VIP** - $80/hora (50 personas)

## Persistencia de Datos

- **Almacenamiento Local**: Todas las reservas se guardan en el navegador
- **Datos persistentes**: Tus reservas permanecen aunque cierres el navegador
- **Sin cuenta necesaria**: No necesitas crear una cuenta para usar el sistema

**Nota:** Si borras los datos del navegador, perderás las reservas guardadas.

## Casos de Uso

### Caso 1: Reservar una cancha de pádel
1. Ir a Inicio
2. Filtrar por "Pádel" (opcional)
3. Hacer clic en "Cancha de Pádel Premium"
4. Clic en "Hacer una Reserva"
5. Seleccionar fecha: Mañana
6. Hora de inicio: 18:00
7. Hora de fin: 20:00
8. Llenar datos personales
9. Confirmar reserva
10. Ver confirmación en "Mis Reservas"

### Caso 2: Reservar un salón para evento
1. Ir a Inicio
2. Filtrar por "Salones"
3. Hacer clic en "Salón de Eventos Grande"
4. Revisar capacidad (200 personas)
5. Clic en "Hacer una Reserva"
6. Seleccionar fecha del evento
7. Seleccionar horario (ej: 14:00 a 22:00)
8. Ver precio total calculado (8 horas × $100 = $800)
9. Confirmar reserva

### Caso 3: Cancelar una reserva
1. Ir a "Mis Reservas"
2. Encontrar la reserva a cancelar
3. Hacer clic en "Cancelar Reserva" (botón rojo)
4. Confirmar la cancelación
5. La reserva cambia a estado "Cancelada"

## Consejos y Mejores Prácticas

### Para Usuarios
- ✅ Reserva con anticipación para asegurar disponibilidad
- ✅ Verifica bien la fecha y horario antes de confirmar
- ✅ Guarda tu número de teléfono correctamente para contacto
- ✅ Revisa "Mis Reservas" antes de hacer una nueva reserva

### Para Administradores
- 📝 Puedes agregar más espacios editando `src/data/initialData.ts`
- ⏰ Puedes cambiar los horarios disponibles en `src/pages/VenueDetails.tsx`
- 🎨 Personaliza colores en `tailwind.config.js`
- 💾 Para producción, considera agregar un backend real

## Limitaciones Actuales

- ❌ No hay autenticación de usuarios
- ❌ No hay panel de administración
- ❌ No hay pagos integrados
- ❌ No hay notificaciones por email/SMS
- ❌ Los datos se pierden si se borran los datos del navegador

## Próximas Mejoras Sugeridas

1. **Backend con Base de Datos**
   - PostgreSQL o MongoDB
   - API REST con Node.js/Express

2. **Autenticación**
   - Login con email/contraseña
   - Autenticación con Google/Facebook

3. **Panel de Administración**
   - Gestionar espacios
   - Ver todas las reservas
   - Estadísticas y reportes

4. **Notificaciones**
   - Email de confirmación
   - SMS recordatorio
   - Notificaciones push

5. **Pagos**
   - Integración con Stripe/MercadoPago
   - Pagos con tarjeta
   - Generación de facturas

6. **Características Adicionales**
   - Sistema de calificaciones
   - Fotos de los espacios
   - Mapa de ubicación
   - Descuentos y promociones
   - Reservas recurrentes

## Soporte Técnico

Si tienes problemas:
1. Revisa `INSTALACION.md` para problemas de instalación
2. Revisa `README.md` para información técnica
3. Verifica la consola del navegador (F12) para errores
4. Asegúrate de tener la última versión de Node.js

## Personalización

### Cambiar el nombre de la aplicación
Edita `src/App.tsx` línea 17:
```tsx
<span className="text-2xl font-bold text-primary-600">TuNombre</span>
```

### Cambiar colores principales
Edita `tailwind.config.js` en la sección `colors.primary`

### Agregar más espacios
Edita `src/data/initialData.ts` y agrega nuevos objetos al array

### Modificar horarios
Edita `src/pages/VenueDetails.tsx` función `generateTimeSlots()`
