<script>
	let text = ''
</script>

<main>
	<h1>Hello {text} !! </h1>
	<input type="text" value={text} on:input={(e) => {text = e.target.value}} />
	<input type="text" bind:value={text} on:input={(e) => {text.e.target.value}} /> 
	<!-- bind 가 붙으면 양방향 바인딩, 없으면 그냥 단방향 바인딩 -->
	<button on:click={() => {text = 'jeong'}}>
	Click
	</button>
</main>

<style>
</style>