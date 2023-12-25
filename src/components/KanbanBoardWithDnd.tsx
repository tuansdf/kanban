import { closestCorners, DndContext, DragEndEvent } from "@dnd-kit/core";
import { horizontalListSortingStrategy, SortableContext } from "@dnd-kit/sortable";
import { KanbanLaneDnd } from "~/components/KanbanLaneDnd.tsx";
import { useCardStore } from "~/stores/kanban-stores.ts";
import { ArrayUtils } from "~/utils/array-utils.ts";

export const KanbanBoardWithDnd = () => {
  const { lanes, setLanes } = useCardStore();

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    console.log({event})

    if (active.id !== over?.id) {
      const oldIndex = lanes.findIndex((lane) => lane.id === active.id);
      const newIndex = lanes.findIndex((lane) => lane.id === over?.id);
      setLanes(ArrayUtils.toMove(lanes, oldIndex, newIndex));
    }
  };

  return (
    <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
      <SortableContext items={lanes} strategy={horizontalListSortingStrategy}>
        {lanes.map((lane) => {
          if (!lane) return null;
          return <KanbanLaneDnd key={lane.id} id={lane.id} title={lane.title} cards={lane.cards} />;
        })}
      </SortableContext>
    </DndContext>
  );
};
