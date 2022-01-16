<script>
	let name = 'world';
	let isRed = false

	function enter() {
		name = 'enter'
	}

	function leave() {
		name = 'leave'
	}
</script>

<main>
	<h1>Hello {name} !!! </h1>
	<div class="box"
		style="background-color: {isRed ? 'red' : 'yellow'}"
		on:click={() => {isRed = !isRed}}
		on:mouseente={enter}
		on:mouseleave={leave}
	>
	boxbox
	</div>
</main>

<style>
.box {
	width: 300px;
	height: 150px;
	background-color: yellow;
}
</style>