<script>
    export let todo

    let isEdit = false
    let title = ''

    function onEdit() {
        isEdit = true
        title = todo.title
    }
    function offEdit() {
        isEdit = false
    }
    function updateTodo() {
        
    }

    function deleteTodo() {
        
    }
</script>

{#if isEdit}
    <div>
        <input bind:value={title} type="text" />
        <button on:click={updateTodo}>
            Ok
        </button>
        <button on:click={offEdit}>
            cancel
        </button>
    </div>
{:else}
    <div>
        {todo.title}
        <button on:click={onEdit}>
            Edit
        </button>
        <button on:click={deleteTodo}>
            Delete
        </button>
    </div>
{/if}
