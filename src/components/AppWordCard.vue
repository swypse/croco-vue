<template>
	<div class="AppWordCard">
		<div class="AppWordCard__word">
			{{ratingText}}
		</div>
		<div class="AppWordCard_rating">
			<el-rate :value="wordRating"
			         disabled
			         :max="3"
			></el-rate>
		</div>
	</div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'AppWordCard',
    computed: {
      wordRating: function () {
        return this.currentWord ? this.currentWord.rating : 0
      },
      ratingText: function () {
        return ['Просто', 'Средне ', 'Сложно', 'Зубодробительно'][this.wordRating]
      },
      ...mapGetters(['currentWord'])
    }
  }
</script>

<style>
	.AppWordCard {
		text-align: center;
		margin: 5px 0;
	}

	.AppWordCard__word {
		margin: 4px 0 8px 0;
		font-size: .8em;
	}
</style>