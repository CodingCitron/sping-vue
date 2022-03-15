<template>
    <ul class="dropdown-container mb-0 p-0" :style="`height: ${height}`">
        <li class="dropdown-list">
            <button type="button" class="px-4 bg-transparent border-0 btn">
                메뉴-1
            </button>
            <ul class="p-0 dropdown-items">
                <li><a href="#" class="py-2">메뉴-1</a></li>
                <li><a href="#" class="py-2">메뉴-2</a></li>
                <li><a href="#" class="py-2">메뉴-3</a></li>
            </ul>
        </li>
        <li class="dropdown-list">
            <button type="button" class="px-4 bg-transparent border-0 btn">
                메뉴-2
            </button>
            <ul class="p-0 dropdown-items">
                <li><a href="#" class="py-2">메뉴-1</a></li>
                <li><a href="#" class="py-2">메뉴-2</a></li>
                <li><a href="#" class="py-2">메뉴-3</a></li>
            </ul>
        </li>
        <li class="dropdown-list">
            <button type="button" class="px-4 bg-transparent border-0 btn">
                메뉴-3
            </button>
            <ul class="p-0 dropdown-items">
                <li><a href="#" class="py-2">메뉴-1</a></li>
                <li><a href="#" class="py-2">메뉴-2</a></li>
                <li><a href="#" class="py-2">메뉴-3</a></li>
            </ul>
        </li>
        <li class="dropdown-list">
            <button type="button" class="px-4 bg-transparent border-0 btn">
                메뉴-4
            </button>
            <ul class="p-0 dropdown-items">
                <li><a href="#" class="py-2">메뉴-1</a></li>
                <li><a href="#" class="py-2">메뉴-2</a></li>
                <li><a href="#" class="py-2">메뉴-3</a></li>
            </ul>
        </li>
    </ul>
</template>

<script>
import { onMounted, ref } from 'vue'

//동적 ref https://stackoverflow.com/questions/45563329/how-to-add-dynamic-ref-in-vue-js
export default {
    props: {
        height: {
            type: String,
        },
    },

    setup(props) {},
}
</script>

<style scoped>
:root {
    --dropdown-max-height: 0;
}

.dropdown-container {
    display: flex;
    align-items: center;
}

.dropdown-list > button,
.dropdown-list {
    height: 100%;
}

.dropdown-items {
    display: none;
    text-align: center;
    background: white;
    border-radius: 0 0 6px 6px;
    border-left: 1px solid #e5e5e5;
    border-right: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
}

.dropdown-items a,
.dropdown-list:hover .dropdown-items {
    display: block;
}
</style>
