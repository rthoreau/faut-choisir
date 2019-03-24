<template>
    <div class="dashboard">
        <h2 class="title">Listes en cours :</h2>
        <ul>
            <li v-for="(item, i) in getLists" :key="i">
                <router-link :to="'List/' + item.id">{{item.title}}</router-link>
            </li>
        </ul>
        <button @click="createList()">Ajouter une liste</button>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    name: 'Dashboard',
    data () {
        return {
            lists: []
        }
    },
    computed: {
        ...mapGetters({
            getLists: 'global/getLists',
            getLastList: 'global/getLastList',
        })
    },
    methods: {
        ...mapActions({
            setList: 'global/setList'
        }),
        createList() {
            this.setList({})
            var newList = this.$store.getters['global/getLastList']()
            this.$router.push({ path: '/List/' + newList.id })
        }
    }
}
</script>
<style scoped>
</style>
