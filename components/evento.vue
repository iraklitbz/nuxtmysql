<template>
  <v-container>
    <v-layout class="main-hero" text-center wrap>
      <v-flex>
        <h1 class="headline"> <nuxt-link  :to="{path: '/'}"><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path d="M21 11L6.414 11 11.707 5.707 10.293 4.293 2.586 12 10.293 19.707 11.707 18.293 6.414 13 21 13z"/></svg> </nuxt-link>Vengo a un evento</h1>
      </v-flex>
    </v-layout>
    <v-layout class="main-container" text-center wrap>
      <v-flex mb-4>
        <form class="main-from">
          <v-text-field
            v-model="form.name"
            :error-messages="nameErrors"
            :counter="15"
            label="Nombre"
            required
            @input="$v.form.name.$touch()"
            @blur="$v.form.name.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="form.surname"
            :error-messages="surnameErrors"
            :counter="40"
            label="Apellidos"
            required
            @input="$v.form.surname.$touch()"
            @blur="$v.form.surname.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="form.email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            @input="$v.form.email.$touch()"
            @blur="$v.form.email.$touch()"
          ></v-text-field>
          <v-text-field
             class="marginbottom"
            v-model="form.visitor"
            :error-messages="visitorErrors"
            :counter="40"
            label="¿A qué evento asistes?"
            required
            @input="$v.form.visitor.$touch()"
            @blur="$v.form.visitor.$touch()"
          ></v-text-field>
          <v-checkbox
            v-model="form.Productosyservicios"
            label="Acepto recibir noticias e invitaciones a eventos de Impact Hub"
            @change="$v.form.Productosyservicios.$touch()"
            @blur="$v.form.Productosyservicios.$touch()"
          ></v-checkbox>
          <v-checkbox
            v-model="form.noticiasEinvitaciones"
            :label="aviso"
            @change="$v.form.noticiasEinvitaciones.$touch()"
            @blur="$v.form.noticiasEinvitaciones.$touch()"
          ></v-checkbox>

          <div class="footer">
            <v-btn class="send" @click="submit">Enviar</v-btn>
            <v-btn @click="clear">Limpiar formulario</v-btn>
          </div>
        </form>
      </v-flex>
      <v-dialog v-model="dialog" max-width="500">
        <v-card>
          <v-card-title class="headline">Muchas gracias!</v-card-title>

          <v-card-text>Se avisara enseguida al evento {{form.visitor}} de su llegada, gracias</v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="darken-1" text @click="clear" :to="{path: '/'}">Cerrar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  validations: {
    form: {
      name: { required, maxLength: maxLength(15) },
      surname: { required, maxLength: maxLength(40) },
      visitor: { required, maxLength: maxLength(40) },
      email: { required, email },
      select: { required },
      noticiasEinvitaciones: {
        checked(val) {
          return val;
        }
      },
      Productosyservicios: {
        checked(val) {
          return val;
        }
      }
    }
  },

  data: () => ({
    guest: [],
    form: {
      name: "",
      surname: "",
      visitor: "",
      email: "",
      noticiasEinvitaciones: false,
      Productosyservicios: false
    },
     dialog: false,
    aviso: "Acepto recibir información sobre productos y servicios de Impact Hub"
  }),
  computed: {

    nameErrors() {
      const errors = [];
      if (!this.$v.form.name.$dirty) return errors;
      !this.$v.form.name.maxLength &&
        errors.push("El nombre debe de contener máximo 15 caracteres ");
      !this.$v.form.name.required && errors.push("Este campo es obligatorio");
      return errors;
    },
    surnameErrors() {
      const errors = [];
      if (!this.$v.form.surname.$dirty) return errors;
      !this.$v.form.surname.maxLength &&
        errors.push("Los apellidos deben de contener máximo 40 caracteres ");
      !this.$v.form.surname.required && errors.push("Este campo es obligatorio");
      return errors;
    },
    visitorErrors() {
      const errors = [];
      if (!this.$v.form.visitor.$dirty) return errors;
      !this.$v.form.visitor.maxLength &&
        errors.push("El nombre debe de contener máximo 15 caracteres");
      !this.$v.form.visitor.required && errors.push("Este campo es obligatorio");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.form.email.$dirty) return errors;
      !this.$v.form.email.email && errors.push("Tiene que ser un e-mail valido");
      !this.$v.form.email.required && errors.push("Este campo es obligatorio");
      return errors;
    }
  },

  methods: {
    submit() {
        if(this.$v.form.name.required === true && this.$v.form.surname.required === true && this.$v.form.visitor.required === true && this.$v.form.email.required === true)  {
          this.$axios.post("/api", this.form)
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });
           this.dialog = true
             setTimeout(function(){ 
                  this.dialog = false
              }, 5000);
        } else {
         this.$v.$touch()
        }
      
    },
    clear() {
      this.$v.$reset();
      this.form.name = "";
      this.form.surname = "";
      this.form.visitor = "";
      this.form.email = "";
      this.form.noticiasEinvitaciones = false;
      this.form.Productosyservicios = false;
      this.dialog = false;
    }
  },
  mounted() {
    window.addEventListener("load", function() {
      setTimeout(function() {
        window.scrollTo(0, 1);
      }, 0);
    });
  }
};
</script>
<style>
@font-face {
  font-family: GT Walsheim Pro;
  src: local("GT Walsheim Pro Regular"), local("gt-walsheim-bold-web"),
    url("../assets/font/gt-walsheim-medium-web.woff") format("woff");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: GT Walsheim Pro;
  src: local("GT Walsheim Pro Bold"), local("gt-walsheim-bold-web"),
    url("../assets/font/gt-walsheim-bold-web.woff") format("woff");
  font-weight: 700;
  font-style: normal;
}f
body {
  background-color: #f3f3f3;
}
.marginbottom {
margin-bottom: 30px
}
.v-input--checkbox {
      max-width: 90%;
    margin: auto;
}
.container {
  font-family: GT Walsheim Pro;
  max-width: 100%;
  padding: 0;
}
.v-application .headline {
  font-family: GT Walsheim Pro !important;
  font-weight: 700;
  font-size: 28px !important;
  padding: 10px !important;
  line-height: 1.1 !important;
}
p {
  font-size: 18px;
  font-weight: 400;
  line-height: 1.45;
}
.main-container {
  margin-top: 20px;
  width: 95%;
  margin: auto;
  margin-top: 20px;
  border-radius: 6px;
}
.main-hero {
  background-color: #1E5D66;
  padding: 15px 0;
}
.main-hero h1,
.main-hero p {
  color: #fff;
    max-width: 550px;
  margin: auto;
  text-align: center;
  position: relative;
}
.main-hero a {
  position: absolute;
  top: 50%; 
  transform: translateY(-50%);
  left: 0;
}
.main-hero a svg {
fill: #fff;
}
.main-from {
  padding: 15px 0px;
}
.send {
  background-color: #005d66 !important;
  color: #fff !important;
  font-weight: bold;
  margin: 0px;
  width: 260px;
}
.v-btn {
  font-size: 15px !important;
  height: 45px !important;
  width: 50%;
  border-radius: 0px;
  border: 4px solid #005d66
}
.flex.mb-4 {
  max-width: 550px;
  margin: auto;
}
.footer {
  display: flex;
  align-items: center;
  bottom: 0;

    margin-top: 25px;
}
.footer .v-btn:first-child {
margin-right: 15px
}
.v-card__actions .v-btn {
  width: 100%;
  background-color: #ddd !important;
  color: #fff !important;
  background-color: #005d66 !important;
}
.v-card__title.headline {
  justify-content: center;
  font-weight: bold !important;
}
.v-card__text {
  justify-content: center;
  text-align: center;
  font-size: 20px;
}
.v-input--selection-controls__input{
     margin-right: 15px;
}
.v-label {
  color: #999!important
}
</style>