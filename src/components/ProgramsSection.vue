<script setup>
import { programs } from '../data/content.js'
</script>

<template>
  <section id="programs">
    <div class="container">
      <div class="head">
        <div class="eyebrow">Academic Programs</div>
        <h2 class="title">Programs Offered</h2>
        <p class="sub">Choose a path in computing, media, or information science.</p>
      </div>
      <div class="grid programs">
        <article class="card prog" v-for="p in programs" :key="p.code">
          <div class="logo-box">
            <img :src="p.logo" :alt="p.code + ' logo'" @error="$event.target.style.display = 'none'" />
          </div>
          <span class="badge">{{ p.code }}</span>
          <h3>{{ p.name }}</h3>
          <p>{{ p.desc }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
