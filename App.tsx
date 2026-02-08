import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { ReservationProvider } from './context/ReservationContext';
import Home from './pages/Home';
import VenueDetails from './pages/VenueDetails';
import MyReservations from './pages/MyReservations';
import AdminDashboard from './pages/AdminDashboard';
import Shop from './pages/Shop';
import ChatWidget from './components/ChatWidget';
import WhatsAppButtons from './components/WhatsAppButtons';

// Componente de Botón Admin Protegido
const AdminAccessButton = () => {
  const navigate = useNavigate();

  const handleAdminAccess = () => {
    const user = prompt("Usuario de Administrador:");
    const pass = prompt("Contraseña:");

    // Validación con las credenciales solicitadas
    if (user === "JORS" && pass === "FIRULAIS") {
      navigate('/admin');
    } else {
      alert("Acceso denegado. Credenciales incorrectas.");
    }
  };

  return (
    <button
      onClick={handleAdminAccess}
      className="px-8 py-3 bg-primary-950 text-accent-500 text-[10px] font-black uppercase tracking-[0.3em] rounded-sm hover:bg-black transition-all shadow-xl border border-accent-600/30"
    >
      Acceso Admin
    </button>
  );
};

function App() {
  return (
    <ReservationProvider>
      <Router>
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
          {/* Nav: Elegante con Verde Inglés y acentos Dorados */}
          <nav className="bg-white/90 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-20">
                <Link to="/" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-primary-900 rounded-full flex items-center justify-center text-accent-600 group-hover:scale-105 transition-transform shadow-xl border-2 border-accent-600/30">
                    <span className="text-3xl logo-font italic">LM</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-black logo-font tracking-tight leading-none">Las Moras</span>
                    <span className="text-accent-700 text-[10px] uppercase tracking-[0.3em] mt-1.5 font-bold">Reservas Online</span>
                  </div>
                </Link>

                <div className="hidden md:flex items-center space-x-12">
                  <Link to="/" className="group relative text-[11px] font-black uppercase tracking-[0.4em] text-black hover:text-accent-700 transition-colors">
                    Colección
                  </Link>
                  <Link to="/?deporte=padel" className="group relative text-[11px] font-black uppercase tracking-[0.4em] text-black hover:text-accent-700 transition-colors">
                    Deportes
                  </Link>
                  <Link to="/?deporte=salon400" className="group relative text-[11px] font-black uppercase tracking-[0.4em] text-black hover:text-accent-700 transition-colors">
                    Eventos
                  </Link>
                  <Link to="/mis-reservas" className="group relative text-[11px] font-black uppercase tracking-[0.4em] text-black hover:text-accent-700 transition-colors">
                    Mis Reservas
                  </Link>
                  <Link to="/shop" className="group relative text-[11px] font-black uppercase tracking-[0.4em] text-black hover:text-accent-700 transition-colors">
                    Tienda
                  </Link>
                </div>

                <div className="flex items-center">
                  <AdminAccessButton />
                </div>
              </div>
            </div>
          </nav>

          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/venue/:id" element={<VenueDetails />} />
              <Route path="/mis-reservas" element={<MyReservations />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/shop" element={<Shop />} />
            </Routes>
          </main>

          <footer className="bg-white text-black/70 py-24 border-t border-slate-200">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mb-20">
                <div>
                  <h3 className="text-accent-700 logo-font text-5xl mb-8 italic">Las Moras</h3>
                  <p className="text-base leading-relaxed font-light text-black/80">
                    Símbolo de distinción en el deporte y eventos sociales. Nuestra misión es brindar un entorno de excelencia y exclusividad para cada uno de nuestros socios.
                  </p>
                </div>
                <div>
                  <h4 className="text-black font-black text-[11px] uppercase tracking-[0.4em] mb-8">Ubicación & Contacto</h4>
                  <ul className="text-sm space-y-6 font-medium">
                    <li className="flex items-center gap-4">
                      <span className="text-accent-600 text-lg">📍</span>
                      <span>Av. del Trabajo 2850, Barrio Mariano Moreno</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <span className="text-accent-600 text-lg">📞</span>
                      <span>11 6413-6325</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <span className="text-accent-600 text-lg">✉️</span>
                      <span>negocios@tradingco.com.ar</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-black font-black text-[11px] uppercase tracking-[0.4em] mb-8">Distintivos</h4>
                  {/* NUEVO LEMA APLICADO AQUÍ */}
                  <p className="text-base font-light mb-6 italic text-black border-l border-accent-600 pl-6 leading-relaxed">
                    "Tu espacio de distinción y encuentro."
                  </p>
                  <div className="h-0.5 w-16 bg-accent-600"></div>
                </div>
              </div>
              
              <div className="border-t border-black/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-black/50">
                  © {new Date().getFullYear()} Club Las Moras. Excellence & Tradition.
                </p>
                <div className="flex gap-8 items-center">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/30 italic">Síguenos en</span>
                  <a
                    href="https://www.facebook.com/clublasmoras.sde"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-black/5 border border-black/10 rounded-full flex items-center justify-center text-accent-700 hover:bg-accent-600 hover:text-white transition-all group"
                  >
                    <span className="text-xl group-hover:scale-110 transition-transform font-serif italic">f</span>
                  </a>
                </div>
              </div>
            </div>
          </footer>
          <WhatsAppButtons />
          <ChatWidget />
        </div>
      </Router>
    </ReservationProvider>
  );
}

export default App;