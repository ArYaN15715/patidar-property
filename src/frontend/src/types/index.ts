export interface Property {
  id: string;
  category: "rent" | "buy" | "commercial";
  type: string;
  title: string;
  price: string;
  area: string;
  location: string;
  facing: string;
  floor: string;
  parking: string;
  furnishing: string;
  description: string;
  amenities: string[];
  images: string[];
  badge?: string;
  whatsappMessage: string;
}

export type PropertyCategory = "all" | "rent" | "buy" | "commercial";

export interface NavLink {
  label: string;
  href: string;
}
