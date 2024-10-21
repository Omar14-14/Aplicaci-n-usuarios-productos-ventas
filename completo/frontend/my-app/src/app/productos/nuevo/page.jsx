"use client"
import axios from "axios";
async function guardarProducto(e){
    e.preventDefault();
    console.log("Estas en guardarProducto");
    const url = "http://localhost:3000/a/nuevoProducto";
    const datos = {
        descripcion: document.getElementById("descripcion").value,
        cantidad: document.getElementById("cantidad").value,
        precio: document.getElementById("precio").value
    }

    //console.log(datos);
    
    const respuesta = await axios.post(url, datos);
    window.location.href = "http://localhost:3001/productos/mostrar"
}
export default function nuevoProducto(e){
    return(
        <div className="m-0 row justify-content-center">
            <form onSubmit={guardarProducto} className="col-6 mt-5" action="" method="post">
                <div className="card">
                    <div className="card-header">
                        <h1>Nuevo producto</h1>
                    </div>
                    <div className="card-body">
                        <input placeholder = "Descripcion" className="form-control mb-3" id="descripcion" required autoFocus type="text"/>
                        <input placeholder = "Cantidad" className="form-control mb-3" id="cantidad" required  type="text"/>
                        <input placeholder = "Precio" className="form-control mb-3" id="precio" required  type="text"/>
                    </div>
                    <div className="card-footer">
                        <button type = "submit" className="btn btn-primary">
                            Guardar nuevo producto
                        </button>
                        </div>
                </div>
            </form>
            
        </div>
    )
}