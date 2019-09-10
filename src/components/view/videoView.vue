<template>
    <div class="video-view">
        <video :src="showData.videoUrl" controls="controls"></video>
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
    .video-view {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    video {
        width: 80%;
    }
</style>
