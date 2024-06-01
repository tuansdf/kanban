import { DragEndEvent, DragOverEvent } from "@dnd-kit/core";
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { KanbanCardSortable } from "~/components/KanbanCardSortable.tsx";
import { KanbanLane, KanbanLaneProps } from "~/components/KanbanLane.tsx";
import { useCardStore } from "~/stores/kanban-stores.ts";
import { Card } from "~/types/kanban-types.ts";
import { ArrayUtils } from "~/utils/array-utils.ts";

type Props = {
  id: string;
  cards: Card[];
} & Pick<KanbanLaneProps, "title">;

export const KanbanLaneSortable = ({ id, title, cards }: Props) => {
  const setCards = useCardStore((state) => state.setCards);
  const {
    listeners,
    attributes,
    transform,
    transition,
    setNodeRef: setDraggableNodeRef,
  } = useSortable({
    id,
    data: {
      type: "lane",
    },
  });

  const style = transform
    ? {
        transform: CSS.Translate.toString(transform),
        transition,
      }
    : undefined;

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    console.log({ dragEndCard: event });

    if (active.id !== over?.id) {
      const oldIndex = cards.findIndex((card) => card.id === active.id);
      const newIndex = cards.findIndex((card) => card.id === over?.id);
      setCards(id, ArrayUtils.toMove(cards, oldIndex, newIndex));
    }
  };

  const handleDragOver = (event: DragOverEvent) => {
    console.log({ dragOverCard: event });
  };

  return (
    <SortableContext id={id} items={cards}>
      <KanbanLane
        title={title}
        {...listeners}
        {...attributes}
        style={undefined}
        ref={(e) => {
          setDraggableNodeRef(e);
        }}
      >
        {cards?.map((card) => {
          return <KanbanCardSortable key={card.id} id={card.id} title={card.title} users={card.users} />;
        })}
      </KanbanLane>
    </SortableContext>
  );
};
