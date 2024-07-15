<script setup lang="ts">
</script>

<template>
  <div>
    <Header/>
    <div id="max-container">
      <slot/>
      <Footer style="max-height: 10vh; min-height: 100px"/>
    </div>
  </div>
</template>

<style scoped>
#max-container {
  margin-top: 10vh;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
</style>