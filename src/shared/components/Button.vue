<template>
  <button
    class="btn"
    :class="[`btn-${size}`, color ? `btn-${color}` : null]"
    
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    color: {
      type: String as PropType<String>
    },
    size: {
      // type: String,
      default: 3,
    },
    disabled: Boolean,
  },
});
</script>
