<script>
	import Todo from './Todo.svelte'
	let title = ''
	let todos = []
	let id = 0

	function createTodo() {
		todos.push({
			id,
			// 고유한 id 만들어줘야함
			title
		})
		todos = todos
		title = ''
		id += 1
	}

</script>

<input bind:value={title} type="text" 
		on:keydown={(e) => {e.key === 'Enter' && createTodo()}} />
<button on:click={createTodo}>+</button>

	{#each todos as todo}
		<Todo {todo}/>
	{/each}