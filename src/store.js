import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router.js'

let _api = Axios.create({
  baseURL: 'https://bcw-gregslist.herokuapp.com/api'
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cars: [],
    activeCar: {}
  },
  mutations: {
    setCars(state, data) {
      state.cars = data
    },
    setActiveCar(state, data) {
      state.activeCar = data
    }
  },
  actions: {
    //Cars
    getCars({ commit, dispatch }) {
      _api.get('cars')
        .then(res => {
          commit('setCars', res.data.data)
        })
    },
    getCar({ commit, dispatch }, payload) {
      _api.get('cars/' + payload)
        .then(res => {
          commit('setActiveCar', res.data.data)
        })
    },
    createCar({ commit, dispatch }, payload) {
      _api.post('cars', payload)
        .then(res => {
          dispatch('getCars')
          debugger
          router.push({ name: 'CarDetails', params: { id: res.data.data._id } })
        })
    },
    editCar({ commit, dispatch }, payload) {
      _api.put('cars/' + payload._id, payload)
        .then(res => {
          dispatch('getCars')
        })
    },
    deleteCar({ commit, dispatch }, payload) {
      _api.delete('cars/' + payload._id)
        .then(res => {
          dispatch('getCars')
        })
    }
  }
})
