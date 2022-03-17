module.exports = {
    // browser 상에서 동작하는 여러가지 전역 개념들, node 상에서 동작하는 여러가지 전역개념들에 대한 코드검사 수행여부
    env: {
        browser: true,
        node: true
    },

    // 코드검사를 할 기본적인 코드규칙
    extends: [
      // vue
        // 'plugin:vue/vue3-essential',            // Lv1
        'plugin:vue/vue3-strongly-recommended',    // Lv2
        // 'plugin:vue/vue3-recommended',          // Lv3      // eslint의 plugin-vue 패키지에서 제공하는 기본적인 vuejs의 코드검사규칙, 높을수록 엄격

      // js
        'eslint:recommended'    // 권장하는 규칙에 의해 검사
    ],

    // 기본적인 코드를 분석할 수 있는 분석기를 지정해줘야 함
    parserOptions: {                                           
        parser: 'babel-eslint'                                 // babel-eslint 패키지의 도움을 받아 문법을 검사할 수 있음
    },
    // 공백일 경우 기본적인 규칙, extends에 써있는 것 기반
    rules: {

    }
};