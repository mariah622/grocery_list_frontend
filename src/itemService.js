class ItemService{
    constructor(port){
        this.port = port
    }

    getItems(){
        fetch(this.port + '/items')
        .then(resp => resp.json())
        .then(data => {
            for(const item of data.data){
                let i = new Item(item.attributes)
                i.attachToDom()

            }


        })

    }

    createItem(){
        // debugger
        // fetch request to send infromation through
        // post request will be needed
        const itemInfo = {
            // passing through object that has key of itenm
            // pass through name, description, color, price,
            name: nameValue.value,
            description: descriptionValue.value,
            color: colorValue.value,
            price: priceValue.value,
            category_id: dropDown.value
        }

        const configObject = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(itemInfo)
        }

        
        fetch(this.port + '/items', configObject)
        .then(resp => resp.json())
        .then(data => {
            const i = new Item(data.data.attributes)
            i.attachToDom() 
        })
        .catch(error => alert(error))
        .catch()

        

    }

    deleteItem(e){
        // debugger
        const id = e.target.dataset.id
        e.target.parentElement.remove()
        fetch(this.port + `/items/${id}`, {method: 'DELETE'})
        .then(resp => resp.json())
        .then(json => alert(json.message))

    }
}