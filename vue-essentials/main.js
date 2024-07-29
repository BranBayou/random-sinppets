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

const friendsList = Vue.createApp({});

friendsList.component('list-all', {
    template: `
        <li v-for="friend in friends" :key="friend.name">
            <ul>
                <li>
                    {{ friend.name }}
                </li>
                <p class="show-more" @click="toggleDetails(friend.name)">show more</p>
                <ul :class="{'hide': !friend.showDetails, 'hidden-content': friend.showDetails}">
                    <li>
                        {{ friend.phone }} 
                    </li>
                    <li>
                        {{ friend.email }} 
                    </li>
                </ul>
            </ul>
        </li>
    `,
    data() {
        return {
            friends: [
                {   
                    name: 'Ayu Doe', 
                    phone: '+251911121314',
                    email: 'ayu@localhost.com',
                    showDetails: false
                },
                {
                    name: 'Abrsh Doe',
                    phone: '+251911121314',
                    email: 'Ab@localhost.com',
                    showDetails: false
                },
                {
                    name: 'Alice Doe',
                    phone: '+251911121315',
                    email: 'mati@localhost.com',
                    showDetails: false
                }
            ],
        };
    },
    methods: {
        toggleDetails(name) {
            const friend = this.friends.find(friend => friend.name === name);
            friend.showDetails = !friend.showDetails;
        }
    }
});

friendsList.mount('#friends-list');

