//State of task list - default is empty
const [tasks, setTasks] = useState([])

//Add to task list
setTasks([...tasks, {id: Date.now(), name: task, completed: false}]);

//Delete from Task list
setTasks(tasks.filter(task => task.id !== id));

//Toggle an item
setTasks(tasks.map(task => task.id === id ? {...task, completed: !task.completed} : task));