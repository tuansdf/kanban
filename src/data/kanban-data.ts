import { Lane } from "~/types/kanban-types.ts";

export const lanes: Lane[] = [
  {
    id: "LANE1",
    title: "To do",
    cards: [
      {
        id: "LAUN",
        title: "Do the laundry",
        users: ["H", "T"],
      },
      {
        id: "PANT",
        title: "Buy a new pair of pant",
        users: ["H", "T"],
      },
      {
        id: "BED",
        title: "Make the bed",
        users: ["H"],
      },
    ],
  },
  {
    id: "LANE2",
    title: "Doing",
    cards: [
      {
        id: "LAUN1",
        title: "Do the laundry",
        users: ["H", "T"],
      },
      {
        id: "PANT1",
        title: "Buy a new pair of pant kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk",
        users: ["H", "T"],
      },
      {
        id: "BED1",
        title: "Make the bed",
        users: ["H"],
      },
      {
        id: "HOME1",
        title: "Do homework",
        users: ["Y", "U", "Y", "U", "Y", "U"],
      },
    ],
  },
  {
    id: "LANE3",
    title: "Done",
    cards: [
      {
        id: "LAUN2",
        title: "Do the laundry",
        users: ["H", "T"],
      },
      {
        id: "PANT2",
        title: "Buy a new pair of pant",
        users: ["H", "T"],
      },
    ],
  },
];

// export const cards: Card[] = [
//   {
//     id: "LAUN",
//     title: "Do the laundry",
//     users: ["H", "T"],
//     lane: "To do",
//   },
//   {
//     id: "PANT",
//     title: "Buy a new pair of pant",
//     users: ["H", "T"],
//     lane: "To do",
//   },
//   {
//     id: "BED",
//     title: "Make the bed",
//     users: ["H"],
//     lane: "To do",
//   },
//   {
//     id: "LAUN1",
//     title: "Do the laundry",
//     users: ["H", "T"],
//     lane: "To do",
//   },
//   {
//     id: "PANT1",
//     title: "Buy a new pair of pant kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk",
//     users: ["H", "T"],
//     lane: "Doing",
//   },
//   {
//     id: "BED1",
//     title: "Make the bed",
//     users: ["H"],
//     lane: "Doing",
//   },
//   {
//     id: "HOME1",
//     title: "Do homework",
//     users: ["Y", "U", "Y", "U", "Y", "U"],
//     lane: "Doing",
//   },
//   {
//     id: "LAUN2",
//     title: "Do the laundry",
//     users: ["H", "T"],
//     lane: "Done",
//   },
//   {
//     id: "PANT2",
//     title: "Buy a new pair of pant",
//     users: ["H", "T"],
//     lane: "Done",
//   },
// ];
