# DentalVets - Página Web Profesional

Página web estática para DentalVets, un servicio especializado en profilaxis dental para perros sin anestesia, sin curetas y con atención a domicilio.

## 🐕 Características Principales

- **Landing Page Atractiva**: Hero section con call-to-action claro y beneficios destacados
- **Página de Servicios**: Detalle completo del proceso de profilaxis dental con casos antes/después
- **Catálogo de Productos**: Productos complementarios para el cuidado dental en casa
- **Página de Contacto**: Formulario funcional con EmailJS para contacto directo
- **Equipo Profesional**: Presentación de las veterinarias Camila y Ana
- **SEO Optimizado**: Meta tags, sitemap, robots.txt y estructura semántica
- **Responsive Design**: Diseño adaptativo para todos los dispositivos
- **Animaciones Interactivas**: Efectos suaves con Framer Motion
- **Paleta de Colores Personalizada**: Basada en los colores del logo (r109 g146 b147 y blanco)

## 🛠️ Tecnologías Utilizadas

- **Next.js 15**: Framework React con App Router
- **TypeScript**: Tipado estático para mayor robustez
- **Tailwind CSS**: Framework de utilidades CSS
- **Framer Motion**: Animaciones fluidas y atractivas
- **Lucide React**: Iconos modernos y escalables
- **EmailJS**: Envío de formularios sin backend

## 🎨 Paleta de Colores

```css
/* Colores principales basados en el logo */
primary-400: #6d9293 (r109 g146 b147)
primary-500: #507374
primary-600: #3f5a5b

/* Colores secundarios */
secondary: Escala de blancos y grises
accent: Azules complementarios para CTAs
```

## 🚀 Instalación y Desarrollo

1. **Clonar el repositorio**
```bash
git clone [repository-url]
cd detntal-vets/frontend
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en modo desarrollo**
```bash
npm run dev
```

4. **Construir para producción**
```bash
npm run build
npm start
```

## 📱 Páginas Incluidas

### 🏠 Página Principal (/)
- Hero section con propuesta de valor
- Estadísticas destacadas (500+ perros felices, 40min duración, etc.)
- Beneficios del servicio sin anestesia
- Proceso paso a paso
- Presentación del equipo (Dra. Camila y Dra. Ana)
- Call-to-actions estratégicos

### 🦷 Servicios (/servicios)
- Detalle completo del proceso de profilaxis
- Casos de éxito con antes/después
- Timeline del procedimiento de 40 minutos
- Beneficios vs métodos tradicionales
- Testimonios de clientes

### 🛍️ Productos (/productos)
- Catálogo de productos para cuidado dental
- Kit de cepillado, pastas dentales, snacks funcionales
- Precios y descuentos especiales
- Integración con WhatsApp para pedidos
- Consejos de cuidado dental diario

### 📞 Contacto (/contacto)
- Formulario de contacto con EmailJS
- Múltiples canales de comunicación
- Horarios de atención
- Área de servicio a domicilio
- Preguntas frecuentes
- Links a redes sociales

## 📧 Configuración del Formulario de Contacto

Para activar el formulario de contacto, configura EmailJS:

1. Crea una cuenta en [EmailJS](https://www.emailjs.com/)
2. Configura un servicio de email
3. Crea un template de email
4. Actualiza las credenciales en `/src/app/contacto/page.tsx`:

```typescript
const serviceId = 'tu_service_id';
const templateId = 'tu_template_id';  
const publicKey = 'tu_public_key';
```

## 🎯 Características de SEO

- Meta tags optimizados para cada página
- Open Graph y Twitter Cards
- Sitemap.xml automático
- Robots.txt configurado
- Estructura semántica HTML5
- Schema markup para negocio local
- URLs amigables
- Imágenes optimizadas con alt text

## 📊 Características de UX/UI

- **Diseño Profesional**: Colores corporativos y tipografía limpia
- **Animaciones Suaves**: Efectos de hover y scroll
- **Navegación Intuitiva**: Menú responsive con enlaces claros
- **CTAs Estratégicos**: Botones destacados para conversión
- **Carga Rápida**: Optimización de imágenes y código
- **Accesibilidad**: Contraste adecuado y navegación por teclado

## 📈 Funcionalidades de Conversión

- Múltiples CTAs hacia WhatsApp
- Botones de "Agendar cita gratuita"
- Formulario de contacto directo
- Enlaces a redes sociales
- Información de contacto visible
- Testimonios y casos de éxito

## 🔧 Personalización

### Cambiar Información de Contacto
Actualiza los datos en:
- `/src/components/Header.tsx`
- `/src/components/Footer.tsx`
- `/src/app/contacto/page.tsx`

### Modificar Colores
Edita la paleta en `/tailwind.config.ts`:
```typescript
colors: {
  primary: {
    // Tus colores personalizados
  }
}
```

### Agregar/Modificar Productos
Edita el array `products` en `/src/app/productos/page.tsx`

## 📱 Integraciones Sociales

- **WhatsApp**: Enlaces directos para consultas y pedidos
- **Instagram**: @dentalvets (configurable)
- **Facebook**: facebook.com/dentalvets (configurable)

## 🚀 Despliegue

### Vercel (Recomendado)
```bash
npm run build
npx vercel --prod
```

### Netlify
```bash
npm run build
npm run export  # Si usas static export
```

## 📝 Notas de Desarrollo

- Proyecto optimizado para rendimiento
- Componentes reutilizables y modulares
- TypeScript para mayor seguridad de tipos
- Configuración de ESLint incluida
- Responsive design mobile-first

## 🎨 Créditos de Diseño

- Iconos: Lucide React
- Animaciones: Framer Motion
- Paleta de colores: Basada en logo corporativo DentalVets
- Fotografías: Placeholders para fotos reales de antes/después

## 📞 Soporte

Para preguntas sobre el desarrollo o personalización:
- Email: desarrollo@dentalvets.com
- WhatsApp: +1 (234) 567-890

---

**DentalVets** - Cuidando la sonrisa de tu mejor amigo 🐕❤️
