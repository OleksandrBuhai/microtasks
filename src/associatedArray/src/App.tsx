import React, {useState} from 'react';
import {v1} from 'uuid';
import './App.css';
import {Todolist} from './Todolist';


export type FilterValuesType = "all" | "active" | "completed";

type todolistsType = {
    id: string,
    title: string,
    filter: FilterValuesType
}


function Tds() {

    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);
    let [filter, setFilter] = useState<FilterValuesType>("all");

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<Array<todolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });


    function removeTask(id: string, tdsId: string) {
        let todolistsTask = tasks[tdsId]
        tasks[tdsId] = todolistsTask.filter(t => t.id != id)
        /*let filteredTasks = tasks.filter(t => t.id != id);*/
        setTasks({...tasks});
    }

    function addTask(title: string, tdsId:string) {
        let task = {id: v1(), title: title, isDone: false};
        let todoListtasks = tasks[tdsId]
        tasks[tdsId]= [task, ...todoListtasks];
        setTasks({...tasks});
    }

    function changeStatus(taskId: string, isDone: boolean,tdsId:string) {
        let todoListtasks = tasks[tdsId]
        let task = todoListtasks.find(t => t.id === taskId);
        if (task) {
            task.isDone = isDone;
        }

        setTasks({...tasks});
    }


    function changeFilter(value: FilterValuesType, tdsId: string) {
        let todolist = todolists.find(t => t.id === tdsId)
        if (todolist) {
            todolist.filter = value
            setTodolists([...todolists])
        }

    }


    return (
        <div className="App">
            {todolists.map(t => {
                let allTasksForToDoList = tasks[t.id]
                let tasksForTodolist = allTasksForToDoList;

                if (t.filter === "active") {
                    tasksForTodolist = tasks[t.id].filter(t => t.isDone === false);
                }
                if (t.filter === "completed") {
                    tasksForTodolist = tasks[t.id].filter(t => t.isDone === true);
                }
                return (
                    <Todolist
                        key={t.id}
                        title="What to learn"
                        tasks={tasksForTodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={filter}
                        id={t.id}/>
                )
            })
            }
        </div>
    );
}

export default Tds;
