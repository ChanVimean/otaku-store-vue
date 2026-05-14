import { reactive } from "vue";

const savedCart = localStorage.getItem('otaku_cart');

export const cartStore = reactive({
  items: savedCart ? JSON.parse(savedCart) : [],

  // Add to cart
  addToCart(product) {
    const existing = this.items.find(i => i.id === product.id);
    if (existing) {
      existing.qty++;
    } else {
      this.items.push({
        _id: product._id,
        id: product.id,
        name: product.name,
        description: product.description,
        series_title: product.series_title,
        origin_type: product.origin_type,
        characters: product.characters,
        manufacturer: product.manufacturer,
        price: product.price,
        currency: product.currency,
        scale: product.scale,
        material: product.material,
        status: product.status,
        release_date: product.release_date,
        thumbnail: product.thumbnail,
        image: product.image,
        tags: product.tags,
        qty: 1 // ! Extra key
      });
    }
    this.persist();
  },
  removeFromCart(id) {
    this.items = this.items.filter(i => (i._id || i.id) !== id);
    this.persist();
  },
  persist() {
    localStorage.setItem('otaku_cart', JSON.stringify(this.items));
  },
  get totalItems() {
    return this.items.reduce((total, item) => total + (item.qty || 0), 0);
  },
  get totalPrice() {
    return this.items.reduce((total, item) => total + ((item.price || 0) * (item.qty || 0)), 0);
  }
});