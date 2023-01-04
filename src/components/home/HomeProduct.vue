<template>
    <section class="product">
        <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="animation: fade">
            <ul class="uk-slideshow-items">
                <li class="hoptimum">
                    <a href="./hoptimum.html">
                        <div
                            class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom"
                        >
                            <h3 class="uk-margin-remove">HOPYIMUM</h3>
                            <p class="uk-margin-remove">The hoppest beer you have ever drink!</p>
                        </div>
                    </a>
                </li>
                <li class="space_dust">
                    <a href="./hoptimum.html">
                        <!-- <img src="./images/index/spaceDust_pack.png" alt=""> -->
                        <div
                            class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom"
                        >
                            <h3 class="uk-margin-remove">SPACE DUST</h3>
                            <p class="uk-margin-remove">Combine Space Dust with Superfuzz to create a Fuzzduster!</p>
                        </div>
                    </a>
                </li>
                <li class="blk">
                    <a href="./hoptimum.html">
                        <!-- <img src="./images/beers/BlackIsBeautiful.png" alt=""> -->
                        <div
                            class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom"
                        >
                            <h3 class="uk-margin-remove">BLACK IS BEAUTIFUL</h3>
                            <p class="uk-margin-remove">
                                A collaborative effort to raise awareness for the injustices people of color face daily
                                and raise funds for police brutality reform and legal defenses for those who have been
                                wronged.
                            </p>
                        </div>
                    </a>
                </li>
                <li class="guava_boat">
                    <a href="./hoptimum.html">
                        <!-- <img src="./images/beers/guava_boat_cover.jpg" alt=""> -->
                        <div
                            class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom"
                        >
                            <h3 class="uk-margin-remove">GUAVA BOAT</h3>
                            <p class="uk-margin-remove">
                                A tropical cruiser bursting with Guava and Citra hops. Extremely refreshing and lush
                                with notes of overripe mangos, grapefruit peel, and of course guava.
                            </p>
                        </div>
                    </a>
                </li>
            </ul>
            <a
                class="uk-position-center-left uk-position-small uk-hidden-hover"
                href="#"
                uk-slidenav-previous
                uk-slideshow-item="previous"
            ></a>
            <a
                class="uk-position-center-right uk-position-small uk-hidden-hover"
                href="#"
                uk-slidenav-next
                uk-slideshow-item="next"
            ></a>
        </div>
    </section>
</template>
<script setup>
import { ref } from "vue";
</script>
