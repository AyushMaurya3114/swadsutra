// Function to retrieve query parameters from URL
function getQueryVariable(variable) {
  const query = window.location.search.substring(1);
  const vars = query.split('&');
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split('=');
    if (decodeURIComponent(pair[0]) === variable) {
      return decodeURIComponent(pair[1]);
    }
  }
  return undefined;
}

// Retrieve the selected ingredients from the URL
const ingredients = getQueryVariable('ingredients').split(',');

//database 
const data = [
  {
   name: 'Wheat Flour Dosa',
   ingredients: ['Wheat Flour', 'Spices', 'Ghee'],
   steps: '1. Mix wheat flour with water to make a smooth batter. <br> 2. Add spices and salt. <br> 3. Cook until crispy. <br> 4. Serve with chutney or curry. '
  },
  {
   name: 'Aloo Tomato Sandwich',
   ingredients: ['Bread', 'Potato', 'Tomato', 'Spices', 'Ghee'],
   steps: '1. Boil, mash, and season the potatoes. <br> 2. Spread the mashed potato mixture & tomato slices between slices of bread. <br> 3. Add some spices in it & toast the sandwiches with ghee until golden brown. <br> 4. Serve hot with chutney or ketchup. '
  },
  {
   name: 'Spicy Aloo Sandwich',
   ingredients: ['Bread', 'Potato', 'Spices', 'Ghee'],
   steps: '1. Boil, mash, and season the potatoes. <br> 2. Spread the mashed potato mixture between slices of bread. <br> 3. Toast the sandwiches with ghee until golden brown. <br> 4. Serve hot with chutney or ketchup. '
  },
  {
   name: 'Tomato & Potato Soup',
   ingredients: ['Potato', 'Tomato', 'Spices', 'Ghee'],
   steps: '1. Boil diced potatoes and tomatoes in water until soft. <br> 2. Blend them to make a smooth puree. <br> 3. In a pan, heat ghee, add spices, and the puree. <br> 4. Add salt and simmer until desired consistency. <br> 5. Serve hot as a comforting soup. '
  },
  {
   name: 'Stuffed Potato Paratha',
   ingredients: ['Wheat Flour', 'Potato', 'Spices', 'Ghee'],
   steps: '1. Boil, mash, and season the potatoes. <br> 2. Make dough using wheat flour and water. <br> 3. Roll out a portion of the dough, place a portion of the seasoned potato mixture, and fold the dough around it. <br> 4. Roll it out into a paratha and cook on a griddle with ghee until golden and crispy. <br> 5. Serve hot with yogurt or chutney. '
  },
  {
   name: 'Onion Tomato Uttapam',
   ingredients: ['Rice Flour', 'Urad Dal', 'Onion', 'Tomato', 'Spices', 'Ghee'],
   steps: '1. Prepare a batter by fermenting rice flour and urad dal. Add salt. <br> 2. Pour a ladle of batter on a hot griddle. <br> 3. Sprinkle chopped onions and tomatoes on top, press them into the batter. <br> 4. Drizzle ghee, cook until crispy, and flip to cook the other side. <br> 5. Serve hot with chutney or sambar. '
  },
  {
   name: 'Spicy Aloo Poha',
   ingredients: ['Poha', 'Potato', 'Onion', 'Spices', 'Ghee'],
   steps: '1. Rinse and soak poha in water, then drain. <br> 2. In a pan, heat ghee, add spices, chopped onions, and sauté until golden. <br> 3. Add chopped potatoes, cook until tender. <br> 4. Mix in the soaked poha, add salt, and cook until well combined. <br> 5. Garnish with coriander leaves and serve. '
  },
  {
   name: 'Onion Tomato Poha',
   ingredients: ['Poha', 'Onion', 'Tomato', 'Spices', 'Ghee'],
   steps: '1. Rinse and soak poha in water, then drain. <br> 2. In a pan, heat ghee, add spices, chopped onions, and sauté until golden. <br> 3. Add chopped tomatoes and cook until soft. <br> 4. Mix in the soaked poha, add salt, and cook until well combined. <br> 5. Garnish with coriander leaves and serve. '
  },

  {
   name: 'Potato Sandwich',
   ingredients: ['Bread', 'Potato'],
   steps: '1. Boil, peel, and slice the potatoes. <br> 2. Place the potato slices between slices of bread to make a sandwich. <br> 3. Toast the sandwich on a pan with a little ghee until golden brown. <br> 4. Serve hot. '
  },
  {
   name: 'Tomato Poha',
   ingredients: ['Poha', 'Tomato'],
   steps: '1. Rinse the poha and set aside. <br> 2. In a pan, heat ghee, add spices, and chopped tomatoes. <br> 3. Cook until the tomatoes are soft. <br> 4. Mix in the soaked poha and cook until well combined. <br> 5. Garnish with coriander leaves and serve. '
  },
  {
   name: 'Onion Pakora',
   ingredients: ['Onion', 'Spices'],
   steps: '1. Slice the onion into thin rings. <br> 2. Dip the onion rings in a batter made of wheat flour, spices, and water. <br> 3. Deep fry in ghee until golden brown and crispy. <br> 4. Serve hot with chutney or ketchup. '
  },
  {
   name: 'Tomato Salad',
   ingredients: ['Tomato'],
   steps: '1. Chop the tomatoes into small pieces. <br> 2. Sprinkle with a pinch of salt and mix well. <br> 3. Allow it to sit for a few minutes to let the flavors meld. <br> 4. Serve as a side salad. '
  },
  {
   name: 'Bread Toast',
   ingredients: ['Bread', 'Ghee'],
   steps: '1. Apply ghee on both sides of each bread slice. <br> 2. Toast the bread slices in a pan until golden brown and crispy. <br> 3. Serve hot with any condiment of your choice. '
  },
  {
   name: 'Spiced Potato Bites',
   ingredients: ['Potato', 'Spices'],
   steps: '1. Cut the potatoes into small bite-sized pieces. <br> 2. Toss the potato pieces in a mix of spices. <br> 3. Roast the spiced potato bites in ghee until crispy and cooked through. <br> 4. Serve as a snack. '
  },
  {
   name: 'Spiced Tomato Soup',
   ingredients: ['Tomato', 'Spices'],
   steps: '1. Blend the tomatoes to make a smooth puree. <br> 2. Heat ghee in a pot, add the puree, and spices. <br> 3. Simmer until the soup thickens and flavors meld. <br> 4. Serve hot as a comforting soup. '
  },
  {
   name: 'Potato Raita',
   ingredients: ['Potato', 'Spices'],
   steps: '1. Boil, peel, and dice the potatoes. <br> 2. Mix the diced potatoes with spices and yogurt. <br> 3. Garnish with coriander leaves and serve chilled as a raita. '
  },
  {
   name: 'Tomato Bhel',
   ingredients: ['Poha', 'Tomato'],
   steps: '1. Rinse the poha and set aside. <br> 2. In a bowl, mix soaked poha with chopped tomatoes and spices. <br> 3. Toss well to combine and serve as a snack. '
  },
  {
   name: 'Stuffed Bread Pakora',
   ingredients: ['Bread', 'Potato'],
   steps: '1. Boil, peel, and mash the potatoes. Add spices and salt. <br> 2. Spread the mashed potato mixture between slices of bread to form sandwiches. <br> 3. Dip the sandwiches in a batter made of wheat flour, spices, and water. <br> 4. Deep fry in ghee until golden brown and crispy. <br> 5. Serve hot with chutney or ketchup. '
  },

  {
   name: 'Potato Tomato Sandwich',
   ingredients: ['Bread', 'Potato', 'Tomato'],
   steps: '1. Boil, peel, and slice the potatoes. <br> 2. Place the potato slices and tomato slices between slices of bread to make a sandwich. <br> 3. Toast the sandwich on a pan with a little ghee until golden brown. <br> 4. Serve hot.                                                                                                                                                           '
  },
  {
   name: 'Aloo Tomato Uttapam',
   ingredients: ['Rice Flour', 'Potato', 'Tomato'],
   steps: '1. Boil, peel, and mash the potatoes. <br> 2. Mix the mashed potatoes with rice flour and spices. <br> 3. Spread the mixture on a hot griddle, add slices of tomatoes. <br> 4. Cook until both sides are golden brown. <br> 5. Serve hot.                                                                                                                                                            '
  },
  {
   name: 'Onion Tomato Poha',
   ingredients: ['Poha', 'Onion', 'Tomato'],
   steps: '1. Rinse the poha and set aside. <br> 2. In a pan, heat ghee, add spices, chopped onions, and tomatoes. <br> 3. Cook until the tomatoes are soft. <br> 4. Mix in the soaked poha and cook until well combined. <br> 5. Garnish with coriander leaves and serve.                                                                                                                                              '
  },
  {
   name: 'Spiced Potato Tomato Soup',
   ingredients: ['Potato', 'Tomato', 'Spices'],
   steps: '1. Boil, peel, and dice the potatoes. <br> 2. Blend the tomatoes to make a smooth puree. <br> 3. In a pot, heat ghee, add spices, tomato puree, and diced potatoes. <br> 4. Simmer until the soup thickens and flavors meld. <br> 5. Serve hot as a comforting soup.                                                                                                                                              '
  },
  {
   name: 'Tomato Potato Bhel',
   ingredients: ['Poha', 'Potato', 'Tomato'],
   steps: '1. Rinse the poha and set aside. <br> 2. Boil, peel, and dice the potatoes. <br> 3. In a bowl, mix soaked poha with diced potatoes, chopped tomatoes, and spices. <br> 4. Toss well to combine and serve as a snack.                                                                                                                                                                             '
  },
  {
   name: 'Spiced Potato Bharta',
   ingredients: ['Potato', 'Spices', 'Ghee'],
   steps: '1. Boil, peel, and mash the potatoes. <br> 2. Mix the mashed potatoes with spices and a dollop of ghee. <br> 3. Garnish with coriander leaves and serve as a side dish.                                                                                                                                                                                                                        '
  },
  {
   name: 'Tomato Poha Bhel',
   ingredients: ['Poha', 'Tomato', 'Spices'],
   steps: '1. Rinse the poha and set aside. <br> 2. In a bowl, mix soaked poha with chopped tomatoes and spices. <br> 3. Toss well to combine and serve as a snack.                                                                                                                                                                                                                                        '
  },
  {
   name: 'Aloo Onion Tomato Salad',
   ingredients: ['Potato', 'Onion', 'Tomato'],
   steps: '1. Boil, peel, and dice the potatoes. <br> 2. Chop onions and tomatoes. <br> 3. Mix the diced potatoes, chopped onions, and tomatoes. <br> 4. Sprinkle with a pinch of salt and spices. Toss well and serve as a salad.                                                                                                                                                                                 '
  },
  {
   name: 'Spiced Tomato Uttapam',
   ingredients: ['Rice Flour', 'Tomato', 'Spices'],
   steps: '1. Slice tomatoes and spread them on the batter made from rice flour and spices. <br> 2. Cook until the uttapam is golden brown on both sides. <br> 3. Serve hot.                                                                                                                                                                                                                                '
  },
  {
   name: 'Spiced Potato Dosa',
   ingredients: ['Rice Flour', 'Potato', 'Spices'],
   steps: '1. Boil, peel, and mash the potatoes. <br> 2. Mix the mashed potatoes with rice flour and spices. <br> 3. Spread the mixture on a hot griddle to make dosas. <br> 4. Cook until crispy and serve hot.                                                                                                                                                                                                  '
  },
  {
   name: 'Aloo Tomato Rice',
   ingredients: ['Rice', 'Potato', 'Tomato'],
   steps: '1. Cook the rice and set aside. <br> 2. Boil, peel, and dice the potatoes. <br> 3. In a pan, heat ghee, add spices, diced potatoes, and tomatoes. <br> 4. Mix in the cooked rice and toss until well combined. <br> 5. Garnish with coriander leaves and serve.                                                                                                                                              '
  },
  {
   name: 'Spiced Bread Uttapam',
   ingredients: ['Bread', 'Spices', 'Ghee'],
   steps: '1. Blend bread into a smooth batter with spices. <br> 2. Spread the batter on a hot griddle to make uttapams. <br> 3. Cook until both sides are golden brown. <br> 4. Serve hot.                                                                                                                                                                                                                      '
  },
  {
   name: 'Aloo Spiced Bread Toast',
   ingredients: ['Bread', 'Potato', 'Spices'],
   steps: '1. Boil, peel, and mash the potatoes. <br> 2. Spread the mashed potato mixture on bread slices. <br> 3. Toast the slices on a pan with a little ghee until golden brown. <br> 4. Serve hot.                                                                                                                                                                                                              '
  },
  {
   name: 'Spiced Onion Tomato Rice',
   ingredients: ['Rice', 'Onion', 'Tomato', 'Spices'],
   steps: '1. Cook the rice and set aside. <br> 2. Chop onions and tomatoes. <br> 3. In a pan, heat ghee, add spices, chopped onions, and tomatoes. <br> 4. Mix in the cooked rice and toss until well combined. <br> 5. Garnish with coriander leaves and serve.                                                                                                                                                 '
  },

  {
   name: 'Tomato Potato Dosa',
   ingredients: ['Rice Flour', 'Potato', 'Tomato'],
   steps: '1. Boil, peel, and mash the potatoes. <br> 2. Mix the mashed potatoes with rice flour and spices. <br> 3. Spread the mixture on a hot griddle to make dosas. <br> 4. Place slices of tomatoes on the dosas and cook until crispy. <br> 5. Serve hot.                                                                                                                                                        '
  },
  {
   name: 'Spiced Bread Salad',
   ingredients: ['Bread', 'Spices', 'Ghee'],
   steps: '1. Toast bread slices until golden brown and crispy. <br> 2. Break them into small pieces. <br> 3. Sprinkle with spices and a drizzle of ghee. <br> 4. Toss well and serve as a salad.                                                                                                                                                                                                                   '
  },
  {
   name: 'Aloo Stuffed Tomato',
   ingredients: ['Potato', 'Tomato', 'Spices'],
   steps: '1. Boil, peel, and mash the potatoes. <br> 2. Hollow out the center of tomatoes and stuff with mashed potatoes mixed with spices. <br> 3. Steam or cook the stuffed tomatoes until tender. <br> 4. Serve hot.                                                                                                                                                                                         '
  },
  {
   name: 'Tomato Poha Bharta',
   ingredients: ['Poha', 'Tomato', 'Spices'],
   steps: '1. Rinse the poha and set aside. <br> 2. In a pan, heat ghee, add spices, chopped tomatoes, and sauté until soft. <br> 3. Mix in the soaked poha and cook until well combined. <br> 4. Garnish with coriander leaves and serve.                                                                                                                                                                      '
  },
  {
   name: 'Aloo Stuffed Bread Toast',
   ingredients: ['Bread', 'Potato', 'Spices'],
   steps: '1. Boil, peel, and mash the potatoes. <br> 2. Spread the mashed potato mixture on bread slices. <br> 3. Toast the slices on a pan with a little ghee until golden brown. <br> 4. Serve hot.                                                                                                                                                                                                               '
  },
  {
   name: 'Spiced Tomato Rice',
   ingredients: ['Rice', 'Tomato', 'Spices'],
   steps: '1. Cook the rice and set aside. <br> 2. Slice tomatoes and sauté with spices in a pan. <br> 3. Mix in the cooked rice and toss until well combined. <br> 4. Garnish with coriander leaves and serve.                                                                                                                                                                                                         '
  },

  {
   name: 'Spiced Aloo Tomato Sandwich',
   ingredients: ['Bread', 'Potato', 'Tomato', 'Spices'],
   steps: '1. Boil, peel, and slice the potatoes. <br> 2. Place the potato slices and tomato slices between slices of bread to make a sandwich. <br> 3. Sprinkle spices over the filling. <br> 4. Toast the sandwich on a pan with a little ghee until golden brown. <br> 5. Serve hot.                                                                                                                                                                                       '
  },
  {
   name: 'Tomato Poha Bhel',
   ingredients: ['Poha', 'Tomato', 'Spices', 'Ghee'],
   steps: '1. Rinse the poha and set aside. <br> 2. In a bowl, mix soaked poha with chopped tomatoes and spices. <br> 3. Add a drizzle of ghee and toss well to combine. <br> 4. Serve as a snack.                                                                                                                                                                                                                          '
  },
  {
   name: 'Aloo Tomato Spiced Uttapam',
   ingredients: ['Rice Flour', 'Potato', 'Tomato', 'Spices'],
   steps: '1. Boil, peel, and mash the potatoes. <br> 2. Mix the mashed potatoes with rice flour and spices. <br> 3. Spread the mixture on a hot griddle, add slices of tomatoes. <br> 4. Cook until both sides are golden brown. <br> 5. Serve hot.                                                                                                                                                                    '
  },
  {
   name: 'Spiced Tomato Poha',
   ingredients: ['Poha', 'Tomato', 'Spices', 'Ghee'],
   steps: '1. Rinse the poha and set aside. <br> 2. In a pan, heat ghee, add spices, and chopped tomatoes. <br> 3. Cook until the tomatoes are soft. <br> 4. Mix in the soaked poha and cook until well combined. <br> 5. Serve garnished with coriander leaves.                                                                                                                                                               '
  },
  {
   name: 'Aloo Tomato Stuffed Paratha',
   ingredients: ['Wheat Flour', 'Potato', 'Tomato', 'Spices'],
   steps: '1. Boil, peel, and mash the potatoes. <br> 2. Mix the mashed potatoes with spices. <br> 3. Make small balls of the mixture. <br> 4. Roll out wheat flour dough into small circles, stuff with the potato mixture and slices of tomatoes. <br> 5. Cook on a hot griddle with a little ghee until both sides are golden brown. <br> 6. Serve hot.                                                                                                                          '
  },
  {
   name: 'Spiced Bread Tomato Salad',
   ingredients: ['Bread', 'Tomato', 'Spices', 'Ghee'],
   steps: '1. Toast bread slices until golden brown and crispy. <br> 2. Break them into small pieces. <br> 3. Chop tomatoes and mix with bread pieces. <br> 4. Sprinkle with spices and drizzle with ghee. <br> 5. Toss well and serve as a salad.                                                                                                                                                                         '
  },
  {
   name: 'Aloo Stuffed Tomato Bharta',
   ingredients: ['Potato', 'Tomato', 'Spices', 'Ghee'],
   steps: '1. Boil, peel, and mash the potatoes. <br> 2. Hollow out the center of tomatoes and stuff with mashed potatoes mixed with spices. <br> 3. Sauté the stuffed tomatoes in ghee until they are cooked and the flavors meld. <br> 4. Serve hot.                                                                                                                                                                    '
  },
  {
   name: 'Spiced Tomato Bread Crumbs',
   ingredients: ['Bread', 'Tomato', 'Spices', 'Ghee'],
   steps: '1. Toast bread slices until golden brown and crispy. <br> 2. Allow them to cool and then blend into coarse crumbs. <br> 3. Chop tomatoes finely. <br> 4. Mix the crumbs with spices and add chopped tomatoes. <br> 5. Sauté in ghee until the crumbs are flavored and slightly crispy. <br> 6. Serve as a crunchy topping or use in various dishes.                                                                                                                    '
  },
  {
   name: 'Spiced Aloo Tomato Salad',
   ingredients: ['Potato', 'Tomato', 'Spices', 'Ghee'],
   steps: '1. Boil, peel, and dice the potatoes. <br> 2. Chop tomatoes. <br> 3. Mix the diced potatoes and chopped tomatoes. <br> 4. Sprinkle with spices and drizzle with ghee. <br> 5. Toss well and serve as a salad.                                                                                                                                                                                                      '
  },
  {
   name: 'Spiced Tomato Bread Toast',
   ingredients: ['Bread', 'Tomato', 'Spices', 'Ghee'],
   steps: '1. Toast bread slices until golden brown and crispy. <br> 2. Chop tomatoes finely. <br> 3. Spread the chopped tomatoes on the toast. <br> 4. Sprinkle with spices and drizzle with ghee. <br> 5. Serve hot.                                                                                                                                                                                                           '
  },

  {
   name: 'Spiced Aloo Tomato Sandwich',
   ingredients: ['Bread', 'Potato', 'Tomato', 'Spices'],
   steps: '1. Boil, peel, and slice the potatoes. <br> 2. Place the potato slices and tomato slices between slices of bread to make a sandwich. <br> 3. Sprinkle spices over the filling. <br> 4. Toast the sandwich on a pan with a little ghee until golden brown. <br> 5. Serve hot.                                                                                                                                                                                       '
  },
  {
   name: 'Tomato Poha Bhel',
   ingredients: ['Poha', 'Tomato', 'Spices', 'Ghee'],
   steps: '1. Rinse the poha and set aside. <br> 2. In a bowl, mix soaked poha with chopped tomatoes and spices. <br> 3. Add a drizzle of ghee and toss well to combine. <br> 4. Serve as a snack.                                                                                                                                                                                                                          '
  },
  {
   name: 'Aloo Tomato Spiced Uttapam',
   ingredients: ['Rice Flour', 'Potato', 'Tomato', 'Spices'],
   steps: '1. Boil, peel, and mash the potatoes. <br> 2. Mix the mashed potatoes with rice flour and spices. <br> 3. Spread the mixture on a hot griddle, add slices of tomatoes. <br> 4. Cook until both sides are golden brown. <br> 5. Serve hot.                                                                                                                                                                    '
  },
  {
   name: 'Spiced Tomato Poha',
   ingredients: ['Poha', 'Tomato', 'Spices', 'Ghee'],
   steps: '1. Rinse the poha and set aside. <br> 2. In a pan, heat ghee, add spices, and chopped tomatoes. <br> 3. Cook until the tomatoes are soft. <br> 4. Mix in the soaked poha and cook until well combined. <br> 5. Serve garnished with coriander leaves.                                                                                                                                                               '
  },
  {
   name: 'Aloo Tomato Stuffed Paratha',
   ingredients: ['Wheat Flour', 'Potato', 'Tomato', 'Spices'],
   steps: '1. Boil, peel, and mash the potatoes. <br> 2. Mix the mashed potatoes with spices. <br> 3. Make small balls of the mixture. <br> 4. Roll out wheat flour dough into small circles, stuff with the potato mixture and slices of tomatoes. <br> 5. Cook on a hot griddle with a little ghee until both sides are golden brown. <br> 6. Serve hot.                                                                                                                          '
  },
  {
   name: 'Spiced Bread Tomato Salad',
   ingredients: ['Bread', 'Tomato', 'Spices', 'Ghee'],
   steps: '1. Toast bread slices until golden brown and crispy. <br> 2. Break them into small pieces. <br> 3. Chop tomatoes and mix with bread pieces. <br> 4. Sprinkle with spices and drizzle with ghee. <br> 5. Toss well and serve as a salad.                                                                                                                                                                         '
  },
  {
   name: 'Aloo Stuffed Tomato Bharta',
   ingredients: ['Potato', 'Tomato', 'Spices', 'Ghee'],
   steps: '1. Boil, peel, and mash the potatoes. <br> 2. Hollow out the center of tomatoes and stuff with mashed potatoes mixed with spices. <br> 3. Sauté the stuffed tomatoes in ghee until they are cooked and the flavors meld. <br> 4. Serve hot.                                                                                                                                                                    '
  },
  {
   name: 'Spiced Tomato Bread Crumbs',
   ingredients: ['Bread', 'Tomato', 'Spices', 'Ghee'],
   steps: '1. Toast bread slices until golden brown and crispy. <br> 2. Allow them to cool and then blend into coarse crumbs. <br> 3. Chop tomatoes finely. <br> 4. Mix the crumbs with spices and add chopped tomatoes. <br> 5. Sauté in ghee until the crumbs are flavored and slightly crispy. <br> 6. Serve as a crunchy topping or use in various dishes.                                                                                                                    '
  },
  {
   name: 'Spiced Aloo Tomato Salad',
   ingredients: ['Potato', 'Tomato', 'Spices', 'Ghee'],
   steps: '1. Boil, peel, and dice the potatoes. <br> 2. Chop tomatoes. <br> 3. Mix the diced potatoes and chopped tomatoes. <br> 4. Sprinkle with spices and drizzle with ghee. <br> 5. Toss well and serve as a salad.                                                                                                                                                                                                      '
  },
  {
   name: 'Spiced Tomato Bread Toast',
   ingredients: ['Bread', 'Tomato', 'Spices', 'Ghee'],
   steps: '1. Toast bread slices until golden brown and crispy. <br> 2. Chop tomatoes finely. <br> 3. Spread the chopped tomatoes on the toast. <br> 4. Sprinkle with spices and drizzle with ghee. <br> 5. Serve hot.                                                                                                                                                                                                           '
  },

  {
   name: 'Spiced Aloo Tomato Bread Salad',
   ingredients: ['Bread', 'Potato', 'Tomato', 'Spices', 'Ghee'],
   steps: '1. Toast bread slices until golden brown and crispy & break them into small pieces. <br> 2. Boil, peel, and dice the potatoes. <br> 3. Chop tomatoes. <br> 4. Mix the diced potatoes, chopped tomatoes, and bread pieces. <br> 5. Sprinkle with spices and drizzle with ghee. <br> 6. Toss well and serve as a salad.                                                                                       '
  },
  {
   name: 'Tomato Poha Stuffed Paratha',
   ingredients: ['Wheat Flour', 'Potato', 'Poha', 'Tomato', 'Spices'],
   steps: '1. Boil, peel, and mash the potatoes. <br> 2. Rinse the poha and set aside. <br> 3. Make small balls of the mixture. <br> 4. Roll out wheat flour dough into small circles, stuff with the potato and poha mixture and slices of tomatoes. <br> 5. Cook on a hot griddle with a little ghee until both sides are golden brown. <br> 6. Serve hot.                                                                                  '
  },
  {
   name: 'Spiced Aloo Tomato Dosa',
   ingredients: ['Rice Flour', 'Potato', 'Tomato', 'Spices', 'Ghee'],
   steps: '1. Boil, peel, and mash the potatoes. <br> 2. Mix the mashed potatoes with rice flour and spices. <br> 3. Spread the mixture on a hot griddle to make dosas. <br> 4. Place slices of tomatoes on the dosas. <br> 5. Cook until crispy. <br> 6. Serve hot.                                                                                                                                                                '
  },
  {
   name: 'Aloo Tomato Spiced Uttapam',
   ingredients: ['Rice Flour', 'Potato', 'Tomato', 'Spices', 'Ghee'],
   steps: '1. Boil, peel, and mash the potatoes. <br> 2. Mix the mashed potatoes with rice flour and spices. <br> 3. Spread the mixture on a hot griddle, add slices of tomatoes. <br> 4. Cook until both sides are golden brown. <br> 5. Serve hot.                                                                                                                                                                     '
  },
  {
   name: 'Tomato Poha Bhel Dosa',
   ingredients: ['Rice Flour', 'Poha', 'Tomato', 'Spices', 'Ghee'],
   steps: '1. Rinse the poha and set aside. <br> 2. Mix the soaked poha with rice flour and spices to make a dosa batter. <br> 3. Spread the batter on a hot griddle. <br> 4. Place slices of tomatoes on the dosa. <br> 5. Cook until crispy. <br> 6. Serve hot.                                                                                                                                                                 '
  },
  {
   name: 'Aloo Spiced Tomato Salad',
   ingredients: ['Potato', 'Tomato', 'Spices', 'Ghee'],
   steps: '1. Boil, peel, and dice the potatoes. <br> 2. Chop tomatoes. <br> 3. Mix the diced potatoes and chopped tomatoes. <br> 4. Sprinkle with spices and drizzle with ghee. <br> 5. Toss well and serve as a salad.                                                                                                                                                                                                     '
  },
  {
   name: 'Spiced Aloo Tomato Poha Salad',
   ingredients: ['Poha', 'Potato', 'Tomato', 'Spices', 'Ghee'],
   steps: '1. Rinse the poha and set aside. <br> 2. Boil, peel, and dice the potatoes. <br> 3. Chop tomatoes. <br> 4. Mix the diced potatoes, chopped tomatoes, and soaked poha. <br> 5. Sprinkle with spices and drizzle with ghee. <br> 6. Toss well and serve as a salad.                                                                                                                                                       '
  },
  {
   name: 'Tomato Poha Bread Crumbs',
   ingredients: ['Bread', 'Poha', 'Tomato', 'Spices', 'Ghee'],
   steps: '1. Rinse the poha and set aside. <br> 2. Toast bread slices until golden brown & crispy; and break them into small pieces. <br> 3. Chop tomatoes finely. <br> 4. Mix the bread pieces, soaked poha, chopped tomatoes, and spices. <br> 5. Sauté in ghee until the mixture is flavored and slightly crispy. <br> 6. Serve as a crunchy topping or use in various dishes.                                                                '
  },
  {
   name: 'Spiced Tomato Bread Uttapam',
   ingredients: ['Bread', 'Tomato', 'Spices', 'Ghee'],
   steps: '1. Toast bread slices until golden brown and crispy. <br> 2. Break them into small pieces. <br> 3. Blend bread into a smooth batter with spices. <br> 4. Spread the batter on a hot griddle to make uttapams. <br> 5. Place slices of tomatoes on the uttapams. <br> 6. Cook until both sides are golden brown & serve hot.                                                                                                                                                      '
  },
  {
   name: 'Aloo Tomato Poha Bhel',
   ingredients: ['Poha', 'Potato', 'Tomato', 'Spices', 'Ghee'],
   steps: '1. Rinse the poha and set aside. <br> 2. Boil, peel, and dice the potatoes. <br> 3. Chop tomatoes. <br> 4. In a bowl, mix soaked poha with diced potatoes, chopped tomatoes, and spices. <br> 5. Sprinkle with a drizzle of ghee. <br> 6. Toss well to combine and serve as a snack.                                                                                                                                              '
  },
  {
   name: 'Spiced Tomato Poha Uttapam',
   ingredients: ['Rice Flour', 'Poha', 'Tomato', 'Spices', 'Ghee'],
   steps: '1. Rinse the poha and set aside. <br> 2. Mix the soaked poha with rice flour and spices to make a uttapam batter. <br> 3. Spread the batter on a hot griddle. <br> 4. Place slices of tomatoes on the uttapams. <br> 5. Cook until both sides are golden brown. <br> 6. Serve hot.                                                                                                                                                 '
  },
  {
   name: 'Aloo Spiced Bread Salad',
   ingredients: ['Bread', 'Potato', 'Spices', 'Ghee'],
   steps: '1. Toast bread slices until golden brown and crispy. <br> 2. Break them into small pieces. <br> 3. Boil, peel, and dice the potatoes. <br> 4. Mix the diced potatoes, bread pieces, and spices. <br> 5. Sprinkle with a drizzle of ghee. <br> 6. Toss well and serve as a salad.                                                                                                                                               '
  },
  {
   name: 'Tomato Poha Spiced Bharta',
   ingredients: ['Poha', 'Potato', 'Tomato', 'Spices', 'Ghee'],
   steps: '1. Rinse the poha and set aside. <br> 2. Boil, peel, and mash the potatoes. <br> 3. Chop tomatoes. <br> 4. In a pan, heat ghee, add spices, mashed potatoes, and chopped tomatoes. <br> 5. Mix in the soaked poha & cook until well combined. <br> 6. Garnish with coriander leaves and serve.                                                                                                                         '
  },
  {
   name: 'Spiced Aloo Tomato Bread Toast',
   ingredients: ['Bread', 'Potato', 'Tomato', 'Spices', 'Ghee'],
   steps: '1. Toast bread slices until golden brown and crispy. <br> 2. Break them into small pieces. <br> 3. Boil, peel, and dice the potatoes. <br> 4. Chop tomatoes finely. <br> 5. Mix the diced potatoes, chopped tomatoes, and bread pieces. <br> 6. Sprinkle with spices and drizzle with ghee; and serve hot                                                                                                                         '
  },
  {
   name: 'Tomato Poha Aloo Stuffed Paratha',
   ingredients: ['Wheat Flour', 'Poha', 'Potato', 'Tomato', 'Spices'],
   steps: '1. Boil, peel, and mash the potatoes. <br> 2. Rinse the poha and set aside. <br> 3. Make small balls of the mixture. <br> 4. Roll out wheat flour dough into small circles, stuff with the potato, poha, and slices of tomatoes. <br> 5. Cook on a hot griddle with a little ghee until both sides are golden brown. <br> 6. Serve hot.                                                                                   '
  },
  {
   name: 'Spiced Tomato Bread Bharta',
   ingredients: ['Bread', 'Tomato', 'Spices', 'Ghee'],
   steps: '1. Toast bread slices until golden brown and crispy. <br> 2. Break them into small pieces. <br> 3. Chop tomatoes finely. <br> 4. In a pan, heat ghee, add spices, and chopped tomatoes. <br> 5. Mix in the bread pieces. <br> 6. Cook until well combined and flavors meld. Serve hot.                                                                                                                                 '
  },
  {
   name: 'Aloo Spiced Tomato Rice',
   ingredients: ['Rice', 'Potato', 'Tomato', 'Spices', 'Ghee'],
   steps: '1. Cook the rice and set aside. <br> 2. Boil, peel, and dice the potatoes. <br> 3. Chop tomatoes. <br> 4. In a pan, heat ghee, add spices, diced potatoes, and tomatoes. <br> 5. Mix in the cooked rice & toss until well combined. <br> 6. Garnish with coriander leaves and serve.                                                                                                                                       '
  },
  {
   name: 'Tomato Poha Spiced Rice',
   ingredients: ['Rice', 'Poha', 'Tomato', 'Spices', 'Ghee'],
   steps: '1. Cook the rice and set aside. <br> 2. Rinse the poha and set aside. <br> 3. In a pan, heat ghee, add spices, and soaked poha. <br> 4. Mix in the cooked rice. <br> 5. Toss until well combined. <br> 6. Garnish with slices of tomatoes and serve.                                                                                                                                                               '
  },
  {
   name: 'Spiced Tomato Bread Dosa',
   ingredients: ['Rice Flour', 'Bread', 'Tomato', 'Spices', 'Ghee'],
   steps: '1. Toast bread slices until golden brown and crispy. <br> 2. Break them into small pieces. <br> 3. Blend bread into a smooth batter with rice flour and spices. <br> 4. Spread the batter on a hot griddle to make dosas. <br> 5. Place slices of tomatoes on the dosas. <br> 6. Cook until crispy & serve hot.                                                                                                                                                                 '
  },
  {
   name: 'Aloo Tomato Poha Bread Bhel',
   ingredients: ['Bread', 'Poha', 'Potato', 'Tomato', 'Spices'],
   steps: '1. Rinse the poha and set aside. <br> 2. Boil, peel, and dice the potatoes. <br> 3. Chop tomatoes finely. <br> 4. Mix the diced potatoes, chopped tomatoes, soaked poha, and bread pieces. <br> 5. Sprinkle with spices. <br> 6. Toss well and serve as a snack.                                                                                                                                                          '
  }
 ]

