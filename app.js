(() => {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const selectAll = (selector, root = document) => [...root.querySelectorAll(selector)];

  const toast = document.getElementById("contactToast");
  let toastTimer;
  const showContactPending = () => {
    clearTimeout(toastTimer);
    toast.hidden = false;
    toastTimer = window.setTimeout(() => { toast.hidden = true; }, 6500);
  };
  selectAll("[data-contact]").forEach((button) => button.addEventListener("click", showContactPending));

  const desktopHero = document.querySelector(".comp-frame");
  const scrollHeader = document.getElementById("scrollHeader");
  const updateStickyHeader = () => {
    const mobile = window.matchMedia("(max-width: 900px)").matches;
    const heroPassed = desktopHero && desktopHero.getBoundingClientRect().bottom <= 10;
    scrollHeader.classList.toggle("is-visible", !mobile && heroPassed);
  };
  document.addEventListener("scroll", updateStickyHeader, { passive: true });
  window.addEventListener("resize", updateStickyHeader);
  updateStickyHeader();

  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeMenu = () => {
    mobileMenu.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  };
  menuToggle.addEventListener("click", () => {
    const open = menuToggle.getAttribute("aria-expanded") !== "true";
    menuToggle.setAttribute("aria-expanded", String(open));
    mobileMenu.classList.toggle("is-open", open);
  });
  selectAll("a", mobileMenu).forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeMenu(); });

  const state = { type: "piquete", zone: null, size: null };
  const sizeOptions = {
    piquete: [
      ["s", "Más chico que una moneda de $100"],
      ["m", "Como una moneda de $500"],
      ["l", "Más grande que una moneda"]
    ],
    trizadura: [
      ["s", "Menos de 15 cm"],
      ["m", "Entre 15 y 30 cm"],
      ["l", "Más de 30 cm"]
    ],
    varios: [
      ["s", "2 o 3 daños"],
      ["l", "Más de 3 daños"]
    ]
  };
  const verdictCopy = {
    repair: {
      badge: "Reparable",
      title: "Probablemente se puede reparar",
      text: "La combinación seleccionada suele ser compatible con una reparación. Una foto nítida y la revisión del vidrio deben confirmarlo."
    },
    eval: {
      badge: "Hay que evaluarlo",
      title: "Necesita revisión con una foto",
      text: "La ubicación o el tamaño dejan el daño en un límite donde no corresponde prometer una solución sin verlo."
    },
    replace: {
      badge: "Posible cambio",
      title: "Probablemente necesites cambiarlo",
      text: "Por tamaño, ubicación o cantidad de daños, la orientación inicial es reemplazar el parabrisas. El modelo y la versión se confirman antes de cotizar."
    }
  };

  const diagTypeButtons = selectAll("[data-diag-type]");
  const damageTypeButtons = selectAll("[data-damage-type]");
  const zoneButtons = selectAll("[data-zone]", document.getElementById("diagnostico"));
  const sizeStep = document.getElementById("sizeStep");
  const sizeChoices = document.getElementById("sizeChoices");
  const diagResult = document.getElementById("diagResult");
  const diagProgress = document.getElementById("diagProgress");
  const heroProgress = document.querySelector(".diagnostic-progress");
  const inspectionMarker = document.getElementById("inspectionMarker");
  const heroAssessmentStatus = document.getElementById("heroAssessmentStatus");
  let inspectionAnimation;
  let inspectionRun = 0;

  const setPressed = (buttons, attr, value) => buttons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset[attr] === value));
  });

  const getVerdict = ({ type, zone, size }) => {
    if (zone === "borde") {
      if (type === "piquete" && size === "l") return "replace";
      if (type === "trizadura" && size !== "s") return "replace";
      if (type === "varios" && size === "l") return "replace";
      return "eval";
    }
    if (zone === "vision") return type === "piquete" && size === "s" ? "eval" : "replace";
    if (type === "piquete") return size === "l" ? "eval" : "repair";
    if (type === "trizadura") return size === "s" ? "repair" : size === "m" ? "eval" : "replace";
    return size === "s" ? "eval" : "replace";
  };

  const updateProgress = () => {
    const step = !state.zone ? 2 : !state.size ? 3 : 3;
    diagProgress.textContent = state.size ? "Resultado listo" : `Paso ${step} de 3`;
  };

  const renderResult = () => {
    updateProgress();
    if (!(state.type && state.zone && state.size)) {
      diagResult.hidden = true;
      return;
    }
    const verdict = getVerdict(state);
    const copy = verdictCopy[verdict];
    diagResult.dataset.verdict = verdict;
    document.getElementById("resultBadge").textContent = copy.badge;
    document.getElementById("resultTitle").textContent = copy.title;
    document.getElementById("resultText").textContent = copy.text;
    diagResult.hidden = false;
  };

  const renderSizes = () => {
    sizeChoices.replaceChildren();
    state.size = null;
    sizeStep.disabled = !state.zone;
    if (!state.zone) {
      const note = document.createElement("span");
      note.className = "console-status";
      note.textContent = "Selecciona primero una zona.";
      sizeChoices.append(note);
      renderResult();
      return;
    }
    sizeOptions[state.type].forEach(([value, label]) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "choice";
      button.dataset.size = value;
      button.setAttribute("aria-pressed", "false");
      button.textContent = label;
      button.addEventListener("click", () => {
        state.size = value;
        setPressed(selectAll("[data-size]", sizeChoices), "size", value);
        renderResult();
      });
      sizeChoices.append(button);
    });
    renderResult();
  };

  const scrollToDiagnosticSection = () => {
    document.getElementById("diagnostico").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  };

  const playHeroInspection = (button) => {
    const runId = ++inspectionRun;
    heroProgress.classList.remove("is-advancing", "is-advanced");
    const selectedLabel = button.querySelector("strong").textContent;
    heroProgress.setAttribute("aria-label", `Progreso del diagnóstico, paso 2 de 3; tipo de daño seleccionado: ${selectedLabel}`);
    heroAssessmentStatus.textContent = `Tipo de daño seleccionado: ${selectedLabel}. Continúa indicando la zona del parabrisas.`;
    void heroProgress.offsetWidth;
    heroProgress.classList.add("is-advancing");

    if (reduceMotion || !window.matchMedia("(min-width: 901px)").matches) {
      heroProgress.classList.add("is-advanced");
      return Promise.resolve();
    }

    inspectionAnimation?.cancel();
    inspectionMarker.hidden = false;
    const frameRect = desktopHero.getBoundingClientRect();
    const sourceRect = button.querySelector(".damage-graphic").getBoundingClientRect();
    const targetRect = heroProgress.querySelector(".progress-step:nth-child(2) .step-dot").getBoundingClientRect();
    const markerSize = inspectionMarker.getBoundingClientRect().width;
    const startX = sourceRect.left + sourceRect.width / 2 - frameRect.left - markerSize / 2;
    const startY = sourceRect.top + sourceRect.height / 2 - frameRect.top - markerSize / 2;
    const endX = targetRect.left + targetRect.width / 2 - frameRect.left - markerSize / 2;
    const endY = targetRect.top + targetRect.height / 2 - frameRect.top - markerSize / 2;

    inspectionAnimation = inspectionMarker.animate([
      { transform: `translate(${startX}px, ${startY}px) scale(.72)`, opacity: .15, offset: 0 },
      { transform: `translate(${startX}px, ${startY}px) scale(1)`, opacity: 1, offset: .12 },
      { transform: `translate(${endX + 8}px, ${endY - 5}px) scale(1.12)`, opacity: 1, offset: .72 },
      { transform: `translate(${endX - 3}px, ${endY + 2}px) scale(.96)`, opacity: 1, offset: .88 },
      { transform: `translate(${endX}px, ${endY}px) scale(1)`, opacity: 1, offset: 1 }
    ], { duration: 720, easing: "cubic-bezier(.16, 1, .3, 1)", fill: "forwards" });

    return inspectionAnimation.finished.catch(() => {}).then(() => {
      if (runId !== inspectionRun) return;
      heroProgress.classList.add("is-advanced");
      inspectionMarker.hidden = true;
    });
  };

  const setType = (type, scrollToDiagnostic = false, sourceButton = null) => {
    state.type = type;
    setPressed(diagTypeButtons, "diagType", type);
    setPressed(damageTypeButtons, "damageType", type);
    damageTypeButtons.forEach((button) => button.classList.toggle("is-selected", button.dataset.damageType === type));
    renderSizes();
    if (scrollToDiagnostic) {
      if (sourceButton?.classList.contains("damage-card")) playHeroInspection(sourceButton).then(scrollToDiagnosticSection);
      else scrollToDiagnosticSection();
    }
  };

  diagTypeButtons.forEach((button) => button.addEventListener("click", () => setType(button.dataset.diagType)));
  damageTypeButtons.forEach((button) => button.addEventListener("click", () => setType(button.dataset.damageType, true, button)));
  zoneButtons.forEach((button) => button.addEventListener("click", () => {
    state.zone = button.dataset.zone;
    setPressed(zoneButtons, "zone", state.zone);
    renderSizes();
  }));
  document.getElementById("resetDiag").addEventListener("click", () => {
    state.type = "piquete";
    state.zone = null;
    state.size = null;
    setPressed(diagTypeButtons, "diagType", state.type);
    setPressed(damageTypeButtons, "damageType", state.type);
    setPressed(zoneButtons, "zone", null);
    renderSizes();
    diagTypeButtons[0].focus();
  });
  renderSizes();

  const comparePanel = document.getElementById("comparePanel");
  const compareRange = document.getElementById("compareRange");
  const compareTabs = selectAll("[data-compare-case]");
  const compareCases = {
    impacto: ["Piquete estabilizado", "La resina ocupa la cavidad y ayuda a detener la propagación. Puede quedar una marca leve: la prioridad es recuperar estabilidad y evitar que el daño avance."],
    linea: ["Trizadura corta contenida", "Una grieta corta puede ser evaluada para reparación según su profundidad y ubicación. La demostración no garantiza que una trizadura específica sea reparable."]
  };
  const setComparePosition = (value) => comparePanel.style.setProperty("--compare-position", `${value}%`);
  compareRange.addEventListener("input", () => setComparePosition(compareRange.value));
  const selectCompareCase = (button) => {
    compareTabs.forEach((tab) => {
      const selected = tab === button;
      tab.setAttribute("aria-selected", String(selected));
      tab.tabIndex = selected ? 0 : -1;
    });
    comparePanel.setAttribute("aria-labelledby", button.id);
    const [title, text] = compareCases[button.dataset.compareCase];
    document.getElementById("compareCaseTitle").textContent = title;
    document.getElementById("compareCaseText").textContent = text;
    comparePanel.dataset.case = button.dataset.compareCase;
  };
  compareTabs.forEach((button, index) => {
    button.addEventListener("click", () => selectCompareCase(button));
    button.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
      event.preventDefault();
      const direction = event.key === "ArrowRight" ? 1 : -1;
      const next = compareTabs[(index + direction + compareTabs.length) % compareTabs.length];
      next.focus();
      selectCompareCase(next);
    });
  });
  setComparePosition(compareRange.value);

  const galleryOptions = selectAll("[data-gallery]");
  const galleryVisual = document.querySelector(".gallery-visual");
  const galleryContent = {
    impacto: "Diagrama de un piquete localizado",
    linea: "Diagrama de una trizadura lineal",
    cambio: "Diagrama de un reemplazo completo"
  };
  const selectGallery = (button) => {
    galleryOptions.forEach((option) => {
      const selected = option === button;
      option.setAttribute("aria-selected", String(selected));
      option.tabIndex = selected ? 0 : -1;
    });
    galleryVisual.setAttribute("aria-labelledby", button.id);
    galleryVisual.dataset.galleryCase = button.dataset.gallery;
    document.getElementById("galleryCaption").textContent = galleryContent[button.dataset.gallery];
  };
  galleryOptions.forEach((button, index) => {
    button.addEventListener("click", () => selectGallery(button));
    button.addEventListener("focus", () => selectGallery(button));
    button.addEventListener("keydown", (event) => {
      if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) return;
      event.preventDefault();
      const forward = event.key === "ArrowDown" || event.key === "ArrowRight";
      const next = galleryOptions[(index + (forward ? 1 : -1) + galleryOptions.length) % galleryOptions.length];
      next.focus();
    });
  });
  if (window.matchMedia("(hover: hover) and (min-width: 761px)").matches) {
    galleryOptions.forEach((button) => button.addEventListener("pointerenter", () => selectGallery(button)));
  }
  selectGallery(galleryOptions[0]);

  const businessForm = document.getElementById("businessForm");
  const formStatus = document.getElementById("formStatus");
  businessForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!businessForm.checkValidity()) {
      businessForm.reportValidity();
      return;
    }
    formStatus.textContent = "Vista previa: el envío aún no está conectado. Conserva estos datos y contacta a Soimar cuando el canal oficial esté confirmado.";
    formStatus.hidden = false;
    formStatus.focus?.();
  });

  const mapViewport = document.getElementById("mapViewport");
  let mapScale = 1;
  const setMapScale = (next) => {
    mapScale = Math.min(1.35, Math.max(1, next));
    mapViewport.style.setProperty("--map-scale", mapScale.toFixed(2));
  };
  document.getElementById("mapZoomIn").addEventListener("click", () => setMapScale(mapScale + .1));
  document.getElementById("mapZoomOut").addEventListener("click", () => setMapScale(mapScale - .1));
})();
