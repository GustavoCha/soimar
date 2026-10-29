---
name: "Soimar Parabrisas"
description: "Precisión laminada de Valparaíso para orientar decisiones sobre vidrio automotriz con claridad y confianza."
colors:
  ink: "#0b1820"
  ink-soft: "#243a45"
  steel-line: "#78929d"
  glass: "#e7f4f7"
  glass-deep: "#cfe6ec"
  service-green: "#0b7b45"
  service-green-dark: "#075b35"
  signal-amber: "#f5b82e"
  paper: "#f5f8f7"
  mineral-charcoal: "#132328"
  glass-white: "#f5faf9"
  focus-green: "#4bd08a"
  state-evaluate: "#bd7900"
  state-replace: "#a83a32"
typography:
  display:
    fontFamily: "Bakbak One, sans-serif"
    fontSize: "clamp(4.25rem, 7vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.88
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Bakbak One, sans-serif"
    fontSize: "clamp(3rem, 5.2vw, 5.75rem)"
    fontWeight: 400
    lineHeight: 0.94
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Bakbak One, sans-serif"
    fontSize: "2rem"
    fontWeight: 400
    lineHeight: 1
  body:
    fontFamily: "Archivo, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.55
  body-mobile:
    fontFamily: "Archivo, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Archivo, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.2
  metadata:
    fontFamily: "Archivo, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 600
    lineHeight: 1.2
rounded:
  badge: "6px"
  stage-label: "7px"
  field: "8px"
  control: "9px"
  action: "10px"
  card: "12px"
  media: "14px"
  panel: "16px"
  windshield: "58px 58px 26px 26px"
  windshield-mobile: "45px 45px 22px 22px"
  pill: "999px"
spacing:
  xs: "0.45rem"
  sm: "0.7rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2.5rem"
  2xl: "3.5rem"
components:
  button-primary:
    backgroundColor: "{colors.service-green}"
    textColor: "#ffffff"
    typography: "{typography.label}"
    rounded: "{rounded.action}"
    padding: "0.8rem 1.1rem"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.service-green-dark}"
    textColor: "#ffffff"
    typography: "{typography.label}"
    rounded: "{rounded.action}"
    padding: "0.8rem 1.1rem"
    height: "52px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.action}"
    padding: "0.8rem 1.1rem"
    height: "52px"
  choice-default:
    backgroundColor: "#f9fcfc"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0.7rem 2.55rem 0.7rem 1rem"
    height: "48px"
  choice-selected:
    backgroundColor: "{colors.service-green}"
    textColor: "#ffffff"
    rounded: "{rounded.control}"
    padding: "0.7rem 2.55rem 0.7rem 1rem"
    height: "48px"
  input-field:
    backgroundColor: "#f8fbfb"
    textColor: "{colors.ink}"
    typography: "{typography.body-mobile}"
    rounded: "{rounded.field}"
    padding: "0.75rem 0.85rem"
    height: "48px"
  navigation-desktop:
    backgroundColor: "{colors.mineral-charcoal}"
    textColor: "{colors.glass-white}"
    padding: "0.75rem 4.5rem"
    height: "78px"
  navigation-mobile:
    backgroundColor: "{colors.mineral-charcoal}"
    textColor: "{colors.glass-white}"
    padding: "0.6rem 1rem"
    height: "68px"
  damage-selector:
    backgroundColor: "rgba(255, 255, 255, 0.66)"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "1rem"
    height: "228px"
  diagnostic-panel:
    backgroundColor: "{colors.glass}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "1.35rem"
  story-frame:
    backgroundColor: "#a8c7d1"
    textColor: "#ffffff"
    rounded: "{rounded.panel}"
    padding: "1rem"
  gallery-empty:
    backgroundColor: "#1b3037"
    textColor: "{colors.glass-white}"
    rounded: "{rounded.panel}"
    padding: "2rem"
  route-option:
    backgroundColor: "transparent"
    textColor: "{colors.glass-white}"
    rounded: "{rounded.control}"
    padding: "0.75rem 0.9rem"
    height: "50px"
---

# Design System: Soimar Parabrisas

## Overview

**Creative North Star: "Precisión laminada"**

El sistema habla desde el mundo del parabrisas y desde Valparaíso: carbón mineral como estructura, vidrio azul-blanco como campo de lectura, verde de servicio para actuar y ámbar de señal para explicar el proceso técnico. La precisión se expresa con reglas finas, estados explícitos, geometría de vidrio y una voz editorial directa; el resultado debe sentirse profesional y cercano, nunca genérico ni frío.

