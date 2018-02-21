<template>
	<div class="AppToolbar">
		<el-button :icon="icon"
		           size="mini"
		           @click="getRandomWord()"
		>
			Новое слово
		</el-button>
	</div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'AppToolbar',
    computed: {
      icon: function () {
        return this.loading ? 'el-icon-loading' : 'el-icon-refresh'
      },
      ...mapGetters(['currentWord', 'loading'])
    },
    methods: mapActions(['getRandomWord'])
  }
</script>

<style>
	.AppToolbar {
		text-align: center;
		margin: 20px 0;
	}
</style>