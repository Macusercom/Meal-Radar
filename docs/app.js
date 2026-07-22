/* ═══════════════════════════════════════════
   I18N – STRINGS, language state, helpers
═══════════════════════════════════════════ */
const LANG_KEY = 'mealradar-lang';
let uiLang = (() => {
  const saved = localStorage.getItem(LANG_KEY);
  return saved === 'de' || saved === 'en' ? saved : 'en';
})();

const STRINGS = {
  de: {
    page_title: 'Meal Radar – Nährstoffanalyse',
    subtitle: 'Nährstoffanalyse mit Tages-Referenzwerten',
    theme_dark_title: 'Dunkel-Modus',
    theme_light_title: 'Hell-Modus',
    theme_dark_label: 'Dark',
    theme_light_label: 'Light',
    card_food: 'Lebensmittel',
    card_meal: 'In der Mahlzeit',
    card_chart: 'Anteil an Tages-Referenzwerten',
    card_balance: 'Nährstoffbilanz',
    search_placeholder: 'Lebensmittel suchen …',
    btn_new: '+ Neu',
    btn_copy_link: 'Link kopieren',
    btn_clear_all: 'Alle löschen',
    ri_hint_html: 'Rote Linie = 100 % RI &nbsp;|&nbsp; Y-Achse: Nährstoff &middot; Gesamtmenge&thinsp;/&thinsp;Referenzwert &nbsp;|&nbsp; Ballaststoffe: DGE-Richtwert &ge;30&thinsp;g/Tag',
    th_nutrient: 'Nährstoff',
    th_total: 'Gesamt',
    th_ri: 'RI / Tag',
    th_share: 'Anteil',
    footer_disclaimer_html: 'Referenzwerte gemäß EU-Verordnung&thinsp;Nr.&thinsp;1169/2011 für <strong>Erwachsene</strong>. Ballaststoffe: DGE-Richtwert (&ge;30&thinsp;g/Tag). Alle Angaben ohne Gewähr.',
    footer_source: 'Quellcode',
    footer_privacy: 'Datenschutz',
    footer_imprint: 'Impressum',
    dlg_close: 'Schließen',
    dlg_title_add: 'Lebensmittel hinzufügen',
    dlg_title_edit: 'Lebensmittel bearbeiten',
    label_product: 'Produkt *',
    ph_product: 'z. B. Haferflocken',
    label_amount: 'Menge (g) *',
    ph_amount: 'z. B. 80',
    nutrient_summary: 'Nährwerte (g / 100 g)',
    btn_save_preset: 'Vorlage speichern',
    btn_cancel: 'Abbrechen',
    btn_add: 'Hinzufügen',
    btn_save: 'Speichern',
    empty_search: 'Keine Treffer – klicke „+ Neu" für manuellen Eintrag.',
    section_suggestions: 'Vorschläge',
    section_my_presets: 'Meine Vorlagen',
    btn_export: 'Exportieren',
    btn_import: 'Importieren',
    no_presets_title: 'Keine eigenen Vorlagen vorhanden',
    presets_none_found: 'Keine eigenen Vorlagen gefunden.',
    presets_none_yet: 'Noch keine eigenen Vorlagen. Im Formular auf „Vorlage speichern" klicken.',
    storage_notice_html: '<span>&#9432;</span><span>Eingaben werden im <strong>localStorage</strong> dieses Browsers gespeichert – sie sind geräte- und browserspezifisch und gehen bei „Website-Daten löschen" verloren.</span>',
    food_amount_aria: 'Menge in g',
    food_btn_edit: 'Bearbeiten',
    food_btn_remove: 'Entfernen',
    chart_x_title: '% des Tages-Referenzwertes (RI)',
    chart_total_label: 'Gesamt',
    delete_preset_title: 'Vorlage löschen',
    toast_preset_deleted: 'Vorlage „{name}" gelöscht.',
    confirm_load_share: 'Einen geteilten Link öffnen? Deine aktuellen Einträge werden ersetzt.',
    confirm_clear_all: 'Alle Einträge löschen?',
    err_name_required: 'Bitte einen Produktnamen eingeben.',
    err_amount_invalid: 'Bitte eine gültige Menge in Gramm eingeben (größer als 0).',
    err_name_first: 'Bitte zuerst einen Produktnamen eingeben.',
    err_preset_exists: 'Existiert bereits als Vorlage',
    toast_export_empty: 'Keine eigenen Vorlagen zum Exportieren.',
    toast_export_count: '{n} Vorlage(n) exportiert.',
    toast_import_count: '{n} Vorlage(n) importiert.',
    toast_import_count_skipped: '{n} Vorlage(n) importiert, {s} übersprungen.',
    toast_import_invalid: 'Ungültige Datei – bitte eine Meal-Radar-JSON-Exportdatei wählen.',
    toast_item_added: '„{name}" hinzugefügt.',
    toast_item_updated: '„{name}" aktualisiert.',
    toast_saved: 'Gespeichert',
    toast_link_copied: 'Link kopiert!',
    prompt_link: 'Link zum Kopieren:',
    export_filename: 'meal-radar-vorlagen.json',
  },
  en: {
    page_title: 'Meal Radar – Nutrient Analysis',
    subtitle: 'Nutrient analysis with daily reference intakes',
    theme_dark_title: 'Dark mode',
    theme_light_title: 'Light mode',
    theme_dark_label: 'Dark',
    theme_light_label: 'Light',
    card_food: 'Foods',
    card_meal: 'In this meal',
    card_chart: 'Share of daily reference intake',
    card_balance: 'Nutrient balance',
    search_placeholder: 'Search foods …',
    btn_new: '+ New',
    btn_copy_link: 'Copy link',
    btn_clear_all: 'Clear all',
    ri_hint_html: 'Red line = 100 % RI &nbsp;|&nbsp; Y-axis: nutrient &middot; total amount&thinsp;/&thinsp;reference value &nbsp;|&nbsp; Fibre: DGE guideline &ge;30&thinsp;g/day',
    th_nutrient: 'Nutrient',
    th_total: 'Total',
    th_ri: 'RI / day',
    th_share: 'Share',
    footer_disclaimer_html: 'Reference intakes per EU Regulation&thinsp;No.&thinsp;1169/2011 for <strong>adults</strong>. Fibre: DGE guideline (&ge;30&thinsp;g/day). All information without warranty.',
    footer_source: 'Source code',
    footer_privacy: 'Privacy',
    footer_imprint: 'Imprint',
    dlg_close: 'Close',
    dlg_title_add: 'Add food',
    dlg_title_edit: 'Edit food',
    label_product: 'Product *',
    ph_product: 'e.g. rolled oats',
    label_amount: 'Amount (g) *',
    ph_amount: 'e.g. 80',
    nutrient_summary: 'Nutrition (g / 100 g)',
    btn_save_preset: 'Save preset',
    btn_cancel: 'Cancel',
    btn_add: 'Add',
    btn_save: 'Save',
    empty_search: 'No matches – click "+ New" to add a manual entry.',
    section_suggestions: 'Suggestions',
    section_my_presets: 'My presets',
    btn_export: 'Export',
    btn_import: 'Import',
    no_presets_title: 'No custom presets available',
    presets_none_found: 'No custom presets found.',
    presets_none_yet: 'No custom presets yet. Click "Save preset" in the form.',
    storage_notice_html: '<span>&#9432;</span><span>Entries are stored in this browser\'s <strong>localStorage</strong> – they are device- and browser-specific and will be lost when "Clear site data" is used.</span>',
    food_amount_aria: 'Amount in g',
    food_btn_edit: 'Edit',
    food_btn_remove: 'Remove',
    chart_x_title: '% of daily reference intake (RI)',
    chart_total_label: 'Total',
    delete_preset_title: 'Delete preset',
    toast_preset_deleted: 'Preset "{name}" deleted.',
    confirm_load_share: 'Open shared link? Your current entries will be replaced.',
    confirm_clear_all: 'Delete all entries?',
    err_name_required: 'Please enter a product name.',
    err_amount_invalid: 'Please enter a valid amount in grams (greater than 0).',
    err_name_first: 'Please enter a product name first.',
    err_preset_exists: 'Already exists as a preset',
    toast_export_empty: 'No custom presets to export.',
    toast_export_count: '{n} preset(s) exported.',
    toast_import_count: '{n} preset(s) imported.',
    toast_import_count_skipped: '{n} preset(s) imported, {s} skipped.',
    toast_import_invalid: 'Invalid file – please choose a Meal Radar JSON export.',
    toast_item_added: '"{name}" added.',
    toast_item_updated: '"{name}" updated.',
    toast_saved: 'Saved',
    toast_link_copied: 'Link copied!',
    prompt_link: 'Link to copy:',
    export_filename: 'meal-radar-presets.json',
  },
};

