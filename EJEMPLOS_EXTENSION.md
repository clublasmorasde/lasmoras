# Ejemplos de Extensión

Esta guía muestra cómo extender y personalizar la aplicación de reservas.

## 1. Agregar Nuevos Espacios

### Editar: `src/data/initialData.ts`

```typescript
// Agregar al final del array initialVenues:
{
  id: '9',
  name: 'Cancha de Tenis',
  type: 'padel', // Reutilizamos el tipo o creamos uno nuevo
  description: 'Cancha de tenis profesional con superficie de arcilla.',
  pricePerHour: 30,
  capacity: 4,
  imageUrl: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8',
  available: true,
}
```

## 2. Agregar Nuevo Tipo de Espacio

### Paso 1: Actualizar tipos en `src/types/index.ts`

```typescript
// Cambiar:
export type VenueType = 'padel' | 'futbol' | 'salon';

// Por:
export type VenueType = 'padel' | 'futbol' | 'salon' | 'tenis';
```

### Paso 2: Actualizar funciones en componentes

En `src/pages/Home.tsx`, agregar:

```typescript
// En getTypeLabel:
const labels = {
  padel: 'Pádel',
  futbol: 'Fútbol',
  salon: 'Salón de Eventos',
  tenis: 'Tenis' // Nuevo
};

// En getTypeIcon:
const icons = {
  padel: '🎾',
  futbol: '⚽',
  salon: '🎉',
  tenis: '🎾' // Nuevo
};
```

### Paso 3: Agregar botón de filtro

En `src/pages/Home.tsx`, agregar después de los otros botones:

```typescript
<button
  onClick={() => setSelectedType('tenis')}
  className={`px-6 py-2 rounded-full font-medium transition-colors ${
    selectedType === 'tenis'
      ? 'bg-primary-600 text-white'
      : 'bg-white text-gray-700 hover:bg-gray-100'
  }`}
>
  🎾 Tenis
</button>
```

## 3. Cambiar Horarios Disponibles

### Editar: `src/pages/VenueDetails.tsx`

```typescript
// Cambiar función generateTimeSlots:

// Horario extendido (6 AM a 11 PM):
const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 6; hour <= 23; hour++) {
    slots.push(`${hour.toString().padStart(2, '0')}:00`);
  }
  return slots;
};

// Horarios cada 30 minutos:
const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 8; hour <= 22; hour++) {
    slots.push(`${hour.toString().padStart(2, '0')}:00`);
    slots.push(`${hour.toString().padStart(2, '0')}:30`);
  }
  return slots;
};
```

## 4. Agregar Campo Adicional al Formulario

### Paso 1: Actualizar tipos en `src/types/index.ts`

```typescript
export interface Reservation {
  id: string;
  venueId: string;
  venueName: string;
  venueType: VenueType;
  date: string;
  startTime: string;
  endTime: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  numberOfPeople?: number; // Nuevo campo
  specialRequests?: string; // Nuevo campo
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}
```

### Paso 2: Agregar estado en `src/pages/VenueDetails.tsx`

```typescript
const [numberOfPeople, setNumberOfPeople] = useState(1);
const [specialRequests, setSpecialRequests] = useState('');
```

### Paso 3: Agregar campos al formulario

```typescript
<div>
  <label className="block text-sm font-medium text-gray-700 mb-2">
    Número de Personas
  </label>
  <input
    type="number"
    min="1"
    max={venue.capacity}
    value={numberOfPeople}
    onChange={(e) => setNumberOfPeople(parseInt(e.target.value))}
    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
  />
</div>

<div className="md:col-span-2">
  <label className="block text-sm font-medium text-gray-700 mb-2">
    Solicitudes Especiales
  </label>
  <textarea
    value={specialRequests}
    onChange={(e) => setSpecialRequests(e.target.value)}
    rows={3}
    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
    placeholder="Ej: Necesito proyector, decoración especial, etc."
  />
</div>
```

### Paso 4: Incluir en la reserva

```typescript
addReservation({
  venueId: venue.id,
  venueName: venue.name,
  venueType: venue.type,
  date: selectedDate,
  startTime: selectedStartTime,
  endTime: selectedEndTime,
  customerName,
  customerPhone,
  customerEmail,
  numberOfPeople, // Nuevo
  specialRequests, // Nuevo
  totalPrice,
  status: 'confirmed',
});
```

## 5. Agregar Sistema de Descuentos

### En `src/pages/VenueDetails.tsx`

```typescript
const calculatePrice = () => {
  if (!selectedStartTime || !selectedEndTime) return 0;
  const start = parseInt(selectedStartTime.split(':')[0]);
  const end = parseInt(selectedEndTime.split(':')[0]);
  const hours = end - start;
  let price = hours * venue.pricePerHour;
  
  // Descuento por reservas largas (más de 4 horas)
  if (hours >= 4) {
    price = price * 0.9; // 10% de descuento
  }
  
  // Descuento por reservas de madrugada (antes de 10 AM)
  if (start < 10) {
    price = price * 0.85; // 15% de descuento
  }
  
  return Math.round(price);
};
```

## 6. Agregar Búsqueda de Espacios

### En `src/pages/Home.tsx`

