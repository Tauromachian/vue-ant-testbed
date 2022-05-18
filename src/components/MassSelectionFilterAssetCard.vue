<template>
  <a-card hoverable style="width: 300px">
    <template #cover>
      <img alt="example" :src="asset.assetArchive" />
    </template>
    <template #actions>
      <a-button>Select this image</a-button>
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
  },
  data() {
    return {
      nestedGroups: [],
      devices: [],
      cameras: [],
      projects: [],
      jobs: [],
      useCases: [],
      models: [],
      tags: [],
    };
  },

  methods: {
    onClick(): void {
      this.$emit("click:accept");
    },
  },
});
</script>

<style></style>
