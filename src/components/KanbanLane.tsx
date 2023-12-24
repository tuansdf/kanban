import { ComponentProps, forwardRef } from "react";
import classes from "./kanban-lane.module.scss";

export type KanbanLaneProps = {
  title: string;
} & ComponentProps<"div">;

export const KanbanLane = forwardRef<HTMLDivElement, KanbanLaneProps>(({ title, children, ...restProps }, ref) => {
  return (
    <div ref={ref} className={classes["container"]} {...restProps}>
      <h2 className={classes["title"]}>{title}</h2>
      <div className={classes["cards"]}>{children}</div>
    </div>
  );
});
