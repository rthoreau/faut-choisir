// eslint-disable-next-line
const state = {
    lists: [{title:'Test', id: 1, pictures: [
        {src: 'https://www.conforama.fr/fstrz/r/s/media.conforama.fr/Medias/600000/20000/3000/200/80/Z_623283_A.jpg?frz-v=1022',
        link: 'https://www.conforama.fr/bureau-rangement/bureau/fauteuil-de-bureau/fauteuil-de-bureau-bundy-bicolore/p/623283',
        price: '119.80'},
        {src: 'https://image.but.fr/is/image/but/4894223181686_F?$produit_xl$&',
        link: 'https://www.but.fr/produits/87839/Fauteuil-de-bureau-TURBO-Noir-rouge.html',
        price: '89.99'}
    ]}]
}

// eslint-disable-next-line
const getters = {
    getList: function (state) {
        return function (id) {
            return state.lists.find(function (l) {
                return l.id === id
            })
        }
    },
    getLists: function (state) {
        console.log(state.lists)
        return state.lists
    },
    getLastList: function (state) {
        return function () {
            var lastList = {}
            state.lists.map(function (l) {
                console.log(l)
                lastList = !lastList.id || lastList.id < l.id ? l : lastList
                console.log(lastList)
                return l
            })
            return lastList
        }
    }
}

// eslint-disable-next-line
const mutations = {
    mutateLists: (state, list) => {
        var exists = false
        var maxId = 0
        state.lists.map(function (l) {
            maxId = l.id > maxId ? l.id : maxId
            if (l.id === list.id) {
                exists = l.id
                return list
            }
            return l
        })
        if (exists) {
            return
        }
        list.id = maxId +1
        state.lists.push(list)
    }
}

// eslint-disable-next-line
const actions = {
    setList (context, list) {
        context.commit('mutateLists', list)
    }
}

export default {namespaced: true, state, getters, mutations, actions}
