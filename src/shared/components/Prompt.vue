<template>
  <div class="fixed z-10 inset-0 overflow-y-auto">
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <div class="fixed inset-0 transition-opacity" aria-hidden="true">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
        >&#8203;</span
      >

      <div
        class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <h3
          class="text-lg leading-6 font-medium text-gray-900"
          id="modal-title"
        >
          {{ title }}
        </h3>
        <div class="mt-2" v-if="paragraph">
          <p class="text-sm text-gray-500">
            {{ paragraph }}
          </p>
        </div>
        <div class="mt-4">
          <input
            type="text"
            class="theme"
            v-model="value"
            :placeholder="placeholder"
            :disabled="busy"
          />
        </div>
        <div class="mt-4 sm:flex sm:flex-row-reverse">
          <Button
            type="button"
            class="sm:ml-3"
            @click="this.$emit('confirm', value)"
            :disabled="busy"
          >
            OK
            <Spinner class="-mr-1 ml-2" v-if="busy"></Spinner>
          </Button>
          <Button
            type="button"
            color="white"
            @click="this.$emit('cancel')"
            :disabled="busy"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import _ from "lodash";

export default defineComponent({
  emits: ["confirm", "cancel"],
  props: {
    title: String as PropType<string>,
    paragraph: String as PropType<string>,
    placeholder: String as PropType<string>,
    busy: Boolean as PropType<boolean>,
  },
  data: () => ({
    value: null as string | null,
  }),

  computed: {},
});
</script>

<style></style>
