import { Modal } from './modal.js';
import { AlertError } from './alert-erro.js';
import { calculateIMC, notANumber } from './utils.js';

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

form.onsubmit = function (event) {
  event.preventDefault();

  const weight = Number(inputWeight.value);
  const height = Number(inputHeight.value);

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

  if (weightOrHeightIsNotANumber) {
    AlertError.open()
    return
  }

  const imc = calculateIMC(weight, height);
  displayResultMessage(imc);

}

function displayResultMessage(result) {
  Modal.message.innerText = `Seu IMC é ${result}.`;
  Modal.open()
}