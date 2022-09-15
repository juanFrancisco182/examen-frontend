<template>
   <!-- ============================================================== -->
  <!-- Bread crumb and right sidebar toggle -->
  <!-- ============================================================== -->
  <div class="row page-titles">
      <div class="col-md-5 col-12 align-self-right">
          <h3 class="text-themecolor mb-0">Producto de Mercado Libre </h3>
      </div>
      <div class="col-md-7 col-12 align-self-center d-none d-md-flex justify-content-end">
          <ol class="breadcrumb mb-0 p-0 bg-transparent">
              <li class="breadcrumb-item"><a href="javascript:void(0)">Producto de Mercado Libre </a></li>
          </ol>
      </div>
  </div>
  <!-- ============================================================== -->
  <!-- End Bread crumb and right sidebar toggle -->
  <!-- ============================================================== -->

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
                          <th scope="col">Titulo</th>
                          <th scope="col">Precio</th>
                          <th scope="col">Atributos</th>
                          <th scope="col">Variación</th>
                        </tr>
                      </thead>
                    <tbody>
                      <tr>
                        <td >{{product.id}}</td>
                        <td>{{product.title}}</td>
                        <td>${{formatPrice(product.price)}}</td>
                        <td> <button  data-toggle="modal" data-target="#attributes" type="button" class="btn btn-outline-primary"> Ver más</button></td>
                        <td> <button data-toggle="modal" data-target="#variations" type="button" class="btn btn-outline-primary"> Ver más</button> </td>
                       
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

  <!-- Modal Attributes-->
  <div class="modal fade" id="attributes" tabindex="-1" role="dialog" aria-labelledby="attributes" aria-hidden="true">
    <div class="modal-dialog modal-lg"  role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Atributos</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
            <table width="100%" class="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th scope="col">id </th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Value ID</th>
                        <th scope="col">Value Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="attribute in product.attributes" :key="attribute.id">
                        <td >{{attribute.id}}</td>
                        <td>{{attribute.name}}</td>
                        <td>{{attribute.value_id}}</td>
                        <td>{{attribute.value_name}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>

 <!-- Modal variations-->
  <div class="modal fade" id="variations" tabindex="-1" role="dialog" aria-labelledby="variations" aria-hidden="true">
    <div class="modal-dialog modal-lg"  role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Variaciones</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
            <table width="100%" class="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th scope="col">id </th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Imagenes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="variation in product.variations" :key="variation.id">
                        <td >{{variation.id}}</td>
                        <td>${{formatPrice(variation.price)}}</td>
                        <td>{{variation.available_quantity}}</td>
                        <td> <img width="50"  v-for="image in product.pictures" :key="image.id" :src="image.url" alt="" ></td>
                  
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
    data(){
    return{
      product:{},
      attributes:[],
      variations:[]
    }
  },
  created:function(){
    this.getProduct()
  },
  methods:{
  getProduct(){
      fetch('http://localhost:8888/prueba-cvg/v1/mercadolibre')
      .then( res => res.json() )
      .then( ( data ) =>{
        this.product = {};
        if(data.success){
          
          this.product = data.data;
            console.log(this.product)
        }
      })
      .catch(console.log)
    },
     formatPrice(value) {
        let val = (value/1).toFixed(2).replace(',', '.')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    },

  }
}
</script>
