import { useState } from 'react';

function Interativo() {
    const [lista, setLista] = useState([])
    const [tarefa, setTarefa] = useState('')
    function addTarefa() {
        setLista([...lista, tarefa]);
        setTarefa('');
    }
    return (

        <div className="div">
            Nova tarefa<input type="text" value={tarefa}
                onChange={(e) => setTarefa(e.target.value)}
            />
            <button onClick={() => addTarefa()}>Adicionar tarefa</button>
            <button onClick={() => setLista([])}>Resetar Tarefa</button>

            <div className="lista">
                {lista.map((tarefa, index) => (
                    <li key={index}>{tarefa}</li>
                ))}
            </div>
        </div>
    );

}
export default Interativo;