import { Button } from '@zendeskgarden/react-buttons';
import { UnorderedList, XL } from '@zendeskgarden/react-typography';
import React, { ChangeEventHandler, EventHandler, KeyboardEventHandler, useState } from 'react';

type TodoItem = {
  name: string
}

type RemovedTodoItem = {
  name: string,
  index: number
}

export const TodoList: React.FC = () => {
  const [currentValue, setCurrentValue] = useState<string>('');
  const [todoList, setTodoList] = useState<TodoItem[]>([]);
  const [removalList, setRemovalList] = useState<RemovedTodoItem[]>([]);

  const updateCurrentValue: ChangeEventHandler<HTMLInputElement> = (event) => {
    setCurrentValue(event.target.value);
  }

  const addToList:KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === 'Enter' && !!currentValue) {
      todoList.push({
        name: currentValue
      })
      setTodoList(todoList);
      setCurrentValue('');
    }
  }

  const removeItem = (index:number) => {
    const removedItem = todoList[index];
    setTodoList(todoList.filter((_, i) => i !== index));
    removalList.push({
      name: removedItem.name,
      index
    })
    setRemovalList(removalList);
  }

  const undoRemoval = () => {
    const undoItem = removalList.pop();
    if (undoItem) {
      setRemovalList(removalList);
      setTodoList([...todoList.slice(0, undoItem.index), {name: undoItem.name}, ...todoList.slice(undoItem.index)])
    }
  }

  return (
    <div>
      <XL>Todo List</XL>
      <UnorderedList>
        {
          todoList.map((item, index) => 
            (<UnorderedList.Item key={index}>
              <span>{item.name}</span>
              <button onClick={() => removeItem(index)}>x</button>
            </UnorderedList.Item>)
          )
        }
      </UnorderedList>
      <button onClick={undoRemoval} disabled={removalList.length === 0}>Undo</button>
      <div>
        <input value={currentValue} onKeyDown={addToList} onChange={updateCurrentValue}/>
      </div>
    </div>
  )
}
