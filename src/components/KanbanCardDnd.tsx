import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { KanbanCard, KanbanCardProps } from "~/components/KanbanCard.tsx";

type Props = {
  id: string | number;
} & Pick<KanbanCardProps, "title" | "users">;

export const KanbanCardDnd = ({ title, users, id }: Props) => {
  const { listeners, attributes, setNodeRef, transform } = useDraggable({
    id,
  });
  const style = transform
    ? {
        transform: CSS.Translate.toString(transform),
      }
    : undefined;

  return <KanbanCard title={title} users={users} ref={setNodeRef} {...listeners} {...attributes} style={style} />;
};
