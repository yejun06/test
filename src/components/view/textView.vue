<template>
    <div class="text-view">
        <div>
            {{showData.text}}
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
    .text-view {
        text-indent: 2em;
        padding: 20px;
        box-sizing: border-box;
    }
</style>
