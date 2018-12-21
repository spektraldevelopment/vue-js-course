<template>
    <div>
        <!-- v-on = event directive -->
        <!-- @ = v-on:  it is shorthand -->
        <input @input="onInput"/>
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    methods: {
        onInput: function(evt) {
            this.$emit('termChange', evt.target.value);
        }
    }
};
</script>

<style scoped>
    input {
        width: 75%;
    }

    div {
        text-align: center;
        margin: 20px;
    }
</style>