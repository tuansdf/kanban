import { Avatar } from "antd";
import { ComponentProps, forwardRef } from "react";
import classes from "./kanban-card.module.scss";

export type KanbanCardProps = {
  title: string;
  users: string[];
} & ComponentProps<"div">;

export const KanbanCard = forwardRef<HTMLDivElement, KanbanCardProps>(({ title, users, ...restProps }, ref) => {
  return (
    <div className={classes["container"]} ref={ref} {...restProps}>
      <h3 className={classes["title"]}>{title}</h3>

      <div className={classes["footer"]}>
        {
          <Avatar.Group>
            {users.map((name, index) => {
              return <Avatar key={index}>{name}</Avatar>;
            })}
          </Avatar.Group>
        }
      </div>
    </div>
  );
});
