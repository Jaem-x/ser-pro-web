import { motion } from 'framer-motion';
import { Container } from '../layout/Container';
import { Typography } from '../ui/Typography';

const Icons = {
  Users: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  Code2: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/>
    </svg>
  ),
  Rocket: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3"/><path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5"/>
    </svg>
  ),
  Clock: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  )
};

const features = [
  {
    title: 'Expertise Senior',
    description: 'Nuestro equipo está formado exclusivamente por ingenieros con más de 8 años de experiencia.',
    icon: Icons.Users,
  },
  {
    title: 'Código Limpio',
    description: 'Priorizamos la mantenibilidad y escalabilidad siguiendo los mejores patrones de diseño.',
    icon: Icons.Code2,
  },
  {
    title: 'Entrega Ágil',
    description: 'Metodologías que garantizan visibilidad constante y entregas funcionales en cada sprint.',
    icon: Icons.Rocket,
  },
  // {
  //   title: 'Soporte 24/7',
  //   description: 'Acompañamos tu proyecto incluso después del lanzamiento para asegurar su éxito.',
  //   icon: Icons.Clock,
  // },
];

export const WhyUs = () => {
  return (
    <section className="py-24">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <Typography variant="heading2" className="mb-6">¿Por qué elegir a SER-PRO?</Typography>
            <Typography variant="body" className="text-text-muted mb-8">
              No somos solo una agencia de desarrollo; somos tu partner tecnológico. Nos involucramos en el producto para asegurar que la tecnología impulse los objetivos de negocio.
            </Typography>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature) => (
                <div 
                  key={feature.title}
                  className="space-y-3"
                >
                  <div className="text-primary"><feature.icon /></div>
                  <h4 className="font-heading font-semibold text-lg">{feature.title}</h4>
                  <p className="text-sm text-text-muted leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1 relative"
          >
            <div className="aspect-square bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden">
               {/* Decorative Element */}
               <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-4 p-8 opacity-20">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div key={i} className="bg-white/20 rounded-sm" />
                  ))}
               </div>
               <div className="relative z-10 text-center space-y-4">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-6xl font-bold font-heading text-white"
                  >
                    99%
                  </motion.div>
                  <div className="text-text-muted font-medium uppercase tracking-widest">Satisfacción del Cliente</div>
               </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
