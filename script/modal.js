import {createRow} from './createElements';
import {setStorage, removeStorage} from './serviceStorage';

const hoverRow = (allRow, logo) => {
  const text = logo.textContent;
  allRow.forEach(contact => {
    contact.addEventListener('mouseenter', () => {
      logo.textContent = contact.phoneLink.textContent;
    });
    contact.addEventListener('mouseleave', () => {
      logo.textContent = text;
    });
  });
};

const modalControl = (btnAdd, formOverlay) => {
  const openModal = () => {
    formOverlay.classList.add('is-visible');
  };

  const closeModal = () => {
    formOverlay.classList.remove('is-visible');
  };

  btnAdd.addEventListener('click', openModal);

  formOverlay.addEventListener('click', e => {
    const target = e.target;
    if (target === formOverlay || target.closest('.close')) {
      closeModal();
    }
  });

  return {
    closeModal,
  };
};

const deleteControl = (btnDel, list, data) => {
  btnDel.addEventListener('click', () => {
    document.querySelectorAll('.delete').forEach(del => {
      del.classList.toggle('is-visible');
    });
  });

  list.addEventListener('click', e => {
    const target = e.target;
    if (target.closest('.del-icon')) {
      const contact = target.closest('.contact');
      const id = contact.id;
      contact.remove();
      removeStorage(id, data);
    }
  });
};

const addContactPage = (contact, list) => {
  list.append(createRow(contact));
};

const formControl = (form, list, closeModal, data) => {
  form.addEventListener('submit', e => {
    e.preventDefault();

    const randomIntFromInterval = (min, max) => {
      const num = Math.floor(Math.random() * (max - min + 1) + min);
      return num;
    };

    const formData = new FormData(e.target);
    const newContact = Object.fromEntries(formData);

    newContact.id = randomIntFromInterval(100000, 200000);
    addContactPage(newContact, list);
    data.push(newContact);
    setStorage('phonebook', data);
    form.reset();
    closeModal();
  });
};

export default {
  hoverRow,
  modalControl,
  deleteControl,
  addContactPage,
  formControl,
};