function t(key, vars) {
  let s = STRINGS[uiLang]?.[key] ?? STRINGS.en[key] ?? key;
  if (vars) for (const k in vars) s = s.replaceAll(`{${k}}`, vars[k]);
  return s;
}

// Translation map for category names. Built-in data uses German keys —
// look them up here when rendering rather than migrating the data set.
const CATEGORIES = {
  'Proteinquellen':       { de: 'Proteinquellen',       en: 'Proteins' },
  'Getreide & Beilagen':  { de: 'Getreide & Beilagen',  en: 'Grains & Sides' },
  'Gemüse':               { de: 'Gemüse',               en: 'Vegetables' },
  'Süßes & Snacks':       { de: 'Süßes & Snacks',       en: 'Sweets & Snacks' },
  'Fette & Öle':          { de: 'Fette & Öle',          en: 'Fats & Oils' },
  'Getränke':             { de: 'Getränke',             en: 'Beverages' },
  'Nüsse & Kerne':        { de: 'Nüsse & Kerne',        en: 'Nuts & Seeds' },
  'Gewürze & Toppings':   { de: 'Gewürze & Toppings',   en: 'Spices & Toppings' },
  'Fertiggerichte':       { de: 'Fertiggerichte',       en: 'Ready Meals' },
  'Brot & Gebäck':        { de: 'Brot & Gebäck',        en: 'Bread & Pastries' },
  'Aufstriche':           { de: 'Aufstriche',           en: 'Spreads' },
  'Eigene':               { de: 'Eigene',               en: 'Own' },
};
function tCategory(name) {
  return CATEGORIES[name]?.[uiLang] ?? name;
}

/* ═══════════════════════════════════════════
   CONSTANTS
═══════════════════════════════════════════ */
const NUTRIENTS = [
  { key: 'kcal',    labelDe: 'kcal',            labelEn: 'kcal',            ref: 2000, unit: 'kcal' },
  { key: 'fat',     labelDe: 'Fett',            labelEn: 'Fat',             ref: 70,   unit: 'g'   },
  { key: 'sfat',    labelDe: 'Ges. Fettsäuren', labelEn: 'Saturated fat',   ref: 20,   unit: 'g'   },
  { key: 'carbs',   labelDe: 'Kohlenhydrate',   labelEn: 'Carbohydrates',   ref: 260,  unit: 'g'   },
  { key: 'sugar',   labelDe: 'Zucker',          labelEn: 'Sugar',           ref: 90,   unit: 'g'   },
  { key: 'fiber',   labelDe: 'Ballaststoffe',   labelEn: 'Fibre',           ref: 30,   unit: 'g',   minGoal: true },
  { key: 'protein', labelDe: 'Eiweiß',          labelEn: 'Protein',         ref: 50,   unit: 'g'   },
  { key: 'salt',    labelDe: 'Salz',            labelEn: 'Salt',            ref: 6,    unit: 'g'   },
];

function nutrientLabel(n) {
  return uiLang === 'de' ? n.labelDe : n.labelEn;
}

const COLORS = [
  '#3b82f6', '#ef4444', '#22c55e', '#f59e0b',
  '#8b5cf6', '#ec4899', '#06b6d4', '#f97316',
  '#14b8a6', '#a855f7',
];

