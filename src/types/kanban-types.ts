export type Card = {
  id: number | string;
  title: string;
  users: string[];
};

export type Lane = {
  id: number | string;
  title: string;
  cards: Card[];
};
