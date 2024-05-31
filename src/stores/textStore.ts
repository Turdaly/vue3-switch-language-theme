import type { ContentItem, Header } from "@/types/language";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useTextStore = defineStore('textStore', () => {
  const header = reactive<Header>({language: "Change language", theme: "Theme"})
  const contents = ref<ContentItem[]>([{ id: 0, title: "", text: "" }])
  return {contents, header}
})