// Built-in preset library (nutritional values per 100 g)
const BUILTIN = [
{ category: 'Proteinquellen', name: 'SPAR Veggie veganer Bio-Tempeh Black Beans', kcal: 120, fat: 2.0, sfat: 0.7, carbs: 11.0, sugar: 1.4, fiber: 8.4, protein: 11.0, salt: 1.10 },
{ category: 'Proteinquellen', name: 'SPAR Veggie veganer Bio-Tempeh Teriyaki-Art', kcal: 161, fat: 6.6, sfat: 1.3, carbs: 4.9, sugar: 1.3, fiber: 5.5, protein: 18.0, salt: 1.3 },
{ category: 'Proteinquellen', name: 'SPAR Veggie veganer Bio-Tofu Natur', kcal: 154, fat: 9.0, sfat: 1.5, carbs: 1.2, sugar: 0.5, fiber: 1.2, protein: 16.3, salt: 0.02 },
{ category: 'Proteinquellen', name: 'SPAR Veggie veganer Bio-Tofu geräuchert', kcal: 158, fat: 8.6, sfat: 1.4, carbs: 2.3, sugar: 0.7, fiber: 0.8, protein: 18.0, salt: 1.40 },
{ category: 'Proteinquellen', name: 'Alpro Plant Protein Pudding Vanille', kcal: 92, fat: 2.4, sfat: 0.5, carbs: 7, sugar: 4.9, fiber: 1.0, protein: 10.0, salt: 0.34 },
{ category: 'Proteinquellen', name: 'Vemondo Lidl Bio-Tofu', kcal: 129, fat: 7.5, sfat: 1.0, carbs: 1.8, sugar: 0.5, fiber: 1.0, protein: 13.0, salt: 0.2 },
{ category: 'Proteinquellen', name: 'SPAR Natur*pur Bio-Berglinsen', kcal: 105, fat: 0.5, sfat: 0.1, carbs: 14.0, sugar: 0.4, fiber: 5.3, protein: 8.5, salt: 0.40 },
{ category: 'Proteinquellen', name: 'SPAR Vital Bio-Kichererbsen', kcal: 112, fat: 2.0, sfat: 0.3, carbs: 14.0, sugar: 1.0, fiber: 5.7, protein: 6.7, salt: 0.76 },
{ category: 'Getreide & Beilagen', name: 'Koro Brauner Bio Basmati Reis', kcal: 361, fat: 1.9, sfat: 0.5, carbs: 77.0, sugar: 1.2, fiber: 1.9, protein: 7.5, salt: 0.023 },
{ category: 'Gemüse', name: 'Karotten (roh)', kcal: 42, fat: 0.24, sfat: 0.03, carbs: 9.58, sugar: 4.72, fiber: 2.78, protein: 0.93, salt: 0.173 },
{ category: 'Gemüse', name: 'Spinat (roh)', kcal: 23, fat: 0.39, sfat: 0.06, carbs: 3.60, sugar: 0.42, fiber: 2.20, protein: 2.90, salt: 0.198 },
{ category: 'Gemüse', name: 'Tomaten (roh)', kcal: 18, fat: 0.20, sfat: 0.02, carbs: 3.90, sugar: 2.60, fiber: 1.22, protein: 0.89, salt: 0.013 },
{ category: 'Gemüse', name: 'Kartoffeln (roh, mit Schale)', kcal: 77, fat: 0.09, sfat: 0.03, carbs: 17.47, sugar: 0.83, fiber: 2.13, protein: 2.00, salt: 0.015 },
{ category: 'Gemüse', name: 'Süßkartoffel (roh)', kcal: 90, fat: 0.18, sfat: 0.09, carbs: 21.05, sugar: 6.49, fiber: 3.33, protein: 2.02, salt: 0.090 },
{ category: 'Gemüse', name: 'Gurke (roh)', kcal: 15, fat: 0.11, sfat: 0.04, carbs: 3.65, sugar: 1.63, fiber: 0.50, protein: 0.65, salt: 0.005 },
{ category: 'Gemüse', name: 'Zucchini (roh)', kcal: 17, fat: 0.32, sfat: 0.08, carbs: 3.15, sugar: 2.50, fiber: 0.97, protein: 1.21, salt: 0.020 },
{ category: 'Gemüse', name: 'Karfiol/Blumenkohl (roh)', kcal: 25, fat: 0.28, sfat: 0.13, carbs: 4.95, sugar: 1.87, fiber: 1.96, protein: 1.96, salt: 0.075 },
{ category: 'Gemüse', name: 'Brokkoli (roh)', kcal: 34, fat: 0.37, sfat: 0.11, carbs: 6.59, sugar: 1.65, fiber: 2.64, protein: 2.86, salt: 0.082 },
{ category: 'Gemüse', name: 'Frühlingszwiebel (roh)', kcal: 33, fat: 0.20, sfat: 0.00, carbs: 7.33, sugar: 2.33, fiber: 2.60, protein: 1.80, salt: 0.040 },
{ category: 'Gemüse', name: 'Kohlrabi (roh)', kcal: 27, fat: 0.1, sfat: 0.01, carbs: 6.2, sugar: 2.6, fiber: 3.6, protein: 1.7, salt: 0.05 },
{ category: 'Gemüse', name: 'Kohl/Weißkohl (roh)', kcal: 25, fat: 0.1, sfat: 0.03, carbs: 5.8, sugar: 3.2, fiber: 2.5, protein: 1.3, salt: 0.045 },
{ category: 'Gemüse', name: 'Ruccola/Rucola (roh)', kcal: 25, fat: 0.66, sfat: 0.09, carbs: 3.7, sugar: 2.1, fiber: 1.6, protein: 2.6, salt: 0.068 },
{ category: 'Gemüse', name: 'Blattsalat (Grüner Blattsalat, roh)', kcal: 15, fat: 0.15, sfat: 0.02, carbs: 2.9, sugar: 0.78, fiber: 1.3, protein: 1.4, salt: 0.07 },
{ category: 'Süßes & Snacks', name: 'Ritter Sport Marzipan', kcal: 496, fat: 27.0, sfat: 11.0, carbs: 52.0, sugar: 51.0, fiber: null, protein: 7.0, salt: 0.01 },
{ category: 'Süßes & Snacks', name: 'DeBeukelaer Cereola mit Choviva', kcal: 512, fat: 26.0, sfat: 12.0, carbs: 61.0, sugar: 22.0, fiber: 3.6, protein: 6.8, salt: 1.0 },
{ category: 'Süßes & Snacks', name: 'Treets schokolierte Erdnüsse', kcal: 530, fat: 30.0, sfat: 10.0, carbs: 51.0, sugar: 48.0, fiber: null, protein: 12.0, salt: 0.01 },
{ category: 'Proteinquellen', name: 'Billie Green Schinkenwürfel', kcal: 225, fat: 3.4, sfat: 0.9, carbs: 11.0, sugar: 5.6, fiber: 3.0, protein: 36.0, salt: 2.6 },
{ category: 'Proteinquellen', name: 'LEKKA Kräuterschinken', kcal: 208, fat: 6.9, sfat: 3.0, carbs: 6.3, sugar: 1.5, fiber: null, protein: 28.0, salt: 2.2 },
{ category: 'Proteinquellen', name: 'LEKKA Kochschinken', kcal: 209, fat: 6.9, sfat: 3.0, carbs: 6.3, sugar: 1.5, fiber: null, protein: 28.0, salt: 2.2 },
{ category: 'Süßes & Snacks', name: 'Ja! Natürlich 60% Zartbitter Orange Schokolade', kcal: 546, fat: 35.0, sfat: 21.0, carbs: 49.0, sugar: 43.0, fiber: null, protein: 4.5, salt: 0.02 },
{ category: 'Proteinquellen', name: 'Bonduelle Bio Linsen', kcal: 116, fat: 0.7, sfat: 0.1, carbs: 15.0, sugar: 0.5, fiber: 6.1, protein: 9.0, salt: 0.23 },
{ category: 'Fette & Öle', name: 'Iliada Kalamata Olivenöl Kaltgepresst (pro 100 ml)', kcal: 823, fat: 91.0, sfat: 13.0, carbs: 0.0, sugar: 0.0, fiber: null, protein: 0.0, salt: 0.0 },
{ category: 'Getränke', name: 'Vegavita Soja Barista (pro 100 ml)', kcal: 30, fat: 1.6, sfat: 0.2, carbs: 0.7, sugar: 0.5, fiber: null, protein: 3.0, salt: 0.03 },
{ category: 'Getränke', name: 'Vegavita Hafer Barista (pro 100 ml)', kcal: 54, fat: 3.0, sfat: 0.3, carbs: 5.7, sugar: 3.5, fiber: null, protein: 0.7, salt: 0.12 },
{ category: 'Proteinquellen', name: 'Beyond Meat Beyond Burger tiefgekühlt', kcal: 196, fat: 12.0, sfat: 2.9, carbs: 5.6, sugar: 0.6, fiber: 1.2, protein: 16.0, salt: 0.75 },
{ category: 'Proteinquellen', name: 'Alpro Skyr Natur Ungesüßt', kcal: 60, fat: 3.4, sfat: 0.6, carbs: 0.0, sugar: 0.0, fiber: 1.3, protein: 5.8, salt: 0.33 },
{ category: 'Proteinquellen', name: 'Vegavita Bio Tofu Natur', kcal: 126, fat: 7.9, sfat: 1.4, carbs: 0.5, sugar: 0.5, fiber: 1.1, protein: 13.0, salt: 0.0 },
{ category: 'Getreide & Beilagen', name: 'Free Haferflocken', kcal: 370, fat: 6.7, sfat: 1.1, carbs: 60.0, sugar: 0.8, fiber: null, protein: 13.0, salt: 0.01 },
{ category: 'Proteinquellen', name: 'Planted Kebab', kcal: 197, fat: 10.0, sfat: 1.0, carbs: 2.7, sugar: 0.6, fiber: 4.2, protein: 22.0, salt: 2.0 },
{ category: 'Proteinquellen', name: 'Alpro Skyr Vanille', kcal: 77, fat: 2.9, sfat: 0.5, carbs: 6.8, sugar: 6.5, fiber: 1.1, protein: 5.1, salt: 0.24 },
{ category: 'Getränke', name: 'Joya Sojadrink Protein Frisch (pro 100 ml)', kcal: 38, fat: 1.7, sfat: 0.3, carbs: 1.2, sugar: 0.0, fiber: 0.8, protein: 4.0, salt: 0.14 },
{ category: 'Proteinquellen', name: 'BILLA Bio Weiße Bohnen', kcal: 93, fat: 0.5, sfat: 0.1, carbs: 13.0, sugar: 1.2, fiber: 5.9, protein: 6.4, salt: 0.73 },
{ category: 'Proteinquellen', name: 'BILLA Bio Kichererbsen', kcal: 123, fat: 2.5, sfat: 0.3, carbs: 16.0, sugar: 0.6, fiber: null, protein: 6.3, salt: 0.7 },
{ category: 'Getränke', name: 'Oatly Barista', kcal: 59, fat: 3.2, sfat: 0.3, carbs: 6.3, sugar: 2.2, fiber: 0.7, protein: 1.0, salt: 0.1 },
{ category: 'Süßes & Snacks', name: 'nucao Tafel Almond Butter & Sea Salt', kcal: 610, fat: 47.0, sfat: 23.0, carbs: 34.0, sugar: 29.0, fiber: 7.4, protein: 9.1, salt: 0.25 },
{ category: 'Gemüse', name: 'Mutti Tomaten in Stücken', kcal: 26, fat: 0.2, sfat: 0.1, carbs: 3.9, sugar: 2.8, fiber: null, protein: 1.2, salt: 0.1 },
{ category: 'Gemüse', name: 'Clever Junge Fisolen', kcal: 35, fat: 0.5, sfat: 0.0, carbs: 4.7, sugar: 2.1, fiber: null, protein: 1.7, salt: 0.02 },
{ category: 'Proteinquellen', name: "The Vegetarian Butcher Chick'n Crispy Burger", kcal: 242, fat: 16.0, sfat: 1.1, carbs: 13.0, sugar: 1.3, fiber: 6.0, protein: 8.8, salt: 1.2 },
{ category: 'Proteinquellen', name: "The Vegetarian Butcher Chick'n Out Chunks", kcal: 130, fat: 3.4, sfat: 0.4, carbs: 1.8, sugar: 0.6, fiber: 7.2, protein: 20.0, salt: 1.1 },
{ category: 'Proteinquellen', name: 'Vegavita Bio Tempeh Gyros', kcal: 174, fat: 8.0, sfat: 1.1, carbs: 4.0, sugar: 1.5, fiber: null, protein: 19.0, salt: 1.3 },
{ category: 'Proteinquellen', name: 'Ja! Natürlich Soja Geschnetzelts', kcal: 354, fat: 7.5, sfat: 1.6, carbs: 14.0, sugar: 6.2, fiber: 15.0, protein: 50.0, salt: 0.02 },
{ category: 'Getreide & Beilagen', name: 'Alnatura Cornflakes Ungesüßt', kcal: 378, fat: 1.0, sfat: 0.2, carbs: 84.0, sugar: 0.5, fiber: 3.1, protein: 6.7, salt: 0.01 },
{ category: 'Nüsse & Kerne', name: 'BILLA Bio Walnusskerne', kcal: 685, fat: 63.0, sfat: 6.8, carbs: 11.0, sugar: 7.0, fiber: null, protein: 17.0, salt: 0.01 },
{ category: 'Gewürze & Toppings', name: 'BioVegan Pasta Topping Chili Knoblauch', kcal: 522, fat: 34.0, sfat: 5.9, carbs: 32.0, sugar: 9.3, fiber: 7.7, protein: 20.0, salt: 2.8 },
{ category: 'Gewürze & Toppings', name: 'BioVegan Pasta Topping Klassisch', kcal: 544, fat: 36.0, sfat: 6.4, carbs: 31.0, sugar: 8.0, fiber: 5.8, protein: 20.0, salt: 2.8 },
{ category: 'Süßes & Snacks', name: 'BILLA Bio Haselnuss Snack', kcal: 513, fat: 30.0, sfat: 21.0, carbs: 52.0, sugar: 45.0, fiber: null, protein: 5.7, salt: 0.13 },
{ category: 'Getreide & Beilagen', name: 'Alnavit Vollkornreis Couscous', kcal: 357, fat: 3.2, sfat: 1.0, carbs: 72.0, sugar: 0.5, fiber: 3.2, protein: 8.4, salt: 0.01 },
{ category: 'Gemüse', name: 'Ja! Natürlich Rotkraut', kcal: 71, fat: 3.6, sfat: 0.4, carbs: 7.8, sugar: 6.2, fiber: null, protein: 1.0, salt: 1.2 },
{ category: 'Gemüse', name: 'Iglo Buntes Gemüse Trio', kcal: 28, fat: 0.4, sfat: 0.1, carbs: 3.3, sugar: 1.4, fiber: 2.3, protein: 1.6, salt: 0.06 },
{ category: 'Süßes & Snacks', name: 'KoRo Veganer Proteinriegel Brownie', kcal: 369, fat: 17.0, sfat: 8.7, carbs: 37.0, sugar: 0.7, fiber: 13.0, protein: 24.0, salt: 0.58 },
{ category: 'Proteinquellen', name: 'Vegavita Tempeh Mexikanischer-Art', kcal: 152, fat: 0.5, sfat: 0.2, carbs: 24.0, sugar: 4.6, fiber: 5.5, protein: 10.0, salt: 1.2 },
{ category: 'Fette & Öle', name: 'Flora ungesalzen', kcal: 713, fat: 79.0, sfat: 39.0, carbs: 0.5, sugar: 0.5, fiber: null, protein: 0.5, salt: 0.0 },
{ category: 'Fette & Öle', name: 'Rama Kochcreme 100% Pflanzlich', kcal: 159, fat: 15.0, sfat: 6.0, carbs: 4.8, sugar: 1.5, fiber: null, protein: 0.6, salt: 0.12 },
{ category: 'Süßes & Snacks', name: 'Schlagfix sprühfertige Schlagcreme (pro 100 ml)', kcal: 213, fat: 15.4, sfat: 15.2, carbs: 18.1, sugar: 12.8, fiber: null, protein: 0.45, salt: 0.17 }, 
{ category: 'Proteinquellen', name: 'Simply V Pasta gerieben', kcal: 322, fat: 18.0, sfat: 15.0, carbs: 36.0, sugar: 0.0, fiber: null, protein: 4.6, salt: 2.5 },
{ category: 'Proteinquellen', name: 'Mühlen Cordon Bleu', kcal: 220, fat: 12.0, sfat: 0.9, carbs: 10.2, sugar: 1.2, fiber: 3.6, protein: 16.0, salt: 1.9 },
{ category: 'Proteinquellen', name: 'Like Gyros', kcal: 110, fat: 2.9, sfat: 0.3, carbs: 0.8, sugar: 0.8, fiber: 6.9, protein: 18.0, salt: 2.1 },
{ category: 'Getränke', name: 'Kaffeetschi Cold Brew Coffee (pro 100 ml)', kcal: 3, fat: 0.0, sfat: 0.0, carbs: 0.0, sugar: 0.0, fiber: null, protein: 0.0, salt: 0.0 },
{ category: 'Getreide & Beilagen', name: 'Ja! Natürlich Weizenmehl Universal', kcal: 338, fat: 1.2, sfat: 0.2, carbs: 71.0, sugar: 0.0, fiber: null, protein: 9.5, salt: 0.01 },
{ category: 'Gemüse', name: 'Pomito Tomatenstücke', kcal: 21, fat: 0.5, sfat: 0.0, carbs: 3.0, sugar: 3.0, fiber: 0.9, protein: 1.0, salt: 0.1 },
{ category: 'Gemüse', name: 'BILLA Bio Passata natur im Glas', kcal: 31, fat: 0.5, sfat: 0.3, carbs: 4.5, sugar: 3.3, fiber: null, protein: 1.4, salt: 0.03 },
{ category: 'Süßes & Snacks', name: 'Ja! Natürlich Ahornsirup Grad A', kcal: 337, fat: 0.0, sfat: 0.0, carbs: 83.0, sugar: 83.0, fiber: null, protein: 1.1, salt: 0.04 },
{ category: 'Gemüse', name: 'BILLA & Kräutermix', kcal: 40, fat: 0.5, sfat: 0.1, carbs: 2.9, sugar: 0.9, fiber: null, protein: 4.0, salt: 0.12 },
{ category: 'Fertiggerichte', name: 'Vegavita Lasagne', kcal: 110, fat: 4.8, sfat: 2.1, carbs: 13.0, sugar: 2.3, fiber: 0.9, protein: 3.3, salt: 1.0 },
{ category: 'Gemüse', name: 'BILLA Bio Zarter Brokkoli', kcal: 29, fat: 0.8, sfat: 0.2, carbs: 1.1, sugar: 0.9, fiber: null, protein: 3.1, salt: 0.03 },
{ category: 'Proteinquellen', name: 'Ja! Natürlich Bio Edamame', kcal: 119, fat: 3.4, sfat: 0.5, carbs: 9.1, sugar: 4.9, fiber: null, protein: 11.0, salt: 0.01 },
{ category: 'Süßes & Snacks', name: 'Frozen Power Eis Pistacchio Bliss vegan', kcal: 312, fat: 23.0, sfat: 16.0, carbs: 26.0, sugar: 2.0, fiber: null, protein: 3.7, salt: 0.17 },
{ category: 'Proteinquellen', name: 'Ochi Bio Tempeh', kcal: 152, fat: 7.7, sfat: 1.1, carbs: 1.8, sugar: 1.0, fiber: null, protein: 19.0, salt: 0.10 },
{ category: 'Proteinquellen', name: 'Joya Joygurt Bio', kcal: 50, fat: 2.6, sfat: 0.4, carbs: 1.6, sugar: 0.0, fiber: 0.9, protein: 4.7, salt: 0.08 },
{ category: 'Proteinquellen', name: 'Vegavita Faschiertes', kcal: 275, fat: 18.0, sfat: 16.0, carbs: 5.7, sugar: 1.5, fiber: 5.3, protein: 20.0, salt: 1.5 },
{ category: 'Gemüse', name: 'Ja! Natürlich Petersilie', kcal: 42, fat: 0.5, sfat: 0.1, carbs: 3.3, sugar: 1.0, fiber: null, protein: 4.1, salt: 0.13 },
{ category: 'Brot & Gebäck', name: 'Anker Super-Herzbrot', kcal: 332, fat: 11, sfat: 1.5, carbs: 41, sugar: 3.6, fiber: 5.3, protein: 14, salt: 1.4 },
{ category: 'Getreide & Beilagen', name: 'SPAR Natur Pur Bio-Eiweißbrot', kcal: 208, fat: 6.1, sfat: 0.8, carbs: 16.0, sugar: 2.0, fiber: 8.3, protein: 17.0, salt: 1.0 },
{ category: 'Brot & Gebäck', name: 'Mestemacher Eiweißbrot mit Karotten', kcal: 251, fat: 9.2, sfat: 1.1, carbs: 15.3, sugar: 3.8, fiber: 10.1, protein: 21.7, salt: 1.10 },
{ category: 'Brot & Gebäck', name: 'Mestemacher Eiweißbrot', kcal: 264, fat: 12.5, sfat: 1.7, carbs: 11.3, sugar: 2.9, fiber: 10.1, protein: 21.0, salt: 1.20 },
{ category: 'Nüsse & Kerne', name: 'SPAR Natur Pur Bio-Cashew-Bruch', kcal: 603, fat: 47.0, sfat: 8.4, carbs: 22.0, sugar: 6.8, fiber: 4.7, protein: 20.0, salt: 0.04 },
{ category: 'Nüsse & Kerne', name: 'SPAR Natur Pur Bio-Paranüsse Natur', kcal: 686, fat: 67.0, sfat: 17.0, carbs: 3.6, sugar: 1.4, fiber: 8.1, protein: 14.0, salt: 0.0 },
{ category: 'Aufstriche', name: 'SPAR Veggie Vegane Bio-Frischcreme Natur', kcal: 217, fat: 19.0, sfat: 9.0, carbs: 4.5, sugar: 0.7, fiber: 4.0, protein: 4.9, salt: 0.7 },
{ category: 'Aufstriche', name: 'SPAR Veggie by NENI veganer Hummus Natur', kcal: 190, fat: 12.0, sfat: 2.2, carbs: 8.6, sugar: 1.2, fiber: 6.9, protein: 8.4, salt: 1.10 },
{ category: 'Aufstriche', name: 'Nussyy Bio-Aufstrich Kürbiskern', kcal: 281, fat: 27.0, sfat: 3.3, carbs: 3.6, sugar: 1.1, fiber: 2.2, protein: 5.5, salt: 1.10 },
{ category: 'Getreide & Beilagen', name: 'SPAR Vital Weckerl High Protein & Lower Carb (4 Stück)', kcal: 275, fat: 8.6, sfat: 1.0, carbs: 25.0, sugar: 2.9, fiber: 6.7, protein: 21.0, salt: 1.0 },
{ category: 'Proteinquellen', name: 'Billie Green Vegane Schinkenwürfel', kcal: 225, fat: 3.4, sfat: 0.9, carbs: 11.0, sugar: 5.6, fiber: 3.0, protein: 36.0, salt: 2.6 },
{ category: 'Proteinquellen', name: 'Vemondo vegane Schnitzerl', kcal: 264, fat: 18.0, sfat: 2.2, carbs: 13.0, sugar: 1.6, fiber: 5.9, protein: 9.5, salt: 1.5 },
{ category: 'Proteinquellen', name: 'Vemondo veganes Faschiertes', kcal: 275, fat: 18.0, sfat: 16.0, carbs: 5.7, sugar: 1.5, fiber: 5.3, protein: 20.0, salt: 1.5 },
{ category: 'Proteinquellen', name: 'Vemondo veganes Geschnetzeltes', kcal: 202, fat: 9.5, sfat: 1.1, carbs: 3.2, sugar: 1.3, fiber: 6.2, protein: 25.0, salt: 2.6 },
{ category: 'Fette & Öle', name: 'SPAR Natur Pur Griechisches natives Bio-Olivenöl extra', kcal: 828, fat: 92.0, sfat: 13.0, carbs: 0.0, sugar: 0.0, fiber: 0.0, protein: 0.0, salt: 0.0 },
{ category: 'Süßes & Snacks', name: 'Neoh Riegel Caramel Nuts 3er', kcal: 488, fat: 38.0, sfat: 13.0, carbs: 20.0, sugar: 3.6, fiber: 26.0, protein: 6.8, salt: 0.39 },
{ category: 'Gemüse', name: 'SPAR Natur*pur Bio-Zuckermais aus dem Marchfeld', kcal: 93, fat: 1.20, sfat: 0.0, carbs: 16.0, sugar: 3.60, fiber: 2.70, protein: 3.30, salt: 0.0 },
{ category: 'Getreide & Beilagen', name: 'SPAR Natur*pur Bio-Semmelwürfel', kcal: 373, fat: 1.30, sfat: 0.70, carbs: 74.0, sugar: 4.00, fiber: 4.50, protein: 14.0, salt: 1.70 },
{ category: 'Getreide & Beilagen', name: 'Shan\'shi Reisnudeln Pad Thai', kcal: 353, fat: 0.80, sfat: 0.20, carbs: 79.0, sugar: 0.0, fiber: null, protein: 6.40, salt: 0.04 }, 
{ category: 'Getreide & Beilagen', name: 'SPAR Vital Wraps High Protein', kcal: 287, fat: 6.00, sfat: 1.90, carbs: 40.0, sugar: 1.90, fiber: 5.40, protein: 15.0, salt: 1.30 },
{ category: 'Süßes & Snacks', name: 'S-BUDGET Chocolate Chip Cookies', kcal: 497, fat: 26.0, sfat: 14.0, carbs: 57.0, sugar: 32.0, fiber: 4.80, protein: 6.30, salt: 0.75 },
{ category: 'Gemüse', name: 'Iglo Edamame Sojabohnen aus dem Marchfeld', kcal: 157, fat: 6.3, sfat: 1.1, carbs: 11.0, sugar: 0.1, fiber: 4.0, protein: 12.0, salt: 0.01 },
{ category: 'Proteinquellen', name: 'KoRo Geröstete und gesalzene Edamame Bohnen', kcal: 430, fat: 16.0, sfat: 2.0, carbs: 21.0, sugar: 1.0, fiber: 13.0, protein: 44.0, salt: 1.2 },
{ category: 'Nüsse & Kerne', name: 'KoRo Geröstete Erdnusskerne', kcal: 612, fat: 50.0, sfat: 6.9, carbs: 14.0, sugar: 4.2, fiber: 8.0, protein: 24.0, salt: 0.02 },
{ category: 'Proteinquellen', name: 'KoRo Soja Protein Crispies 60 %', kcal: 363, fat: 1.8, sfat: 0.2, carbs: 26.0, sugar: 0.8, fiber: 0.8, protein: 60.0, salt: 3.2 },
{ category: 'Proteinquellen', name: 'KoRo Soja Protein Crispies 77 % mit Kakao', kcal: 381, fat: 3.0, sfat: 1.0, carbs: 12.0, sugar: 1.0, fiber: 5.7, protein: 77.0, salt: 2.2 },
{ category: 'Süßes & Snacks', name: 'KoRo Bio Fairtrade Kakaonibs', kcal: 642, fat: 53.0, sfat: 32.0, carbs: 29.0, sugar: 2.0, fiber: 27.0, protein: 12.0, salt: 0.0 },
{ category: 'Nüsse & Kerne', name: 'KoRo Ungeschälte Bio Hanfsamen', kcal: 461, fat: 34.0, sfat: 3.0, carbs: 1.5, sugar: 1.2, fiber: 27.0, protein: 25.0, salt: 0.0 },
{ category: 'Proteinquellen', name: 'KoRo Hefeflocken', kcal: 341, fat: 6.4, sfat: 1.2, carbs: 9.1, sugar: 0.0, fiber: 22.0, protein: 48.0, salt: 0.2 },
{ category: 'Gemüse', name: 'KoRo Sonnengetrocknete Tomaten (getrocknet, leicht gesalzen)', kcal: 224, fat: 2.6, sfat: 0.0, carbs: 49.0, sugar: 33.0, fiber: 10.0, protein: 12.0, salt: 8.1 },
{ category: 'Süßes & Snacks', name: 'KoRo Laugenbrezeln in dunkler Schokolade', kcal: 457, fat: 19.0, sfat: 10.0, carbs: 62.0, sugar: 25.0, fiber: 5.8, protein: 8.4, salt: 2.3 },
{ category: 'Proteinquellen', name: 'KoRo Geröstete und gesalzene Edamame Bohnen', kcal: 430, fat: 16.0, sfat: 2.0, carbs: 21.0, sugar: 1.0, fiber: 13.0, protein: 44.0, salt: 1.2 },];

