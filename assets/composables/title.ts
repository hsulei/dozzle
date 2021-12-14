import { useTitle } from "@vueuse/core";
import { ref, computed } from "vue";

const subtitle = ref("");

const title = computed(() => `${subtitle.value} `);

useTitle(title);

export function setTitle(t: string) {
  subtitle.value = t;
}
