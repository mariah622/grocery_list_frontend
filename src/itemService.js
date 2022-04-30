class ItemService{
    constructor(port){
        this.port = port
    }

    getItems(){
        fetch(this.port + '/items')
        .then(resp => resp.json())
        .then(data => console.log(data.data.data))
        // have to use dot notation so much b/c of serializer added.
    }
}