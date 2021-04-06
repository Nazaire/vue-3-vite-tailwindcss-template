<template>
  <a
    href="#"
    class="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
    role="menuitem"
    @click="$emit('click')"
  >
    <slot></slot>
  </a>
</template>
