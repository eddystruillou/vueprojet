<template>
<form @submit.prevent= "checkForm" >
  <div>
    <label for="nom">Nom :</label>
    <input v-model="nom" type="text" id="nom">
  </div>

  <div>
    <label for="image">Image :</label>
    <input v-model="image" id="image">
  </div>

  <div>
    <label for="synopsis">Synopsis :</label>
    <textarea v-model="synopsis" id="synopsis"></textarea>
  </div>
 
  <div class="button">
    <input type="submit" id="butform" value="Poster le Film">
  </div>
  <div class="errors" v-if="errors">
    <ul>  
      <li v-for="(error, i) in errors" :key="i">{{ error }}</li>
    </ul>
  </div>
</form>
</template>

<script>
import { moviesState } from '../states/movies-state'
export default {
  name: 'Formulaire',
  data () {
    return {
      nom: null,
      image: null,
      synopsis: null,
      errors: null
    }
  },
  methods: {
    async checkForm (e) {
      try {
        const rawResponse = await fetch('http://localhost:5000/Movies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({title: this.nom, imagesURL: this.image, synopsis: this.synopsis})
      });
  
      const statu = await rawResponse.status;
      if (!rawResponse.ok) {
        if (rawResponse.status === 400) {
          this.errors = await rawResponse.json();
          console.log(statu)
        } else {
          this.errors = ['Une erreur est survenue']
        }
      } else {
        this.$router.go(-1)
        console.log(statu)
      }
      } catch (error) {
      this.errors = ['Erreur inattendue']
  }
}
}
}
</script>

<style lang="less" scoped>
form {
  /* Pour le centrer dans la page */
  margin: 0 auto;
  width: 400px;

  /* Pour voir les limites du formulaire */
  padding: 1em;
  border: 1px solid black;
  border-radius: 1em;
  font-size: 17px;
  font-family: Verdana, sans-serif;
  color: white;
  background-color: #17181b;
}

div + div {
  margin-top: 1em;
}

label {
  /* Afin de s'assurer que toutes les étiquettes aient la même dimension et soient alignées correctement */
  display: inline-block;
  width: 90px;
  text-align: right;
}

li {
  color: red;
}

#butform {
  height: 40px;
  font-size: 20px;
  margin-left: 33%;
  font-family: Verdana, sans-serif;
  color: white;
  background-color: #2b71d8;
  border-radius: 10px 10px 10px 10px;
  border: 0;
}
</style>
