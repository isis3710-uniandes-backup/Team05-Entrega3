import React, {Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import Evaluaciones from "../api/evaluaciones";

class Evaluacion extends Component {
    constructor(props) {
        super(props);
    }
}


export default withTracker(() => {
    return {
      categorias: Evaluaciones.find().fetch()
    };
  })(Evaluacion);