<script>
export default {
    props: ['passData']
}
</script>

<template>
    <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-8 card-img">
                <img class="img-fluid rounded-start"
                    v-lazy="{ src: passData.img, loading: 'https://file.coffee/u/k_y8uxfhRieUXF.png', error: 'https://file.coffee/u/bo8GXmoUP4goMI.jpg' }">
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
@media only screen and (orientation: landscape) {
    .card-img {
        width: 100%
    }

    .card-body {
        display: none;
    }
}

@media only screen and (orientation: portrait) {
    .card-body {
        display: static;
    }
}

.card {
    margin-top: 3px;
}

h5 {
    color: #222222;
    font-family: monospace;
    font-weight: bold;
    text-decoration: none;
}
</style>
