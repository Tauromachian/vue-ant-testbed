<template>
  <div class="home">
    <div class="logo-wrapper">
      <img alt="Vue logo" src="../assets/logo.png" />
    </div>

    <div class="container">
      <training-stepper></training-stepper>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TrainingStepper from "@/components/TrainingStepper.vue";

export default Vue.extend({
  components: { TrainingStepper },
});
</script>

<style scoped>
.container {
  max-width: 100%;
}

@media screen and (min-width: 640px) {
  .container {
    max-width: 610px;
    margin-right: auto;
    margin-left: auto;
  }
}

@media screen and (min-width: 768px) {
  .container {
    max-width: 728px;
  }
}

@media screen and (min-width: 1024px) {
  .container {
    max-width: 954px;
  }
}

@media screen and (min-width: 1280px) {
  .container {
    max-width: 1220px;
  }
}

@media screen and (min-width: 1536px) {
  .container {
    max-width: 1456px;
  }
}

.logo-wrapper {
  display: flex;
  justify-content: center;
}
</style>
