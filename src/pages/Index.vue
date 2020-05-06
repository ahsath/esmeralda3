<template>
  <app-shell>
    <app-banner title="Venta y talla de rocas preciosas, semipreciosas y fósiles">
      <template #banner-img>
        <g-image
          src="@/assets/img/banner-img.jpg"
          alt="Un hombre puliendo una gema"
          class="absolute top-0 left-0 h-full object-cover is-block"
        />
      </template>
    </app-banner>
    <main>
      <section class="section">
        <div class="container">
          <span class="is-size-7-mobile is-size-6 is-uppercase">Más recientes</span>
          <h1
            class="title is-size-4-mobile has-text-black-ter mb-0"
          >{{ $page.p1.edges[0].node.category.title }}</h1>
          <flkty-carrousel>
            <app-product-card
              v-for="edge in $page.p1.edges"
              :key="edge.node.id"
              :product="edge.node"
            />
          </flkty-carrousel>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <span class="is-size-7-mobile is-size-6 is-uppercase">Más recientes</span>
          <h1
            class="title is-size-4-mobile has-text-black-ter mb-0"
          >{{ $page.p2.edges[0].node.category.title }}</h1>
          <flkty-carrousel>
            <app-product-card
              v-for="edge in $page.p2.edges"
              :key="edge.node.id"
              :product="edge.node"
            />
          </flkty-carrousel>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <span class="is-size-7-mobile is-size-6 is-uppercase">Más recientes</span>
          <h1
            class="title is-size-4-mobile has-text-black-ter mb-0"
          >{{ $page.p3.edges[0].node.category.title }}</h1>
          <flkty-carrousel>
            <app-product-card
              v-for="edge in $page.p3.edges"
              :key="edge.node.id"
              :product="edge.node"
            />
          </flkty-carrousel>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <span class="is-size-7-mobile is-size-6 is-uppercase">Más recientes</span>
          <h1
            class="title is-size-4-mobile has-text-black-ter mb-0"
          >{{ $page.p4.edges[0].node.category.title }}</h1>
          <flkty-carrousel>
            <app-product-card
              v-for="edge in $page.p4.edges"
              :key="edge.node.id"
              :product="edge.node"
            />
          </flkty-carrousel>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <span class="is-size-7-mobile is-size-6 is-uppercase">Más recientes</span>
          <h1
            class="title is-size-4-mobile has-text-black-ter mb-0"
          >{{ $page.p5.edges[0].node.category.title }}</h1>
          <flkty-carrousel>
            <app-product-card
              v-for="edge in $page.p5.edges"
              :key="edge.node.id"
              :product="edge.node"
            />
          </flkty-carrousel>
        </div>
      </section>
    </main>
  </app-shell>
</template>

<page-query>
query {
  p1: allProduct(filter: { category: { eq: "Piedras preciosas" } }, limit: 10) {
    totalCount
    edges {
      node {
        id
        title
        unit_price
        path
        available
        category {
          title
        }
        images(width: 208, height: 208, fit: contain, background: "white")
      }
    }
  }
  p2: allProduct(filter: { category: { eq: "Semi preciosas" } }, limit: 10) {  
    totalCount
    edges {
      node {
        id
        title
        unit_price
        path
        available
        category {
          title
        }
        images(width: 208, height: 208, fit: contain, background: "white")
      }
    }
  }
  p3: allProduct(filter: { category: { eq: "Fósil" } }, limit: 10) {  
    totalCount
    edges {
      node {
        id
        title
        unit_price
        path
        available
        category {
          title
        }
        images(width: 208, height: 208, fit: contain, background: "white")
      }
    }
  }
  p4: allProduct(filter: { category: { eq: "Raras" } }, limit: 10) {  
    totalCount
    edges {
      node {
        id
        title
        unit_price
        path
        available
        category {
          title
        }
        images(width: 208, height: 208, fit: contain, background: "white")
      }
    }
  }
  p5: allProduct(filter: { category: { eq: "Otros" } }, limit: 10) {  
    totalCount
    edges {
      node {
        id
        title
        unit_price
        path
        available
        category {
          title
        }
        images(width: 208, height: 208, fit: contain, background: "white")
      }
    }
  }
}
</page-query>

<script>
import AppProductCard from "@/components/AppProductCard.vue";
import FlktyCarrousel from "@/components/FlktyCarrousel.vue";

export default {
  name: "Home",
  metaInfo: {
    title: "Hello, world!"
  },
  components: {
    AppProductCard,
    FlktyCarrousel
  }
};
</script>

<style>
.mb-0 {
  margin-bottom: 0 !important;
}
</style>
