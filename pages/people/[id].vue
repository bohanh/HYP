<script setup lang="ts">
import {useRoute} from 'nuxt/app';
import {breadcrumbs} from "~/composables/breadcrumbs";
import {socials} from "~/composables/socials";

const id = useRoute().params.id;
const person = {
  "name": await useFetch("http://localhost:3000/data.json").data.value?.people[parseInt(id, 10) - 1].name,
  "description": await useFetch("http://localhost:3000/data.json").data.value?.people[parseInt(id, 10) - 1].description,
  "socials": await useFetch("http://localhost:3000/data.json").data.value?.people[parseInt(id, 10) - 1].socials
};

const crumbs = breadcrumbs();
crumbs.value.push("/people/" + id);

const {getSocial} = socials();

</script>

<template>
  <div class="person-container">
    <div class="breadcrumbs">
      <div class="breadcrumb" v-for="breadcrumb of crumbs.slice(0, -1)">
        <NuxtLink :to="breadcrumb" style="margin:0; text-decoration: underline;color: #999999;">
          {{ breadcrumb.replace(/^\/|\/$/g, '').replace(/\//g, ' ') }}
        </NuxtLink>
        <p style="margin: 0;margin-inline: 5px"> > </p>
      </div>
      <p style="margin: 0">{{ crumbs.at(-1)!.replace(/^\/|\/$/g, '').replace(/\//g, ' ') }}</p>
    </div>
    <div id="person">
      <img
          id="person-photo"
          :src="'/people/' + useRoute().params.id + '.jpg'"
      >
      <div id="person-info">
        <h2>{{ person.name }}</h2>
        <div id="person-socials">
          <NuxtLink v-for="(value, key) in person.socials" :key="key" :to="getSocial(value, key)">
            <img
                class="person-socials-icon"
                :src="'/socials/colored/' + key + '.svg'"
            >
          </NuxtLink>
        </div>
        <p>{{ person.description }}</p>
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
}

.breadcrumbs {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: var(--background-color);
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
  width: 500px;
  height: 500px;
}

#person-info {
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
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

</style>