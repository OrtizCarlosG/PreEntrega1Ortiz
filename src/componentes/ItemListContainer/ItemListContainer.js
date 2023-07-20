import "bulma/css/bulma.css"

function ItemListContainer( { greeting } )
{
    return (
        <div className="hero-body">
            <div className="container has-text-centered">
                 <h1 class="title is-1">{greeting}</h1>
            </div>
        </div>
    );
}

export default ItemListContainer