<script setup lang="ts">
import {breadcrumbs} from "~/composables/breadcrumbs";
import {assignProjects} from "~/utils";
import type {Project} from "~/model/Project";

const crumbs = breadcrumbs();
crumbs.value.length = 0;

let {data: data_projects} = await useFetch("/api/projects");

const latestProject: Project | undefined = data_projects.value!.projects.length > 0 ? assignProjects(JSON.parse(data_projects.value!.projects))[0] : undefined;
const bgImageStyle = !!latestProject ? `background-image: url('/projects/${latestProject.id}.jpg')` : '';

const missions = [
  {"icon": "sentiment_satisfied", "number": "250+", "name": "Women Helped"},
  {"icon": "content_copy", "number": "20+", "name": "Completed Projects"},
  {"icon": "local_pizza", "number": "1.8K+", "name": "Available Resources"},
  {"icon": "group", "number": "11K+", "name": "Donors"},
]
const history = [
  {
    "title": "point 1",
    "description": "et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam."
  },
  {
    "title": "point 2",
    "description": "et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam."
  },
  {
    "title": "point 3",
    "description": "et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam."
  },
  {
    "title": "point 4",
    "description": "et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam."
  },
]
</script>

<template>
  <div class="page-container">
    <div v-if="!!latestProject" id="latest-project" :style="bgImageStyle">
      <div id="latest-project-texts">
        <h2 style="color: var(--header-button-color)">{{ latestProject.name }}</h2>
        <p style="font-size: 80%">{{ latestProject.description }}</p>
        <NuxtLink id="latest-project-button" :to="'/projects/'+latestProject.id">Learn more</NuxtLink>
      </div>
    </div>
    <div id="mission">
      <h2>MISSION</h2>
      <p>
        Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in
        viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar. Fermentum scelerisque
        sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis.
      </p>
      <div id="mission-list">
        <div v-for="mission in missions" class="mission-item">
          <i class="material-icons" style="font-size: 200%">{{ mission.icon }}</i>
          <h3>{{ mission.number }}</h3>
          <p>{{ mission.name }}</p>
        </div>
      </div>
    </div>
    <div class="separator"/>
    <div id="history-grid">
      <div/>
      <div class="timeline">
        <div style="width: 5pt; height: 20pt; background-color: rgba(0,0,0,0)"/>
        <div style="width: 20pt; height: 20pt; border-radius: 50%;background-color: var(--header-button-color)"/>
        <div style="width: 5pt; height: 100pt; background-color: var(--header-button-color)"/>
      </div>
      <div class="history-item-right">
        <h2>{{ history[0].title }}</h2>
        <p>{{ history[0].description }}</p>
      </div>
      <div class="history-item-left">
        <h2>{{ history[1].title }}</h2>
        <p>{{ history[1].description }}</p>
      </div>
      <div class="timeline">
        <div style="width: 5pt; height: 20pt; background-color: var(--header-button-color)"/>
        <div style="width: 20pt; height: 20pt; border-radius: 50%;background-color: var(--header-button-color)"/>
        <div style="width: 5pt; height: 100pt; background-color: var(--header-button-color)"/>
      </div>
      <div/>
      <div/>
      <div class="timeline">
        <div style="width: 5pt; height: 20pt; background-color: var(--header-button-color)"/>
        <div style="width: 20pt; height: 20pt; border-radius: 50%;background-color: var(--header-button-color)"/>
        <div style="width: 5pt; height: 100pt; background-color: var(--header-button-color)"/>
      </div>
      <div class="history-item-right">
        <h2>{{ history[2].title }}</h2>
        <p>{{ history[2].description }}</p>
      </div>
      <div class="history-item-left">
        <h2>{{ history[3].title }}</h2>
        <p>{{ history[3].description }}</p>
      </div>
      <div class="timeline">
        <div style="width: 5pt; height: 20pt; background-color: var(--header-button-color)"/>
        <div style="width: 20pt; height: 20pt; border-radius: 50%;background-color: var(--header-button-color)"/>
      </div>
      <div/>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow-y: auto;
  overflow-x: hidden;
  font-family: Futura;
}

#latest-project {
  width: 100%;
  aspect-ratio: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-size: cover;
  padding-left: 5%;
}

#latest-project-texts {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 25pt;
  font-weight: bold;
  color: white;
}

#latest-project-button {
  font-size: 80%;
  font-weight: bold;
  color: white;
  background-color: var(--header-button-color);
  border: none;
  border-radius: 25px;
  text-decoration: none;
  padding-inline: 25px;
  padding-block: 15px;
}

#mission {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
}

#mission-list {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.mission-item {
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.separator {
  width: 100vw;
  height: 2px;
  border: var(--header-button-color) 1px solid;
  background-color: var(--header-button-color);
}

#history-grid {
  width: 80vw;
  display: grid;
  grid-template-columns: 5fr 1fr 5fr;
  grid-template-rows: repeat(4, 1fr);
  gap: 0 10px;
  padding: 50px;
}

.history-item-left {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  text-align: right;
}

.history-item-right {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

.timeline {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
</style>