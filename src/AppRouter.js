import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Portfolio from './routers/Portfolio'




const AppRouter = () => {
    return <BrowserRouter>
        <div>
        <Switch>
        <Route path="/" component={Portfolio} exact={true}/>
        
        </Switch>
        </div>
        </BrowserRouter>
    
}

export default AppRouter;