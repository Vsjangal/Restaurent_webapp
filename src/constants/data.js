import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Michelin Stars",
    subtitle:
      "Top honors for exceptional dining experiences, awarded by the Michelin Guide.",
  },
  {
    imgUrl: images.award01,
    title: "James Beard Awards",
    subtitle:
      "Prestigious recognition for outstanding chefs, restaurants, and culinary professionals.",
  },
  {
    imgUrl: images.award05,
    title: "AAA Diamond Ratings",
    subtitle:
      "Awards for restaurants meeting high standards of service and quality, recognized by the Indian Automobile Association.",
  },
  {
    imgUrl: images.award03,
    title: "TripAdvisor Certificates of Excellence",
    subtitle:
      "Recognition for consistently excellent reviews and ratings from travelers on TripAdvisor.",
  },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default { wines, cocktails, awards };
