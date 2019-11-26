<template>
  <v-app>
    <div class="main-header" app>
      <v-toolbar-title class="logo d-flex justify-center">
        <img
          data-no-lazy="1"
          class="fl-logo-img"
          itemscope
          itemtype="https://schema.org/ImageObject"
          src="https://madrid.impacthub.net/wp-content/uploads/2017/12/logo_ImpactHubMadrid-60px.svg"
          data-retina="https://madrid.impacthub.net/wp-content/uploads/2017/09/logo-impact-hub-madrid-blanco.png"
          alt="Impact Hub Madrid"
        />
      </v-toolbar-title>
    </div>

    <v-container>
    <v-layout class="main-hero" text-center wrap>
      <v-flex>
        <h1 class="headline">Bienvenido/a a Impact Hub Madrid</h1>
    
      </v-flex>
    </v-layout>
    <v-layout class="main-container" text-center wrap>
       <v-flex mb-4>
         <p>¿Cuál es el motivo de su visita a Impact Hub?</p>
         <v-card class="button-group">
           <nuxt-link  :to="{path: 'reunion'}">
             Vengo a una reunión
          </nuxt-link>
            <nuxt-link  :to="{path: 'evento'}">
             Vengo a un evento
           </nuxt-link >
             <a role="button" target="_blank" href="https://landings.impacthubmadrid.com/solicitud-consentimiento-gdpr-totem/">
             Quiero seguir en contacto
           </a>
         </v-card>
        <p>Impact Hub Madrid tratará tus datos únicamente para tramitar esta solicitud. Puedes conocer cómo ejercer tus derechos de acceso, rectificación y suspensión en nuestra <a target="_blank" href="https://madrid.impacthub.net/aviso-legal-y-privacidad/">Política de Privacidad</a></p>
       </v-flex>
      </v-layout>
      </v-container>
  </v-app>
</template>

<script>

export default {
  name: "App",
  data: () => ({
    //
  })
};
</script>
<style scoped>
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
}
body {
  background-color: #f3f3f3;
}
.theme--light.v-card {
  background-color: transparent;
  box-shadow: none;
  border: none;
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
  font-size: 17px;
  font-weight: 300;
  line-height: 1.45;
  text-align: left;
  margin-bottom: 50px;
  color: #999
}
.flex.mb-4 {
  max-width: 550px;
  margin: auto;
}
.button-group {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
}
.button-group a {
  display: flex;
  align-items: center;
  justify-items: center;
  height: 100px;
  padding: 0 15px;
  width: 31%;
  text-decoration: none;
  color: #fff;
  background-color: #1E5D66;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
    border-radius: 0px
}
.main-container {
  margin-top: 20px;
  width: 95%;
  margin: auto;
  margin-top: 20px;
}
.v-card > *:first-child:not(.v-btn):not(.v-chip), .v-card > .v-card__progress + *:not(.v-btn):not(.v-chip) {
   border-radius: 0px
}
.main-hero {
  background-color: #1E5D66;
  padding: 25px 0;
  margin-bottom: 50px;

}
.main-hero h1,
.main-hero p {
  color: #fff;
   max-width: 550px;
  margin: auto;
  text-align: center
}
.logo {
  width: 100%;
      position: relative;
}
.main-header {
  background-color: #151515;
  padding: 10px;
  position: relative;
}
.main-header:before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top:0;
  background-color: #151515;
  padding: 10px;
  background-image: url("../assets/Mares.jpg");
  background-repeat: no-repeat;
  background-position: top;
  background-position-y: 21%;
  background-size: cover;
  opacity: 0.5;
}
</style>