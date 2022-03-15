<template>
    <div class="container mt-4 mb-4">
        <SignInForm />
    </div>
</template>

<script>
import SignInForm from '@/components/common/SignInForm'
export default {
    components: {
        SignInForm,
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
