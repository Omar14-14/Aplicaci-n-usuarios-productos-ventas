"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function EditarUsuario({ params }) {
    const [nombre, setNombre] = useState("");
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const { id } = params; // Obtén el id desde los params

    useEffect(() => {
        async function fetchUserData() {
            if (id) {
                try {
                    const response = await axios.get(`http://localhost:3000/usuarios/${id}`);
                    const userData = response.data;
                    setNombre(userData.nombre);
                    setUsuario(userData.usuario);
                    setPassword(userData.password || "");
                } catch (error) {
                    console.error("Error al cargar los datos del usuario:", error);
                }
            }
        }
        fetchUserData();
    }, [id]);

    async function editarUsuario(e) {
        e.preventDefault();
        console.log("Estas en guardarUsuario");
        const url = `http://localhost:3000/editarUsuario/${id}`; // Asegúrate de que `id` esté definido
        const datos = {
            nombre: document.getElementById("nombre").value,
            usuario: document.getElementById("usuario").value,
            password: document.getElementById("password").value
        };
    
        try {
            const respuesta = await axios.delete(url, { data: datos });
            console.log(respuesta.data);
            alert("Usuario editado correctamente");
            window.location.href = "http://localhost:3001/usuarios/mostrar";
        } catch (error) {
            console.error("Error al intentar editar el usuario:", error);
            alert("Ocurrió un error al intentar editar el usuario");
        }
    }
    
    return (
        <div className="m-0 row justify-content-center">
            <form onSubmit={editarUsuario} className="col-6 mt-5">
                <div className="card">
                    <div className="card-header">
                        <h1>Editar usuario</h1>
                    </div>
                    <div className="card-body">
                        <input 
                            placeholder="Nombre" 
                            className="form-control mb-3" 
                            id="nombre" 
                            type="text" 
                            value={nombre} 
                            onChange={(e) => setNombre(e.target.value)}
                        />
                        <input 
                            placeholder="Usuario" 
                            className="form-control mb-3" 
                            id="usuario" 
                            type="text" 
                            value={usuario} 
                            onChange={(e) => setUsuario(e.target.value)}
                        />
                        <input 
                            placeholder="Password" 
                            className="form-control mb-3" 
                            id="password" 
                            type="text" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="card-footer">
                        <button type="submit" className="btn btn-primary">
                            Guardar edición de usuario
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
