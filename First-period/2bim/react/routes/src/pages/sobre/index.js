import { Link } from 'react-router-dom';

function Sobre(){
    return(
        <div>
            <h1>Página sobre a Emoresa</h1>
            <span>Campo Real</span>
            
            <br/>

            <Link to="/">Home</Link><br/>
            <Link to="/contato">Contato</Link>

            <hr/>

            <Link to="/produto/1">Acessar Produto 1</Link>


        </div>
    );
}

export default Sobre;