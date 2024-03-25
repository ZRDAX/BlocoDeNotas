let addNote = document.querySelector('#add-note');//Botão de para adicionar nota
let closeModal =  document.querySelector('#close-modal'); //fechar janela modal com os detalhes da nota.
let modal = document.querySelector('#modal'); //Modal para edição das notas
let modalView = document.querySelector('#modal-view'); //Modal para exibição dos detalhes da nota
let notes = document.querySelector('#notes');//Lista divs com dados das notas
let btnSaveNote = document.querySelector("#btn-save-note"); //icone para salvar nota
let btnCloseNote = document.querySelector("#btn-close-note");//icone para fechar modal de edição de nota.

//eventos

addNote.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.style.display = 'block';
  notes.style.display = 'none';
  addNote.style.display = 'none';
})

btnCloseNote.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.style.display = 'none';
  notes.style.display = 'flex';
  addNote.style.display = 'block';
})

btnSaveNote.addEventListener('click', (evt) => {
  evt.preventDefault();
  let objNote = { 
    id : document.querySelector("#input-id").value, 
    title : document.querySelector("#input-title").value, 
    content: document.querySelector("#input-content").value
  };
  saveNote(objNote);
});

//function
const saveNote = (note) => {
  let listNotes = localStorage.getItem('notes');
  console.log(listNotes);
  if(!listNotes){
    listNotes = [];
  }else{
    listNotes = JSON.parse(listNotes);
  }

  if(note.id.length <= 1){
    note.id = new Date().getTime();
    document.querySelector('#input-id').value = note.id;
  }else{ 
    console.log(note.id);
  }

  listNotes.push(note);
  console.log(listNotes);
  listNotes = JSON.stringify(listNotes);
  localStorage.setItem('note', listNotes);
}


//funções