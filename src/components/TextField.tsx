import React, { useState } from 'react';

interface Props {
  addToDo: (todo: string) => void;
}

const TextField: React.FC<Props> = ({ addToDo }) => {
  const [currentTodo, setCurrentTodo] = useState('');

  return (
    <div>
      <input
        onChange={(e) => setCurrentTodo(e.target.value)}
        value={currentTodo}
      />
      <button
        onClick={() => {
          addToDo(currentTodo);
          setCurrentTodo('');
        }}
      >
        Add
      </button>
    </div>
  );
};

export default TextField;
