export default {
  created() {
    this.$store.dispatch('robots/getParts');
  },
  computed: {
    parts() {
      return this.$store.state.parts || {
        heads: [],
        arms: [],
        torsos: [],
        bases: [],
      };
    },
  },
};