//  const matchingRecipes = data.filter(recipe => {
//   return areArraysEqual(ingredients, recipe.ingredients);
// });


// function areArraysEqual(arr1, arr2) {
  //   if (arr1.length !== arr2.length) {
    //     return false;
    //   }
//   arr1.sort();
//   arr2.sort();
//   return arr1.every((element, index) => element === arr2[index]);
// }

const matchingRecipes = data.filter((recipe) =>
recipe.ingredients.every((ingredient) => ingredients.includes(ingredient))
);

    displayRecipes(matchingRecipes);

 function displayRecipes(recipes) {
  const recipeList = document.getElementById('result-cards');
  if (recipes.length === 0) {
    recipeList.innerHTML = '<p>&nbsp; &nbsp; &nbsp; No matching recipes found.</p>';
  } else {
    const ul = document.createElement('ul');
    recipes.forEach(recipe => {
      const li = document.createElement('li');
      li.innerHTML = `
      <div class="cards-wrapper">
          <div class="cardbox-area">
              <div class="cardbox">
                  <img src="assets/Final-di.jpg" alt="img001"> 
                      <div class="cards-overlay flex">
                          <h1><u>${recipe.name}</u></h1> 
                          </br>
                          <h3><strong><u>Ingredients:</u></strong> ${recipe.ingredients.join(', ')}</h3> 
                          </br>
                          <p><strong><u>Steps:</u></strong> ${recipe.steps}</p>
                      </div>
              </div> 
          </div>
      </div>
      `;
      ul.appendChild(li);
    });
    recipeList.appendChild(ul);
  }
}