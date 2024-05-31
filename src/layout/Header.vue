<template>
  <section>
    <header>
      <nav :class="[theme ? 'bg-gray-800': 'bg-gray-400']">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div class="relative flex items-center justify-between h-16">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false" @click="toggleMenu">
                <span class="sr-only">Open main menu</span>
                <svg class="block h-6 w-6" :class="{'hidden': menuOpen}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg class="hidden h-6 w-6" :class="{'block': menuOpen}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div class="flex-shrink-0 ">
                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow">
              </div>
              <div class="hidden sm:block sm:ml-6">
                <div class="flex space-x-4">
                  <div class="relative">
                    <button @click="toggleSelect" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Change Language</button>
                    <div v-if="selectOpen" class="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu" v-for="language in languages" :key="language.id">
                        <a href="#" @click="changeLanguage(language.value)" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">{{ language.label }}</a>
                      </div>
                    </div>
                  </div>
                  <div class="toggle-switch">
                    <label for="toggle">
                      <input type="checkbox" id="toggle" @change="changeTheme">
                      <span class="slider"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="sm:hidden" id="mobile-menu" :class="{'block': menuOpen, 'hidden': !menuOpen}">
          <div class="px-2 pt-2 pb-3 space-y-1">
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Change Language</a>
          </div>
        </div>
      </nav>
    </header>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useLanguageStore } from '@/stores/LanguageStore.ts'
import { storeToRefs } from 'pinia';
import { theme } from "@/stores/theme"
const { currentLanguage, languages } = storeToRefs(useLanguageStore())
const { fetchLanguages } = useLanguageStore()
const menuOpen = ref(false);
const selectOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const toggleSelect = () => {
  selectOpen.value = !selectOpen.value;
};

const changeLanguage = (language) => {
  currentLanguage.value = language
  selectOpen.value = false;
};
const changeTheme = () => {
  theme.value = !theme.value
  console.log(theme.value)
}

onMounted( async () => {
  fetchLanguages()
})
</script>

<style>
#toggle:checked + .toggle-switch label span {
  transform: translateX(8rem);
}

</style>