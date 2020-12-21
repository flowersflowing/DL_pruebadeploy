<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Ingresar</router-link> |
      <router-link to="/productos">Productos</router-link> |
      <router-link to="/agregar">Agregar</router-link> |
      <router-link to="/editar">Editar</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    this.$store.dispatch('traerData');
  },
}
</script>

<style lang="scss">
</style>
