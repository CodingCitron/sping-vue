<template>
    <main>
        <Banner
            :image="require('@/assets/image/banner_img_01.jpg')"
            :style="custom"
        >
            <h2>배너 입니다.</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                ea quo, eveniet quasi suscipit vero voluptatem temporibus quos,
                quas doloribus incidunt asperiores, autem saepe laborum fuga
                delectus aliquam nisi eum!
            </p>
        </Banner>
        <section class="container mt-5">
            <h2 class="contents-title">Contents Area</h2>
            <Slide />
        </section>
    </main>
</template>

<script>
import { ref } from 'vue'
import Banner from '@/components/common/Banner'
import Slide from '@/components/common/Slide'

export default {
    components: {
        Banner,
        Slide,
    },

    setup() {
        const custom = ref('height: 600px; width: 100%;')

        return {
            custom,
        }
    },
}
</script>

<style scoped>
.contents-title {
    text-align: center;
}
</style>
