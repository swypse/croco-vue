import WordService from '../../services/WordService'

const state = {
  currentWord: null,
  recentWords: [],
  errorMessage: null,
  successMessage: null,
  loading: false,
}

const getters = {
  currentWord: (state, getters) => state.currentWord,
  loading: (state, getters) => state.loading,
  recentWords: (state, getters) => state.recentWords//.filter((v, i, s) => s.indexOf(v) === i)
}

const actions = {
  addRecentWord ({commit, state}, {word}) {
    commit('addRecentWord', word)
  },
  setCurrentWord ({commit, state}, {word}) {
    commit('setCurrentWord', word)
  },
  getRandomWord ({commit, state}) {
    commit('setLoading', true)
    WordService.getRandomWord().then(word => {
      commit('setCurrentWord', word)
      commit('addRecentWord', word)
      commit('setCurrentWordSuccess')
      setTimeout(commit.bind(this, 'setLoading', false), 500)
    }).catch(e => {
      console.error(e)
      commit('setCurrentWordError')
      setTimeout(commit.bind(this, 'setLoading', false), 500)
    })
  }
}

const mutations = {
  /**
   * @param state
   * @param {Word} word
   */
  setCurrentWord (state, word) {
    state.currentWord = word
  },
  setCurrentWordStart (state) {
    state.successMessage = null
    state.errorMessage = null
  },
  setCurrentWordSuccess (state) {
    state.successMessage = 'Success'
    state.errorMessage = null
  },
  setCurrentWordError (state) {
    state.successMessage = null
    state.errorMessage = 'Error'
  },
  /**
   * @param state
   * @param {Word} word
   */
  addRecentWord (state, word) {
    state.recentWords.push(word)
    state.recentWords = state.recentWords.reverse().slice(0, 10).reverse()
  },
  /**
   * @param state
   * @param {Boolean} loading
   */
  setLoading (state, loading) {
    state.loading = loading
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}