La V3 incorpora fotografía editorial de Valparaíso en el hero y un relato de reparación antes/intervención/después dentro de un encuadre estable. Las imágenes explicativas generadas se rotulan como tales; la galería de trabajos queda reservada a evidencia real y muestra un empty state honesto cuando no hay material autorizado. La composición exacta del hero y el comportamiento sticky pertenecen a esta superficie, mientras que la paleta, la tipografía, las reglas, los estados y la geometría forman el sistema reusable.

**Key Characteristics:**

- Verde de servicio para CTA, selección y confirmación; ámbar únicamente para señal técnica y proceso.
- Bakbak One compacta la voz editorial; Archivo sostiene lectura, controles y orientación.
- Cuerpo de 18px en escritorio y 16px en móvil, con etiquetas de acción de al menos 16px.
- Contraste entre superficies de carbón y campos de vidrio azul-blanco organizados por reglas.
- Relato visual continuo antes/intervención/después, con imágenes generadas claramente rotuladas.
- Galería auténtica con empty state y ubicación resuelta desde una dirección legible.

## Colors

La paleta conserva el lenguaje de vidrio y taller, pero separa con rigor el verde de servicio del ámbar de proceso.

### Primary

- **Verde de servicio:** CTA, selección activa, confirmación de reparación y acentos de interacción.
- **Verde de servicio profundo:** Hover y estados presionados de acciones verdes.
- **Verde de foco:** Contorno de teclado y superficies del navegador que necesitan máxima visibilidad.

### Secondary

- **Vidrio laminado:** Consolas, mapas de parabrisas y superficies explicativas luminosas.
- **Vidrio profundo:** Hover de acciones secundarias y capas de apoyo.
- **Acero reglado:** Bordes, separadores, rieles y anotaciones de baja jerarquía.

### Tertiary

- **Ámbar de proceso:** Fondo y nodos de la secuencia técnica; no es color de CTA ni de selección.

### Neutral

- **Tinta mineral:** Texto principal y diagramas de daño.
- **Tinta suave:** Texto explicativo sobre fondos claros.
- **Carbón de taller:** Navegación, diagnóstico, galería, taller y footer.
- **Blanco vidrio:** Texto sobre carbón y superficies de máxima luz.
- **Papel frío:** Fondo base de lectura.

### States

- **Reparar:** Usa verde de servicio junto con etiqueta y explicación.
- **Evaluar:** Usa ocre de evaluación junto con lenguaje de incertidumbre.
- **Cambiar:** Usa rojo de reemplazo junto con etiqueta y próxima acción.

**The Service Green Rule.** El verde gobierna CTA, selección, foco funcional y confirmación positiva; nunca depende solo del color para comunicar estado.

**The Process Amber Rule.** El ámbar pertenece a la secuencia técnica y sus nodos. No se usa en botones primarios, selectores ni campos enfocados.

**The Explicit State Rule.** Reparar, evaluar y cambiar siempre combinan color, borde, etiqueta y texto explicativo.

## Typography

**Display Font:** Bakbak One (con `sans-serif` como respaldo)

**Body Font:** Archivo (con `sans-serif` como respaldo)

**Character:** Bakbak One aporta masa compacta, ritmo editorial y una referencia automotriz propia. Archivo mantiene instrucciones, controles, datos y orientación serenos y legibles.

### Hierarchy

- **Display** (400, `clamp(4.25rem, 7vw, 6rem)`, interlínea 0.88): titular editorial del hero; máximo 6rem y tracking no menor que `-0.04em`.
- **Headline** (400, `clamp(3rem, 5.2vw, 5.75rem)`, interlínea 0.94): titulares de sección breves, equilibrados y de hasta 15 caracteres de ancho aproximado.
- **Title** (400, 2rem, interlínea 1): paneles, resultados, preguntas y componentes principales.
- **Body** (400, 18px escritorio / 16px móvil, interlínea 1.55): explicación y orientación; el texto prolongado se mantiene cerca de 65–70 caracteres.
- **Label** (600–700, mínimo 16px en controles): acciones, opciones, navegación y campos. Metadatos y captions pueden bajar a 0.82–0.9rem cuando no son la etiqueta accionable.

**The Two-Voice Rule.** Bakbak One habla en titulares; Archivo explica y opera. La display no sustituye cuerpo, metadatos ni instrucciones.

**The Readable Control Rule.** La etiqueta accionable de un control no baja de 16px; el texto auxiliar dentro del mismo control puede ser menor si conserva contraste y jerarquía.

## Layout

