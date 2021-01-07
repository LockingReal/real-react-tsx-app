import { SET_DATA} from "./action-type";
import initState from './initState';
const defaultState = initState;
console.log(defaultState);
export default (state=defaultState,action:any)=>{
    switch(action.type){
        case SET_DATA:
            return {
                ...state,
                demonum:action.data
            }
            break;
        default:
            return {
                ...state
            }
        break;
    }
}