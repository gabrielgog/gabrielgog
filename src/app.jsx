import React from "react";
import {Switch, Route} from "react-router-dom"


import Home from "./home"

import About from "./about"

function home(){


return (




     <Switch> 
    <Route path="/" component={Home} exact/>

<Route path="/about" component={About} />



</Switch> 









 
)


}


 

export default home;
