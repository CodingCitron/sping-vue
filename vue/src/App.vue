<template>
    <div style="height: 4000px">
        <AppHeader />
        <div>
            <router-view />
        </div>
        <AppFooter />
        <div class="scroll-top-btn">
            <ScrollTopButton />
        </div>
    </div>
</template>

<script>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import ScrollTopButton from '@/components/common/ScrollTopButton.vue'

export default {
    name: 'App',
    components: {
        AppHeader,
        AppFooter,
        ScrollTopButton,
    },

    setup() {
        console.log(process.env)
    },
}
</script>

<style>
.scroll-top-btn {
    position: fixed;
    right: 26px;
    bottom: 26px;
}
</style>
