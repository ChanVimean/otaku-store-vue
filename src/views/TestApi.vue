<script setup>
import api from '@/services/api';
import { productStore } from '@/store/productStore';
import { onMounted, ref } from 'vue';

const productsDirect = ref([]);

onMounted(async () => {
  const data = await api();
  if (data) productsDirect.value = data;
});

onMounted(() => {
  if (productStore.list.length === 0) {
    productStore.fetchProduct();
  }
});

</script>

<template>
  <div class="">
    <!-- Test Direct API -->
    <h1>Test Direct API</h1>

    <div class="container">
      <div v-for="item in productsDirect" :key="item.id" class="card mb-2">
        <div class="card-body">{{ item.name }}</div>
      </div>
    </div>

    <!-- Test with Global State-->
    <h2>Test with Global State</h2>

    <h4>Item in list: {{ productStore.list.length }}</h4>

    <div v-if="productStore.loading" class="spinner-border" />

    <ul class="list-group">
      <li v-for="item in productStore.list" :key="item.id" class="list-group-item">
        {{ item.name }}
      </li>
    </ul>


  </div>
</template>

<style scoped></style>