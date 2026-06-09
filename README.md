# Anabel Apparels

A clothing e-commerce website featuring men's and women's apparel collections.

![Anabel Apparels Preview](https://anabelapparels.pages.dev)

> **Live Site:** [https://anabelapparels.pages.dev](https://anabelapparels.pages.dev)

## Features

- Browse men's and women's clothing across multiple categories (trousers, joggers, shorts)
- Product listing page with category and gender filtering
- Detailed product page with image gallery, size, colour, material, and care info
- Shopping cart with persistent state via `localStorage`
- WhatsApp order enquiry — cart items are sent directly as a formatted WhatsApp message
- Fully responsive design for mobile and desktop
- Elegant dark theme with serif typography

## Technologies Used

- **HTML5** — Semantic markup for all pages
- **CSS3** — Custom styling with responsive design
- **Vanilla JavaScript** — App logic, cart management via `localStorage`
- **Font Awesome 6** — Icons
- **Google Fonts** — Cinzel, Playfair Display, Poppins
- **Cloudflare Pages** — Hosting and deployment

## Pages

- **Home** (`index.html`) — Landing page
- **List** (`list.html`) — Browse products
- **Detail** (`detail.html`) — Product detail view

## Project Structure

```
├── index.html
├── list.html
├── detail.html
└── src/
    ├── app.js
    ├── data.js
    ├── style.css
    ├── list.css
    ├── detail.css
    └── img/
        ├── men/
        │   ├── joggers/
        │   ├── shorts/
        │   └── trousers/
        └── women/
            └── shorts/
```

## Running Locally

No build step required. Simply open `index.html` in your browser:

```bash
# Clone the repository
git clone https://github.com/your-username/anabel-apparels.git
cd anabel-apparels

# Open in browser
open index.html       # macOS
xdg-open index.html   # Linux
start index.html      # Windows
```

## License

This project is licensed under the [MIT License](LICENSE).
