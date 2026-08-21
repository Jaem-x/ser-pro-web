import { Container } from "../components/layout/Container";
import { Typography } from "../components/ui/Typography";

const Cookies = () => {
  return (
    <div className="pb-24">
      <section className="pt-20 pb-16 bg-surface/30 border-b border-white/5">
        <Container>
          <div className="max-w-3xl">
            <Typography variant="heading1" className="mb-6">
              Política de <span className="text-primary">Cookies</span>
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
              <Typography variant="heading3">1. ¿Qué son las Cookies?</Typography>
              <Typography variant="body" className="text-text-muted">
                Las cookies son pequeños archivos de texto que los sitios web que usted visita colocan en su ordenador, teléfono inteligente u otro dispositivo. Se utilizan ampliamente para hacer que los sitios web funcionen, o funcionen de manera más eficiente, así como para proporcionar información a los propietarios del sitio.
              </Typography>
            </div>

            <div className="space-y-4">
              <Typography variant="heading3">2. ¿Cómo utiliza SER-PRO las Cookies?</Typography>
              <Typography variant="body" className="text-text-muted">
                Utilizamos cookies para entender cómo interactúa con nuestro sitio web, mejorar su experiencia de usuario, mantener la seguridad técnica (por ejemplo, para el funcionamiento correcto de formularios de contacto conectados a nuestras bases de datos) y analizar nuestro tráfico.
              </Typography>
            </div>

            <div className="space-y-4">
              <Typography variant="heading3">3. Tipos de Cookies que utilizamos</Typography>
              <ul className="list-disc list-inside text-text-muted space-y-4">
                <li>
                  <strong>Cookies Estrictamente Necesarias:</strong> Estas cookies son esenciales para el correcto funcionamiento del sitio web. No se pueden desactivar en nuestros sistemas. Por lo general, solo se configuran en respuesta a acciones realizadas por usted que equivalen a una solicitud de servicios, como establecer sus preferencias de privacidad o llenar formularios.
                </li>
                <li>
                  <strong>Cookies de Rendimiento y Análisis:</strong> Nos permiten contar las visitas y las fuentes de tráfico para poder medir y mejorar el rendimiento de nuestro sitio. Nos ayudan a saber qué páginas son las más y las menos populares y ver cómo se mueven los visitantes por el sitio.
                </li>
                <li>
                  <strong>Cookies de Funcionalidad:</strong> Permiten que el sitio web proporcione una mejor funcionalidad y personalización. Pueden ser establecidas por nosotros o por proveedores externos cuyos servicios hemos agregado a nuestras páginas.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <Typography variant="heading3">4. Gestión de Cookies en su Navegador</Typography>
              <Typography variant="body" className="text-text-muted">
                Usted puede configurar su navegador para que rechace todas o algunas de las cookies, o para que le avise cuando los sitios web configuren o accedan a las cookies. Tenga en cuenta que si desactiva o rechaza las cookies, algunas partes de este sitio web pueden ser inaccesibles o no funcionar correctamente.
              </Typography>
              <Typography variant="body" className="text-text-muted">
                Para obtener más información sobre cómo gestionar las cookies, puede visitar las guías de ayuda oficiales de su navegador web (Chrome, Firefox, Safari, Edge, etc.).
              </Typography>
            </div>

            <div className="space-y-4">
              <Typography variant="heading3">5. Contacto</Typography>
              <Typography variant="body" className="text-text-muted">
                Si tiene alguna pregunta o inquietud sobre el uso de cookies en nuestro sitio web, por favor envíe un correo electrónico a: <strong>servicio.consultoria.mx@gmail.com</strong>
              </Typography>
            </div>

          </div>
        </Container>
      </section>
    </div>
  );
};

export default Cookies;
