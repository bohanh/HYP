<script setup lang="ts">
import "assets/css/global.css"
import {useRoute} from "#vue-router";

const landmarks = ["About us", "People", "Projects", "Services", "All activities", "Contact"];

const generateUrl = (name: string) => {
  return '/' + name.toLowerCase().split(" ")[0];
};

const route = useRoute();
const currentPath = route.path;
const isLandmarkActive = (name: string) => {
  return generateUrl(name) === currentPath;
};

const socialLinks = ref({
  "youtube": "https://www.youtube.com/",
  "facebook": "https://www.facebook.com/",
  "twitter": "https://twitter.com/",
  "instagram": "https://www.instagram.com/",
  "linkedIn": "https://www.linkedin.com/"
})
</script>

<template>
  <div class="container-footer">
    <div id="footer">
      <img
          id="logo"
          src="/HYP/image/logo.svg"
          alt="Logo"
      >
      <div id="landmarks">
        <NuxtLink
            v-for="l in landmarks"
            :key="l"
            :to="generateUrl(l)"
            class="landmark"
            :class="{ 'active': isLandmarkActive(l) }"
            tabindex="0"
        >
          {{ l }}
        </NuxtLink>
      </div>
      <div id="socials">
        <div v-for="(l, n) in socialLinks" class="logo-socials-container">
          <a class="logo-socials" :href="l" target="_blank" tabindex="0">
            <img
                class="logo-socials"
                :src="'/HYP/image/socials/white/' + n.toLowerCase() + '.svg'"
                :alt="n"
            >
          </a>
        </div>
      </div>
    </div>
    <div id="copyrights">
      Copyright © 2024 CompanyName. All rights reserved.
    </div>
  </div>
</template>

<style scoped>
.container-footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
  box-sizing: border-box;
  padding: 20px;
  font-size: 15pt;
  background-color: var(--header-color);
  font-family: Futura;
}

#footer {
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  box-sizing: border-box;
}

#landmarks {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 20px;
  gap: 20px;
  font-size: 100%;
  font-weight: bold;
}

.landmark {
  font-size: 100%;
  color: black;
  text-decoration: none;
  transition: color 0.3s;
  cursor: pointer;
}

.landmark:hover {
  color: white;
}

#socials {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  cursor: pointer;
}

#logo {
  height: 40px;
  margin: 10px;
}

.logo-socials-container {
  color: transparent;
  border: none;
  background-color: transparent;
}

.logo-socials {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20px;
  height: auto;
}

#copyrights {
  font-size: 50%;
}

@media (max-width: 768px) {
  .container-footer {
    padding: 10px;
    font-size: 12pt;
  }

  #footer {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  #landmarks {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  #socials {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  #logo {
    height: 30px;
    margin: 5px;
  }

  #copyrights {
    font-size: 40%;
  }
}
</style>
