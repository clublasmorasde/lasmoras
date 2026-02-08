# Sistema de Gestión de Reservas

Aplicación web moderna para gestionar reservas de canchas de pádel, fútbol y salones de eventos.

## Características

- **Múltiples tipos de espacios**: Canchas de pádel, fútbol y salones de eventos
- **Sistema de reservas en tiempo real**: Visualización de horarios disponibles
- **Gestión de reservas**: Ver, confirmar y cancelar reservas
- **Interfaz moderna**: Diseño responsive con Tailwind CSS
- **Persistencia de datos**: Almacenamiento local con localStorage

## Tecnologías Utilizadas

- **React 18** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **React Router** - Navegación
- **Tailwind CSS** - Estilos
- **date-fns** - Manejo de fechas

## Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Iniciar el servidor de desarrollo:
```bash
npm run dev
```

3. Abrir en el navegador:
```
http://localhost:5173
```

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Genera el build de producción
- `npm run preview` - Previsualiza el build de producción

## Estructura del Proyecto

```
reservas-app/
├── src/
│   ├── components/        # Componentes reutilizables
│   ├── context/          # Context API (estado global)
│   ├── data/             # Datos iniciales
│   ├── pages/            # Páginas de la aplicación
│   ├── types/            # Definiciones de TypeScript
│   ├── App.tsx           # Componente principal
│   ├── main.tsx          # Punto de entrada
│   └── index.css         # Estilos globales
├── public/               # Archivos estáticos
├── index.html            # HTML principal
├── package.json          # Dependencias y scripts
├── tsconfig.json         # Configuración de TypeScript
├── vite.config.ts        # Configuración de Vite
└── tailwind.config.js    # Configuración de Tailwind
```

## Funcionalidades

### Página Principal
- Visualización de todos los espacios disponibles
- Filtrado por tipo (Pádel, Fútbol, Salones)
- Información detallada de cada espacio

### Detalles del Espacio
- Información completa del espacio
- Formulario de reserva
- Selección de fecha y horario
- Validación de disponibilidad en tiempo real
- Cálculo automático del precio

### Mis Reservas
- Lista de todas las reservas realizadas
- Estado de cada reserva (Confirmada, Cancelada)
- Opción para cancelar reservas activas
- Información detallada de cada reserva

## Datos Iniciales

La aplicación viene con 8 espacios pre-configurados:
- 2 canchas de pádel
- 3 canchas de fútbol (11, 7 y 5 jugadores)
- 3 salones de eventos (Grande, Mediano, VIP)

## Personalización

### Agregar más espacios
Edita el archivo `src/data/initialData.ts` para agregar más espacios.

### Modificar horarios
En `src/pages/VenueDetails.tsx`, modifica la función `generateTimeSlots()` para cambiar los horarios disponibles.

### Cambiar colores
Edita `tailwind.config.js` para personalizar la paleta de colores.

## Próximas Mejoras

- [ ] Backend con base de datos real
- [ ] Autenticación de usuarios
- [ ] Panel de administración
- [ ] Notificaciones por email/SMS
- [ ] Pagos en línea
- [ ] Sistema de calificaciones
- [ ] Reportes y estadísticas

## Licencia

MIT
