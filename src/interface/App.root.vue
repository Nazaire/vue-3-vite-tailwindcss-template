<template>
  <!-- Render the correct layout -->
  <div>
    <!-- You could hook this up to a variable and dynamically change the layout -->
    <component :is="'app-layout'">
      <router-view v-slot="{ Component, route }">
        <XyzTransition duration="auto" :xyz="route.meta.xyz" mode="out-in">
          <component :is="Component"></component>
        </XyzTransition>
      </router-view>
    </component>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide } from "vue";
import AppLayout from "./_layouts/App.layout.vue";

export default defineComponent({
  components: { AppLayout },
});
</script>
