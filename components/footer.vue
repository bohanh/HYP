<script setup lang="ts">
import "assets/css/global.css"

const landmarks = ["About us", "People", "Projects", "Services", "All activities", "Contact"];

const generateUrl = (name: string) => {
  return '/' + name.toLowerCase().split(" ")[0];
};

const socialLinks = ref({
  "Youtube": "https://www.youtube.com/",
  "Facebook": "https://www.facebook.com/",
  "Twitter": "https://twitter.com/",
  "Instagram": "https://www.instagram.com/",
  "LinkedIn": "https://www.linkedin.com/"
})
</script>

<template>
  <div class="container-footer">
    <div id="footer">
      <img
          id="logo"
          src="~/public/logo.svg"
          alt="Logo"
      >
      <div id="landmarks">
        <NuxtLink v-for="l in landmarks" class="landmark" :to="generateUrl(l)">{{ l }}</NuxtLink>
      </div>
      <div id="socials">
        <a v-for="(l, n) in socialLinks" class="logo-socials" :href="l" target="_blank">
          <img
              class="logo-socials"
              :src="'/socials/' + n + '.svg'"
              :alt="n"
          >
        </a>
      </div>
    </div>
    <div id="copyrights">
      Copyright © 2024 CompanyName. All rights reserved.
    </div>
  </div>
</template>

<style scoped>
.container-footer {
  width: 100vw;
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
  color: inherit;
  text-decoration: none;
}

#socials {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

#logo {
  height: 40px;
  margin: 10px;
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
</style>