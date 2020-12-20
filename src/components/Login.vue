<template>
  <div class="login">
    <b-form @submit.prevent="login" @reset="onReset" v-if="show">
      <b-form-group id="input-group-1" label="Correo electrónico de google:" label-for="input-1" description="We'll never share your email with anyone else.">
        <b-form-input id="input-1" v-model="form.email" type="email" placeholder="usuario@gmail.com" required></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Clave:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.password" type="password" placeholder="Ingresa tu nombre" required></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
  name: 'Login',
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      show: true
    }
  },
  methods: {
    login() {
      if(this.form.email && this.form.password && this.form.password >= 6) {
        console.log('está funcionando');
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(resp => {
          console.log(resp);
          this.$router.push('/productos');
        }).catch(error => {
          console.error(error.code);
        })
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