```typescript
// Agregar estado:
const [searchTerm, setSearchTerm] = useState('');

// Actualizar filtrado:
const filteredVenues = venues.filter(v => {
  const matchesType = selectedType === 'all' || v.type === selectedType;
  const matchesSearch = v.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        v.description.toLowerCase().includes(searchTerm.toLowerCase());
  return matchesType && matchesSearch;
});

// Agregar input de búsqueda antes de los filtros:
<div className="max-w-md mx-auto mb-6">
  <input
    type="text"
    placeholder="Buscar espacios..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
  />
</div>
```

## 7. Agregar Ordenamiento

### En `src/pages/Home.tsx`

```typescript
// Agregar estado:
const [sortBy, setSortBy] = useState<'name' | 'price'>('name');

// Agregar función de ordenamiento:
const sortedVenues = [...filteredVenues].sort((a, b) => {
  if (sortBy === 'name') {
    return a.name.localeCompare(b.name);
  } else {
    return a.pricePerHour - b.pricePerHour;
  }
});

// Agregar selector:
<div className="flex justify-end mb-4">
  <select
    value={sortBy}
    onChange={(e) => setSortBy(e.target.value as 'name' | 'price')}
    className="px-4 py-2 border border-gray-300 rounded-lg"
  >
    <option value="name">Ordenar por Nombre</option>
    <option value="price">Ordenar por Precio</option>
  </select>
</div>

// Usar sortedVenues en lugar de filteredVenues en el map
```

## 8. Agregar Validación de Horarios Mínimos

### En `src/pages/VenueDetails.tsx`

```typescript
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  
  // Validar duración mínima (ej: 1 hora)
  const start = parseInt(selectedStartTime.split(':')[0]);
  const end = parseInt(selectedEndTime.split(':')[0]);
  const hours = end - start;
  
  if (hours < 1) {
    alert('La reserva debe ser de al menos 1 hora');
    return;
  }
  
  // Resto del código...
};
```

## 9. Agregar Exportación de Reservas

### En `src/pages/MyReservations.tsx`

```typescript
const exportToCSV = () => {
  const headers = ['Espacio', 'Fecha', 'Hora Inicio', 'Hora Fin', 'Total', 'Estado'];
  const rows = reservations.map(r => [
    r.venueName,
    r.date,
    r.startTime,
    r.endTime,
    r.totalPrice,
    r.status
  ]);
  
  const csv = [
    headers.join(','),
    ...rows.map(row => row.join(','))
  ].join('\n');
  
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'mis-reservas.csv';
  a.click();
};

// Agregar botón:
<button
  onClick={exportToCSV}
  className="mb-4 px-4 py-2 bg-primary-600 text-white rounded-lg"
>
  Exportar a CSV
</button>
```

## 10. Agregar Modo Oscuro

### Paso 1: Configurar Tailwind en `tailwind.config.js`

```javascript
module.exports = {
  darkMode: 'class',
  // resto de la configuración...
}
```

### Paso 2: Crear hook en `src/hooks/useDarkMode.ts`

```typescript
import { useState, useEffect } from 'react';

export const useDarkMode = () => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved === 'true';
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', isDark.toString());
  }, [isDark]);

  return [isDark, setIsDark] as const;
};
```

### Paso 3: Agregar toggle en `src/App.tsx`

```typescript
const [isDark, setIsDark] = useDarkMode();

// Agregar botón en el nav:
<button
  onClick={() => setIsDark(!isDark)}
  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
>
  {isDark ? '☀️' : '🌙'}
</button>
```

## 11. Conectar con Backend

### Ejemplo con API REST

```typescript
// src/services/api.ts
const API_URL = 'http://localhost:3000/api';

export const api = {
  // Obtener espacios
  getVenues: async () => {
    const response = await fetch(`${API_URL}/venues`);
    return response.json();
  },
  
  // Crear reserva
  createReservation: async (reservation: Omit<Reservation, 'id' | 'createdAt'>) => {
    const response = await fetch(`${API_URL}/reservations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reservation),
    });
    return response.json();
  },
  
  // Obtener reservas
  getReservations: async () => {
    const response = await fetch(`${API_URL}/reservations`);
    return response.json();
  },
  
  // Cancelar reserva
  cancelReservation: async (id: string) => {
    const response = await fetch(`${API_URL}/reservations/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'cancelled' }),
    });
    return response.json();
  },
};
```

### Actualizar Context para usar API

```typescript
// En src/context/ReservationContext.tsx
import { api } from '../services/api';

// Cambiar useState por useEffect con fetch:
useEffect(() => {
  api.getVenues().then(setVenues);
  api.getReservations().then(setReservations);
}, []);

// Actualizar addReservation:
const addReservation = async (reservation: Omit<Reservation, 'id' | 'createdAt'>) => {
  const newReservation = await api.createReservation(reservation);
  setReservations([...reservations, newReservation]);
};
```

## Recursos Adicionales

- **React Router**: https://reactrouter.com/
- **Tailwind CSS**: https://tailwindcss.com/docs
- **date-fns**: https://date-fns.org/
- **TypeScript**: https://www.typescriptlang.org/docs/
- **Vite**: https://vitejs.dev/guide/
