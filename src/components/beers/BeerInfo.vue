<template>
    beerinfo

    {{ beerInfos }}
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import api from "@/plugins/api.js";

const router = useRouter();
const route = useRoute();
const beerId = route.params.beerId;
const beerInfos = ref([]);
onMounted(async () => {
    console.log(beerId);
    beerInfos.value = await api.getBeerInfos(beerId);
});
</script>
