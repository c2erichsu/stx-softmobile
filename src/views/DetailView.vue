<script>
export default {
    props: ['content'],
    data() {
        return {
            img_url: null,
            passData: JSON.parse(this.content)
        }
    },
    methods: {
        getImg() {
            this.img_url = `${this.passData.img}`
            console.log(this.passData)
        },
    },
    created() {
        this.getImg()
    },
    mounted() {
        // 鎖定螢幕方向
        screen.orientation.lock("portrait")
    }
}
</script>

<template>
    <button type="button" onclick="history.back()" class="btn btn-light rounded detailView__btn"> 返回 </button>
    <div class="card mb-3">
        <div class="row g-0">
            <div class="col-md-4">
                <img :src='img_url' class="img-fluid rounded-start" :alt='passData.title'>
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{ passData.title }}</h5>
                    <p class="card-text">{{ passData.content }}</p>
                    <p class="card-text"><small class="text-muted">Last updated {{ passData.msgTime }}</small>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@media only screen and (orientation: landscape) {
    html {
        transform: rotate(-90deg);
        transform-origin: left top;
        width: 100vh;
        overflow-x: hidden;
        position: absolute;
        top: 100%;
        left: 0;
    }
}

.detailView__btn {
    position: absolute;
    font-size: large;
    top: 3px;
    left: 3px;
    z-index: 1;
}
</style>
