---
name: "Soimar Parabrisas"
description: "Precisión laminada para orientar decisiones sobre vidrio automotriz con claridad y confianza."
colors:
  ink: "#0b1720"
  ink-soft: "#263a48"
  steel: "#6f8999"
  glass: "#e7f7ff"
  signal-amber: "#f8b829"
  paper: "#f6fafc"
  mineral-charcoal: "#1b272b"
  glass-white: "#f4f8fa"
  focus-blue: "#0878ad"
  state-repair: "#19704d"
  state-evaluate: "#c07a00"
  state-replace: "#a53a32"
typography:
  display:
    fontFamily: "Bakbak One, sans-serif"
    fontSize: "clamp(2.7rem, 6vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.94
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Bakbak One, sans-serif"
    fontSize: "2rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Archivo, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.62
  label:
    fontFamily: "Archivo, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "0.03em"
rounded:
  selector: "5px"
  label: "6px"
  field: "8px"
  control: "9px"
  action: "10px"
  panel: "16px"
  pill: "999px"
spacing:
  xs: "0.4rem"
  sm: "0.65rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2.5rem"
  2xl: "3.5rem"
components:
  button-signal:
    backgroundColor: "{colors.signal-amber}"
    textColor: "{colors.ink}"
    rounded: "{rounded.action}"
    padding: "0.8rem 1.1rem"
    height: "50px"
    typography: "{typography.label}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.action}"
    padding: "0.8rem 1.1rem"
    height: "50px"
    typography: "{typography.label}"
  choice-default:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0.65rem 0.9rem"
    height: "46px"
  choice-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.glass-white}"
    rounded: "{rounded.control}"
    padding: "0.65rem 0.9rem"
    height: "46px"
  input-field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "0.75rem 0.8rem"
    height: "46px"
    typography: "{typography.body}"
  navigation-dark:
    backgroundColor: "{colors.mineral-charcoal}"
    textColor: "{colors.glass-white}"
    padding: "0 4rem"
    height: "68px"
  diagnostic-panel:
    backgroundColor: "{colors.glass}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "1.25rem"
  damage-selector:
    backgroundColor: "rgba(221, 241, 250, 0.36)"
    textColor: "{colors.ink}"
    rounded: "{rounded.selector}"
    padding: "0.5rem 1.0625rem"
  service-index:
    backgroundColor: "{colors.glass}"
    textColor: "{colors.ink}"
    padding: "0.875rem 1.3rem"
---

# Design System: Soimar Parabrisas

## Overview

**Creative North Star: "Precisión laminada"**

El sistema toma su carácter del propio parabrisas: carbón mineral como estructura, blanco vidrio como campo de lectura, azul laminado como atmósfera y ámbar señal como instrucción inequívoca. Se siente técnico y cercano a la vez; la precisión aparece en líneas regladas, estados explícitos, bordes finos y anotaciones legibles, no en una estética fría o corporativa.

La mayor parte de la interfaz permanece plana y luminosa para que el contenido se pueda escanear con rapidez. Las superficies oscuras señalan contexto de taller o inspección; el ámbar guía una decisión o confirma una selección. La composición exacta del parabrisas del hero pertenece a esa superficie y no es una plantilla global: lo durable es el lenguaje material, el ritmo y la claridad de estado.

**Key Characteristics:**

- Contraste entre estructura mineral oscura y campos de vidrio azul-blanco.
- Ámbar escaso, funcional y siempre asociado a acción, avance o selección.
- Información organizada con reglas finas, índices y estados visibles.
- Controles rectangulares compactos; curvas amplias solo cuando describen vidrio o contenedores mayores.
- Un único gesto de movimiento amortiguado para la inspección; el resto responde de inmediato.

## Colors

La paleta combina neutros azulados de vidrio y acero con un acento ámbar de señalización; los verdes, ocres y rojos aparecen únicamente como estados diagnósticos.

### Primary

- **Ámbar señal:** Acción primaria, selección activa, avance del diagnóstico y superficies de proceso que necesitan prioridad inmediata.
- **Azul de foco:** Contorno de teclado, cursor y estados de interacción que deben distinguirse del acento de acción.

### Secondary

- **Azul laminado:** Campos amplios, mapas de parabrisas y fondos explicativos donde la transparencia del vidrio debe sentirse sin usar desenfoque.
- **Acero reglado:** Bordes, divisores, rieles y anotaciones de baja jerarquía.

### Neutral

- **Tinta mineral:** Texto principal y estados seleccionados de alto contraste.
- **Tinta suave:** Texto secundario sobre fondos claros.
- **Carbón de taller:** Navegación, secciones inmersivas y contenedores de formularios oscuros.
- **Blanco vidrio:** Texto sobre carbón y superficies muy claras.
- **Papel frío:** Fondo base y campos de formulario.

