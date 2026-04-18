/**
 * Simulates a delay representing an asynchronous database or API retrieval.
 * Returns the store portfolio.
 * 
 * @async
 * @returns {Promise<Array<{id: string, name: string, category: string, price: string, image: string}>>} Resolved array of cake schemas.
 */
export async function getCakes() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return [
    { id: "1", name: "Dark Chocolate Fudge", category: "Birthday", price: "$45", image: "/images/cake_bd.png" },
    { id: "2", name: "Artisan Chocolate Truffles", category: "Wedding", price: "$24", image: "/images/cake_truffle.png" },
    { id: "3", name: "Marble Cheesecake", category: "Theme", price: "$38", image: "/images/cake_cheesecake.png" },
    { id: "4", name: "Classic Vanilla Velvet", category: "Wedding", price: "$65", image: "/images/cake_truffle.png" }, 
    { id: "5", name: "Midnight Espresso", category: "Theme", price: "$55", image: "/images/cake_bd.png" },
  ];
}

/**
 * Retrieves menu data mapping arrays of structural items cleanly formatted.
 * Emulates parsing results for direct front-end consumption.
 * 
 * @async
 * @returns {Promise<{Pastries: Array<{name: string, price: string}>, Beverages: Array<{name: string, price: string}>}>} Record mapping containing sorted foods.
 */
export async function getMenu() {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return {
    Pastries: [
      { name: "Butter Croissant", price: "$4.50" },
      { name: "Pain au Chocolat", price: "$5.00" },
      { name: "Almond Danise", price: "$5.50" },
    ],
    Beverages: [
      { name: "Artisan Espresso", price: "$3.50" },
      { name: "Mocha Latte", price: "$5.50" },
      { name: "Hot Chocolate", price: "$6.00" },
    ],
  };
}
