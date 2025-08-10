

import { SearchBar } from "./components/SearchBar";
import { TaskItem } from "./components/TaskItem";
import { PageInfo, PaginationBar } from "../utils/PaginationBar";
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
    const [pageInfo, setPageInfo] = useState<PageInfo>(
        {
            pageNumber: 0, totalPages: 0, size: 10
        }
    );

    const handleSearchChange = (value: string) => setSearchText(value);

    const handleItemSelect = (value: string) => setSelectedItem(value);

    const handlePaginationItemClick = (info: PageInfo) => {
        if (!isLoading) {
            setPageInfo(info);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            let url: string = prepareUrl();
            fetchTasks(url).catch((error: any) => {
                setIsLoading(false);
                setHttpError(error.message);
            });
        }
        fetchData();

    }, [searchText, selectedItem, pageInfo.pageNumber]);


    const prepareUrl = () => {
        if (searchText !== '')
            return `${Routes.BASE_URL}/search-title?title=${searchText}&page=${pageInfo.pageNumber}&size=${pageInfo.size}`;
        else if (selectedItem !== '' && selectedItem !== 'All')
            return `${Routes.BASE_URL}/search-status?status=${selectedItem}&page=${pageInfo.pageNumber}&size=${pageInfo.size}`;
        else
            return `${Routes.BASE_URL}?&page=${pageInfo.pageNumber}&size=${pageInfo.size}`;
    }

    const fetchTasks = async (url: string) => {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Something went wrong");
        }

        const responseJson = await response.json();

        const responseData = responseJson.content;

        const loadedTasks: TaskModel[] = [];

        const loadedPageInfo: PageInfo = {
            pageNumber: responseJson.number,
            totalPages: responseJson.totalPages,
            size: responseJson.size
        }

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
        setPageInfo(loadedPageInfo);
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
                                    (tasks.length < 1) ?
                                        <h1 className='text-center'>No Content!</h1> :
                                        tasks.map((task, index) => <TaskItem task={task} index={index} key={task.id} />)
                                }
                            </div>
                        </div>
                        <div className='d-flex w-100 p-3 bg-dark align-items-center justify-content-center' style={{ position: 'sticky', bottom: '6vh', zIndex: 1020 }}>
                            {
                                (pageInfo.totalPages > 1) &&
                                <PaginationBar pageInfo={pageInfo} onPageInfoChange={handlePaginationItemClick} isLoading={isLoading} />
                            }
                        </div>
                    </>
            }
        </div>
    );
}