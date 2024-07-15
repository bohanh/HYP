<script setup lang="ts">
import {breadcrumbs} from "~/composables/breadcrumbs";
import {Person} from "~/model/Person";
import {assignPeople} from "~/utils";

const crumbs = breadcrumbs();
crumbs.value = ["/people"];

let {data: data_people} = await useFetch("/api/people");
const people: Person[] = assignPeople(JSON.parse(data_people.value!.people));
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
      <NuxtLink v-for="person in people" :key="person.id" class="person-card-container" :to="'/people/' + person.id"
                tabindex="0">
        <div class="person-card">
          <img
              class="person-thumb"
              :src="'/HYP/people/' + person.id + '.jpg'"
              :alt="'Photo of ' + person.name"
          >
          <span class="person-name">{{ person.name }}</span>
          <span class="person-description">{{ person.description.substring(0, 120) + "..." }}</span>
        </div>
        <!--          <router-link :to="'/cv/' + person.id" class="see-cv">See CV</router-link>-->
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
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 25px;
}

.person-card-container {
  width: 23%;
  min-width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
}

.person-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  aspect-ratio: 2/3;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  text-decoration: none;
  border-radius: 20px;
  color: transparent;
  background-color: transparent;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  border: none;
  padding: 0;
  gap: 10px;
}

.person-thumb {
  aspect-ratio: 1;
  width: 100%;
  object-fit: cover;
}

.person-name {
  color: black;
  font-size: 120%;
  font-weight: bold;
  text-decoration: none;
  padding-inline: 5%;
  text-overflow: ellipsis;
}

.person-description {
  display: block;
  color: black;
  font-weight: normal;
  text-decoration: none;
  padding-inline: 5%;
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

