<template>
  <a-card hoverable style="width: 300px">
    <template #cover>
      <img alt="example" :src="asset.assetArchive" />
    </template>
    <template #actions>
      <a-checkbox @change="(event) => checkCard(event, asset.assetArchive)">
        Select
      </a-checkbox>
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
import { Checkbox } from "ant-design-vue";

export default Vue.extend({
  name: "MassSelectionFilterImagesCard",
  props: {
    asset: {
      type: Object as PropType<Asset>,
      required: true,
    },
    value: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
  },
  computed: {
    selectedImages: {
      get(): string[] {
        return this.value;
      },
      set(val: string[]) {
        this.$emit("input", val);
      },
    },
  },

  data() {
    return {
      assetFilesSet: new Set(),
    };
  },

  methods: {
    checkCard(event: Event, assetFile: string): void {
      if ((event?.target as HTMLInputElement)?.checked) {
        this.assetFilesSet.add(assetFile);
      } else {
        this.assetFilesSet.delete(assetFile);
      }
      this.selectedImages = Array.from(this.assetFilesSet) as string[];
    },
    onClick(): void {
      this.$emit("click:accept");
    },
  },
});
</script>

<style></style>
