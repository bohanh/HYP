<script setup lang="ts">
import {breadcrumbs} from "~/composables/breadcrumbs";
import {useRoute} from "nuxt/app";

const crumbs = breadcrumbs();
crumbs.value.push("/services/" + useRoute().params.id);
</script>

<template>
  <div>Services {{$route.params.id}}</div>
</template>

<style scoped>

</style>