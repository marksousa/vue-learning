export default {
    template: `
    <div class="flex gap-2">
        <button
            @click="$emit('change', tag)" 
            v-for="tag in tags" 
            class="border rounded px-1 py-px text-xs hover:bg-white hover:text-black"
            :class="{
                'border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white': tag === currentTag
            }"
        >
            {{ tag }}
        </button>
    </div>
    `,

    props: {
        initialTags: Array,
        currentTag: String,
    },

    computed: {
        tags() {
            return ['all', ...new Set(this.initialTags)]; // new Set resolves the repetition of same tags ()
        }
    }
    
}