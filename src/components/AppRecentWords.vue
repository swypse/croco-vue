<template>
	<div class="c-AppRecentWords">
		<h2>
			Список недавних слов
		</h2>
		<div v-if="notEmpty">
			<div class="c-AppRecentWords__item"
			     v-for="(w, index) in recentWords"
			     :key="index"
			>
				{{w.content}}
			</div>
		</div>
	</div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'AppRecentWords',
    computed: {
      notEmpty: function () {
        return !!this.recentWords
      },
      ...mapGetters(['recentWords']),
    }
  }
</script>

<style>
	.c-AppRecentWords__item {
		margin: 1em 0;
		color: #ccc;
		font-size: .9em;
	}
</style>