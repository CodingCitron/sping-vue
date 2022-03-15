<template>
    <div class="container mt-4 mb-4">
        <SignUpForm />
    </div>
</template>

<script>
import SignUpForm from '@/components/common/SignUpForm'

export default {
    components: {
        SignUpForm,
    },
}
</script>

<style scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
