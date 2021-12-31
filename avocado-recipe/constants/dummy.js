import images from "./images";

const recipes = [
  {
    id: "r-1",
    name: "Avocado Toast with Smoked Salmon",
    rating: 4.8,
    people: 120,
    time: 30,
    image: images.recipe01,
    steps: [
      "1 slice of whole-wheat toast",
      "3 slices smoked salmon",
      "1/2 avocado",
      "1/8 teaspoon salt",
      "1/8 teaspoon pepper",
    ],
    preparation: [
      "Thinly slice half of an avovado. Keep slices together and start molding them into a line.",
      "Start folding one end inside and wrapping other end around in a towel.",
      "Spread the smoked salmon on the avocado slices and top with the remaining slices of avovado.",
      "Serve with a side of salad and a side of sour cream.",
      "Enjoy!",
    ],
  },
  {
    id: "r-2",
    name: "Citrus Sandwich with Avocado",
    rating: 4.8,
    people: 100,
    time: 30,
    image: images.recipe03,
    steps: [
      "1 slice of whole-wheat toast",
      "3 slices smoked salmon",
      "1/2 avocado",
      "1/8 teaspoon salt",
      "1/8 teaspoon pepper",
    ],
    preparation: [
      "Thinly slice half of an avovado. Keep slices together and start molding them into a line.",
      "Start folding one end inside and wrapping other end around in a towel.",
      "Spread the smoked salmon on the avocado slices and top with the remaining slices of avovado.",
      "Serve with a side of salad and a side of sour cream.",
      "Enjoy!",
    ],
  },
];

const breakfast = [
  {
    id: "b-1",
    name: "Keto Avocado Sandwich",
    image: images.recipe02,
  },
  {
    id: "b-2",
    name: "Avocado Egg toast",
    image: images.recipe04,
  },
  {
    id: "b-3",
    name: "Kiwi Avocado Salsa",
    image: images.recipe05,
  },
];

export default {
  recipes,
  breakfast,
};
