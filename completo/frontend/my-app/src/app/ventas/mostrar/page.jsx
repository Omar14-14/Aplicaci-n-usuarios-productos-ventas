import BorrarVenta from "@/components/borrarv";
import CancelarVenta from "@/components/cancelar";
import axios from "axios";
import Link from "next/link";
async function getVentas(){
    const url=" http://localhost:3000/b/ventas";
    const ventas = await axios.get(url);
    //console.log(universidades.data);
    return ventas.data;
    
}
export default async function Ventas(){
    const ventas = await getVentas();
    return(
        <>
            <h1>
                Ventas
            </h1>
            <table className = "table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>id Producto</th>
                        <th>id Cliente</th>
                        <th>Hora compra</th>
                        <th>Fecha compra</th>
                        <th>Estatus venta</th>
                        <th>Editar venta</th>
                        <th>Cancelar venta</th>
                        <th>Borrar venta</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ventas.map((venta, i)=>(
                            <tr key="{i}">
                                <td>
                                <Link href={`/ventas/${venta.id}`}>{i+1}
                                </Link>
                                    </td>
                                <td>{venta.idProducto}</td>
                                <td>{venta.idUsuario}</td>
                                <td>{venta.hora}</td>
                                <td>{venta.fecha}</td>
                                <td>{venta.estatus}</td>
                                <td><Link href={`/ventas/editar/${venta.id}`}>Editar</Link></td>
                                <td>
                                    <CancelarVenta id = {venta.id}/>
                                </td>
                                <td>
                                    <BorrarVenta id  = {venta.id}/>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
        </>
    );
}