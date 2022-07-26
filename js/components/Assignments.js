import AssignmentsList from "./AssignmentsList.js";
import AssignmentsCreate from "./AssignmentsCreate.js";

export default {
    components: {
        AssignmentsList,
        AssignmentsCreate
    },
    template: `
        <section class="flex gap-8">
            <assignments-list 
                :assignments="filters.inProgress" 
                title="In Progress"
            >
                <assignments-create @add="add"></assignments-create>
            </assignments-list>

            <div v-show="showCompleted">
                <assignments-list 
                    title="Completed" 
                    :assignments="filters.completed" 
                    can-toggle
                    @toggle="showCompleted = !showCompleted"
                >
                </assignments-list>
            </div>
        </section>
    `,
            
    data() {
        return {
            assignments: [], 
            showCompleted: true,
        }
    },

    computed: {
        completed() {
            return this.assignments.filter(assignment => assignment.complete);
        },
        inProgress() {
            return this.assignments.filter(assignment => !assignment.complete);
        },
        filters() {
            return {
                'inProgress': this.assignments.filter(assignment => !assignment.complete),
                'completed': this.assignments.filter(assignment => assignment.complete)
            }
        }
    },
    
    created() {
        fetch('http://localhost:3001/assignments')
            .then(response => response.json())
            .then(assignments => {
                this.assignments = assignments
            })
    },

    methods: {
        add(newAssignment) {
            this.assignments.push({
                name: newAssignment,
                complete: false,
                id: this.assignments.length + 1
            });
        }
    },
}