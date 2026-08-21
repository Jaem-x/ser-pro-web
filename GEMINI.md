# 🤖 GEMINI.md — SER-PRO

> Instrucciones operativas para Gemini. Leer completo antes de cualquier acción.

---

## 📋 Inicio de Sesión Obligatorio

Al iniciar una nueva sesión, ejecutar en orden:

1. **Leer `CONTEXT.md`** — arquitectura, stack, decisiones técnicas y versión actual.
2. **Verificar entorno:**
   ```bash
   ls src/pages/ src/components/sections/ src/components/ui/
   cat tailwind.config.js   # confirmar color primario #0d9488
   ```
3. **Confirmar el estado actual** — estamos en **v1.2.0**, Fase 1 (Frontend) completada.

---

## 🚨 Reglas de Protección — Frontend Terminado

> La Fase 1 está **finalizada y estable**. El principal riesgo ahora es romper lo que ya funciona.

### ❌ PROHIBIDO sin aprobación explícita

- Modificar el color primario `#0d9488` (Teal Precision) o la paleta global.
- Cambiar la configuración de Tailwind v4 (`tailwind.config.js`, `postcss.config.js`).
- Reemplazar o actualizar dependencias core (`framer-motion`, `react-router-dom`, `zod`).
- Refactorizar la estructura de carpetas `src/pages/` o `src/components/sections/`.
- Cambiar el sistema de íconos SVG inline por librerías externas.
- Alterar animaciones de scroll o transiciones de página existentes.

### ✅ PERMITIDO libremente

- Agregar nuevas páginas o secciones sin tocar las existentes.
- Crear nuevos componentes en `src/components/`.
- Extender schemas de Zod para nuevos formularios.
- Agregar nuevas rutas en React Router v6.
- Instalar dependencias nuevas que no colisionen con el stack actual.

---

## 🛠️ Reglas de Desarrollo

### Código

- **TypeScript estricto** — sin `any`, tipar todo explícitamente.
- **Componentes funcionales** con hooks. Sin componentes de clase.
- **Zod** para toda validación de formularios y datos externos. Los schemas viven centralizados.
- **Framer Motion** para animaciones — no CSS puro para transiciones de página.
- **SVGs inline optimizados** — no importar desde Lucide u otras librerías de íconos.
- Usar **React Router v6** (`<Outlet>`, `useNavigate`, loaders) — sin versiones anteriores.

### Estilos

- Clases de **Tailwind v4** únicamente — sin CSS modules ni styled-components.
- Respetar el sistema de diseño **Cyber-Precision** (dark mode).
- Toda sombra, hover y variante de color debe seguir la paleta definida en `CONTEXT.md`.
- Accesibilidad (**A11y**) obligatoria: roles ARIA, contraste suficiente, navegación por teclado.

### Estructura de archivos

```
src/
├── pages/          # Archivos de ruta (Home.tsx, etc.)
├── components/
│   ├── sections/   # Secciones reutilizables entre páginas
│   ├── ui/         # UI compartido (botones, cards, modales)
│   └── layout/     # Navbar, Footer, PageLayout
├── schemas/        # Schemas de Zod centralizados
├── hooks/          # Custom hooks
└── types/          # Tipos e interfaces TypeScript globales
```

---

## 🔄 Flujo de Trabajo

### Antes de cada tarea

1. Confirmar que no rompe nada existente (`npm run dev` debe levantar sin errores).
2. Identificar si la tarea es **adición** (segura) o **modificación** (requiere cuidado).
3. Si modifica algo de Fase 1, pedir confirmación antes de proceder.

### Durante la tarea

- Cambios atómicos y pequeños — un propósito por commit.
- Si algo no está claro en `CONTEXT.md`, preguntar antes de asumir.
- Ante cualquier duda de diseño, respetar lo existente como referencia.

### Al cerrar una tarea

- [ ] `npm run dev` corre sin errores ni warnings nuevos.
- [ ] Responsive verificado (mobile, tablet, desktop).
- [ ] Sin `console.log` de debug en producción.
- [ ] `CONTEXT.md` actualizado si se añadió algo relevante.
- [ ] Si hay nueva versión, registrarla en el historial de `CONTEXT.md`.

---

## 🗺️ Contexto de Fase 2 (Próxima)

Lo que viene a continuación. Tener en cuenta para no crear conflictos:

- Integración con backend / APIs REST.
- Autenticación y gestión de sesión.
- Panel de administración.
- Tests E2E (Playwright).
- CI/CD pipeline.

> Cualquier código nuevo debe ser diseñado pensando en que estas integraciones llegarán.

---

## 💬 Comunicación con el Equipo

- Responder siempre en **español**.
- Si una tarea es ambigua, hacer **una sola pregunta clara** antes de proceder.
- Indicar explícitamente cuando una acción tiene riesgo de afectar código existente.
- No asumir que el usuario recuerda detalles técnicos — ser explícito y breve.

---

**Versión de este documento:** sincronizada con `CONTEXT.md` v1.2.0
