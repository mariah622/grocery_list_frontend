class CategoryService {
    constructor(port){
        this.port = port
    }

    getCategories(){
        fetch(this.port + '/categories')
        .then(resp => resp.json())
        .then(data => {
         
            for(const category of data.data){
                let c = new Category(category.attributes)
                c.addToDropDown()
            }


        })
        // .catch()
    }
}