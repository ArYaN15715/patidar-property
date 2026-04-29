import type { Property } from "../types";

export const properties: Property[] = [
  // ─── RENTAL ────────────────────────────────────────────────────────────────
  {
    id: "rent-1bhk-kudasan",
    category: "rent",
    type: "1BHK Apartment",
    title: "1BHK Apartment in Kudasan",
    price: "₹6,500/month",
    area: "550 sq.ft.",
    location: "Kudasan, Gandhinagar",
    facing: "East Facing",
    floor: "1st Floor",
    parking: "2-Wheeler Parking",
    furnishing: "Semi-Furnished",
    description:
      "A compact, well-maintained 1BHK apartment perfect for working professionals or a small family. Located in a quiet residential lane in Kudasan with easy access to Infocity and bus routes. The unit gets good morning light and has no pending maintenance issues.",
    amenities: [
      "24/7 Water Supply",
      "Separate Electricity Meter",
      "Ground-Floor Watchman",
      "Near Bus Stand",
    ],
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
    ],
    badge: "Popular",
    whatsappMessage:
      "Hi, I'm interested in the 1BHK Apartment in Kudasan (₹6,500/month). Please share more details.",
  },
  {
    id: "rent-2bhk-kudasan",
    category: "rent",
    type: "2BHK Apartment",
    title: "2BHK Apartment in Kudasan",
    price: "₹12,000/month",
    area: "950 sq.ft.",
    location: "Kudasan, Gandhinagar",
    facing: "North-East Facing",
    floor: "3rd Floor",
    parking: "Car + 2-Wheeler",
    furnishing: "Semi-Furnished",
    description:
      "Spacious 2BHK in a well-maintained society in the heart of Kudasan. The flat has a modular kitchen, two good-sized bedrooms, and a balcony with open views. Society has lift and 24-hour security. Ideal for a family of 3–4.",
    amenities: [
      "Lift",
      "24/7 Security",
      "Covered Car Parking",
      "Power Backup",
      "Near Market",
    ],
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
    ],
    badge: "Popular",
    whatsappMessage:
      "Hi, I'm interested in the 2BHK Apartment in Kudasan (₹12,000/month). Please share more details.",
  },
  {
    id: "rent-3bhk-sector12",
    category: "rent",
    type: "3BHK Apartment",
    title: "3BHK Apartment in Sector 12",
    price: "₹18,500/month",
    area: "1,350 sq.ft.",
    location: "Sector 12, Gandhinagar",
    facing: "West Facing",
    floor: "4th Floor",
    parking: "Car + 2-Wheeler",
    furnishing: "Fully Furnished",
    description:
      "Premium fully furnished 3BHK in one of Sector 12's best societies. Comes with ACs in all rooms, a modular kitchen with chimney, wardrobes, and a spacious living area. Walking distance to schools and grocery stores. Ideal for a large family or senior couple.",
    amenities: [
      "Lift",
      "CCTV Security",
      "Swimming Pool",
      "Children's Play Area",
      "Power Backup",
      "Covered Parking",
    ],
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&q=80",
    ],
    badge: "New",
    whatsappMessage:
      "Hi, I'm interested in the 3BHK Apartment in Sector 12, Gandhinagar (₹18,500/month). Please share more details.",
  },
  {
    id: "rent-2bhk-rowhouse-kudasan",
    category: "rent",
    type: "2BHK Row House",
    title: "2BHK Row House in Kudasan",
    price: "₹14,000/month",
    area: "1,100 sq.ft.",
    location: "Kudasan, Gandhinagar",
    facing: "South Facing",
    floor: "Ground + 1st Floor",
    parking: "Car + 2-Wheeler",
    furnishing: "Unfurnished",
    description:
      "Independent 2BHK row house with private entrance, small front garden area, and direct road access. Two full floors with good ventilation. No shared walls except one side. Perfect for families who want privacy at a reasonable price.",
    amenities: [
      "Private Entrance",
      "Front Garden",
      "Terrace Access",
      "24/7 Water Supply",
      "Near School",
    ],
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&q=80",
    ],
    whatsappMessage:
      "Hi, I'm interested in the 2BHK Row House in Kudasan (₹14,000/month). Please share more details.",
  },

  // ─── FOR SALE ───────────────────────────────────────────────────────────────
  {
    id: "buy-2bhk-kudasan",
    category: "buy",
    type: "2BHK Apartment",
    title: "2BHK Apartment for Sale in Kudasan",
    price: "₹42 Lakh",
    area: "1,000 sq.ft.",
    location: "Kudasan, Gandhinagar",
    facing: "East Facing",
    floor: "2nd Floor",
    parking: "Car Parking",
    furnishing: "Semi-Furnished",
    description:
      "Ready-to-move 2BHK apartment in a well-established Kudasan society. Clean title, no pending dues. Comes with modular kitchen fittings and wardrobes. The society is well-maintained with regular AMC for lifts and common areas. Loan eligible.",
    amenities: [
      "Lift",
      "24/7 Security",
      "Covered Parking",
      "Vastu Compliant",
      "Loan Eligible",
      "Ready to Move",
    ],
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
    ],
    badge: "Popular",
    whatsappMessage:
      "Hi, I'm interested in the 2BHK Apartment for sale in Kudasan (₹42 Lakh). Please share more details.",
  },
  {
    id: "buy-3bhk-sector7",
    category: "buy",
    type: "3BHK Apartment",
    title: "3BHK Apartment for Sale in Sector 7",
    price: "₹68 Lakh",
    area: "1,450 sq.ft.",
    location: "Sector 7, Gandhinagar",
    facing: "North Facing",
    floor: "5th Floor",
    parking: "Car + 2-Wheeler",
    furnishing: "Semi-Furnished",
    description:
      "Spacious 3BHK in one of Sector 7's premium societies with a great view from the 5th floor. Master bedroom has an attached balcony. Society has modern amenities including gym and clubhouse. Clear RERA registration, all documents in order.",
    amenities: [
      "RERA Registered",
      "Gym & Clubhouse",
      "Lift",
      "CCTV",
      "Covered Parking",
      "Near GIFT City",
    ],
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&q=80",
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e97?w=800&q=80",
    ],
    badge: "New",
    whatsappMessage:
      "Hi, I'm interested in the 3BHK Apartment for sale in Sector 7, Gandhinagar (₹68 Lakh). Please share more details.",
  },
  {
    id: "buy-2bhk-rowhouse-kudasan",
    category: "buy",
    type: "2BHK Row House",
    title: "2BHK Row House for Sale in Kudasan",
    price: "₹55 Lakh",
    area: "1,200 sq.ft.",
    location: "Kudasan, Gandhinagar",
    facing: "East Facing",
    floor: "Ground + 1st Floor",
    parking: "Car + 2-Wheeler",
    furnishing: "Unfurnished",
    description:
      "Well-built independent row house with its own entrance and small garden. The ground floor has hall, kitchen, and a guest room. First floor has two bedrooms with a shared balcony. No floor charges, no maintenance society. All original documents available.",
    amenities: [
      "Private Entrance",
      "Garden Area",
      "Terrace",
      "No Society Charges",
      "Original Documents",
      "Loan Eligible",
    ],
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&q=80",
    ],
    whatsappMessage:
      "Hi, I'm interested in the 2BHK Row House for sale in Kudasan (₹55 Lakh). Please share more details.",
  },
  {
    id: "buy-plot-kudasan",
    category: "buy",
    type: "Residential Plot",
    title: "Residential Plot in Kudasan",
    price: "₹28 Lakh",
    area: "1,200 sq.ft.",
    location: "Kudasan, Gandhinagar",
    facing: "East Facing",
    floor: "NA",
    parking: "NA",
    furnishing: "NA",
    description:
      "Clean NA plot in a residential zone of Kudasan with road access on two sides. Suitable for building a bungalow or row house. No encumbrances, clear title, all survey documents available. Municipal water and electricity connections available at the boundary.",
    amenities: [
      "NA Plot",
      "Road Access on 2 Sides",
      "Clear Title",
      "Survey Docs Available",
      "Electricity at Boundary",
      "Water Supply Nearby",
    ],
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
      "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=800&q=80",
      "https://images.unsplash.com/photo-1464146072230-91cabc968266?w=800&q=80",
    ],
    badge: "New",
    whatsappMessage:
      "Hi, I'm interested in the Residential Plot in Kudasan (₹28 Lakh). Please share more details.",
  },

  // ─── COMMERCIAL ─────────────────────────────────────────────────────────────
  {
    id: "commercial-shop-main-road",
    category: "commercial",
    type: "Shop",
    title: "Shop on Main Road, Kudasan",
    price: "₹18,000/month",
    area: "350 sq.ft.",
    location: "Main Road, Kudasan, Gandhinagar",
    facing: "Main Road Facing",
    floor: "Ground Floor",
    parking: "2-Wheeler Parking",
    furnishing: "Unfurnished",
    description:
      "High-footfall ground floor shop on Kudasan's main road with excellent visibility. The unit has a wide glass front, good ceiling height, and a separate back entry. Suitable for retail, salon, medical store, or small restaurant. High foot traffic from residential areas.",
    amenities: [
      "Main Road Visibility",
      "Wide Glass Front",
      "Back Entry",
      "High Foot Traffic",
      "Power Load Available",
    ],
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
      "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=800&q=80",
    ],
    badge: "Commercial",
    whatsappMessage:
      "Hi, I'm interested in the Shop on Main Road, Kudasan (₹18,000/month). Please share more details.",
  },
  {
    id: "commercial-office-kudasan",
    category: "commercial",
    type: "Office Space",
    title: "Office Space in Kudasan",
    price: "₹22,000/month",
    area: "500 sq.ft.",
    location: "Kudasan, Gandhinagar",
    facing: "East Facing",
    floor: "2nd Floor",
    parking: "Car + 2-Wheeler",
    furnishing: "Semi-Furnished",
    description:
      "Professional office space in a commercial building near Kudasan circle. The space has been freshly painted, has two cabins, a reception area, and an attached washroom. High-speed internet infrastructure in place. Suitable for small IT firms, consultants, or startups.",
    amenities: [
      "2 Private Cabins",
      "Reception Area",
      "Attached Washroom",
      "Lift in Building",
      "Backup Power",
      "Internet Ready",
    ],
    images: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e23?w=800&q=80",
    ],
    badge: "Commercial",
    whatsappMessage:
      "Hi, I'm interested in the Office Space in Kudasan (₹22,000/month). Please share more details.",
  },
  {
    id: "commercial-shop-sale-kudasan",
    category: "commercial",
    type: "Shop for Sale",
    title: "Commercial Shop for Sale in Kudasan",
    price: "₹35 Lakh",
    area: "280 sq.ft.",
    location: "Kudasan, Gandhinagar",
    facing: "Main Road Facing",
    floor: "Ground Floor",
    parking: "2-Wheeler Parking",
    furnishing: "Unfurnished",
    description:
      "Investment-grade ground floor commercial shop in a well-occupied commercial complex in Kudasan. Currently rented out at ₹12,000/month, offering immediate rental return. Documents clean, no disputes. Good option for investors or own business use.",
    amenities: [
      "Ground Floor",
      "Currently Tenanted",
      "Rental Income ₹12,000/month",
      "Clean Title",
      "Good Return on Investment",
    ],
    images: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=800&q=80",
    ],
    badge: "Commercial",
    whatsappMessage:
      "Hi, I'm interested in the Commercial Shop for sale in Kudasan (₹35 Lakh). Please share more details.",
  },
  {
    id: "commercial-showroom-sg-highway",
    category: "commercial",
    type: "Showroom",
    title: "Showroom on SG Highway",
    price: "₹35,000/month",
    area: "800 sq.ft.",
    location: "SG Highway, Gandhinagar",
    facing: "SG Highway Facing",
    floor: "Ground Floor",
    parking: "Car + 2-Wheeler",
    furnishing: "Unfurnished",
    description:
      "Large ground floor showroom on SG Highway with direct highway visibility and a wide 40-ft frontage. High ceiling (14 ft), suitable for automobile showroom, large retail, or display showroom. Massive daily vehicle traffic. Clear terms, straightforward deal.",
    amenities: [
      "Highway Visibility",
      "40ft Wide Frontage",
      "14ft High Ceiling",
      "Massive Traffic Volume",
      "Power Load 30KW",
      "Ample Parking",
    ],
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
      "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=800&q=80",
    ],
    badge: "New",
    whatsappMessage:
      "Hi, I'm interested in the Showroom on SG Highway, Gandhinagar (₹35,000/month). Please share more details.",
  },
];

export const getPropertyById = (id: string): Property | undefined =>
  properties.find((p) => p.id === id);

export const getPropertiesByCategory = (
  category: "all" | "rent" | "buy" | "commercial",
): Property[] =>
  category === "all"
    ? properties
    : properties.filter((p) => p.category === category);
