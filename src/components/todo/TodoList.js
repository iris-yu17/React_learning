// ------拆分與組合-------  //
import React from "react";
import TodoItem from "./TodoItem";
import TodoItemEditForm from "./TodoItemEditForm";
// import QueueAnim from 'rc-queue-anim';


function TodoList(props) {
  // 解構賦值的語法，先把要用的變數值從props解出來
  const {
    todos,
    handleCompleted,
    handleDelete,
    handleEditedToggle,
    handleEditedSave,
    viewFilter,
  } = props;

  return (
    <>

    {/* // ------加上動畫(使用ant motion的進出場動畫)------ //*/}
    {/* 用<QueueAnim>那串取代<ul> */}
      {/* <QueueAnim component="ul" type={["right", "left"]} leaveReverse> */}
        <ul>
        {/* map使用時通常子元素會要求唯一key值(id值)  */}
        {/* 這裡用id作為key值  */}
        {/* 依照每個項目的completed來控制呈現的樣子  */}
        {/* key要寫在最接近map的子項目，目前是改為TodoItem */}

        {todos.map((item, index) => {
          // 0=all, 1 = (view completed = true), 2=(view completed =false)
          if (viewFilter === 1 && !item.completed) return <></>;

          if (viewFilter === 2 && item.completed) return <></>;

          return item.edited ? (
            <TodoItemEditForm
              key={item.id}
              id={item.id}
              text={item.text}
              handleEditedSave={handleEditedSave}
            />
          ) : (
            <TodoItem
              key={item.id}
              text={item.text}
              completed={item.completed}
              //直接傳function completedMethod過去，也可把handleCompleted和item.id個別傳過去，再放在那邊的函式裡
              completedMethod={() => handleCompleted(item.id)}
              //不直接傳function deleteMethod，把handleDelete和item.id個別傳過去，再放在那邊的函式裡
              id123={item.id}
              handleDelete={handleDelete}
              //   deleteMethod={() => handleDelete(item.id)}
              editedToggleMethod={() => handleEditedToggle(item.id)}
            />
          );
        })}
      {/* </QueueAnim> */}
      </ul>
    </>
  );
}

export default TodoList;
