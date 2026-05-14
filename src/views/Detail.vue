<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { productStore } from '@/store/productStore';
import { cartStore } from '@/store/cartStore';

const route = useRoute();
const product = ref(null);
const loading = ref(true);
const activeImage = ref('');

const addToCart = () => {
  cartStore.addToCart(product.value);
  alert(`${product.value.name} added to cart!`);
}

onMounted(async () => {
  const id = Number(route.params.id);

  let existing = productStore.list.find(p => p.id == id);

  if (existing) {
    product.value = existing;
    activeImage.value = existing.thumbnail;
    loading.value = false
  } else {
    await productStore.fetchProduct();

    const found = productStore.list.find(p => p.id === id);

    if (found) {
      product.value = found;
      activeImage.value = found.thumbnail;
    }
  }
  loading.value = false;
});

const formatPrice = (val) => `$${val.toLocaleString()}`;
</script>

<template>
  <div class="container mt-5 pb-5">
    <div v-if="loading" class="text-center my-5">
      <div class="spinner-border text-primary"></div>
    </div>

    <div v-else-if="product" class="row">
      <div class="col-md-6">
        <div class="main-image-container mb-3 border rounded overflow-hidden shadow-sm bg-white">
          <img :src="activeImage" class="img-fluid w-100" style="object-fit: contain; max-height: 500px;" alt="Product">
        </div>

        <div class="d-flex gap-2 overflow-auto pb-2">
          <img v-for="(img, index) in [product.thumbnail, ...product.images]" :key="index" :src="img"
            @click="activeImage = img" class="img-thumbnail cursor-pointer"
            :class="{ 'border-primary': activeImage === img }"
            style="width: 80px; height: 80px; object-fit: cover; cursor: pointer;">
        </div>
      </div>

      <div class="col-md-6">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
            <li class="breadcrumb-item active">{{ product.series_title }}</li>
          </ol>
        </nav>

        <h1 class="fw-bold h2">{{ product.name }}</h1>
        <div class="d-flex align-items-center gap-2 mb-3">
          <span class="badge bg-danger">{{ product.status }}</span>
          <span class="badge bg-secondary">{{ product.scale }} Scale</span>
          <span class="text-muted small">By {{ product.manufacturer }}</span>
        </div>

        <h2 class="text-primary fw-bold mb-4">{{ formatPrice(product.price) }}</h2>

        <div class="card bg-light border-0 mb-4">
          <div class="card-body">
            <h6>Description</h6>
            <p class="text-muted mb-0 small">{{ product.description }}</p>
          </div>
        </div>

        <table class="table table-sm small mt-4">
          <tbody>
            <tr>
              <th class="text-muted w-25">Characters</th>
              <td>{{ product.characters.join(', ') || 'loading...' }}</td>
            </tr>
            <tr>
              <th class="text-muted">Material</th>
              <td>{{ product.material.join(', ') || 'loading...' }}</td>
            </tr>
            <tr>
              <th class="text-muted">Release</th>
              <td>{{ product.release_date }}</td>
            </tr>
          </tbody>
        </table>

        <div class="d-grid gap-2 mt-5">
          <button @click="addToCart" class="btn btn-primary btn-lg shadow">
            Add to Cart
          </button>
          <button class="btn btn-outline-dark">Add to Wishlist</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.img-thumbnail {
  transition: all 0.2s;
}

.img-thumbnail:hover {
  opacity: 0.8;
  border-color: #0d6efd;
}
</style>