import Assignment from "./Assignment.js"
import AssignmentsTags from "./AssignmentsTags.js";

export default {
    components: {
        Assignment, AssignmentsTags
    },

    template: `
        <section v-show="assignments.length">
            <h2 class="font-bold mb-3">
                {{ title }}
                <span>({{ assignments.length }})</span>
            </h2>

                <!-- v-model are doing two things: -->
                <!-- binds the value
                    :current-tag=this.currentTag 
                -->
                <!-- listen when the values change
                    @change="currentTag = $event" 
                -->
            <assignments-tags 
                :initial-tags="assignments.map(a => a.tag)"
                v-model:currentTag="currentTag"
            ></assignments-tags>

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

    }
}