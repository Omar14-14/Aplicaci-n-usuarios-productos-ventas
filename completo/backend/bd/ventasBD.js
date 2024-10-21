const ventasBD = require("./conexion").ventas;
const Venta = require("../clases/ventasClase");

function validarVentas(venta2) {
    var datosCorrectos = false;
    if (venta2.idUsuario != undefined && venta2.idProducto != undefined && venta2.fecha != undefined && venta2.hora != undefined && venta2.estatus != undefined) {
        datosCorrectos = true;
    }
    return datosCorrectos;
}

async function mostrarVentas() {
    const ventas = await ventasBD.get();
    var ventasValidas = [];
    
    ventas.forEach(venta => {
        const venta1 = new Venta({ id: venta.id, ...venta.data() });
        const venta2 = venta1.getVenta;
        if (validarVentas(venta2)) {
            ventasValidas.push(venta2);
        }
    });
    
    return ventasValidas;
}

async function buscarPorId(id) {
    const venta = await ventasBD.doc(id).get();
    const venta1 = new Venta({ id: venta.id, ...venta.data() });
    var ventaValida = { error: true };
    
    if (validarVentas(venta1.getVenta)) {
        ventaValida = venta1.getVenta;
    }
    
    return ventaValida;
}

async function nuevaVenta(data) {
    data.estatus = "vendido";  // Se asegura de que el estatus sea 'vendido' al crear una nueva venta
    const venta1 = new Venta(data);
    var ventaValida = false;
    
    if (validarVentas(venta1.getVenta)) {
        await ventasBD.doc().set(venta1.getVenta);
        ventaValida = true;
    }
    
    return ventaValida;
}

async function cancelarVenta(id) {
    const venta = await buscarPorId(id);
    var cancelada = false;
    
    if (venta.error != true && venta.estatus !== "cancelado") {
        await ventasBD.doc(id).update({ estatus: "cancelado" });
        cancelada = true;
    }
    
    return cancelada;
}

async function editarVenta(id, data) {
    const venta = await buscarPorId(id);
    let editada = false;

    if (venta.error != true) {
        const ventaActualizada = {
            idUsuario: data.idUsuario || venta.idUsuario,
            idProducto: data.idProducto || venta.idProducto,
            fecha: data.fecha || venta.fecha,
            hora: data.hora || venta.hora,
            estatus: data.estatus || venta.estatus,
        };
        
        await ventasBD.doc(id).update(ventaActualizada);
        editada = true;
    }

    return editada;
}

async function eliminarVenta(id) {
    try {
        const venta = await buscarPorId(id);
        let eliminada = false;
        if (venta.error !== true) {
            await ventasBD.doc(id).delete();
            eliminada = true;
        }
        return eliminada;
    } catch (error) {
        console.error("Error al eliminar la venta:", error);
        return false;
    }
}



module.exports = {
    mostrarVentas,
    buscarPorId,
    nuevaVenta,
    cancelarVenta,
    editarVenta,
    eliminarVenta
};