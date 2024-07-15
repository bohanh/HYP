<script setup lang="ts">
import {breadcrumbs} from "~/composables/breadcrumbs";
import {assignServices} from "~/utils";
import type {Service} from "~/model/Service";

const crumbs = breadcrumbs();
crumbs.value = ["/services"];

let { data: data_services } = await useFetch("/api/services");
const services: Service[] = assignServices(JSON.parse(data_services.value!.services));
</script>

<template>
  <div class="container">
    <div class="header">SERVICES</div>
    <div class="title">
      This section outlines our various services aimed at addressing gender-based violence, trafficking, and empowering marginalized groups.
    </div>
    <div v-if="services.length === 0" class="service-card">No service found</div>
    <div v-else class="service-cards">
      <div v-for="(service, index) in services" :key="service.id" class="service-card" :class="{ 'bg-lavender': index % 2 === 0, 'bg-white': index % 2 !== 0, 'reverse': index % 2 !== 0 }">
        <div class="service-content">
          <img
            class="service-thumb"
            :src="'/HYP/services/' + service.id + '.jpg'"
            :alt="'Photo of ' + service.name"
          />
          <div class="service-info" :class="{ 'text-right': index % 2 === 0 }">
            <h2 class="service-name">{{ service.name }}</h2>
            <p class="service-description">{{ service.description }}</p>
            <div class="see-more">See more</div>
          </div>
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
  font-family: Futura, sans-serif;
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

.service-cards {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.service-card {
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

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.2);
}

.service-content {
  display: flex;
  align-items: center;
  padding: 20px;
}

.service-thumb {
  height: 400px;
  width: 600px;
  object-fit: cover;
  margin-right: 20px;
}

.reverse .service-content {
  flex-direction: row-reverse;
}

.reverse .service-thumb {
  margin-left: 20px;
  margin-right: 0;
}

.service-info {
  flex: 1;
}

.service-name, .service-description {
  color: #000000; /* Nero */
}

.text-right {
  text-align: right;
}

.see-more {
  display: inline-block;
  margin-top: 10px;
  padding: 5px 10px;
  border: 2px solid #8e44ad; /* Viola */
  color: #8e44ad;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s;
}

.see-more:hover {
  background-color: #8e44ad;
  color: #ffffff;
}

.bg-lavender {
  background-color: #e6e6fa;
}

.bg-white {
  background-color: #ffffff;
}
</style>
