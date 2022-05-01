// console.log('hey')
const port = 'http://localhost:3000/'
const itemCall = new ItemService(port);
const categoryCall = new CategoryService(port);
const itemForm = document.getElementById('item-form')
const dropDown = document.getElementById('category_dropdown')

const nameValue = document.getElementById('item-name')
const colorValue = document.getElementById('item-color')
const priceValue = document.getElementById('item-price')
const descriptionValue = document.getElementById('item-description')


itemCall.getItems();
categoryCall.getCategories();

itemForm.addEventListener('submit', handleSubmit)

function handleSubmit(e){
    e.preventDefault()
    itemCall.createItem()
    // debugger

}
 
