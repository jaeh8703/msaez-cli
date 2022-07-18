<template>

    <v-card style="width:450px;" outlined>
        <template slot="progress">
            <v-progress-linear
                    color="deep-purple"
                    height="10"
                    indeterminate
            ></v-progress-linear>
        </template>

        <v-card-title v-if="value._links">
            Pet # {{value._links.self.href.split("/")[value._links.self.href.split("/").length - 1]}}
        </v-card-title >
        <v-card-title v-else>
            Pet
        </v-card-title >

        <v-card-text>
            <Photo offline label="Photo" v-model="value.photo" :editMode="editMode" @change="change"/>
            <String label="Name" v-model="value.name" :editMode="editMode"/>
            <Number label="Energy" v-model="value.energy" :editMode="editMode"/>
            <Number label="Appearance" v-model="value.appearance" :editMode="editMode"/>
            <Number label="Weight" v-model="value.weight" :editMode="editMode"/>
            <Address offline label="Address" v-model="value.address" :editMode="editMode" @change="change"/>
            <Status offline label="Status" v-model="value.status" :editMode="editMode" @change="change"/>
            <Type offline label="Type" v-model="value.type" :editMode="editMode" @change="change"/>
            <IllnessHistoryManager offline label="IllnessHistory" v-model="value.illnessHistory" :editMode="editMode" @change="change"/>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    color="deep-purple lighten-2"
                    text
                    @click="edit"
                    v-if="!editMode"
            >
                Edit
            </v-btn>
            <v-btn
                    color="deep-purple lighten-2"
                    text
                    @click="save"
                    v-else
            >
                Save
            </v-btn>
            <v-btn
                    color="deep-purple lighten-2"
                    text
                    @click="remove"
                    v-if="!editMode"
            >
                Delete
            </v-btn>
            <v-btn
                    color="deep-purple lighten-2"
                    text
                    @click="editMode = false"
                    v-if="editMode && !isNew"
            >
                Cancel
            </v-btn>
        </v-card-actions>
        <v-card-actions>
            <v-spacer></v-spacer>                        
            <v-btn
                    v-if="!editMode"
                    color="deep-purple lighten-2"
                    text
                    @click="feed"
            >
                Feed
            </v-btn>
            <v-btn
                    v-if="!editMode"
                    color="deep-purple lighten-2"
                    text
                    @click="comb"
            >
                Comb
            </v-btn>
            <v-btn
                    v-if="!editMode"
                    color="deep-purple lighten-2"
                    text
                    @click="groom"
            >
                Groom
            </v-btn>
        </v-card-actions>
    </v-card>

</template>

<script>
    const axios = require('axios').default;
    
    export default {
        name: 'Pet',
        components:{},
        props: {
            value: [Object, String, Number, Boolean, Array],
            editMode: Boolean,
            isNew: Boolean,
            offline: Boolean
        },
        data: () => ({
        }),
        created(){
        },
        methods: {
            selectFile(){
            if(this.editMode == false) {
                return false;
            }
                var me = this
                var input = document.createElement("input");
                input.type = "file";
                input.accept = "image/*";
                input.id = "uploadInput";
                
                input.click();
                input.onchange = function (event) {
                    var file = event.target.files[0]
                    var reader = new FileReader();

                    reader.onload = function () {
                        var result = reader.result;
                        me.imageUrl = result;
                        me.value.photo = result;
                        
                    };
                    reader.readAsDataURL( file );
                };
            },
            edit() {
                this.editMode = true;
            },
            async save(){
                try {
                    var temp = null;

                    if(!this.offline) {
                        if(this.isNew) {
                            temp = await axios.post(axios.fixUrl('/pets'), this.value)
                        } else {
                            temp = await axios.put(axios.fixUrl(this.value._links.self.href), this.value)
                        }
                    }

                    if(this.value!=null) {
                        for(var k in temp.data) this.value[k]=temp.data[k];
                    } else {
                        this.value = temp.data;
                    }

                    this.editMode = false;
                    this.$emit('input', this.value);

                    if (this.isNew) {
                        this.$emit('add', this.value);
                    } else {
                        this.$emit('edit', this.value);
                    }

                } catch(e) {
                    alert(e.message)
                }
                location.reload()
            },
            async remove(){
                try {
                    if (!this.offline) {
                        await axios.delete(axios.fixUrl(this.value._links.self.href))
                    }

                    this.editMode = false;
                    this.isDeleted = true;

                    this.$emit('input', this.value);
                    this.$emit('delete', this.value);

                } catch(e) {
                    alert(e.message)
                }
            },
            change(){
                this.$emit('input', this.value);
            },
            async feed() {
                try {
                    if(!this.offline) {
                        var temp = await axios.put(axios.fixUrl(this.value._links.feed.href))
                        for(var k in temp.data) {
                            this.value[k]=temp.data[k];
                        }
                    }

                    this.editMode = false;
                } catch(e) {
                    alert(e.message)
                }
            },
            async comb() {
                try {
                    if(!this.offline) {
                        var temp = await axios.put(axios.fixUrl(this.value._links.comb.href))
                        for(var k in temp.data) {
                            this.value[k]=temp.data[k];
                        }
                    }

                    this.editMode = false;
                } catch(e) {
                    alert(e.message)
                }
            },
            async groom() {
                try {
                    if(!this.offline) {
                        var temp = await axios.put(axios.fixUrl(this.value._links.groom.href))
                        for(var k in temp.data) {
                            this.value[k]=temp.data[k];
                        }
                    }

                    this.editMode = false;
                } catch(e) {
                    alert(e.message)
                }
            },
        },
    }
</script>

