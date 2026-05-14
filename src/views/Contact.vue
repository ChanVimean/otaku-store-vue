<script setup>
import { reactive, ref } from "vue";

const success = ref(false);

const form = reactive({
  name: "",
  email: "",
  subject: "",
  message: ""
});

const submitForm = () => {
  success.value = true;

  form.name = "";
  form.email = "";
  form.subject = "";
  form.message = "";
};
</script>

<template>
  <main>
    <!-- Header -->
    <section class="py-5 bg-body-tertiary border-bottom">
      <div class="container text-center">
        <span class="badge text-bg-primary mb-3">
          Contact Us
        </span>

        <h1 class="fw-bold display-5">
          Get in Touch
        </h1>

        <p class="lead text-body-secondary mx-auto mt-3" style="max-width: 700px;">
          Have a question about products, orders, or collectibles? Send us a message.
        </p>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="py-5">
      <div class="container">
        <div class="row g-4">
          <!-- Contact Info -->
          <div class="col-lg-5">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-body p-4">
                <h3 class="fw-bold mb-3">
                  Contact Information
                </h3>

                <p class="text-body-secondary">
                  We’d love to hear from you. Reach out anytime and we’ll reply
                  as soon as possible.
                </p>

                <div class="mt-4">
                  <p class="mb-2">
                    <strong>Email:</strong> support@otakustore.com
                  </p>

                  <p class="mb-2">
                    <strong>Phone:</strong> +855 12 345 678
                  </p>

                  <p class="mb-2">
                    <strong>Location:</strong> Phnom Penh, Cambodia
                  </p>

                  <p class="mb-0">
                    <strong>Open:</strong> Monday - Saturday, 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="col-lg-7">
            <div class="card border-0 shadow-sm">
              <div class="card-body p-4">
                <h3 class="fw-bold mb-4">
                  Send Message
                </h3>

                <form @submit.prevent="submitForm">
                  <div class="row g-3">
                    <div class="col-md-6">
                      <label for="name" class="form-label">
                        Name
                      </label>
                      <input id="name" v-model="form.name" type="text" class="form-control" placeholder="Your name"
                        required />
                    </div>

                    <div class="col-md-6">
                      <label for="email" class="form-label">
                        Email
                      </label>
                      <input id="email" v-model="form.email" type="email" class="form-control"
                        placeholder="your@email.com" required />
                    </div>

                    <div class="col-12">
                      <label for="subject" class="form-label">
                        Subject
                      </label>
                      <input id="subject" v-model="form.subject" type="text" class="form-control"
                        placeholder="Message subject" required />
                    </div>

                    <div class="col-12">
                      <label for="message" class="form-label">
                        Message
                      </label>
                      <textarea id="message" v-model="form.message" class="form-control" rows="5"
                        placeholder="Write your message..." required></textarea>
                    </div>

                    <div class="col-12">
                      <button type="submit" class="btn btn-primary px-4">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>

                <div v-if="success" class="alert alert-success mt-4 mb-0">
                  Your message has been sent successfully.
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Extra Info -->
        <div class="row g-4 mt-4">
          <div class="col-md-4">
            <div class="card border-0 shadow-sm h-100 text-center">
              <div class="card-body p-4">
                <h5 class="fw-bold">
                  Fast Reply
                </h5>
                <p class="text-body-secondary mb-0">
                  We usually respond within 24 hours.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card border-0 shadow-sm h-100 text-center">
              <div class="card-body p-4">
                <h5 class="fw-bold">
                  Product Help
                </h5>
                <p class="text-body-secondary mb-0">
                  Ask us about availability, release dates, or product details.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card border-0 shadow-sm h-100 text-center">
              <div class="card-body p-4">
                <h5 class="fw-bold">
                  Store Support
                </h5>
                <p class="text-body-secondary mb-0">
                  Need help with cart or checkout? We’re here to help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
