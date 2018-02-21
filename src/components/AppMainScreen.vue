<template>
	<el-container class="с-AppMainScreen">
		<el-main>
			<app-croco-svg/>
			<app-word-card/>
			<app-toolbar/>
		</el-main>
		<el-aside width="380px"
		          class="c-AppMainScreen__aside">
			<app-recent-words/>
		</el-aside>
	</el-container>
</template>

<script>
  import AppCrocoSvg from './AppCrocoSvg'
  import AppRecentWords from './AppRecentWords'
  import AppWordCard from './AppWordCard'
  import AppToolbar from './AppToolbar'

  export default {
    name: 'AppMainScreen',
    components: {
      AppCrocoSvg,
      AppRecentWords,
      AppToolbar,
      AppWordCard
    },
    created () {
      this.$store.dispatch('getRandomWord')
    }
  }
</script>

<style>
	.с-AppMainScreen {
		background: #333;
		margin: 0;
		padding: 0;
		height: 100%;
	}

	.c-AppMainScreen__aside {
		padding: 40px;
		background: #303030;
	}
</style>
