<script>
    import Child from './Child.svelte'

    export let name
    // name 을 child 라는 자식 컴포넌트에 보내주기
</script>

<div>
    Parent
</div>
<Child name={name}/>