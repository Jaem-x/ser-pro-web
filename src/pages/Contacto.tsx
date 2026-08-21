import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Container } from "../components/layout/Container";
import { Typography } from "../components/ui/Typography";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Modal } from "../components/ui/Modal";
import { cn } from "../utils/cn";
import { supabase } from "../utils/supabase";

const Icons = {
  Mail: ({ size = 20 }: { size?: number }) => (
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  MapPin: ({ size = 20 }: { size?: number }) => (
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Clock: ({ size = 20 }: { size?: number }) => (
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  Send: ({ size = 18, className }: { size?: number; className?: string }) => (
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
      <line x1="22" x2="11" y1="2" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  ),
  CheckCircle2: ({ size = 20 }: { size?: number }) => (
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
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  AlertCircle: ({ size = 20 }: { size?: number }) => (
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
      <circle cx="12" cy="12" r="10" />
      <line x1="12" x2="12" y1="8" y2="12" />
      <line x1="12" x2="12.01" y1="16" y2="16" />
    </svg>
  ),
};

const contactSchema = z.object({
  name: z
    .string()
    .min(2, "El nombre es muy corto")
    .regex(
      /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
      "No se permiten números ni caracteres especiales",
    ),
  email: z.string().email("Email inválido"),
  company: z
    .string()
    .min(2, "Nombre de empresa requerido")
    .regex(
      /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s.,&-]+$/,
      "No se permiten caracteres especiales de riesgo",
    ),
  phone: z
    .string()
    .regex(/^\+?\d{7,15}$/, "Número de teléfono inválido")
    .optional()
    .or(z.literal("")),
  service: z.enum(["backend", "frontend", "qa", "testing", "otro"], {
    message: "Por favor, selecciona un servicio de interés",
  }),
  message: z
    .string()
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .regex(
      /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s.,!?$€£%()#+\-*&]+$/,
      "No se permiten caracteres especiales de riesgo",
    ),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const serviceOptions = [
  { value: "backend", label: "Backend Development" },
  { value: "frontend", label: "Frontend Development" },
  { value: "qa", label: "Quality Assurance Engineer" },
  { value: "testing", label: "Testing" },
  { value: "otro", label: "Otro Servicio" }
];

const Contacto = () => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const state = location.state as { service?: string; scrollToForm?: boolean } | null;

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      service: (state?.service as any) || "",
    },
  });

  useEffect(() => {
    if (state?.service) {
      setValue("service", state.service as any);
    }
    if (state?.scrollToForm) {
      const timer = setTimeout(() => {
        const formElement = document.getElementById("contacto-form");
        if (formElement) {
          formElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [state, setValue]);

  const selectedService = watch("service");

  const onSubmit = async (data: ContactFormValues) => {
    setStatus("loading");

    try {
      const { error } = await supabase.from("contactos").insert([
        {
          nombre: data.name,
          email: data.email,
          empresa: data.company,
          phone: data.phone || null,
          servicio: data.service as any,
          mensaje: data.message,
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) throw error;

      setStatus("success");
      setShowModal(true);
      reset();
      // El estado del botón vuelve a idle después de un tiempo
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <div className="pb-24">
      {/* Hero Contacto */}
      <section className="pt-20 pb-24 bg-surface/30 border-b border-white/5">
        <Container>
          <div className="max-w-3xl">
            <Typography variant="heading1" className="mb-6">
              Hablemos de tu <span className="text-primary">Próximo</span> Paso
            </Typography>
            <Typography variant="body" className="text-text-muted text-xl">
              Estamos listos para escuchar tus desafíos técnicos y proponer
              soluciones de alto impacto.
            </Typography>
          </div>
        </Container>
      </section>

      <Container className="mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info Side */}
          <div className="lg:col-span-1 space-y-8">
            <div className="space-y-6">
              <Typography variant="heading3">
                Información de Contacto
              </Typography>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Icons.Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Email</p>
                    <p className="text-text-muted text-sm">servicio.consultoria.mx@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Icons.MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Ubicación</p>
                    <p className="text-text-muted text-sm">Cancun, Mexico</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Icons.Clock size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Horario</p>
                    <p className="text-text-muted text-sm">
                      Lun - Vie: 9:00 - 18:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <Typography
                variant="small"
                className="text-primary font-bold uppercase tracking-wider mb-2 block"
              >
                Consulta Rápida
              </Typography>
              <Typography variant="muted" className="text-xs">
                Respondemos tus solicitudes en un lapso de 24-48 horas
                hábiles.
              </Typography>
            </Card>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-2" id="contacto-form">
            <Card className="p-8 md:p-10">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text-muted">
                      Nombre Completo
                    </label>
                    <input
                      {...register("name")}
                      className={cn(
                        "w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all",
                        errors.name &&
                          "border-red-500/50 ring-2 ring-red-500/20",
                      )}
                      placeholder="Ej. Juan Pérez"
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text-muted">
                      Email Corporativo
                    </label>
                    <input
                      {...register("email")}
                      className={cn(
                        "w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all",
                        errors.email &&
                          "border-red-500/50 ring-2 ring-red-500/20",
                      )}
                      placeholder="juan@empresa.com"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text-muted">
                      Empresa
                    </label>
                    <input
                      {...register("company")}
                      className={cn(
                        "w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all",
                        errors.company &&
                          "border-red-500/50 ring-2 ring-red-500/20",
                      )}
                      placeholder="Tech Solutions S.A."
                    />
                    {errors.company && (
                      <p className="text-xs text-red-500">
                        {errors.company.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text-muted">
                      Telefono de Contacto
                    </label>
                    <input
                      {...register("phone")}
                      maxLength={15}
                      className={cn(
                        "w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all",
                        errors.phone &&
                          "border-red-500/50 ring-2 ring-red-500/20",
                      )}
                      placeholder="+52 987 654 321 (Opcional)"
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-500">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2 relative">
                    <label className="text-sm font-medium text-text-muted">
                      Servicio de Interés
                    </label>
                    <input type="hidden" {...register("service")} />
                    <button
                      type="button"
                      onClick={() => setIsOpen(!isOpen)}
                      className={cn(
                        "w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-left focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all flex items-center justify-between cursor-pointer",
                        errors.service && "border-red-500/50 ring-2 ring-red-500/20",
                        !selectedService && "text-text-muted"
                      )}
                    >
                      <span>
                        {serviceOptions.find((opt) => opt.value === selectedService)?.label ||
                          "Por favor, selecciona un servicio"}
                      </span>
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
                        className={cn(
                          "transition-transform duration-200 text-text-muted",
                          isOpen && "rotate-180"
                        )}
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <>
                          <div
                            className="fixed inset-0 z-10"
                            onClick={() => setIsOpen(false)}
                          />
                          <motion.ul
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.15 }}
                            className="absolute left-0 top-full w-full bg-surface border border-white/10 rounded-lg shadow-xl overflow-hidden z-20"
                          >
                            {serviceOptions.map((option) => (
                              <li key={option.value}>
                                <button
                                  type="button"
                                  onClick={() => {
                                    setValue("service", option.value as any);
                                    trigger("service");
                                    setIsOpen(false);
                                  }}
                                  className={cn(
                                    "w-full px-4 py-3 text-left text-sm hover:bg-white/5 transition-colors cursor-pointer",
                                    selectedService === option.value && "text-primary bg-primary/5"
                                  )}
                                >
                                  {option.label}
                                </button>
                              </li>
                            ))}
                          </motion.ul>
                        </>
                      )}
                    </AnimatePresence>

                    {errors.service && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.service.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-muted">
                    Mensaje
                  </label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    className={cn(
                      "w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none",
                      errors.message &&
                        "border-red-500/50 ring-2 ring-red-500/20",
                    )}
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className={cn(
                    "w-full py-4 group transition-all duration-300",
                    status === "success" &&
                      "bg-emerald-600 hover:bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.4)] border-emerald-400/50",
                    status === "error" &&
                      "bg-red-600 hover:bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.4)] border-red-400/50",
                  )}
                  size="lg"
                  isLoading={status === "loading"}
                  disabled={status === "loading"}
                >
                  <AnimatePresence mode="wait">
                    {status === "success" ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2"
                      >
                        <Icons.CheckCircle2 size={20} />
                        Mensaje Enviado
                      </motion.div>
                    ) : status === "error" ? (
                      <motion.div
                        key="error"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2"
                      >
                        <Icons.AlertCircle size={20} />
                        Error al Enviar
                      </motion.div>
                    ) : (
                      <motion.div
                        key="idle"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2"
                      >
                        Enviar Mensaje
                        <Icons.Send
                          size={18}
                          className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </Container>

      {/* Modal de Éxito */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="¡Mensaje Recibido!"
        variant="success"
      >
        <Typography variant="body" className="text-text-muted">
          Hemos recibido tu solicitud correctamente. Nuestro equipo técnico
          revisará los detalles y se pondrá en contacto contigo en menos de 24
          horas.
        </Typography>
      </Modal>

      {/* Modal de Error */}
      <Modal
        isOpen={status === "error"}
        onClose={() => setStatus("idle")}
        title="Error al Enviar"
        variant="error"
      >
        <Typography variant="body" className="text-text-muted">
          Hubo un problema al procesar tu solicitud. Por favor, intenta de nuevo
          o contáctanos directamente vía email.
        </Typography>
      </Modal>
    </div>
  );
};

export default Contacto;
