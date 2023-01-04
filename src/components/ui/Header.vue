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
                    <router-link to="/Beers">BEERS</router-link>
                </li>
                <li>
                    <router-link to="/Taproom">TAPROOM</router-link>
                </li>
                <li>
                    <router-link to="/Brewery">BREWERY</router-link>
                </li>
                <li>
                    <router-link to="/About">ABOUT</router-link>
                </li>
                <li>
                    <router-link to="/Events">EVENTS</router-link>
                </li>
            </ul>
            <div class="logo">
                <a href="/"><img src="@/assets/images/logo.png" alt="" /></a>
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
// .nav-active {
//     color: #000 !important;
// }

/* logo & nav */
header {
    position: fixed;
    width: 100%;
    z-index: 1000;
    nav {
        height: 90px;
        background: #60a41d;
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        .hamburger {
            width: 30px;
            height: 20px;
            position: relative;
        }
        .logo {
            /* border: 1px solid blue; */
            width: 30%;
            margin-right: auto;
            display: flex;
            align-items: center;
            padding-left: 3%;
            a {
                text-decoration: none;
            }
            img {
                /* border: 1px solid red; */
                font-family: "Modak", cursive;
                color: #60a41d;
                font-size: 70px;
                font-weight: 100;
                min-width: 200px;
                max-width: 200px;
                /* height: 8vh; */
                /* position: relative; */
                /* padding-top: 1vh; */
                -webkit-text-stroke: 3.5px #22201f;
                padding-left: 5%;
                display: flex;
                align-self: center;
                justify-self: center;
                align-content: center;
                justify-content: center;
            }
        }
    }
    .nav_links {
        /* border: 1px solid red; */
        display: flex;
        list-style: none;
        width: 100%;
        height: 100%;
        justify-content: space-around;
        align-items: center;
        margin-left: auto;
        padding-top: 5px;
        li {
            a {
                /* border: 1px solid white; */
                color: #fff;
                text-decoration: none;
                font-size: 32px;
                font-family: "Baloo Tamma 2", cursive;
                font-weight: 700;
            }
            a.router-link-active {
                color: #000;
            }
        }
    }
}
</style>
