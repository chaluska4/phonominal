export type MenuBadge = "Popular" | "Vegetarian" | "Spicy";

export type ModifierOption = {
  id: string;
  name: string;
  /** Extra charge in dollars. Omit when the kitchen has not confirmed a price. */
  priceDelta?: number;
};

export type ModifierGroup = {
  id: string;
  name: string;
  required: boolean;
  selection: "single" | "multiple";
  min?: number;
  max?: number;
  options: ModifierOption[];
  /** Preview-only group. Not confirmed restaurant configuration. */
  demo?: boolean;
};

export type MenuItem = {
  id: string;
  name: string;
  vietnamese?: string;
  price: number;
  description: string;
  image?: string;
  alt?: string;
  badges?: MenuBadge[];
  portion?: string;
  layout?: "card" | "row";
  popular?: boolean;
  orderable?: boolean;
  modifierGroups?: ModifierGroup[];
};

export type MenuCategory = {
  id: string;
  label: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "popular",
    label: "Popular",
    items: [
      {
        id: "special-pho",
        name: "Special Pho",
        vietnamese: "Phở Đặc Biệt",
        price: 16,
        description:
          "Eye of round, brisket, beef ball, and tendon over rice noodles with scallions, onion, and cilantro. Bean sprouts, jalapeño, lime, and Thai basil on the side.",
        image: "/images/special-pho.jpg",
        alt: "Bowl of special pho with beef, herbs, and rice noodles",
        badges: ["Popular"],
        popular: true,
      },
      {
        id: "banh-mi",
        name: "Vietnamese Baguette",
        vietnamese: "Bánh Mì",
        price: 8,
        description:
          "Chicken, pork, or beef on a lightly toasted homemade baguette with pâté, pickled daikon and carrot, cucumber, cilantro, and jalapeño. Tofu available without pâté.",
        image: "/images/banh-mi.jpg",
        alt: "Bánh mì sandwich with pickled vegetables on a toasted baguette",
        badges: ["Popular"],
        popular: true,
      },
      {
        id: "beef-carpaccio",
        name: "Beef Carpaccio",
        vietnamese: "Bò Tái Chanh",
        price: 13,
        description:
          "Thinly sliced rare beef cured in lime juice, finished with fried shallots, peanuts, Thai basil, and fish sauce.",
        image: "/images/beef-carpaccio.jpg",
        alt: "Beef carpaccio with herbs, peanuts, and fried shallots",
        badges: ["Popular"],
        popular: true,
      },
      {
        id: "viet-coffee",
        name: "Vietnamese Coffee",
        vietnamese: "Cà Phê Bảo Lộc",
        price: 5,
        description:
          "Coffee sourced from southern Vietnam, served with sweetened condensed milk, hot or iced.",
        image: "/images/vietnamese-coffee.jpg",
        alt: "Vietnamese iced coffee with condensed milk",
        badges: ["Popular"],
        popular: true,
      },
    ],
  },
  {
    id: "appetizers",
    label: "Appetizers",
    items: [
      {
        id: "spring-rolls",
        name: "Spring Rolls",
        vietnamese: "Chả Giò",
        price: 7,
        portion: "3",
        description:
          "Pork, chicken, carrot, onion, and glass noodles, fried in wheat paper and served with fish sauce.",
        image: "/images/spring-rolls.jpg",
        alt: "Crispy fried Vietnamese spring rolls with dipping sauce",
        badges: ["Popular"],
      },
      {
        id: "veg-spring-rolls",
        name: "Vegetarian Spring Rolls",
        vietnamese: "Chả Giò Chay",
        price: 7,
        portion: "3",
        description:
          "Taro, onion, carrot, tofu, jicama, and glass noodles, fried and served with vegetarian dipping sauce.",
        image: "/images/veg-spring-rolls.jpg",
        alt: "Vegetarian fried spring rolls",
        badges: ["Vegetarian"],
      },
      {
        id: "shrimp-spring-rolls",
        name: "Shrimp Spring Rolls",
        vietnamese: "Chả Giò Tôm",
        price: 7,
        portion: "5",
        description:
          "Seasoned shrimp wrapped and fried in wheat paper, served with sweet chili sauce.",
        image: "/images/shrimp-spring-rolls.jpg",
        alt: "Fried shrimp spring rolls with sweet chili sauce",
      },
      {
        id: "summer-rolls",
        name: "Summer Rolls",
        vietnamese: "Gỏi Cuốn",
        price: 6,
        portion: "2",
        description:
          "Pork, shrimp, rice noodles, lettuce, carrot, cilantro, and Thai basil in rice paper, with peanut sauce.",
        image: "/images/summer-rolls.jpg",
        alt: "Fresh summer rolls with shrimp and herbs",
        badges: ["Popular"],
      },
      {
        id: "shrimp-surimi",
        name: "Shrimp Surimi",
        vietnamese: "Chạo Tôm",
        price: 7,
        portion: "4",
        description:
          "Minced shrimp and pork, fried in rice paper and served with sweet chili sauce.",
        image: "/images/shrimp-surimi.jpg",
        alt: "Fried shrimp surimi rolls",
      },
      {
        id: "fried-tofu",
        name: "Fried Tofu",
        vietnamese: "Đậu Hũ Chiên",
        price: 6,
        portion: "8",
        description: "Crisp fried tofu with sweet chili sauce.",
        image: "/images/fried-tofu.jpg",
        alt: "Plate of fried tofu with chili sauce",
        badges: ["Vegetarian"],
      },
      {
        id: "chicken-wings",
        name: "Chicken Wings",
        vietnamese: "Cánh Gà Chiên Nước Mắm",
        price: 10,
        portion: "6",
        description: "Fried wings tossed in fish sauce.",
        image: "/images/chicken-wings.jpg",
        alt: "Fish-sauce tossed fried chicken wings",
      },
      {
        id: "beef-carpaccio-app",
        name: "Beef Carpaccio",
        vietnamese: "Bò Tái Chanh",
        price: 13,
        description:
          "Thinly sliced rare beef cured in lime juice, topped with fried shallots, peanuts, Thai basil, and fish sauce.",
        image: "/images/beef-carpaccio.jpg",
        alt: "Beef carpaccio with lime, basil, and peanuts",
        badges: ["Popular"],
      },
    ],
  },
  {
    id: "pho",
    label: "Pho",
    items: [
      {
        id: "pho",
        name: "Pho Noodle Soup",
        vietnamese: "Phở",
        price: 14,
        description:
          "Choose eye of round, brisket, beef ball, chicken, or shrimp. Rice noodles, scallion, onion, and cilantro, with bean sprouts, jalapeño, lime, and Thai basil.",
        image: "/images/pho.jpg",
        alt: "Bowl of pho noodle soup with herbs",
      },
      {
        id: "special-pho-entree",
        name: "Special Pho",
        vietnamese: "Phở Đặc Biệt",
        price: 16,
        description:
          "Eye of round, brisket, beef ball, and tendon with rice noodles, scallion, onion, and cilantro. Herbs and lime on the side.",
        image: "/images/special-pho.jpg",
        alt: "Special pho with mixed beef cuts",
        badges: ["Popular"],
      },
      {
        id: "veg-pho",
        name: "Vegetarian Pho",
        vietnamese: "Phở Chay",
        price: 14,
        description:
          "Tofu, carrot, broccoli, and napa cabbage in homemade vegetarian broth, with fried shallots, herbs, and the usual pho sides.",
        image: "/images/veg-pho.jpg",
        alt: "Vegetarian pho with tofu and vegetables",
        badges: ["Vegetarian"],
      },
      {
        id: "bo-kho",
        name: "Vietnamese Beef Stew",
        vietnamese: "Bò Kho",
        price: 16,
        description:
          "Pot-roasted beef and tendon with carrot, lemongrass, star anise, cinnamon, and tomato. Served with a French baguette or as a pho bowl.",
        image: "/images/bo-kho.jpg",
        alt: "Vietnamese beef stew with carrots",
      },
    ],
  },
  {
    id: "vermicelli",
    label: "Vermicelli",
    items: [
      {
        id: "vermicelli",
        name: "Vermicelli Bowl",
        vietnamese: "Bún Thịt Nướng",
        price: 14,
        description:
          "Choose grilled chicken, pork, beef, or shrimp over rice noodles with lettuce, cucumber, a spring roll, peanuts, fried shallots, and herbs. Fish sauce on the side.",
        image: "/images/vermicelli.jpg",
        alt: "Vermicelli bowl with grilled meat and herbs",
      },
      {
        id: "vermicelli-special",
        name: "Vermicelli Bowl Special",
        vietnamese: "Bún Đặc Biệt",
        price: 16,
        description:
          "Grilled pork and shrimp with rice noodles, lettuce, cucumber, spring roll, peanuts, fried shallots, and herbs. Fish sauce on the side.",
        image: "/images/vermicelli-special.jpg",
        alt: "Special vermicelli bowl with grilled pork and shrimp",
        badges: ["Popular"],
      },
      {
        id: "veg-vermicelli",
        name: "Vegetarian Vermicelli Bowl",
        vietnamese: "Bún Chay",
        price: 13,
        description:
          "Fried tofu with rice noodles, lettuce, cucumber, a vegetarian spring roll, peanuts, fried shallots, and herbs. Vegetarian sauce on the side.",
        image: "/images/veg-vermicelli.jpg",
        alt: "Vegetarian vermicelli bowl with fried tofu",
        badges: ["Vegetarian"],
      },
    ],
  },
  {
    id: "rice",
    label: "Rice",
    items: [
      {
        id: "fried-rice",
        name: "Fried Rice",
        vietnamese: "Cơm Chiên",
        price: 14,
        description:
          "Chicken, pork, beef, or shrimp with rice, egg, onion, carrot, and peas. Vegetarian fried rice with tofu and vegetables is $12.",
        image: "/images/fried-rice.jpg",
        alt: "Plate of Vietnamese fried rice",
      },
      {
        id: "grilled-rice",
        name: "Grilled Meat Over Rice",
        vietnamese: "Cơm Thịt Nướng",
        price: 15,
        description:
          "Pork, beef, chicken, shrimp, or tofu with jasmine rice, cucumber, tomato, fried shallots, peanuts, a fried egg, and fish sauce.",
        image: "/images/grilled-rice.jpg",
        alt: "Grilled meat over jasmine rice with a fried egg",
      },
    ],
  },
  {
    id: "banh-mi",
    label: "Bánh Mì",
    items: [
      {
        id: "banh-mi-menu",
        name: "Vietnamese Baguette",
        vietnamese: "Bánh Mì",
        price: 8,
        description:
          "Chicken, pork, or beef on a lightly toasted homemade baguette with pâté, pickled daikon and carrot, cucumber, cilantro, and jalapeño. Vegetarian tofu available without pâté.",
        image: "/images/banh-mi.jpg",
        alt: "Vietnamese bánh mì baguette sandwich",
        badges: ["Popular"],
      },
      {
        id: "banh-mi-special",
        name: "Special Vietnamese Baguette",
        vietnamese: "Bánh Mì Đặc Biệt",
        price: 9,
        description:
          "Vietnamese cold cuts on a lightly toasted homemade baguette with pâté, pickled daikon and carrot, cucumber, cilantro, and jalapeño.",
        image: "/images/banh-mi-special.jpg",
        alt: "Special bánh mì with Vietnamese cold cuts",
      },
    ],
  },
  {
    id: "beverages",
    label: "Beverages",
    items: [
      {
        id: "viet-coffee-menu",
        name: "Vietnamese Coffee",
        vietnamese: "Cà Phê Bảo Lộc",
        price: 5,
        description:
          "Southern Vietnamese coffee with sweetened condensed milk, served hot or iced.",
        image: "/images/vietnamese-coffee.jpg",
        alt: "Glass of Vietnamese coffee with condensed milk",
        badges: ["Popular"],
      },
      {
        id: "thai-tea",
        name: "Thai Tea",
        vietnamese: "Trà Thái",
        price: 5,
        description: "Thai tea shaken with cream and ice.",
        image: "/images/thai-tea.jpg",
        alt: "Iced Thai tea with cream",
      },
      {
        id: "bubble-tea",
        name: "Bubble Tea",
        vietnamese: "Trà Sữa Trân Châu",
        price: 5,
        description: "Black milk tea with tapioca pearls. Also available with Thai tea.",
        layout: "row",
      },
      {
        id: "green-tea",
        name: "Green Tea",
        vietnamese: "Trà Thái Nguyên",
        price: 3,
        description: "Organic green tea from Vietnam, served hot.",
        layout: "row",
      },
      {
        id: "soda",
        name: "Soda & Bottled Drinks",
        price: 2,
        description:
          "Coke, Diet Coke, Orange Fanta, Minute Maid lemonade, Fuze raspberry iced tea, or bottled water.",
        layout: "row",
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    items: [
      {
        id: "smoothies",
        name: "Smoothies",
        price: 5,
        description: "Strawberry, mango, or avocado.",
        image: "/images/smoothies.jpg",
        alt: "Fresh fruit smoothie",
      },
    ],
  },
];

export const featuredDishes: MenuItem[] = [
  menuCategories[0].items[0],
  menuCategories[0].items[1],
  menuCategories[0].items[2],
  menuCategories[0].items[3],
];

export const formatPrice = (price: number) => `$${price}`;
