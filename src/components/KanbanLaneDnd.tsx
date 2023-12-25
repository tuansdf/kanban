import { useDroppable } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { KanbanCardDnd } from "~/components/KanbanCardDnd.tsx";
import { KanbanLane, KanbanLaneProps } from "~/components/KanbanLane.tsx";
import { Card } from "~/types/kanban-types.ts";

type Props = {
  id: string | number;
  cards: Card[];
} & Pick<KanbanLaneProps, "title">;

export const KanbanLaneDnd = ({ id, title, cards }: Props) => {
  const {
    setNodeRef: setDraggableNodeRef,
    listeners,
    attributes,
    transform,
    transition,
  } = useSortable({
    id,
  });
  const { setNodeRef: setDroppableNodeRef } = useDroppable({
    id,
  });

  const style = transform
    ? {
        transform: CSS.Translate.toString(transform),
        transition,
      }
    : undefined;

  return (
    <KanbanLane
      title={title}
      {...listeners}
      {...attributes}
      style={style}
      ref={setDraggableNodeRef}
      cardsRef={setDroppableNodeRef}
    >
      {cards?.map((card) => {
        return <KanbanCardDnd key={card.id} id={card.id} title={card.title} users={card.users} />;
      })}
    </KanbanLane>
  );
};
