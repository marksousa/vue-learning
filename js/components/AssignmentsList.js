import Assignment from "./Assignment.js"

export default {
    components: {
        Assignment
    },

    template: `
        <section v-show="assignments.length">
            <h2 class="font-bold mb-3">
                {{ title }}
                <span>({{ assignments.length }})</span>
            </h2>

            <div class="flex gap-2">
                <button
                    @click="currentTag = tag" 
                    v-for="tag in tags" 
                    class="border rounded px-1 py-px text-xs hover:bg-white hover:text-black"
                    :class="{
                        'border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white': tag === currentTag
                    }"
                >
                    {{ tag }}
                </button>
            </div>

            <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
                <assignment 
                    v-for="assignment in filteredAssignments" 
                    :key="assignment.id"
                    :assignment="assignment"
                ></assignment>
            </ul>
        </section>
    `,

    data() {
        return {
            currentTag: 'all'
        };
    },

    props: {
        assignments: Array,
        title: String,
    },

    computed: {
        filteredAssignments() {
            if(this.currentTag === 'all'){
                return this.assignments;
            }
            return this.assignments.filter(a => a.tag === this.currentTag);
        },

        tags() {
            return ['all', ...new Set(this.assignments.map(a => a.tag))]; // new Set resolves the repetition of same tags ()
        }
    }
}