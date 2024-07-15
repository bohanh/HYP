<script setup lang="ts">
import {useRoute} from 'nuxt/app';
import {breadcrumbs} from "~/composables/breadcrumbs";
import {Person} from "~/model/Person"
import type {Project} from "~/model/Project";
import type {Service} from "~/model/Service";
import {assignPeople, assignProjects, assignServices} from "~/utils";

const id = useRoute().params.id;
const crumbs = breadcrumbs();
const crumb0 = "/people/" + id;
if (crumb0 !== crumbs.value[crumbs.value.length - 1]) {
  crumbs.value.push(crumb0);
}

let { data: data_people } = await useFetch("/api/people");
let { data: data_projects } = await useFetch("/api/projects");
let { data: data_services } = await useFetch("/api/services");

const people: Person[] = assignPeople(JSON.parse(data_people.value!.people));
const projects: Project[] = assignProjects(JSON.parse(data_projects.value!.projects));
const services: Service[] = assignServices(JSON.parse(data_services.value!.services));
let person: Person;
for (let p of people) {
  if (p.id.toString() === id) {
    person = p;
  }
}

function crumb(bread: string): string {
  let breads: string [] = bread.split(' ');
  if (breads.length > 1) {
    switch (breads[0]) {
      case 'people':
        for (let person of people) {
          if (person.id.toString() === breads[1]) {
            return person.name;
          }
        }
        break;
      case 'projects':
        for (let project of projects) {
          if (project.id.toString() === breads[1]) {
            return project.name;
          }
        }
        break;
      case 'services':
        for (let service of services) {
          if (service.id.toString() === breads[1]) {
            return service.name;
          }
        }
    }
  }
  return bread;
}

</script>

<template>
  <div class="person-container">
    <div class="breadcrumbs">
      <div class="breadcrumb" v-for="breadcrumb of crumbs.slice(0, -1)">
        <NuxtLink :to="breadcrumb" style="margin:0; text-decoration: underline;color: #999999;" tabindex="0">
          {{ crumb(breadcrumb.replace(/^\/|\/$/g, '').replace(/\//g, ' ')) }}
        </NuxtLink>
        <p style="margin: 0;margin-inline: 5px"> > </p>
      </div>
      <p style="margin: 0">{{ crumb(crumbs.at(-1)!.replace(/^\/|\/$/g, '').replace(/\//g, ' ')) }}</p>
    </div>
    <div id="person">
      <img
          id="person-photo"
          :src="'people/' + useRoute().params.id + '.jpg'"
          :alt="'photo of ' + person.name"
      >
      <div id="person-info">
        <h2>{{ person.name }}</h2>
        <div id="person-socials">
          <NuxtLink v-for="key in Object.keys(person.socials)" :to="person.socials.getSocial(key)" external target="_blank" tabindex="0">
            <img
                class="person-socials-icon"
                :src="'socials/colored/' + key + '.svg'"
                :alt="'link to ' + key + ' of ' + person.name"
            >
          </NuxtLink  >
        </div>
        <p>{{ person.description }}</p>
      </div>
    </div>
    <div id="experiences">
      <div v-for="experience in person.experiences" class="experience">
        <div class="experience-title">
          <span style="font-size: 150%; font-weight: bold">
            {{experience.title}}
          </span>
          <span style="font-style: italic; color: gray">
            {{experience.time}}
          </span>
        </div>
        <span style="font-weight: bold">
          {{experience.location}}
        </span>
        <span>
          {{experience.description}}
        </span>
      </div>
    </div>
    <div id="projects">
      <div v-for="project in projects" class="project-container">
        <NuxtLink v-if="project.id in person.projects" class="project-card" :to="'/projects/' + project.id">
          <h2>{{ project.name }}</h2>
          <p>{{ project.description }}</p>
          <img
              class="project-img"
              :src="'projects/' + project.id + '.jpg'"
              :alt="'photo of ' + project.name"
          >
        </NuxtLink>
      </div>
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
  overflow-x: hidden;
}

.breadcrumbs {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 60px;
  padding-block: 20px;
  font-size: 80%;
  color: #999999
}

.breadcrumb {
  display: flex;
  align-items: center;
  justify-content: center;
}

#person {
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 50px;
}

#person-photo {
  width: 50%;
  aspect-ratio: 1;
  object-fit: cover;
}

#person-info {
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
}

#person-socials {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;

}

.person-socials-icon {
  width: 25px;
  height: 25px;
  fill: var(--header-button-color);
}

#experiences {
  font-size: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 60%;
  margin-right: 30%;
  margin-block: 50px;
  gap: 25px;
}

.experience {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.experience-title {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

#projects {
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-block: 50px;
}

.project-container {
  max-width: 30%;
  aspect-ratio: 1;
}

.project-card {
  width: 100%;
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 50px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: inherit;
}

.project-img {
  width: 80%;
  aspect-ratio: 5/3;
  object-fit: cover;
}

</style>