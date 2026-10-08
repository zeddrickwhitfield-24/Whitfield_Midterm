<script setup>
import { departments } from '../data/content.js'

function initials(name) {
  return name.replace(/,.*$/, '').split(' ').filter(w => /^[A-Z]/.test(w)).slice(0, 2).map(w => w[0]).join('')
}
</script>

<template>
  <section id="faculty">
    <div class="container">
      <div class="head">
        <div class="eyebrow">Meet Our People</div>
        <h2 class="title">Faculty and Staff</h2>
        <p class="sub">The mentors and personnel behind the college's success.</p>
      </div>
      <div class="dept" v-for="d in departments" :key="d.name">
        <h3>{{ d.name }}</h3>
        <div class="grid people">
          <article class="card person" v-for="m in d.members" :key="m.name">
            <div class="photo">
              <img :src="m.photo" :alt="m.name" loading="lazy" @error="$event.target.remove()" />
              <b>{{ initials(m.name) }}</b>
            </div>
            <h4>{{ m.name }}</h4>
            <div class="role">{{ m.role }}</div>
            <div class="edu"><strong>Highest Educational Attainment</strong>{{ m.edu }}</div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
