<script setup lang="ts">
import {Person} from "~/model/Person";
import {assignPeople} from "~/utils";

let { data: data_people } = await useFetch("/api/people");
const people: Person[] = assignPeople(JSON.parse(data_people.value!.people));
</script>

<template>
  <div class="container">
    <div class="header">THE TEAM</div>
    <div class="title">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Bibendum amet at molestie mattis.
    </div>
    <div class="person-cards">
      <NuxtLink v-for="person in people" :key=person.id class="person-card" :to="'/people/' + person.id">
        <img
            class="person-thumb"
            :src="'/HYP/people/' + person.id + '.jpg'"
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
  width: 25%;
  margin: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.person-thumb {
  height: 300px;
  width: 300px;
  object-fit: cover;
}

</style>