<template>
  <a-row>
    <a-col :span="4" v-for="(asset, index) in assets" :key="index">
      <mass-selection-filter-asset-card
        :asset="asset"
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
          tags: "",
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
          tags: "",
          is_bad: "",
        },
      ],
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
