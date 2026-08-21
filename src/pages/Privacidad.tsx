import { Container } from "../components/layout/Container";
import { Typography } from "../components/ui/Typography";

const Privacidad = () => {
  return (
    <div className="pb-24">
      <section className="pt-20 pb-16 bg-surface/30 border-b border-white/5">
        <Container>
          <div className="max-w-3xl">
            <Typography variant="heading1" className="mb-6">
              Aviso de <span className="text-primary">Privacidad</span>
            </Typography>
            <Typography variant="body" className="text-text-muted text-xl">
              Última actualización: Agosto 2026
            </Typography>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="max-w-4xl space-y-12">
            
            <div className="space-y-4">
              <Typography variant="heading3">1. Identidad y domicilio del Responsable</Typography>
              <Typography variant="body" className="text-text-muted">
                SER-PRO (en adelante, "la Consultora" o "Nosotros"), con domicilio en Cancún, México, es responsable del tratamiento y protección de sus datos personales, en estricto apego a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).
              </Typography>
            </div>

            <div className="space-y-4">
              <Typography variant="heading3">2. Datos Personales que recabamos</Typography>
              <Typography variant="body" className="text-text-muted">
                Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, recabaremos los siguientes datos personales:
              </Typography>
              <ul className="list-disc list-inside text-text-muted space-y-2">
                <li>Datos de identificación (Nombre, Empresa).</li>
                <li>Datos de contacto (Correo electrónico, Teléfono).</li>
                <li>Información sobre los servicios de interés (Frontend, Backend, QA, Testing).</li>
              </ul>
              <Typography variant="body" className="text-text-muted">
                Hacemos de su conocimiento que SER-PRO no recaba datos personales considerados como sensibles según la LFPDPPP.
              </Typography>
            </div>

            <div className="space-y-4">
              <Typography variant="heading3">3. Finalidades del Tratamiento de Datos</Typography>
              <Typography variant="body" className="text-text-muted">
                Sus datos personales serán utilizados para las siguientes finalidades principales, necesarias para el servicio que solicita:
              </Typography>
              <ul className="list-disc list-inside text-text-muted space-y-2">
                <li>Proveer los servicios de consultoría IT, desarrollo y testing solicitados.</li>
                <li>Responder a consultas, cotizaciones o solicitudes de contacto.</li>
                <li>Gestión de la relación comercial, administrativa y de facturación.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <Typography variant="heading3">4. Transferencia de Datos Personales</Typography>
              <Typography variant="body" className="text-text-muted">
                Nos comprometemos a no transferir su información personal a terceros sin su consentimiento, con excepción de las situaciones previstas en el artículo 37 de la LFPDPPP, así como a realizar dicha transferencia en los términos que fija esa ley (por ejemplo, a proveedores de infraestructura cloud estrictamente necesarios para el alojamiento de los datos, quienes asumen las mismas obligaciones de confidencialidad).
              </Typography>
            </div>

            <div className="space-y-4">
              <Typography variant="heading3">5. Ejercicio de los Derechos ARCO</Typography>
              <Typography variant="body" className="text-text-muted">
                Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal si está desactualizada (Rectificación); que la eliminemos de nuestros registros o bases de datos (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición). Estos derechos se conocen como ARCO.
              </Typography>
              <Typography variant="body" className="text-text-muted">
                Para el ejercicio de cualquiera de los derechos ARCO, usted deberá presentar la solicitud respectiva a través del correo electrónico: <strong>servicio.consultoria.mx@gmail.com</strong>
              </Typography>
            </div>

            <div className="space-y-4">
              <Typography variant="heading3">6. Medidas de Seguridad (SGSI)</Typography>
              <Typography variant="body" className="text-text-muted">
                SER-PRO ha implementado y mantiene medidas de seguridad administrativas, técnicas y físicas, de acuerdo con los estándares internacionales en Sistemas de Gestión de Seguridad de la Información (SGSI), para proteger sus datos personales contra daño, pérdida, alteración, destrucción o el uso, acceso o tratamiento no autorizado.
              </Typography>
            </div>

            <div className="space-y-4">
              <Typography variant="heading3">7. Cambios al Aviso de Privacidad</Typography>
              <Typography variant="body" className="text-text-muted">
                El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales, de nuestras propias necesidades por los servicios que ofrecemos, o por cambios en nuestro modelo de negocio. Nos comprometemos a mantenerlo informado sobre los cambios que pueda sufrir este aviso a través de esta misma página web.
              </Typography>
            </div>

          </div>
        </Container>
      </section>
    </div>
  );
};

export default Privacidad;
