<template>
    <div class="container my-5">
            <b-form @submit.prevent="editar" @reset="onReset">
                <b-form-group id="input-group-1" label="Código:" label-for="input-1">
                    <b-form-input id="input-1" v-model="form.code" type="text" placeholder="A0017" required></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-2" label="Nombre del producto:" label-for="input-2">
                    <b-form-input id="input-2" v-model="form.name" type="text" placeholder="Tamagotshi" required></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-3" label="Stock:" label-for="input-3">
                    <b-form-input id="input-3" v-model="form.stock" type="number" placeholder="250" required></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-4" label="Precio:" label-for="input-4">
                    <b-form-input id="input-4" v-model="form.price" type="number" placeholder="1990" required></b-form-input>
                </b-form-group>
                <div class="my-5">
                    <b-button type="submit" variant="primary">Editar juguete</b-button>
                    <b-button class="m-2" type="reset" variant="danger">Reset</b-button>        
                </div>
            </b-form>             
    </div>
</template>

<script>
export default {
    name: 'Editando',
    data() {
        return {
            form: {
                code: '',
                name: '',
                stock: '',
                price: ''
            }
        }
    },
    created() {
        let datos = {};
        datos = this.$store.getters.mostrarJuguetes.find(resp => resp.id === this.$route.params.id);
        if(datos) {
            this.form.code = datos.code;
            this.form.name = datos.name;
            this.form.stock = datos.stock;
            this.form.price = datos.price;
            this.form.id = datos.id;
        } else {
            this.$message('El juguete que busca no se encuentra');
        }
    },
    methods: {
        onReset(event) {
            event.preventDefault()
            // Reset our form values
            this.form.email = ''
            this.form.name = ''
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
        },
        editar() {
            if(this.form.code && this.form.name && this.form.stock && this.form.price) {
                let data = {
                    code: this.form.code,
                    name: this.form.name,
                    stock: this.form.stock,
                    price: this.form.price,
                    id: this.form.id
                }
                this.$confirm('¿Estás seguro que quieres editar este producto?', 'Informativo', {
                    confirmButtonText: 'Sí',
                    cancelButtonText: 'No',
                    type: 'primary',
                    center: true
                }).then(() => {
                    this.$message({
                        type: 'info',
                        message: 'El producto se ha editado exitosamente'
                    });
                    this.$store.dispatch('editar', data);
                }).catch(() => {
                    this.$message({
                        type: 'warning',
                        message: 'No se ha podido editar'
                    });
                });
            } else {
                console.log('Error');
            }
        }
    }
}
</script>