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

    createCategory(){
  
        const categoryInfo = {
            name: categoryNameValue.value,
        }

        const configObject = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(categoryInfo)
        }

        
        fetch(this.port + '/categories', configObject)
        .then(resp => resp.json())
        .then(data => {
            const c = new Category(data.data.attributes)
            c.addToDropDown()
            
            
        })
    }

}