class Producto{
    constructor(data){
        //console.log(data);
        this.id=data.id;
        this.cantidad=data.cantidad;
        this.precio=data.precio;
        this.descripcion=data.descripcion;
    }

    set id(id){
        this._id=id;
    }
    set cantidad(cantidad){
        this._cantidad=cantidad;
    }
    set precio(precio){
        this._precio=precio;
    }
    set descripcion(descripcion=""){
        this._descripcion=descripcion;
    }
    get id(){
        return this._id;
    }
    get cantidad(){
        return this._cantidad;
    }
    get precio(){
        return this._precio;
        //console.log(this._precio);
    }
    get descripcion(){
        return this._descripcion;
    }
    get getProducto() {
        const conid = {
            id: this.id,
            cantidad: this.cantidad,
            precio: this.precio,
            descripcion: this.descripcion
        }
        const sinid = {
            cantidad: this.cantidad,
            precio: this.precio,
            descripcion: this.descripcion
        };
        if (this.id!=undefined){
            return conid;
        }
        else {
            return sinid;
        }
    }

}
module.exports=Producto;