import { useState } from 'react';

function Interativo() {
    const [lista, setLista] = useState([])
    const [tarefa, setTarefa] = useState('')
    function addTarefa() {
        lista.push(tarefa)
    }
    return (

        <div className="div">
            Nova tarefa<input type="text" value={tarefa} 
            onChange={(e) => setTarefa(e.target.value)}
            />
            <button onClick={() => addTarefa()}>Adicionar tarefa</button>
            <button onClick={() => setLista([])}>Resetar Tarefa</button>

            <div className="lista">
                <ul>
                    {lista.map((tarefa) => <li>{tarefa}</li>)}
                </ul>
            </div>
        </div>
    );

}
export default Interativo;