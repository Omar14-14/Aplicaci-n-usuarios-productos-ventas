import axios from "axios";
import Link from "next/link";
async function getProductos(){
    const url=" http://localhost:3000";
    const productos = await axios.get(url);
    //console.log(universidades.data);
    return productos.data;
    
}
export default async function Productos(){
    const productos = await getProductos();
    return(
        <>
            <h1>
                Productos
            </h1>
            <table className = "table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Descripcion</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productos.map((producto, i)=>(
                            <tr key="{i}">
                                <td>
                                <Link href={`/productos/${producto.id}`}>{i+1}
                                </Link>
                                    </td>
                                <td>{producto.descripcion}</td>
                                <td>{producto.cantidad}</td>
                                <td>{producto.precio}</td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
        </>
    );
}