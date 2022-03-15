<template>
    <form @submit.prevent="onSubmit">
        <div>
            <label for="username">username</label>
            <input type="text" id="username" />
        </div>
        <div>
            <label for="password">password</label>
            <input type="password" id="password" />
        </div>
        <div>
            <button type="submit">로그인</button>
        </div>
    </form>
</template>

<script>
export default {
    setup() {
        const onSubmit = () => {}

        return {
            onSubmit,
        }
    },
}
</script>

<style></style>
