<script setup>
import { cartStore } from '@/store/cartStore';
import { productStore } from '@/store/productStore';
import { onMounted } from 'vue';

onMounted(() => {
  if (productStore.list.length === 0) {
    productStore.fetchProduct();
  }
})

</script>

<template>
  <div class="container">
    <h2 class="mb-4">Product Catalog</h2>

    <div v-if="productStore.loading" class="text-center">
      <div class="spinner-border text-primary" role="status"></div>
    </div>

    <div v-else class="row g-4">
      <div v-for="item in productStore.list" :key="item.id" class="col-6 col-md-4 col-lg-3">
        <div class="card h-100 shadow-sm">
          <img :src="item.thumbnail || '/images/image-placeholder.png'" class="card-img-top" :alt="item.name"
            style="height: 300px; object-fit: cover;">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text text-muted small line-clamp-2">
              {{ item.description }}
            </p>
            <div class="mt-auto d-grid gap-2">
              <button @click="cartStore.addToCart(item)" class="btn btn-outline-primary btn-sm">
                Add to Cart
              </button>

              <router-link :to="{
                name: 'detail',
                params: { id: item.id },
                state: { product: item }
              }" class="btn btn-primary btn-sm">
                View Details
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>