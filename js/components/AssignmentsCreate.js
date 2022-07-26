export default {
    template: `
        <form @submit.prevent="add">
            <div class="border border-gray-600 text-black flex">
                <input v-model="newAssignment" placeholder="New Assignment..." class="p-2" />
                <button type="submit" class="bg-white px-2 py-4 border-l">Add</button>
            </div>
        </form>
    `,

    data() {
        return {
            newAssignment: ''
        }
    },

    methods: {
        add() {
            this.$emit('add', this.newAssignment);
            this.newAssignment = '';
        }
    },
}