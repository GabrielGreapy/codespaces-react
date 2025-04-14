import './Aula.css'
import Header from '../Header/Header';
import Card from '../App/Card/Card';
import Mensagem from '../App/Mensagem/Mensagem';
function Aula(){
    return (
        <div>
            <Header nome = 'Gabriel'/>
            <Header nome="Martins" />
            <Card titulo="Titulo" sub="Subtitulo" />

            <h1> Disciplina de programação web 2 
                Melhor disciplina de TSI
            </h1>
            <Mensagem nome="Gabriel" idade={21} premium={true} />
            <Mensagem nome="Beatriz" idade={5} premium={false} />
        </div>

    );
}
export default Aula;