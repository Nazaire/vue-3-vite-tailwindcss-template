<template>
  <div>
    <div class="flex space-x-4 items-center">
      <div>I'm <b>NestedRouterExample.layout.vue</b></div>
      <div>
        <router-link to="/nested-router-example/one">
          <Button>Go to /one</Button>
        </router-link>
      </div>

      <div>
        <router-link to="/nested-router-example/two">
          <Button>Go to /two</Button>
        </router-link>
      </div>
    </div>
    <div class="bg-gray-100 p-4 mt-2">
      <router-view v-slot="{ Component, route }">
        <XyzTransition duration="auto" :xyz="route.meta.xyz" mode="out-in">
          <component :is="Component"></component>
        </XyzTransition>
      </router-view>
    </div>
  </div>
</template>
