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
