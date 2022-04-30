class Item {
    static all = [];
    static cont = document.getElementById('item-cont')
    constructor ({name, price, color, description, id, category_id, category}){
        this.name = name
        this.price = price
        this.color = color
        this.description = description
        this.id = id
        this.category_id = category_id
        this.category = category
        this.element = document.createElement('li')
        this.element.dataset['id'] = id
        this.element.id = `item-${id}`
        Item.all.push(this)
        // debugger
    } 

    render(){
        this.element.innerHTML = `
        <div data-id="${this.id}">
            <h2 class="name">${this.name}</h2>
            <p class="color">${this.color}</p>
            <p class="price">$${this.price}</p>
            <p></p>
            <p class="description">${this.description}</p>
        
        </div>
        `

        return this.element
       

    }

   



    attachToDom(){
        Item.cont.appendChild(this.render())
        // debugger
    }
}