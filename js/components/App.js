import Assignments from "./Assignments.js";
import Panel from './Panel.js';

export default {
  components: {
    Assignments, Panel
  }, 
  template: `
    <div class="grid gap-6">
      <assignments></assignments>

      <panel theme="light">
        This is my default slot
      </panel>

      <panel>
        This is my default slot
        <template v-slot:heading>
          This is my heading slot
        </template>
      </panel>

      <panel>
        This is my default slot
        <template v-slot:heading>
          This is my heading slot
        </template>
        <template v-slot:footer>
          Click Here To Action
        </template>
      </panel>
    </div>
  `,
}