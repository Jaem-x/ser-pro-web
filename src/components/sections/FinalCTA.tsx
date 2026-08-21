import { motion } from 'framer-motion';
import { Container } from '../layout/Container';
import { Typography } from '../ui/Typography';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
);

export const FinalCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 -z-10" />
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-card p-12 md:p-20 text-center relative overflow-hidden"
        >
          {/* Decorative Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 blur-[100px] rounded-full -z-0" />
          
          <div className="relative z-10">
            <Typography variant="heading2" className="mb-6">¿Listo para escalar tu infraestructura?</Typography>
            <Typography variant="body" className="text-text-muted max-w-2xl mx-auto mb-10">
              Hablemos de tu próximo desafío tecnológico. Nuestro equipo está listo para convertir tus ideas en realidad con precisión y expertise.
            </Typography>
            <Link to="/contacto">
              <Button size="lg" className="group">
                Agenda una Consulta Gratis
                <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
