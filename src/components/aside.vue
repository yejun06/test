<template>
	<div class="aside">
		<div v-for="(item, i) in dataInfo" :class="{'img-type': item.type == 'img', 'text-type': item.type == 'text' || item.type == 'video'}" :key="i" @click="sendData(item)">
			<img v-if="item.type == 'img'" :src="item.imgUrl" alt="图片不存在">
			<div class="text" v-if="item.type == 'text'">{{item.text}}</div>
			<img v-if="item.type == 'video'" :src="item.previewUrl" alt="图片不存在">
			<span v-if="item.type == 'img' || item.type == 'video'">{{item.text}}</span>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			dataInfo: []
		}
	},
	methods: {
		sendData(data) {
			this.$emit("sendData", data)
		}
	},
	created() {
		let data = require("../../setting.json")
		data.shift()
		this.dataInfo = data
		this.$emit("sendData", data[0])
	}
}
</script>

<style scoped>
	.aside {
		width: 20%;
		height: 100%;
		overflow-y: auto;
		overflow-x: hidden;
	}
	.aside >div {
		margin-bottom: 10px;
		position: relative;
		cursor: pointer;
		box-sizing: border-box;
		padding: 20px;
		border-radius: 2px;
	}
	.aside .img-type {
		background: #83cad2;
	}
	.aside .text-type {
		background: #e0e0e0;
	}
	.aside img {
		width: 100%;
	}
	.aside .text {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 6;
		overflow: hidden;
	}
</style>
