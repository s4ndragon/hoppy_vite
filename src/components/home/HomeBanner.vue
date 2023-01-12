<template>
    <section class="promo">
        <div class="promo_pic">
            <router-link :to="linkToPromo">
                <img
                    class="hoptimum_bottle"
                    :src="'src/assets/images/home/banner/' + homeBanner.name + '.png'"
                    alt="hopyimum"
                />
            </router-link>
        </div>
        <div class="promo_content">
            <router-link :to="linkToPromo">
                <h2>THE BEER WILL<br />BLOW YOUR<br />DAMN MIND</h2>
            </router-link>
        </div>
    </section>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
import api from "@/plugins/api.js";

// loadin homeBanner info
const homeBanner = ref([]);
onMounted(async () => {
    homeBanner.value = await api.getHomeBanner();
});

// get the link of homeBanner product
const linkToPromo = computed(() => "/Beers/" + homeBanner.value.id);

// https://hoppy-vue-cli-bfe34-default-rtdb.asia-southeast1.firebasedatabase.app/homeBanner
</script>
