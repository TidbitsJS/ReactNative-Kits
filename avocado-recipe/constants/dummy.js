import images from "./images";

const recipes = [
  {
    id: "r-1",
    name: "Avocado Toast with Smoked Salmon",
    rating: 4.8,
    people: 120,
    time: 30,
    image: images.recipe01,
  },
  {
    id: "r-2",
    name: "Citrus Sandwich with Avocado",
    rating: 4.8,
    people: 100,
    time: 30,
    image: images.recipe03,
  },
];

const breakfast = [
  {
    id: "b-1",
    name: "Keto Avocado Sandwich",
    image: images.recipe03,
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
