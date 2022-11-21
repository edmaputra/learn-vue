const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Finishing the course and learn Vue!",
      vueLink: "https://vuejs.org",
    };
  },
  methods: {
    outputGoal() {
      const randonNumber = Math.random();
      if (randonNumber < 0.5) {
        return 'Learn Vue!';
      } else {
        return 'Master Vue!';
      }
    }
  },
});

app.mount("#user-goal");
