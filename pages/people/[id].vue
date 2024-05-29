<script setup lang="ts">
import Header from '~/components/header.vue';
import {useRoute} from 'nuxt/app';
import {breadcrumbs} from "~/composables/breadcrumbs";

const crumbs = breadcrumbs();
crumbs.value.push("/people/" + useRoute().params.id);
</script>

<template>
  <div class="person-container">
    <div class="breadcrumbs">
      <div class="breadcrumb" v-for="breadcrumb of crumbs.slice(0, -1)">
        <NuxtLink :to="breadcrumb" style="margin:0; text-decoration: underline;color: #999999;">
          {{ breadcrumb.replace(/^\/|\/$/g, '').replace(/\//g, ' ') }}
        </NuxtLink>
        <p style="margin: 0;margin-inline: 5px"> > </p>
      </div>
      <p style="margin: 0">{{ crumbs.at(-1)!.replace(/^\/|\/$/g, '').replace(/\//g, ' ') }}</p>
    </div>
    <div id="person">
      <img
          id="person-photo"
          src=""
      >
    </div>
  </div>
</template>

<style scoped>
.person-container {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-family: Futura;
  font-size: 15pt;
}

.breadcrumbs {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: var(--background-color);
  padding-left: 60px;
  padding-block: 10px;
  font-size: 80%;
  color: #999999
}

.breadcrumb {
  display: flex;
  align-items: center;
  justify-content: center;
}

#person {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}


</style>