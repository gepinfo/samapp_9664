import React,{Suspense,useEffect, useState  } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import routes, {userRoutes} from "./routes";
import Login from "./app/login/login";
import Signup from "./app/signup/signup";
import Template from "./app/template/template";
import { ProtectedRoute } from "./protectedroutes";


const App = () => { 
  const [currentRoutes, setCurrentRoutes] = useState([]);

  useEffect(() => {
    let currentScreens: any = [];
    if (userRoutes) {
      userRoutes.forEach((e1: any) =>
        routes.forEach((e2: any) => {
          if (e1.screenname === e2.path.substring(1)) {
            currentScreens.push(e2);
          }
        })
      );
    }

    setCurrentRoutes(currentScreens);
  }, [userRoutes]);

  const getRoutes = (routes: any[]) => {
    return routes.map((prop, key) => {
      console.log("I am from routes----------->>>>", prop);
      let Component = prop.component;
        return (
          <Route
            exact
            path={prop.path}
            key={key}
            render={(props:any) => <Component {...prop} {...props} />}
          />
        );
    });
  };
  return (
    
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
        <Switch>
           <Route
            exact
            path={"/"}
            key={0}
            render={(props: any) => <Template {...props} />}
          />
          <Route
            exact
            path={"/login"}
            key={1}
            render={(props: any) => <Login {...props} />}
          />
          <Route
            exact
            path={"/signup"}
            key={2}
            render={(props: any) => <Signup {...props} />}
          />
        
          <ProtectedRoute>{getRoutes(currentRoutes)}</ProtectedRoute>
        </Switch>
        </Suspense>

      </BrowserRouter>
      
  );
};
export default App;
