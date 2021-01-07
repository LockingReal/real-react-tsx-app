export interface AuthRouteProps{
    path:string,
    component:any,
    exact?:boolean,
    params:{
        title?:string,
        doSaveType?:boolean,
        hide:boolean
    }
}
export interface structureRouteProps{
    path:string,
    component:any,
    [key: string]: any;
}