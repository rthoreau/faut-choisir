<template>
    <li class="picture">
        <div v-if="editing">
        </div>
        <div v-else>
            <a :href="p.src" target="_blank" class="thumblink">
                <img src="../assets/square.png" class="shape">
                <img :src="p.src" class="thumb">
            </a>
            <p class="index">{{index}}</p>
            <p class="price">{{p.price}} €</p>
            <p class="site">Sur <a :href="p.link" target="_blank">{{getHostname(p.link)}}</a></p>
        </div>
    </li>
</template>

<script>
export default {
    name: 'Picture',
    props: {
        p: {},
        index: 0,
        editing: false
    },
    data () {
        return {
        }
    },
    methods: {
        getHostname(url) {
            var hostname

            if (url.indexOf("//") > -1) {
                hostname = url.split('/')[2]
            } else {
                hostname = url.split('/')[0]
            }

            hostname = hostname.split(':')[0]
            hostname = hostname.split('?')[0]
            hostname = hostname.replace('www.', '')

            return hostname;
        }
    }
}
</script>
<style scoped>
</style>
