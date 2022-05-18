<template>
  <a-row>
    <a-col :span="4">
      <a-card hoverable style="width: 300px">
        <template #cover>
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
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
    </a-col>
    <a-col :span="4">
      <a-card hoverable style="width: 300px">
        <template #cover>
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
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
    </a-col>
  </a-row>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

import { FormMassSelectionFilter } from "@/types/formMassSelectionFilter";

export default Vue.extend({
  name: "MassSelectionFilterImages",
  props: {
    filter: {
      type: Object as PropType<FormMassSelectionFilter>,
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
