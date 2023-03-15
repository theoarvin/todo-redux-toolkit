import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./redux";

const TaskForm = (props) => {
  const [value, setValue] = useState();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    console.log(value);
    e.preventDefault();
    dispatch(addTask(value));
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ajouter une tâche"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </form>
  );
};

export default TaskForm;
