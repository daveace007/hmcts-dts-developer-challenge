

import { SearchBar } from "./components/SearchBar";
import { TaskItem } from "./components/TaskItem";
import { PaginationBar } from "./components/PaginationBar";

export const TasksPage = () => {
    return (
        <div className='d-flex flex-column h-100'>
            <div style={{position:'sticky', top:'19vh', zIndex:1020}}>
                <SearchBar />
            </div>
            <div className="flex-grow-1 overflow-auto">
                <div className='p-3'>
                    <TaskItem />
                    <TaskItem />
                    <TaskItem />
                    <TaskItem />
                    <TaskItem />
                    <TaskItem />
                    <TaskItem />
                    <TaskItem />
                    <TaskItem />
                    <TaskItem />
                    <TaskItem />
                    <TaskItem />
                    <TaskItem />
                    <TaskItem />
                    <TaskItem />
                    <TaskItem />
                </div>
            </div>
             <div className='d-flex w-100 p-3 bg-dark align-items-center justify-content-center' style={{position:'sticky', bottom:'6vh',zIndex:1020}}>
                <PaginationBar/>
             </div>
        </div>
    );
}