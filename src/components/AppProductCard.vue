<template>
  <g-link
    :to="product.path"
    class="is-block w-60 rounded-lg hover:shadow-lg pa-4 transition-shadow duration-350 ease-out"
    style="margin: 2rem 0;"
  >
    <g-image :src="product.images[0]" :alt="product.title" class="is-block rounded-lg" />
    <b-tag v-if="product.available" class="mt-4">Disponible</b-tag>
    <b-tag v-else class="mt-4" disabled>Agotado</b-tag>
    <div
      class="has-text-black-bis has-text-weight-semibold tracking-wide mt-2"
    >${{ product.unit_price }}</div>
    <h1 class="mt-4 has-text-grey-dark is-size-6">{{ product.title }}</h1>
  </g-link>
</template>

<script>
export default {
  name: "AppProductCard",
  props: {
    product: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
.hover\:shadow-lg:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 -4px 6px -2px rgba(0, 0, 0, 0.05);
}
.w-60 {
  width: 15rem;
}
.rounded-lg {
  border-radius: 0.5rem;
}
.pa-4 {
  padding: 1rem;
}
.transition-shadow {
  transition-property: box-shadow;
}
.duration-350 {
  transition-duration: 0.35s;
}
.ease-out {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}
</style>