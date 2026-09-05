import { assetPath } from '../utils/assets.js'

export const menuCategories = [
  {
    category: "Noodles and Snacks",
    items: [
      {
        name: "Lomi Special",
        price: 90,
        desc: "Rich and thick noodle soup overflowing with savory toppings and a boiled egg.",
        img: assetPath('lomi.png')
      },
      {
        name: "Pancit Canton/Bihon",
        price: 100,
        desc: "Delicious mix of bihon and canton noodles tossed in a savory soy-garlic sauce.",
        img: assetPath('pancit.png')
      },
      {
        name: "Fresh Lumpia",
        price: 60,
        desc: "Delicious mix of veggies wrapped in soft wrapper, served with sweet garlic sauce.",
        img: assetPath('lumpia.png')
      }
    ]
  },
  {
    category: "Silog Meals",
    items: [
      {
        name: "Tapsilog",
        price: 120,
        desc: "Savory, sweet cured beef sirloin paired with fragrant sinangag and a fried egg.",
        img: assetPath('tapsilog.png')
      },
      {
        name: "Longsilog",
        price: 100,
        desc: "Sweet and garlicky pork sausages paired with fragrant sinangag and a fried egg.",
        img: assetPath('longsilog.png')
      },
      {
        name: "Tocilog",
        price: 100,
        desc: "Tender cured sweet pork cooked to a caramelized finish, served with garlic rice and egg.",
        img: assetPath('tocilog.png')
      },
      {
        name: "Porksilog",
        price: 150,
        desc: "Juicy, pan-seared pork chop seasoned to perfection, served with garlic rice and egg.",
        img: assetPath('porksilog.png')
      }
    ]
  },
  {
    category: "Vegetable Meals",
    items: [
      {
        name: "Chop Suey",
        price: 150,
        pax: "Good for 2-3 pax",
        desc: "A colorful blend of sautéed veggies and pork in a thick sauce.",
        img: assetPath('chopsuey.png')
      },
      {
        name: "Pinakbet",
        price: 150,
        pax: "Good for 2-3 pax",
        desc: "Traditional Ilocano stewed vegetables seasoned with rich, savory bagoong.",
        img: assetPath('pinakbet.png')
      },
      {
        name: "Laing",
        price: 70,
        pax: "Good for 2-3 pax",
        desc: "Authentic spicy taro leaves stewed in thick coconut milk and chili peppers.",
        img: assetPath('laeng.png')
      }
    ]
  },
  {
    category: "Fish Meals",
    items: [
      {
        name: "Sinigang na Salmon",
        price: 160,
        pax: "Good for 2-3 pax",
        desc: "Savory and sour tamarind soup loaded with fresh salmon and leafy greens.",
        img: assetPath('salmon.png')
      },
      {
        name: "Fish Fillet",
        price: 160,
        pax: "Good for 2-3 pax",
        desc: "Golden, crispy fried fish fillet served with a rich sweet and sour sauce.",
        img: assetPath('fishfillet.png')
      }
    ]
  },
  {
    category: "Chicken Meals",
    items: [
      {
        name: "Buttered Chicken",
        price: 170,
        pax: "Good for 2-3 pax",
        desc: "Tender chicken simmered in a rich, velvety butter and garlic sauce.",
        img: assetPath('buttered-chicken.png')
      },
      {
        name: "Tinolang Manok",
        price: 150,
        pax: "Good for 2-3 pax",
        desc: "Comforting Filipino chicken broth cooked with ginger, garlic, and papaya.",
        img: assetPath('tinola.png')
      },
      {
        name: "Fried Chicken",
        price: 170,
        pax: "Good for 2-3 pax",
        desc: "Crispy Filipino-style fried chicken paired with ketchup.",
        img: assetPath('friedchicken.png')
      }
    ]
  },
  {
    category: "Pork Meals",
    items: [
      {
        name: "Grilled Liempo",
        price: 150,
        pax: "Good for 2-3 pax",
        desc: "Juicy grilled pork belly with a sweet-savory glaze and smoky flavor.",
        img: assetPath('liempo.png')
      },
      {
        name: "Dinakdakan",
        price: 120,
        pax: "Good for 2-3 pax",
        desc: "Smoky grilled pork minced and coated in a rich, spicy, and creamy sauce.",
        img: assetPath('dinakdakan.png')
      },
      {
        name: "Pork Sisig",
        price: 170,
        pax: "Good for 2-3 pax",
        desc: "Sizzling, crispy pork bits tossed with onions, chili, and fresh calamansi.",
        img: assetPath('pork-sisig.png')
      }
    ]
  },
  {
    category: "Beef Meals",
    items: [
      {
        name: "Bulalo",
        price: 350,
        pax: "Good for 3-5 pax",
        desc: "Tender beef shank with buttery marrow in a hot, savory beef broth.",
        img: assetPath('bulalo.png')
      },
      {
        name: "Kare-Kare",
        price: 350,
        pax: "Good for 3-5 pax",
        desc: "Hearty stew of tender beef, banana blossom, and eggplant in a savory peanut glaze.",
        img: assetPath('kare-kare.png')
      },
      {
        name: "Pigar-Pigar",
        price: 170,
        pax: "Good for 2-3 pax",
        desc: "Crispy, tender beef strips tossed with sautéed onions and fresh veggies.",
        img: assetPath('pigarpigar.png')
      }
    ]
  }
]