import { motion } from "framer-motion";
import { Container } from "../components/layout/Container";
import { Typography } from "../components/ui/Typography";
import { Card } from "../components/ui/Card";

// Importación de imágenes del equipo
import OctavioImg from "../utils/img/Octavio.jpeg";
import RickImg from "../utils/img/Rick.jpeg";
import AlfonsoImg from "../utils/img/Alfonso.jpeg";
import DanielImg from "../utils/img/Daniel.jpeg";
import BaruchImg from "../utils/img/Baruch.jpeg";

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const GithubIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const values = [
  {
    title: "Excelencia Técnica",
    description:
      "No nos conformamos con lo que funciona; buscamos lo que es óptimo, eficiente y elegante.",
  },
  {
    title: "Transparencia Total",
    description:
      "Comunicación honesta y directa. Sin sorpresas, con visibilidad completa del proceso.",
  },
  {
    title: "Impacto Real",
    description:
      "Cada línea de código que escribimos debe aportar valor tangible al negocio de nuestro cliente.",
  },
];

const team = [
  {
    name: "Octavio Contreras",
    role: "Senior SDET & Performance & Observability",
    image: OctavioImg,
    bio: "Experto en arquitecturas distribuidas y cloud computing con más de 12 años en la industria.",
  },
  {
    name: "Ricardo Escalante",
    role: "Co-founder & Lead Frontend Engineer",
    image: RickImg,
    bio: "Especialista en interfaces reactivas y sistemas de diseño a gran escala.",
  },
  {
    name: "Alfonso Estrada",
    role: "Founder-CEO & Lead QA Automation ",
    image: AlfonsoImg,
    bio: "Apasionado por la calidad y la automatización exhaustiva de procesos de software.",
  },
  {
    name: "Daniel Uscanga",
    role: "Líder Tecnico & DevOps Engineer",
    image: DanielImg,
    bio: "Garantizando despliegues continuos y estabilidad en infraestructuras críticas.",
  },
  {
    name: "Enrique Baruch",
    role: "Senior Automation Engineer",
    image: BaruchImg,
    bio: "Liderando la visión del producto y asegurando la entrega de valor al cliente.",
  },
];

const Nosotros = () => {
  return (
    <div className="pb-24">
      {/* Hero Nosotros */}
      <section className="pt-20 pb-24 bg-surface/30 border-b border-white/5">
        <Container>
          <div className="max-w-3xl">
            <Typography variant="heading1" className="mb-6">
              Ingeniería con <span className="text-primary">Propósito</span>
            </Typography>
            <Typography variant="body" className="text-text-muted text-xl">
              Somos un equipo de artesanos digitales comprometidos con la
              creación de software que redefine industrias.
            </Typography>
          </div>
        </Container>
      </section>

      {/* Historia / Misión */}
      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <Typography variant="heading2">Nuestra Misión</Typography>
              <Typography variant="body" className="text-text-muted">
                En SER-PRO, nuestra misión es democratizar el acceso a
                ingeniería de software de élite. Ayudamos a empresas de todos
                los tamaños a competir al más alto nivel mediante soluciones
                tecnológicas robustas, escalables y seguras.
              </Typography>
              <Typography variant="body" className="text-text-muted">
                Creemos que la tecnología no debe ser una barrera, sino el mayor
                catalizador del éxito. Por eso, nos enfocamos en construir
                relaciones a largo plazo basadas en la confianza y la excelencia
                técnica.
              </Typography>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-40 bg-primary/10 rounded-2xl border border-primary/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold font-heading">10+</div>
                    <div className="text-xs uppercase tracking-widest text-text-muted">
                      Proyectos
                    </div>
                  </div>
                </div>
                <div className="h-60 bg-secondary/10 rounded-2xl border border-secondary/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold font-heading">100%</div>
                    <div className="text-xs uppercase tracking-widest text-text-muted">
                      Remoto
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-60 bg-surface rounded-2xl border border-white/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold font-heading">3+</div>
                    <div className="text-xs uppercase tracking-widest text-text-muted">
                      Años Exp.
                    </div>
                  </div>
                </div>
                <div className="h-40 bg-primary/10 rounded-2xl border border-primary/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold font-heading">24/7</div>
                    <div className="text-xs uppercase tracking-widest text-text-muted">
                      Soporte
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Valores */}
      <section className="py-24 bg-surface/30">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="heading2" className="mb-4">
              Nuestros Valores
            </Typography>
            <Typography
              variant="body"
              className="text-text-muted max-w-2xl mx-auto"
            >
              La brújula que guía cada una de nuestras decisiones técnicas y de
              negocio.
            </Typography>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full text-center">
                  <Typography variant="heading3" className="mb-4 text-primary">
                    {v.title}
                  </Typography>
                  <Typography variant="body" className="text-text-muted">
                    {v.description}
                  </Typography>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Equipo */}
      <section className="py-24">
        <Container className="max-w-[1600px]">
          <div className="text-center mb-16">
            <Typography variant="heading2" className="mb-4">
              El Equipo Core
            </Typography>
            <Typography
              variant="body"
              className="text-text-muted max-w-2xl mx-auto"
            >
              Mentes brillantes trabajando juntas para resolver tus desafíos más
              complejos.
            </Typography>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 xl:gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="p-0 overflow-hidden group">
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                  </div>
                  <div className="p-4 xl:p-5">
                    <Typography variant="heading3" className="text-lg mb-1 whitespace-nowrap overflow-hidden text-ellipsis">
                      {member.name}
                    </Typography>
                    <Typography
                      variant="small"
                      className="text-primary mb-4 block"
                    >
                      {member.role}
                    </Typography>
                    <Typography
                      variant="muted"
                      className="text-xs mb-6 line-clamp-2"
                    >
                      {member.bio}
                    </Typography>
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="text-text-muted hover:text-primary hover:scale-125 hover:rotate-6 transition-all duration-300 transform inline-block"
                      >
                        <LinkedinIcon />
                      </a>
                      <a
                        href="#"
                        className="text-text-muted hover:text-primary hover:scale-125 hover:-rotate-6 transition-all duration-300 transform inline-block"
                      >
                        <TwitterIcon />
                      </a>
                      <a
                        href="#"
                        className="text-text-muted hover:text-primary hover:scale-125 hover:rotate-6 transition-all duration-300 transform inline-block"
                      >
                        <GithubIcon />
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Nosotros;
