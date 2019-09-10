<template>
	<div class="view">
		<img-view v-if="showData.type == 'img'" :showData="showData"></img-view>
		<video-view v-if="showData.type == 'video'" :showData="showData"></video-view>
		<text-view v-if="showData.type == 'text'" :showData="showData"></text-view>
	</div>
</template>

<script>
import imgView from "./imgView.vue"
import videoView from "./videoView.vue"
import textView from "./textView.vue"
export default {
	props: ["showData"],
	components: {
		imgView,
		videoView,
		textView
	},
	data () {
		return {
		}
	}
}
</script>

<style scoped>
    .view {
        width: calc(80% - 20px);
        height: 100%;
		background: #effdff;
		overflow: hidden;
		border-radius: 5px;
		box-sizing: border-box;
        overflow: auto;
    }
	.view >div {
		width: 100%;
		height: 100%;
	}
</style>
