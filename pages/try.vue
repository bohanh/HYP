<script setup lang="ts">
import type {Person} from "~/model/Person";

let { data } = await useFetch("/api/people");
const people: Person[] = JSON.parse(data.value!.people);
</script>

<template>

  <div>
    {{ people }}
  </div>

</template>

<style scoped>

</style>