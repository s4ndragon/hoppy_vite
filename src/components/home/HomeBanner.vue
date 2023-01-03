<template>
    <section class="promo">
        <div class="promo_pic">
            <a :href="'/Beers/' ">
                <img class="hoptimum_bottle" src="@/assets/images/home/Hoptimum-Bottle.png" alt="hopyimum" />
            </a>
        </div>
        <div class="promo_content">
            <a :href="'/Beers/' ">
                <h2>THE BEER WILL<br />BLOW YOUR<br />DAMN MIND</h2>
            </a>
        </div>
    </section>
</template>
<script setup>
import { ref } from "vue";
import api from "@/plugins/api.js";

const homeBanner = ref([]);
homeBanner.value = api.getHomeBanner();

// https://hoppy-vue-cli-bfe34-default-rtdb.asia-southeast1.firebasedatabase.app/homeBanner
</script>
