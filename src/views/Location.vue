<template>
    <div class="contenedor">
        <section class="character-card" v-for="value in character">
            <div class="contenedor_hijo">
                <div>{{ value.name }}</div>
                <div>{{ value.type }}</div>
                <div>{{ value.dimension }}</div>
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

const character= ref(null);

const getCharacter= async()=>{
    await axios.get('https://rickandmortyapi.com/api/location')

    .then((resolve)=> {
        character.value=resolve.data.results
    }).catch((error)=>{
        console.log(error);
    })

}
</script>

<style>

.contenedor {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    justify-items: center;
}

.contenedor_hijo {
    padding: 20px;
    text-align: center;
    background-color: #f0f0f0;
    border: 2px solid #333;
}

.character-card {
    color: #333;
}

@media screen and (max-width: 768px) {
    .contenedor {
        grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
    }

    .contenedor_hijo {
        padding: 10px;
    }
}

</style>