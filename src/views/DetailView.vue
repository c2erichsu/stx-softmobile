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
        }
    },
    created() {
        screen.orientation.lock("portrait")
        this.getImg()
    }
}
</script>

<template>
<button type="button" onclick="history.back()" class="btn btn-light rounded detailView__btn"> ＜ </button>
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
@viewport {  
   orientation: portrait;  
 }  
.detailView__btn{
    position: absolute;
    font-size: large;
    top: 3px; 
    left: 3px;
    z-index: 1;
}
</style>