/* ═══════════════════════════════════════════
   STATE
═══════════════════════════════════════════ */
let foods           = [];
let customPresets   = [];
let hiddenNutrients = new Set();
let editIndex       = null;
let chartInst       = null;

const PRESET_KEY  = 'mealradar_presets_v1';
const THEME_KEY   = 'mealradar_theme';
const HIDDEN_KEY  = 'mealradar_hidden_v1';
const FOODS_KEY   = 'mealradar_foods_v1';

/* ═══════════════════════════════════════════
   THEME
═══════════════════════════════════════════ */
function isDark() {
  return document.documentElement.getAttribute('data-theme') === 'dark';
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_KEY, theme);
  syncThemeButton();
  if (foods.length > 0) renderChart();   // update chart colours
}

function syncThemeButton() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  const dark = isDark();
  btn.textContent = dark ? t('theme_light_label') : t('theme_dark_label');
  btn.title       = dark ? t('theme_light_title') : t('theme_dark_title');
}

function initTheme() {
  // HTML already has the right attribute (set by inline script to avoid flash).
  // Just sync the button label.
  syncThemeButton();
}

document.getElementById('theme-toggle').addEventListener('click', () => {
  setTheme(isDark() ? 'light' : 'dark');
});

/* ═══════════════════════════════════════════
   LOCAL STORAGE – custom presets
═══════════════════════════════════════════ */
function loadCustomPresets() {
  try { return JSON.parse(localStorage.getItem(PRESET_KEY)) || []; } catch { return []; }
}
function saveCustomPresets() {
  localStorage.setItem(PRESET_KEY, JSON.stringify(customPresets));
}

