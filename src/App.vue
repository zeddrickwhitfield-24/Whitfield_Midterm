<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { sections } from './data/content.js'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import ProgramsSection from './components/ProgramsSection.vue'
import FacultySection from './components/FacultySection.vue'
import PartnersSection from './components/PartnersSection.vue'

const active = ref('home')

function goTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function onScroll() {
  const y = window.scrollY + 120
  for (const s of sections) {
    const el = document.getElementById(s.id)
    if (el && el.offsetTop <= y) active.value = s.id
  }
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <NavBar :active="active" @navigate="goTo" />
  <main>
    <HeroSection @navigate="goTo" />
    <ProgramsSection />
    <FacultySection />
    <PartnersSection />
  </main>
  <footer>
    &copy; {{ new Date().getFullYear() }} College of Computer Studies, Central Philippine University &middot;
    <a href="mailto:ccssec@cpu.edu.ph">ccssec@cpu.edu.ph</a>
  </footer>
</template>
