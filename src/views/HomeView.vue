<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <menu-filter title="Filter"></menu-filter>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MenuFilter from "@/components/ModalFilter.vue"; // @ is an alias to /src

@Component({
  components: {
    MenuFilter,
  },
})
export default class HomeView extends Vue {}
</script>
