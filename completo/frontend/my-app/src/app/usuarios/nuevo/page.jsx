"use client"
import axios from "axios";
async function guardarUsuario(e){
    e.preventDefault();
    console.log("Estas en guardarUsuario");
    const url = "http://localhost:3000/nuevoUsuario";
    const datos = {
        nombre: document.getElementById("nombre").value,
        usuario: document.getElementById("usuario").value,
        password: document.getElementById("password").value
    }

    //console.log(datos);
    
    const respuesta = await axios.post(url, datos);
    window.location.href = "http://localhost:3001/usuarios/mostrar"
}
export default function NuevoUsuario(e){
    return(
        <div className="m-0 row justify-content-center">
            <form onSubmit={guardarUsuario} className="col-6 mt-5" action="" method="post">
                <div className="card">
                    <div className="card-header">
                        <h1>Nuevo usuario</h1>
                    </div>
                    <div className="card-body">
                        <input placeholder = "Nombre" className="form-control mb-3" id="nombre" required autoFocus type="text"/>
                        <input placeholder = "Usuario" className="form-control mb-3" id="usuario" required  type="text"/>
                        <input placeholder = "Password" className="form-control mb-3" id="password" required  type="text"/>
                    </div>
                    <div className="card-footer">
                        <button type = "submit" className="btn btn-primary">
                            Guardar nuevo usuario
                        </button>
                        </div>
                </div>
            </form>
            
        </div>
    )
}