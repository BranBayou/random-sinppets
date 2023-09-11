const body = document.querySelector('body');
const gameButton = document.querySelectorAll('.btn');

const win = [
  [gameButton[0], gameButton[1], gameButton[2]],
  [gameButton[0], gameButton[3], gameButton[6]],
  [gameButton[0], gameButton[4], gameButton[8]],
  [gameButton[2], gameButton[5], gameButton[8]],
  [gameButton[2], gameButton[4], gameButton[6]],
  [gameButton[1], gameButton[4], gameButton[7]]
]

const user1 = 0;
const user2 = 0;

const user = {
  userOneInput: 'X',
  userTwoInput: 'O'
}
gameButton.forEach(button => {
  button.addEventListener('click', (e) =>{
    button.innerHTML = user.userOneInput;
  });
});