type Product = {
  title: string;
  price: number;
};

const data: Product[] = [
  { title: "Produto X", price: 10 },
  { title: "Produto Y", price: 20 },
  { title: "Produto Z", price: 30 },
];

export const Product = {
  getAll: (): Product[] => {
    return data;
  },
  getFromPriceAfter: (price: number): Product[] => {
    return data.filter((product) => product.price >= price);
  },
};
