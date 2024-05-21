import { Link } from 'react-router-dom';

function Contato(){
    return(
        <div>
            <h1>Página Contato</h1>
            <span>Emanuel de Cristo Santos</span>
            
            <br/>

            <Link to="/">Home</Link><br/>
            <Link to="/sobre">Sobre</Link>

            <hr/>

            <Link to="/produto/1">Acessar Produto 1</Link>


        </div>
    );
}

export default Contato;