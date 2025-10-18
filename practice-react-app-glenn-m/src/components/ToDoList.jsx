const ToDoList = () => {
  const innerToDo = ["Learn React", "Build a project", "Read documentation"];

  return (
    <ul>
      <li>{innerToDo[0]}</li>
      <li>{innerToDo[1]}</li>
      <li>{innerToDo[2]}</li>
    </ul>
  );
};

export default ToDoList;