### States

- **Reparar:** Marca positiva de una orientación potencialmente reparable.
- **Evaluar:** Indica incertidumbre técnica o validación pendiente.
- **Cambiar:** Señala una orientación hacia reemplazo; no se usa como decoración.

**The Signal Amber Rule.** El ámbar siempre hace una de tres cosas: invita a actuar, confirma una selección o muestra avance. Su rareza conserva su fuerza.

**The Explicit State Rule.** Los veredictos nunca dependen solo del color: borde, etiqueta y texto deben expresar el mismo estado.

## Typography

**Display Font:** Bakbak One (con `sans-serif` como respaldo)

**Body Font:** Archivo (con `sans-serif` como respaldo)

**Character:** Bakbak One aporta la masa compacta y automotriz de los titulares; Archivo mantiene instrucciones, controles y texto técnico calmados y muy legibles. La diferencia entre ambas familias reemplaza adornos innecesarios.

### Hierarchy

- **Display** (400, escala fluida hasta 6rem, interlínea 0.94): titulares de sección breves y equilibrados; evitar párrafos o etiquetas largas.
- **Title** (400, 2rem, interlínea 1): títulos de panel, resultados, preguntas y componentes de primer nivel.
- **Body** (400, 1rem, interlínea 1.62): explicación y orientación; mantener medidas habituales de 62–72 caracteres.
- **Label** (600, 0.85rem, tracking 0.03em): estados, metadatos y controles compactos. Las mayúsculas espaciadas quedan reservadas para avisos reglados y rótulos cortos.

**The Two-Voice Rule.** Bakbak One habla en títulos; Archivo explica y opera. No usar la display como sustituto de texto técnico o cuerpo.

**The Controlled Compression Rule.** El tracking negativo se limita a títulos grandes y nunca supera `-0.04em`; no convertir la compresión específica del hero en una regla tipográfica general.

## Layout

Las secciones usan un contenedor centrado de hasta 1380px y padding exterior fluido (`clamp(5rem, 9vw, 9rem)` vertical; `clamp(1.25rem, 5vw, 5.5rem)` horizontal). Los grupos internos alternan rejillas asimétricas de dos columnas con listas regladas a ancho completo; los espacios entre bloques se mueven habitualmente entre 2.5rem y 3.5rem.

A 1000px, las rejillas de diagnóstico, comparación, galería, empresas, confianza y taller pasan a una columna. A 900px, la composición superpuesta del hero se reemplaza por una experiencia móvil propia con cabecera fija de 68px. A 760px, índices y procesos se apilan, el padding de sección baja a 4.5rem × 1rem y los controles conservan objetivos táctiles de al menos 44px.

**The Ruled Flow Rule.** Cuando varios elementos equivalentes forman una secuencia o índice, organizarlos con líneas y ritmo vertical antes que encerrarlos en una cuadrícula de tarjetas iguales.

**The Surface-Specific Hero Rule.** La superposición sobre el parabrisas, sus coordenadas y su escala pertenecen al hero de Soimar; no deben convertirse en una plantilla para nuevas pantallas.

## Elevation & Depth

El sistema es plano por defecto. La profundidad se construye primero con contraste tonal, bordes de 1px y capas de carbón/vidrio; las sombras aparecen solo cuando una superficie debe mantenerse por encima del flujo o concentrar una tarea.

### Shadow Vocabulary

- **Acción:** `0 8px 20px rgba(0, 0, 0, 0.16)` para la llamada principal sobre una imagen o campo complejo.
- **Cabecera elevada:** `0 10px 25px rgba(0, 0, 0, 0.28)` para navegación que se despega del parabrisas.
- **Consola de inspección:** `0 26px 65px rgba(0, 0, 0, 0.25)` para el flujo diagnóstico principal.
- **Panel de tarea:** `0 24px 60px rgba(0, 0, 0, 0.18)` para formularios oscuros que concentran una acción.

**The Flat-by-Default Rule.** Una línea, un cambio tonal o una sombra resuelve la separación; no acumular borde y sombra suave en tarjetas ordinarias.

## Shapes

Los controles usan rectángulos compactos de 5–10px de radio. Los paneles de tarea y escenas usan 14–16px. Los círculos se reservan para pasos, marcadores, pines y estados puntuales; las píldoras no son una forma de contenedor general.

La silueta excepcional del parabrisas usa esquinas superiores amplias y base más tensa (48px 48px 28px 28px), acompañada por frit de puntos y reglas internas. Esa forma está autorizada cuando el componente representa vidrio automotriz, no como máscara decorativa genérica.

