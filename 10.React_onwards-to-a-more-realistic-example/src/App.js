import React, { useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";

import useHttp from "./hooks/use-http";

function App() {

  const [tasks, setTasks] = useState([]);

  const transformTasks = (tasksObj) => {
    const loadedTasks = [];
// console.log(tasksObj)
    for (const taskKey in tasksObj) {
      loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
    }
// console.log(loadedTasks)
    setTasks(loadedTasks);
  };

  // console.log(tasks)

  const {isLoading,error,sendRequest: fetchTasks} = useHttp(
    {
      url: process.env.REACT_APP_URL,
    },
    transformTasks
  );

  // console.log(fetchTasks);

  useEffect(() => {
    fetchTasks();
  }, []);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
