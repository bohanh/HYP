<script setup lang="ts">
import {breadcrumbs} from "~/composables/breadcrumbs";

const crumbs = breadcrumbs();
crumbs.value = ["/all"];

interface Project {
  id: number;
  name: string;
  description: string;
  longDes: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Project 1",
    description: "Brief description of Project 1.",
    longDes: "Detailed description of Project 1.",
  },
  {
    id: 2,
    name: "Project 2",
    description: "Brief description of Project 2.",
    longDes: "Detailed description of Project 2.",
  },
];

const goToProject = (projectId: number) => {
  // Redirect to the project page based on projectId
};


interface Service {
  id: number;
  name: string;
  description: string;
  longDes: string;
}

const services: Service[] = [
  {
    id: 1,
    name: "Service 1",
    description: "Brief description of Service 1.",
    longDes: "Detailed description of Service 1.",
  },
  {
    id: 2,
    name: "Service 2",
    description: "Brief description of Service 2.",
    longDes: "Detailed description of Service 2.",
  },
];

const goToService = (serviceId: number) => {
  // Redirect to the project page based on projectId
};

</script>

<template>
  <div class="main-container">
    <!-- Section for Projects -->
    <section class="container">
      <h2 class="section-title">Projects</h2>
      <NuxtLink to="/projects">View All Projects</NuxtLink>
      <!-- Preview of first two projects -->
      <div v-if="projects.length === 0" class="project-card">No projects found</div>
      <div v-else class="project-cards">
        <div v-for="project in projects.slice(0, 2)" :key="project.id" class="project-card" @click="goToProject(project.id)">
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
    </section>

    <!-- Section for Services -->
    <section class="container">
      <h2 class="section-title">Services</h2>
      <NuxtLink to="/services">View All Services</NuxtLink>
      <!-- Preview of first two services -->
      <div v-if="services.length === 0" class="service-card">No services found</div>
      <div v-else class="service-cards">
        <div v-for="service in services.slice(0, 2)" :key="service.id" class="service-card" @click="goToService(service.id)">
          <h2 class="violet-text"><NuxtLink :to="'/services/' + service.id">{{ service.name }}</NuxtLink></h2>
          <p>{{ service.description }}</p>
          <img
              class="service-thumb"
              :src="'/services/' + service.id + '.jpg'"
              :alt="'Photo of ' + service.name"
          />
          <NuxtLink :to="'/services/' + service.id" class="read-more">Read more</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>


<style scoped>
.content-section {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 5px; /* Add some gap between the two sections */
  padding: 50px 20px; /* Adjust padding as necessary */
}

.half {
  width: 45%; /* Adjust the width as needed to ensure they fit nicely side by side */
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: 'Futura', sans-serif;
  background-color: #f9f9f9;
}

.section-title {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 20px;
}

.project-cards, .service-cards {
  width: 100%;
  display: flex;
  justify-content: center; /* Center the cards horizontally */
}

.project-card, .service-card {
  margin: 20px;
  padding: 20px;
  width: calc(40% - 40px); /* Adjust the width to fit two cards per row */
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  text-align: center;
  cursor: pointer;
}

.project-card:hover, .service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.2);
}

.project-thumb, .service-thumb {
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