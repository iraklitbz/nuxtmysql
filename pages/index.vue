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

    <v-content>
      <guest />
    </v-content>
  </v-app>
</template>

<script>
import guest from "~/components/guest.vue";

export default {
  name: "App",
  components: {
    guest
  },
  data: () => ({
    //
  })
};
</script>
<style scoped>
.logo {
  width: 100%;
}
.main-header {
  background-color: #812926;
  padding: 10px;
}
</style>