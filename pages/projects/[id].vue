<script setup lang="ts">
import Header from "~/components/header.vue"
import {breadcrumbs} from "~/composables/breadcrumbs";
import {useRoute} from "nuxt/app";

const crumbs = breadcrumbs();
crumbs.value.push("/projects/" + useRoute().params.id);
</script>

<template>
  <Header/>
  <div>Project {{$route.params.id}}</div>
</template>

<style scoped>

</style>