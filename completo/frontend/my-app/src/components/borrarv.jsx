"use client"
import Link from "next/link";
import axios from "axios";

export default function BorrarVenta({id}){
    async function borrarv() {
        //console.log("Estas en borrar "+id);
        const url = "http://localhost:3000/b/eliminarVenta/"+id;
        const respuesta = await axios.delete(url);
        console.log(respuesta);
        window.location.replace("/ventas/mostrar")
    }
    return(
        <Link href="" onClick={borrarv}>Borrar</Link>
    );
}