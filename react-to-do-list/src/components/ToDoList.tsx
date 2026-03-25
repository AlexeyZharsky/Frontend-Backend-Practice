import { ToDoItem } from "./ToDoItem";

import { IToDo } from "../types/data";

interface IToDoListProps {
    items: IToDo[];
    toggleToDo: (id: number) => void;
    removeToDo: (id: number) => void;
}


export const ToDoList: React.FC<IToDoListProps> = (props) =>{
    const {items, toggleToDo, removeToDo} = props;

    return <ul className="todo-list">
        {
            items.map(item => 
                <ToDoItem 
                    key={item.id} 
                    {...item}
                    toggleToDo={toggleToDo}
                    removeToDo={removeToDo}
                />
            )
        }
    </ul>
}