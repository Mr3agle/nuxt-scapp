<template>
  <div>
    <h1>Product Page {{ this.slug }}</h1>
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const slug = params.slug; // When calling /abc the slug will be "abc"
    return { slug };
  },
};
</script>

<style lang="scss" scoped>
</style>
