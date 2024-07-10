<script setup lang="ts">
import {breadcrumbs} from "~/composables/breadcrumbs";
import {Person} from "~/model/Person";
import {assignPeople} from "~/utils";

const crumbs = breadcrumbs();
crumbs.value = ["/people"];

let {data: data_people} = await useFetch("/api/people");
const people: Person[] = assignPeople(JSON.parse(data_people.value!.people));

// Suddividi l'array delle persone in gruppi di 4 per riga
let peopleRows: Person[][] = [];
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
  width: 23%;
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
  color: #000000;
  font-weight: normal;
}

.see-cv {
  position: absolute;
  bottom: 0;
  left: 0;
  width: calc(100% - 20px);
  background-color: #ffffff;
  color: #8e44ad;
  padding: 6px 0;
  border: 2px solid #8e44ad;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
  cursor: pointer;
}

.see-cv:hover {
  background-color: #8e44ad;
  color: #ffffff;
  border-color: #8e44ad;
}

</style>

