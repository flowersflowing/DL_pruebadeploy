<template>
    <div class="container my-5">
        <b-form @submit.prevent="agregar" @reset="onReset">
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
                <b-button type="submit" variant="primary">Agregar juguete</b-button>
                <b-button class="m-2" type="reset" variant="danger">Reset</b-button>        
            </div>
        </b-form>       
    </div>
</template>

<script>
export default {
    name: 'Add',
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
    methods: {
        agregar() {
            if(this.form.code && this.form.name && this.form.stock && this.form.price) {
                this.$confirm('¿Deseas agregar nuevo producto?', 'Informativo', {
                    confirmButton: 'Sí',
                    cancelButton: 'No',
                    type: 'primary',
                    center: true
                }).then(() => {
                    this.$message({
                        type: 'info',
                        message: 'El producto ha sido agregado'
                    });
                    this.$store.dispatch('agregarJuguetes', this.form);
                    this.$router.push('/productos');
                }).catch(() => {
                    this.$message({
                        type: 'danger',
                        message: 'El producto no ha sido creado'
                    });
                });
            }else {
                console.log("No está funcionando");
            }
        },
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
        }
    },
}
</script>