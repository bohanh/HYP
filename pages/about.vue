<script setup lang="ts">
import {breadcrumbs} from "~/composables/breadcrumbs";

const crumbs = breadcrumbs();
crumbs.value.length = 0;

const history = [
  {
    title: "Foundation",
    description: "Founded in 2010, our organization started with the goal of supporting women in need, offering resources and a safe space for growth and empowerment."
  },
  {
    title: "Expansion",
    description: "Over the years, we have expanded our services to include educational programs, career development workshops, and community outreach initiatives"
  },
  {
    title: "Recognition",
    description: "We have been recognized nationally for our impactful work, receiving numerous awards and grants to further our mission."
  },
  {
    title: "Future Vision",
    description: "Looking ahead, we aim to broaden our reach, touching the lives of more women and communities across the nation."
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
        <h1>Empowering Women, Transforming Communities</h1>
        <p>Our organization is dedicated to empowering women through comprehensive support, advocacy, and educational
          programs. We believe in creating a world where every woman has the opportunity to reach her full potential and
          contribute to her community.</p>
      </div>
      <img
          id="about-image"
          :src="'/HYP/image/projects/1.jpg'"
          alt="Photo of project 1"
      >
    </div>
    <div class="separator"/>
    <div id="history">
      <h1>HISTORY</h1>
      <div id="history-grid">
        <div/>
        <div class="timeline">
          <div style="width: 5pt; height: 20pt; background-color: rgba(0,0,0,0)"/>
          <div style="width: 30pt; height: 30pt; border-radius: 50%;background-color: var(--header-button-color)"/>
          <div style="width: 5pt; height: 150pt; background-color: var(--header-button-color)"/>
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
          <div style="width: 5pt; height: 20pt;background-color: var(--header-button-color)"/>
          <div style="width: 30pt; height: 30pt; border-radius: 50%;background-color: var(--header-button-color)"/>
          <div style="width: 5pt; height: 150pt; background-color: var(--header-button-color)"/>
        </div>
        <div/>
        <div/>
        <div class="timeline">
          <div style="width: 5pt; height: 20pt;background-color: var(--header-button-color)"/>
          <div style="width: 30pt; height: 30pt; border-radius: 50%;background-color: var(--header-button-color)"/>
          <div style="width: 5pt; height: 150pt; background-color: var(--header-button-color)"/>
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
          <div style="width: 5pt; height: 20pt;background-color: var(--header-button-color)"/>
          <div style="width: 30pt; height: 30pt; border-radius: 50%;background-color: var(--header-button-color)"/>
        </div>
        <div/>
      </div>
    </div>
    <div class="separator"/>
    <div id="successes">
      <h2>SUCCESSES SO FAR</h2>
      <p>
        Since our inception, we have provided critical support to over 250 women, completed 20+ projects, and garnered
        the support of more than 11,000 donors. Our resources have been accessed by over 1.8K individuals, making a
        tangible impact in our community.
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
          :src="'/HYP/image/projects/1.jpg'"
          alt="image of project 1"
      >
      <div id="bottom-text">
        <p>Our journey is fueled by the passion and commitment of individuals and organizations dedicated to gender
          equality. We continue to advocate for women's rights and provide essential services to those in need.</p>
        <p>Join us in our mission to create a supportive and inclusive environment for all women. Together, we can make
          a lasting impact and empower future generations.</p>
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
  width: 75vw;
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
  overflow-y: hidden;
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

h2 {
  font-size: 180%;
}

p {
  font-size: 120%;
}
</style>