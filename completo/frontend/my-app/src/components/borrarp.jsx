"use client"
import Link from "next/link";
import axios from "axios";

export default function BorrarProducto({id}){
    async function borrarp() {
        //console.log("Estas en borrar "+id);
        const url = "http://localhost:3000/a/borrarProducto/"+id;
        const respuesta = await axios.delete(url);
        console.log(respuesta);
        window.location.replace("/productos/mostrar")
    }
    return(
        <Link href="" onClick={borrarp}>Borrar</Link>
    );
}