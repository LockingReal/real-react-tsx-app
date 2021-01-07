import {HashRouter,Switch} from 'react-router-dom';
import AuthRouter from './authRouter';
import publicRoutes from './routerConfig';
const BasicRoute = () => (
    <HashRouter>
        <Switch>
            {publicRoutes.map(
                ({path, component, ...routes}:any) => 
                <AuthRouter key={path} path={path} component={component} {...routes}/>
            )}
        </Switch>
    </HashRouter>
);

export default BasicRoute;