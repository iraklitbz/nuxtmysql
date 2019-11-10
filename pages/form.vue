<template>
    <div>
        <h1>Form</h1>
        
        <v-form ref="form">
            <v-text-field
                v-model="form.name"
                label="Name"
                required
            ></v-text-field>

             <v-btn color="success" @click="send">Send</v-btn>
        </v-form>

        <pre>{{ form }}</pre>
    </div>    
</template>

<script>
export default {
    data () {
        return {
            form: {
                name: ''
            }
        }
    },
    methods: {
        send () {
            this.$axios.post('/api', this.form)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        }
    }
}
</script>