import { motion } from 'framer-motion';
import { Container } from '../layout/Container';
import { Typography } from '../ui/Typography';

const steps = [
  {
    number: '01',
    title: 'Descubrimiento',
    description: 'Entendemos tus necesidades, objetivos de negocio y desafíos técnicos para trazar la mejor ruta.'
  },
  {
    number: '02',
    title: 'Estrategia & Diseño',
    description: 'Definimos la arquitectura, el stack tecnológico y diseñamos interfaces centradas en el usuario.'
  },
  {
    number: '03',
    title: 'Desarrollo Ágil',
    description: 'Construimos el software mediante ciclos iterativos con pruebas constantes y transparencia total.'
  },
  {
    number: '04',
    title: 'Entrega & Evolución',
    description: 'Desplegamos la solución y planificamos las fases de escalado y mantenimiento continuo.'
  }
];

export const WorkProcess = () => {
  return (
    <section className="py-24 bg-surface/50">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Typography variant="heading2" className="mb-4">Nuestro Proceso</Typography>
          <Typography variant="body" className="text-text-muted max-w-2xl mx-auto">
            Metodología estructurada para garantizar resultados excepcionales en cada etapa del desarrollo.
          </Typography>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-1/4 left-0 w-full h-[1px] bg-white/10 -z-0" />
          
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative z-10"
            >
              <div className="bg-background border border-white/10 w-12 h-12 rounded-full flex items-center justify-center mb-6 text-primary font-bold font-heading text-xl shadow-[0_0_20px_rgba(13,148,136,0.2)]">
                {step.number}
              </div>
              <Typography variant="heading3" className="mb-4">{step.title}</Typography>
              <Typography variant="muted" className="leading-relaxed">
                {step.description}
              </Typography>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
