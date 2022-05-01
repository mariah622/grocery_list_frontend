class Category {
    // static all = [];
    // static cont = document.getElementById('category-cont')
    constructor ({name, id}){
        this.name = name
        this.id = id
        // this.element = document.createElement('li')
        // this.element.dataset['id'] = id
        // this.element.id = `item-${id}`
       
        // debugger
    } 

    addToDropDown(){
        const option = document.createElement('option')
        option.value = this.id
        option.innerHTML = this.name
        dropDown.appendChild(option)
    }

}