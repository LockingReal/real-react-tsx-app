import Home from '../pages/home';
import * as routerTypes from './routerTypes';
const publicRoutes:routerTypes.AuthRouteProps[] = [
  {
    path: '/',
    component:Home,
    exact: true,
    params:{
      title:"主页",
      doSaveType:false,
      hide:false
    }
  },
];


export default publicRoutes;