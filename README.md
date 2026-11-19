# AQL عقل — Wear with intention

A responsive concept for a modern Muslim clothing brand with a mission for da'wah.

The revised design uses black and white, warm metallic gold accents (#D4AF37), lighter Manrope typography, smaller editorial imagery, a subtle Arabic background, and an Arabic-only logo at the top right. The fifteen-piece collection includes eight graphic tees, two hijabs, Sajadah Couple, Quiet Parfum, Sakinah Parfum, Tasbih Dzikir, and AQL Gift Box. The Noor Hijab adds ivory folds with a fine gold edge; the Tawakkul Tee adds a restrained charcoal, ivory, and gold reminder graphic. The Ease Tee uses a unisex geometric graphic: open ivory-and-gold frames beside an English Quran quotation in clean sans-serif lettering, with its small surah/ayah reference beneath. The Dhikr Tee brings an off-white option with a textured abstract ripple print and an excerpt of Al-Hadid 57:4. The Promise Tee adds a washed-black unisex design with a monochrome stone staircase, soft light, and an excerpt of Ar-Rum 30:60. The Ilm Tee introduces a pearl-grey front print with asymmetric typography, fine grid lines, and an excerpt of Ta-Ha 20:114. Apparel cards use six columns on wide screens, three on tablets, and two on phones.

## Run

Requires Node.js 18 or newer. No dependencies. Local preview runs directly; deployment uses a small static build.

    cd C:\Users\ryntf\aql
    npm run dev

Open http://localhost:3000. Press Ctrl+C in the terminal to stop.

### Preview on a phone

Connect the phone to the same router/Wi-Fi as the PC, then run:

    npm run dev:network

Open the printed Phone preview URL on the phone. The current LAN address is http://192.168.0.127:3000 (it may change after reconnecting). Keep the PC awake and the server running. If Windows Firewall blocks access, allow Node.js on Private networks. This mode serves the frontend to the local network; no router port forwarding is needed.

    npm run check

This checks JavaScript syntax. The default local server binds to 127.0.0.1; dev:network binds to 0.0.0.0. Both serve only the frontend and assets.

## Shopping destinations

There is no shopping bag, checkout, payment processing, or local order system.

Set your exact store URLs in marketplace-config.js:

    window.AQL_MARKETPLACES = {
      shopee: { name: 'Shopee', url: 'YOUR_HTTPS_SHOPEE_STORE_URL' },
      tiktok: { name: 'TikTok Shop', url: 'YOUR_HTTPS_TIKTOK_SHOP_URL' },
    };

Replace the placeholder strings with actual HTTPS addresses. The delivered configuration is empty because store URLs were not supplied. Empty or invalid URLs show "Coming soon", with no misleading destination.

Configured links open in a new tab. Optional per-product marketplace URLs can be added to each product's links object in app.js; they take precedence over the store links.

## AQL Gift Box

Gift Box appears first in the collection and is linked from the desktop and mobile navigation. It is a static catalogue feature: a packaging concept image, named Seserahan and Kado packages, clear descriptions of their contents, and direct Shopee/TikTok Shop links. Seserahan describes two black-and-white couple prayer mats; Kado describes Sajadah Couple plus one T-shirt. No gift builder, product checkboxes, message form, summary-copy flow, cart, or checkout remains.

The links use products.gift.links in app.js, falling back to marketplace-config.js. Exact URLs have not been supplied, so the entries remain in a coming-soon state. All ordering and package details belong on the marketplace.

assets/gift-box.png is concept photography labeled with its illustrated contents: hijab, perfume, and prayer beads. No box dimensions, capacity, or price are asserted.

## Automatic collection categories

While the category menu is visible, categories rotate every three seconds in DOM order: All pieces, T-shirts, Hijab, Sajadah, Parfum, Tasbih, Gift Box, then back to All pieces. Selection updates the active category and visible products together. Clicking a category, a product in the collection, or a hero category/Gift Box link stops rotation until the page is reloaded. Rotation pauses when the menu leaves view, the tab is hidden, or keyboard focus is inside the collection. Reduced-motion preferences disable automatic rotation and entry animations.

The timer logic was checked with a simulated clock for the complete loop, manual stopping, visibility/focus pauses, and reduced-motion preferences. Browser visual verification remains unavailable while local browser use is disabled.

## Files

The hero uses three existing images in a compact composition: the hijab portrait at left, with the Tawakkul T-shirt and Gift Box stacked at right. On phones, the headline and short description sit above this image grid; the extra hero note is hidden and spacing is reduced. The Hijab and T-shirt image links filter the collection and Gift Box opens its catalogue feature. The hero has no "Lihat koleksi" text link. Images have visible category labels and SVG arrows. The hero update passed source and asset checks; visual browser verification was unavailable because local browser use was disabled.

- index.html — copy, collection cards, hero, mission, marketplace section, product dialog.
- styles.css — layout, responsive breakpoints, colors, and local font declarations.
- app.js — category filters, product details, navigation, and marketplace link handling.
- marketplace-config.js — Shopee and TikTok Shop store destinations.
- assets/ — generated concept imagery, favicon, fonts, and font licenses.
- assets/IMAGE-PROMPTS.md — exact image prompts and built-in imagegen provenance.
- server.mjs — local preview server.
- build.mjs — copies the frontend and runtime assets into dist/.
- vercel.json — Vercel framework, build, and output settings.

Keep product data in app.js synchronized with the static collection cards in index.html.

The Sajadah category displays a featured black-and-white prayer-mat pair with a softly lit editorial concept image. Its dialog has four accessible thumbnails: the generated concept and three original references. The original user-supplied screenshots are in assets/sajadah/; CSS reference frames display only the photograph areas. See assets/sajadah/README.md for source and framing details. No price, material, dimensions, or personalization options are asserted. Add per-product Shopee and TikTok Shop URLs to products.sajadah.links in app.js when available.

The Parfum category contains Quiet Parfum (black glass and black carton) and Sakinah Parfum (ivory bottle and carton, black cap), both with restrained metallic gold details. assets/quiet-perfume.png and assets/sakinah-perfume.png are generated concepts, not verified stock photography. No scent, concentration, volume, longevity, or price is asserted. Product information is in products.parfum and products.sakinah; add their marketplace URLs when available.

The palette is defined in :root: --bg, --surface, --text, --muted, --gold, and --line. The page uses local Manrope and Noto Kufi Arabic fonts. Barlow remains as an unused asset from the initial concept.

UI icons use inline SVG paths rather than Unicode symbols, including dynamically created marketplace arrows, so mobile emoji fonts cannot change their appearance. Preserve aria-hidden and focusable attributes on decorative SVGs. Standard section padding is 56px on desktop and 32px on mobile, with smaller spacing in the reminder section.

## Concept imagery

Tasbih Dzikir has its own category and two-image gallery: a generated editorial concept and the unchanged user-supplied reference screenshot, displayed with CSS cropping to exclude marketplace UI. See assets/tasbih/README.md for provenance. No bead count, stone type, dimensions, price, or stock availability is asserted. Configure products.tasbih.links when store destinations are available.

The images are proposals, not verified production photography. The hijab portrait depicts a fictional adult model. The Sabr mockup is presented in monochrome through CSS to fit the current visual direction. Original assets and prompts are preserved.

The Ease Tee prints “So, surely with hardship comes ease.” with the small reference “QUR'AN · ASH-SHARH 94:5” beneath the design. The wording follows Dr. Mustafa Khattab's The Clear Quran, verified against [Quran.com, Ash-Sharh 94:5](https://quran.com/ash-sharh/5?translations=131). The product description repeats the quotation and reference, and the concept note credits the translation. Its source, exact image prompt, and image provenance are recorded in assets/ease-tee.md. The Dhikr Tee prints an excerpt from Al-Hadid 57:4: “And He is with you wherever you are.” It follows the same translator and is labeled as an excerpt in its product details. See assets/dhikr-tee.md for its source and prompt. The Promise Tee prints “So be patient. Indeed, the promise of Allah is truth.” with the small reference “QUR'AN · AR-RUM 30:60”. This is an excerpt from Sahih International's translation, verified against [the Quranic Arabic Corpus](https://corpus.quran.com/translation.jsp?chapter=30&verse=60). Its source and prompt are recorded in assets/promise-tee.md. The Ilm Tee prints “My Lord, increase me in knowledge.” with the small reference “QUR'AN · TA-HA 20:114”. This is the closing supplication excerpt from Sahih International's translation, verified against [the Quranic Arabic Corpus](https://corpus.quran.com/translation.jsp?chapter=20&verse=114). See assets/ilm-tee.md for its source and prompt. Other garment slogans remain original brand language. Final garment details and availability belong on your marketplace product listings.

## Deploy with Vercel

Repository: https://github.com/ryntfkk/muslim

Import this repository into Vercel and use the repository root. The included vercel.json configures:

- Framework preset: Other
- Build command: npm run build
- Output directory: dist
- Install command: skipped (no dependencies)

The build runs syntax checks and copies only index.html, styles.css, app.js, marketplace-config.js, and runtime assets with font licenses into dist/. The local preview server, source documentation, work logs, and Git metadata are not part of the website output. Vercel serves the resulting static files; no backend or environment variables are required.

Run npm run build locally to prepare the same output for another static host. Keep asset paths and font license notices intact. Connecting the repository and creating the hosted deployment is handled separately in Vercel.

Configuration reference: https://vercel.com/docs/project-configuration/vercel-json

## Verification

- JavaScript syntax checks passed.
- Desktop and 390px mobile layouts checked without horizontal overflow.
- All referenced images loaded.
- Hijab filter and product detail dialog checked.
- Shopping bag and checkout controls removed.
- Marketplace entries correctly remain unavailable while exact store URLs are empty.
