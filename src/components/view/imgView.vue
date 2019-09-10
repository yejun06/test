<template>
    <div class="img-view">
        <div>
            <img :src="showData.imgUrl" alt="图片不存在">
        </div>
    </div>
</template>

<script>
export default {
    props: ["showData"],
    data () {
        return {
        }
    }
}
</script>

<style scoped>
    .img-view {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
