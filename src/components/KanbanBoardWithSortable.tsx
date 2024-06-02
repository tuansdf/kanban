import { closestCorners, DndContext, DndContextProps, DragEndEvent, DragOverEvent, DragOverlay } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { useMemo, useState } from "react";
import { KanbanCard } from "~/components/KanbanCard.tsx";
import { KanbanLane } from "~/components/KanbanLane.tsx";
import { KanbanLaneSortable } from "~/components/KanbanLaneSortable.tsx";
import { useCardStore } from "~/stores/kanban-stores.ts";
import { ArrayUtils } from "~/utils/array-utils.ts";

export const KanbanBoardWithSortable = () => {
  const { lanes, setLanes } = useCardStore();
  const [activeId, setActiveId] = useState<string | undefined | null>("");
  const [activeType, setActiveType] = useState<"card" | "lane" | undefined | null>(null);

  const handleDragStart: DndContextProps["onDragStart"] = (event) => {
    setActiveId(String(event.active.id));
    setActiveType(event.active.data.current?.type);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    console.log({ dragEnd: event });

    if (
      active &&
      over &&
      active.data.current?.type === active.data.current?.type &&
      active.data.current?.type === "lane" &&
      active.id !== over?.id
    ) {
      const oldIndex = lanes.findIndex((lane) => lane.id === active.id);
      const newIndex = lanes.findIndex((lane) => lane.id === over?.id);
      setLanes(ArrayUtils.toMove(lanes, oldIndex, newIndex));
    }
    setActiveId(null);
    setActiveType(null);
  };

  const handleDragOver = (event: DragOverEvent) => {
    console.log({ dragOver: event });
  };

  const activeCard = useMemo(() => {
    if (activeType !== "card") return;
    for (let i = 0; i < lanes.length; i++) {
      const found = lanes[i].cards.find((card) => card.id === activeId);
      if (found) return found;
    }
  }, [activeId, activeType, lanes]);
  const activeLane = useMemo(() => {
    if (activeType !== "lane") return;
    return lanes.find((item) => item.id === activeId);
  }, [activeId, activeType, lanes]);

  return (
    <DndContext
      collisionDetection={closestCorners}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      onDragStart={handleDragStart}
    >
      <SortableContext items={lanes}>
        {lanes.map((lane) => {
          return <KanbanLaneSortable key={lane.id} id={lane.id} title={lane.title} cards={lane.cards} />;
        })}
      </SortableContext>
      <DragOverlay>
        {activeId && activeType === "card" ? (
          <KanbanCard title={activeCard?.title || ""} users={activeCard?.users || []} />
        ) : null}
        {activeId && activeType === "lane" ? <KanbanLane title={activeLane?.title || ""} /> : null}
      </DragOverlay>
    </DndContext>
  );
};
