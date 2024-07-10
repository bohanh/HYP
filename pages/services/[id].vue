<script setup lang="ts">
import {breadcrumbs} from "~/composables/breadcrumbs";
import {useRoute} from "nuxt/app";
import type {Service} from "~/model/Service";
import {Person} from "~/model/Person";
import {assignPeople, assignProjects, assignServices} from "~/utils";
import type {Project} from "~/model/Project";

const id = useRoute().params.id;
const crumbs = breadcrumbs();
const crumb0 = "/services/" + id;
if (crumb0 !== crumbs.value[crumbs.value.length - 1]) {
  crumbs.value.push(crumb0);
}

let { data: data_people } = await useFetch("/api/people");
let { data: data_projects } = await useFetch("/api/projects");
let { data: data_services } = await useFetch("/api/services");

const people: Person[] = assignPeople(JSON.parse(data_people.value!.people));
const projects: Project[] = assignProjects(JSON.parse(data_projects.value!.projects));
const services: Service[] = assignServices(JSON.parse(data_services.value!.services));
let service: Service;
for (let s of services) {
  if (s.id.toString() === id) {
    service = s;
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

function getPersonName(id: number) {
  for (let person of people) {
    if (person.id.toString() === id.toString()) {
      return person.name;
    }
  }
  return "----";
}

</script>

<template>
  <div class="service-container">
    <div class="breadcrumbs">
      <div class="breadcrumb" v-for="breadcrumb of crumbs.slice(0, -1)">
        <NuxtLink :to="breadcrumb" style="margin:0; text-decoration: underline;color: #999999;">
          {{ crumb(breadcrumb.replace(/^\/|\/$/g, '').replace(/\//g, ' ')) }}
        </NuxtLink>
        <p style="margin: 0;margin-inline: 5px"> > </p>
      </div>
      <p style="margin: 0">{{ crumb(crumbs.at(-1)!.replace(/^\/|\/$/g, '').replace(/\//g, ' ')) }}</p>
    </div>
    <img
        id="hero"
        :src="'/services/' + useRoute().params.id + '.jpg'"
        :alt="'photo of the service ' + service.name"
    >
    <div id="title">
      <p style="color: var(--header-button-color); font-size: 150%;font-weight: bold;font-variant: all-petite-caps">
        {{ service.name }}
      </p>
      <h2>{{ service.description }}</h2>
    </div>
    <div id="parts">
      <div class="part" v-for="section of service.sections">
        {{ section }}
      </div>
    </div>
    <div id="words">
      <img
          id="words-image"
          :src="'/services/' + useRoute().params.id + '+.jpg'"
          :alt="'photo of the service ' + service.name"
      />
      <p style="width: 60%; margin-right: 50px">{{ service.words }}</p>
    </div>
    <div id="testimonials-container">
      <p style="color: var(--header-button-color); font-size: 150%;font-weight: bold;font-variant: all-petite-caps">
        TESTIMONIALS
      </p>
      <div id="testimonials">
        <div class="testimonial" v-for="testimonial of service.testimonials">
          <p>{{ testimonial.words }}</p>
          <NuxtLink class="testimonial-person" :to="'/people/'+testimonial.id">
            <img
                class="testimonial-person-img"
                :src="'/people/' + testimonial.id + '.jpg'"
                :alt="'photo of ' + getPersonName(testimonial.id)"
            />
            <div class="testimonial-person-info">
              <p style="font-size: 120%">{{ getPersonName(testimonial.id) }}</p>
              <p>{{ testimonial.role }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.service-container {
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

#hero {
  width: 100%;
  aspect-ratio: 2;
  object-fit: cover;
}

#title {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-block: 50px;
}

#parts {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
  align-items: center;
  justify-content: center;
}

#words {
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 50px;
  margin-block: 50px;
}

#words-image {
  min-width: 40%;
  max-width: 40%;
  aspect-ratio: 1;
  object-fit: cover;
}

#testimonials-container {
  max-width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  margin-bottom: 50px;
}

#testimonials {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 50px;
  overflow-x: scroll;
  padding-bottom: 1px;
  scrollbar-width: none; /* For Firefox */
  -ms-overflow-style: none;  /* For Internet Explorer and Edge */
}
#testimonials::-webkit-scrollbar { /* For WebKit browsers */
  display: none;
}

.testimonial {
  min-width: 750px;
  aspect-ratio: 5;
  border: 1px black solid;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-inline: 30px;
  padding-block: 10px;
}

.testimonial-person {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  color: inherit;
  text-decoration: none;
}

.testimonial-person-img {
  width: 100px;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 50%;
}

.testimonial-person-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>