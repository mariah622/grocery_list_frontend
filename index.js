// console.log('hey')
const port = 'http://localhost:3000/'
const itemCall = new ItemService(port);
const itemForm = document.getElementById('item-form')
const dropDown = document.getElementById('category_dropdown')

itemCall.getItems();
itemForm.addEventListener('submit', handleSubmit)

function handleSubmit(e){
    e.preventDefault()
    itemCall.createItem()
    debugger

}
 
