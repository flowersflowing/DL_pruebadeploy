<template>
    <div>
        <h2>Lista de juguetes de la tienda</h2>
        <b-button class="my-5" variant="danger">Agregar juguete</b-button>
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="date" label="Fecha" width="180"></el-table-column>
            <el-table-column prop="name" label="Nombre" width="180"></el-table-column>
            <el-table-column prop="address" label="Dirección"></el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    name: 'Lista'
}
</script>