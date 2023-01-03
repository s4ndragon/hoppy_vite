<template>
    <Header></Header>
    <main>
        <router-view v-slot="{ Component, route }">
            <!-- <component :is="Component" :key="$route.name" v-if="$route.meta.keepAlive" /> -->
            <transition name="routFade">
                <div :key="route.name">
                    <keep-alive>
                        <component :is="Component"  />
                    </keep-alive>
                </div>
            </transition>
        </router-view>
    </main>
</template>
<script setup>
import Header from "./components/ui/Header.vue";
import { onBeforeMount, ref, inject, provide, onMounted, watch } from "vue";

import { useRouter } from "vue-router";

const router = useRouter();

const render = ref(false);

onBeforeMount(async () => {
    setTimeout(() => {
        render.value = true;
    }, 1000);
});
</script>
<style scoped>
.routFade-enter,
.routFade-leave-to {
    opacity: 0;
}

.routFade-enter-active,
.routFade-leave-active {
    transition: 0.15s opacity ease;
}
</style>
