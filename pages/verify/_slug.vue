<template>
  <main>
    <div v-show="errors">
      <h1 class="text-sm">
        {{ errors }}
      </h1>
    </div>
    <h1 v-show="!errors">{{ success }}</h1>
  </main>
</template>
<script>
export default {
  data() {
    return {
      errors: false,
      success: "",
    };
  },
  mounted() {
    this.verify();
  },
  methods: {
    async verify() {
      try {
        await this.$axios.$get("/email/verify/" + this.$route.params.slug);
        this.$router.push("/");
      } catch (error) {
        console.log(error.response);
        this.errors = "No se pudo verificar el e-mail";
      }

      // .then(() => {
      //   this.success = "Gracias por verificar su email";

      // })
      // .catch((error) => {
      //   console.log(error.response);
      //   this.errors = "No se pudo verificar el e-mail";
      // });
    },
  },
};
</script>
