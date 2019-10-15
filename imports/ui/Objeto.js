import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import { toast } from "react-toastify";
import objetos from "../api/objetos";

class Objeto extends Component{
    
    state = {
        objetos : this.handleObjetos()
    }

    handleObjetos(){
        let objetoAntes = this.props.objetos;
        let objetoReturn = []
        objetoAntes.forEach(element => {
            if(element._idCategoria=== this.props.idCategoria){
                objetoReturn.push(element);
            }
        });
        return objetoReturn;
    }

    handleNumber(x,i){
        var newObjeto = this.state.objetos[i];
        newObjeto.cantidad = x.target.value;
        this.setState(this.state.objetos[i] = newObjeto);
        
    }
    handleSubmit(objetoNuevo){
        var obj = objetoNuevo;
        var x = this.props._idReporte;
        obj._idReporte = x;
        obj._idCategoria = 0;
        delete obj["_id"];
        objetos.insert(obj);
        toast.success('Agregaste un uso de '+ objetoNuevo.cantidad + " " + objetoNuevo.unidad + " de " + objetoNuevo.nombre);
    }
    render(){
        {this.handleObjetos()}
        return (
           <div className="row">
               {this.state.objetos.map((obj,i)=>{
                   return(
                    <div key={i} className="card" style={{ width: "22rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">{obj.nombre}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Peso: {obj.peso}</h6>
                            <p className="card-text">{obj.descripcion}</p>
                            <input id="quantity" type="number" name="quantity" min="1" value={this.state.objetos[i].cantidad} onChange={(e) => {this.handleNumber(e,i)}}/>
                            <label htmlFor="quantity">{obj.unidad}</label>
                            <button className="but-solid" onClick={()=> {this.handleSubmit(this.state.objetos[i])}} style={{ marginTop: "3%"}}>Agregar</button>
                        </div>
                    </div>
                   );
               })}
           </div>
        );
    }
}



export default withTracker(() => {
    return {
    };
})(Objeto);

