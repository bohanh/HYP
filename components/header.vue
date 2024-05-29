
  <script setup lang="ts">
  import { useRoute } from 'vue-router';

  const landmarks = ["About us", "People", "Projects", "Services", "All activities", "Contact us"];

  const generateUrl = (name: string) => {
    return '/' + name.toLowerCase().split(" ")[0];
  };

  const route = useRoute();
  const currentPath = route.path;

  const isLandmarkActive = (name: string) => {
    return generateUrl(name) === currentPath;
  };
  </script>

  <template>
    <div class="container-header">
      <NuxtLink to="/" id="logo-link">
        <img
            id="logo"
            src="/logo.svg"
            alt="Logo"
        />
      </NuxtLink>
      <div id="landmarks">
        <NuxtLink
          v-for="l in landmarks"
          :key="l"
          class="landmark"
          :to="generateUrl(l)"
          :class="{ 'active': isLandmarkActive(l) }"
        >
          {{ l }}
        </NuxtLink>
        <NuxtLink id="donation" to="/donate" class="donate-button">DONATE</NuxtLink>
      </div>
    </div>
  </template>

  <style scoped>
  .container-header {
    width: 100vw;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    box-sizing: border-box;
    padding: 5px;
    background-color: var(--header-color);
    font-family: Futura;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
  }

  #logo {
    height: 40px;
    margin: 10px;
  }

  #landmarks {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 20px;
    gap: 20px;
    font-size: 15pt;
    font-weight: bold;
  }

  .landmark {
    font-size: 100%;
    color: inherit;
    text-decoration: none;
    transition: color 0.3s; /* Aggiungi una transizione per un effetto di transizione fluido */
  }

  .landmark:hover {
    color: white; /* Cambia il colore del testo al passaggio del mouse */
  }

  .active {
    color: white; /* Mantieni il colore del testo bianco quando il landmark è attivo */
  }

  .donate-button {
    font-size: 130%;
    font-weight: bold;
    background-color: #8A2BE2; /* Viola scuro */
    color: white; /* Testo bianco */
    border: none;
    border-radius: 5px;
    text-decoration: none;
    padding: 10px;
    transition: background-color 0.3s, color 0.3s; /* Aggiungi una transizione per un effetto di transizione fluido */
  }

  .donate-button:hover {
    background-color: white; /* Bianco */
    color: #8A2BE2; /* Viola scuro */
  }
  </style>
