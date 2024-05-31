<template>
  <section v-if(contents) v-for="content in contents" :key="content.id"
  class=" grid gap-4 place-items-center mr-96 ml-96 mt-6"
  :class="[theme ? 'bg-gray-800' : '']"
  >
    <h1 class="text-2xl font-bold mt-4"
      :class="[theme ? 'text-gray-300' : '']">
      {{ content.title }}
    </h1>
    <p class="text-xl"
      :class="[theme ? 'text-gray-300' : '']">
      {{ content.text }}
    </p>
  </section>
</template>

<script setup lang="ts">
import { useTextStore } from "@/stores/textStore"
import { useLanguageStore } from "@/stores/LanguageStore";
import { storeToRefs } from "pinia";
import { onMounted, watch } from "vue";

import { theme } from "@/stores/theme";

const { contents } = storeToRefs(useTextStore())
const { currentLanguage } = storeToRefs(useLanguageStore())
const getData = async () => {
  contents.value = await import(`@/locales/${currentLanguage.value}.json`).then(res => res.default.body.content)
}

watch(currentLanguage, () => {
  getData()
})

onMounted( async () => {
  await getData()
})
</script>
