<template>
  <a-card hoverable>
    <template #cover>
      <img alt="example" :src="asset.assetArchive" />
    </template>
    <template #actions>
      <a-checkbox @change="(event) => checkCard(event, asset._id)">
        Select
      </a-checkbox>
    </template>
    <a-card-meta>
      <template #description>
        <app-chip
          v-for="(tag, index) in asset.tags"
          :key="`chip-${tag}-${index}`"
          :text="tag"
        ></app-chip>
      </template>
    </a-card-meta>
  </a-card>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

import { Asset } from "@/types/asset";

import AppChip from "./AppChip.vue";

export default Vue.extend({
  name: "MassSelectionFilterImagesCard",
  components: {
    AppChip,
  },
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
