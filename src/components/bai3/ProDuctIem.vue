<template>
    <div class="container">
        <div class="form-data">
            <ProductForm @productItem="handleAddProduct" :product="product"/>
        </div>
        <div class="list-data">
            <ProductList @productItemUpdate="handleFillProduct" :item="item"/>
        </div>
    </div>
</template>

<script>
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
export default {
    name: "ProDuctIem",
    components: {
        ProductList,
        ProductForm
    },
    data() {
        return {
            item: '',
            product: ''
        }
    },
    methods: {
        handleAddProduct(value) {
            console.log(value);
            this.item = value
            this.product = ''
        },
        handleFillProduct(value) {
            this.product = value
        }
    }
}
</script>

<style scoped lang="scss">
.container {
    display: flex;
    align-items: flex-start;
    justify-content: start;
    .form-data {
        width: 30%;
        margin-right: 30px;
    }
}
</style>