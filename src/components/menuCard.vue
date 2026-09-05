<template>
  <div class="menu-card">
    <div class="menu-card-img">
      <img :src="item.img" :alt="item.name" />
    </div>
    <h3>{{ item.name }}</h3>
    <p class="menu-price">₱{{ item.price }}</p>
    <p v-if="item.pax" class="menu-pax">{{ item.pax }}</p>
    <p class="menu-desc">{{ item.desc }}</p>
  </div>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.menu-card {
  background-color: var(--card-green);
  border-radius: 18px;
  padding: 1.5rem 1.25rem;
  text-align: center;
  color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 6px 18px rgba(55, 89, 65, 0.12);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.menu-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(35, 60, 40, 0.22);
}

.menu-card-img {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1rem;
  flex-shrink: 0;
}

.menu-card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.menu-card:hover .menu-card-img img {
  transform: scale(1.08);
}

.menu-card h3 {
  font-family: 'Fraunces', serif;
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
  color: var(--white);
}

.menu-price {
  font-size: 0.9rem;
  font-weight: 600;
  color: #e5ede7;
  margin-bottom: 0.2rem;
}

.menu-pax {
  font-size: 0.75rem;
  color: #d6e8dc;
  margin-bottom: 0.5rem;
}

.menu-desc {
  font-size: 0.78rem;
  line-height: 1.4;
  color: #f1f7f2;
  margin-top: auto;
}

@media (max-width: 768px) {
  .menu-card {
    padding: 1.2rem 0.9rem;
  }

  .menu-card-img {
    width: 100px;
    height: 100px;
  }
}
</style>