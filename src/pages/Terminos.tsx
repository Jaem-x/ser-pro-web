import { Container } from "../components/layout/Container";
import { Typography } from "../components/ui/Typography";

const Terminos = () => {
  return (
    <div className="pb-24">
      <section className="pt-20 pb-16 bg-surface/30 border-b border-white/5">
        <Container>
          <div className="max-w-3xl">
            <Typography variant="heading1" className="mb-6">
              Términos y <span className="text-primary">Condiciones</span>
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
              <Typography variant="heading3">1. Aceptación de los Términos</Typography>
              <Typography variant="body" className="text-text-muted">
                Al acceder y utilizar los servicios ofrecidos por SER-PRO (en adelante "la Consultora", "Nosotros" o "Nuestro"), usted acepta estar sujeto a estos Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, no podrá utilizar nuestros servicios.
              </Typography>
            </div>

            <div className="space-y-4">
              <Typography variant="heading3">2. Servicios Ofrecidos</Typography>
              <Typography variant="body" className="text-text-muted">
                SER-PRO es una consultoría tecnológica que ofrece servicios profesionales de:
              </Typography>
              <ul className="list-disc list-inside text-text-muted space-y-2">
                <li>Desarrollo de Software (Frontend y Backend)</li>
                <li>Garantía de Calidad (Quality Assurance Engineer)</li>
                <li>Automatización de Pruebas y Testing Manual</li>
              </ul>
              <Typography variant="body" className="text-text-muted">
                Los detalles específicos, alcances, tiempos y costos de cada proyecto serán definidos en un Contrato de Prestación de Servicios independiente y un Statement of Work (SOW) acordado entre ambas partes.
              </Typography>
            </div>

            <div className="space-y-4">
              <Typography variant="heading3">3. Propiedad Intelectual</Typography>
              <Typography variant="body" className="text-text-muted">
                Todo el contenido de este sitio web, incluyendo textos, gráficos, logotipos, íconos y código, es propiedad de SER-PRO o de sus proveedores de contenido y está protegido por las leyes de propiedad intelectual internacionales y de México.
              </Typography>
              <Typography variant="body" className="text-text-muted">
                Respecto a los desarrollos realizados para nuestros clientes, la transferencia de la propiedad intelectual sobre el código fuente y entregables finales se regirá estrictamente por lo estipulado en el contrato específico de cada proyecto, una vez que se hayan cubierto en su totalidad los honorarios acordados.
              </Typography>
            </div>

            <div className="space-y-4">
              <Typography variant="heading3">4. Confidencialidad (NDA)</Typography>
              <Typography variant="body" className="text-text-muted">
                SER-PRO se compromete a mantener en estricta confidencialidad toda la información técnica, comercial o de negocio compartida por el cliente durante la fase de consultoría y desarrollo. Recomendamos la firma de un Acuerdo de No Divulgación (NDA) previo al inicio de cualquier proyecto.
              </Typography>
            </div>

            <div className="space-y-4">
              <Typography variant="heading3">5. Limitación de Responsabilidad</Typography>
              <Typography variant="body" className="text-text-muted">
                SER-PRO se esfuerza por ofrecer servicios de la más alta calidad y seguir las mejores prácticas de la industria en el desarrollo de software y QA. Sin embargo, no seremos responsables por daños indirectos, incidentales, especiales, consecuentes o punitivos, o cualquier pérdida de beneficios o ingresos, ya sea incurrida directa o indirectamente, o cualquier pérdida de datos, uso, fondo de comercio u otras pérdidas intangibles, resultantes del uso o la incapacidad de usar nuestros desarrollos una vez entregados y aceptados.
              </Typography>
            </div>

            <div className="space-y-4">
              <Typography variant="heading3">6. Legislación Aplicable y Jurisdicción</Typography>
              <Typography variant="body" className="text-text-muted">
                Estos Términos se regirán e interpretarán de acuerdo con las leyes de los Estados Unidos Mexicanos, específicamente las aplicables en el Estado de Quintana Roo (Cancún). Cualquier disputa que surja en relación con estos términos estará sujeta a la jurisdicción exclusiva de los tribunales competentes en dicha ciudad.
              </Typography>
            </div>

          </div>
        </Container>
      </section>
    </div>
  );
};

export default Terminos;
