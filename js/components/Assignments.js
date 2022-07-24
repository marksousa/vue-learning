import AssignmentsList from "./AssignmentsList.js";
import AssignmentsCreate from "./AssignmentsCreate.js";

export default {
    components: {
        AssignmentsList,
        AssignmentsCreate
    },
    template: `
        <section class="space-y-6">
            <assignments-list :assignments="filters.inProgress" title="In Progress"></assignments-list>
            <assignments-list :assignments="filters.completed" title="Completed"></assignments-list>

            <assignments-create @add="add"></assignments-create>
            </section>
    `,

    data() {
        return {
            assignments: [
                {name: 'Finish Project', complete: false, id: 1 , tag: 'family'},
                {name: 'Finish the site', complete: false, id: 2 , tag: 'work'},
                {name: 'Play Games', complete: false, id: 3, tag: 'hobbies'},
                {name: 'Read a chapter of a book', complete: false, id: 4, tag: 'work'},
            ], 
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