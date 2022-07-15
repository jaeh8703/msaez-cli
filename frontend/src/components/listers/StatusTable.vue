<template>

    <v-data-table
            :headers="headers"
            :items="status"
            :items-per-page="5"
            class="elevation-1"
    ></v-data-table>

</template>

<script>

    export default {
        name: 'StatusList',
        props: {
            value: Object,
            editMode: Boolean,
            isNew: Boolean
        },
        data: () => ({
            headers: [
            ],
            status : [],
        }),
        async created() {
            if(!this.value) this.value = [];
        },
        methods: {
        }
    }
</script>

