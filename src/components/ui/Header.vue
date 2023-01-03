<template>
    <header>
        <nav>
            <div class="hamburger">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
            <ul class="nav_links">
                <li>
                    <a :class="{ 'nav-active': routeMatch == '/Beers' }" class="beers" @click="jumpRoute('Beers')"
                        >BEERS</a
                    >
                </li>
                <li>
                    <a :class="{ 'nav-active': routeMatch == '/Taproom' }" class="taproom" @click="jumpRoute('Taproom')"
                        >TAPROOM</a
                    >
                </li>
                <li>
                    <a :class="{ 'nav-active': routeMatch == '/Brewery' }" class="brewery" @click="jumpRoute('Brewery')"
                        >BREWERY</a
                    >
                </li>
                <li>
                    <a :class="{ 'nav-active': routeMatch == '/About' }" class="about" @click="jumpRoute('About')"
                        >ABOUT</a
                    >
                </li>
                <li>
                    <a :class="{ 'nav-active': routeMatch == '/Events' }" class="events" @click="jumpRoute('Events')"
                        >EVENTS</a
                    >
                </li>
            </ul>
            <div class="logo">
                <a @click="jumpRoute('Home')"><img src="@/assets/images/logo.png" alt="" /></a>
            </div>
        </nav>
    </header>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { computed } from "@vue/reactivity";

const router = useRouter();
const route = useRoute();

const routeMatch = computed(() => route.path);

const currentRouter = ref();
onMounted(() => {
    if (route.path == "/Home") currentRouter.value = "Home";
    // else if (
    //     route.path == "/Beers" ||
    //     route.path == "/Taproom" ||
    //     route.path == "/Brewery" ||
    //     route.path == "/About" ||
    //     route.path == "/Events"
    // )
    //     currentRouter.value = "Beers";
    // else if (route.path == "/Trade" || route.path == "/TradePage") currentRouter.value = "Trade";
    // else if (route.path == "/Mine") currentRouter.value = "Mine";
    // else if (route.path == "/News") currentRouter.value = "News";
    console.log("route.path", route.path);
    console.log("routeMatch.value", routeMatch.value);
});

function pushWithQuery(query) {
    // router.push({
    //     name: "search",
    //     query: {
    //         ...route.query,
    //         ...query,
    //     },
    // });
}

const jumpRoute = (routePram) => {
    // if (routePram == "QuoteChart") {
    //     router.replace({ path: routePram, query: { id: store.favorites[0].proId } });
    //     return;
    // }
    console.log("route.path", route.path);
    console.log("routeMatch.value", routeMatch.value);
    console.log("routePram", routePram);
    router.replace({ path: routePram });
};
</script>
<style lang="scss">
.nav-active {
    color: #000 !important;
}
</style>
