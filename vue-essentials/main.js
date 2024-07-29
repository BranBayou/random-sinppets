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

const friendsList = Vue.createApp({
    data() {
        return {
            friends: [
                {   
                    name: 'Ayu Doe', 
                    phone: '+251911121314',
                    email: 'ayu@localhost.com',
                },
                {
                    name: 'Abrsh Doe',
                    phone: '+251911121314',
                    email: 'Ab@localhost.com'
                },
                {
                    name: 'Alice Doe',
                    phone: '+251911121315',
                    email: 'mati@localhost.com'
                }
            ],
        };
    },
});
friendsList.mount('#friends-list');

friendsList.component('list-all', {
    
});







$(document).ready(function() {
    $('.show-more').on('click', function() {
        $('.hide').toggleClass('hidden-content');
    }) 
});
