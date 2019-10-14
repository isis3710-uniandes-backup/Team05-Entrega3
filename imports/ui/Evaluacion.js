import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import Evaluaciones from "../api/evaluaciones";
import Categoria from "../ui/Categoria";

class Evaluacion extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="host">
        <Categoria />
      </div>
    );
  }

}




export default withTracker(() => {
  return {
    categorias: Evaluaciones.find().fetch()
  };
})(Evaluacion);