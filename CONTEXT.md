# 📂 Contexto del Proyecto: SER-PRO (Servicios Profesionales)

> **Documento de referencia técnica** — Mantener actualizado con cada iteración del proyecto.

---

## 🏢 Información de la Empresa

| Campo           | Detalle                               |
| --------------- | ------------------------------------- |
| **Nombre**      | SER-PRO                               |
| **Tipo**        | Consultoría tecnológica de alto nivel |
| **Fase actual** | Fase 1 completada — Frontend          |
| **Fase actual** | Fase 2 — Backend & Integración        |
| **Versión**     | v1.3.8                                |

### Servicios Principales

1. **Backend Development** — APIs REST/GraphQL, Microservicios, Bases de datos, Cloud.
2. **Frontend Development** — UI/UX, Web Apps modernas y responsivas.
3. **Quality Assurance Engineer** — Automatización de pruebas, testing continuo e integración de calidad.
4. **Testing** — Planificación y ejecución de pruebas manuales y funcionales de software.

---

## 🎨 Identidad Visual

| Token                 | Valor                      | Uso                          |
| --------------------- | -------------------------- | ---------------------------- |
| **Color primario**    | `#0d9488` (Teal Precision) | Botones, acentos, highlights |
| **Tema**              | Dark mode                  | Global                       |
| **Sistema de diseño** | Cyber-Precision            | —                            |

> ⚠️ No modificar el color primario sin actualizar también las variantes hover, sombras (`box-shadow`) y estados activos en tarjetas y botones.

---

## 🏗️ Arquitectura Frontend

### Stack Tecnológico

| Categoría             | Tecnología             | Versión |
| --------------------- | ---------------------- | ------- |
| **Runtime / Bundler** | Vite                   | Latest  |
| **Framework**         | React                  | 18+     |
| **Lenguaje**          | TypeScript             | —       |
| **Estilos**           | Tailwind CSS + PostCSS | v4      |
| **Animaciones**       | Framer Motion          | —       |
| **Formularios**       | React Hook Form + Zod  | —       |
| **Routing**           | React Router           | v6      |
| **Backend / DB**      | Supabase               | Latest  |

### Estructura de Proyecto

```
src/
├── components/     # UI compartida y componentes estructurales
│   ├── layout/     # PageLayout, Navbar, Footer, Container
│   ├── sections/   # Secciones transversales (Hero, WhyUs, etc.)
│   ├── ui/         # Componentes atómicos (Button, Card, Modal)
│   └── shared/     # Utilidades visuales (ScrollToTop)
├── pages/          # Archivos de ruta (vistas principales)
│   ├── Home.tsx
│   ├── Servicios.tsx
│   ├── Nosotros.tsx
│   └── Contacto.tsx
├── router/         # Configuración de React Router
├── utils/          # Utilidades (supabase, cn) y assets (img/)
├── hooks/          # Custom hooks
└── ...
```

> ⚠️ Las rutas relativas en `src/pages/` y `src/components/sections/` son críticas — verificar al mover archivos.

### Notas de Configuración

- **Tailwind v4:** Usa sintaxis de importación v4 y `@tailwindcss/postcss`. No mezclar con configuración de v3.
- **Iconos:** SVGs optimizados inline (evita problemas de exportación con Lucide). El ícono de X (Twitter) usa la versión oficial actualizada.
- **Formularios:** Validación centralizada con Zod. Toda regla de negocio de formularios vive en los schemas de Zod.
- **Animaciones:** Scroll-triggered y transiciones de página implementadas con Framer Motion. No usar CSS puro para animaciones de página.

---

## ⚙️ Comandos del Proyecto

