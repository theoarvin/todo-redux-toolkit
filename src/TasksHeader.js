import { useSelector } from "react-redux";

const TasksHeader = () => {
  // useSelector() permet de récupérer une informations dans Redux (les tâches par ex)
  const tasks = useSelector((state) => state.todo);
  const undoneTasks = tasks.filter((t) => t.done === false);

  return (
    <header>
      <h1>React Todo List</h1>
      <p>
        Tâches à faire : <strong>{undoneTasks.length}</strong>
      </p>
    </header>
  );
};

export default TasksHeader;
