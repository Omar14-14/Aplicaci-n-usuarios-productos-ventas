import BorrarUsuario from "@/components/borrar";
import axios from "axios";
import Link from "next/link";
async function getUsuarios(){
    const url=" http://localhost:3000";
    const usuarios = await axios.get(url);
    //console.log(universidades.data);
    return usuarios.data;
    
}



export default async function Usuarios(){
    const usuarios = await getUsuarios();
    return(
        <>
            <h1>
                Usuarios
            </h1>
            <table className = "table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Nombre</th>
                        <th>Usuario</th>
                        <th>Editar</th>
                        <th>Borrar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map((usuario, i)=>(
                            <tr key={i}>
                                <td>
                                <Link href={`/usuarios/${usuario.id}`}>{i+1}
                                </Link> 
                                    </td>
                                <td>{usuario.nombre}</td>
                                <td>{usuario.usuario}</td>
                                <td><Link href={`/usuarios/editar/${usuario.id}`}>Editar
                                </Link></td>
                                <td>
                                    <BorrarUsuario id={usuario.id}/>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
        </>
    );
}