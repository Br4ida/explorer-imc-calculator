export const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  btnClose: document.querySelector('.close'),
  open() {
    Modal.wrapper.classList.add('open');
  },
  close() {
    Modal.wrapper.classList.remove('open');
  }
}

function handleKeydown(event) {
  if (event.key === 'Escape') {
    Modal.close();
  }
}

Modal.btnClose.onclick = function () {
  Modal.close()
}

window.addEventListener('keydown', handleKeydown);
