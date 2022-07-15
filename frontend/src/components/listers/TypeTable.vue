<template>

    <v-data-table
            :headers="headers"
            :items="type"
            :items-per-page="5"
            class="elevation-1"
    ></v-data-table>

</template>

<script>

    export default {
        name: 'TypeList',
        props: {
            value: Object,
            editMode: Boolean,
            isNew: Boolean
        },
        data: () => ({
            headers: [
            ],
            type : [],
        }),
        async created() {
            if(!this.value) this.value = [];
        },
        methods: {
        }
    }
</script>

