import icons from "./icons";
import images from "./images";

const chairs = [
  {
    id: "chair1",
    name: "Osmind Armchair",
    price: "$230",
    img: images.chair02,
    details:
      "Light weight Osmind Armchair is famous for it’s comfort and durability, it’s made of unproductive oil palm wood from Indonesia. Water resistant and weather shield formula is applied for longer life.",
    properties: [
      {
        id: "chair1-1",
        name: "24x19x18",
        icon: icons.move,
      },
      {
        id: "chair1-2",
        name: "Palm Tree",
        icon: icons.archive,
      },
      {
        id: "chair1-3",
        name: "Indonesia",
        icon: icons.flag,
      },
      {
        id: "chair1-4",
        name: "5 Years",
        icon: icons.award,
      },
    ],
  },
  {
    id: "chair2",
    name: "Arc Rocking Chair",
    price: "$190",
    img: images.chair01,
    details:
      "Arc Rocking Chair is a stylish and comfortable chair with a modern design. It’s made of unproductive oil palm wood from Indonesia. Water resistant and weather shield formula is applied for longer life.",
    properties: [
      {
        id: "chair2-1",
        name: "24x24x18",
        icon: icons.move,
      },
      {
        id: "chair2-2",
        name: "Oak Wood",
        icon: icons.archive,
      },
      {
        id: "chair2-3",
        name: "Japan",
        icon: icons.flag,
      },
      {
        id: "chair2-4",
        name: "3 Years",
        icon: icons.award,
      },
    ],
  },
];

const categories = [
  {
    id: "category1",
    name: "Chairs",
    icon: icons.chair,
  },
  {
    id: "category2",
    name: "Tables",
    icon: icons.tables,
  },
  {
    id: "category3",
    name: "Lamps",
    icon: icons.lamps,
  },
  {
    id: "category4",
    name: "Shelves",
    icon: icons.shelves,
  },
];

export { chairs, categories };
