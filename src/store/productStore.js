import api from "@/services/api";
import { reactive } from "vue";

export const productStore = reactive({
  list: [],
  loading: false,

  async fetchProduct() {
    this.loading = true;
    const data = await api();
    if (data) this.list = data;
    this.loading = false;
  }
});