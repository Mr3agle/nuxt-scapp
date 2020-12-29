<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm">
        <el-button type="primary">
          <i class="el-icon-plus"></i> Crear Producto</el-button
        >
      </div>
    </div>
    <div class="row justify-content-start">
      <div
        class="col-sm d-flex align-items-center justify-content-center my-2"
        v-for="(product, i) in featuredProducts"
        :key="i"
      >
        <SimpolCardAdmin
          :name="product.name"
          :price="product.price"
          :specialPrice="product.specialPrice"
          :img="product.img"
          :desc="product.desc"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "admin",
  data() {
    return {
      featuredProducts: [
        {
          name: "Saco Mollie",
          stock: "20",
          price: 20.0,
          specialPrice: 5,

          img:
            "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=654&q=80",
          desc: "Saco Mollie de alta Calidad",
        },
        {
          value: 3.5,
          name: "Blusa Flower",
          price: 20.0,
          specialPrice: 5,
          img:
            "https://images.pexels.com/photos/5477860/pexels-photo-5477860.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          desc: "Blusa Flower de Lino Fino.",
        },
        {
          value: 4.0,
          name: "Sombrero de paja Toquilla",
          price: 20.0,
          img:
            "https://images.pexels.com/photos/5531088/pexels-photo-5531088.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          desc: "Sombrero 100% Ecuatoriano, orgullosamente.",
        },
        {
          value: 4.7,
          name: "iPhone 11 Pro",
          price: 700.0,
          specialPrice: 630,
          img:
            "https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          desc: "iPhone 11 Pro nuevo, desbloqueado totalmente.",
        },
        {
          value: 4.7,
          name: "Short Primavera",
          price: 10.0,
          // specialPrice: 7.30,
          img:
            "https://images.unsplash.com/photo-1496360938681-9a918bfabc66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80",
          desc: "Short primaveral jean 100% ecuatoriano.",
        },
      ],
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          img:
            "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=654&q=80",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-02",
          name: "John",
          img:
            "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=654&q=80",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-04",
          name: "Morgan",
          img:
            "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=654&q=80",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-01",
          name: "Jessy",
          img:
            "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=654&q=80",
          address: "No. 189, Grove St, Los Angeles",
        },
      ],
      search: "",
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    searchProduct() {
      this.tableData.filter(
        (data) =>
          !search || data.name.toLowerCase().includes(search.toLowerCase())
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.bordered {
  border: solid 1px $blush-pale;
}
.table-img {
  // width: 75px;
  // height: auto;
}
</style>
