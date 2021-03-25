<template>
    <div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            products: {},
            url: 'http://localhost:3000/products?_limit=20',
        }
    },
    methods: {
        async fetchAPIData() {
            try {
                const response = await this.$http.get(this.url)
                this.products = response.data
                console.log(response.data)
            } catch (error) {
                console.log(error);
            }
        },
    },
    mounted() {
        this.fetchAPIData()
    },
}
</script>
<style scoped>

</style>