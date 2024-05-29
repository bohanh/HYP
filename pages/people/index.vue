<script setup lang="ts">
import {breadcrumbs} from "~/composables/breadcrumbs";

const crumbs = breadcrumbs();
crumbs.value = ["/people"];

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
  {"id": 10, "name": "name10", "description": "description10"},
  {"id": 11, "name": "name11", "description": "description11"},
  {"id": 12, "name": "name12", "description": "description12"},
  {"id": 13, "name": "name13", "description": "description13"},
  {"id": 14, "name": "name14", "description": "description14"},
  {"id": 15, "name": "name15", "description": "description15"},
  {"id": 16, "name": "name16", "description": "description16"},
  {"id": 17, "name": "name17", "description": "description17"},
  {"id": 18, "name": "name18", "description": "description18"},
  {"id": 19, "name": "name19", "description": "description19"},
  {"id": 20, "name": "name20", "description": "description20"}
];

// Suddividi l'array delle persone in gruppi di 4 per riga
let peopleRows = [];
for (let i = 0; i < people.length; i += 4) {
  peopleRows.push(people.slice(i, i + 4));
}
</script>

<template>
  <div class="container">
    <div class="header">THE TEAM</div>
    <div class="title">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Bibendum amet at molestie mattis.
    </div>
    <div v-if="peopleRows.length === 0" class="person-card">No people found</div>
    <div v-else class="person-cards">
      <div v-for="(row, rowIndex) in peopleRows" :key="rowIndex" class="person-row">
        <div v-for="person in row" :key="person.id" class="person-card">
          <NuxtLink :to="'/people/' + person.id">
            <img
                class="person-thumb"
                :src="'/people/' + person.id + '.jpg'"
                :alt="'Photo of ' + person.name"
            >
            <h2 class="person-name">{{ person.name }}</h2>
            <p class="person-description">{{ person.description }}</p>
          </NuxtLink>
          <router-link :to="'/cv/' + person.id" class="see-cv">See CV</router-link>
        </div>
      </div>
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
  font-family: 'Futura', sans-serif;
}

.header {
  font-size: 2rem;
  margin-bottom: 10px;
  font-weight: bold;
  color: #2c3e50;
}

.title {
  font-size: 1.5rem;
  width: 80%;
  margin-bottom: 50px;
  color: #34495e;
}

.person-cards {
  width: 80%;
}

.person-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.person-card {
  width: 23%; /* Regola la larghezza per mostrare 4 persone per riga */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.person-thumb {
  height: 200px;
  width: 100%;
  object-fit: cover;
}

.person-name, .person-description {
  color: #000000; /* Nero */
  font-weight: normal; /* Rimuove il grassetto */
}

.see-cv {
  position: absolute;
  bottom: 0;
  left: 0;
  width: calc(100% - 20px); /* Riduce la larghezza */
  background-color: #ffffff; /* Bianco */
  color: #8e44ad; /* Viola */
  padding: 6px 0; /* Riduce il padding */
  border: 2px solid #8e44ad; /* Viola */
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
  cursor: pointer;
}

.see-cv:hover {
  background-color: #8e44ad; /* Viola */
  color: #ffffff; /* Bianco */
  border-color: #8e44ad; /* Viola */
}

</style>

