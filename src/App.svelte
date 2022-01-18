<script>
	import { storeName } from './store.js'
	import Parent from './Parent.svelte'

	let name = 'world';
	$storeName = name
	// console.log(storeName)
	// console.log($storeName)

	// 앞에 $이 있으면 실제데이터가 된다.

</script>

<h1>Hello {name}</h1>
<Parent />