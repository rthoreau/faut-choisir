<template>
    <div class="list">
        <div v-if="!p">Cette liste n'existe plus</div>
        <div v-else>
            <div class="titleContainer">
                <input ref="title" type="text" v-model="p.title" placeholder="Titre de la liste..." class="title">
            </div>
            <div class="picturesContainer">
                <ul>
                    <Picture v-for="(item, i) in p.pictures" :key="i + 1" :index="i + 1" :p="item" :editing="mode === 'editing'"/>
                </ul>
            </div>
            <button @click="changeMode" class="changeMode">{{mode === '' ? 'Modifier les objets' : 'Afficher la liste'}}</button>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Picture from './Picture'
export default {
    name: 'Dashboard',
    components: {
        Picture
    },
    data () {
        return {
            id: 0,
            p: {},
            mode: ''
        }
    },
    methods: {
        changeMode() {
            this.mode = this.mode === '' ? 'editing' : ''
        }
    },
    computed: {
        ...mapGetters({
            getList: 'global/getList'
        })
    },
    mounted () {
        this.id = parseInt(this.$route.params.id, 10)
        this.p = this.$store.getters['global/getList'](this.id)
        if (!this.p.title) {
            this.$refs.title.focus()
        }
    }
}
</script>
<style scoped>
</style>
