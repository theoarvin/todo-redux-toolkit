import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

const TasksList = () => {
  // useSelector() permet de récupérer une informations dans Redux (les tâches par ex)
  const tasks = useSelector((state) => state.todo);
  return (
    <>
      {tasks.map((t) => (
        <TaskItem task={t} key={t.id} />
      ))}
    </>
  );
};

export default TasksList;
