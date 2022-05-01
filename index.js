// console.log('hey')
const port = 'http://localhost:3000/'
const itemCall = new ItemService(port);
const categoryCall = new CategoryService(port);
const itemForm = document.getElementById('item-form')
const categoryForm = document.getElementById('category-form')
const dropDown = document.getElementById('category_dropdown')

const nameValue = document.getElementById('item-name')
const colorValue = document.getElementById('item-color')
const priceValue = document.getElementById('item-price')
const descriptionValue = document.getElementById('item-description')
const categoryNameValue = document.getElementById('category-name')

itemCall.getItems();
categoryCall.getCategories();

itemForm.addEventListener('submit', handleItemSubmit)
categoryForm.addEventListener('submit', handleCategorySubmit)

function handleItemSubmit(e){
    e.preventDefault()
    itemCall.createItem()

 

}

function handleCategorySubmit(e){
    e.preventDefault()
    categoryCall.createCategory()
    
}


 
