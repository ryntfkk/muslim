(() => {
  'use strict';

  const products = {
    umar: {"name":"The Umar Tee","color":"Solid black / Silver sword front and burgundy horseman back","image":"assets/umar-back-tee-v2.png","description":"UMAR BIN KHATTAB — THE CONQUEROR OF EMPIRES. A solid-black unisex tee with a straight silver sword on the front, inscribed with عمر بن الخطاب (Umar ibn al-Khattab). A burgundy and ivory horseman illustration with refined serif lettering completes the back.","conceptNote":"Front-and-back garment concept. The sword and inscription are artistic interpretations, not an authenticated historical replica. Final details and availability will be shared on our marketplaces.","links":{},"gallery":[{"src":"assets/umar-back-tee-v2.png","alt":"Back of The Umar Tee with burgundy horseman illustration and UMAR BIN KHATTAB lettering","label":"Bagian belakang","caption":"Bagian belakang — ilustrasi penunggang kuda"},{"src":"assets/umar-front-full.png","alt":"Full front view of The Umar Tee with a straight silver sword inscribed عمر بن الخطاب","label":"Bagian depan","caption":"Bagian depan — عمر بن الخطاب (Umar bin al-Khattab)"}]},
    steadfast: {
      "name": "The Steadfast Tee",
      "color": "Solid black / Stone grey and gold graphic",
      "image": "assets/steadfast-tee.png",
      "description": "“So do not weaken and do not grieve” — an excerpt from Surah Ali ’Imran 3:139. A solid-black unisex tee with a weathered stone column, a fine gold fracture, and compact off-white typography. A reminder to remain steadfast through difficult days.",
      "conceptNote": "Excerpt from the English translation by Sahih International. A garment design concept; final details and availability will be shared on our marketplaces.",
      "links": {}
},
    relief: {
      name: 'The Relief Feather Tee',
      color: 'Washed black / Graphite and gold graphic',
      image: 'assets/relief-feather-tee.png',
      description: '“So verily, with the hardship, there is relief.” — Surah Ash-Sharh (94:5). A washed-black unisex tee with an angular graphite feather, a fine gold spine, and clean typography. A reminder of relief through difficult days.',
      conceptNote: 'A garment design concept; final details and availability will be shared on our marketplaces.',
      links: {},
    },
    salam: {
      name: 'The Salam Tee',
      color: 'Cream / Black and graphite graphic',
      image: 'assets/salam-cream-tee-v2.png',
      description: '“La paix par l’amour” — peace through love. A cream unisex tee featuring flowing Salam calligraphy over an engraved rifle-and-rose illustration. Finished with the Arabic AQL mark.',
      conceptNote: 'A garment design concept; final details and availability will be shared on our marketplaces.',
      links: {},
    },
    palestine: {
      name: 'The Palestine Tee',
      color: 'Cream / Crimson and black graphic',
      image: 'assets/palestine-cream-tee-v2.png',
      description: 'A cream unisex tee featuring crimson Palestine calligraphy, a keffiyeh-clad stencil illustration, and the statement “From the river 2 the sea”. Finished with the AQL Arabic mark.',
      conceptNote: 'A garment design concept; final details and availability will be shared on our marketplaces.',
      links: {},
    },
    gift: {
      name: 'AQL Gift Box',
      image: 'assets/gift-box.png',
      lang: 'id',
      links: {},
    },
    purpose: {
      name: 'The Purpose Tee',
      color: 'Washed black / Graphic tee',
      image: 'assets/hero-purpose.png',
      description: 'Every soul has a purpose. A thoughtful graphic for the days you need a little reminder of yours.',
      links: {},
    },
    sabr: {
      name: 'The Sabr Tee',
      color: 'Bone / Graphic tee',
      image: 'assets/sabr-tee.png',
      description: 'A little patience. A lot of faith. A reminder to slow down, keep going, and meet the everyday with sabr.',
      links: {},
    },
    hijab: {
      name: 'The Everyday Hijab',
      color: 'Black / Gold detail',
      image: 'assets/hijab-product.png',
      description: 'An understated everyday hijab with a subtle gold detail. A concept built around simplicity, modesty, and quiet confidence.',
      links: {},
    },
    noor: {
      name: 'The Noor Hijab',
      color: 'Ivory / Fine gold detail',
      image: 'assets/noor-hijab.png',
      description: 'Soft ivory folds with a fine golden edge. An understated hijab concept that brings a lighter note to the AQL collection.',
      links: {},
    },
    tawakkul: {
      name: 'The Tawakkul Tee',
      color: 'Charcoal / Ivory and gold graphic',
      image: 'assets/tawakkul-tee.png',
      description: 'Do your part. Trust His plan. A charcoal tee with a restrained ivory graphic and a fine gold arch — a reminder to pair your effort with trust.',
      links: {},
    },
    ease: {
      name: 'The Ease Tee',
      color: 'Washed black / Ivory and gold graphic',
      image: 'assets/ease-tee-v3.png',
      description: '“So, surely with hardship comes ease.” — Surah Ash-Sharh 94:5. An understated unisex graphic: open geometric frames in ivory and gold beside clean lettering, with the verse reference printed beneath. A quiet reminder of hope through difficult days.',
      conceptNote: 'English translation: Dr. Mustafa Khattab, The Clear Quran. A garment design concept; final details and availability will be shared on our marketplaces.',
      links: {},
    },
    dhikr: {
      name: 'The Dhikr Tee',
      color: 'Off-white / Charcoal print and gold detail',
      image: 'assets/dhikr-tee-v2.png',
      description: '“And He is with you wherever you are.” — an excerpt from Surah Al-Hadid 57:4. A unisex off-white tee with an abstract ripple graphic, textured charcoal print, and a subtle gold accent. A reminder to carry into the everyday.',
      conceptNote: 'Excerpt from the English translation by Dr. Mustafa Khattab, The Clear Quran. A garment design concept; final details and availability will be shared on our marketplaces.',
      links: {},
    },
    promise: {
      name: 'The Promise Tee',
      color: 'Washed black / Monochrome print and gold detail',
      image: 'assets/promise-tee.png',
      description: '“So be patient. Indeed, the promise of Allah is truth.” — an excerpt from Surah Ar-Rum 30:60. A unisex washed-black tee with a monochrome stone-staircase print, soft light, ivory lettering, and a fine gold accent. A reminder to keep patience close.',
      conceptNote: 'Excerpt from the English translation by Sahih International. A garment design concept; final details and availability will be shared on our marketplaces.',
      links: {},
    },
    ilm: {
      name: 'The Ilm Tee',
      color: 'Pearl grey / Black typography and gold detail',
      image: 'assets/ilm-tee.png',
      description: '“My Lord, increase me in knowledge.” — an excerpt from Surah Ta-Ha 20:114. A unisex pearl-grey tee with an asymmetric front print, precise black typography, fine grid lines, and a warm gold accent. A reminder to keep learning with intention.',
      conceptNote: 'Excerpt from the English translation by Sahih International. A garment design concept; final details and availability will be shared on our marketplaces.',
      links: {},
    },
    trust: {
      name: 'The Trust Tee',
      color: 'Washed black / Ivory woodcut and gold detail',
      image: 'assets/trust-tee.png',
      description: '“And whoever relies upon Allah - then He is sufficient for him.” — an excerpt from Surah At-Talaq 65:3. A unisex washed-black tee with an ivory ocean-wave illustration in a woodcut style, slim lettering, and a warm gold reference. A reminder to move through life with trust.',
      conceptNote: 'Excerpt from the English translation by Sahih International. A garment design concept; final details and availability will be shared on our marketplaces.',
      links: {},
    },
    shukr: {
      name: 'The Shukr Tee',
      color: 'Off-white / Engraved wheat and gold detail',
      image: 'assets/shukr-tee-wheat.png',
      description: '“If you are grateful, I will certainly give you more.” — an excerpt from Surah Ibrahim 14:7. A unisex off-white tee with a single engraved black wheat stalk, a subtly curved fine gold stem, and compact upright typography. A reminder to notice what you have and meet it with gratitude.',
      conceptNote: 'Excerpt from the English translation by Dr. Mustafa Khattab, The Clear Quran. A garment design concept; final details and availability will be shared on our marketplaces.',
      links: {},
    },
    asr: {
      name: 'The Asr Tee',
      color: 'Washed black / Graphite print and gold detail',
      image: 'assets/asr-tee-techwear.png',
      description: '“By time, indeed mankind is in loss, except for those who believe” — Al-\'Asr 103:1-3. A unisex washed-black tee with a cropped, faceless Arab sculpture in graphite halftone. An angular stencil headline, monospaced reminder, and fine technical marks form a compact industrial graphic, finished with a small warm-gold reference.',
      conceptNote: 'Shortened English wording based on Al-‘Asr 103:1–3. A garment design concept; final details and availability will be shared on our marketplaces.',
      links: {},
    },
    parfum: {
      name: 'Quiet Parfum',
      color: 'Hitam, putih, emas / Quiet 001',
      image: 'assets/quiet-perfume.png',
      description: 'Konsep parfum AQL dengan botol kaca hitam, label putih, dan detail emas hangat. Kardus hitam berlogo عقل melengkapi tampilan yang sederhana dan elegan.',
      lang: 'id',
      conceptNote: 'Visual konsep parfum AQL. Pilihan aroma, ukuran, dan ketersediaan akan diumumkan di marketplace.',
      gallery: [{
        src: 'assets/quiet-perfume.png',
        alt: 'Konsep botol parfum Quiet dan kardus hitam dengan label putih serta aksen emas hangat',
        label: 'Botol dan kemasan',
        caption: 'Visual konsep',
      }],
      links: {},
    },
    sakinah: {
      name: 'Sakinah Parfum',
      color: 'Ivory, hitam, emas / Sakinah 002',
      image: 'assets/sakinah-perfume.png',
      description: 'Sisi terang dari koleksi parfum AQL. Botol ivory dengan tutup hitam dan detail emas hangat, dilengkapi kardus senada berlogo عقل. Sederhana, tenang, dan berkesan.',
      lang: 'id',
      conceptNote: 'Visual konsep parfum AQL. Pilihan aroma, ukuran, dan ketersediaan akan diumumkan di marketplace.',
      gallery: [{
        src: 'assets/sakinah-perfume.png',
        alt: 'Konsep botol Sakinah Parfum dan kardus ivory dengan tutup hitam serta detail emas',
        label: 'Botol dan kemasan',
        caption: 'Visual konsep',
      }],
      links: {},
    },
    tasbih: {
      name: 'Tasbih Dzikir',
      color: 'Hitam / Manik bulat dan tali senada',
      image: 'assets/tasbih/editorial.png',
      description: 'Rangkaian manik bulat hitam dengan kilau lembut, detail ujung memanjang, dan tali hitam senada. Pengingat kecil untuk meluangkan waktu berdzikir di tengah keseharian.',
      lang: 'id',
      gallery: [
        {
          src: 'assets/tasbih/editorial.png',
          alt: 'Visual konsep tasbih hitam berkilau dengan tali hitam di atas latar batu gelap',
          label: 'Konsep tasbih',
          caption: 'Visual konsep',
        },
        {
          src: 'assets/tasbih/reference.jpg',
          alt: 'Foto referensi asli tasbih hitam dengan manik bulat dan tali hitam di atas permukaan abu-abu terang',
          crop: 'tasbih',
          label: 'Referensi tasbih',
        },
      ],
      links: {},
    },
    sajadah: {
      name: 'Sajadah Couple',
      color: 'Hitam + putih / Sepasang sajadah',
      image: 'assets/sajadah/editorial-v2.png',
      description: 'Sepasang sajadah hitam dan putih dengan siluet mihrab, bingkai ornamental, dan motif hati yang saling terhubung saat diletakkan berdampingan.',
      lang: 'id',
      gallery: [
        {
          src: 'assets/sajadah/editorial-v2.png',
          alt: 'Visual konsep sepasang sajadah hitam dan putih dengan tekstur kain dan cahaya alami yang lembut',
          label: 'Suasana',
          caption: 'Visual konsep',
        },
        {
          src: 'assets/sajadah/front.jpg',
          alt: 'Referensi sepasang sajadah hitam dan putih dengan siluet mihrab dan motif hati berpasangan',
          crop: 'front',
          label: 'Tampilan pasangan',
        },
        {
          src: 'assets/sajadah/detail.jpg',
          alt: 'Detail tekstur, bingkai ornamental, dan sambungan motif hati pada sajadah hitam dan putih',
          crop: 'detail',
          label: 'Detail motif',
        },
        {
          src: 'assets/sajadah/lifestyle.jpg',
          alt: 'Referensi sajadah hitam dan putih digunakan berdampingan untuk beribadah',
          crop: 'lifestyle',
          label: 'Dalam keseharian',
        },
      ],
      links: {},
    },
  };

  const $ = selector => document.querySelector(selector);
  const $$ = selector => [...document.querySelectorAll(selector)];
  const dialog = $('#product-dialog');
  const marketplaces = window.AQL_MARKETPLACES || {};
  const platformNames = { shopee: 'Shopee', tiktok: 'TikTok Shop' };

  function validUrl(value) {
    try {
      const url = new URL(value);
      return url.protocol === 'https:' ? url.href : '';
    } catch {
      return '';
    }
  }

  function configureMarketplaces(scope, product) {
    const isIndonesian = product?.lang === 'id';
    scope.querySelectorAll('.marketplace-link').forEach(link => {
      const id = link.dataset.marketplace;
      const name = platformNames[id] || id;
      const destination = validUrl(product?.links?.[id] || marketplaces[id]?.url);
      const label = document.createElement('span');
      label.textContent = name;
      const arrow = document.createElement('span');
      arrow.setAttribute('aria-hidden', 'true');
      const arrowSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      arrowSvg.setAttribute('class', 'icon');
      arrowSvg.setAttribute('viewBox', '0 0 24 24');
      arrowSvg.setAttribute('fill', 'none');
      arrowSvg.setAttribute('stroke', 'currentColor');
      arrowSvg.setAttribute('stroke-width', '1.5');
      arrowSvg.setAttribute('stroke-linecap', 'round');
      arrowSvg.setAttribute('stroke-linejoin', 'round');
      arrowSvg.setAttribute('aria-hidden', 'true');
      arrowSvg.setAttribute('focusable', 'false');
      const arrowPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      arrowPath.setAttribute('d', 'M6 18 18 6M6 6h12v12');
      arrowSvg.append(arrowPath);
      arrow.append(arrowSvg);
      if (destination) {
        link.href = destination;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.removeAttribute('aria-disabled');
        link.setAttribute('aria-label', isIndonesian ? 'Buka ' + name + ' (tab baru)' : 'Visit ' + name + ' (opens in a new tab)');
      } else {
        const soon = document.createElement('small');
        soon.textContent = isIndonesian ? 'Segera hadir' : 'Coming soon';
        label.append(soon);
        link.removeAttribute('href');
        link.removeAttribute('target');
        link.removeAttribute('rel');
        link.setAttribute('aria-disabled', 'true');
        link.setAttribute('aria-label', name + (isIndonesian ? ', tautan toko segera tersedia' : ', store link coming soon'));
      }
      link.replaceChildren(label, arrow);
    });
  }

  configureMarketplaces(document);
  configureMarketplaces($('#gift-box'), products.gift);
  const available = Object.values(marketplaces).some(platform => validUrl(platform?.url));
  $('#marketplace-status').textContent = available
    ? 'Choose your marketplace to explore availability and shop.'
    : 'Our store links are coming soon.';

  function configureProductImages(product, id) {
    const image = $('#product-image');
    const frame = $('#product-image-frame');
    const gallery = $('#product-gallery');
    const caption = $('#product-caption');
    const photos = product.gallery || [{
      src: product.image,
      alt: product.name + ' — collection concept',
    }];
    const galleryButtons = [];

    function showPhoto(index) {
      const photo = photos[index];
      if (frame) {
        frame.classList.remove('reference-frame', 'crop-front', 'crop-detail', 'crop-lifestyle', 'crop-tasbih', 'editorial-frame');
        if (photo.crop) frame.classList.add('reference-frame', 'crop-' + photo.crop);
        else if (product.gallery) frame.classList.add('editorial-frame');
      }
      image.src = photo.src;
      image.alt = photo.alt;
      image.style.filter = id === 'sabr' ? 'grayscale(1)' : '';
      if (caption) {
        caption.hidden = !product.gallery;
        caption.textContent = product.gallery ? (photo.caption || 'Foto referensi produk') : '';
      }
      galleryButtons.forEach((button, buttonIndex) => {
        const selected = buttonIndex === index;
        button.classList.toggle('selected', selected);
        button.setAttribute('aria-pressed', String(selected));
      });
    }

    if (gallery) {
      gallery.replaceChildren();
      gallery.hidden = photos.length < 2;
      if (photos.length > 1) {
        photos.forEach((photo, index) => {
          const button = document.createElement('button');
          button.type = 'button';
          button.className = 'gallery-thumb';
          button.setAttribute('aria-label', 'Lihat foto ' + photo.label.toLowerCase());
          button.setAttribute('aria-controls', 'product-image');
          const thumbnailFrame = document.createElement('span');
          thumbnailFrame.className = photo.crop ? 'reference-frame crop-' + photo.crop : 'editorial-thumbnail';
          const thumbnail = document.createElement('img');
          thumbnail.src = photo.src;
          thumbnail.alt = '';
          thumbnail.setAttribute('aria-hidden', 'true');
          thumbnailFrame.append(thumbnail);
          button.append(thumbnailFrame);
          button.addEventListener('click', () => showPhoto(index));
          galleryButtons.push(button);
          gallery.append(button);
        });
      }
    }
    showPhoto(0);
  }

  $$('[data-product]').forEach(button => {
    button.addEventListener('click', () => {
      const product = products[button.dataset.product];
      if (!product) return;
      $('#product-name').textContent = product.name;
      $('#product-color').textContent = product.color;
      $('#product-description').textContent = product.description;
      dialog.dataset.product = button.dataset.product;
      dialog.setAttribute('lang', product.lang || 'en');
      configureProductImages(product, button.dataset.product);
      const conceptNote = $('#product-concept-note');
      if (conceptNote) {
        conceptNote.textContent = product.conceptNote || (product.lang === 'id'
          ? 'Visual konsep dan foto referensi. Detail akhir dan ketersediaan tersedia di marketplace.'
          : 'A collection concept. Final details and availability will be shared on our marketplaces.');
      }
      configureMarketplaces(dialog, product);
      dialog.showModal();
      document.body.classList.add('modal-open');
    });
  });

  $$('[data-close-dialog]').forEach(button => {
    button.addEventListener('click', () => button.closest('dialog').close());
  });
  $$('dialog').forEach(modal => {
    modal.addEventListener('close', () => {
      if (!document.querySelector('dialog[open]')) document.body.classList.remove('modal-open');
    });
    modal.addEventListener('click', event => {
      if (event.target !== modal) return;
      const rect = modal.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right ||
          event.clientY < rect.top || event.clientY > rect.bottom) modal.close();
    });
  });

  // Collection rotation stops for the rest of this page visit after a manual choice.
  const filterButtons = $$('[data-filter]');
  const productCards = $$('.product-card');
  const filterGroup = $('.filters');
  const collection = $('#collection');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let collectionTimer;
  let collectionInView = false;
  let collectionRotationStopped = false;

  function stopCollectionRotation() {
    collectionRotationStopped = true;
    clearTimeout(collectionTimer);
  }

  function selectCollectionFilter(button, manual = true) {
    if (manual) stopCollectionRotation();
    filterButtons.forEach(other => {
      const active = other === button;
      other.classList.toggle('active', active);
      other.setAttribute('aria-pressed', String(active));
    });
    productCards.forEach(card => {
      const wasHidden = card.hidden;
      card.hidden = button.dataset.filter !== 'all' &&
        card.dataset.category !== button.dataset.filter;
      card.classList.toggle('filter-enter', wasHidden && !card.hidden);
    });
  }

  function scheduleCollectionRotation() {
    clearTimeout(collectionTimer);
    if (collectionRotationStopped || !collectionInView || document.hidden ||
        reducedMotion.matches || collection.contains(document.activeElement)) return;
    collectionTimer = setTimeout(() => {
      const currentIndex = filterButtons.findIndex(button => button.classList.contains('active'));
      selectCollectionFilter(filterButtons[(currentIndex + 1) % filterButtons.length], false);
      scheduleCollectionRotation();
    }, 3000);
  }

  filterButtons.forEach(button => {
    button.addEventListener('click', () => selectCollectionFilter(button));
  });
  collection.addEventListener('click', stopCollectionRotation);
  collection.addEventListener('focusin', () => clearTimeout(collectionTimer));
  collection.addEventListener('focusout', () => {
    // Wait until focus has reached its next target before considering a restart.
    queueMicrotask(scheduleCollectionRotation);
  });
  document.addEventListener('visibilitychange', scheduleCollectionRotation);
  reducedMotion.addEventListener('change', scheduleCollectionRotation);
  const collectionObserver = new IntersectionObserver(entries => {
    collectionInView = entries[0].isIntersecting && entries[0].intersectionRatio >= .25;
    scheduleCollectionRotation();
  }, { threshold: [0, .25] });
  collectionObserver.observe(filterGroup);

  $$('a[href="#gift-box"]').forEach(link => {
    link.addEventListener('click', () => {
      stopCollectionRotation();
      if ($('#gift-box').hidden) $('[data-filter="all"]').click();
    });
  });

  $$('[data-collection-filter]').forEach(link => {
    link.addEventListener('click', () => {
      $('[data-filter="' + link.dataset.collectionFilter + '"]').click();
    });
  });

  const menu = $('#mobile-menu');
  const menuToggle = $('#menu-toggle');
  function closeMenu() {
    menu.hidden = true;
    menuToggle.setAttribute('aria-expanded', 'false');
  }
  menuToggle.addEventListener('click', () => {
    menu.hidden = !menu.hidden;
    menuToggle.setAttribute('aria-expanded', String(!menu.hidden));
  });
  $$('#mobile-menu a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });
  window.matchMedia('(min-width: 769px)').addEventListener('change', event => {
    if (event.matches) closeMenu();
  });
  $('#year').textContent = new Date().getFullYear();
})();
