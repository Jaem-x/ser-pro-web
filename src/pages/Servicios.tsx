import { motion } from "framer-motion";
import { Container } from "../components/layout/Container";
import { Typography } from "../components/ui/Typography";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Link } from "react-router-dom";

const Icons = {
  Database: ({ size = 24 }: { size?: number }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
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
  Layout: ({ size = 24 }: { size?: number }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
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
  ClipboardCheck: ({ size = 24 }: { size?: number }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
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
  ShieldCheck: ({ size = 24 }: { size?: number }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
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
  CheckCircle2: ({
    size = 20,
    className,
  }: {
    size?: number;
    className?: string;
  }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  ArrowRight: ({ className }: { className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  ),
};

const serviceDetails = [
  {
    id: "backend",
    title: "Backend Development",
    subtitle: "El motor invisible de tu éxito digital",
    description:
      "Construimos cimientos digitales inquebrantables. Nuestra ingeniería backend se centra en la seguridad, la latencia mínima y la escalabilidad infinita.",
    icon: Icons.Database,
    color: "text-primary",
    stack: [
      "JAVA",
      "PYTHON",
      "PHP",
      "Node.js",
      "Go",
      "Oracle",
      "PostgreSQL",
      "Supabase",
      "AWS",
      "Azure",
      "Redis",
      "Docker",
      "MongoDB",
      "Y más...",
    ],
    benefits: [
      "Arquitecturas de Microservicios",
      "APIs de Alto Rendimiento (REST/gRPC)",
      "Seguridad de Grado Bancario",
      "Optimización de Consultas Complejas",
    ],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    subtitle: "Interfaces que cautivan y convierten",
    description:
      "No solo hacemos sitios bonitos; creamos experiencias de usuario fluidas y ultra-rápidas que se sienten nativas en cualquier dispositivo.",
    icon: Icons.Layout,
    color: "text-secondary",
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Zustand",
    ],
    benefits: [
      "Core Web Vitals Optimizados",
      "Diseño Responsivo & Mobile-First",
      "Accesibilidad (A11y) Cumplida",
      "Arquitectura de Componentes Escalable",
    ],
  },
  {
    id: "qa",
    title: "Quality Assurance Engineer",
    subtitle: "Confianza total en cada despliegue",
    description:
      "Eliminamos el error humano mediante estrategias de automatización exhaustivas. Aseguramos que tu software funcione siempre, bajo cualquier carga.",
    icon: Icons.ShieldCheck,
    color: "text-green-500",
    stackGroups: [
      {
        title: "Frameworks",
        items: ["Karate", "Playwright", "Cucumber", "Cypress", "Selenium"],
      },
      {
        title: "Otros Skills / Herramientas",
        items: ["CI/CD", "Postman", "Jmeter", "Jenkins", "SQL", "Git"],
      },
    ],
    benefits: [
      "Pruebas End-to-End Automatizadas",
      "Integración Continua (CI/CD)",
      "Pruebas de Carga y Estrés",
      "Reportes de Calidad en Tiempo Real",
    ],
  },
  {
    id: "testing",
    title: "Testing",
    subtitle: "Asegurando la calidad y funcionalidad de tu software",
    description:
      "Validamos minuciosamente cada funcionalidad y flujo de tu aplicación. Diseñamos planes de prueba detallados para identificar y mitigar riesgos antes de que afecten a tus usuarios.",
    icon: Icons.ClipboardCheck,
    color: "text-amber-500",
    stack: [
      "Pruebas Manuales",
      "Casos de Prueba",
      "Jira",
      "Pruebas Funcionales",
      "Pruebas de Regresión",
      "Pruebas No Funcionales",
      "Pruebas en mobiles",
      "Atención al detalle",
      "Confluence",
      "Pensamiento analítico y crítico",
      "DevTools",
    ],
    benefits: [
      "Pruebas Funcionales y de Regresión",
      "Análisis de Experiencia de Usuario (UX)",
      "Reportes Detallados de Bugs",
      "Validación de Criterios de Aceptación",
    ],
  },
];

const Servicios = () => {
  return (
    <div className="pb-24">
      {/* Hero Servicios */}
      <section className="pt-20 pb-24 bg-surface/30 border-b border-white/5">
        <Container>
          <div className="max-w-3xl">
            <Typography variant="heading1" className="mb-6">
              Nuestras <span className="text-primary">Soluciones</span> de
              Ingeniería
            </Typography>
            <Typography variant="body" className="text-text-muted text-xl">
              Ofrecemos servicios de consultoría y desarrollo de software de
              ciclo completo para startups y empresas consolidadas.
            </Typography>
          </div>
        </Container>
      </section>

      {/* Listado Detallado */}
      <Container className="mt-24 space-y-32">
        {serviceDetails.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col gap-12 ${index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
          >
            {/* Info */}
            <div className="flex-1 space-y-6">
              <div
                className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center ${service.color}`}
              >
                <service.icon size={36} />
              </div>
              <div>
                <Typography variant="heading2" className="mb-2">
                  {service.title}
                </Typography>
                <Typography
                  variant="heading3"
                  className="text-text-muted font-normal"
                >
                  {service.subtitle}
                </Typography>
              </div>
              <Typography
                variant="body"
                className="text-text-muted leading-relaxed"
              >
                {service.description}
              </Typography>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {service.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <Icons.CheckCircle2
                      size={20}
                      className="text-primary flex-shrink-0"
                    />
                    <span className="text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <Link
                  to="/contacto"
                  state={{ service: service.id, scrollToForm: true }}
                >
                  <Button variant="outline" className="group">
                    Cotizar {service.title}
                    <Icons.ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Tech Stack Card */}
            <div className="flex-1">
              <Card className="h-full bg-surface/50 p-8 border-white/5">
                <Typography
                  variant="heading3"
                  className="mb-8 flex items-center gap-2"
                >
                  <span className="w-1.5 h-6 bg-primary rounded-full" />
                  Stack Tecnológico
                </Typography>
                {service.stackGroups ? (
                  <div className="space-y-6">
                    {service.stackGroups.map((group) => (
                      <div key={group.title} className="space-y-3">
                        <h4 className="text-xs uppercase tracking-wider font-bold text-primary font-sans">
                          {group.title}
                        </h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                          {group.items.map((tech) => (
                            <div
                              key={tech}
                              className="flex flex-col items-center p-3 rounded-xl bg-background/50 border border-white/5 hover:border-primary/20 transition-colors"
                            >
                              <span className="text-sm font-semibold">
                                {tech}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                    {service.stack?.map((tech) => (
                      <div
                        key={tech}
                        className="flex flex-col items-center p-4 rounded-xl bg-background/50 border border-white/5 hover:border-primary/20 transition-colors"
                      >
                        <span className="text-sm font-semibold">{tech}</span>
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            </div>
          </motion.div>
        ))}
      </Container>

      {/* CTA Final */}
      <Container className="mt-32">
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-12 rounded-3xl border border-white/10 text-center">
          <Typography variant="heading2" className="mb-6">
            ¿No ves lo que estás buscando?
          </Typography>
          <Typography
            variant="body"
            className="mb-10 text-text-muted max-w-xl mx-auto"
          >
            Tenemos experiencia en una amplia gama de tecnologías y dominios.
            Hablemos sobre tu caso de uso específico.
          </Typography>
          <Link to="/contacto">
            <Button size="lg">Contactar a un Ingeniero</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Servicios;
