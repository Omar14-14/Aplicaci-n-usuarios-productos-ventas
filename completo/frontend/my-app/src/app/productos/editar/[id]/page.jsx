"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function EditarProducto({ params }) {
    const [descripcion, setDescripcion] = useState("");
    const [cantidad, setCantidad] = useState("");
    const [precio, setPrecio] = useState("");
    const router = useRouter();
    const { id } = params; // Obtén el id desde los params

    useEffect(() => {
        async function fetchProductData() {
            if (id) {
                try {
                    const response = await axios.get(`http://localhost:3000/productos/buscarporId/${id}`);
                    const productData = response.data;
                    setDescripcion(productData.descripcion);
                    setCantidad(productData.cantidad);
                    setPrecio(productData.precio);
                } catch (error) {
                    console.error("Error al cargar los datos del producto:", error);
                }
            }
        }
        fetchProductData();
    }, [id]);

    async function editarProducto(e) {
        e.preventDefault();
        const url = `http://localhost:3000/a/editarProducto/${id}`;
        const datos = {
            descripcion,
            cantidad,
            precio
        };

        try {
            const respuesta = await axios.delete(url, { data: datos });
            console.log(respuesta.data);
            alert("Producto editado correctamente");
            router.push("/productos/mostrar");
        } catch (error) {
            console.error("Error al intentar editar el producto:", error);
            alert("Ocurrió un error al intentar editar el producto");
        }
    }

    return (
        <div className="m-0 row justify-content-center">
            <form onSubmit={editarProducto} className="col-6 mt-5">
                <div className="card">
                    <div className="card-header">
                        <h1>Editar Producto</h1>
                    </div>
                    <div className="card-body">
                        <input 
                            placeholder="Descripción" 
                            className="form-control mb-3" 
                            id="descripcion" 
                            type="text" 
                            value={descripcion} 
                            onChange={(e) => setDescripcion(e.target.value)}
                        />
                        <input 
                            placeholder="Cantidad" 
                            className="form-control mb-3" 
                            id="cantidad" 
                            type="number" 
                            value={cantidad} 
                            onChange={(e) => setCantidad(e.target.value)}
                        />
                        <input 
                            placeholder="Precio" 
                            className="form-control mb-3" 
                            id="precio" 
                            type="number" 
                            value={precio} 
                            onChange={(e) => setPrecio(e.target.value)}
                        />
                    </div>
                    <div className="card-footer">
                        <button type="submit" className="btn btn-primary">
                            Guardar edición de producto
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
