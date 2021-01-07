import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers';
import thunk from "redux-thunk"; 
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { composeWithDevTools } from "redux-devtools-extension";
import { StoreState } from '../types/index';
const persistConfig = {
    key: "root",
    storage: storage,
    stateReconciler: autoMergeLevel2, // 查看 'Merge Process' 部分的具体情况
  };
   
const myPersistReducer = persistReducer(persistConfig, reducers);
//创建store对象并暴露
const store = createStore(myPersistReducer,composeWithDevTools(applyMiddleware(thunk)));
export const persistor = persistStore(store);

export default store;
// export default function () {
//   const store = createStore<StoreState>(reducers, initState);
//   return store;
// }