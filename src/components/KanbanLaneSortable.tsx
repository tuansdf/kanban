import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { KanbanCardSortable } from "~/components/KanbanCardSortable.tsx";
import { KanbanLane, KanbanLaneProps } from "~/components/KanbanLane.tsx";
import { Card } from "~/types/kanban-types.ts";

type Props = {
  id: string;
  cards: Card[];
} & Pick<KanbanLaneProps, "title">;

export const KanbanLaneSortable = ({ id, title, cards }: Props) => {
  const { listeners, attributes, setNodeRef, transform, transition } = useSortable({
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

  return (
    <SortableContext items={cards}>
      <KanbanLane title={title} style={style} ref={setNodeRef} {...listeners} {...attributes}>
        {cards?.map((card) => {
          return <KanbanCardSortable key={card.id} id={card.id} title={card.title} users={card.users} />;
        })}
      </KanbanLane>
    </SortableContext>
  );
};
