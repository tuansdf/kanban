import { KanbanBoardWithDnd } from "~/components/KanbanBoardWithDnd.tsx";
import classes from "./app.module.scss";

function App() {
  return (
    <div className={classes["container"]}>
      <div className={classes["header-container"]}>Kanban</div>

      <div className={classes["body-container"]}>
        <KanbanBoardWithDnd />
      </div>
    </div>
  );
}

export default App;
