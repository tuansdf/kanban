export type Card = {
  id: string;
  title: string;
  users: string[];
};

export type Lane = {
  id: string;
  title: string;
  cards: Card[];
};
