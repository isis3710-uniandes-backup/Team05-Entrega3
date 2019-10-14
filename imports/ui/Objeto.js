import React, {Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import Objetos from "../api/objsetos";

class Objeto extends Component{
    
    render(){
        return (
            <div></div>
        );
    }
}

export default withTracker(() =>{
    return {
        objetos: Objetos.find().fetch()
    };
})(Objeto);