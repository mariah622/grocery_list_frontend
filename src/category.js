class Category {
    static all = [];
    static cont = document.getElementById('category-cont')
    constructor ({name, id}){
        this.name = name
        this.id = id
        this.element = document.createElement('li')
        this.element.dataset['id'] = id
        this.element.id = `category-${id}`
        this.element.addEventListener('click', this.handleClick)
        Category.all.push(this)
       
        // debugger
    } 

    render(){
        this.element.innerHTML = `
        <div data-id="${this.id}">
            <h2 class="name">${this.name}</h2>
        </div>
            <button class='delete' data-id=${this.id}>X</button
        `

        return this.element
       
    }

    addToDropDown(){
        const option = document.createElement('option')
        option.value = this.id
        option.innerHTML = this.name
        dropDown.appendChild(option)
    }

    attachToDom(){
        Category.cont.appendChild(this.render())
    }

}