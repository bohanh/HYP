<script setup lang="ts">
import {breadcrumbs} from "~/composables/breadcrumbs";
import {assignProjects} from "~/utils";
import type {Project} from "~/model/Project";

const crumbs = breadcrumbs();
crumbs.value = ["/projects"];

let { data: data_projects } = await useFetch("/api/projects");
const projects: Project[] = assignProjects(JSON.parse(data_projects.value!.projects));
</script>
<template>
  <div class="container">
    <div class="header">PROJECTS</div>
    <div class="title">
      This section outlines our various projects aimed at addressing gender-based violence, trafficking, and empowering marginalized groups.
    </div>
    <div v-if="projects.length === 0" class="project-card">No projects found</div>
    <div v-else class="project-cards">
      <div v-for="project in projects" :key="project.id" class="project-card">
        <h2 class="violet-text"><NuxtLink :to="'/projects/' + project.id">{{ project.name }}</NuxtLink></h2>
        <p>{{ project.description }}</p>
        <img
          class="project-thumb"
          :src="'/projects/' + project.id + '.jpg'"
          :alt="'Photo of ' + project.name"
        />
        <NuxtLink :to="'/projects/' + project.id" class="read-more">Read more</NuxtLink>
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
  padding: 50px 20px;
  font-family: 'Futura', sans-serif;
  background-color: #f9f9f9;
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

.project-cards {
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
}

.project-card {
  margin: 20px;
  padding: 20px;
  width: calc(33.333% - 40px);
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  text-align: center;
  cursor: pointer;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.2);
}

.project-thumb {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
}

.violet-text {
  color: #8e44ad;
}

h2 {
  margin: 0 0 10px;
}

p {
  margin: 0;
  font-size: 0.875rem;
}

.read-more {
  display: inline-block;
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #8e44ad;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;
  border: 2px solid #8e44ad;
}

.read-more:hover {
  background-color: #6c3483;
}
</style>


