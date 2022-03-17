<template>
    <h1>{{ message }}</h1>
    <!-- <HelloWorld /> -->
</template>

<script>
import HelloWorld from '~/components/HelloWorld'            // alias ~ 를 적용했기때문에 가능, 확장자 생략도 config에 resolve 적용

export default {
    components: {
        HelloWorld
    },
    data(){
        return{
            message: 'Hello Vue!!'
        };
    }
}
</script>