 export default {
  form: document.querySelector('.add-todo__form'),
  titleInput: document.getElementById('title'),
  contentInput: document.getElementById('content'),
  categorySelected: document.getElementById('category'),
  addTodoBtn: document.getElementById('addTodo'),
  activeNoteRow: document.querySelector('.active-notes__row'),
  activeNotesTable: document.querySelector('.active-notes__table'),
  archivedNotesRow: document.querySelector('.archived-notes__row'),
  archivedNotesTable: document.querySelector('.archived-notes__table'),
  allNotesRow: document.querySelector('.all-notes__row'),
  options: document.querySelectorAll('.add-todo__option'),
  hideBtnArchiv: document.getElementById('showBtnArchiv'),
  archivedNotesWrap: document.querySelector('.archived-notes__wrap'),
};

