import { ref } from 'vue'
import { defineStore } from 'pinia'
import { Language, type ILanguages } from '@/types/language'
export const useLanguageStore = defineStore('language', () => {
  const currentLanguage = ref<Language>(Language.ENG)
  const languages = ref<ILanguages[]>([])

  const fetchLanguages = async () => {
    languages.value = await import('@/locales/languages.json').then(
      (res) => res.default
    )
  }

  return { currentLanguage, languages, fetchLanguages}
})
