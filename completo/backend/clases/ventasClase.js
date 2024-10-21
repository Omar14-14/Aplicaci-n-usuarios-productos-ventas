class Venta {
    constructor(data) {
        this.id = data.id;
        this.idUsuario = data.idUsuario;
        this.idProducto = data.idProducto;
        this.fecha = data.fecha;
        this.hora = data.hora;
        this.estatus = data.estatus || "vendido";  // Estatus predeterminado es 'vendido'
    }

    // Setters
    set id(id) {
        this._id = id;
    }

    set idUsuario(idUsuario) {
        this._idUsuario = idUsuario;
    }

    set idProducto(idProducto) {
        this._idProducto = idProducto;
    }

    set fecha(fecha) {
        this._fecha = fecha;
    }

    set hora(hora) {
        this._hora = hora;
    }

    set estatus(estatus) {
        const estatusValidos = ["vendido", "cancelado"];
        if (estatusValidos.includes(estatus)) {
            this._estatus = estatus;
        }
    }

    // Getters
    get id() {
        return this._id;
    }

    get idUsuario() {
        return this._idUsuario;
    }

    get idProducto() {
        return this._idProducto;
    }

    get fecha() {
        return this._fecha;
    }

    get hora() {
        return this._hora;
    }

    get estatus() {
        return this._estatus;
    }

    // Método para obtener la venta en formato de objeto
    get getVenta() {
        const conid = {
            id: this._id,
            idUsuario: this._idUsuario,
            idProducto: this._idProducto,
            fecha: this._fecha,
            hora: this._hora,
            estatus: this._estatus
        };

        const sinid = {
            idUsuario: this._idUsuario,
            idProducto: this._idProducto,
            fecha: this._fecha,
            hora: this._hora,
            estatus: this._estatus
        };

        if (this.id != undefined) {
            return conid;
        } else {
            return sinid;
        }
    }
}

module.exports = Venta;