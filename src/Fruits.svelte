<script>
    export let fruits
    export let reverse
    export let slice

    let computedFruits = []
    let name = ''

    if(reverse) {
        computedFruits = [...fruits].reverse()
        name = 'reverse'
    } else if (slice) {
        // 쉼표로 쪼개기
        computedFruits = fruits.slice(...slice.split(','))
        name = `slice ${slice}`
    } else {
        computedFruits = fruits
    }
</script>

<h2>
    Fruits
</h2>
<ul>
    {#each computedFruits as fruit}
        <li>{fruit}</li>
    {/each}
</ul>