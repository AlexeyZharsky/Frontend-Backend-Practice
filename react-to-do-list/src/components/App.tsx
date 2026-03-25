import {useState, useEffect, useRef} from 'react';

import {IToDo} from '../types/data';
import {ToDoList} from './ToDoList';

const App: React.FC = () => {
    const [noteValue, setNoteValue] = useState('');
    const [toDos, setToDos] = useState<IToDo[]>([]);

    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setNoteValue(e.target.value);
    }

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if(e.key === 'Enter') addToDo();
    }

    const toggleToDo = (id: number): void => {
        setToDos(toDos.map(item => {
            if(item.id === id) {
                return {...item, isComplited: !item.isComplited}
            }
            return item;
        }));
    }

    const removeToDo = (id: number): void => {
        setToDos(toDos.filter(item => item.id !== id));
    }

    const addToDo = () => {
        if (noteValue) {
            setToDos([...toDos, {
                id: Date.now(),
                note: noteValue,
                isComplited: false
            }])
            setNoteValue('');
        }
    }

    useEffect(() => {
        if(inputRef.current) inputRef.current.focus();
    }, [])

    return <div className="app">
        <div className="input-section">
            <div className="input-group">
                <input type="text" placeholder='Вынести мусор' value={noteValue} onChange={handleChange} onKeyDown={handleKeyDown} ref={inputRef}/>
                <button onClick={addToDo}>Добавить</button>
            </div>
        </div>
        <ToDoList items={toDos} toggleToDo={toggleToDo} removeToDo={removeToDo} />
    </div>
}

export { App }