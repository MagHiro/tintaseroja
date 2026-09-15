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
    id: "wildflower", title: "Wildflower", category: "Botanical",
    description: "A small bouquet, gathered in fine black lines.",
    image: "/images/IMG_20260529_214923.jpg",
    alt: "Fine-line bouquet tattoo on an inner wrist", orientation: "portrait", note: "01",
  },
  {
    id: "sun-and-moon", title: "Sun & Moon", category: "Celestial",
    description: "A sun and a crescent moon, one on each wrist.",
    image: "/images/IMG_20260529_210634.jpg",
    alt: "Two wrists with complementary sun and crescent moon tattoos", orientation: "portrait", note: "02",
  },
  {
    id: "little-companion", title: "Little Companion", category: "Illustrative",
    description: "A playful little character surrounded by tiny sparkles.",
    image: "/images/IMG_20260529_155645.jpg",
    alt: "Small cartoon bunny tattoo with stars on an inner wrist", orientation: "portrait", note: "03",
  },
  {
    id: "moonlit", title: "Moonlit", category: "Celestial",
    description: "A crescent moon and a trail of stars along the forearm.",
    image: "/images/IMG_20260530_125545.jpg",
    alt: "Crescent moon and star tattoos arranged along an inner forearm", orientation: "portrait", note: "04",
  },
  {
    id: "celestial-trio", title: "Celestial Trio", category: "Fine line",
    description: "Three small celestial symbols, held together in a simple line.",
    image: "/images/IMG_20260530_163159.jpg",
    alt: "Sun, star, and crescent moon tattoos below the collarbone", orientation: "portrait", note: "05",
  },
  {
    id: "wild-hands", title: "Wild Hands", category: "Botanical",
    description: "Delicate botanical lines that follow the hands and fingers.",
    image: "/images/IMG_20260531_185930.jpg",
    alt: "Fine botanical tattoos across two hands and fingers", orientation: "portrait", note: "06",
  },
  {
    id: "in-bloom", title: "In Bloom", category: "Floral",
    description: "An airy floral composition stretching across the hand.",
    image: "/images/IMG_20260530_170948.jpg",
    alt: "Fine-line floral tattoo across the back of a hand", orientation: "landscape", note: "07",
  },
  {
    id: "small-gestures", title: "Small Gestures", category: "Illustrative",
    description: "An expressive composition of hands and small botanical details.",
    image: "/images/IMG_20260530_210639.jpg",
    alt: "Illustrative black line tattoo of hands and botanical details on an arm", orientation: "portrait", note: "08",
  },
  {
    id: "unfold", title: "Unfold", category: "Ornamental",
    description: "A winged figure framed by ornamental details along the spine.",
    image: "/images/IMG_20260531_163401.jpg",
    alt: "Large winged ornamental tattoo down the center of a back", orientation: "portrait", note: "09",
  },
  {
    id: "words-to-keep", title: "Words to Keep", category: "Lettering",
    description: "A small reminder in words: feel, heal, live; explore, love, change.",
    image: "/images/IMG_20260531_200749.jpg",
    alt: "Small black lettering tattoo on an inner arm", orientation: "portrait", note: "10",
  },
];
