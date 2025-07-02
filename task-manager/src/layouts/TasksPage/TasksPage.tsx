

import { SearchBar } from "./components/SearchBar";
import { TaskItem } from "./components/TaskItem";
import { PaginationBar } from "./components/PaginationBar";
import { useState, useEffect } from "react";
import TaskModel from "../../model/TaskModel";
import * as Routes from "../../Routes"
import { SpinnerLoading } from "../utils/SpinnerLoading";

export const TasksPage = () => {

    const [tasks, setTasks] = useState<TaskModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    useEffect(() => {
        const fetchTasks = async () => {
            const url: string = `${Routes.BASE_URL}?page=0&size=10`;

            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("Something went wrong");
            }

            const responseJson = await response.json();

            const responseData = responseJson.content;

            const loadedTasks: TaskModel[] = [];


            for (const key in responseData) {
                loadedTasks.push(
                    {
                        id: responseData[key].id,
                        title: responseData[key].title,
                        description: responseData[key].description,
                        status: responseData[key].status,
                        dueDateTime: responseData[key].dueDateTime
                    }
                )
            }
            setTasks(loadedTasks);
            setIsLoading(false);
            console.log(loadedTasks);

        }

        fetchTasks().catch((error: any) => {
            setIsLoading(false);
            setHttpError(error.message);
        });

    }, []);

    if (httpError) {
        return (
            <div className='container m-5'>
                <p>{httpError}</p>
            </div>
        )
    }

    return (
        <div className='d-flex flex-column h-100'>
            <div style={{ position: 'sticky', top: '19vh', zIndex: 1020 }}>
                <SearchBar />
            </div>
            {
                isLoading ?
                    <SpinnerLoading /> :
                    <>
                        <div className="flex-grow-1 overflow-auto">
                            <div className='p-3'>
                                {
                                    tasks.map(task => <TaskItem task={task} key={task.id} />)
                                }
                            </div>
                        </div>
                        <div className='d-flex w-100 p-3 bg-dark align-items-center justify-content-center' style={{ position: 'sticky', bottom: '6vh', zIndex: 1020 }}>
                            <PaginationBar />
                        </div>
                    </>
            }
        </div>
    );
}