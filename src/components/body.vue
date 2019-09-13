<template>
	<div class="body">
		<!-- <aside-nav @sendData="getData"></aside-nav> -->
		<div id="aside" class="aside"></div>
		<view-content :showData="showData"></view-content>
	</div>
</template>

<script>
import asideNav from "../components/aside.vue";
import viewContent from "../components/view/view.vue";
export default {
	components: {
		asideNav,
		viewContent
	},
	data() {
		return {
			showData: {}
		}
	},
	methods: {
		getData(data) {
			this.showData = data
		}
	},
	mounted() {
		debugger
		let data = require("../../setting.json")
		data.shift()
		initNav(data, "aside", this.getData)
		this.getData(data[0])
	}
};
</script>

<style scoped>
	.body {
		display: flex;
		padding: 20px;
		width: calc(100% - 40px);
		height: calc(100% - 40px);
		justify-content: space-between;
	}
	.aside {
		width: 20%;
		height: 100%;
		overflow-y: auto;
		overflow-x: hidden;
	}
</style>
