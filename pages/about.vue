<script setup lang="ts">
import {breadcrumbs} from "~/composables/breadcrumbs";

const crumbs = breadcrumbs();
crumbs.value.length = 0;

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
const successes = [
  {"icon": "sentiment_satisfied", "number": "250+", "name": "Women Helped"},
  {"icon": "content_copy", "number": "20+", "name": "Completed Projects"},
  {"icon": "local_pizza", "number": "1.8K+", "name": "Available Resources"},
  {"icon": "group", "number": "11K+", "name": "Donors"},
]
</script>

<template>
  <div class="about-container">
    <div id="about">
      <div id="about-text">
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum amet at molestie mattis.</h2>
        <p>Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo
          in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar.</p>
      </div>
      <img
          id="about-image"
          src="/HYP/projects/1.jpg"
      >
    </div>
    <div class="separator"/>
    <div id="history">
      <h1>HISTORY</h1>
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
    <div class="separator"/>
    <div id="successes">
      <h2>SUCCESSES SO FAR</h2>
      <p>
        Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in
        viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar. Fermentum scelerisque
        sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis.
      </p>
      <div id="successes-list">
        <div v-for="success in successes" class="successes-item">
          <i class="material-icons" style="font-size: 200%">{{ success.icon }}</i>
          <h3>{{ success.number }}</h3>
          <p>{{ success.name }}</p>
        </div>
      </div>
    </div>
    <div class="separator"/>
    <div id="bottom">
      <img
          id="bottom-image"
          src="/HYP/projects/1.jpg"
          alt="image of project 1"
      >
      <div id="bottom-text">
        <p>Body Medium. Most fonts have a particular weight which corresponds to one of the numbers in Common weight
          name
          mapping. However some fonts, called variable fonts, can support a range of weights with a more or less fine
          granularity, and this can give the designer a much closer degree of control over the chosen weight.
          Pellentesque
          auctor adipiscing lacus viverra. Neque, nulla in amet eget. Arcu, nibh purus urna amet sagittis quis tellus
          etiam eget. Ultrices egestas a tristique aliquet odio varius.</p>
        <p>Body Medium. Most fonts have a particular weight which corresponds to one of the numbers in Common weight
          name
          mapping. However some fonts, called variable fonts, can support a range of weights with a more or less fine
          granularity, and this can give the designer a much closer degree of control over the chosen weight.
          Pellentesque
          auctor adipiscing lacus viverra. Neque, nulla in amet eget. Arcu, nibh purus urna amet sagittis quis tellus
          etiam eget. Ultrices egestas a tristique aliquet odio varius.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow-y: auto;
  overflow-x: hidden;
  font-family: Futura;
  font-size: 15pt;
}

#about {
  width: 80vw;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 50px;
  padding: 50px;
}

#about-text {
  width: 30vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

#about-image {
  width: 40vw;
  aspect-ratio: 1;
  overflow: hidden;
  object-fit: cover;
}

.separator {
  width: 100vw;
  height: 2px;
  border: var(--header-button-color) 1px solid;
  background-color: var(--header-button-color);
}

#history {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  font-size: 80%;
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

#successes {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
}

#successes-list {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.successes-item {
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#bottom {
  width: 80vw;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 50px;
  padding: 50px;
}

#bottom-text {
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

#bottom-image {
  width: 30vw;
  aspect-ratio: 1;
  overflow: hidden;
  object-fit: cover;
}
</style>