export default {
  SandWhichAndMeals: [
    {
      title: 'Double Bacon Quarter Pounder with Cheese',
      img: 'link',
      featured: true,
      standardPrice: {
        price: 7.69,
        cal: 820,
      },
      mealPrice: {
        price: 10.19,
        cal: [1140, 1350],
      },
      Customize: {},
    },
    {
      title: 'Double Bacon Quarter Pounder with Cheese',
      img: 'link',
      featured: true,
      standardPrice: {
        price: 7.69,
        cal: 820,
      },
      mealPrice: {
        price: 10.19,
        cal: [1140, 1350],
      },
      Customize: {},
    },
    {
      title: 'Double Quarter Pounder with Cheese',
      img: 'link',
      featured: false,
      standardPrice: {
        price: 6.59,
        cal: 720,
      },
      mealPrice: {
        price: 9.59,
        cal: [1040, 1250],
      },
      Customize: {},
    },
    {
      title: 'Quarter Pounder with Cheese',
      img: 'link',
      featured: false,
      standardPrice: {
        price: 5.19,
        cal: 510,
      },
      mealPrice: {
        price: 10.19,
        cal: [830, 1040],
      },
      Customize: {},
    },
    {
      title: 'Cheeseburger',
      img: 'link',
      featured: false,
      standardPrice: {
        price: 1.69,
        cal: 300,
      },
      mealPrice: {
        price: 6.38,
        cal: [920, 1130],
      },
      Customize: {},
    },
    {
      title: 'Big Mac',
      img: 'link',
      featured: false,
      standardPrice: {
        price: 5.19,
        cal: 540,
      },
      mealPrice: {
        price: 8.19,
        cal: [860, 1070],
      },
      Customize: {},
    },
  ],
  //TODO -> REwatch the FrontEnd Master and think abou thow to organize the data
  SweetsAndTreats: {
    titleGroups: ['McFlurry', 'Shakes', 'Sundaes', 'Cookies', 'Pies', 'Cone'],
    type: 'Drink',
    titles: [
      {
        titleGroup: 'McFlurry',
        title: 'Chocolate Shake',
        size: {
          small: {
            price: 2.0,
            cal: 520,
          },
          medium: {
            price: 2.0,
            cal: 520,
          },
          large: {
            price: 3.79,
            cal: 830,
          },
        },
        Customize: [
          {
            item: 'Whipped Cream',
            cal: 60,
            default: 1,
            pricePerExtra: 0.3,
          },
        ],
      },
    ],
  },
};
//TODO Spread sheet to JSON
//https://www.freecodecamp.org/news/cjn-google-sheets-as-json-endpoint/

//TODO in the future. ONLINE Exel -> JSON endpoint to app to serer
