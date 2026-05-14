<template>
  <main>
    <!-- Header -->
    <section class="py-5 bg-body-tertiary border-bottom">
      <div class="container text-center">
        <span class="badge text-bg-primary mb-3">
          About Us
        </span>

        <h1 class="fw-bold display-5">
          About Otaku Store
        </h1>

        <p class="lead text-body-secondary mt-3 mx-auto" style="max-width: 720px;">
          Otaku Store is a collectible shop focused on anime figures, comics,
          statues, and fan merchandise from popular series.
        </p>
      </div>
    </section>

    <!-- About Content -->
    <section class="py-5">
      <div class="container">
        <div class="row align-items-center g-4">
          <div class="col-lg-6">
            <img src="https://placehold.co/600x420?text=Otaku+Store" alt="Otaku Store"
              class="img-fluid rounded shadow" />
          </div>

          <div class="col-lg-6">
            <h2 class="fw-bold mb-3">
              We Love Collectibles
            </h2>

            <p class="text-body-secondary">
              Our goal is to help collectors discover unique and high-quality
              products from donghua, manga, novels, comics, and anime-inspired
              worlds.
            </p>

            <p class="text-body-secondary">
              From detailed scale figures to limited statues and collectible
              comics, we highlight products that fans can proudly add to their
              collection.
            </p>

            <div class="row g-3 mt-4">
              <div class="col-sm-4">
                <div class="card border-0 shadow-sm h-100">
                  <div class="card-body text-center">
                    <h4 class="fw-bold mb-1">100+</h4>
                    <p class="text-body-secondary small mb-0">
                      Products
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-sm-4">
                <div class="card border-0 shadow-sm h-100">
                  <div class="card-body text-center">
                    <h4 class="fw-bold mb-1">3</h4>
                    <p class="text-body-secondary small mb-0">
                      Categories
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-sm-4">
                <div class="card border-0 shadow-sm h-100">
                  <div class="card-body text-center">
                    <h4 class="fw-bold mb-1">24/7</h4>
                    <p class="text-body-secondary small mb-0">
                      Browsing
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <router-link to="/" class="btn btn-primary mt-4">
              Back to Home
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission -->
    <section class="py-5 bg-body-tertiary">
      <div class="container">
        <div class="text-center mb-4">
          <h2 class="fw-bold">
            Our Mission
          </h2>

          <p class="text-body-secondary mx-auto" style="max-width: 700px;">
            To make anime and fantasy collectibles easier to discover, compare,
            and collect in one simple store experience.
          </p>
        </div>

        <div class="row g-4">
          <div class="col-md-4">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-body p-4">
                <h5 class="fw-bold">
                  Quality Products
                </h5>

                <p class="text-body-secondary mb-0">
                  We focus on products with strong details, trusted makers,
                  and collectible value.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-body p-4">
                <h5 class="fw-bold">
                  Easy Shopping
                </h5>

                <p class="text-body-secondary mb-0">
                  Browse highlighted items, view product details, and add your
                  favorites to cart easily.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-body p-4">
                <h5 class="fw-bold">
                  Made for Fans
                </h5>

                <p class="text-body-secondary mb-0">
                  Designed for collectors who love characters, stories, and
                  beautiful display pieces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>