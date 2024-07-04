export function Databinding()
{
    var categories=[
        {category :"electronics", products:["food","data"]},
        {category :"fashion",products:["kapade","maehndi"]}
    ]
        
    
    return(
        <div class="container-fluid">
            <h2>Categories</h2>
            <select>
                 {
                    categories.map((data)=>
                       <optgroup label={data.category}>
                        {
                            data.products.map((items)=>
                            <option>{items}</option>
                            )
                        }

                       </optgroup>
                        
                       
                    )
                 }
            </select>
        </div>
    )
}