| Acción         | Comando           | Descripción                                                    |
| :------------- | :---------------- | :------------------------------------------------------------- |
| **Desarrollo** | `npm run dev`     | Inicia el servidor de desarrollo (Vite).                       |
| **Detener**    | `Ctrl + C`        | Detiene el servidor o cualquier proceso activo en la terminal. |
| **Build**      | `npm run build`   | Compila y genera el paquete de producción en `dist/`.          |
| **Linting**    | `npm run lint`    | Ejecuta el análisis estático de código (ESLint).               |
| **Preview**    | `npm run preview` | Previsualiza localmente el build de producción.                |

---

## 📈 Historial de Versiones

### [v1.3.8] — 2026-08-21 · _ESTADO ACTUAL_

**Reestructuración de Base de Datos y Supabase**

- [x] **Nuevo Proyecto Supabase:** Se migró el proyecto a una nueva instancia de Supabase en la nube (`qldpdruprsvpbggjmbud.supabase.co`).
- [x] **Refactorización de Claves Primarias:** Se reemplazó el tipo de dato `SERIAL` por `UUID` (`gen_random_uuid()`) en la tabla `contactos` para mejorar la seguridad, prevenir enumeración de registros y asegurar la escalabilidad.
- [x] **Seguridad RLS y Validaciones:** Se configuró una política para permitir inserciones públicas (anon) en el formulario de contacto, conservando la restricción `CHECK` a nivel base de datos para los servicios permitidos.

---

### [v1.3.7] — 2026-06-22

**Énfasis en Interacciones Sociales (Efectos Hover)**

