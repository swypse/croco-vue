/**
 * @typedef {{
 *  content: String,
 *  rating: Number
 * }} Word
 */
/**
 * @type {[Word]}
 */
import db from '../assets/words.json'

export default {
  /**
   * @return {[Word]}
   */
  getWords () {
    return db.words
  },
  /**
   * @return {Promise<Word>}
   */
  getRandomWord () {
    return new Promise(resolve => resolve(db.words[this.getRandowWordIndex()]))
  },
  /**
   * @return {Number}
   */
  getWordsCount () {
    return db.words.length
  },
  /**
   * @return {number}
   */
  getRandowWordIndex () {
    return Math.floor(Math.random() * this.getWordsCount())
  }
}