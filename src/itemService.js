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
                // debugger
            }


        })
        .catch()
    }

    createItem(){
        
    }
}