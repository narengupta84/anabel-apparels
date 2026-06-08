/* ================================================================
   ANABEL APPARELS — Product Data
   To add/edit products, update the PRODUCTS array below.
   Each product must have: id, category, gender, name, mainImg,
   thumbs[], desc, material, sizes[], colors[], fit, care
   ================================================================ */

const _TR = './src/img/men/trousers/';
const _JG = './src/img/men/joggers/';
const _MS = './src/img/men/shorts/';
const _WS = './src/img/women/shorts/';

const PRODUCTS = [

  /* ==================== MEN'S TROUSERS ==================== */
  {
    id: 6, category: 'trousers', gender: 'male',
    name: 'Slim Chino Trousers — Stone',
    mainImg: _TR + 'stone/front.jpeg',
    thumbs: [
      _TR + 'stone/front.jpeg',
      _TR + 'stone/back.jpeg',
      _TR + 'stone/lifestyle.jpeg'
    ],
    desc: 'Our signature slim-fit chino trousers in a refined stone colour. Crafted from premium stretch cotton for all-day comfort with a sharp, tailored silhouette. Versatile enough for office or weekend.',
    material: 'Stretch Cotton Twill',
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: ['Stone'],
    fit: 'Slim Fit',
    care: 'Machine wash cold, hang to dry'
  },
  {
    id: 7, category: 'trousers', gender: 'male',
    name: 'Slim Chino Trousers — Dark Brown',
    mainImg: _TR + 'brown/front.jpeg',
    thumbs: [
      _TR + 'brown/front.jpeg',
      _TR + 'brown/back.jpeg'
    ],
    desc: 'A rich dark brown slim chino that pairs beautifully with crisp white shirts and leather dress shoes. A sophisticated choice for professionals who appreciate depth in their wardrobe.',
    material: 'Stretch Cotton Twill',
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: ['Dark Brown'],
    fit: 'Slim Fit',
    care: 'Machine wash cold, hang to dry'
  },
  {
    id: 8, category: 'trousers', gender: 'male',
    name: 'Slim Chino Trousers — Black',
    mainImg: _TR + 'black/front.jpeg',
    thumbs: [
      _TR + 'black/front.jpeg',
      _TR + 'black/back.jpeg'
    ],
    desc: 'The essential black slim chino — sleek, versatile, and effortlessly styled. Transitions seamlessly from the office to evening events. A true wardrobe staple.',
    material: 'Stretch Cotton Twill',
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: ['Black'],
    fit: 'Slim Fit',
    care: 'Machine wash cold, hang to dry'
  },
  {
    id: 9, category: 'trousers', gender: 'male',
    name: 'Slim Chino Trousers — Olive',
    mainImg: _TR + 'olive/front.jpeg',
    thumbs: [
      _TR + 'olive/front.jpeg',
      _TR + 'olive/angle.jpeg',
      _TR + 'olive/back.jpeg',
      _TR + 'olive/lifestyle.jpeg'
    ],
    desc: 'An earthy olive slim chino that brings understated character and warmth to your look. Pairs equally well with casual tees for weekends or a button-down for semi-formal settings.',
    material: 'Stretch Cotton Twill',
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: ['Olive'],
    fit: 'Slim Fit',
    care: 'Machine wash cold, hang to dry'
  },
  {
    id: 10, category: 'trousers', gender: 'male',
    name: 'Slim Chino Trousers — Navy',
    mainImg: _TR + 'navy/front.jpeg',
    thumbs: [
      _TR + 'navy/front.jpeg',
      _TR + 'navy/back.jpeg',
      _TR + 'navy/lifestyle.jpeg'
    ],
    desc: 'Classic navy slim chinoes — the backbone of a smart-casual wardrobe. Clean lines and a tailored taper make this a go-to choice for meetings, dinners, and everything in between.',
    material: 'Stretch Cotton Twill',
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: ['Navy'],
    fit: 'Slim Fit',
    care: 'Machine wash cold, hang to dry'
  },
  {
    id: 11, category: 'trousers', gender: 'male',
    name: 'Slim Chino Trousers — Caramel',
    mainImg: _TR + 'caramel/front.jpeg',
    thumbs: [
      _TR + 'caramel/front.jpeg',
      _TR + 'caramel/back.jpeg',
      _TR + 'caramel/angle.jpeg'
    ],
    desc: 'Warm caramel-toned slim chinoes that bring a rich, luxurious feel to your everyday look. Ideal for both relaxed weekend styling and smart-casual settings.',
    material: 'Stretch Cotton Twill',
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: ['Caramel'],
    fit: 'Slim Fit',
    care: 'Machine wash cold, hang to dry'
  },

  /* ==================== MEN'S JOGGERS ==================== */
  {
    id: 12, category: 'joggers', gender: 'male',
    name: 'Cargo Jogger Pants — Khaki',
    mainImg: _JG + 'khaki/front.png',
    thumbs: [
      _JG + 'khaki/front.png',
      _JG + 'khaki/front-2.png',
      _JG + 'khaki/front-3.png',
      _JG + 'khaki/back.png'
    ],
    desc: 'Rugged yet refined cargo jogger pants in warm khaki. Features large utility cargo pockets, an elastic waistband with drawstring, and ribbed ankle cuffs. The ultimate athleisure statement.',
    material: 'Premium Cotton Twill',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Khaki'],
    fit: 'Relaxed Tapered',
    care: 'Machine wash cold, hang to dry'
  },
  {
    id: 33, category: 'joggers', gender: 'male',
    name: 'Cargo Jogger Pants — Black',
    mainImg: _JG + 'black/front.png',
    thumbs: [
      _JG + 'black/front.png',
      _JG + 'black/angle.png',
      _JG + 'black/back.png'
    ],
    desc: 'Sleek black cargo jogger pants with large utility pockets, an elastic drawstring waistband, and ribbed ankle cuffs. The versatile athleisure essential — sharp enough for the city, comfortable enough for the gym.',
    material: 'Premium Cotton Twill',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black'],
    fit: 'Relaxed Tapered',
    care: 'Machine wash cold, hang to dry'
  },
  {
    id: 34, category: 'joggers', gender: 'male',
    name: 'Cargo Jogger Pants — Forest Green',
    mainImg: _JG + 'forest-green/front.png',
    thumbs: [
      _JG + 'forest-green/front.png',
      _JG + 'forest-green/angle.png',
      _JG + 'forest-green/back.png'
    ],
    desc: 'Bold forest-green cargo joggers with a rugged yet refined silhouette. Utility cargo pockets add function while the tapered ankle keeps the look sharp and modern.',
    material: 'Premium Cotton Twill',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Forest Green'],
    fit: 'Relaxed Tapered',
    care: 'Machine wash cold, hang to dry'
  },
  {
    id: 35, category: 'joggers', gender: 'male',
    name: 'Cargo Jogger Pants — Olive',
    mainImg: _JG + 'olive/front.png',
    thumbs: [
      _JG + 'olive/front.png',
      _JG + 'olive/back.png'
    ],
    desc: 'Earthy olive cargo joggers that bring an outdoor-inspired aesthetic to your everyday wardrobe. Relaxed fit with tapered cuffs — easy to style for weekends or casual outings.',
    material: 'Premium Cotton Twill',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Olive'],
    fit: 'Relaxed Tapered',
    care: 'Machine wash cold, hang to dry'
  },
  {
    id: 36, category: 'joggers', gender: 'male',
    name: 'Cargo Jogger Pants — Navy',
    mainImg: _JG + 'navy/front.png',
    thumbs: [
      _JG + 'navy/front.png'
    ],
    desc: 'Classic navy cargo joggers with a clean, structured silhouette. A versatile everyday staple that pairs effortlessly with any casual top.',
    material: 'Premium Cotton Twill',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Navy'],
    fit: 'Relaxed Tapered',
    care: 'Machine wash cold, hang to dry'
  },

  /* ==================== MEN'S SHORTS (Hydration Collection) ==================== */
  {
    id: 24, category: 'shorts', gender: 'male',
    name: 'Hydration Print Shorts — Brown',
    mainImg: _MS + 'brown/front.jpg',
    thumbs: [
      _MS + 'brown/front.jpg',
      _MS + 'brown/front-2.jpg',
      _MS + 'collection.jpg'
    ],
    desc: 'Lightweight drawstring shorts in warm brown with a refined all-over print. Part of the Hydration Collection — designed for effortless style at the beach, poolside, or casual outings.',
    material: 'Cotton Poplin',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Brown'],
    fit: 'Relaxed Fit',
    care: 'Machine wash cold, hang to dry'
  },
  {
    id: 25, category: 'shorts', gender: 'male',
    name: 'Hydration Print Shorts — Green',
    mainImg: _MS + 'green/front.jpg',
    thumbs: [
      _MS + 'green/front.jpg',
      _MS + 'collection.jpg'
    ],
    desc: 'Fresh forest-green drawstring shorts with a signature all-over micro-print. Part of the Hydration Collection — light, breathable, and perfectly styled for warm days.',
    material: 'Cotton Poplin',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Forest Green'],
    fit: 'Relaxed Fit',
    care: 'Machine wash cold, hang to dry'
  },
  {
    id: 26, category: 'shorts', gender: 'male',
    name: 'Hydration Print Shorts — Blue',
    mainImg: _MS + 'blue/front.jpg',
    thumbs: [
      _MS + 'blue/front.jpg',
      _MS + 'collection.jpg'
    ],
    desc: 'Cool steel-blue drawstring shorts featuring a subtle all-over print. The Hydration Collection staple — versatile enough to pair with any casual tee or linen shirt.',
    material: 'Cotton Poplin',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Steel Blue'],
    fit: 'Relaxed Fit',
    care: 'Machine wash cold, hang to dry'
  },
  {
    id: 27, category: 'shorts', gender: 'male',
    name: 'Hydration Print Shorts — Camel',
    mainImg: _MS + 'camel/front.jpg',
    thumbs: [
      _MS + 'camel/front.jpg',
      _MS + 'collection.jpg'
    ],
    desc: 'Warm camel-toned drawstring shorts with a tonal all-over print. From the Hydration Collection — an easy holiday essential with a refined edge.',
    material: 'Cotton Poplin',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Camel'],
    fit: 'Relaxed Fit',
    care: 'Machine wash cold, hang to dry'
  },
  {
    id: 28, category: 'shorts', gender: 'male',
    name: 'Hydration Print Shorts — Black',
    mainImg: _MS + 'black/front.jpg',
    thumbs: [
      _MS + 'black/front.jpg',
      _MS + 'collection.jpg'
    ],
    desc: 'Sleek black drawstring shorts with a bold all-over micro-print. Part of the Hydration Collection — the sharp, versatile option that pairs with everything.',
    material: 'Cotton Poplin',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black'],
    fit: 'Relaxed Fit',
    care: 'Machine wash cold, hang to dry'
  },

  /* ==================== WOMEN'S SHORTS (Hydration Collection — Local) ==================== */
  {
    id: 29, category: 'shorts', gender: 'female',
    name: 'Hydration Print Shorts — Charcoal',
    mainImg: _WS + 'charcoal/front.jpg',
    thumbs: [
      _WS + 'charcoal/front.jpg',
      _WS + 'charcoal/front-2.jpg',
      _WS + 'collection.jpg'
    ],
    desc: 'Easy-fitting charcoal drawstring shorts with a chic all-over print. Part of the Hydration Collection — relaxed, effortless, and styled to perfection for summer days.',
    material: 'Cotton Poplin',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Charcoal'],
    fit: 'Relaxed Fit',
    care: 'Machine wash cold, hang to dry'
  },
  {
    id: 30, category: 'shorts', gender: 'female',
    name: 'Everyday Linen Shorts — Sand',
    mainImg: _WS + 'sand/front.jpg',
    thumbs: [
      _WS + 'sand/front.jpg'
    ],
    desc: 'Relaxed sand-coloured linen-blend shorts with a soft elastic waistband. Simple, breezy, and effortlessly styled — perfect for every summer occasion from brunch to the beach.',
    material: 'Linen-Cotton Blend',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Sand'],
    fit: 'Relaxed Fit',
    care: 'Machine wash cold, lay flat to dry'
  },
  {
    id: 31, category: 'shorts', gender: 'female',
    name: 'Hydration Print Shorts — Green',
    mainImg: _WS + 'green/front.jpg',
    thumbs: [
      _WS + 'green/front.jpg',
      _WS + 'collection.jpg'
    ],
    desc: 'Vibrant forest-green drawstring shorts with a playful all-over leaf print. From the Hydration Collection — a fresh, confident choice for warm-weather adventures.',
    material: 'Cotton Poplin',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Forest Green'],
    fit: 'Relaxed Fit',
    care: 'Machine wash cold, hang to dry'
  },
  {
    id: 32, category: 'shorts', gender: 'female',
    name: 'Hydration Print Shorts — Nude',
    mainImg: _WS + 'nude/front.jpg',
    thumbs: [
      _WS + 'nude/front.jpg',
      _WS + 'collection.jpg'
    ],
    desc: 'Soft nude drawstring shorts with a delicate polka-dot print. Part of the Hydration Collection — understated femininity meets casual comfort for your warmest days.',
    material: 'Cotton Poplin',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Nude'],
    fit: 'Relaxed Fit',
    care: 'Machine wash cold, hang to dry'
  }

];

/* ---- Category Labels ---- */
const CATEGORY_LABELS = {
  formals:  'Formal Wear',
  shorts:   'Shorts',
  trousers: 'Trouser Pants',
  joggers:  'Jogger Pants'
};

/* ---- Home page category cards ---- */
const HOME_CATEGORIES = [
  {
    gender: 'male',
    genderLabel: "Men's",
    items: [
      { cat: 'shorts',   label: 'Shorts',   subtitle: 'Casual & Comfortable',  img: _MS + 'collection.jpg' },
      { cat: 'trousers', label: 'Trousers', subtitle: 'Perfectly Tailored',    img: _TR + 'stone/front.jpeg' },
      { cat: 'joggers',  label: 'Joggers',  subtitle: 'Athleisure & Style',    img: _JG + 'khaki/front.png' }
    ]
  },
  {
    gender: 'female',
    genderLabel: "Women's",
    items: [
      { cat: 'shorts',   label: 'Shorts',   subtitle: 'Breezy & Chic',        img: _WS + 'green/front.jpg' }
    ]
  }
];
