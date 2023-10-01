<template>
    <div class="contenedor">
      <section class="character-card" v-for="value in character">
        <div class="contenedor_hijo">
          <img v-bind:src="value.image" alt="" width="150" height="150">
          <div class="nombre">{{ value.name }}</div>
          <div class="tipo">{{ value.type }}</div>
        </div>
      </section>
    </div>
  </template>
  


<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

onMounted(() => {
    getCharacter();
})

const character = ref (null)

const getCharacter = async() => {
    await axios.get('https://rickandmortyapi.com/api/character')
        .then((resolve) =>{
            console.log(resolve.data.results);
            character.value = resolve.data.results
        }).cath((error) =>{
          console.log(error);
        })
}

</script>


<style>

.contenedor {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.contenedor_hijo {
  background-color: #f2f2f2;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.contenedor_hijo:hover {
  transform: scale(1.02);
}

.character-card {
  background-color: #ffffff;
  color: #333333;
}

.nombre {
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
}

.tipo {
  font-size: 18px;
  margin-top: 10px;
}

@media (max-width: 767px) {
  .contenedor {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  }

  .contenedor_hijo {
    width: 100%;
  }

  .nombre {
    font-size: 20px;
  }

  .tipo {
    font-size: 16px;
  }
}


</style>