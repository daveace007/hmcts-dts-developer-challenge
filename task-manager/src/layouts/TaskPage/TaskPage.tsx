
import { CurrentTask } from "./components/CurrentTask";
import { ModifiableTask } from "./components/ModifiableTask";
import { NewTask } from "./components/NewTask";
import { TaskPageNavigationBar } from "./components/TaskPageNavigationBar";

export const TaskPage = () => {
    return (
        <div>
            <TaskPageNavigationBar />
            <NewTask />
            <CurrentTask />
            <ModifiableTask />
        </div>
    );
}