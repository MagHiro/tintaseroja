export type Tattoo = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  alt: string;
  orientation: "portrait" | "landscape" | "square";
  note: string;
};

export const tattoos: Tattoo[] = [
  {
    id: "blue-hour",
    title: "Blue Hour",
    category: "Botanical",
    description: "A blue botanical sprig with rust accents.",
    image: "/images/blue-hour.svg",
    alt: "Blue botanical tattoo illustration with rust accents",
    orientation: "portrait",
    note: "01 / stay awhile",
  },
  {
    id: "soft-power",
    title: "Soft Power",
    category: "Floral",
    description: "A blue flowering stem with fine line details.",
    image: "/images/soft-power.svg",
    alt: "Blue floral tattoo illustration on a pale paper background",
    orientation: "landscape",
    note: "02 / take up space",
  },
  {
    id: "quiet-eye",
    title: "Quiet Eye",
    category: "Symbols",
    description: "An eye and star design with a warm red accent.",
    image: "/images/quiet-eye.svg",
    alt: "Blue eye and star tattoo illustration with a warm red detail",
    orientation: "portrait",
    note: "03 / look closer",
  },
  {
    id: "sunday-bloom",
    title: "Sunday Bloom",
    category: "Floral",
    description: "A floral illustration in blue and terracotta.",
    image: "/images/sunday-bloom.svg",
    alt: "Blue and terracotta botanical tattoo illustration",
    orientation: "landscape",
    note: "04 / no rush",
  },
  {
    id: "soft-ritual",
    title: "Soft Ritual",
    category: "Ornamental",
    description: "An ornamental floral design with winding blue stems and red leaves.",
    image: "/images/soft-ritual.svg",
    alt: "Blue ornamental floral tattoo illustration with red leaves",
    orientation: "portrait",
    note: "05 / repeat gently",
  },
  {
    id: "little-constellation",
    title: "Little Constellation",
    category: "Experimental",
    description: "An abstract constellation of blue lines and red points.",
    image: "/images/little-constellation.svg",
    alt: "Blue abstract constellation tattoo illustration with red points",
    orientation: "landscape",
    note: "06 / find your way",
  },
];
