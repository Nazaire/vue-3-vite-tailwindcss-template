<template>
  <div>
    <div>I'm <b>Home.page.vue</b></div>
    <hello-world></hello-world>
    <shared-hello-world></shared-hello-world>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./_components/HelloWorld.vue";
import SharedHelloWorld from "@/components/SharedHelloWorld.vue"

export default defineComponent({
  components: { HelloWorld, SharedHelloWorld },
});
</script>
