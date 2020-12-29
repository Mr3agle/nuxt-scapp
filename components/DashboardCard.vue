<template>
  <nuxt-link :to="path">
    <div class="dash-card">
      <h2 class="mb-3">{{ title }}</h2>
      <div class="row">
        <div class="col-sm text-center">
          <img class="dashcard-img" :src="image" :alt="title" />
        </div>

        <div class="col-sm dashcard-value text-center">
          {{ value }}
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ["title", "image", "value", "path"],
};
</script>

<style lang="scss" scoped>
.dash-card {
  background: $white;
  padding: 1rem;
  border-radius: 1rem;
  // box-shadow: 0 0 5px darken($pale, 5);
  border: 1px solid darken($pale, 5);
  cursor: pointer;
  transition: all ease-in-out 0.3s;
  &:hover {
    box-shadow: 0 5px 15px darken($pale, 5);
  }
  // max-width: 20rem;
}
a {
  color: $black;
  transition: all ease-in-out 0.1s;
  &:hover {
    color: $primary;
  }
}
.dashcard-img {
  width: 85px;
}
.dashcard-value {
  font-size: 4rem;
  font-weight: bold;
}
</style>