- [x] **Micro-animaciones de Redes Sociales:** Se añadieron efectos de escala (`hover:scale-125`) y rotación (`hover:rotate-6`, `hover:-rotate-6`) con transiciones fluidas en los enlaces de redes sociales (X, LinkedIn y GitHub) tanto en las tarjetas del equipo ([Nosotros.tsx](file:///Users/jaem/Documents/personal/Ser-Pro_project/src/pages/Nosotros.tsx)) como en el pie de página ([Footer.tsx](file:///Users/jaem/Documents/personal/Ser-Pro_project/src/components/layout/Footer.tsx)).

---

### [v1.3.6] — 2026-06-20

**Estructuración de Stack Tecnológico de QA**

- [x] **Subsecciones en QA Stack:** Se dividió el stack tecnológico de Quality Assurance Engineer en la página de Servicios ([Servicios.tsx](file:///Users/jaem/Documents/personal/Ser-Pro_project/src/pages/Servicios.tsx)) para separar las herramientas/habilidades en los bloques: `"Frameworks"` y `"Otros Skills / Herramientas"`.
- [x] **Soporte de Renderizado Flexible:** Se adaptó el renderizador de la tarjeta de stack tecnológico para soportar de manera condicional tanto arreglos planos (`stack`) como agrupados (`stackGroups`).

---

### [v1.3.5] — 2026-06-20

**Ajustes de Consistencia en Servicios, Activación de Enlaces y Flexibilidad de Formulario**

- [x] **Consistencia del Footer:** Se actualizó `Footer.tsx` para listar los 4 servicios oficiales del negocio (*Backend*, *Frontend*, *Testing*, *Quality Assurance Engineer*), reemplazando servicios obsoletos o inconsistentes.
- [x] **Activación de Enlaces de Navegación:** Se vincularon los botones del Navbar (Cotizar Proyecto) y del Hero (Iniciar Proyecto, Nuestros Servicios) envolviéndolos con `<Link>` para redirigir a `/contacto` y `/servicios`.
- [x] **Flexibilización de Formulario de Contacto:** Se redefinió la expresión regular de validación de Zod para `message` en `Contacto.tsx` para permitir números y símbolos tipográficos/monetarios, eliminando la restricción excesiva previa. Asimismo, se amplió el `maxLength` del campo de teléfono a 15 en el input HTML para concordar con Zod.

---

### [v1.3.4] — 2026-06-20

**Integración de Testing y Renombramiento de QA a Quality Assurance Engineer**

- [x] **Nuevo Servicio "Testing" en Home:** Se incorporó el servicio de Testing con su respectiva descripción, tags de especialización e ícono representativo de lista de tareas (`ClipboardCheck`).
- [x] **Renombramiento de QA:** Se actualizó el título de `"QA & Testing"` a `"Quality Assurance Engineer"` en el Home para reflejar la denominación especializada de la ingeniería de calidad.
- [x] **Ajuste Responsivo del Home:** Se modificó la cuadrícula de servicios a 4 columnas (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`) en la sección de Especialización Técnica para alojar limpiamente la nueva disposición.
- [x] **Consistencia en Vista de Servicios:** Se agregó el desglose detallado de "Testing" en `Servicios.tsx` con su stack tecnológico propio y beneficios, y se renombró el servicio de QA a "Quality Assurance Engineer".

---

### [v1.3.3] — 2026-06-20

**Hotfix de Validación y Mejoras de Navegación**

- [x] **Corrección de TypeScript:** Se corrigió el orden de encadenamiento de `.regex()` y `.optional()` en el esquema de Zod para el campo `phone` en `Contacto.tsx`.
- [x] **Soporte de Inputs Vacíos:** Se permitió el valor de cadena vacía `""` (`z.literal("")`) en el campo de teléfono para evitar errores al enviar el formulario en blanco.
- [x] **Placeholder de Selector Nativo:** Se configuró un placeholder simulado (`disabled hidden` con valor vacío `""`) en el selector de servicios en `Contacto.tsx`.
- [x] **Validación de Servicios:** Se ajustó la validación del selector en Zod para requerir obligatoriamente la elección de un servicio real, mostrando el mensaje de error en español *"Por favor, selecciona un servicio de interés"* ante fallos.
- [x] **Selector Personalizado:** Se reemplazó el selector nativo por un componente Custom Select animado con Framer Motion en `Contacto.tsx` para forzar la apertura de la lista desplegable hacia abajo y evitar que se encime.
- [x] **Ajuste de Margen en Selector:** Se removió el margen superior (`mt-2`) en la lista desplegable del Custom Select para lograr un posicionamiento y espaciado óptimos con la caja de selección.
- [x] **Nuevo Servicio "Testing":** Se integró la opción `"testing"` en el validador Zod y en el listado de opciones del selector personalizado en `Contacto.tsx`.
- [x] **Seguridad de Base de Datos:** Se implementó una restricción CHECK (`contactos_servicio_check`) en Supabase para blindar la columna `servicio`, previniendo inyecciones de datos basura y asegurando la integridad del backend.
- [x] **Mitigación XSS (Campo Company):** Se añadió validación regex al campo `company` en `Contacto.tsx` para evitar caracteres HTML de riesgo y prevenir vulnerabilidades de XSS almacenado.

---

### [v1.3.2] — 2026-05-09

**Fortalecimiento de Seguridad (Mitigación SQLi)**

- [x] **Validación de Datos:** Implementación de expresiones regulares (Regex) en Zod para los campos `name` y `message`.
- [x] **Sanitización:** Restricción de caracteres especiales y números en entradas críticas para prevenir inyecciones desde el frontend.

---

### [v1.3.1] — 2026-05-09

**Mejoras de UX en Feedback**

- [x] **Componente Modal:** Creación de `src/components/ui/Modal.tsx` con Framer Motion para confirmaciones visuales.
- [x] **Formulario de Contacto:** Integración de feedback visual dinámico (colores y modal) al enviar mensajes de manera exitosa o con error.

---

### [v1.3.0] — 2026-05-07

**Inicio de Fase 2 — Integración con Supabase**

- [x] **Setup Supabase:** Instalación de `@supabase/supabase-js` y configuración del cliente en `src/utils/supabase.ts`.
- [x] **Persistencia de Contactos:** Integración del formulario de contacto con la tabla `contactos` de Supabase.
- [x] **Configuración:** Adición de `.env.example` para la gestión de credenciales.

---

**🏁 Fase 1: Frontend Completo — Finalizada.**

---

### [v1.2.3] — 2026-05-04

**Ajuste de Layout del Equipo**

- [x] **Rediseño de Cuadrícula:** Actualización de la sección de equipo para mostrar a los 5 integrantes en una sola línea (`lg:grid-cols-5`).
- [x] **Optimización de Espacio:** Mejora de la visualización del equipo core en la página Nosotros.

---

### [v1.2.2] — 2026-05-04

**Integración de Assets Reales**

- [x] Sustitución de placeholders externos por imágenes reales del equipo.
- [x] **Ruta de recursos:** Ubicación centralizada en `src/utils/img/` (Alfonso, Daniel, Octavio, Rick).
- [x] **Optimización de Assets:** Implementación de importaciones de ESM (`import Img from '...'`) en lugar de URLs estáticas.
  - _Razón técnica:_ El uso de variables de imagen permite que **Vite** gestione el hashing de archivos para el control de caché, garantice la resolución correcta de rutas en el build de producción y optimice la carga de recursos mediante el pipeline de assets.

---

### [v1.2.1] — 2026-04-30

**Limpieza Técnica y Solidez**

- [x] Eliminación completa de la dependencia `lucide-react` (reemplazada por SVGs inline).
- [x] Corrección de errores de compilación TypeScript en `WhyUs.tsx`.
- [x] Verificación exitosa de build de producción y linting.

---

### [v1.2.0] — 2026-03-25

**Personalización de Marca y Refinamiento UI**

- [x] Implementación del color primario `#0d9488` (Teal Precision) en toda la plataforma.
- [x] Actualización de sombras y variantes hover en botones, tarjetas y procesos.
- [x] Ícono de Twitter actualizado a "X" oficial; corrección de alineación en Footer y página Nosotros.
- [x] Depuración de configuraciones de color obsoletas en `tailwind.config.js`.

---

### [v1.1.0] — 2026-03-23

**Estabilización y Estilos Full Tech**

- [x] Soporte Tailwind v4: configuración de `@tailwindcss/postcss` y sintaxis de importación v4.
- [x] Corrección de rutas relativas en `src/pages/` y `src/sections/`.
- [x] Implementación de SVGs optimizados para íconos (evita fallos de exportación en Lucide).
- [x] Restauración de animaciones de scroll y transiciones de página suaves.
- [x] Limpieza de variables no utilizadas y archivos residuales de Vite.

---

### [v1.0.0] — 2026-03-23

**Lanzamiento inicial — Fase 1**

- [x] Setup con Vite, React y TypeScript.
- [x] Sistema de diseño "Cyber-Precision" (Dark mode).
- [x] Páginas core: Home, Servicios, Nosotros y Contacto.
- [x] Layout global: Navbar + Footer.
- [x] Validación de formularios con Zod.

---

**🏁 Fase 1: Frontend Completo — Finalizada.**

## 🗺️ Roadmap (Pendiente)

> Completar conforme avance el proyecto.

- [ ] **Fase 2:** Integración con backend / APIs.
- [ ] **Fase 2:** Configuración de CI/CD.
- [ ] **Fase 2:** Tests E2E (Playwright o Cypress).
- [ ] **Fase 2:** SEO y meta tags dinámicos.
- [ ] **Fase 2:** Panel de administración.

---

## ⚠️ Decisiones Técnicas Importantes (ADRs)

| #   | Decisión                       | Motivo                                    |
| --- | ------------------------------ | ----------------------------------------- |
| 1   | Tailwind v4 sobre v3           | Mejor rendimiento y sintaxis moderna      |
| 2   | SVGs inline sobre Lucide       | Evitar errores de exportación en build    |
| 3   | Framer Motion para animaciones | Consistencia y control sobre CSS puro     |
| 4   | Zod centralizado               | Reutilización de schemas entre form y API |
| 5   | UUID en lugar de SERIAL (IDs)  | Previene enumeración (seguridad) y escala mejor en DBs modernas |
