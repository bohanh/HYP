<script setup lang="ts">
</script>

<template>
  <div>
    <Header/>
    <div id="max-container">
      <slot/>
      <Footer/>
    </div>
  </div>
</template>

<style scoped>
#max-container {
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
</style>