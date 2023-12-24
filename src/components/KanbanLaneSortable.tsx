import { closestCenter, DndContext, DragEndEvent } from "@dnd-kit/core";
import { SortableContext, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { KanbanCardSortable } from "~/components/KanbanCardSortable.tsx";
import { KanbanLane, KanbanLaneProps } from "~/components/KanbanLane.tsx";
import { useCardStore } from "~/stores/kanban-stores.ts";
import { Card } from "~/types/kanban-types.ts";
import { ArrayUtils } from "~/utils/array-utils.ts";

type Props = {
  id: string | number;
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
        <KanbanLane title={title} {...listeners} {...attributes} style={style} ref={setDraggableNodeRef}>
          {cards?.map((card) => {
            return <KanbanCardSortable key={card.id} id={card.id} title={card.title} users={card.users} />;
          })}
        </KanbanLane>
      </SortableContext>
    </DndContext>
  );
};
