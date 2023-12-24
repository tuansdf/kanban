import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { ReactNode } from "react";
import classes from "./kanban-card.module.scss";

type Props = {
  id: string | number;
  title: string;
  users: ReactNode;
};

export const KanbanCard = ({ title, users, id }: Props) => {
  const { listeners, attributes, setNodeRef, transform, transition } = useSortable({
    id,
  });
  const style = transform
    ? {
        transform: CSS.Translate.toString(transform),
        transition,
      }
    : undefined;

  return (
    <div className={classes["container"]} ref={setNodeRef} {...listeners} {...attributes} style={style}>
      <h3 className={classes["title"]}>{title}</h3>

      <div className={classes["footer"]}>{users}</div>
    </div>
  );
};
