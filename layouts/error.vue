<template>
  <div>
    <div class="row flex-column justify-content-center align-items-center">
      <div class="col-sm text-center logo-wrapper">
        <img
          src="@/assets/images/logo/SC-blue.svg"
          alt="SC Logo"
          width="200px"
        />
      </div>
      <div class="col-sm d-flex justify-content-center">
        <lottie-player
          src="https://assets9.lottiefiles.com/temp/lf20_0txt7u.json"
          background="transparent"
          speed="1"
          style="width: 300px; height: 300px"
          loop
          autoplay
        ></lottie-player>
      </div>
      <div class="col-sm text-center">
        <h1
          class="my-4 bg-danger rounded text-white p-3"
          v-if="error.statusCode === 404"
        >
          ¡Oops, No pudimos encontrar la página!
        </h1>
        <h1 class="my-4" v-else>Ocurrió un error interno</h1>
        <NuxtLink to="/">
          <el-button type="primary" icon="el-icon-arrow-left" class="text-bold"
            >Volver a Simpol Commerce</el-button
          >
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "auth", // you can set a custom layout for the error page
};
</script>
