<template>
<ul class="accordion">
  <slot/>
</ul>
</template>

<script>
export default {
  provide() {
    return { accordion: this.accordion };
  },

  props: {
    name: { type: String, default: undefined },
    single: { type: Boolean, default: false },
    activeCount: { type: [Number, Boolean], default: false },
  },

  data() {
    return {
      accordion: {
        name: this.name,
        count: 0,
        active: undefined,
        activeCount: this.activeCount,
        single: this.single,
      },
    };
  },
};
</script>
