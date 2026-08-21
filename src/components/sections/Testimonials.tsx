import { motion } from 'framer-motion';
import { Container } from '../layout/Container';
import { Typography } from '../ui/Typography';
import { Card } from '../ui/Card';

const StarIcon = ({ size = 16, fill = "none" }: { size?: number, fill?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const testimonials = [
  {
    name: 'Carlos Rodríguez',
    role: 'CTO en TechFlow',
    content: 'SER-PRO transformó nuestra infraestructura backend. Su enfoque en la escalabilidad nos permitió triplicar nuestra base de usuarios sin problemas técnicos.',
    image: 'https://i.pravatar.cc/150?u=carlos'
  },
  {
    name: 'Laura Martínez',
    role: 'Product Manager en InnovaSoft',
    content: 'La calidad del frontend que entregaron es excepcional. No solo es visualmente impactante, sino que la performance es impecable.',
    image: 'https://i.pravatar.cc/150?u=laura'
  },
  {
    name: 'Miguel Ángel Ruiz',
    role: 'CEO en StartupX',
    content: 'Su equipo de QA nos ahorró meses de retrabajo. La automatización de pruebas que implementaron es ahora el estándar de nuestra empresa.',
    image: 'https://i.pravatar.cc/150?u=miguel'
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Typography variant="heading2" className="mb-4">Lo que dicen nuestros clientes</Typography>
          <Typography variant="body" className="text-text-muted max-w-2xl mx-auto">
            La confianza de nuestros clientes es nuestro mayor activo.
          </Typography>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col italic">
                <div className="flex mb-4 text-yellow-500">
                  {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} size={16} fill="currentColor" />)}
                </div>
                <Typography variant="body" className="mb-8 flex-grow">
                  "{t.content}"
                </Typography>
                <div className="flex items-center gap-4 mt-auto not-italic">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full grayscale hover:grayscale-0 transition-all duration-300" />
                  <div>
                    <h5 className="font-bold text-sm">{t.name}</h5>
                    <p className="text-xs text-text-muted">{t.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
