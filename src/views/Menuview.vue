<template>
  <main class="menu-page">
    <section 
      v-for="section in menuCategories" 
      :key="section.category" 
      class="menu-section"
    >
      <h2 class="menu-category-title">{{ section.category }}</h2>
      <div class="menu-grid">
        <MenuCard 
          v-for="item in section.items" 
          :key="item.name" 
          :item="item" 
        />
      </div>
    </section>
  </main>
</template>

<script setup>
import MenuCard from '../components/MenuCard.vue'
import { menuCategories } from '../data/menuData.js'
</script>

<style scoped>
.menu-page {
  padding: 100px 10% 80px;
  background-color: var(--sage-body);
  min-height: 100vh;
}

.menu-section {
  margin-bottom: 3.5rem;
}

.menu-category-title {
  font-family: 'Fraunces', serif;
  font-size: 2rem;
  font-weight: 500;
  color: var(--dark-green);
  display: inline-block;
  position: relative;
  margin-bottom: 2rem;
  padding-bottom: 6px;
}

.menu-category-title::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  min-width: 180px;
  height: 3px;
  background-color: var(--dark-green);
  border-radius: 2px;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 2rem;
}

@media (max-width: 1200px) {
  .menu-page {
    padding: 100px 6% 60px;
  }
}

@media (max-width: 768px) {
  .menu-page {
    padding: 85px 5% 50px;
  }

  .menu-category-title {
    font-size: 1.6rem;
  }

  .menu-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1.2rem;
  }
}
</style>