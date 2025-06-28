
import { CurrentTask } from "./components/CurrentTask";
import { ModifiableTask } from "./components/ModifiableTask";
import { NewTask } from "./components/NewTask";
import { TaskPageNavigationBar } from "./components/TaskPageNavigationBar";
import { Route, Switch, Redirect } from "react-router-dom";
import * as Routes from "../../Routes";

export const TaskPage = () => {
    return (
        <div>
            <TaskPageNavigationBar />
            <Switch>
                <Route path={Routes.TASK_PAGE} exact>
                    <Redirect to={Routes.NEW_TASK_PAGE} />
                </Route>
                <Route path={Routes.NEW_TASK_PAGE}>
                    <NewTask />
                </Route>
                <Route path={Routes.CURRENT_TASK_PAGE}>
                    <CurrentTask />
                </Route>
                <Route path={Routes.MODIFIABLE_TASK_PAGE}>
                    <ModifiableTask />
                </Route>
            </Switch>
        </div>
    );
}