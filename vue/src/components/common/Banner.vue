<template>
    <div
        class="banner"
        :style="`background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${image})`"
    >
        <div class="container">
            <slot>배너 텍스트가 없습니다.</slot>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        image: {
            type: String,
        },
    },
    setup() {},
}
</script>
<style scoped>
.container {
    text-align: center;
    color: white;
}

.banner {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}
/*
.banner::before {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
}
*/
</style>