**The Glass Geometry Rule.** Las curvas grandes describen vidrio, mapa o escena; los controles permanecen recortados y precisos.

## Components

### Buttons

- **Shape:** Rectángulo compacto con esquinas de 8–10px y altura mínima de 50px.
- **Primary:** Ámbar señal sobre tinta mineral, peso 700 y padding 0.8rem × 1.1rem. El hover aclara el ámbar; el foco usa un contorno azul visible separado del borde.
- **Secondary:** Fondo transparente, borde de 1px y tinta mineral. En superficies oscuras, texto blanco vidrio y borde de acero claro.
- **Disabled:** Reduce opacidad a 0.55 y cambia el cursor; la etiqueta debe seguir siendo legible.

### Chips

- **Style:** Selectores de 46px de alto, fondo papel, borde de acero y radio de 9px.
- **State:** Hover oscurece el borde; selección invierte a tinta mineral con texto blanco vidrio. En el mapa del parabrisas, la selección usa ámbar para mantener continuidad con la señal de diagnóstico.

### Cards / Containers

- **Corner Style:** 14–16px en consolas y paneles; 5px en selectores visuales del hero.
- **Background:** Vidrio claro para inspección, carbón para contexto de taller y papel para contenido general.
- **Shadow Strategy:** Solo consolas o tareas elevadas; los índices se separan con reglas.
- **Border:** 1px de acero o tinta azulada, con estados explícitos que sustituyen el color del borde.
- **Internal Padding:** Entre 1.25rem y 2rem según la densidad del contenido.

### Inputs / Fields

- **Style:** Fondo papel frío, texto tinta, borde de acero, radio de 8px, altura mínima de 46px y padding 0.75rem × 0.8rem.
- **Focus:** Borde y contorno de 2px en ámbar señal, con offset de 2px; el cursor usa azul de foco.
- **Error / Disabled:** Los mensajes se colocan junto al campo o grupo afectado y explican recuperación; no se simula éxito cuando un canal no está conectado.

### Navigation

La navegación usa carbón de taller, texto blanco vidrio y 68px de alto. En escritorio, los enlaces se distribuyen en una sola línea y aclaran a ámbar al pasar el cursor; después del hero, la barra entra con una transición amortiguada. En móvil, el menú ocupa todo el ancho bajo la cabecera fija, conserva controles de al menos 44px y separa opciones con reglas finas.

### Damage Selector

Es una tarjeta-interruptor, no una tarjeta de contenido genérica. Combina diagrama lineal, nombre, descripción breve y un indicador circular; la selección se expresa con borde ámbar más grueso, indicador relleno y `aria-pressed`.

### Diagnostic Console

Contenedor de vidrio claro con cabecera reglada, pasos apilados y resultado final con borde superior de 8px. Reparar, evaluar y cambiar usan sus colores semánticos, siempre acompañados por una etiqueta y explicación textual.

### Service Index

Fila o celda reglada con número funcional, regla corta, título, descripción y flecha SVG. En páginas nuevas, reutilizar su lógica de índice solo cuando el número comunica secuencia o referencia; no numerar secciones por ornamento.

### Inspection Motion

La firma de movimiento lleva un marcador desde el daño seleccionado hasta el segundo paso y acompaña el trayecto con un barrido del rail. Dura 720ms con `cubic-bezier(.16, 1, .3, 1)`, incluye un sobrepaso amortiguado y termina en estado explícito. Con movimiento reducido o en móvil, el estado avanza de inmediato sin animación. La línea del proceso permanece estática.

## Do's and Don'ts

### Do:

- **Do** usar ámbar para una acción, selección o avance concreto, nunca como relleno ambiental.
- **Do** organizar índices, servicios y preguntas con reglas finas y jerarquía tipográfica antes de añadir contenedores.
- **Do** mantener estados legibles por texto, forma y color, con foco visible y objetivos táctiles de al menos 44px.
- **Do** usar Bakbak One para titulares breves y Archivo para lectura, instrucciones y controles.
- **Do** conservar un solo momento de movimiento authored: el barrido amortiguado de inspección, con alternativa inmediata para movimiento reducido.

### Don't:

- **Don't** convertir la composición, coordenadas o escala del hero del parabrisas en una regla global.
- **Don't** estructurar páginas con filas repetidas de tarjetas iguales de icono, título y texto cuando una lista reglada comunica mejor la relación.
- **Don't** usar degradado en texto, desenfoque de vidrio decorativo, halos sin offset o sombras duras de bloque.
- **Don't** reemplazar iconos SVG coherentes por emoji o glifos Unicode.
- **Don't** usar una curva de parabrisas, frit o diagramas de daño como decoración sin función semántica.
