<template>
  <header class="page-header">
    Personajes
  </header>

  <div>
    <div class="button-container">
      <router-link to="/" class="custom-button">Home</router-link>
      <router-link to="/location" class="custom-button">Location</router-link>
    </div>

    <Navbar></Navbar>

    <router-view />
  </div>
</template>


<style>
.page-header {
  text-align: center;
  font-size: 2rem; 
  color: #007BFF; 
  padding-top: 1rem; 
}

.custom-button {
  border-radius: 1rem;
  margin: 1rem; 
  background-color: #F0AD4E; 
  padding: 1rem 2rem; 
  font-size: 1.5rem; 
  color: #333; 
  text-decoration: none;
  display: inline-block; 
}

.button-container {
  text-align: center;
  margin: 2rem; 
}

@media (max-width: 768px) {
  .page-header {
    font-size: 1.5rem;
    padding-top: 0.5rem;
  }

  .custom-button {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    margin: 1rem 0.5rem;
  }

  .button-container {
    margin: 1rem;
  }
}


</style>