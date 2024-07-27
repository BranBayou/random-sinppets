Vue.createApp({
    data() {
        return {
            newGoal: '',
            goals: [],
        }
    },
    methods: {
        addNewGoal() {
            if (this.newGoal.trim() !== '') {
                this.goals.push(this.newGoal);
                this.newGoal = '';
            }
        }
    }
}).mount('#main-div');
