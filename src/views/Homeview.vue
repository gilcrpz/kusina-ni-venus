<template>
  <div>
    <section class="hero" id="home">
      <div class="hero-container">
        <div class="hero-left">
          <h1>Your favorite Pinoy food, elevated for everyday cravings.</h1>
          <p>Rich, slow-cooked Filipino favorites made from cherished family recipes and local, fresh ingredients.</p>
          <div class="hero-buttons">
            <a href="#about" class="btn btn-hero">Order Now</a>
            <router-link to="/menu" class="btn btn-hero btn-secondary">View More</router-link>
          </div>
        </div>

        <div class="hero-image">
          <img src="/assets/bulalo.png" alt="Bulalo" />
        </div>
      </div>
    </section>

    <div class="section-divider"></div>

    <section class="best-sellers" id="bestsellers">
      <h2 class="section-title">Best Sellers</h2>
      <div class="cards-grid">
        <div class="card fadeInUp sos delay-1">
          <div class="card-img">
            <img src="/assets/pigarpigar.png" alt="Pigar-Pigar" />
          </div>
          <h3 class="card-title">Pigar-Pigar</h3>
          <p class="card-price">₱170</p>
          <p class="card-desc">Crispy, tender beef strips tossed with sautéed onions and fresh veggies.</p>
          <router-link to="/menu" class="btn-card">View More</router-link>
        </div>

        <div class="card fadeInUp sos delay-2">
          <div class="card-img">
            <img src="/assets/buttered-chicken.png" alt="Buttered Chicken" />
          </div>
          <h3 class="card-title">Buttered Chicken</h3>
          <p class="card-price">₱170</p>
          <p class="card-desc">Tender chicken simmered in a rich, velvety butter and garlic sauce.</p>
          <router-link to="/menu" class="btn-card">View More</router-link>
        </div>

        <div class="card fadeInUp sos delay-3">
          <div class="card-img">
            <img src="/assets/pork-sisig.png" alt="Pork Sisig" />
          </div>
          <h3 class="card-title">Pork Sisig</h3>
          <p class="card-price">₱170</p>
          <p class="card-desc">Sizzling, crispy pork bits tossed with onions, chili, and fresh calamansi.</p>
          <router-link to="/menu" class="btn-card">View More</router-link>
        </div>
      </div>
    </section>

    <div class="section-divider"></div>

    <section class="about" id="about">
      <div class="about-content fadeInUp sos delay-1">
        <h2>About<br />Kusina ni Venus</h2>
        <p>Founded in 2017 as a cozy kubo-style eatery, Kusina ni Venus brings you the rich, nostalgic flavors of classic lutong bahay. From our signature Lomi Batangas to timeless home-cooked favorites, every dish is crafted to share with family and friends.</p>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import Footer from '../components/Footer.vue'
</script>