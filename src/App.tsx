import React, { useState } from 'react';
import TextField from './components/TextField';
import Display from './components/Display';

interface ToDoList {
  todo: string;
  key: number;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Array<ToDoList>>([]);

  const addToDo = (todo: string) => {
    const currentTodos = [...todos];
    const withNew = [...currentTodos, { todo, key: Number(Date.now()) }];
    setTodos(withNew);
  };

  const removeToDo = (todoKey: number) => {
    const currentTodos = [...todos];
    const withoutNew = currentTodos.filter((todo) => todo.key !== todoKey);
    setTodos(withoutNew);
  };

  return (
    <div className="App">
      <TextField addToDo={addToDo} />
      <Display toDos={todos} removeTodo={removeToDo} />
    </div>
  );
};

export default App;
