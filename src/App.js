import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import "bulma/css/bulma.css"
function App() {
  return (
  <div>
     <NavBar />
      <ItemListContainer greeting={"Bienvenidos"}/>
  </div>
  );
}

export default App;
