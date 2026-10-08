<script setup>
import { logo } from '../data/content.js'
defineEmits(['navigate'])
</script>

<template>
  <section id="home" class="hero">
    <div class="container">
      <img class="hero-logo" :src="logo" alt="College of Computer Studies logo" />
      <small>The CCS core practices that build bridges between gaps</small>
      <h1>Remember &bull; Connect &bull; Engage &bull; Build &bull; Share</h1>
      <p>Different <b>people</b>, one <b>goal</b>.</p>
      <a class="btn" href="#programs" @click.prevent="$emit('navigate', 'programs')">Your Future Begins Here</a>
    </div>
  </section>
</template>
