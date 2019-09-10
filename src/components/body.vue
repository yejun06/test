<template>
	<div class="body">
		<aside-nav @sendData="getData"></aside-nav>
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
</style>
