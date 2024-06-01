import { KanbanBoardWithSortable } from "~/components/KanbanBoardWithSortable.tsx";
import classes from "./app.module.scss";

function App() {
  return (
    <div className={classes["container"]}>
      <div className={classes["header-container"]}>Kanban</div>

      <div className={classes["body-container"]}>
        <KanbanBoardWithSortable />
      </div>
    </div>
  );
}

export default App;
