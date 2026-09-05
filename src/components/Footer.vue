<template>
  <footer class="contact" id="contact">
    <div class="contact-map">
      <a href="https://maps.app.goo.gl/sXQrM4uYRwzEACjJA" target="_blank" rel="noopener noreferrer">
        <img :src="assetPath('map.jpg')" alt="Kusina ni Venus Map">
      </a>
    </div>

    <div class="contact-info">
      <h2>Contact Us</h2>
      <ul class="contact-details">
        <li><i class="fa-solid fa-phone"></i> <span>(+63) 9123456789</span></li>
        <li><i class="fa-solid fa-location-dot"></i> <span>01, Inerangan, Alaminos City, Pangasinan</span></li>
        <li><i class="fa-solid fa-clock"></i> <span>Monday to Saturday 6AM to 5PM</span></li>
        <li><i class="fa-brands fa-facebook-f"></i> <span>Kusina ni Venus</span></li>
      </ul>
    </div>
  </footer>
</template>

<script setup>
import { assetPath } from '../utils/assets.js'
</script>