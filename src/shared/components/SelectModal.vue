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
        <div>
          <div class="border-b mb-4">
            <input
              class="block w-full border border-transparent focus:border-indigo-500 rounded-md"
              type="text"
              placeholder="Search"
              v-model="searchText"
            />
          </div>
        </div>
        <!-- {{ properties }} -->
        <div class="h-96 max-h-full overflow-y-auto">
          <ul class="divide-y divide-gray-200">
            <li
              class="relative hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
              v-for="option in filteredOptions"
              :key="option.id"
            >
              <div class="py-5 px-3">
                <a
                  href="#"
                  class="focus:outline-none"
                  @click.prevent="$emit('select', option)"
                >
                  <span class="absolute inset-0" aria-hidden="true"></span>
                  <h3 class="text-sm font-semibold text-gray-800">
                    <div class="hover:underline">
                      {{ option.name }}
                    </div>
                  </h3>
                  <p class="mt-1 text-sm text-gray-600 line-clamp-2">
                    {{ option.description }}
                  </p>
                </a>
              </div>
            </li>
          </ul>

          <div v-if="option.length === 0" class="py-5 px-3 text-gray-600">
            <slot name="empty"></slot>
          </div>
          <div
            v-else-if="filteredOptions.length === 0"
            class="py-5 px-3 text-gray-600"
          >
            Your search did not match any results
          </div>
        </div>
        <div class="mt-5 sm:mt-6">
          <Button class="w-full justify-center" @click="$emit('close')">
            Go Back
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import _ from "lodash";

export interface SelectOption<T = any> {
  id: string;
  data?: T;
  name: string;
  description: string;
}

export default defineComponent({
  props: {
    options: {
      type: Array as PropType<SelectOption[]> | undefined,
    },
  },
  data: () => ({
    searchText: null as string | null,
  }),

  computed: {
    filteredOptions(): SelectOption[] {
      let options = this.options || [];
      if (!this.searchText) return options;
      let regx = new RegExp(`${this.searchText}`, "i");
      return options.filter((prop) => {
        return prop.name.match(regx) || prop.description.match(regx);
      });
    },
  },
});
</script>

<style></style>
