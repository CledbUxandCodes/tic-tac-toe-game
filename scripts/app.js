// This file will be the main entry file which will be  executed first. This file will reach out to different HTML elements and store these elements in different variables which we can then point to from a different js file to add our logical programming.//

const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');

const editPlayerOneBtnElement = document.getElementById('edit-player-1-btn');
const editPlayerTwoBtnElement = document.getElementById('edit-player-2-btn');

const cancelConfigBtnElement = document.getElementById('cancel-config-btn');


editPlayerOneBtnElement.addEventListener('click', openPlayerConfig);
editPlayerTwoBtnElement.addEventListener('click', openPlayerConfig);

cancelConfigBtnElement.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);