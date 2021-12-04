import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

export default function Task(props) {
    return (
      <Draggable draggableId={props.task.id} index={props.index}>
        {provided => (
          <div 
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {props.task.content}
          </div>
        )}
      </Draggable>
    ) 
}
