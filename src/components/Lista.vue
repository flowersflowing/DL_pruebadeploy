<template>
    <div class="container">
        <h2 class="my-5">Lista de juguetes de la tienda</h2>
        <div class="text-center">
            <b-button class="m-5" variant="danger">Agregar juguete</b-button>
            <b-button class="m-5" variant="primary" @click.prevent="logout">Cerrar sesión</b-button>             
        </div>
          <el-table :data="dataLista" border style="width: 100%" class="my-5">
            <el-table-column label="Código" width="180">
                <template slot-scope="scope">
                    <div slot="reference" class="name-wrapper">
                        <el-tag>{{scope.row.code}}</el-tag>                       
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="Nombre" width="180">
                <template slot-scope="scope">
                    <div slot="reference" class="name-wrapper">
                        <el-tag>{{scope.row.name}}</el-tag>                       
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="Stock" width="180">
                <template slot-scope="scope">
                    <div slot="reference" class="name-wrapper">
                        <el-tag>{{scope.row.stock}}</el-tag>                       
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="Precio" width="180">
                <template slot-scope="scope">
                    <div slot="reference" class="name-wrapper">
                        <el-tag>{{scope.row.price}}</el-tag>                       
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="Accciones" width="180">
                <template slot-scope="scope">
                    <el-button size="mini" type="info" class="mr-1" @click="handleEdit(scope.row.id)">Editar</el-button>
                    <el-button size="mini" type="info" class="mr-1" @click="handleDelete(scope.row.id)">Eliminar</el-button>
                </template>
            </el-table-column>         
        </el-table>
    </div>
</template>

<script>
import firebase from 'firebase';
export default {
    name: 'Lista',
    computed: {
        dataLista() {
            return this.$store.getters.mostrarJuguetes; 
        }
    },
    methods: {
        logout() {
            firebase.auth().signOut().then(() => {
                this.$router.replace('/');
            }).catch((error) => {
                console.log(error);
            });
        },
    }
}
</script>