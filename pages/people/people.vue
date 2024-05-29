<script setup lang="ts">
import Header from "~/components/header.vue"
import Footer from "~/components/footer.vue";

const people = [
  {"id": 1, "name": "name1", "description": "description1"},
  {"id": 2, "name": "name2", "description": "description2"},
  {"id": 3, "name": "name3", "description": "description3"},
  {"id": 4, "name": "name4", "description": "description4"},
  {"id": 5, "name": "name5", "description": "description5"},
  {"id": 6, "name": "name6", "description": "description6"},
  {"id": 7, "name": "name7", "description": "description7"},
  {"id": 8, "name": "name8", "description": "description8"},
  {"id": 9, "name": "name9", "description": "description9"},
  {"id": 10, "name": "name10", "description": "description10"}
];
</script>

<template>
  <div class="container">
    <div class="header">THE TEAM</div>
    <div class="title">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Bibendum amet at molestie mattis.
    </div>
    <div v-if="people.length === 0" class="person-card">No people found</div>
    <div v-else class="person-cards">
      <NuxtLink v-for="person in people" :key=person.id class="person-card" :to="'/people/' + person.id">
        <img
            class="person-thumb"
            :src="'/people/' + person.id + '.jpg'"
            :alt="'Photo of ' + person.name"
        >
        <h2>{{ person.name }}</h2>
        <p>{{ person.description }}</p>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-block: 50px;
  font-family: Futura;
}

.header {
  font-size: 100%;
  margin-block: 10px;
  font-weight: bold;
  color: darkblue;
}

.title {
  font-size: 200%;
  width: 80%;
  margin-bottom: 50px;
}

.person-cards {
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.person-card {
  margin: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.person-thumb {
  height: 300px;
  width: 300px;
}

</style>