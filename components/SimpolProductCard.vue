<template>
  <div class="card-width">
    <a href="#" class="product-link">
      <div v-show="specialPrice" class="sale-badge">
        <span class="font-quicksand text-bold">
          <i class="el-icon-star-on"></i> Oferta</span
        >
      </div>
      <el-card
        shadow="hover"
        class="rounded card-width"
        :body-style="{ padding: '0px' }"
      >
        <div class="product-img rounded">
          <!-- <img :src="img" class="thumbnail" /> -->
          <el-avatar
            shape="square"
            :size="100"
            fit="cover"
            :src="img"
          ></el-avatar>
        </div>
        <div style="padding: 1rem; margin-top: 1rem" class="text-center">
          <el-rate
            :colors="colors"
            v-model="rating"
            disabled
            show-score
            text-color="#FFB700"
            score-template="{value}"
          >
          </el-rate>
          <div
            class="product-decription"
            style="margin-top: 1rem; margin-bottom: 1rem"
          >
            <span class="text-bold font-questrial">{{ name }}</span>
            <br />
            <div class="has-discount" v-if="specialPrice">
              <span
                class="font-questrial line-through text-gray"
                style="font-size: 0.7rem"
                >${{ getPrice(price) }}</span
              >
              <span class="font-questrial text-danger" style="font-size: 1.1rem"
                >${{ getPrice(specialPrice) }}</span
              >
            </div>
            <div class="normalPrice" v-else>
              <span class="font-questrial">${{ getPrice(price) }}</span>
            </div>
          </div>
          <div class="product-footer">
            <!-- <el-button plain size="mini" class="button"
              ><i class="el-icon-view icon-lg"></i
            ></el-button> -->
            <el-button plain size="mini" class="button" @click="open"
              ><i class="el-icon-view icon-lg"></i>
            </el-button>
            <!-- {{ productData }} -->
            <el-button type="primary" size="mini" class="button"
              ><i class="el-icon-sell icon-lg"></i
            ></el-button>
          </div>
        </div>
      </el-card>
    </a>
    <el-dialog
      :visible.sync="centerDialogVisible"
      width="50%"
      center
      class="blur-bg"
      custom-class="rounded modal"
    >
      <el-row type="flex" align="middle" justify="center">
        <el-col>
          <div class="quick-view-img">
            <img :src="productData.img" :alt="productData.name" />
          </div>
        </el-col>
        <el-col>
          <el-row class="mb-2">
            <el-col class="mb-2">
              <h1 class="modal-name">
                {{ productData.name }}
              </h1>
            </el-col>
            <el-col class="mb-2">
              <el-rate
                :colors="colors"
                v-model="rating"
                disabled
                show-score
                text-color="#FFB700"
                score-template="{value}"
              >
              </el-rate>
            </el-col>
            <el-col class="mb-2">
              <p class="modal-description">
                {{ productData.desc }}
              </p>
            </el-col>
            <el-col class="mb-2">
              <span
                class="modal-price"
                :class="{ 'modal-striked text-gray': productData.specialPrice }"
              >
                $ {{ getPrice(productData.price) }}
              </span>
              <br />
              <span v-if="productData.specialPrice" class="modal-special">
                ${{ getPrice(productData.specialPrice) }}
              </span>
            </el-col>
            <el-col class="mb-2">
              <el-input-number
                v-model="qty"
                :min="1"
                :max="5"
                size="mini"
              ></el-input-number>
            </el-col>
          </el-row>

          <el-row type="flex" :gutter="15" class="modal-footer">
            <el-col class="text-right">
              <el-button
                @click="centerDialogVisible = false"
                icon="el-icon-view"
              >
                Ver Producto
              </el-button>
            </el-col>
            <el-col class="text-right">
              <el-button
                type="primary"
                @click="centerDialogVisible = false"
                icon="el-icon-sell"
              >
                Añadir a la bolsa
              </el-button>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-dialog>
    <!-- <ProductModal :productData="productData" :openModal="open" /> -->
  </div>
</template>

<script>
export default {
  props: {
    rating: {
      type: Number,
      default: 0,
    },
    colors: {
      type: Array,
    },
    name: {
      type: String,
    },
    price: {
      type: Number,
    },
    specialPrice: {
      type: Number,
    },
    img: {
      type: String,
    },
    desc: {
      type: String,
    },
  },
  data() {
    return {
      value: this.rating,
      centerDialogVisible: false,
      qty: 1,
      productData: {
        rating: this.rating,
        name: this.name,
        colors: this.colors,
        price: this.price,
        specialPrice: this.specialPrice,
        img: this.img,
        desc: this.desc,
      },
    };
  },
  methods: {
    getPrice(v) {
      return v.toFixed(2);
    },
    open() {
      this.centerDialogVisible = true;
    },
  },
};
</script>

<style lang="scss">
.product-link {
  text-decoration: none;
  position: relative;
  .product-img {
    width: 90%;
    top: 0.7rem;
    height: 200px;
    display: block;
    overflow: hidden;
    position: relative;
    margin: auto;
    transition: all ease-in-out 0.3s;
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 110%;
      display: block;
      transition: all ease-in-out 0.3s;
    }
  }
  &:hover {
    img {
      width: 130%;
    }
  }
}
.sale-badge {
  position: absolute;
  font-size: 0.8rem;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  width: 80px;
  background-color: $danger;
  border-radius: 0.2rem;
  z-index: 1;
  color: $white;
  font-weight: bold;
  left: 180px;
  top: 20px;
  box-shadow: 0 5px 12px -5px darken($danger, 15);
}
.card-width {
  width: 250px;
}
.quick-view-img {
  text-align: center;
  img {
    border-radius: 15px;
    width: 90%;
    max-width: 300px;
  }
}

.blur-bg {
  backdrop-filter: blur(7px) !important;
  background-color: rgba($color: #000000, $alpha: 0.5) !important;
}
.modal {
  position: relative;
  // width: 100%;
  // background-color: red;
}
.modal-name {
  color: $black;
  font-family: $questrial;
  font-size: 2rem !important;
}
.modal-price {
  color: $black;
  font-weight: bold;
  font-family: $overpass;
  font-size: 1.7rem;
}
.modal-special {
  font-weight: bold;
  font-family: $overpass;
  color: $black;
  font-size: 1.7rem;
}
.modal-striked {
  text-decoration: line-through;
  // color: rgba($danger, 0.5);
  font-size: 1rem;
}
.modal-footer {
  position: absolute;
  // width: 50%;
  bottom: 0;
  right: 0;
}
</style>
