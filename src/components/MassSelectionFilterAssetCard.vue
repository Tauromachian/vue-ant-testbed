<template>
  <a-card hoverable style="width: 300px">
    <template #cover>
      <img alt="example" :src="asset.assetArchive" />
    </template>
    <template #actions>
      <a-checkbox @change="checkCard(asset.assetArchive)"> Select </a-checkbox>
    </template>
    <a-card-meta title="Card title" description="This is the description">
      <template #avatar>
        <a-avatar src="https://joeschmoe.io/api/v1/random" />
      </template>
    </a-card-meta>
  </a-card>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

import { Asset } from "@/types/asset";

export default Vue.extend({
  name: "MassSelectionFilterImagesCard",
  props: {
    asset: {
      type: Object as PropType<Asset>,
      required: true,
    },
    value: {
      type: Array as PropType<Array<Asset>>,
      default: () => [],
    },
  },
  computed: {
    selectedImages: {
      get(): Asset[] {
        return this.value;
      },
      set(val: Asset[]) {
        this.$emit("input", val);
      },
    },
  },

  methods: {
    onClick(): void {
      this.$emit("click:accept");
    },
  },
});
</script>

<style></style>
