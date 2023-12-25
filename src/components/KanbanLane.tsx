import { ComponentProps, forwardRef, ReactNode } from "react";
import classes from "./kanban-lane.module.scss";

export type KanbanLaneProps = {
  title: ReactNode;
  cardsRef?: any;
} & Omit<ComponentProps<"div">, "title">;

export const KanbanLane = forwardRef<HTMLDivElement, KanbanLaneProps>(
  ({ title, children, cardsRef, ...restProps }, ref) => {
    return (
      <div ref={ref} className={classes["container"]} {...restProps}>
        <h2 className={classes["title"]}>{title}</h2>
        <div className={classes["cards"]} ref={cardsRef}>
          {children}
        </div>
      </div>
    );
  },
);
