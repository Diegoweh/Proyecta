import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white">

      {/* CTA Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-red-500 mb-4">¿Cuándo iniciamos?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Estamos listos para impulsar tu marca al siguiente nivel. Contáctanos y comencemos a trabajar juntos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hola@proyecta.com.mx"
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Enviar Email
              </a>
              <a
                href="#"
                className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>


      {/* Footer Content */}
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              {/* Logo Placeholder */}
              <div className="flex items-center justify-center mb-6">
                <img
                title="Logo"
                src="/img/logos/logo_rojo.png"
                alt="Logo Proyecta"
                className="object-contain w-[75px] md:w-[90px] h-auto"
                />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Agencia de marketing digital especializada en estrategias innovadoras para el crecimiento de tu marca.
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-red-500 font-bold text-lg mb-4">SERVICIOS</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                  Branding
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                  Diseño Web
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                  Marketing Digital
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                  SEO
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                  Redes Sociales
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                  Eventos
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-red-500 font-bold text-lg mb-4">EMPRESA</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                  Portafolio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                  Aviso de Privacidad
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-red-500 font-bold text-lg mb-4">CONTACTO</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+526699869090" className="text-gray-300 hover:text-red-500 transition-colors">
                    +52 (669) 986 9090
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="mailto:hola@proyecta.com.mx" className="text-gray-300 hover:text-red-500 transition-colors">
                    hola@proyecta.com.mx
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                    WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>Cerro de la Colorada 143</p>
                  <p>Fracc. Lomas de Mazatlán</p>
                  <p>C.P. 82110, Mazatlán, Sinaloa</p>
                  <p>México</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2024 Proyecta. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                Términos y Condiciones
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                Política de Privacidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
