// 리액트를 사용한 코드
// 컴포넌트가 반환하는 코드는 선언형으로 작성되기 때문에 리액트는 돔 환경 뿐만 아니라 모바일 네이티브의 UI도 표현할 수 있다. 
import React, { useState } from "react";

function MyComponent() {
    const [desc, setDesc] = useState("");
    const [currentId, setCurrentId] = useState(1);
    const [todoList, setTodoList] = useState([]);
    
    function onAdd() {
        const todo  = { id: currentId, desc };
        setCurrentId(currentId + 1);
        setTodoList([...todoList, todo]);
    }
    
    function onDelete(e) {
        const id = Number(e.target.dataset.id);
        const newTodoList = todoList.filter(todo => todo.id !== id);
        setTodoList(newTodoList);
    }

    function onSaveToServer() {

    }

    return (
        <div>
            <h3>할 일 목록</h3>
            <ul>
                {todoList.map(todo => (
                    <li key={todo.id}>
                        <span>{todo.desc}</span>
                        <button data-id={todo.id} onClick={onDelete}>
                            삭제
                        </button>
                    </li>
                ))}
            </ul>
            <input type="text" value={desc}
                   onChange={e => setDesc(e.target.value)} />
            <button onClick={onAdd}>추가</button>
            <button onClick={onSaveToServer}>서버에 저장</button>
        </div>
    )
}