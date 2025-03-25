import './Bem_Vindo.css'


function Bem_Vindo(){
    return(
        <div className="bv">
            <h1 id='mudar'>Bem vindo ao React
            </h1>
            <button className='btn-BV' onClick={alterarTexto}>Alterar texto</button>
        </div>
    );
    function alterarTexto(){
        document.getElementById("mudar").innerHTML="Texto Alterado";
    }
    
}
export default Bem_Vindo;
