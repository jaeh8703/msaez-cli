<template>

    <v-data-table
            :headers="headers"
            :items="illnessHistory"
            :items-per-page="5"
            class="elevation-1"
    ></v-data-table>

</template>

<script>

    export default {
        name: 'IllnessHistoryList',
        props: {
            value: Object,
            editMode: Boolean,
            isNew: Boolean
        },
        data: () => ({
            headers: [
                { 
                    text: "illName", 
                    value: "illName" 
                },
                { 
                    text: "start", 
                    value: "start" 
                },
                { 
                    text: "end", 
                    value: "end" 
                },
            ],
            illnessHistory : [],
        }),
        async created() {
            if(!this.value) this.value = [];
        },
        methods: {
        }
    }
</script>

