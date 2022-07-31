<script>
export default {
    props: ['passData'],
    data() {
        return { img_url: null }
    },
    methods: {
        getImg() {
            // get openweathermap.org weather icon
            this.img_url = `${this.passData.img}`
        }
    },
    created() {
        this.getImg()
    }
}
//onerror="this.src='src/assets/default.jpg'"
</script>

<template>
    <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-8">
                <img :src='img_url' onerror="this.src='src/assets/default.jpg'" class="img-fluid rounded-start" :alt='passData.title'>
            </div>
            <div class="col-md-4">
                <div class="card-body">
                    <h5 class="card-title">{{ passData.title }}</h5>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card{
    margin-top: 3px;
}

h5{
  color: #222222;
  font-family: monospace;
  font-weight: bold;
  text-decoration: none;
}

</style>
