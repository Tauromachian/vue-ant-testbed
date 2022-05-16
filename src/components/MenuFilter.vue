<template>
  <div>
    <slot name="activator">
      <a-button type="primary" @click="filterMenu = true">
        Open Filter
      </a-button>
    </slot>

    <a-modal
      :title="title"
      v-model="filterMenu"
      :close-on-content-click="false"
      @ok="onClick"
    >
      <slot />
    </a-modal>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import FormActionButtons from "./FormActionButtons.vue";

@Component({
  components: {
    FormActionButtons,
  },
  name: "MenuFilter",
})
export default class MenuFilter extends Vue {
  @Prop({ default: false }) readonly value!: boolean;
  @Prop({ default: "Filter" }) readonly title!: string;
  @Prop({ default: false }) readonly allowActions!: boolean;

  private filterMenuInternal = false;

  get filterMenu(): boolean {
    if (this.value) {
      return this.value;
    } else {
      return this.filterMenuInternal;
    }
  }

  set filterMenu(val: boolean) {
    this.filterMenuInternal = val;
    this.$emit("input", val);
  }

  public onClick(): void {
    this.filterMenu = false;
    this.$emit("click:accept");
  }

  public cancelClick(): void {
    this.filterMenu = false;
    this.$emit("click:cancel");
  }
}
</script>

<style lang="scss" scoped></style>
