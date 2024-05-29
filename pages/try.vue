<script setup lang="ts">
const people: JSON = await useFetch("http://localhost:3000/data.json").data.value?.people;
</script>

<template>

  <div>
    {{ people}}
  </div>

</template>

<style scoped>

</style>