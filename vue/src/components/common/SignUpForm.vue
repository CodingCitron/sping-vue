<template>
    <form @submit.prevent="onSubmit">
        <div>
            <label for="username">username</label>
            <input type="text" id="username" v-model="username" />
        </div>
        <div>
            <label for="password">password</label>
            <input type="password" id="password" v-model="password" />
        </div>
        <div>
            <label for="checkPassword">checkPassword</label>
            <input type="password" id="checkPassword" v-model="checkPassword" />
        </div>
        <div>
            <label for="nickname">nickname</label>
            <input type="text" id="nickname" v-model="nickname" />
        </div>
        <div>
            <button type="submit">회원가입</button>
        </div>
    </form>
</template>

<script>
import { ref } from 'vue'
import { registerUser } from '@/api/users.js'

export default {
    setup() {
        const username = ref(''),
            password = ref(''),
            checkPassword = ref(''),
            nickname = ref(''),
            logMessage = ref('')

        const onSubmit = async () => {
            const userData = {
                username: username.value,
                password: password.value,
                nickname: nickname.value,
            }

            const { data } = await registerUser(userData)
            console.log(data)
            initForm()
        }

        const initForm = () => {
            username.value = ''
            password.value = ''
            checkPassword.value = ''
            nickname.value = ''
        }

        return {
            username,
            password,
            checkPassword,
            nickname,
            onSubmit,
        }
    },
}
</script>

<style></style>
