
import { NewTask } from "./components/NewTask";
import { TaskPageNavigationBar } from "./components/TaskPageNavigationBar";
import { Route, Switch, Redirect } from "react-router-dom";
import * as Routes from "../../Routes";
import { MoreTaskCrudOperations } from "./components/MoreTaskCrudOperations";

export const TaskPage = () => {
    return (
        <div>
            <TaskPageNavigationBar />
            <Switch>
                <Route path={`${Routes.TASKS}:id`}>
                    <MoreTaskCrudOperations/>
                </Route>
            </Switch>
        </div>
    );
}