/* ═══════════════════════════════════════════
   FOODS PERSISTENCE
═══════════════════════════════════════════ */
function saveFoods() {
  if (foods.length > 0) {
    localStorage.setItem(FOODS_KEY, JSON.stringify(foods));
  } else {
    localStorage.removeItem(FOODS_KEY);
  }
}

function loadFoods() {
  try {
    const raw = localStorage.getItem(FOODS_KEY);
    if (raw) { const p = JSON.parse(raw); if (Array.isArray(p)) foods = p; }
  } catch { /* ignore */ }
}

// Compact share URL: encode as array-of-arrays (no key names) to minimise URL length
const SHARE_COLS = ['name','amount','kcal','fat','sfat','carbs','sugar','fiber','protein','salt'];
function generateShareURL() {
  const rows = foods.map(f => SHARE_COLS.map(k => f[k] ?? ''));
  const url = new URL(window.location.href.split('?')[0]);
  url.searchParams.set('d', btoa(encodeURIComponent(JSON.stringify(rows))));
  return url.toString();
}

function loadFromShareURL() {
  const d = new URLSearchParams(window.location.search).get('d');
  if (!d) return;
  try {
    const parsed = JSON.parse(decodeURIComponent(atob(d)));
    if (!Array.isArray(parsed)) return;
    // Check for existing data before overwriting
    let existing = [];
    try {
      const raw = localStorage.getItem(FOODS_KEY);
      if (raw) { const p = JSON.parse(raw); if (Array.isArray(p)) existing = p; }
    } catch { /* ignore */ }
    if (existing.length > 0) {
      if (!confirm(t('confirm_load_share'))) {
        window.history.replaceState({}, '', window.location.pathname);
        return;
      }
    }
    // array-of-arrays format
    if (Array.isArray(parsed[0])) {
      foods = parsed.map(row => Object.fromEntries(SHARE_COLS.map((k, i) => [k, row[i] ?? ''])));
    }
  } catch { /* ignore malformed */ }
  // Persist to localStorage and clean the URL
  saveFoods();
  window.history.replaceState({}, '', window.location.pathname);
}

