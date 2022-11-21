const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Finishing the course and learn Vue!",
      courseGoalB: "Master Vue and create amazing web!",
      boldCourseGoalA: "<h2>Mastering Vue 3!</h2>",
      vueLink: "https://vuejs.org",
    };
  },
  methods: {
    outputGoal() {
      const randonNumber = Math.random();
      if (randonNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    }
  },
});

app.mount("#user-goal");
