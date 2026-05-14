<script setup>
import { cartStore } from '@/store/cartStore';
import { Trash2, Minus, Plus, ShoppingBag } from 'lucide-vue-next'; // Better Icons
</script>

<template>
  <div class="container mt-5 pb-5">
    <h2 class="mb-4 d-flex align-items-center">
      <ShoppingBag class="me-2" /> Your Vault
    </h2>

    <div v-if="cartStore.items.length === 0" class="alert alert-light border text-center py-5 shadow-sm">
      <p class="text-muted mb-3">Your vault is currently empty.</p>
      <router-link to="/" class="btn btn-primary">Go Shopping</router-link>
    </div>

    <div v-else>
      <div v-for="item in cartStore.items" :key="item._id || item.id" class="card mb-3 border-0 shadow-sm">
        <div class="row g-0 align-items-center">

          <div class="col-3 col-md-1 p-2">
            <img :src="item.thumbnail" class="img-fluid rounded" style="height: 70px; object-fit: cover;">
          </div>

          <div class="col-9 col-md-4 px-3">
            <h6 class="mb-0 fw-bold">{{ item.name }}</h6>
            <span class="badge bg-light text-dark border">{{ item.series_title }}</span>
          </div>

          <div class="col-6 col-md-3 d-flex justify-content-center mt-2 mt-md-0">
            <div class="input-group input-group-sm" style="width: 120px;">
              <button class="btn btn-outline-secondary"
                @click="item.qty > 1 ? (item.qty--, cartStore.persist()) : cartStore.removeFromCart(item._id || item.id)">
                <Minus :size="14" />
              </button>

              <span class="form-control text-center fw-bold">{{ item.qty }}</span>

              <button class="btn btn-outline-secondary" @click="item.qty++; cartStore.persist()">
                <Plus :size="14" />
              </button>
            </div>
          </div>

          <div class="col-6 col-md-4 d-flex align-items-center justify-content-end pe-4 mt-2 mt-md-0">
            <div class="text-end me-4">
              <div class="fw-bold text-primary">${{ (item.price * item.qty).toLocaleString() }}</div>
              <div class="small text-muted">${{ item.price.toLocaleString() }}</div>
            </div>

            <button @click="cartStore.removeFromCart(item._id || item.id)"
              class="btn btn-sm btn-outline-danger border-0" title="Remove from vault">
              <Trash2 :size="18" />
            </button>
          </div>

        </div>
      </div>

      <div class="card bg-dark text-white mt-4 shadow border-0">
        <div class="card-body d-flex justify-content-between align-items-center p-4">
          <div>
            <div class="text-uppercase small opacity-75">Total Value</div>
            <h2 class="mb-0 fw-bold">${{ cartStore.totalPrice.toLocaleString() }}</h2>
          </div>
          <button class="btn btn-primary btn-lg px-5 fw-bold">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  transition: transform 0.2s;
}

.card:hover {
  background-color: #fafafa;
}
</style>