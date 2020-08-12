import React from 'react';

interface ToDoList {
  todo: string;
  key: number;
}

interface Props {
  toDos: Array<ToDoList>;
  removeTodo: (todo: number) => void;
}

const Display: React.FC<Props> = ({ toDos, removeTodo }) => {
  return (
    <div>
      {toDos.map((todo) => (
        <div key={todo.key} onClick={() => removeTodo(todo.key)}>
          {todo.todo}
        </div>
      ))}
    </div>
  );
};

export default Display;