// Renamed alias so existing call sites still work
function syncURL() { saveFoods(); }

/* ═══════════════════════════════════════════
   NUTRIENT VISIBILITY
═══════════════════════════════════════════ */
function loadHiddenNutrients() {
  try {
    const raw = localStorage.getItem(HIDDEN_KEY);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch { return new Set(); }
}

function saveHiddenNutrients() {
  localStorage.setItem(HIDDEN_KEY, JSON.stringify([...hiddenNutrients]));
}

function visibleNutrients() {
  return NUTRIENTS.filter(n => !hiddenNutrients.has(n.key));
}

function renderNutrientToggles() {
  const container = document.getElementById('nutrient-toggles');
  if (!container) return;
  container.innerHTML = '';
  NUTRIENTS.forEach(n => {
    const btn = document.createElement('button');
    btn.className = 'n-toggle' + (hiddenNutrients.has(n.key) ? ' off' : '');
    btn.textContent = nutrientLabel(n);
    btn.type = 'button';
    btn.addEventListener('click', () => {
      if (hiddenNutrients.has(n.key)) hiddenNutrients.delete(n.key);
      else hiddenNutrients.add(n.key);
      saveHiddenNutrients();
      renderNutrientToggles();
      renderChart();
      renderSummary();
    });
    container.appendChild(btn);
  });
}

/* ═══════════════════════════════════════════
   CALCULATIONS
═══════════════════════════════════════════ */
function total(key) {
  return foods.reduce(
    (s, f) => s + (parseFloat(f.amount) || 0) / 100 * (parseFloat(f[key]) || 0),
    0
  );
}
function contrib(food, key) {
  return (parseFloat(food.amount) || 0) / 100 * (parseFloat(food[key]) || 0);
}

/* ═══════════════════════════════════════════
   RENDER ALL
═══════════════════════════════════════════ */
function renderAll() {
  renderPresets();
  renderFoodList();
  renderNutrientToggles();
  renderChart();
  renderSummary();
  syncURL();
  const has = foods.length > 0;
  document.getElementById('food-list-card').style.display = has ? '' : 'none';
  document.getElementById('chart-card').style.display     = has ? '' : 'none';
  document.getElementById('summary-card').style.display   = has ? '' : 'none';
}

/* ═══════════════════════════════════════════
   PRESETS PANEL
═══════════════════════════════════════════ */
function renderPresets() {
  const q  = (document.getElementById('preset-search').value || '').toLowerCase();
  const fb = q ? BUILTIN.filter(p => p.name.toLowerCase().includes(q))       : BUILTIN;
  const fc = q ? customPresets.filter(p => p.name.toLowerCase().includes(q)) : customPresets;

  const container = document.getElementById('presets-container');
  container.innerHTML = '';

  // No results at all while searching
  if (q && fb.length === 0 && fc.length === 0) {
    const div = document.createElement('div');
    div.className = 'empty-state';
    div.textContent = t('empty_search');
    container.appendChild(div);
    return;
  }

  // Helper: group array by item.category
  function groupByCategory(arr) {
    const map = new Map();
    arr.forEach(item => {
      const k = item.category || 'Eigene';
      if (!map.has(k)) map.set(k, []);
      map.get(k).push(item);
    });
    const collator = new Intl.Collator(uiLang);
    const sorted = new Map(
      [...map.entries()].sort((a, b) => collator.compare(tCategory(a[0]), tCategory(b[0])))
    );
    sorted.forEach(items => items.sort((a, b) => collator.compare(a.name, b.name)));
    return sorted;
  }

  // Helper: render a collapsible category group (or flat labeled section when searching)
  function appendCategoryGroup(catKey, items, isCustom, collapsible) {
    const catLabel = catKey === '__suggestions__' ? t('section_suggestions') : tCategory(catKey);
    const grid = document.createElement('div');
    grid.className = 'presets-grid';
    items.forEach(p => grid.appendChild(makeChip({ ...p, _custom: isCustom })));

    if (collapsible) {
      const det = document.createElement('details');
      det.className = 'preset-category';
      det.open = false;
      const sum = document.createElement('summary');
      sum.textContent = catLabel;
      det.appendChild(sum);
      det.appendChild(grid);
      container.appendChild(det);
    } else {
      if (catKey !== 'Eigene') {
        const lbl = document.createElement('div');
        lbl.className = 'section-label';
        lbl.textContent = catLabel;
        container.appendChild(lbl);
      }
      container.appendChild(grid);
    }
  }

  // ── Built-in suggestions ──────────────────
  if (fb.length > 0) {
    if (q) {
      // Flat while searching
      appendCategoryGroup('__suggestions__', fb, false, false);
    } else {
      // Collapsible groups by category
      groupByCategory(fb).forEach((items, catKey) => {
        appendCategoryGroup(catKey, items, false, true);
      });
    }
  }

  // ── Custom presets ────────────────────────
  const hdDiv = document.createElement('div');
  hdDiv.className = 'custom-section-hd';
  const exportDisabled = customPresets.length === 0;
  hdDiv.innerHTML = `
    <span class="section-label">${esc(t('section_my_presets'))}</span>
    <div class="custom-section-actions">
      <button class="btn btn-ghost btn-sm" id="btn-export"
        ${exportDisabled ? `disabled title="${esc(t('no_presets_title'))}"` : ''}>
        ${esc(t('btn_export'))}
      </button>
      <button class="btn btn-ghost btn-sm" id="btn-import-trigger">${esc(t('btn_import'))}</button>
    </div>`;
  if (fc.length > 0) {
    if (q) {
      // Flat while searching
      const grid = document.createElement('div');
      grid.className = 'presets-grid';
      fc.forEach(p => grid.appendChild(makeChip({ ...p, _custom: true })));
      container.appendChild(grid);
    } else {
      groupByCategory(fc).forEach((items, catKey) => {
        appendCategoryGroup(catKey, items, true, true);
      });
    }
  } else {
    const empty = document.createElement('div');
    empty.className = 'custom-empty';
    empty.textContent = q ? t('presets_none_found') : t('presets_none_yet');
    container.appendChild(empty);
  }

  container.appendChild(hdDiv);

  // localStorage notice
  const notice = document.createElement('div');
  notice.className = 'storage-notice';
  notice.innerHTML = t('storage_notice_html');
  container.appendChild(notice);

  // Attach listeners (elements just added to DOM)
  document.getElementById('btn-export')?.addEventListener('click', exportPresets);
  document.getElementById('btn-import-trigger')?.addEventListener('click', () => {
    document.getElementById('import-input').click();
  });
}

function makeChip(preset) {
  const chip = document.createElement('span');
  chip.className = 'chip' + (preset._custom ? ' custom' : '');
  chip.appendChild(document.createTextNode(preset.name));
  chip.addEventListener('click', () => openPresetDialog(preset));

  if (preset._custom) {
    const del = document.createElement('button');
    del.className = 'chip-del';
    del.textContent = '×';
    del.title = t('delete_preset_title');
    del.addEventListener('click', e => {
      e.stopPropagation();
      customPresets = customPresets.filter(p => p.name !== preset.name);
      saveCustomPresets();
      renderPresets();
      toast(t('toast_preset_deleted', { name: preset.name }));
    });
    chip.appendChild(del);
  }
  return chip;
}

/* ═══════════════════════════════════════════
   FOOD LIST
═══════════════════════════════════════════ */
function renderFoodList() {
  const el = document.getElementById('food-list');
  el.innerHTML = '';
  foods.forEach((food, i) => {
    const color = COLORS[i % COLORS.length];
    const div = document.createElement('div');
    div.className = 'food-item';
    div.innerHTML = `
      <span class="food-swatch" style="background:${color}"></span>
      <span class="food-name" title="${esc(food.name)}">${esc(food.name)}</span>
      <div class="food-amount-wrap">
        <input class="food-amount-input" type="number" min="0.1" step="0.1"
               value="${parseFloat(food.amount)}" data-i="${i}" aria-label="${esc(t('food_amount_aria'))}">
        <span class="food-amount-unit">g</span>
      </div>
      <div class="food-btns">
        <button class="btn btn-edit"   data-act="edit"   data-i="${i}">${esc(t('food_btn_edit'))}</button>
        <button class="btn btn-remove" data-act="remove" data-i="${i}">${esc(t('food_btn_remove'))}</button>
      </div>`;
    el.appendChild(div);
  });
}

/* ═══════════════════════════════════════════
   CHART
═══════════════════════════════════════════ */
function renderChart() {
  if (chartInst) { chartInst.destroy(); chartInst = null; }
  if (foods.length === 0) return;

  const vis = visibleNutrients();

  const wrapper = document.getElementById('chart-wrapper');
  wrapper.style.height = (vis.length * 62 + 80) + 'px';

  // Dynamic x-axis max
  let maxPct = 115;
  vis.forEach(n => {
    const pct = (total(n.key) / n.ref) * 100;
    if (pct + 15 > maxPct) maxPct = Math.ceil((pct + 15) / 10) * 10;
  });

  // Theme-aware colours
  const dark       = isDark();
  const textColor  = dark ? '#e2e8f0' : '#1e293b';
  const mutedColor = dark ? '#94a3b8' : '#64748b';
  const gridColor  = dark ? '#1e293b' : '#f1f5f9';

  // Multiline y-axis labels: ["Fett", "7.5 / 70 g"]
  const labels = vis.map(n => [nutrientLabel(n), `${total(n.key).toFixed(1)} / ${n.ref} ${n.unit}`]);

  const datasets = foods.map((food, i) => ({
    label: food.name,
    data: vis.map(n => parseFloat(((contrib(food, n.key) / n.ref) * 100).toFixed(3))),
    backgroundColor: COLORS[i % COLORS.length] + 'cc',
    borderColor:     COLORS[i % COLORS.length],
    borderWidth: 1,
    borderRadius: 3,
    borderSkipped: false,
  }));

  // Custom plugin: dashed 100 % reference line
  const line100 = {
    id: 'line100',
    afterDatasetsDraw(chart) {
      const { ctx, chartArea, scales } = chart;
      if (!scales.x) return;
      const x = scales.x.getPixelForValue(100);
      if (x < chartArea.left || x > chartArea.right) return;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(x, chartArea.top);
      ctx.lineTo(x, chartArea.bottom);
      ctx.strokeStyle = 'rgba(220,38,38,.75)';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 4]);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = 'rgba(220,38,38,.9)';
      ctx.font = 'bold 11px system-ui,sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('100 %', x, chartArea.top - 5);
      ctx.restore();
    },
  };

  chartInst = new Chart(document.getElementById('chart'), {
    type: 'bar',
    plugins: [line100],
    data: { labels, datasets },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 300 },
      layout: { padding: { top: 18 } },
      scales: {
        x: {
          stacked: true,
          min: 0, max: maxPct,
          ticks: { callback: v => v + ' %', color: mutedColor, font: { size: 11 } },
          grid: { color: gridColor },
          title: { display: true, text: t('chart_x_title'), color: mutedColor, font: { size: 11 } },
        },
        y: {
          stacked: true,
          ticks: { color: textColor, font: { size: 11 } },
          grid: { display: false },
        },
      },
      plugins: {
        legend: {
          position: 'top',
          labels: { usePointStyle: true, pointStyle: 'rectRounded', padding: 14, color: textColor, font: { size: 12 } },
          onClick(_e, legendItem, legend) {
            const chart = legend.chart;
            const meta  = chart.getDatasetMeta(legendItem.datasetIndex);
            meta.hidden = !meta.hidden;
            chart.data.labels = vis.map(n => {
              let sum = 0;
              foods.forEach((food, i) => {
                if (!chart.getDatasetMeta(i).hidden)
                  sum += (parseFloat(food.amount) || 0) / 100 * (parseFloat(food[n.key]) || 0);
              });
              return [nutrientLabel(n), `${sum.toFixed(1)} / ${n.ref} ${n.unit}`];
            });
            chart.update();
          },
        },
        tooltip: {
          callbacks: {
            label(ctx) {
              const food = foods[ctx.datasetIndex];
              const n    = vis[ctx.dataIndex];
              const val  = contrib(food, n.key).toFixed(1);
              return ` ${ctx.dataset.label}: ${ctx.parsed.x.toFixed(1)} % (${val} ${n.unit})`;
            },
            footer(items) {
              const n   = vis[items[0].dataIndex];
              const tot = total(n.key);
              const pct = (tot / n.ref) * 100;
              return `${t('chart_total_label')}: ${tot.toFixed(1)} ${n.unit} = ${pct.toFixed(0)} %`;
            },
          },
        },
      },
    },
  });
}

