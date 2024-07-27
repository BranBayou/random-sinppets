Vue.createApp({
    data() {
        return {
            goals: [],
        }
    },
    methods: {
        addNewGoal() {
            const goalText = this.$refs.goalText.value.trim();
            if (goalText !== '') {
                this.goals.push(goalText);
                this.$refs.goalText.value = '';
            }
        }
    }
}).mount('#main-div');

