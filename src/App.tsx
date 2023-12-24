import { KanbanBoard } from "~/components/KanbanBoard.tsx";
import classes from "./app.module.scss";

function App() {
  return (
    <div className={classes["container"]}>
      <div className={classes["header-container"]}>Kanban</div>

      <div className={classes["body-container"]}>
        <KanbanBoard />
      </div>
    </div>
  );
}

export default App;
