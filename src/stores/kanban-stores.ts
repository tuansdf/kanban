import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { lanes, lanes as initialLanes } from "~/data/kanban-data.ts";
import { Card, Lane } from "~/types/kanban-types.ts";

type CardStore = {
  lanes: Lane[];
  setLanes: (l: Lane[]) => void;
  setCards: (laneId: string | number, c: Card[]) => void;
};

export const useCardStore = create<CardStore>()(
  immer((set) => {
    return {
      lanes: initialLanes,
      setLanes: (lanes) => {
        set(() => ({ lanes }));
      },
      setCards: (laneId, cards) => {
        const newLanes = lanes.map((lane) => {
          if (lane.id === laneId) {
            return { ...lane, cards };
          }
          return lane;
        });
        console.log({ newLanes });
        set(() => ({
          lanes: newLanes,
        }));
      },
    };
  }),
);
