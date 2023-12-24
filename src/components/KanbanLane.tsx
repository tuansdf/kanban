import { closestCenter, DndContext, DragEndEvent } from "@dnd-kit/core";
import { SortableContext, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Avatar } from "antd";
import { KanbanCard } from "~/components/KanbanCard.tsx";
import { useCardStore } from "~/stores/kanban-stores.ts";
import { Card } from "~/types/kanban-types.ts";
import { ArrayUtils } from "~/utils/array-utils.ts";
import classes from "./kanban-lane.module.scss";

type Props = {
  id: string | number;
  title: string;
  cards: Card[];
};

export const KanbanLane = ({ id, title, cards }: Props) => {
  const setCards = useCardStore((state) => state.setCards);
  const {
    listeners,
    attributes,
    transform,
    transition,
    setNodeRef: setDraggableNodeRef,
  } = useSortable({
    id,
  });
  const style = transform
    ? {
        transform: CSS.Translate.toString(transform),
        transition,
      }
    : undefined;

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = cards.findIndex((card) => card.id === active.id);
      const newIndex = cards.findIndex((card) => card.id === over?.id);
      setCards(id, ArrayUtils.toMove(cards, oldIndex, newIndex));
    }
  };

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      onDragOver={(e) => {
        console.log({ e });
      }}
    >
      <SortableContext items={cards} strategy={verticalListSortingStrategy}>
        <div ref={setDraggableNodeRef} className={classes["container"]} style={style} {...listeners} {...attributes}>
          <h2 className={classes["title"]}>{title}</h2>
          <div className={classes["cards"]}>
            {cards?.map((card) => {
              return (
                <KanbanCard
                  key={card.id}
                  id={card.id}
                  title={card.title}
                  users={
                    <Avatar.Group>
                      {card.users.map((name, index) => {
                        return <Avatar key={index}>{name}</Avatar>;
                      })}
                    </Avatar.Group>
                  }
                />
              );
            })}
          </div>
        </div>
      </SortableContext>
    </DndContext>
  );
};
