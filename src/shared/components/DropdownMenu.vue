<template>
  <div
    class="z-10 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200"
    role="menu"
    aria-orientation="vertical"
    aria-labelledby="project-options-menu-0"
    v-click-outside="() => $emit('close')"
  >
    <div class="py-1" role="none" v-if="this.$slots.default">
      <slot></slot>
    </div>
    <slot name="root"></slot>
    <!-- <div class="py-1" role="none"></div> -->
  </div>
</template>