/* ═══════════════════════════════════════════
   SUMMARY TABLE
═══════════════════════════════════════════ */
function renderSummary() {
  const tbody = document.getElementById('summary-body');
  tbody.innerHTML = '';
  visibleNutrients().forEach(n => {
    const tot = total(n.key);
    const pct = (tot / n.ref) * 100;
    let fill, cls;
    if (n.minGoal) {
      if      (pct >= 100) { fill = '#22c55e'; cls = 'c-ok';   }
      else if (pct >= 75)  { fill = '#f59e0b'; cls = 'c-warn'; }
      else                 { fill = '#ef4444'; cls = 'c-over';  }
    } else {
      if      (pct >= 100) { fill = '#ef4444'; cls = 'c-over'; }
      else if (pct >= 75)  { fill = '#f59e0b'; cls = 'c-warn'; }
      else                 { fill = '#3b82f6'; cls = 'c-ok';   }
    }
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${esc(nutrientLabel(n))}</strong></td>
      <td>${tot.toFixed(1)} ${n.unit}</td>
      <td>${n.ref} ${n.unit}</td>
      <td>
        <div class="pct-row">
          <div class="pct-track">
            <div class="pct-fill" style="width:${Math.min(pct, 100)}%;background:${fill}"></div>
          </div>
          <span class="pct-label ${cls}">${pct.toFixed(0)} %</span>
        </div>
      </td>`;
    tbody.appendChild(tr);
  });
}

/* ═══════════════════════════════════════════
   DIALOG HELPERS
═══════════════════════════════════════════ */
const dialog = document.getElementById('food-dialog');

function openAddDialog() {
  editIndex = null;
  document.getElementById('dlg-title').textContent  = t('dlg_title_add');
  document.getElementById('btn-submit').textContent = t('btn_add');
  document.getElementById('food-form').reset();
  document.getElementById('nutrient-details').open = true;
  clearDlgError();
  document.querySelector('.dlg-body').scrollTop = 0;
  dialog.showModal();
  document.getElementById('f-name').focus();
}

function openEditDialog(i) {
  editIndex = i;
  document.getElementById('dlg-title').textContent  = t('dlg_title_edit');
  document.getElementById('btn-submit').textContent = t('btn_save');
  fillForm(foods[i]);
  document.getElementById('nutrient-details').open = true;
  clearDlgError();
  document.querySelector('.dlg-body').scrollTop = 0;
  dialog.showModal();
  document.getElementById('f-amount').focus();
}

function openPresetDialog(preset) {
  editIndex = null;
  document.getElementById('dlg-title').textContent  = t('dlg_title_add');
  document.getElementById('btn-submit').textContent = t('btn_add');
  fillForm({ ...preset, amount: '' });
  document.getElementById('nutrient-details').open = false;
  clearDlgError();
  document.querySelector('.dlg-body').scrollTop = 0;
  dialog.showModal();
  document.getElementById('f-amount').focus();
}

function fillForm(d) {
  const f = document.getElementById('food-form');
  f.elements.name.value    = d.name    ?? '';
  f.elements.amount.value  = d.amount  ?? '';
  f.elements.kcal.value    = d.kcal    ?? '';
  f.elements.fat.value     = d.fat     ?? '';
  f.elements.sfat.value    = d.sfat    ?? '';
  f.elements.carbs.value   = d.carbs   ?? '';
  f.elements.sugar.value   = d.sugar   ?? '';
  f.elements.fiber.value   = d.fiber   ?? '';
  f.elements.protein.value = d.protein ?? '';
  f.elements.salt.value    = d.salt    ?? '';
}

function getFormValues() {
  const f = document.getElementById('food-form');
  return {
    name:    f.elements.name.value.trim(),
    amount:  f.elements.amount.value  || '0',
    kcal:    f.elements.kcal.value    || '',
    fat:     f.elements.fat.value     || '0',
    sfat:    f.elements.sfat.value    || '0',
    carbs:   f.elements.carbs.value   || '0',
    sugar:   f.elements.sugar.value   || '0',
    fiber:   f.elements.fiber.value   || '0',
    protein: f.elements.protein.value || '0',
    salt:    f.elements.salt.value    || '0',
  };
}

/* ═══════════════════════════════════════════
   INLINE DIALOG ERRORS
═══════════════════════════════════════════ */
function showDlgError(msg) {
  const el = document.getElementById('dlg-error');
  el.textContent = msg;
  el.style.display = '';
}
function clearDlgError() {
  const el = document.getElementById('dlg-error');
  el.style.display = 'none';
  el.textContent = '';
}

let presetMsgTimer = null;
function showDlgPresetMsg(msg, type = 'ok') {
  const btn = document.getElementById('btn-save-preset');
  btn.textContent = msg;
  btn.style.color = type === 'ok' ? 'var(--primary)' : 'var(--danger)';
  clearTimeout(presetMsgTimer);
  presetMsgTimer = setTimeout(() => {
    btn.textContent = t('btn_save_preset');
    btn.style.color = '';
  }, 2500);
}

/* ═══════════════════════════════════════════
   EXPORT / IMPORT
═══════════════════════════════════════════ */
function exportPresets() {
  if (customPresets.length === 0) { toast(t('toast_export_empty')); return; }
  const blob = new Blob([JSON.stringify(customPresets, null, 2)], { type: 'application/json' });
  const url  = URL.createObjectURL(blob);
  const a    = Object.assign(document.createElement('a'), { href: url, download: t('export_filename') });
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  toast(t('toast_export_count', { n: customPresets.length }));
}

function importPresets(file) {
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const data = JSON.parse(e.target.result);
      if (!Array.isArray(data)) throw new Error();
      let added = 0, skipped = 0;
      data.forEach(p => {
        if (!p.name || typeof p.name !== 'string') { skipped++; return; }
        if ([...BUILTIN, ...customPresets].some(x => x.name === p.name)) { skipped++; return; }
        const { name, category, kcal, fat, sfat, carbs, sugar, fiber, protein, salt } = p;
        customPresets.push({
          name,
          ...(category ? { category } : {}),
          ...(kcal !== undefined ? { kcal: Number(kcal) } : {}),
          fat:     Number(fat)     || 0,
          sfat:    Number(sfat)    || 0,
          carbs:   Number(carbs)   || 0,
          sugar:   Number(sugar)   || 0,
          fiber:   Number(fiber)   || 0,
          protein: Number(protein) || 0,
          salt:    Number(salt)    || 0,
        });
        added++;
      });
      saveCustomPresets();
      renderPresets();
      toast(skipped > 0
        ? t('toast_import_count_skipped', { n: added, s: skipped })
        : t('toast_import_count', { n: added }));
    } catch {
      toast(t('toast_import_invalid'));
    }
  };
  reader.readAsText(file);
}

/* ═══════════════════════════════════════════
   EVENT LISTENERS
═══════════════════════════════════════════ */

// Form submit
document.getElementById('food-form').addEventListener('submit', e => {
  e.preventDefault();
  const data = getFormValues();
  if (!data.name) {
    showDlgError(t('err_name_required'));
    document.getElementById('f-name').focus();
    return;
  }
  if (!(parseFloat(data.amount) > 0)) {
    showDlgError(t('err_amount_invalid'));
    document.getElementById('f-amount').focus();
    return;
  }
  clearDlgError();
  if (editIndex !== null) {
    foods[editIndex] = data;
    toast(t('toast_item_updated', { name: data.name }));
  } else {
    foods.push(data);
    toast(t('toast_item_added', { name: data.name }));
  }
  dialog.close();
  renderAll();
});

// Amount quick-select buttons
document.getElementById('food-form').addEventListener('click', e => {
  if (e.target.matches('.amount-btn')) {
    document.getElementById('f-amount').value = e.target.dataset.g;
    document.getElementById('f-amount').blur();
  }
});

// Dialog close
document.getElementById('dlg-close').addEventListener('click', () => dialog.close());
document.getElementById('btn-cancel').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });

// Save as preset
document.getElementById('btn-save-preset').addEventListener('click', () => {
  const data = getFormValues();
  if (!data.name) { showDlgPresetMsg(t('err_name_first'), 'err'); return; }
  if ([...BUILTIN, ...customPresets].some(p => p.name === data.name)) {
    showDlgPresetMsg(t('err_preset_exists'), 'err'); return;
  }
  const { amount, ...preset } = data;
  customPresets.push(preset);
  saveCustomPresets();
  renderPresets();
  showDlgPresetMsg(t('toast_saved'), 'ok');
});

// New food button
document.getElementById('btn-new').addEventListener('click', openAddDialog);

// Food list delegation (edit / remove)
document.getElementById('food-list').addEventListener('click', e => {
  const btn = e.target.closest('[data-act]');
  if (!btn) return;
  const i = parseInt(btn.dataset.i, 10);
  if (isNaN(i)) return;
  if (btn.dataset.act === 'edit')   openEditDialog(i);
  if (btn.dataset.act === 'remove') { foods.splice(i, 1); renderAll(); }
});

document.getElementById('food-list').addEventListener('change', e => {
  const inp = e.target.closest('.food-amount-input');
  if (!inp) return;
  const i = parseInt(inp.dataset.i, 10);
  if (isNaN(i)) return;
  const val = parseFloat(inp.value);
  if (val > 0) {
    foods[i].amount = String(val);
    renderChart();
    renderSummary();
    syncURL();
  } else {
    inp.value = parseFloat(foods[i].amount);
  }
});

// Preset search
document.getElementById('preset-search').addEventListener('input', renderPresets);

// Share link (compact URL)
document.getElementById('btn-copy').addEventListener('click', () => {
  if (!foods.length) return;
  const url = generateShareURL();
  navigator.clipboard.writeText(url)
    .then(() => toast(t('toast_link_copied')))
    .catch(() => window.prompt(t('prompt_link'), url));
});

// Clear all
document.getElementById('btn-clear').addEventListener('click', () => {
  if (!foods.length) return;
  if (confirm(t('confirm_clear_all'))) { foods = []; renderAll(); }
});

// File import
document.getElementById('import-input').addEventListener('change', e => {
  const file = e.target.files[0];
  if (file) { importPresets(file); e.target.value = ''; }
});

/* ═══════════════════════════════════════════
   UTILS
═══════════════════════════════════════════ */
let toastTimer = null;
function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2800);
}

function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/* ═══════════════════════════════════════════
   COLLAPSIBLE CARDS
═══════════════════════════════════════════ */
function initCollapsible() {
  ['food-list-card', 'chart-card', 'summary-card'].forEach(id => {
    const card  = document.getElementById(id);
    const title = card.querySelector('.card-toggle');
    const key   = `mealradar_collapsed_${id}`;

    if (localStorage.getItem(key) === '1') card.classList.add('collapsed');

    title.addEventListener('click', () => {
      const nowCollapsed = card.classList.toggle('collapsed');
      localStorage.setItem(key, nowCollapsed ? '1' : '0');
      if (id === 'chart-card' && !nowCollapsed && chartInst) {
        requestAnimationFrame(() => chartInst.resize());
      }
    });
  });
}

/* ═══════════════════════════════════════════
   I18N – apply / toggle
═══════════════════════════════════════════ */
function applyLang(lang) {
  if (lang !== 'de' && lang !== 'en') lang = 'en';
  uiLang = lang;
  localStorage.setItem(LANG_KEY, lang);
  document.documentElement.lang = lang;
  document.title = t('page_title');

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (STRINGS[lang][key] !== undefined) el.textContent = STRINGS[lang][key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (STRINGS[lang][key] !== undefined) el.innerHTML = STRINGS[lang][key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (STRINGS[lang][key] !== undefined) el.placeholder = STRINGS[lang][key];
  });
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.dataset.i18nTitle;
    if (STRINGS[lang][key] !== undefined) el.title = STRINGS[lang][key];
  });
  document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
    const key = el.dataset.i18nAriaLabel;
    if (STRINGS[lang][key] !== undefined) el.setAttribute('aria-label', STRINGS[lang][key]);
  });
  document.querySelectorAll('[data-i18n-nutrient]').forEach(el => {
    const n = NUTRIENTS.find(x => x.key === el.dataset.i18nNutrient);
    if (n) el.textContent = nutrientLabel(n);
  });

  document.getElementById('uiLangDe')?.classList.toggle('active', lang === 'de');
  document.getElementById('uiLangEn')?.classList.toggle('active', lang === 'en');

  syncThemeButton();
  if (typeof renderAll === 'function') renderAll();
}

document.getElementById('uiLangDe')?.addEventListener('click', () => applyLang('de'));
document.getElementById('uiLangEn')?.addEventListener('click', () => applyLang('en'));

/* ═══════════════════════════════════════════
   INIT
═══════════════════════════════════════════ */
customPresets   = loadCustomPresets();
hiddenNutrients = loadHiddenNutrients();
initTheme();
loadFromShareURL();
loadFoods();
applyLang(uiLang);
initCollapsible();
