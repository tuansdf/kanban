import { closestCenter, DndContext, DragEndEvent } from "@dnd-kit/core";
import { restrictToHorizontalAxis } from "@dnd-kit/modifiers";
import { horizontalListSortingStrategy, SortableContext } from "@dnd-kit/sortable";
import { KanbanLaneSortable } from "~/components/KanbanLaneSortable.tsx";
import { useCardStore } from "~/stores/kanban-stores.ts";
import { ArrayUtils } from "~/utils/array-utils.ts";

export const KanbanBoardWithSortable = () => {
  const { lanes, setLanes } = useCardStore();

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = lanes.findIndex((lane) => lane.id === active.id);
      const newIndex = lanes.findIndex((lane) => lane.id === over?.id);
      setLanes(ArrayUtils.toMove(lanes, oldIndex, newIndex));
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd} modifiers={[restrictToHorizontalAxis]}>
      <SortableContext items={lanes} strategy={horizontalListSortingStrategy}>
        {lanes.map((lane) => {
          if (!lane) return null;
          return <KanbanLaneSortable key={lane.id} id={lane.id} title={lane.title} cards={lane.cards} />;
        })}
      </SortableContext>
    </DndContext>
  );
};
