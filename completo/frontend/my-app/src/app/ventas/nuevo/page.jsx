"use client"
import axios from "axios";
async function guardarVenta(e){
    e.preventDefault();
    console.log("Estas en guardarProducto");
    const url = "http://localhost:3000/b/nuevaVenta";
    const datos = {
        estatus: "vendido",
        fecha: document.getElementById("fecha").value,
        hora: document.getElementById("hora").value,
        idProducto: document.getElementById("idProducto").value,
        idUsuario: document.getElementById("idUsuario").value,
    }

    //console.log(datos);
    
    const respuesta = await axios.post(url, datos);
    window.location.href = "http://localhost:3001/ventas/mostrar"
}
export default function nuevaVenta(e){
    return(
        <div className="m-0 row justify-content-center">
            <form onSubmit={guardarVenta} className="col-6 mt-5" action="" method="post">
                <div className="card">
                    <div className="card-header">
                        <h1>Nueva venta</h1>
                    </div>
                    <div className="card-body">
                        <input placeholder = "id Producto" className="form-control mb-3" id="idProducto" required autoFocus type="text"/>
                        <input placeholder = "id Cliente" className="form-control mb-3" id="idUsuario" required  type="text"/>
                        <input placeholder = "Hora de compra" className="form-control mb-3" id="hora" required  type="text"/>
                        <input placeholder = "Fecha de compra" className="form-control mb-3" id="fecha" required  type="text"/>
                    </div>
                    <div className="card-footer">
                        <button type = "submit" className="btn btn-primary">
                            Guardar nuevo venta
                        </button>
                        </div>
                </div>
            </form>
            
        </div>
    )
}