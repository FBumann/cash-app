# Vereinskasse

A single-file cash register web app for sports club events. Runs in Safari on iPad/iPhone, works fully offline, no install or accounts required.

## Use it

1. Open `index.html` in Safari (or any modern browser).
2. On iPad/iPhone: tap **Share → Zum Home-Bildschirm** to install it as a full-screen app.
3. That's it. No build, no server, no internet required after the first load.

## Features

- **Kasse** – tap-grid of menu items, cart with quantity controls, payment screen with cash input, change calculation, and quick-cash buttons (next round-up + 5/10/20/50 €).
- **Menü** – two-list editor: a persistent **library** of items you ever sell, and an **active menu** for the current event. Add, delete, and toggle items into today's menu.
- **Tag** – day total, list of all orders, **CSV export** (semicolon-separated, UTF-8 BOM, comma decimals — opens cleanly in Numbers/Excel DE), and a **reset day** action that clears orders + active menu but keeps the library.

## Data

Everything lives in `localStorage`:

| Key | Content | Persists across reset? |
| --- | --- | --- |
| `club-register-reusables` | Item library | yes |
| `club-register-active` | Today's active menu | no |
| `club-register-orders` | Today's orders | no |

The library is the only thing meant to outlive an event. Reset Day wipes orders and the active menu together.

## Tech

- Plain HTML + CSS + JavaScript in one file. No build, no dependencies.
- `// @ts-check` + JSDoc types for editor type-checking without a build step.
- Locale: German UI labels, EUR with `,` as the decimal separator.

## Out of scope

Card payments, receipts, multi-device sync, tax/invoice compliance, accounts.
