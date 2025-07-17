import { useEffect, useState } from "react";
import { ModifiableTaskContent } from "./ModifiableTaskContent";
import { ReadOnlyTaskContent } from "./ReadOnlyTaskContent";
import { useParams } from "react-router-dom";
import TaskModel from "../../../model/TaskModel";
import * as Routes from "../../../Routes"
import { NewTask } from "./NewTask";
import { SpinnerLoading } from "../../utils/SpinnerLoading";


export const MoreTaskCrudOperations = () => {

    const { id } = useParams<{ id: string }>();
    const [task, setTask] = useState<TaskModel>();
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    useEffect(() => {

        let url: string = `${Routes.BASE_URL}/${id}`;

        fetchTask(url).catch((error: any) => {
            setIsLoading(false);
            setHttpError(error.message);
        });

    }, [])

    const fetchTask = async (url: string) => {

        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch task");
        const responseData = await response.json();
        const task: TaskModel = responseData
        setTask(task);
        setIsLoading(false);
        console.log(task);
    }

    if (httpError) {
        return (
            <div className='container m-5'>
                <p>{httpError}</p>
            </div>
        )
    }


    return (
        <div className='vw-100 p-3'>
            {isLoading ? <SpinnerLoading /> :
                <>
                    <ul className='nav nav-pills mb-3' id='pills-tab' role='tablist'>
                        <li className='nav-item' role='presentation'>
                            <button
                                className='nav-link active'
                                id='pills-view-task-tab'
                                data-bs-toggle='pill'
                                data-bs-target='#pills-view-task'
                                type='button'
                                role='tab'
                                aria-controls='pills-view-task'
                                aria-selected='true'
                            >
                                View Task
                            </button>
                        </li>
                        <li className='nav-item' role='presentation'>
                            <button
                                className='nav-link'
                                id='pills-modify-task-tab'
                                data-bs-toggle='pill'
                                data-bs-target='#pills-modify-task'
                                type='button'
                                role='tab'
                                aria-controls='pills-modify-task'
                                aria-selected='false'
                            >
                                Modify Task
                            </button>
                        </li>
                    </ul>
                    <div className='tab-content' id='pills-tabContent'>
                        <div
                            className='tab-pane fade show active'
                            id='pills-view-task'
                            role='tabpanel'
                            aria-labelledby='pills-view-task-tab'
                        >
                            {task && <ReadOnlyTaskContent task={task} />}
                        </div>
                        <div
                            className='tab-pane fade'
                            id='pills-modify-task'
                            role='tabpanel'
                            aria-labelledby='pills-modify-task-tab'
                        >
                            {task && <ModifiableTaskContent task={task} />}
                        </div>
                    </div>
                </>}
        </div>
    );

}