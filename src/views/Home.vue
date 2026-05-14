<script setup>
import { computed, onMounted } from "vue";
import { productStore } from "../store/productStore.js";
import { cartStore } from "../store/cartStore.js";
import { themeStore } from "../store/themeStore.js";

onMounted(() => {
  themeStore.applyTheme();

  if (productStore.list.length === 0) {
    productStore.fetchProduct();
  }
});

const highlightProducts = computed(() => {
  return productStore.list.slice(0, 8);
});

const featuredProduct = computed(() => {
  return productStore.list[0] || null;
});

const heroImage = computed(() => {
  if (!featuredProduct.value) {
    return "https://placehold.co/600x420?text=Anime+Collectibles";
  }

  return getProductImage(featuredProduct.value);
});

const getProductImage = (product) => {
  return (
    product.thumbnails ||
    product.thumbnail ||
    product.image?.[0] ||
    "https://placehold.co/400x500?text=No+Image"
  );
};

const statusClass = (status) => {
  switch (status) {
    case "Available":
      return "text-bg-success";

    case "Pre-order":
      return "text-bg-primary";

    case "Unavailable":
      return "text-bg-secondary";

    default:
      return "text-bg-dark";
  }
};
</script>

<template>
  <main>
    <!-- Navbar / Top Bar -->
    <nav class="navbar navbar-expand-lg border-bottom sticky-top bg-body">
      <div class="container">
        <a class="navbar-brand fw-bold" href="#">
          Otaku Store
        </a>

        <div class="d-flex align-items-center gap-2 ms-auto">
          <span class="badge text-bg-primary">
            Cart: {{ cartStore.totalItems }}
          </span>

          <button class="btn btn-outline-secondary btn-sm" @click="themeStore.toggleTheme()">
            {{ themeStore.darkMode ? "Light Mode" : "Dark Mode" }}
          </button>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="py-5 bg-body-tertiary">
      <div class="container">
        <div class="row align-items-center g-4">
          <div class="col-lg-6">
            <span class="badge text-bg-warning mb-3">
              Anime Collectibles Store
            </span>

            <h1 class="display-5 fw-bold">
              Discover Premium Figures, Comics & Statues
            </h1>

            <p class="lead text-body-secondary mt-3">
              Explore collectibles from your favorite donghua, manga, novels,
              and comics.
            </p>

            <div class="d-flex gap-3 mt-4">
              <a href="#products" class="btn btn-primary btn-lg">
                Shop Now
              </a>

              <a href="#featured" class="btn btn-outline-secondary btn-lg">
                Featured
              </a>
            </div>
          </div>

          <div class="col-lg-6 text-center">
            <img :src="heroImage" alt="Featured collectible" class="img-fluid rounded shadow"
              style="max-height: 420px; object-fit: cover;" />
          </div>
        </div>
      </div>
    </section>

    <!-- Category Highlight -->
    <section class="py-5">
      <div class="container">
        <div class="text-center mb-4">
          <h2 class="fw-bold">Shop by Category</h2>
          <p class="text-body-secondary mb-0">
            Find collectibles that match your collection style.
          </p>
        </div>

        <div class="row g-4">
          <div class="col-md-4">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-body text-center p-4">
                <h4 class="fw-bold">Figures</h4>
                <p class="text-body-secondary mb-0">
                  Detailed character figures from popular series.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-body text-center p-4">
                <h4 class="fw-bold">Comics</h4>
                <p class="text-body-secondary mb-0">
                  Collectible comics and story-based merchandise.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-body text-center p-4">
                <h4 class="fw-bold">Statues</h4>
                <p class="text-body-secondary mb-0">
                  Premium display statues for collectors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Product -->
    <section id="featured" class="py-5 bg-body-tertiary">
      <div class="container">
        <div v-if="featuredProduct" class="row align-items-center g-4">
          <div class="col-lg-5">
            <img :src="getProductImage(featuredProduct)" :alt="featuredProduct.name" class="img-fluid rounded shadow"
              style="max-height: 520px; object-fit: cover;" />
          </div>

          <div class="col-lg-7">
            <span class="badge text-bg-danger mb-3">
              Featured Product
            </span>

            <h2 class="fw-bold">
              {{ featuredProduct.name }}
            </h2>

            <p class="text-body-secondary">
              {{ featuredProduct.description || "A special collectible item selected for fans and collectors." }}
            </p>

            <div class="mb-3">
              <p class="mb-1">
                <strong>Series:</strong> {{ featuredProduct.series_title }}
              </p>

              <p class="mb-1">
                <strong>Manufacturer:</strong> {{ featuredProduct.manufacturer }}
              </p>

              <p class="mb-1">
                <strong>Origin:</strong> {{ featuredProduct.origin_type }}
              </p>

              <p class="mb-1">
                <strong>Status:</strong>
                <span class="badge" :class="statusClass(featuredProduct.status)">
                  {{ featuredProduct.status }}
                </span>
              </p>
            </div>

            <h3 class="fw-bold text-danger">
              {{ featuredProduct.currency }} {{ featuredProduct.price }}
            </h3>

            <button class="btn btn-primary mt-3" @click="cartStore.addToCart(featuredProduct)">
              Add to Cart
            </button>
          </div>
        </div>

        <div v-else class="text-center py-5">
          <h3 class="fw-bold">Featured Product</h3>
          <p class="text-body-secondary">
            Product data will appear here after loading.
          </p>
        </div>
      </div>
    </section>

    <!-- Products -->
    <section id="products" class="py-5">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 class="fw-bold mb-1">Highlighted Products</h2>
            <p class="text-body-secondary mb-0">
              Popular picks from our collectible catalog.
            </p>
          </div>
        </div>

        <!-- Loading -->
        <div v-if="productStore.loading" class="text-center py-5">
          <div class="spinner-border text-primary" role="status"></div>
          <p class="mt-3 text-body-secondary">
            Loading products...
          </p>
        </div>

        <!-- Empty -->
        <div v-else-if="highlightProducts.length === 0" class="alert alert-warning text-center">
          No products found.
        </div>

        <!-- Product Cards -->
        <div v-else class="row g-4">
          <div v-for="product in highlightProducts" :key="product._id || product.id" class="col-sm-6 col-lg-3">
            <div class="card h-100 border-0 shadow-sm">
              <div class="position-relative">
                <img :src="getProductImage(product)" :alt="product.name" class="card-img-top"
                  style="height: 260px; object-fit: cover;" />

                <span class="badge position-absolute top-0 start-0 m-2" :class="statusClass(product.status)">
                  {{ product.status }}
                </span>
              </div>

              <div class="card-body d-flex flex-column">
                <h5 class="card-title fw-bold">
                  {{ product.name }}
                </h5>

                <p class="text-body-secondary small mb-2">
                  {{ product.series_title }}
                </p>

                <p class="small mb-2">
                  <strong>Origin:</strong> {{ product.origin_type }}
                </p>

                <p class="small mb-2">
                  <strong>Scale:</strong> {{ product.scale || "N/A" }}
                </p>

                <div class="mb-3">
                  <span v-for="tag in product.tags?.slice(0, 2)" :key="tag" class="badge text-bg-secondary me-1">
                    {{ tag }}
                  </span>
                </div>

                <div class="mt-auto">
                  <div class="d-flex justify-content-between align-items-center mb-3">
                    <span class="fw-bold text-danger">
                      {{ product.currency }} {{ product.price }}
                    </span>
                  </div>

                  <button class="btn btn-primary w-100" @click="cartStore.addToCart(product)">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  </main>
</template>
