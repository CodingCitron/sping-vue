<template>
    <header class="app-header fixed-top bg-white d-flex align-items-center">
        <!-- 993 이상 -->
        <div class="container d-flex justify-content-between">
            <div class="d-flex align-items-center">
                <router-link to="/">Logo</router-link>
            </div>
            <nav>
                <Dropdown height="70px" />
            </nav>
            <div class="d-flex align-items-center">
                <ul class="d-flex mb-0 p-0">
                    <li>
                        <router-link to="/signin" class="btn"
                            >로그인</router-link
                        >
                    </li>
                    <li>
                        <router-link to="/signup" class="btn"
                            >회원가입</router-link
                        >
                    </li>
                </ul>
            </div>
        </div>
        <!-- 993 이상 -->

        <!-- 992 이하 -->
        <div></div>
        <!-- 992 이하 -->
    </header>
    <div class="header-space"></div>
</template>

<script>
import Dropdown from '@/components/common/Dropdown.vue'

export default {
    components: {
        Dropdown,
    },
}
</script>

<style scoped>
.app-header {
    font-size: 16px;
    border-bottom: 1px solid #e5e5e5;
    z-index: 10;
}

.app-header,
.header-space {
    width: 100%;
    height: 70px;
}
</style>
