

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
    const [searchText, setSearchText] = useState<string>('');
    const [selectedItem, setSelectedItem] = useState<string>('');

    const handleSearchChange = (value: string) => setSearchText(value);

    const handleItemSelect = async (value: string) => setSelectedItem(value);

    useEffect(() => {
        let url: string = '';
        if (searchText != '')
            url = `${Routes.BASE_URL}/search-title?title=${searchText}&page=0&size=10`;
        else if (selectedItem != '')
            url = `${Routes.BASE_URL}/search-status?status=${selectedItem}&page=0&size=10`;
        else
            url = `${Routes.BASE_URL}?page=0&size=10`;

        fetchTasks(url).catch((error: any) => {
            setIsLoading(false);
            setHttpError(error.message);
        });

    }, [tasks]);

    const fetchTasks = async (url: string) => {

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

    }

    if (httpError) {
        return (
            <div className='container m-5'>
                <p>{httpError}</p>
            </div>
        )
    }

    return (
        <div className='d-flex flex-column min-vh-100'>
            <div style={{ position: 'sticky', top: '19vh', zIndex: 1020 }}>
                <SearchBar onSearchChange={handleSearchChange} onItemSelect={handleItemSelect} />
            </div>
            {
                isLoading ?
                    <SpinnerLoading /> :
                    <>
                        <div className="flex-grow-1 overflow-auto">
                            <div className='p-3'>
                                {
                                    tasks.map((task, index) => <TaskItem task={task} index={index} key={task.id}/>)
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