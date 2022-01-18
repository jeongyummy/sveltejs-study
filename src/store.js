import { writable } from "svelte/store";
// svelte 스토어 라이브러리 
// svelte에서는 스토어가 내장되어 있어서 별도의 모듈 설치 불필요

export let storeName = writable('')
// 어디서나 읽고 쓸 수 있는 스토어 객체