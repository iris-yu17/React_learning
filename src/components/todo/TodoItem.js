// ------拆分與組合-------  //
import React from "react";

function TodoItem(props) {
  
  // 解構賦值的語法，先把要用的變數值從props解出來
  const {
    text,
    completed,
    completedMethod,
    handleDelete,
    id123,
    editedToggleMethod,
  } = props;
  return (
    <>
      <li>
        {/* 直接用傳過來的function completedMethod */}
        <input type="checkbox" checked={completed} onChange={completedMethod} />

        {/* 用completed來判斷是否要有刪除線，true則要有 */}
        {completed ? <del>{text}</del> : text}

        <button onClick={editedToggleMethod}>編輯</button>

        {/* 不直接傳function,把handleDelete和item.id個別傳過來，再放在函式裡 */}
        <button onClick={() => handleDelete(id123)}>刪除</button>
      </li>
    </>
  );
}

export default TodoItem;
