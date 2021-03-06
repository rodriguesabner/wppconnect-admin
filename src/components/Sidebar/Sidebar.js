import { Layout, WrapperMenu } from './styles';

export default {
  name: 'Sidebar',
  components: {
    Layout,
    WrapperMenu,
  },
  methods: {
    changeActiveButton() {
      this.$store.commit('changeActiveButton');
    },
  },
};
