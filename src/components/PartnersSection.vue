<script setup>
import { partners } from '../data/content.js'
</script>

<template>
  <section id="partners">
    <div class="container">
      <div class="head">
        <div class="eyebrow">Partners</div>
        <h2 class="title">Learning with the right people</h2>
        <p class="sub">Strong academic and industry connections that support student growth.</p>
      </div>

      <div class="grid partners">
        <div class="card partner" v-for="p in partners" :key="p.name">
          <img :src="p.logo" :alt="p.name" @error="$event.target.style.display = 'none'" />
          <span>{{ p.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
