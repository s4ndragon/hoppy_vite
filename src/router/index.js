import { createRouter, createWebHistory } from "vue-router";
// import Home from "/src/components/Home.vue";
import BEERS from "@/views/Beers.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            // component: () => import("@/views/Home/Home.vue"),
            name: "HOME",
            component: () => import("@/views/Home.vue"),
        },
        {
            path: "/Home",
            // component: () => import("@/views/Home/Home.vue"),
            name: "HOME",
            component: () => import("@/views/Home.vue"),
        },
        {
            path: "/Beers",
            // component: () => import("@/views/Home/Home.vue"),
            name: "BEERS",
            component: () => import("@/views/Beers.vue"),
            children: [
                {
                    path: "/Beers/:id",
                    component: () => import("@/componemts/beers/BeerInfo.vue"),
                },
            ],
        },
        {
            path: "/Taproom",
            // component: () => import("@/views/Home/Home.vue"),
            name: "TAPROOM",
            component: () => import("@/views/Taproom.vue"),
        },
        {
            path: "/Brewery",
            // component: () => import("@/views/Home/Home.vue"),
            name: "BREWERY",
            component: () => import("@/views/Brewery.vue"),
        },
        {
            path: "/About",
            // component: () => import("@/views/Home/Home.vue"),
            name: "ABOUT",
            component: () => import("@/views/About.vue"),
        },
        {
            path: "/Events",
            // component: () => import("@/views/Home/Home.vue"),
            name: "EVENTS",
            component: () => import("@/views/Events.vue"),
        },
    ],
});

export default router;
