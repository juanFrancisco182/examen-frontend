<template>
  <!-- ============================================================== -->
  <!-- Bread crumb and right sidebar toggle -->
  <!-- ============================================================== -->
  <div class="row page-titles">
      <div class="col-md-5 col-12 align-self-right">
          <h3 class="text-themecolor mb-0">Productos </h3>
      </div>
      <div class="col-md-7 col-12 align-self-center d-none d-md-flex justify-content-end">
          <ol class="breadcrumb mb-0 p-0 bg-transparent">
              <li class="breadcrumb-item"><a href="javascript:void(0)">Productos</a></li>
          </ol>
      </div>
  </div>

  <!-- ============================================================== -->
  <!-- Boton Agregar nuevo producto-->
  <!-- ============================================================== -->
  <section>
    <div class="">
      <div class="row">
        <div class="col-sm-12" style="margin:25px 0;">
          <button style="float:right" class="btn btn-success"  data-toggle="modal" data-target="#formProduct">Nuevo Producto</button>
        </div>
      </div>
    </div>
  </section>

  <!-- ============================================================== -->
  <!-- Start Page Content -->
  <!-- ============================================================== -->
  <div class="row">
      <div class="col-12">
          <div class="card">
              <div class="card-body">
                    <table  class="table table-striped table-bordered">
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
                          <button class="btn btn-info" v-on:click="showInfo(product)"  data-toggle="modal" data-target="#infoproduct"><i class="fa-regular fa-eye"></i></button>
                          <button v-on:click="openModalEdit(product)" data-toggle="modal" data-target="#formEditProduct" class=" btn btn-primary"><i class="fa-regular fa-pen-to-square"></i></button>
                          <button v-on:click="deleteProducy(product)"  class="btn  btn-danger"> <i class="fa-solid fa-trash"></i></button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
              </div>
          </div>
      </div>
  </div>
  <!-- ============================================================== -->
  <!-- End PAge Content -->
  <!-- ============================================================== -->
  

  <!-- Modal Info Product -->
  <div class="modal fade" id="infoproduct" tabindex="-1" role="dialog" aria-labelledby="infoproduct" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{currentProduct.nombre_producto}}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <ul>
            <li>Dscripcion: {{currentProduct.descripcion_producto}}</li>
            <li>Precio: ${{formatPrice(currentProduct.precio_producto)}}</li>
          </ul>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <!--<button type="button" class="btn btn-primary">Save changes</button>-->
        </div>
      </div>
    </div>
  </div>

  <!-- Modal Create -->
  <div class="modal fade" id="formProduct" tabindex="-1" role="dialog" aria-labelledby="formProduct" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Formulario de Productos</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
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
                    <button type="button" class="btn btn-secondary" id="closeForm" data-dismiss="modal">Cerrar</button>
                  </div>
              </form>
        </div>
      
      </div>
    </div>
  </div>

  <!-- Modal update -->
  <div class="modal fade" id="formEditProduct" tabindex="-1" role="dialog" aria-labelledby="formEditProduct" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Formulario Editar Producto</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form v-on:submit.prevent="updateProduct">

                  <div class="form-group">
                    <label for=""></label>
                    <input type="text"
                      class="form-control" name="nombre_producto" v-model="productedit.nombre_producto" id="nombre_producto" aria-describedby="helpId" placeholder="Nombre del producto">
                    <small id="helpId" class="form-text text-muted">Escribe el nombre del producto</small>
                  </div>

                  <div class="form-group">
                    <label for=""></label>
                    <input type="text"
                      class="form-control" name="descripcion"  v-model="productedit.descripcion_producto" id="descripcion" aria-describedby="helpId" placeholder="Descripción">
                    <small id="helpId" class="form-text text-muted">Escribe la descripción del producto</small>
                  </div>
                  <div class="form-group">
                    <label for=""></label>
                    <input type="text"
                      class="form-control" name="precio"  v-model="productedit.precio_producto" id="precio" aria-describedby="helpId" placeholder="Precio">
                    <small id="helpId" class="form-text text-muted">Escribe el precio del producto</small>
                  </div>
                  <div class="btn-group" role="group" aria-label="">
                    <button type="submit" class="btn btn-success">Guardar</button>
                    <button type="button" class="btn btn-secondary" id="closeFormEdit" data-dismiss="modal">Cerrar</button>
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
      product:{},
      productedit:{},
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
          document.getElementById('closeForm').click();
          this.product ={};
          this.getProducts();
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
    },
    deleteProducy(product){
      console.log(product);
        this.$swal.fire({
          title: `Se eliminara el producto ${product.nombre_producto}`,
          text: "No se podra recuperar la información!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, Eliminar!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:8888/prueba-cvg/v1/productos/${product.id_producto}`,{
                  method:'DELETE',
                })
                  .then( res => res.json() )
                  .then( ( data ) =>{
                    console.log(data);
                  // window.location.href="/"
                  if(data.success){
                      this.getProducts();
                  } 
                    this.$swal(data.msg);
                      
                  })
                  .catch(err=>{
                    console.log(err);
                  })  
          }
      })  
    },
    openModalEdit(product){
      this.productedit = product;
    },
    updateProduct(){    
      let editData = {
        'nombre_producto':  this.productedit.nombre_producto,
        'descripcion_producto':  this.productedit.descripcion_producto,
        'precio_producto':  this.productedit.precio_producto
      }
      fetch(`http://localhost:8888/prueba-cvg/v1/productos/${this.productedit.id_producto}`,{
        method:'PUT',
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        body:new URLSearchParams(editData)
      })
      .then( res => res.json() )
      .then( ( data ) =>{
        console.log(data);
       if(data.success){
         this.$swal(data.msg);
          document.getElementById('closeFormEdit').click();
          this.getProducts();
       }else{
            this.$swal(data.msg);
       }
      if(data.err){
        console.log(data)
        for (const error in data.errors) {
          console.log(error);
          this.$toast.show(data.errors[error], {
            type: 'error',
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
