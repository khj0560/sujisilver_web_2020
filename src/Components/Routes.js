
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Main from "../Routes/Main";
import Intro from "../Routes/Intro";
import DayNightCare from "../Routes/DayNightCare";
import NursingHome from "../Routes/NursingHome";
import VisitCare from "../Routes/VisitCare";
import Counsel from "../Routes/Counsel";

const AppRouter = () => {
    return (
        <Switch>
            {/* <Route exact={true} path="/" component={Main} /> */}
            <Route path="/intro" component={Intro} />
            <Route path="/daynightcare" component={DayNightCare} />
            <Route path="/nursinghome" component={NursingHome} />
            <Route path="/visitcare" component={VisitCare} />
            <Route path="/counsel" component={Counsel} />
        </Switch>
    )
}

export default AppRouter;