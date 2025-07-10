console.log("module type:", import.meta.url);
import { createMoods } from "./queries/mood.js";
import client from "./client.js";
import { createUser } from "./queries/users.js";
import { createPlaylists } from "./queries/playlists.js";
import { getAllRecipes } from "./queries/recipes.js";


await client.connect();
await seed();
await client.end();
console.log("✅ Database seeded successfully!");

async function seed() {

  await createMoods("happy", "delighted, pleased, joyful, cheerful");
  await createMoods("sad", "depressed, upset, melancholy, sorrowful");
  await createMoods("angry", "furious, irritable, mad, enraged");
  await createMoods("romantic", "enchanting, alluring, marvellous, glamourous, magical");

  await createUser("SadSkittles", "yumyum123");
  await createUser("CrazyChocolate", "cocoalove");

  await createPlaylists(1, 'https://on.soundcloud.com/dG6apEx3q5KgCHvlXF');
  await createPlaylists(2, 'https://on.soundcloud.com/luYt8S5GdwIEIRMhU1');
  await createPlaylists(3, 'https://soundcloud.com/josh-klpa/sets/angry-angry-metal-metal-rock');
  await createPlaylists(4, 'https://soundcloud.com/andrea-torrisi-213265059/sets/love-songs-2023-english-love');

  
  await getAllRecipes(
      "Happy Pancakes",
      1,
      "Fluffy pancakes with syrup to brighten your day!",
      ["Flour", "Eggs", "Milk", "Sugar"],
      "Mix all and fry in pan.");

    await getAllRecipes(
      "Comfort Mac & Cheese",
     2,
       "Warm mac & cheese to soothe your soul.",
      ["Pasta", "Cheese", "Milk"],
      "Boil pasta, add cheese and milk, stir."  
    );

     await getAllRecipes(
      "Spicy Anger Tacos",
      3,
      "Let out the fire with these spicy tacos.",
      ["Tortillas", "Hot sauce", "Chicken"],
      "Cook chicken, assemble in tortilla, add hot sauce." 
     );

     await getAllRecipes(
    "Romantic Chocolate Fondue",
    4,
    "Perfect for a romantic night.",
    ["Chocolate", "Strawberries"],
    "Melt chocolate, dip fruits." 
     );

    await getAllRecipes(
     "Sunshine Smoothie",
      1,
      "A tropical blend to energize your morning.",
      ["Banana", "Pineapple", "Orange juice", "Yogurt"],
      "Blend all ingredients until smooth."   
    );
      
    await getAllRecipes(
    "Joyful Fruit Salad",
    1,
    "A colorful mix of your favorite fruits.",
    ["Strawberries", "Blueberries", "Kiwi", "Honey"],
    "Chop and mix fruits, drizzle with honey."
    );
      
    await getAllRecipes(
    "Cheesy Omelet Delight",
    1,
    "Light and cheesy, great start to a happy day.",
    ["Eggs", "Cheese", "Peppers", "Salt"],
    "Beat eggs, pour into pan, add cheese and veggies."
    );
      
    await getAllRecipes(
    "Rainbow Veggie Wraps",
    1,
    "Crunchy veggies in a colorful wrap.",
    ["Tortilla", "Lettuce", "Carrots", "Hummus"],
    "Spread hummus, fill with veggies, and roll up."  
    )
      
    await getAllRecipes(
    "Lemon Zest Muffins",
    1,
    "Light, fluffy muffins with a citrus zing!",
    ["Flour", "Eggs", "Lemon zest", "Sugar"],
    "Mix, pour into muffin tins, and bake."   
    );
      
    await getAllRecipes(
    "Cozy Chicken Soup",
    2,
    "Classic warm soup to hug you from the inside.",
    ["Chicken", "Carrots", "Celery", "Broth"],
    "Boil ingredients and simmer until soft."   
    );
      
    await getAllRecipes(
    "Sad Day Sundae",
    2,
    "Ice cream, chocolate, and comfort in a bowl.",
    ["Ice cream", "Chocolate syrup", "Whipped cream"],
    "Scoop ice cream, drizzle syrup, top with cream."  
    );
    
    await getAllRecipes(
    "Peanut Butter Toasties",
    2,
    "A simple favorite when you need something fast.",
    ["Bread", "Peanut butter", "Banana slices"],
    "Toast bread, spread PB, top with banana."   
    );
      
    await getAllRecipes(
    "Melty Grilled Cheese",
    2,
    "Golden crispy bread with melted cheese inside.",
    ["Bread", "Cheese", "Butter"],
    "Butter bread, grill with cheese inside."    
    );
      
    await getAllRecipes(
    "Cinnamon Oat Bowl",
    2,
    "Warm, soft oats with a cozy touch of cinnamon.",
    ["Oats", "Milk", "Cinnamon", "Honey"],
    "Cook oats in milk, stir in cinnamon and honey."   
    );
      
    await getAllRecipes(
    "Chili Inferno",
    3,
    "A bold, spicy chili to match your mood.",
    ["Ground beef", "Beans", "Chili powder", "Tomato"],
    "Cook beef, add ingredients, simmer for 30 minutes."    
    );
     
    await getAllRecipes(
    "Firecracker Wings",
    3,
    "Hot wings with an explosive kick!",
    ["Chicken wings", "Hot sauce", "Butter", "Garlic"],
    "Bake wings, toss in spicy garlic sauce."   
    );
      
    await getAllRecipes(
    "Sriracha Noodles",
    3,
    "Noodles tossed in a fiery Sriracha glaze.",
    ["Noodles", "Sriracha", "Soy sauce", "Sesame oil"],
    "Cook noodles, stir-fry with sauces."
    );
      
    
    await getAllRecipes(
    "Volcano Burger",
    3,
    "A loaded burger with spicy jalapeños and sauce.",
    ["Beef patty", "Bun", "Jalapeños", "Hot sauce"],
    "Grill patty, assemble with toppings."
    );
      
    
    await getAllRecipes(
    "Spicy Stir-Fry Blast",
    3,
    "Stir-fried veggies and meat in a fiery blend.",
    ["Bell peppers", "Onion", "Chicken", "Chili flakes"],
     "Stir-fry all ingredients on high heat."    
    );


    await getAllRecipes(
    "Heart-Shaped Pizzas",
    4,
    "Mini pizzas made with love.",
    ["Pizza dough", "Tomato sauce", "Cheese", "Pepperoni"],
    "Shape dough, add toppings, bake until golden."
    );
      
   
    await getAllRecipes(
    "Creamy Garlic Pasta",
    4,
    "Smooth and elegant dinner for two.",
    ["Pasta", "Cream", "Garlic", "Parmesan"],
    "Cook pasta, stir into garlic cream sauce."   
    );
   
    await getAllRecipes(
    "Strawberry Cheesecake Bites",
    4,
    "Sweet little bites perfect for sharing.",
    ["Cream cheese", "Strawberries", "Graham crackers"],
    "Mix cream cheese, spoon onto cracker, top with fruit."   
    );
    
    await getAllRecipes(
    "Sparkling Mocktail",
    4,
    "Fancy fizzy drink to toast love.",
    ["Sparkling water", "Lime", "Mint", "Cranberry juice"],
    "Mix all in a glass and serve chilled."   
    );
    
    await getAllRecipes(
     "Lover’s Chocolate Cake",
     4,
      "Rich, moist cake to share with someone special.",
     ["Cocoa", "Flour", "Sugar", "Eggs"],
      "Mix and bake, frost with love."   
    );
      
   

//   for (const recipe of recipes) {
//     await client.query(
//       `
//       INSERT INTO recipes (title, mood, description, ingredients, instructions)
//       VALUES ($1, $2, $3, $4, $5)
//       `,
//       [
//         recipe.title,
//         recipe.mood,
//         recipe.description,
//         recipe.ingredients,
//         recipe.instructions,
//       ]
//     );
//   }
}































  


































































