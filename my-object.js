// let food = ["Pizza", "MalaTang", "Pad Thai", "Burger", "Sushi", "Medovik"];
// best practice is one object same format

/* let foodDatabase = [
    { name: "Pizza", 
        size: [
            {name: "small", price: "99"},
            {name: "large", price: "199"},
        ],
    },
    { name: "MalaTang", small: 99, large: 199},
    { name: "Pad Thai", price: 100, ingredient: ["Pork", "Beef"]},
    { name: "Burger", price: 150},
    { name: "Sushi", price: 200},
    { name: "Medovik", price: 350}
]; */

let foodDatabase = [
  {
    id: 1,
    name: "Cheese Pizza",
    size: [
      { name: "small", price: "99" },
      { name: "medium", price: "149" },
      { name: "large", price: "199" },
    ],
    cusine: "Italian",
    origin: "Italy",
    vegetarian: false,
    ingredients: ["Cheese", "Tomato", "Basil"],
  },
  {
    id: 2,
    name: "MalaTang",
    size: [
      { name: "small", price: "99" },
      { name: "medium", price: "149" },
      { name: "large", price: "199" },
    ],
    cusine: "China",
    origin: "China",
    vegetarian: false,
    ingredients: ["Soy Sauce", "Chili Oil", "Garlic"],
  },
  {
    id: 3,
    name: "Pad Thai",
    size: [
      { name: "small", price: "99" },
      { name: "medium", price: "149" },
      { name: "large", price: "199" },
    ],
    cusine: "Thai",
    origin: "Thai",
    vegetarian: false,
    ingredients: ["Tofu", "Peanuts", "Lime"],
  },
  {
    id: 4,
    name: "Pork Burger",
    size: [
      { name: "small", price: "159" },
      { name: "medium", price: "209" },
      { name: "large", price: "259" },
    ],
    cusine: "American",
    origin: "American",
    vegetarian: false,
    ingredients: ["Beef", "Bun", "Lettuce"],
  },
  {
    id: 5,
    name: "Sushi",
    size: [
      { name: "small", price: "199" },
      { name: "medium", price: "249" },
      { name: "large", price: "299" },
    ],
    cusine: "Japanese",
    origin: "Japan",
    vegetarian: false,
    ingredients: ["Rice", "Fish", "Seaweed"],
  },
  {
    id: 6,
    name: "Basque Burnt Cheesecake ",
    size: [
      { name: "small", price: "129" },
      { name: "medium", price: "179" },
      { name: "large", price: "229" },
    ],
    cusine: "Italian",
    origin: "Italian",
    vegetarian: false,
    ingredients: ["Cheese", "Sugar", "Eggs"],
  },
  {
    id: 7,
    name: "Vegan Salad",
    size: [
      { name: "small", price: "89" },
      { name: "medium", price: "139" },
      { name: "large", price: "189" },
    ],
    cusine: "Vegetarian",
    origin: "Global",
    vegetarian: true,
    ingredients: ["Lettuce", "Tomato", "Cucumber"],
  },
  {
    id: 8,
    name: "Strawberry Smoothie",
    size: [
      { name: "small", price: "159" },
      { name: "medium", price: "209" },
      { name: "large", price: "259" },
    ],
    cusine: "Healthy",
    origin: "Global",
    vegetarian: true,
    ingredients: ["Strawberry", "Yogurt", "Milk"],
  },
  {
    id: 9,
    name: "Uji Matcha Latte",
    size: [
      { name: "small", price: "95" },
      { name: "large", price: "149" },
    ],
    cusine: "Japanese",
    origin: "Japan",
    vegetarian: true,
    ingredients: ["Uji Matcha", "Milk", "Sugar"],
  },
];
