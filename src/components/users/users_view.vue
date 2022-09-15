<template>
   <!-- ============================================================== -->
  <!-- Bread crumb and right sidebar toggle -->
  <!-- ============================================================== -->
  <div class="row page-titles">
      <div class="col-md-5 col-12 align-self-right">
          <h3 class="text-themecolor mb-0">Usuarios </h3>
      </div>
      <div class="col-md-7 col-12 align-self-center d-none d-md-flex justify-content-end">
          <ol class="breadcrumb mb-0 p-0 bg-transparent">
              <li class="breadcrumb-item"><a href="javascript:void(0)">Usuarios</a></li>
          </ol>
      </div>
  </div>
  <!-- ============================================================== -->
  <!-- End Bread crumb and right sidebar toggle -->
  <!-- ============================================================== -->
    <!-- ============================================================== -->
  <!-- Boton Agregar nuevo usuario-->
  <!-- ============================================================== -->
  <section>
    <div class="">
      <div class="row">
        <div class="col-sm-12" style="margin:25px 0;">
          <button style="float:right" class="btn btn-success"  data-toggle="modal" data-target="#formProduct">Nuevo Usuario</button>
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
                          <th scope="col">Imagen </th>
                          <th scope="col">ID </th>
                          <th scope="col">Nombre</th>
                          <th scope="col">Apellidos</th>
                           <th scope="col">Puesto</th>
                          <th scope="col">Email</th>
                        </tr>
                      </thead>
                    <tbody>
                      <tr v-for="userlist in users" :key="userlist.id_producto">
                        <td ><img  width="100" class="rounded-circle" :src="!userlist.avatar ? 'https://image.shutterstock.com/image-vector/avatar-man-icon-profile-placeholder-260nw-1229859850.jpg':userlist.avatar" alt=""></td>
                         <td>{{userlist.id}}</td>
                        <td>{{userlist.first_name}}</td>
                        <td>{{userlist.last_name}}</td>
                         <td>{{userlist.job}}</td>
                        <td>{{userlist.email}}</td>
                        <td>
                          <button v-on:click="openModalEdit(userlist)"  data-toggle="modal" data-target="#formEditUser" class=" btn btn-primary"><i class="fa-regular fa-pen-to-square"></i></button>
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

    <!-- Modal Create -->
  <div class="modal fade" id="formProduct" tabindex="-1" role="dialog" aria-labelledby="formProduct" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Crear usuario</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form v-on:submit.prevent="addRecord">
                    <div class="form-group">
                        <label for=""></label>
                        <input type="text"
                        class="form-control" name="name" v-model="user.name" id="name" aria-describedby="helpId" placeholder="Nombre del usuario">
                        <small id="helpId" class="form-text text-muted">Escribe el nombre del usuario</small>
                    </div>
                    <div class="form-group">
                        <label for=""></label>
                        <input type="text"
                        class="form-control" name="last_name"  v-model="user.last_name" id="last_name" aria-describedby="helpId" placeholder="Apellidos">
                        <small id="helpId" class="form-text text-muted">Escribe tus apellidos</small>
                    </div>

                  <div class="form-group">
                    <label for=""></label>
                    <input type="text"
                      class="form-control" name="job"  v-model="user.job" id="job" aria-describedby="helpId" placeholder="Trabajo">
                    <small id="helpId" class="form-text text-muted">Escribe A que te dedicas</small>
                  </div>
                  <div class="form-group">
                    <label for=""></label>
                    <input type="text"
                      class="form-control" name="email"  v-model="user.email" id="email" aria-describedby="helpId" placeholder="Email">
                    <small id="helpId" class="form-text text-muted">Escribe tu email</small>
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

    <!-- Modal Update -->
  <div class="modal fade" id="formEditUser" tabindex="-1" role="dialog" aria-labelledby="formEditUser" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Editar usuario</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form v-on:submit.prevent="updateUser">
                    <div class="form-group">
                        <label for=""></label>
                        <input type="text"
                        class="form-control" name="name" v-model="userEdit.name" id="name" aria-describedby="helpId" placeholder="Nombre del usuario">
                        <small id="helpId" class="form-text text-muted">Escribe el nombre del usuario</small>
                    </div>
                    <div class="form-group">
                        <label for=""></label>
                        <input type="text"
                        class="form-control" name="last_name"  v-model="userEdit.last_name" id="last_name" aria-describedby="helpId" placeholder="Apellidos">
                        <small id="helpId" class="form-text text-muted">Escribe tus apellidos</small>
                    </div>

                  <div class="form-group">
                    <label for=""></label>
                    <input type="text"
                      class="form-control" name="job"  v-model="userEdit.job" id="job" aria-describedby="helpId" placeholder="Trabajo">
                    <small id="helpId" class="form-text text-muted">Escribe A que te dedicas</small>
                  </div>
                  <div class="form-group">
                    <label for=""></label>
                    <input type="text"
                      class="form-control" name="email"  v-model="userEdit.email" id="email" aria-describedby="helpId" placeholder="Email">
                    <small id="helpId" class="form-text text-muted">Escribe tu email</small>
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
      users:[],
      user:{},
      userEdit:{},
    }
  },
  created:function(){
    this.getUsers();
  },
  methods:{
     getUsers(){
   
      fetch('http://localhost:8888/prueba-cvg/v1/usuarios')
      .then( res => res.json() )
      .then( ( data ) =>{
        this.users = [];
        if(data.success){
          this.users = data.data;
        }
      })
      .catch(console.log)
    },
     addRecord(){
     fetch('http://localhost:8888/prueba-cvg/v1/usuarios',{
      method:'POST',
       headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      body:new URLSearchParams(this.user)
     })
      .then( res => res.json() )
      .then( ( data ) =>{
        console.log(data);
       // window.location.href="/"
       if(data.success){
          this.$swal(data.msg);
          document.getElementById('closeForm').click();
          this.user ={};
          this.getUsers();
        
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
     openModalEdit(usertemp){
    this.userEdit = {
        'id':usertemp.id,
        'name':  usertemp.first_name,
        'job':  usertemp.job,
        'email': usertemp.email,
        'last_name':  usertemp.last_name
      }
     
    },
     updateUser(){    
      let editData = {
        'name':  this.userEdit.name,
        'job':  this.userEdit.job,
        'email':  this.userEdit.email,
        'last_name':  this.userEdit.last_name
      }
      
      fetch(`http://localhost:8888/prueba-cvg/v1/usuarios/${this.userEdit.id}`,{
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
          this.getUsers();
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
