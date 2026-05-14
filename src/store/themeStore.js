import { reactive } from "vue";

export const themeStore = reactive({
  darkMode: localStorage.getItem('otaku-theme') === 'dark',

  toggleTheme() {
    this.darkMode = !this.darkMode
    this.applyTheme()
  },
  applyTheme() {
    const theme = this.darkMode ? 'dark' : 'light';
    // 'data-bs-theme' = Bootstrap Theme
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('otaku-theme', theme);
  }
});