Las secciones usan un contenedor centrado de hasta 1320px y padding fluido (`clamp(5.5rem, 9vw, 9rem)` vertical; `clamp(1.25rem, 5vw, 5rem)` horizontal). El hero amplía el lienzo hasta 1440px y organiza copy editorial más diagnóstico en una rejilla asimétrica; esta composición pasa a una sola columna a 960px.

La cabecera sticky mide 78px en escritorio y 68px desde 960px hacia abajo. A 1180px la navegación puede ocupar una segunda fila; a 960px se convierte en menú desplegable de ancho completo. A 720px el cuerpo pasa a 16px, las elecciones del hero se apilan, la galería se reduce a una columna y el relato de reparación deja de depender del sticky.

El relato de reparación mantiene el mismo encuadre visual mientras los capítulos avanzan; en escritorio combina una figura sticky con tres capítulos largos. La galería usa una retícula de 12 columnas cuando existen imágenes reales y un empty state dividido cuando la fuente está vacía. El taller usa una rejilla mapa/información y localiza por la dirección confirmada, no por coordenadas inventadas.

**The Ruled Flow Rule.** Cuando varios elementos equivalentes forman una secuencia o índice, organizarlos con líneas y ritmo antes que encerrarlos en tarjetas iguales.

**The Surface-Specific Hero Rule.** La fotografía de Valparaíso, la rejilla copy/diagnóstico y sus proporciones pertenecen al hero de Soimar; no son una plantilla global para cualquier pantalla.

**The Stable Frame Rule.** En relatos de transformación, conservar encuadre y escala entre etapas para que el cambio sea legible sin comparación artificial.

## Elevation & Depth

El sistema es plano por defecto. La profundidad se construye primero con contraste tonal, reglas de 1px y alternancia carbón/vidrio; las sombras se reservan para superficies que concentran una tarea o permanecen visualmente ancladas durante el scroll.

### Shadow Vocabulary

- **Diagnóstico del hero:** `0 24px 70px rgba(0, 0, 0, 0.18)` para separar la orientación de la fotografía editorial.
- **Consola de inspección:** `0 30px 80px rgba(0, 0, 0, 0.28)` para el flujo diagnóstico principal.
- **Relato sticky:** `0 28px 70px rgba(0, 0, 0, 0.20)` para fijar el encuadre durante la narración.
- **Panel técnico:** `0 22px 55px rgba(0, 0, 0, 0.14)` para una tarea secundaria sobre vidrio claro.
- **Panel empresarial:** `0 26px 65px rgba(0, 0, 0, 0.18)` para concentrar el formulario sobre carbón.

**The Flat-by-Default Rule.** Una regla, un cambio tonal o una sombra resuelve la separación; no acumular borde y sombra ambiental en contenedores ordinarios.

## Shapes

Los campos y controles usan esquinas de 8–10px; los selectores visuales usan 12px; imágenes y paneles de tarea usan 14–16px. Los círculos se reservan para pasos, radios, estados y marcas funcionales. Las píldoras quedan limitadas a superficies del navegador como el scrollbar, no a contenedores de contenido.

La silueta excepcional del mapa de parabrisas usa esquinas superiores amplias y una base más tensa (`58px 58px 26px 26px`; `45px 45px 22px 22px` en móvil), acompañada por frit de puntos y reglas internas. Esa forma se usa cuando el componente representa vidrio automotriz, nunca como máscara decorativa genérica.

**The Glass Geometry Rule.** Las curvas grandes describen vidrio, mapa o escena; los controles permanecen recortados, táctiles y precisos.

## Components

### Buttons

- **Shape:** Rectángulo compacto con radio de 10px, altura mínima de 52px y etiqueta de al menos 16px.
- **Primary:** Verde de servicio con texto blanco, peso 700 y padding 0.8rem × 1.1rem. Hover profundiza el verde; `:active` puede desplazar 1px. La etiqueta nombra la acción real: mientras no exista número oficial, se prepara o copia un mensaje y no se promete envío.
- **Secondary:** Fondo transparente, borde de tinta suave y texto tinta. Hover usa vidrio profundo.
- **Focus / Disabled:** Foco verde brillante de 3px con offset de 4px; disabled conserva legibilidad con opacidad 0.52.

### Chips

- **Style:** Selectores de 48px de alto, fondo casi blanco, borde de acero, radio de 9px y etiqueta de al menos 16px.
- **State:** Hover acerca el borde al verde; selección rellena verde, invierte el texto a blanco y muestra un check explícito.

### Cards / Containers

