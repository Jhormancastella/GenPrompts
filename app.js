(function () {
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));

  const state = {
    lastPrompt: '',
    lastNegative: '',
    lang: 'es',
    mode: 'basic',
    theme: 'dark'
  };

  const I18N = {
    es: {
      slogan: 'Domina la IA, no luches con ella. Prompts precisos para resultados épicos.',
      mode_basic: 'Básico',
      mode_advanced: 'Avanzado',
      guide_title: 'GUÍA RÁPIDA (2 MIN)',
      guide_step_1: 'Define el sujeto. Si usas una imagen de referencia, deja "Mantener de referencia".',
      guide_step_2: 'Elige fondo y atmósfera. Aquí creas el escenario y el "ambiente".',
      guide_step_3: 'Ajusta iluminación y estilo. Esto define el look final (fotografía, cine, arte).',
      guide_step_4: 'Selecciona plataforma y formato. Cada IA tiene pequeñas reglas.',
      guide_tip: 'Prompts más claros y específicos = mejores resultados. Evita mezclar demasiados estilos.',
      section_subject: 'SUJETO',
      subject_keep: '🔒 Mantener de referencia',
      subject_custom: '✏️ Personalizado',
      subject_placeholder: 'Ej: A young woman with curly red hair wearing a leather jacket...',
      subject_tip: '🔒 = No modifica al sujeto de la imagen de referencia',
      section_background: 'FONDO / ESCENARIO',
      bg_keep: '🔒 Mantener original',
      bg_preset: '🎭 Preset temático',
      bg_custom: '✏️ Personalizado',
      bg_placeholder: 'Describe el fondo con detalle: lugar, elementos, hora del día...',
      section_atmosphere: 'ATMÓSFERA / EFECTOS',
      atmo_label: 'Selecciona uno o más efectos (multi-selección):',
      atmo_placeholder: '(Opcional) Añade efectos adicionales personalizados...',
      section_lighting: 'ILUMINACIÓN',
      light_key: 'Luz principal (key light):',
      light_tech: 'Técnica de iluminación:',
      section_style: 'ESTILO Y CALIDAD',
      style_medium: 'Medio / Estilo visual:',
      style_camera: 'Cámara (para estilos fotográficos):',
      style_lens: 'Lente:',
      style_quality: 'Resolución y calidad:',
      section_palette: 'PALETA DE COLORES',
      palette_placeholder: '(Opcional) Personaliza o añade colores específicos...',
      section_mood: 'MOOD / ESTADO DE ÁNIMO',
      mood_label: 'Selecciona uno o más (multi-selección):',
      section_aspect: 'FORMATO Y RELACIÓN DE ASPECTO',
      section_platform: 'PLATAFORMA DESTINO',
      platform_tip: 'Cada plataforma interpreta el prompt distinto. Aquí ajustamos el formato final automáticamente.',
      generate_btn: '✨ GENERAR PROMPT ✨',
      output_title: '📋 PROMPT GENERADO',
      output_hint: 'Selecciona las opciones y presiona "Generar Prompt"...',
      copy_btn: 'Copiar',
      negative_label: 'NEGATIVO:',
      translate_tip_body:
        'El prompt ya se genera en español cuando la web está en español. Si tu herramienta de IA da mejores resultados en inglés, copia el texto, tradúcelo (DeepL, Google Translate, etc.) y pégalo en el generador.'
    },
    en: {
      slogan: 'Master AI, don\'t wrestle with it. Precise prompts for epic results.',
      mode_basic: 'Basic',
      mode_advanced: 'Advanced',
      guide_title: 'QUICK GUIDE (2 MIN)',
      guide_step_1: 'Define the subject. If you use a reference image, keep "Reference".',
      guide_step_2: 'Choose background and atmosphere. This sets the scene and ambience.',
      guide_step_3: 'Adjust lighting and style. This defines the final look (photo, cinema, art).',
      guide_step_4: 'Select platform and format. Each AI has small rules.',
      guide_tip: 'Clearer, specific prompts = better results. Avoid mixing too many styles.',
      section_subject: 'SUBJECT',
      subject_keep: '🔒 Keep reference',
      subject_custom: '✏️ Custom',
      subject_placeholder: 'Ex: A young woman with curly red hair wearing a leather jacket...',
      subject_tip: '🔒 = Keeps the subject from the reference image',
      section_background: 'BACKGROUND / SCENE',
      bg_keep: '🔒 Keep original',
      bg_preset: '🎭 Themed preset',
      bg_custom: '✏️ Custom',
      bg_placeholder: 'Describe the background in detail: place, elements, time of day...',
      section_atmosphere: 'ATMOSPHERE / EFFECTS',
      atmo_label: 'Select one or more effects (multi-select):',
      atmo_placeholder: '(Optional) Add custom effects...',
      section_lighting: 'LIGHTING',
      light_key: 'Key light:',
      light_tech: 'Lighting technique:',
      section_style: 'STYLE & QUALITY',
      style_medium: 'Medium / Visual style:',
      style_camera: 'Camera (for photo styles):',
      style_lens: 'Lens:',
      style_quality: 'Resolution and quality:',
      section_palette: 'COLOR PALETTE',
      palette_placeholder: '(Optional) Customize or add specific colors...',
      section_mood: 'MOOD',
      mood_label: 'Select one or more (multi-select):',
      section_aspect: 'FORMAT & ASPECT RATIO',
      section_platform: 'TARGET PLATFORM',
      platform_tip: 'Each platform interprets prompts differently. We auto-adjust the final format.',
      generate_btn: '✨ GENERATE PROMPT ✨',
      output_title: '📋 GENERATED PROMPT',
      output_hint: 'Choose options and press "Generate Prompt"...',
      copy_btn: 'Copy',
      negative_label: 'NEGATIVE:',
      translate_tip_body:
        'Many image models respond best to English prompts. Copy the generated text, translate it with DeepL, Google Translate, or similar, then paste it into your generator for more predictable results.'
    }
  };

  const PROMPT = {
    es: {
      subject_keep:
        'Misma persona, mismo rostro, misma pose, misma expresión, misma ropa, misma posición corporal, sin cambios.',
      bg_keep: 'Mantener el fondo original sin modificar.',
      bg_prefix: 'Fondo:',
      atmo_prefix: 'Atmósfera:',
      light_prefix: 'Iluminación:',
      key_light_suffix: ' como luz principal',
      color_prefix: 'Paleta de color:',
      mood_prefix: 'Estado de ánimo:',
      platform_midjourney_extra: ' --q 2 --s 750 --v 6.1',
      platform_stable_line: 'Pasos: 30-40, CFG 6-8, Sampler: DPM++ 2M Karras, ',
      platform_dalle: 'Mantén el prompt claro y concreto. Evita jerga de cámara u objetivo si confunde al modelo.',
      platform_generic: 'Genérico: prompt conciso y descriptivo en términos visuales.',
      negative_stable:
        'rostro deforme, rasgos faciales alterados, ropa cambiada, pose distinta, borroso, baja calidad, sobresaturado, marca de agua, texto, cartoon, anime, ilustración, pintura, dibujo, dedos extra, extremidades extra, desfigurado, anatomía incorrecta',
      negative_midjourney: '--no rostro deforme, rasgos alterados, cartoon, borroso, texto, marca de agua, extremidades extra'
    },
    en: {
      subject_keep:
        'Same person, same face, same pose, same expression, same clothing, same body position, untouched.',
      bg_keep: 'Keep original background unchanged.',
      bg_prefix: 'Background:',
      atmo_prefix: 'Atmosphere:',
      light_prefix: 'Lighting:',
      key_light_suffix: ' as key light',
      color_prefix: 'Color palette:',
      mood_prefix: 'Mood:',
      platform_midjourney_extra: ' --q 2 --s 750 --v 6.1',
      platform_stable_line: 'Steps: 30-40, CFG 6-8, Sampler: DPM++ 2M Karras, ',
      platform_dalle: 'Keep prompt clean and specific. Avoid camera or lens jargon if it confuses the model.',
      platform_generic: 'Generic: keep the prompt concise and visually descriptive.',
      negative_stable:
        'deformed face, altered facial features, changed clothing, different pose, blurry, low quality, oversaturated, watermark, text, cartoon, anime, illustration, painting, drawing, extra fingers, extra limbs, disfigured, bad anatomy',
      negative_midjourney: '--no deformed face, altered features, cartoon, blurry, text, watermark, extra limbs'
    }
  };

  function getPromptBundle() {
    return PROMPT[state.lang] || PROMPT.en;
  }

  function getLabels() {
    return I18N[state.lang] || I18N.es;
  }

  function promptValue(opt) {
    if (!opt || typeof opt.value === 'undefined') return '';
    if (state.lang === 'es' && 'valueEs' in opt) {
      return opt.valueEs;
    }
    return opt.value;
  }

  function optionPair(opt) {
    return { value: promptValue(opt), label: opt.label };
  }

  function setSubjectInputState() {
    const subjectMode = $('input[name="subject"]:checked').value;
    $('#subjectText').disabled = subjectMode !== 'custom';
  }

  function setBackgroundState() {
    const bgMode = $('input[name="background"]:checked').value;
    $('#bgPresetOptions').style.display = bgMode === 'preset' ? 'block' : 'none';
    $('#bgText').style.display = bgMode === 'custom' ? 'block' : 'none';
  }

  function getCheckedValues(selector) {
    return $$(selector + ':checked').map((el) => el.value);
  }

  function joinSentence(prefix, items) {
    if (items.length === 0) return '';
    return prefix + ' ' + items.join(', ') + '.';
  }

  function cleanSentence(text) {
    return text.replace(/\s+/g, ' ').trim();
  }

  function buildPrompt() {
    const P = getPromptBundle();
    const parts = [];

    const subjectMode = $('input[name="subject"]:checked').value;
    if (subjectMode === 'keep') {
      parts.push(P.subject_keep);
    } else {
      const customSubject = $('#subjectText').value.trim();
      if (customSubject) parts.push(customSubject + '.');
    }

    const bgMode = $('input[name="background"]:checked').value;
    if (bgMode === 'keep') {
      parts.push(P.bg_keep);
    } else if (bgMode === 'preset') {
      const bgVal = $('#bgSelect').value;
      if (bgVal) parts.push(P.bg_prefix + ' ' + bgVal + '.');
    } else {
      const bgCustom = $('#bgText').value.trim();
      if (bgCustom) parts.push(P.bg_prefix + ' ' + bgCustom + '.');
    }

    const atmoEffects = getCheckedValues('[data-group="atmosphere"] input[type="checkbox"]');
    const atmoCustom = $('#atmoCustom').value.trim();
    const atmoAll = atmoCustom ? atmoEffects.concat([atmoCustom]) : atmoEffects;
    const atmoSentence = joinSentence(P.atmo_prefix, atmoAll);
    if (atmoSentence) parts.push(atmoSentence);

    const keyLight = $('#keyLight').value;
    const lightEffects = getCheckedValues('[data-group="lighting"] input[type="checkbox"]');
    const lightAll = [];
    if (keyLight) lightAll.push(keyLight + P.key_light_suffix);
    lightAll.push(...lightEffects);
    const lightSentence = joinSentence(P.light_prefix, lightAll);
    if (lightSentence) parts.push(lightSentence);

    const style = $('#styleSelect').value;
    const camera = $('#cameraSelect').value;
    const lens = $('#lensSelect').value;
    const qualityOpts = getCheckedValues('[data-group="quality"] input[type="checkbox"]');

    const styleAll = [style].filter(Boolean);
    if (camera) styleAll.push(camera);
    if (lens) styleAll.push(lens);
    styleAll.push(...qualityOpts);
    if (styleAll.length > 0) parts.push(styleAll.join(', ') + '.');

    const palette = $('#paletteSelect').value;
    const paletteCustom = $('#paletteCustom').value.trim();
    const colorAll = [];
    if (palette) colorAll.push(palette);
    if (paletteCustom) colorAll.push(paletteCustom);
    const colorSentence = joinSentence(P.color_prefix, colorAll);
    if (colorSentence) parts.push(colorSentence);

    const moods = getCheckedValues('[data-group="mood"] input[type="checkbox"]');
    const moodSentence = joinSentence(P.mood_prefix, moods);
    if (moodSentence) parts.push(moodSentence);

    return parts.join('\n\n');
  }

  function platformParams(platform) {
    const aspect = $('input[name="aspect"]:checked').value;
    const P = PROMPT[state.lang] || PROMPT.en;
    if (platform === 'midjourney') {
      return aspect + P.platform_midjourney_extra;
    }
    if (platform === 'stable') {
      return P.platform_stable_line + aspect.replace('--ar', 'AR');
    }
    if (platform === 'dalle') {
      return P.platform_dalle;
    }
    return P.platform_generic;
  }

  function buildNegative(platform) {
    const P = PROMPT[state.lang] || PROMPT.en;
    if (platform === 'stable') {
      return P.negative_stable;
    }
    if (platform === 'midjourney') {
      return P.negative_midjourney;
    }
    return '';
  }

  function renderOutput() {
    const platform = $('input[name="platform"]:checked').value;
    let finalPrompt = buildPrompt();

    const extra = platformParams(platform);
    finalPrompt += '\n\n' + extra;

    $('#promptOutput').textContent = cleanSentence(finalPrompt);

    const negOutput = $('#negativeOutput');
    const neg = buildNegative(platform);
    if (neg) {
      negOutput.hidden = false;
      negOutput.textContent = getLabels().negative_label + '\n' + neg;
    } else {
      negOutput.hidden = true;
      negOutput.textContent = '';
    }

    state.lastPrompt = $('#promptOutput').textContent;
    state.lastNegative = negOutput.textContent;
    localStorage.setItem('GenPrompts:last', JSON.stringify(state));
  }

  function copyPrompt() {
    const text = $('#promptOutput').textContent;
    const neg = $('#negativeOutput').textContent;
    const fullText = neg ? text + '\n\n' + neg : text;

    navigator.clipboard.writeText(fullText).then(() => {
      const btn = $('.copy-btn');
      btn.textContent = state.lang === 'es' ? '¡Copiado!' : 'Copied!';
      btn.classList.add('copied');
      setTimeout(() => {
        btn.textContent = getLabels().copy_btn;
        btn.classList.remove('copied');
      }, 2000);
    });
  }

  function setupCollapse() {
    $$('.section').forEach((section) => {
      const header = section.querySelector('.section-header');
      const content = section.querySelector('.section-content');
      const arrow = section.querySelector('.toggle-arrow');
      if (!header || !content) return;

      header.addEventListener('click', () => {
        const collapsed = content.classList.toggle('is-collapsed');
        if (arrow) arrow.classList.toggle('open', !collapsed);
      });
    });
  }

  function setupAutoHideHeader() {
    let lastScroll = 0;
    const header = $('header');
    if (!header) return;

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 50 && currentScroll > lastScroll) {
        header.classList.add('header-hidden');
      } else {
        header.classList.remove('header-hidden');
      }
      lastScroll = currentScroll;
    }, { passive: true });
  }

  function restoreState() {
    const saved = localStorage.getItem('GenPrompts:last');
    if (!saved) return;
    try {
      const parsed = JSON.parse(saved);
      if (parsed && parsed.lastPrompt) {
        $('#promptOutput').textContent = parsed.lastPrompt;
      }
      if (parsed && parsed.lastNegative) {
        const negEl = $('#negativeOutput');
        negEl.textContent = parsed.lastNegative;
        negEl.hidden = false;
      }
    } catch (_) {
      // Ignore corrupt localStorage
    }
  }

  function createOption(value, label) {
    const opt = document.createElement('option');
    opt.value = value;
    opt.textContent = label;
    return opt;
  }

  function renderSelect(selectEl, options, placeholder) {
    selectEl.innerHTML = '';
    if (placeholder) {
      selectEl.appendChild(createOption('', placeholder));
    }
    options.forEach((opt) => {
      const pair = optionPair(opt);
      selectEl.appendChild(createOption(pair.value, pair.label));
    });
  }

  function renderGroupedSelect(selectEl, groups, placeholder) {
    selectEl.innerHTML = '';
    if (placeholder) {
      selectEl.appendChild(createOption('', placeholder));
    }
    groups.forEach((group) => {
      const og = document.createElement('optgroup');
      og.label = group.label;
      group.options.forEach((opt) => {
        const pair = optionPair(opt);
        og.appendChild(createOption(pair.value, pair.label));
      });
      selectEl.appendChild(og);
    });
  }

  function takeFirst(items, limit) {
    return items.slice(0, limit);
  }

  function flattenGroups(groups) {
    const out = [];
    groups.forEach((g) => g.options.forEach((opt) => out.push(opt)));
    return out;
  }

  function getBackgroundGroups(mode, groups) {
    if (mode === 'advanced') return groups;
    const flat = takeFirst(flattenGroups(groups), 5);
    const label = state.lang === 'es' ? 'Selección rápida' : 'Quick picks';
    return [{ label, options: flat }];
  }

  function renderCheckboxGroup(container, items) {
    container.innerHTML = '';
    items.forEach((item) => {
      const wrap = document.createElement('div');
      wrap.className = 'checkbox-option';

      const input = document.createElement('input');
      input.type = 'checkbox';
      input.id = item.id;
      input.value = promptValue(item);
      if (item.checked) input.checked = true;

      const label = document.createElement('label');
      label.setAttribute('for', item.id);
      label.textContent = item.label;

      wrap.appendChild(input);
      wrap.appendChild(label);
      container.appendChild(wrap);
    });
  }

  function renderRadioGroup(container, name, items) {
    container.innerHTML = '';
    items.forEach((item) => {
      const wrap = document.createElement('div');
      wrap.className = 'radio-option';

      const input = document.createElement('input');
      input.type = 'radio';
      input.name = name;
      input.id = item.id;
      input.value = item.value;
      if (item.checked) input.checked = true;

      const label = document.createElement('label');
      label.setAttribute('for', item.id);
      label.textContent = item.label;

      wrap.appendChild(input);
      wrap.appendChild(label);
      container.appendChild(wrap);
    });
  }

  function hydrateFromData() {
    const data = window.GPROMPTS_DATA;
    if (!data) return;

    const mode = state.mode;

    renderGroupedSelect(
      $('#bgSelect'),
      getBackgroundGroups(mode, data.backgroundPresets),
      state.lang === 'es' ? '-- Seleccionar escenario --' : '-- Select scene --'
    );

    renderCheckboxGroup($('#atmoGroup'), mode === 'advanced' ? data.atmosphere : takeFirst(data.atmosphere, 5));
    renderSelect(
      $('#keyLight'),
      mode === 'advanced' ? data.lightingKey : takeFirst(data.lightingKey, 5),
      state.lang === 'es' ? '-- Seleccionar --' : '-- Select --'
    );
    renderCheckboxGroup($('#lightingGroup'), mode === 'advanced' ? data.lightingTech : takeFirst(data.lightingTech, 5));

    renderSelect($('#styleSelect'), mode === 'advanced' ? data.styles : takeFirst(data.styles, 5));
    renderSelect($('#cameraSelect'), mode === 'advanced' ? data.cameras : takeFirst(data.cameras, 5));
    renderSelect($('#lensSelect'), mode === 'advanced' ? data.lenses : takeFirst(data.lenses, 5));
    renderCheckboxGroup($('#qualityGroup'), mode === 'advanced' ? data.quality : takeFirst(data.quality, 5));

    renderSelect(
      $('#paletteSelect'),
      mode === 'advanced' ? data.palettes : takeFirst(data.palettes, 5),
      state.lang === 'es' ? '-- Seleccionar paleta --' : '-- Select palette --'
    );
    renderCheckboxGroup($('#moodGroup'), mode === 'advanced' ? data.moods : takeFirst(data.moods, 5));
    renderRadioGroup($('#aspectGroup'), 'aspect', mode === 'advanced' ? data.aspects : takeFirst(data.aspects, 5));
    renderRadioGroup($('#platformGroup'), 'platform', mode === 'advanced' ? data.platforms : takeFirst(data.platforms, 5));
  }

  function enableCompactSelects() {
    const maxVisible = 5;
    $$('.compact-select').forEach((selectEl) => {
      if (selectEl.dataset.compactBound === '1') return;
      selectEl.dataset.compactBound = '1';
      selectEl.size = 1;

      selectEl.addEventListener('mousedown', (e) => {
        if (selectEl.size === 1) {
          selectEl.size = Math.min(maxVisible, selectEl.options.length);
          selectEl.classList.add('is-open');
          e.preventDefault();
        }
      });

      selectEl.addEventListener('change', () => {
        selectEl.size = 1;
        selectEl.classList.remove('is-open');
        selectEl.blur();
      });

      selectEl.addEventListener('blur', () => {
        selectEl.size = 1;
        selectEl.classList.remove('is-open');
      });
    });
  }

  function applyI18n() {
    const dict = getLabels();
    $$('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) el.textContent = dict[key];
    });
    $$('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) el.setAttribute('placeholder', dict[key]);
    });
    const tipInline = $('#translateTipInline');
    if (tipInline) tipInline.hidden = state.lang !== 'es';
  }

  function setActiveToggle(selector, value, attr) {
    $$(selector).forEach((btn) => {
      const isActive = btn.getAttribute(attr) === value;
      btn.classList.toggle('is-active', isActive);
    });
  }

  function bindLanguageToggle() {
    $$('[data-lang]').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.lang = btn.getAttribute('data-lang');
        localStorage.setItem('GenPrompts:lang', state.lang);
        setActiveToggle('[data-lang]', state.lang, 'data-lang');
        applyI18n();
        hydrateFromData();
      });
    });
  }

  function bindModeToggle() {
    $$('[data-mode]').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.mode = btn.getAttribute('data-mode');
        localStorage.setItem('GenPrompts:mode', state.mode);
        setActiveToggle('[data-mode]', state.mode, 'data-mode');
        hydrateFromData();
      });
    });
  }

  function setTheme(theme) {
    state.theme = theme;
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('GenPrompts:theme', theme);
    setActiveToggle('[data-theme]', theme, 'data-theme');
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute('content', theme === 'light' ? '#f4f6fa' : '#0f0f1a');
    }
  }

  function bindThemeToggle() {
    $$('[data-theme]').forEach((btn) => {
      btn.addEventListener('click', () => {
        setTheme(btn.getAttribute('data-theme'));
      });
    });
  }

  function bindEvents() {
    $$('input[name="subject"]').forEach((r) => r.addEventListener('change', setSubjectInputState));
    $$('input[name="background"]').forEach((r) => r.addEventListener('change', setBackgroundState));
    $('#generateBtn').addEventListener('click', renderOutput);
    $('.copy-btn').addEventListener('click', copyPrompt);
    bindLanguageToggle();
    bindModeToggle();
    bindThemeToggle();
  }

  function init() {
    const savedLang = localStorage.getItem('GenPrompts:lang');
    const savedMode = localStorage.getItem('GenPrompts:mode');
    const savedTheme = localStorage.getItem('GenPrompts:theme');
    if (savedLang) state.lang = savedLang;
    if (savedMode) state.mode = savedMode;
    if (savedTheme) state.theme = savedTheme;

    setActiveToggle('[data-lang]', state.lang, 'data-lang');
    setActiveToggle('[data-mode]', state.mode, 'data-mode');
    setActiveToggle('[data-theme]', state.theme, 'data-theme');
    setTheme(state.theme);
    applyI18n();
    hydrateFromData();
    enableCompactSelects();
    setSubjectInputState();
    setBackgroundState();
    setupCollapse();
    restoreState();
    bindEvents();
    setupAutoHideHeader();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
