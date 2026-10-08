<script setup>
import { ref } from 'vue'
import { logo, sections } from '../data/content.js'

defineProps({ active: String })
const emit = defineEmits(['navigate'])
const open = ref(false)

function go(id) {
  open.value = false
  emit('navigate', id)
}
</script>

<template>
  <nav>
    <div class="nav-in">
      <a class="brand" href="#home" @click.prevent="go('home')">
        <img :src="logo" alt="CCS logo" />
        <span>College of<br />Computer Studies</span>
      </a>
      <button class="burger" :class="{ open }" @click="open = !open" aria-label="Toggle menu">
        <i></i><i></i><i></i>
      </button>
      <ul class="menu" :class="{ open }">
        <li v-for="s in sections" :key="s.id">
          <a :href="'#' + s.id" :class="{ active: active === s.id }" @click.prevent="go(s.id)">{{ s.label }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
