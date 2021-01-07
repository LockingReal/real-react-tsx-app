import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from '../pages/home';
const backUrl:string = "/home";
interface AuthRouteProps{
    path:string,
    component:any,
    exact?:boolean,
    params:{
        title?:string,
        doSaveType?:boolean,
        hide:boolean
    }
}

class AuthRoute extends React.Component {
    constructor(props:AuthRouteProps){
        super(props);
    }
    render(){
        let props = this.props;
        let token = "111";
        return(
            token?<Route {...props}></Route>:<Route exact to={backUrl} component={Home}></Route>
        )
    }
}

export default AuthRoute;