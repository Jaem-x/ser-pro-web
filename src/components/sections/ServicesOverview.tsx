import { motion } from "framer-motion";
import { Container } from "../layout/Container";
import { Typography } from "../ui/Typography";
import { Card } from "../ui/Card";

const Icons = {
  Database: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  ),
  Layout: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <line x1="3" x2="21" y1="9" y2="9" />
      <line x1="9" x2="9" y1="21" y2="9" />
    </svg>
  ),
  ClipboardCheck: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="m9 14 2 2 4-4" />
    </svg>
  ),
  ShieldCheck: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
};

const services = [
  {
    title: "Backend Development",
    description:
      "Arquitecturas de microservicios escalables, APIs REST/GraphQL y optimización de bases de datos de alto rendimiento.",
    icon: Icons.Database,
    color: "text-primary",
    tags: [
      "Node.js",
      "Go",
      "Python",
      "AWS",
      "CI/CD",
      "JS",
      "JAVA",
      "PHP",
      "SUPABASE",
      "ORACLE",
    ],
  },
  {
    title: "Frontend Development",
    description:
      "Interfaces modernas y ultra-rápidas construidas con React y Vue, centradas en la experiencia del usuario y performance.",
    icon: Icons.Layout,
    color: "text-secondary",
    tags: [
      "React",
      "HTML5",
      "CSS3",
      "Next.js",
      "Tailwind",
      "VUE",
      "TS",
      "REACT NATIVE",
    ],
  },
  {
    title: "Quality Assurance Engineer",
    description:
      "Automatización de pruebas de punta a punta, garantizando que cada línea de código cumpla con los estándares más altos.",
    icon: Icons.ShieldCheck,
    color: "text-green-500",
    tags: [
      "STLC",
      "Black Box",
      "White Box",
      "SQL",
      "Karate",
      "Playwright",
      "JENKINS",
      "CYPRESS",
    ],
  },
  {
    title: "Testing",
    description:
      "Planificación y ejecución de pruebas funcionales, de regresión y usabilidad para garantizar lanzamientos sin fisuras.",
    icon: Icons.ClipboardCheck,
    color: "text-amber-500",
    tags: [
      "Manual",
      "Casos de Prueba",
      "Funcional",
      "Regresión",
      "Smoke Testing",
      "Usabilidad",
    ],
  },
];

export const ServicesOverview = () => {
  return (
    <section className="py-24 bg-surface/30">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Typography variant="heading2" className="mb-4">
            Especialización Técnica
          </Typography>
          <Typography
            variant="body"
            className="text-text-muted max-w-2xl mx-auto"
          >
            Dominamos el stack tecnológico moderno para ofrecer soluciones que
            no solo funcionan, sino que escalan con tu negocio.
          </Typography>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full flex flex-col items-start text-left">
                <div
                  className={`p-3 rounded-xl bg-white/5 mb-6 ${service.color}`}
                >
                  <service.icon />
                </div>
                <Typography variant="heading3" className="mb-4">
                  {service.title}
                </Typography>
                <Typography variant="muted" className="mb-8 leading-relaxed">
                  {service.description}
                </Typography>
                <div className="mt-auto flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-white/5 text-text-muted border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
