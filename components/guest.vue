<template>
  <v-container>
    <v-layout class="main-hero" text-center wrap>
      <v-flex mb-4>
        <h1 class="headline">Bienvenido a Impact Hub Madrid</h1>
        <p
          class="subheading font-weight-regular"
        >Indiqué en este formulario a quién ha venido a ver y le atenderemos en seguida, muchas gracias</p>
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
            v-model="form.visitor"
            :error-messages="visitorErrors"
            :counter="40"
            label="Vengo a ver a (nombre y apellidos)"
            required
            @input="$v.form.visitor.$touch()"
            @blur="$v.form.visitor.$touch()"
          ></v-text-field>
          <v-checkbox
            v-model="form.newsletter"
            label="Sí, quiero suscribirme a la newsletter de Impact Hub"
            @change="$v.form.newsletter.$touch()"
            @blur="$v.form.newsletter.$touch()"
          ></v-checkbox>
          <v-checkbox
            v-model="form.aceptoTodo"
            :error-messages="aceptoTodoErrors"
            :label="aviso"
            required
            @change="$v.form.aceptoTodo.$touch()"
            @blur="$v.form.aceptoTodo.$touch()"
          ></v-checkbox>

          <div class="footer">
            <v-btn class="send" @click="submit">Avisar de mi llegada</v-btn>
            <v-btn @click="clear">Limpiar formulario</v-btn>
          </div>
        </form>
      </v-flex>
      <v-dialog v-model="form.dialog" max-width="500">
        <v-card>
          <v-card-title class="headline">Muchas gracias!</v-card-title>

          <v-card-text>Se avisara enseguida a {{form.visitor}} de su llegada, gracias</v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="darken-1" text @click="clear">Cerrar</v-btn>
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
      aceptoTodo: {
        checked(val) {
          return val;
        }
      },
      newsletter: {
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
      aceptoTodo: false,
      newsletter: true,
      dialog: false
    },
    aviso: "Almacenaremos tus datos máximo 60 días," + "\n" + "¿estas de acuerdo?"
  }),
  computed: {
    aceptoTodoErrors() {
      const errors = [];
      if (!this.$v.form.aceptoTodo.$dirty) return errors;
      !this.$v.form.aceptoTodo.checked && errors.push("Este campo es obligatorio");
      return errors;
    },
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
      console.log(this.$v);
      
      if (!this.$v.$invalid === true) {
        this.$v.$touch()
      } else {
        this.$axios.post("/api", this.form)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
      }
      
    },
    clear() {
      this.$v.$reset();
      this.form.name = "";
      this.form.surname = "";
      this.form.visitor = "";
      this.form.email = "";
      this.form.aceptoTodo = false;
      this.form.dialog = false;
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
<style scoped>
@font-face {
  font-family: GT Walsheim Pro;
  src: local("GT Walsheim Pro Regular"), local("GTWalsheimProRegular"),
    url("../assets/font/GTWalsheimProRegular.woff2") format("woff2"),
    url("../assets/font/GTWalsheimProRegular.woff") format("woff"),
    url("../assets/font/GTWalsheimProRegular.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: GT Walsheim Pro;
  src: local("GT Walsheim Pro Bold"), local("GTWalsheimProBold"),
    url("../assets/font/GTWalsheimProBold.woff2") format("woff2"),
    url("../assets/font/GTWalsheimProBold.woff") format("woff"),
    url("../assets/font/GTWalsheimProBold.ttf") format("truetype");
  font-weight: 700;
  font-style: normal;
}
body {
  background-color: #f3f3f3;
}
.container {
  font-family: GT Walsheim Pro;
  max-width: 100%;
  padding: 0;
}
.v-application .headline {
  font-family: GT Walsheim Pro !important;
  font-weight: 700;
  font-size: 2.3rem !important;
  padding: 20px !important;
  line-height: 1.1 !important;
}
p {
  font-size: 18px;
  font-weight: 400;
  line-height: 1.45;
}
.main-container {
  margin-top: 20px;
  background-color: #fff;
  width: 70%;
  margin: auto;
  margin-top: 20px;
  border: 1px solid #eee;
  border-bottom: 5px solid #ddd;
  border-radius: 6px;
}
.main-hero {
  background-color: #ee4f3f;
  padding: 25px 0;
}
.main-hero h1,
.main-hero p {
  color: #fff;
}
.main-from {
  padding: 25px 55px;
}
.send {
  background-color: #005d66 !important;
  color: #fff !important;
  font-weight: bold;
  margin: 0px;
  width: 260px;
}
.v-btn {
  font-size: 20px !important;
  height: 85px !important;
  width: 50%;
  border-radius: 0px;
}
.flex.mb-4 {
  max-width: 550px;
  margin: auto;
}
.footer {
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
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
</style>