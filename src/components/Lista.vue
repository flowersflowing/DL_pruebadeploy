<template>
    <div>
        <h2>Lista de juguetes de la tienda</h2>
        <b-button class="my-5" variant="danger">Agregar juguete</b-button>
          <el-table :data="dataLista" border style="width: 100%">
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
        </el-table>
    </div>
</template>

<script>
export default {
    name: 'Lista',
    computed: {
        dataLista() {
            return this.$store.getters.mostrarJuguetes; 
        }
    }
}
</script>