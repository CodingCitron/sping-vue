<template>
    <swiper
        :slides-per-view="3"
        :space-between="50"
        navigation
        :pagination="{ clickable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
    >
        <swiper-slide>
            <h2>Slide 1</h2>
            <h2>Slide 1</h2>
            <h2>Slide 1</h2>
        </swiper-slide>
        <swiper-slide>
            <h2>Slide 2</h2>
        </swiper-slide>
        <swiper-slide>
            <h2>Slide 3</h2>
        </swiper-slide>
        <swiper-slide>
            <h2>Slide 4</h2>
        </swiper-slide>
        <swiper-slide>
            <h2>Slide 5</h2>
        </swiper-slide>
        <swiper-slide>
            <h2>Slide 6</h2>
        </swiper-slide>
    </swiper>
</template>

<script>
//https://swiperjs.com/vue
//https://codesandbox.io/s/b281b?file=/src/components/SwiperCarousel.vue:1069-1117
// import Swiper core and required components

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// install Swiper components
SwiperCore.use([Navigation, Pagination, A11y])

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const onSwiper = swiper => {}
        const onSlideChange = () => {}
        return {
            onSwiper,
            onSlideChange,
        }
    },
}
</script>

<style></style>
