<template>
    <button
        type="button"
        class="btn btn-outline-success p-0 top-btn shadow"
        @click="onClick"
        ref="topButton"
    >
        <i class="bi bi-arrow-up"></i>
    </button>
</template>

<script>
import { ref } from 'vue'

export default {
    setup() {
        const topButton = ref('')

        const onClick = () => scrollTo(0, 0)

        return {
            onClick,
            topButton,
        }
    },
}
</script>

<style scoped>
.top-btn {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    font-size: 14px;
}
</style>
