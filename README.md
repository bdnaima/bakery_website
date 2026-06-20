# Munami Cakery — Static Bakery Site

A small static website for a bakery showcasing cupcakes and wedding cakes. The site is built with plain HTML, CSS and JavaScript and loads product data from a JSON file.

## Quick start

- Open [index.html](index.html) in your browser.
- Or serve the folder with a simple HTTP server (recommended for fetch to work):
  - Python 3: `python -m http.server`
  - Then open http://localhost:8000

## Features

- Product pages generated from [products.json](products.json).
- Modal product details implemented in [script.js](script.js) using elements:
  - [`modal`](script.js)
  - [`modalImage`](script.js)
  - [`modalTitle`](script.js)
  - [`modalPrice`](script.js)
  - [`modalDescription`](script.js)
  - [`cupCakeContainer`](script.js)
  - [`weddingCakeContainer`](script.js)
  - [`viewAllProducts`](script.js)
  - [`moreAboutUs`](script.js)
  - [`closeModal`](script.js)
- Responsive layout and styling in [style.css](style.css).
- Separate pages: [index.html](index.html), [about.html](about.html), [products.html](products.html), [contact.html](contact.html).

## Project files

- [index.html](index.html) — Home / hero / newsletter / modal
- [about.html](about.html) — About page
- [products.html](products.html) — Products listing (cupcakes & wedding cakes)
- [contact.html](contact.html) — Contact & form
- [products.json](products.json) — Product data used by [script.js](script.js)
- [script.js](script.js) — Fetches products and handles modal interactions
- [style.css](style.css) — All site styles
- [images/](images/) — Product and hero images

## Modify products

Edit [products.json](products.json). The file contains two arrays: `cupcakes` and `weddingCakes`. Each item should include:

- `name` (string)
- `price` (number)
- `image` (relative path to an image in `images/`)
- `description` (string)

After saving changes, reload the site.

## Notes

- Fetch requests for local files require serving over HTTP in most browsers (file:// may block fetch).
- To change styling, edit [style.css](style.css).