- **Corner Style:** 12px en selectores visuales; 14–16px en medios, consolas y paneles.
- **Background:** Vidrio para orientación, carbón para contexto de taller y blanco translúcido sobre fotografía.
- **Shadow Strategy:** Solo paneles de tarea, medios sticky o capas sobre imagen; los índices y listados usan reglas.
- **Border:** 1px de acero; una selección puede subir a 3px sin alterar la geometría externa.
- **Internal Padding:** Entre 1rem y 2.2rem según densidad y rol.

### Inputs / Fields

- **Style:** Fondo blanco frío, texto tinta, borde de acero, radio de 8px, altura mínima de 48px y padding 0.75rem × 0.85rem.
- **Focus:** Borde y contorno verde de 2px con offset de 2px; el caret también es verde.
- **Error / Disabled:** El mensaje vive junto al grupo afectado y explica recuperación. Ningún formulario simula envío cuando el canal no está conectado.

### Navigation

La cabecera sticky usa carbón, texto blanco vidrio y una regla inferior. Mide 78px en escritorio y 68px en layouts de hasta 960px. Los enlaces muestran una línea verde de 2px al hover/foco; en móvil, el menú cae bajo la cabecera y cada opción ofrece al menos 54px de alto.

### Editorial Hero

Una fotografía de Valparaíso vista a través del parabrisas ocupa el campo completo, con una veladura clara direccional que protege el contraste. El copy editorial queda separado del diagnóstico; no se rasteriza texto ni se incorpora la composición al asset fotográfico.

### Damage Selector

Tarjeta-interruptor de 12px de radio con símbolo lineal, nombre, descriptor e indicador circular. La selección se expresa con borde verde de 3px, fondo claro, indicador relleno y `aria-pressed`; seleccionar continúa al diagnóstico con scroll suave o inmediato según la preferencia de movimiento.

### Diagnostic Console

Contenedor de vidrio con cabecera reglada, pasos apilados y resultado con borde superior de 8px. Reparar usa verde; evaluar usa ocre; cambiar usa rojo. Cada resultado incluye badge, explicación y próxima acción.

### Repair Story

Relato antes/intervención/después con una figura de proporción 16:10, etiqueta de etapa, progreso lineal y tres capítulos. Los frames cruzan opacidad y filtro durante 700ms con `cubic-bezier(.16, 1, .3, 1)`; el capítulo activo usa 500ms. En móvil y con movimiento reducido, el contenido se vuelve estático y los capítulos permanecen visibles. Toda imagen generada lleva un rótulo persistente que la separa del archivo real.

### Work Gallery

La galería acepta únicamente trabajos reales verificados y autorizados, con imagen, descripción, fecha y tipo de intervención. Si la fuente persistente está vacía o falla, el empty state permanece visible y no se sustituye por imágenes generadas.

### Workshop Location

El mapa se consulta con la dirección confirmada y la repite en una etiqueta superpuesta al iframe y como texto en el panel contiguo. Las rutas a Google Maps, Waze y Apple Maps parten de la misma dirección; coordenadas o Place ID pendientes no se fabrican.

## Do's and Don'ts

### Do:

- **Do** usar verde para CTA, selección, foco funcional y confirmación positiva.
- **Do** reservar el ámbar para la señal técnica y la secuencia de proceso.
- **Do** mantener cuerpo de 18px en escritorio, 16px en móvil y etiquetas accionables de al menos 16px.
- **Do** rotular toda imagen generada y mantenerla separada de la galería de trabajos reales.
- **Do** mostrar un empty state honesto cuando no existen fotografías verificadas.
- **Do** resolver mapa y rutas desde la dirección confirmada y visible.
- **Do** nombrar los controles de WhatsApp según su comportamiento real de preparar o copiar un mensaje mientras no exista número oficial.
- **Do** mantener estados legibles por texto, forma y color, con foco visible y objetivos táctiles de al menos 44px.

### Don't:

- **Don't** usar ámbar como CTA, selección, foco o confirmación positiva.
- **Don't** publicar imágenes generadas como si fueran trabajos reales ni ocultar su rótulo explicativo.
- **Don't** inventar coordenadas, Place ID, fotografías, testimonios o datos comerciales pendientes.
- **Don't** prometer que un mensaje se envía cuando el canal oficial todavía no está conectado.
- **Don't** convertir la composición editorial del hero o el sticky de reparación en una plantilla global.
- **Don't** estructurar páginas con cuadrículas repetidas de tarjetas iguales cuando una lista reglada comunica mejor la relación.
- **Don't** usar degradado en texto, desenfoque decorativo, halos sin offset, sombras duras de bloque, emoji como icono o máscaras geométricas para imitar contornos fotográficos.
