Vue.createApp({
  data() {
    return {
      counter: 0,
      n: '',
      fullName: '',
      confirmedName: ''
    };
  },
  methods: {
    increment(num) {
      this.counter = this.counter + num;
    },
    decrement(num) {
      this.counter = this.counter - num;
    },
    setName(event) {
      this.n = event.target.value;
    },
    setFullName(event, lastName) {
      this.fullName = event.target.value + ' ' + lastName;
    },
    submitForm() {
      alert('Submitted');
    },
    confirmName() {
      this.confirmedName = this.n;
    },
    resetInput() {
      this.fullName = ''
    },
    outputFullName() {
      console.log("running again...")
      if (this.fullName === '') {
        return '';
      }
      return this.fullName + ' ' + 'Saputra';
    }
  }
}).mount("#events");
