<template>
  <a-row>
    <a-col
      :xs="24"
      :sm="12"
      :md="8"
      :lg="8"
      :xl="6"
      v-for="(asset, index) in assets"
      :key="index"
      class="mb-1"
    >
      <mass-selection-filter-asset-card
        :asset="asset"
        v-model="selectedAssets"
      ></mass-selection-filter-asset-card>
    </a-col>
  </a-row>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

import { FormMassSelectionFilter } from "@/types/formMassSelectionFilter";

import MassSelectionFilterAssetCard from "./MassSelectionFilterAssetCard.vue";

export default Vue.extend({
  name: "MassSelectionFilterImages",
  components: {
    MassSelectionFilterAssetCard,
  },
  props: {
    filter: {
      type: Object as PropType<FormMassSelectionFilter>,
      required: true,
    },
  },
  data() {
    return {
      selectedAssets: [],
      assets: [
        {
          assetArchive:
            "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
          organization: 0,
          groups: 0,
          job: 0,
          camera: 0,
          model: 0,
          annotation: 0,
          s3_path: 0,
          asset_type: "",
          create_date: "",
          tags: ["tag1", "tag2"],
          is_bad: "",
        },
        {
          assetArchive:
            "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
          organization: 0,
          groups: 0,
          job: 0,
          camera: 0,
          model: 0,
          annotation: 0,
          s3_path: 0,
          asset_type: "",
          create_date: "",
          tags: ["tag3", "tag4"],
          is_bad: "",
        },
        {
          assetArchive:
            "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
          organization: 0,
          groups: 0,
          job: 0,
          camera: 0,
          model: 0,
          annotation: 0,
          s3_path: 0,
          asset_type: "",
          create_date: "",
          tags: ["tag3", "tag4"],
          is_bad: "",
        },
        {
          assetArchive:
            "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
          organization: 0,
          groups: 0,
          job: 0,
          camera: 0,
          model: 0,
          annotation: 0,
          s3_path: 0,
          asset_type: "",
          create_date: "",
          tags: ["tag3", "tag4"],
          is_bad: "",
        },
      ],
    };
  },
});
</script>

<style scoped>
.mb-1 {
  margin-bottom: 1em;
}

.button-wrapper {
  display: flex;
  justify-content: left;
}
</style>
