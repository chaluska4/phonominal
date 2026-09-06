export type GalleryImage = {
  src: string;
  alt: string;
};

export const galleryImages: GalleryImage[] = [
  { src: "/images/special-pho.jpg", alt: "Special pho with mixed beef and fresh herbs" },
  { src: "/images/pho.jpg", alt: "Pho noodle soup with herbs" },
  { src: "/images/banh-mi.jpg", alt: "Bánh mì on a toasted baguette" },
  { src: "/images/banh-mi-special.jpg", alt: "Special bánh mì with Vietnamese cold cuts" },
  { src: "/images/vermicelli-special.jpg", alt: "Vermicelli bowl with grilled pork and shrimp" },
  { src: "/images/vermicelli.jpg", alt: "Vermicelli bowl with grilled meat" },
  { src: "/images/grilled-rice.jpg", alt: "Grilled meat over jasmine rice" },
  { src: "/images/fried-rice.jpg", alt: "Vietnamese fried rice" },
  { src: "/images/summer-rolls.jpg", alt: "Fresh summer rolls with shrimp" },
  { src: "/images/spring-rolls.jpg", alt: "Crispy fried spring rolls" },
  { src: "/images/beef-carpaccio.jpg", alt: "Beef carpaccio with lime and basil" },
  { src: "/images/chicken-wings.jpg", alt: "Fish-sauce chicken wings" },
  { src: "/images/vietnamese-coffee.jpg", alt: "Vietnamese iced coffee" },
  { src: "/images/thai-tea.jpg", alt: "Iced Thai tea" },
  { src: "/images/smoothies.jpg", alt: "Fresh fruit smoothie" },
  { src: "/images/bo-kho.jpg", alt: "Vietnamese beef stew" },
];

export const galleryPreview = galleryImages.slice(0, 4);
