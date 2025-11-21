const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

// Ensure public directory exists
const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

// Create a document
const doc = new PDFDocument({ margin: 50, size: 'A4' });

// Pipe its output somewhere, like to a file or HTTP response
doc.pipe(fs.createWriteStream(path.join(publicDir, 'guia-cuidado-dental.pdf')));

// Colors
const PRIMARY_COLOR = '#507374';
const TEXT_COLOR = '#2a3536';
const ACCENT_COLOR = '#0ea5e9';
const LIGHT_BG = '#f0f4f4';

// Helper function for section headers
function addSectionHeader(title) {
  doc.moveDown(1.5);
  doc.font('Helvetica-Bold')
     .fontSize(18)
     .fillColor(PRIMARY_COLOR)
     .text(title);
  doc.moveDown(0.5);
  doc.strokeColor(PRIMARY_COLOR)
     .lineWidth(2)
     .moveTo(50, doc.y)
     .lineTo(550, doc.y)
     .stroke();
  doc.moveDown(0.5);
}

// Helper for body text
function addBodyText(text) {
  doc.font('Helvetica')
     .fontSize(11)
     .fillColor(TEXT_COLOR)
     .text(text, {
       align: 'justify',
       lineGap: 2
     });
  doc.moveDown(0.5);
}

// Helper for list items
function addListItem(text) {
  doc.font('Helvetica')
     .fontSize(11)
     .fillColor(TEXT_COLOR)
     .text('• ' + text, {
       indent: 10,
       align: 'left',
       lineGap: 2
     });
  doc.moveDown(0.2);
}

// --- CONTENT GENERATION ---

// Header / Title Page
doc.rect(0, 0, 600, 150).fill(PRIMARY_COLOR);
doc.moveDown(2);
doc.font('Helvetica-Bold')
   .fontSize(30)
   .fillColor('white')
   .text('Guía de Cuidado Dental', { align: 'center' });
doc.fontSize(20)
   .text('Para Mascotas', { align: 'center' });
doc.moveDown(1);
doc.fontSize(14)
   .text('DentalVets', { align: 'center' });

doc.moveDown(4);

// Introduction
addSectionHeader('¿Por qué es importante la salud dental?');
addBodyText('La salud dental es fundamental para el bienestar general de tu mascota. Al igual que en los humanos, la acumulación de placa y sarro puede llevar a enfermedades periodontales, mal aliento, dolor al comer e incluso problemas más graves que afectan órganos vitales como el corazón, el hígado y los riñones.');
addBodyText('Mantener una boca sana no solo mejora la calidad de vida de tu perro o gato, sino que también puede prolongar su esperanza de vida.');

// Daily Care Tips
addSectionHeader('Consejos para el Cuidado Diario');
addBodyText('La prevención es la clave. Aquí tienes algunos consejos prácticos para mantener la sonrisa de tu mascota brillante y saludable:');

addListItem('Cepillado regular: Lo ideal es cepillar los dientes de tu mascota diariamente, o al menos 3 veces por semana.');
addListItem('Usa productos adecuados: Nunca uses pasta dental para humanos, ya que puede ser tóxica. Utiliza cepillos y pastas diseñados específicamente para perros o gatos.');
addListItem('Revisión constante: Levanta los labios de tu mascota regularmente para inspeccionar sus dientes y encías. Busca enrojecimiento, inflamación o mal olor.');
addListItem('Alimentación balanceada: Una dieta de alta calidad contribuye a la salud dental. Algunos alimentos secos están formulados para ayudar a limpiar los dientes mecánicamente.');
addListItem('Juguetes y snacks dentales: Proporciona juguetes seguros para masticar y snacks dentales que ayuden a reducir la acumulación de sarro.');

// Signs of Problems
addSectionHeader('Señales de Alerta');
addBodyText('Si notas alguno de los siguientes síntomas, es hora de visitar a un especialista:');

addListItem('Mal aliento persistente (halitosis).');
addListItem('Encías rojas, inflamadas o sangrantes.');
addListItem('Dificultad para comer o masticar (dejar caer comida, masticar de un solo lado).');
addListItem('Dientes flojos o rotos.');
addListItem('Exceso de salivación.');
addListItem('Cambios en el comportamiento (irritabilidad, depresión).');
addListItem('Frotarse la cara contra muebles o el suelo.');

// Professional Cleaning
addSectionHeader('Limpieza Profesional DentalVets');
addBodyText('Incluso con un buen cuidado en casa, es necesaria una limpieza profesional periódica. En DentalVets ofrecemos un servicio único y especializado:');

addListItem('Sin Anestesia General: Utilizamos técnicas seguras y amables que no requieren sedación profunda, reduciendo riesgos.');
addListItem('Tecnología de Ultrasonido: Limpieza profunda supra y subgingival sin lastimar el esmalte.');
addListItem('Sin Curetas: Evitamos herramientas que puedan dañar la superficie del diente.');
addListItem('Servicio a Domicilio: Para mayor comodidad y tranquilidad de tu mascota.');
addListItem('Resultados Inmediatos: Dientes limpios y aliento fresco en aproximadamente 2 horas.');

// Products
addSectionHeader('Productos Recomendados');
addBodyText('Para complementar el cuidado profesional, recomendamos:');

addListItem('Cepillos Dentales con Gel: Fáciles de usar, con cerdas suaves y gel antibacteriano.');
addListItem('Snacks Naturales: Como patas de pollo deshidratadas, que ayudan a la limpieza mecánica de forma deliciosa.');

// Footer / Contact
doc.addPage();

doc.rect(0, 0, 600, 850).fill(LIGHT_BG);
doc.y = 300;

doc.font('Helvetica-Bold')
   .fontSize(24)
   .fillColor(PRIMARY_COLOR)
   .text('¡Agenda tu cita hoy!', { align: 'center' });

doc.moveDown(1);
doc.font('Helvetica')
   .fontSize(14)
   .fillColor(TEXT_COLOR)
   .text('Cuida la sonrisa de tu mejor amigo con los expertos.', { align: 'center' });

doc.moveDown(2);
doc.font('Helvetica-Bold')
   .fontSize(16)
   .text('Contacto y Reservas:', { align: 'center' });

doc.moveDown(0.5);
doc.font('Helvetica')
   .fontSize(14)
   .text('WhatsApp: +57 315 034 0084', { align: 'center' });
doc.text('Web: www.dentalvets.com', { align: 'center' }); // Assuming URL based on context, or placeholder

doc.moveDown(4);
doc.fontSize(10)
   .fillColor('#888888')
   .text('© 2025 DentalVets. Todos los derechos reservados.', { align: 'center' });

// Finalize PDF file
doc.end();

console.log('PDF generado exitosamente en public/guia-cuidado-dental.pdf');
