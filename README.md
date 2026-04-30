<img src="favicon/android-chrome-192x192.png" alt="icon" height="100">

# Meal Radar
A web app for nutritional analysis of meals. Add foods, enter their nutrient values per 100&nbsp;g, and see the totals visualized as a percentage of the EU daily reference intake (RI). Works entirely in the browser — no server, no build step.


## Features
- Add foods with nutrient values per 100&nbsp;g (kcal, fat, saturated fat, carbs, sugar, fibre, protein, salt)
- Built-in food database with common products, grouped by category
- Save custom food presets for quick re-entry; export and import presets as JSON
- Live search through built-in and saved presets
- Stacked horizontal bar chart showing each nutrient's share of the daily reference intake
- 100&nbsp;% RI reference line drawn directly on the chart
- Toggle individual nutrients on/off in the chart
- Full nutrient summary table with totals and percentages
- **Bilingual — DE / EN** with language saved across visits
- Light & dark theme with system-preference detection
- Shareable links: meal state is encoded in the URL (`?d=…`)
- Responsive layout for mobile and desktop


## How To Use

> Hosted version: open the GitHub Pages URL of this repo, or [Macusercom/Meal-Radar](https://github.com/Macusercom/Meal-Radar).

1. Click **+ New** to add a food item manually, or click any chip in the food database to pre-fill it.

2. Enter the product name, the amount in grams, and the nutrient values per 100&nbsp;g (typically taken from the package label).

3. *(Optional)* Click **Save preset** to store the food as a reusable custom preset.

4. The chart and the nutrient table update automatically. The red dashed line marks 100&nbsp;% of the daily reference intake.

5. Click **Copy link** to copy a shareable URL containing the full meal.

### Language
Use the **DE / EN** toggle in the top-right corner. The choice is remembered in `localStorage` across page loads and across the privacy and imprint subpages.

### Run locally
This is a static site. Either open `index.html` directly in your browser, or serve the folder with any static server, e.g.:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`.


## Reference Values
Reference intakes follow EU Regulation No.&nbsp;1169/2011 for adults. Fibre uses the DGE recommendation (≥30&nbsp;g/day).

| Nutrient        | RI&nbsp;/&nbsp;day |
|-----------------|--------------------|
| Fat             | 70&nbsp;g          |
| Saturated fat   | 20&nbsp;g          |
| Carbohydrates   | 260&nbsp;g         |
| Sugar           | 90&nbsp;g          |
| Fibre           | 30&nbsp;g          |
| Protein         | 50&nbsp;g          |
| Salt            | 6&nbsp;g           |


## Files
| File | Purpose |
|------|---------|
| `index.html` | Main app shell (markup + `data-i18n` attributes) |
| `app.js` | All app logic: state, rendering, i18n (`STRINGS`, `t()`, `applyLang()`), chart |
| `style.css` | Styles — light/dark tokens, layout, components |
| `privacy.html` | Privacy policy (DE/EN, inline i18n script) |
| `imprint.html` | Legal notice / Impressum (DE/EN, inline i18n script) |


## Tech
- Vanilla HTML, CSS, JavaScript — no framework, no build step
- [Chart.js&nbsp;4.4](https://www.chartjs.org/) via CDN for the stacked bar chart
- i18n: `STRINGS = { de: {…}, en: {…} }` in `app.js`; `localStorage` key `mealradar-lang`
- Meal state serialized as `btoa(encodeURIComponent(JSON.stringify(foods)))` in the `?d=` URL parameter

All data stays in your browser. No tracking, no backend, no analytics.

Built as a vibe coding project with [Claude](https://claude.ai).


## Images
![Screenshot](images/image1.png)

![Screenshot](images/image2.png)

![Screenshot](images/image3.png)
