const app = Vue.createApp({
  data() {
    return { 
      goalValue: '',
      goals: [] 
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.goalValue);
    },
    removeGoal(index) {
      this.goals.splice(index);
    }
  }
});

app.mount('#user-goals');
