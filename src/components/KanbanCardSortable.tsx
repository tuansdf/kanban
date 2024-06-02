import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { KanbanCard, KanbanCardProps } from "~/components/KanbanCard.tsx";

type Props = {
  id: string | number;
} & Pick<KanbanCardProps, "title" | "users">;

export const KanbanCardSortable = ({ title, users, id }: Props) => {
  const { listeners, attributes, setNodeRef, transform, transition } = useSortable({
    id,
    data: {
      type: "card",
    },
  });
  const style = transform
    ? {
        transform: CSS.Translate.toString(transform),
        transition,
      }
    : undefined;

  return (
    <div ref={setNodeRef} {...listeners} {...attributes}>
      <KanbanCard title={title} users={users} style={style} />
    </div>
  );
};
