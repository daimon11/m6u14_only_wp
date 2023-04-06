import * as createElements from './createElements';

const {
  createHeader,
  createLogo,
  createMain,
  createButtonsGroup,
  createTable,
  createForm,
  createFooter,
  createRow,
  createImageLogo,
} = createElements;

const renderPhoneBook = (app, title) => {
  const header = createHeader();
  const imageLogo = createImageLogo();
  const logo = createLogo(title);
  const main = createMain();
  const buttonGroup = createButtonsGroup([
    {
      classList: 'btn btn-primary mr-3',
      type: 'button',
      text: 'Добавить',
    },
    {
      classList: 'btn btn-danger',
      type: 'button',
      text: 'Удалить',
    },
  ]);
  const table = createTable();

  const {form, overlay} = createForm();

  const footer = createFooter();

  header.headerContainer.append(imageLogo, logo);
  main.mainContainer.append(buttonGroup.btnWrapper, table, overlay);
  app.append(header, main, footer);

  return {
    list: table.tbody,
    logo,
    btnAdd: buttonGroup.btns[0],
    btnDel: buttonGroup.btns[1],
    formOverlay: overlay,
    form,
  };
};

const renderContacts = (elem, data) => {
  const allRow = data.map(createRow);
  elem.append(...allRow);
  return allRow;
};

export default {
  renderPhoneBook,
  renderContacts,
};
