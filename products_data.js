const WA_NUMBER = '923212765705';

const products = [
  { id: 1, name: "Lenovo ChromeBook 100e", cat: "student", brand: "lenovo", price: "Rs. 12,500", old: "", spec: "Intel Celeron Dual Core • 4GB RAM • 32GB eMMCS • 11.6\" Full HD Display • Chrome OS • 2 USB + 2 Type-C Ports", img: "product1.jpeg", badge: "Value" },
  { id: 2, name: "Apple MacBook Pro 2017 A1708", cat: "creator", brand: "apple", price: "Rs. 75,000", old: "", spec: "Intel Core i5 7th Gen • 8GB RAM • 512GB SSD • 13\" Retina Display • True Tone Technology • Lightweight Aluminum Body • All-day Battery Life", img: "product2.jpeg", badge: "New" },
  { id: 3, name: "Lenovo ChromeBook 300E", cat: "student", brand: "lenovo", price: "Rs. 16,500", old: "", spec: "Chrome OS • 11.6\" Touch Display • 360 Rotatable • 1.6 GHz Processor • 4GB DDR4 RAM • 32GB Storage • 6hrs Battery • Playstore Supported • USB 3.0 • SD Card Slot • With Charger", img: "product3.jpeg", badge: "New" },
  { id: 4, name: "Lenovo Legion 5i Pro", cat: "gaming", brand: "lenovo", price: "Rs. 310,000", old: "Rs. 335,000", spec: "RTX 4050 • i7-13th Gen • 16GB • 1TB • QHD 165Hz", img: "product6.jpeg", badge: "" },
  { id: 5, name: "MacBook Pro 14 M3", cat: "creator", brand: "apple", price: "Rs. 485,000", old: "Rs. 510,000", spec: "M3 Pro Chip • 18GB RAM • 512GB SSD • Space Black", img: "product7.jpeg", badge: "New" },
  { id: 6, name: "ASUS Zenbook Duo 2024", cat: "creator", brand: "asus", price: "Rs. 395,000", old: "Rs. 420,000", spec: "Dual Screen • Ultra 9 • 32GB • 1TB • 3K 120Hz OLED", img: "product8.jpeg", badge: "Hot" },
  { id: 7, name: "Dell Latitude 7440", cat: "business", brand: "dell", price: "Rs. 225,000", old: "Rs. 240,000", spec: "i5-13th Gen • 16GB • 512GB • vPro • Backlit KB", img: "product9.jpeg", badge: "" },
  { id: 8, name: "HP Victus 15 2023", cat: "gaming", brand: "hp", price: "Rs. 195,000", old: "Rs. 215,000", spec: "RTX 3050 • i5-12th Gen • 16GB • 512GB • Performance Blue", img: "product10.jpeg", badge: "Sale" },
  { id: 9, name: "Lenovo ThinkPad X1 Carbon", cat: "business", brand: "lenovo", price: "Rs. 380,000", old: "Rs. 410,000", spec: "i7-13th Gen • 16GB • 1TB • WUXGA • Carbon Fiber", img: "product11.jpeg", badge: "" },
  { id: 10, name: "MacBook Air M2 13\"", cat: "student", brand: "apple", price: "Rs. 295,000", old: "Rs. 315,000", spec: "M2 Chip • 8GB RAM • 256GB SSD • Midnight Finish", img: "product12.jpeg", badge: "" },
  { id: 11, name: "ASUS TUF Gaming F15", cat: "gaming", brand: "asus", price: "Rs. 245,000", old: "Rs. 260,000", spec: "RTX 4050 • i7-12th Gen • 16GB • 512GB • 144Hz", img: "product13.jpeg", badge: "" },
  { id: 12, name: "Dell Inspiron 16 5630", cat: "student", brand: "dell", price: "Rs. 185,000", old: "Rs. 195,000", spec: "i7-13th Gen • 16GB • 512GB • Platinum Silver", img: "product14.jpeg", badge: "" },
  { id: 13, name: "HP Envy 13 x360", cat: "student", brand: "hp", price: "Rs. 165,000", old: "Rs. 180,000", spec: "i5-12th Gen • 8GB • 512GB • Touch • 2-in-1", img: "product15.jpeg", badge: "" },
  { id: 14, name: "Lenovo IdeaPad Slim 3", cat: "student", brand: "lenovo", price: "Rs. 125,000", old: "Rs. 140,000", spec: "Ryzen 5 • 8GB • 512GB • FHD IPS • Abyss Blue", img: "product16.jpeg", badge: "Value" },
  { id: 15, name: "Alienware x16 R1", cat: "gaming", brand: "dell", price: "Rs. 750,000", old: "Rs. 820,000", spec: "RTX 4080 • i9-13900HK • 32GB • 2TB • QHD+ 240Hz", img: "product17.jpeg", badge: "Hot" },
  { id: 16, name: "HP Omen 16 2023", cat: "gaming", brand: "hp", price: "Rs. 325,000", old: "Rs. 350,000", spec: "RTX 4060 • Ryzen 7 7840HS • 16GB • 1TB • QHD", img: "product18.jpeg", badge: "" },
  { id: 17, name: "Lenovo Yoga 9i Gen 8", cat: "creator", brand: "lenovo", price: "Rs. 365,000", old: "Rs. 390,000", spec: "i7-13th Gen • 16GB • 1TB • 4K OLED • Rotating Soundbar", img: "product1.jpeg", badge: "" },
  { id: 18, name: "Dell Precision 5680", cat: "creator", brand: "dell", price: "Rs. 595,000", old: "Rs. 650,000", spec: "RTX 2000 Ada • i9-13th Gen • 64GB • 1TB • Workstation", img: "product2.jpeg", badge: "" }
];
