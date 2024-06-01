import { closestCorners, DndContext, DndContextProps, DragEndEvent, DragOverEvent, DragOverlay } from "@dnd-kit/core";
import { useState } from "react";
import { KanbanCard } from "~/components/KanbanCard.tsx";
import { KanbanLaneSortable } from "~/components/KanbanLaneSortable.tsx";
import { useCardStore } from "~/stores/kanban-stores.ts";

export const KanbanBoardWithSortable = () => {
  const { lanes, setLanes } = useCardStore();
  const [activeId, setActiveId] = useState("");

  const handleDragStart: DndContextProps["onDragStart"] = (event) => {
    const { active } = event;
    const { id } = active;

    setActiveId(String(id));
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    console.log({ dragEnd: event });
    console.log({ from: active.data.current?.type, to: over?.data.current?.type });

    // if (active.id !== over?.id) {
    //   const oldIndex = lanes.findIndex((lane) => lane.id === active.id);
    //   const newIndex = lanes.findIndex((lane) => lane.id === over?.id);
    //   setLanes(ArrayUtils.toMove(lanes, oldIndex, newIndex));
    // }
  };

  const handleDragOver = (event: DragOverEvent) => {
    console.log({ dragOver: event });
  };

  return (
    <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd} onDragOver={handleDragOver}>
      {lanes.map((lane) => {
        if (!lane) return null;
        return <KanbanLaneSortable key={lane.id} id={lane.id} title={lane.title} cards={lane.cards} />;
      })}
      <DragOverlay>{activeId ? <KanbanCard title="Dragging" users={[]} /> : null}</DragOverlay>
    </DndContext>
  );
};
