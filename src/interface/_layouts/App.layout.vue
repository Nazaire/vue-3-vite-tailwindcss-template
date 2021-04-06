<template>
  <div class="p-4 space-y-4">
    <div class="flex space-x-4 items-center">
      <div>I'm <b>App.layout.vue</b></div>
      <div>
        <router-link to="/home">
          <!-- Button is a GLOBALLY registered component -->
          <Button color="white"> Go to /home </Button>
        </router-link>
      </div>

      <div>
        <router-link to="/pages">
          <!-- Button is a GLOBALLY registered component -->
          <Button> Go to /pages </Button>
        </router-link>
      </div>

      <div>
        <router-link
          to="/nested-router-example"
          class="text-blue-500 hover:text-blue-800"
        >
          <Button color="blue"> Go to /nested-router-example </Button>
        </router-link>
      </div>
    </div>
    <!-- Page container -->
    <main class="relative">
      <slot></slot>
    </main>
  </div>
</template>
