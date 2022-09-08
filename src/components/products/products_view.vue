<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-sm-12" style="margin:25px 0;">
          <button class="float-end btn btn-success" data-bs-toggle="modal" data-bs-target="#formProduct">Nuevo Producto</button>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container">
      <div class="card">
        <div class="card-header">
          Productos
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-sm-12">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">id </th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Acciòn</th>
                  </tr>
                </thead>
              <tbody>
                <tr v-for="product in products" :key="product.id_producto">
                  <td >{{product.id_producto}}</td>
                  <td>{{product.nombre_producto}}</td>
                  <td>${{formatPrice(product.precio_producto)}}</td>
                  <td>
                    <button class="btn btn-info" v-on:click="showInfo(product)" data-bs-toggle="modal" data-bs-target="#infoproduct"><i class="fa-regular fa-eye"></i></button>
                    <button class=" btn btn-primary"><i class="fa-regular fa-pen-to-square"></i></button>
                    <button class="btn  btn-danger"> <i class="fa-solid fa-trash"></i></button>
                  </td>
                </tr>
              </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

 <!-- Modal Info Product -->
  <div class="modal fade" id="infoproduct" tabindex="-1" aria-labelledby="infoproduct" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{currentProduct.nombre_producto}}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <p>Dscripcion: {{currentProduct.descripcion_producto}}</p>
          <p>Precio: ${{formatPrice(currentProduct.precio_producto)}}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal Info Product -->
  <div class="modal fade" id="formProduct" tabindex="-1" aria-labelledby="formProduct" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Formulario</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <form v-on:submit.prevent="addRecord">

                <div class="form-group">
                  <label for=""></label>
                  <input type="text"
                    class="form-control" name="nombre_producto" v-model="product.nombre_producto" id="nombre_producto" aria-describedby="helpId" placeholder="Nombre del producto">
                  <small id="helpId" class="form-text text-muted">Escribe el nombre del producto</small>
                </div>

                 <div class="form-group">
                  <label for=""></label>
                  <input type="text"
                    class="form-control" name="descripcion"  v-model="product.descripcion_producto" id="descripcion" aria-describedby="helpId" placeholder="Descripción">
                  <small id="helpId" class="form-text text-muted">Escribe la descripción del producto</small>
                </div>
                <div class="form-group">
                  <label for=""></label>
                  <input type="text"
                    class="form-control" name="precio"  v-model="product.precio_producto" id="precio" aria-describedby="helpId" placeholder="Precio">
                  <small id="helpId" class="form-text text-muted">Escribe el precio del producto</small>
                </div>
                <div class="btn-group" role="group" aria-label="">
                  <button type="submit" class="btn btn-success">Guardar</button>
                  <button type="button" class="btn btn-warning"  data-bs-dismiss="modal">Cancelar</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  </div>

 
 
</template>

<script>

export default{
  data(){
    return{
      products:[],
      currentProduct:{},
      product:{}
    }
  },
  created:function(){
    this.getProducts();
  },
  methods:{
    getProducts(){
   
      fetch('http://localhost:8888/prueba-cvg/v1/productos')
      .then( res => res.json() )
      .then( ( data ) =>{
        this.products = [];
        if(data.success){
          this.products = data.data;
        }
      })
      .catch(console.log)
    },
    showInfo(product){
    this.currentProduct = product ;
    console.log(this.currentProduct)
    },
     formatPrice(value) {
        let val = (value/1).toFixed(2).replace(',', '.')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    },
    addRecord(){
     fetch('http://localhost:8888/prueba-cvg/v1/productos',{
      method:'POST',
       headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      body:new URLSearchParams(this.product)
     })
      .then( res => res.json() )
      .then( ( data ) =>{
        console.log(data);
       // window.location.href="/"
       if(data.success){
         this.$swal(data.msg);
         window.location.href="/"
       } 
       
       if(data.err){
     console.log(data)
     for (const error in data.errors) {
   console.log(error);
 this.$toast.show(data.errors[error], {
            type: 'error',
            // all of other options may go here
            });
}
      
         
        
       
       }
       
      })
      .catch(err=>{
        console.log(err);
      })
    }
  }
}

</script>
<style scoped>
.btn{
  margin-left: 5px;;
}
</style>