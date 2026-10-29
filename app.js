(() => {
  "use strict";

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const mobileLayout = window.matchMedia("(max-width: 720px)");

  const toast = $("#toast");
  let toastTimer;
  const showToast = (message) => {
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.hidden = false;
    toastTimer = window.setTimeout(() => {
      toast.hidden = true;
    }, 5200);
  };

  const copyText = async (value) => {
    try {
      await navigator.clipboard.writeText(value);
      return true;
    } catch {
      const field = document.createElement("textarea");
      field.value = value;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.append(field);
      field.select();
      const copied = document.execCommand("copy");
      field.remove();
      return copied;
    }
  };

  $$("[data-contact]").forEach((button) => {
    button.addEventListener("click", async () => {
      const message = button.dataset.message || "Hola Soimar, quisiera consultar por mi parabrisas.";
      const copied = await copyText(message);
      showToast(copied
        ? "Mensaje preparado y copiado. El número oficial de WhatsApp aún debe confirmarse."
        : "Mensaje preparado. El número oficial de WhatsApp aún debe confirmarse.");
    });
  });

  const menuToggle = $("#menuToggle");
  const primaryNav = $("#primaryNav");
  const closeMenu = () => {
    menuToggle.setAttribute("aria-expanded", "false");
    primaryNav.classList.remove("is-open");
  };
  menuToggle.addEventListener("click", () => {
    const open = menuToggle.getAttribute("aria-expanded") !== "true";
    menuToggle.setAttribute("aria-expanded", String(open));
    primaryNav.classList.toggle("is-open", open);
  });
  $$("a", primaryNav).forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  const diagnosis = { type: "piquete", zone: null, size: null };
  const typeLabels = { piquete: "piquete", trizadura: "trizadura", varios: "varios daños" };
  const zoneLabels = { vision: "frente al conductor", centro: "centro", borde: "cerca del borde" };
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

  const diagTypeButtons = $$("[data-diag-type]");
  const heroTypeButtons = $$("[data-damage-type]");
  const zoneButtons = $$("[data-zone]", $("#diagnostico"));
  const sizeStep = $("#sizeStep");
  const sizeChoices = $("#sizeChoices");
  const diagResult = $("#diagResult");
  const diagProgress = $("#diagProgress");
  const resultContact = $("#resultContact");

  const setPressed = (buttons, dataName, value) => {
    buttons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset[dataName] === value));
    });
  };

  const updateProgress = () => {
    if (diagnosis.size) diagProgress.textContent = "Resultado listo";
    else if (diagnosis.zone) diagProgress.textContent = "Paso 3 de 3";
    else if (diagnosis.type) diagProgress.textContent = "Paso 2 de 3";
    else diagProgress.textContent = "Paso 1 de 3";
  };

  const renderResult = () => {
    updateProgress();
    if (!(diagnosis.type && diagnosis.zone && diagnosis.size)) {
      diagResult.hidden = true;
      return;
    }
    const verdict = getVerdict(diagnosis);
    const copy = verdictCopy[verdict];
    diagResult.dataset.verdict = verdict;
    $("#resultBadge").textContent = copy.badge;
    $("#resultTitle").textContent = copy.title;
    $("#resultText").textContent = copy.text;
    const selectedSize = sizeOptions[diagnosis.type].find(([value]) => value === diagnosis.size)?.[1] || diagnosis.size;
    resultContact.dataset.message = `Hola Soimar, hice la guía visual. Seleccioné ${typeLabels[diagnosis.type]}, ubicado ${zoneLabels[diagnosis.zone]}, tamaño ${selectedSize.toLowerCase()}. El resultado orientativo fue: ${copy.title}. Quisiera enviar una foto.`;
    diagResult.hidden = false;
  };

  const renderSizes = () => {
    sizeChoices.replaceChildren();
    diagnosis.size = null;
    sizeStep.disabled = !diagnosis.zone;
    if (!diagnosis.zone) {
      const note = document.createElement("span");
      note.className = "console-status";
      note.textContent = "Selecciona primero una zona.";
      sizeChoices.append(note);
      renderResult();
      return;
    }
    sizeOptions[diagnosis.type].forEach(([value, label]) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "choice";
      button.dataset.size = value;
      button.setAttribute("aria-pressed", "false");
      button.textContent = label;
      button.addEventListener("click", () => {
        diagnosis.size = value;
        setPressed($$("[data-size]", sizeChoices), "size", value);
        renderResult();
      });
      sizeChoices.append(button);
    });
    renderResult();
  };

  const setType = (type, moveToGuide = false) => {
    diagnosis.type = type;
    setPressed(diagTypeButtons, "diagType", type);
    setPressed(heroTypeButtons, "damageType", type);
    heroTypeButtons.forEach((button) => button.classList.toggle("is-selected", button.dataset.damageType === type));
    renderSizes();
    if (moveToGuide) {
      $("#diagnostico").scrollIntoView({ behavior: reducedMotion.matches ? "auto" : "smooth", block: "start" });
    }
  };

  diagTypeButtons.forEach((button) => button.addEventListener("click", () => setType(button.dataset.diagType)));
  heroTypeButtons.forEach((button) => button.addEventListener("click", () => setType(button.dataset.damageType, true)));
  zoneButtons.forEach((button) => button.addEventListener("click", () => {
    diagnosis.zone = button.dataset.zone;
    setPressed(zoneButtons, "zone", diagnosis.zone);
    renderSizes();
  }));
  $("#resetDiag").addEventListener("click", () => {
    diagnosis.type = "piquete";
    diagnosis.zone = null;
    diagnosis.size = null;
    setPressed(diagTypeButtons, "diagType", diagnosis.type);
    setPressed(heroTypeButtons, "damageType", diagnosis.type);
    heroTypeButtons.forEach((button) => button.classList.toggle("is-selected", button.dataset.damageType === diagnosis.type));
    setPressed(zoneButtons, "zone", null);
    renderSizes();
    diagTypeButtons[0].focus();
  });
  renderSizes();

  const repairStory = $("#repairStory");
  const repairFigure = $("#repairFigure");
  const repairStageLabel = $("#repairStageLabel");
  const repairChapters = $$("[data-story-stage]");
  const stageLabels = ["Antes", "Intervención", "Después"];
  let storyFrame;

  const updateStory = () => {
    storyFrame = null;
    if (reducedMotion.matches || mobileLayout.matches) return;
    const rect = repairStory.getBoundingClientRect();
    const available = Math.max(1, repairStory.offsetHeight - window.innerHeight);
    const progress = Math.min(1, Math.max(0, -rect.top / available));
    const stage = progress < .34 ? 0 : progress < .68 ? 1 : 2;
    repairFigure.dataset.stage = String(stage);
    repairFigure.style.setProperty("--story-progress", progress.toFixed(3));
    repairStageLabel.textContent = stageLabels[stage];
    repairChapters.forEach((chapter) => chapter.classList.toggle("is-active", Number(chapter.dataset.storyStage) === stage));
  };
  const requestStoryUpdate = () => {
    if (storyFrame) return;
    storyFrame = requestAnimationFrame(updateStory);
  };
  window.addEventListener("scroll", requestStoryUpdate, { passive: true });
  window.addEventListener("resize", requestStoryUpdate);
  reducedMotion.addEventListener?.("change", requestStoryUpdate);
  mobileLayout.addEventListener?.("change", requestStoryUpdate);
  updateStory();

  const businessForm = $("#businessForm");
  const formStatus = $("#formStatus");
  businessForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!businessForm.checkValidity()) {
      businessForm.reportValidity();
      return;
    }
    formStatus.textContent = "Vista previa: esta solicitud no se envía";
    formStatus.hidden = false;
    formStatus.focus();
  });

  const galleryGrid = $("#galleryGrid");
  const galleryEmpty = $("#galleryEmpty");
  const renderGallery = (items) => {
    if (!Array.isArray(items) || items.length === 0) return;
    const fragment = document.createDocumentFragment();
    items.forEach((item) => {
      if (!item || typeof item.image !== "string" || typeof item.description !== "string") return;
      const figure = document.createElement("figure");
      figure.className = "gallery-card";
      const image = document.createElement("img");
      image.src = item.image;
      image.alt = item.alt || item.description;
      image.loading = "lazy";
      const caption = document.createElement("figcaption");
      caption.textContent = [item.type, item.description, item.date].filter(Boolean).join(" · ");
      figure.append(image, caption);
      fragment.append(figure);
    });
    if (!fragment.childNodes.length) return;
    galleryGrid.append(fragment);
    galleryGrid.hidden = false;
    galleryGrid.style.display = "grid";
    galleryEmpty.hidden = true;
  };
  fetch("assets/data/gallery.json")
    .then((response) => response.ok ? response.json() : [])
    .then(renderGallery)
    .catch(() => {});

  const showMap = $("#showMap");
  const workshopMap = $("#workshopMap");
  const mapFallback = $("#mapFallback");
  const mapAddress = $("#mapAddress");
  showMap.addEventListener("click", () => {
    workshopMap.hidden = false;
    mapAddress.hidden = false;
    mapFallback.hidden = true;
    workshopMap.focus();
  });

  window.__soimarTest = { getVerdict };
})();
