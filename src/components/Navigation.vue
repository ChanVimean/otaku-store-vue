<script setup>
import { ShoppingCart, Search } from 'lucide-vue-next';

const routes = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/product', name: 'Product' },
  { path: '/contact', name: 'Contact' },
  // { path: '/test', name: 'Test-API' },
];
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary border-bottom sticky-top shadow-sm">
    <div class="container">
      <!-- Logo -->
      <router-link class="navbar-brand fw-bold fs-4" to="/">
        Otaku Store
      </router-link>

      <!-- Mobile Button -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Menu -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li v-for="route in routes" :key="route.path" class="nav-item">
            <router-link :to="route.path" class="nav-link px-3 fw-medium" active-class="active text-primary">
              {{ route.name }}
            </router-link>
          </li>
        </ul>

        <!-- Icons -->
        <ul class="navbar-nav me-3">
          <li class="nav-item">
            <router-link to="/cart" class="nav-link d-flex align-items-center justify-content-center">
              <ShoppingCart :size="20" />
            </router-link>
          </li>
        </ul>

        <!-- Far Right -->
        <form class="d-flex" role="search">
          <div class="input-group">
            <span class="input-group-text bg-body">
              <Search :size="16" />
            </span>

            <input class="form-control" type="search" placeholder="Search products" aria-label="Search" />

            <button class="btn btn-primary" type="submit">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar-brand {
  letter-spacing: 0.3px;
}

.nav-link {
  transition: 0.2s ease;
}

.nav-link:hover {
  color: var(--bs-primary);
}

.input-group {
  max-width: 320px;
}

@media (max-width: 991px) {
  .navbar-nav {
    text-align: center;
    margin-top: 1rem;
  }

  form {
    margin-top: 1rem;
  }

  .input-group {
    max-width: 100%;
  }
}
</style>