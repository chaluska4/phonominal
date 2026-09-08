export type GoogleReview = {
  id: string;
  name: string;
  rating: number;
  text: string;
  source: "Google";
  relativeDate: string;
  localGuide: boolean;
};

/**
 * Verified from PHO•NOM1NAL Google Business Profile on 2026-09-08.
 * Update rating and reviewCount here when the listing changes.
 */
export const googleReviews = {
  rating: 4.6,
  reviewCount: 605,
  lastVerified: "2026-09-08",
  sourceLabel: "Google Reviews",
  reviews: [
    {
      id: "iris-ramos",
      name: "Iris Ramos",
      rating: 5,
      source: "Google",
      relativeDate: "9 months ago",
      localGuide: true,
      text: "This little spot blew me away. I’m a soup girl and so is my oldest son. Went looking for soup for him because he was sick. He wanted pho. I googled and found phonom1nal. Cute little restaurant, spotlessly clean. Young man taking orders was super nice and another was serving tables and cleaning other ones.",
    },
    {
      id: "maria-lopez",
      name: "Maria Lopez",
      rating: 5,
      source: "Google",
      relativeDate: "6 months ago",
      localGuide: true,
      text: "Had a wonderful experience! Their broth is really tasty! They do great servings of meat and overall food! Great service they serve very quickly as well ! But you also don’t feel rushed!",
    },
    {
      id: "martin-rodas",
      name: "Martin Rodas",
      rating: 5,
      source: "Google",
      relativeDate: "2 months ago",
      localGuide: false,
      text: "This place has the best pho I’ve had. I’ve tried pho in many different states and countries and I have to say the flavor is amazing here and very authentic. 10/10. Also customer service is top notch. And the Korean coffee is so good!",
    },
    {
      id: "brandy-williams",
      name: "Brandy Williams",
      rating: 5,
      source: "Google",
      relativeDate: "5 months ago",
      localGuide: false,
      text: "Really great restaurant! The atmosphere was amazing and people are very sweet. The food was so fresh and delicious. Clean and pleasant. I will recommend this restaurant and will be coming again!!! Thank you for an amazing first experience 😊",
    },
    {
      id: "yev-ko",
      name: "Yev Ko",
      rating: 5,
      source: "Google",
      relativeDate: "3 months ago",
      localGuide: true,
      text: "Buss it down som’ BOMB pho! If you’re from Allentown, you need to be here. You woulda hear me slurp this delicious pho a mile away. Broke ya neck when ya heard it. Get the pho, a bahn mi, and a spring roll. Enjoy ya life.",
    },
    {
      id: "c-l-e",
      name: "C. L. E.",
      rating: 5,
      source: "Google",
      relativeDate: "4 months ago",
      localGuide: true,
      text: "Always amazing, this is just one of those must try places in the Valley. The carpaccio is always perfect if you ever want to try an excellent raw beef. Anything else on the menu will be great too!",
    },
    {
      id: "morgan-bower",
      name: "Morgan Bower",
      rating: 5,
      source: "Google",
      relativeDate: "8 months ago",
      localGuide: false,
      text: "Obsessed with this restaurant!!!! My husband and I go every week. The best pho around!! Service is amazing, quick, and always comes out delicious. Cannot recommend enough!",
    },
    {
      id: "estrella",
      name: "Estrella",
      rating: 5,
      source: "Google",
      relativeDate: "1 month ago",
      localGuide: true,
      text: "Me and my friend came here to get some pho and it was delicious, we got pho special and a mango smoothie was so delicious. my only complaint was I had son much noodles hehe but it’s was all good 100% recommended.",
    },
  ] satisfies GoogleReview[],
} as const;
