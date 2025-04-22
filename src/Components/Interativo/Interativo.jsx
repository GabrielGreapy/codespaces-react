import { useState } from 'react';

function Interativo() {
    const [lista, setLista] = useState([]);  
    const [tarefa, setTarefa] = useState('');  
    const [tarefaNova, setTarefaNova] = useState('');
    const [idTarefaEditando, setIdTarefaEditando] = useState(null); 
    function addTarefa() {
        const novaTarefa = {
            id: new Date().getTime(), 
            tarefa: tarefa
        };

        setLista([...lista, novaTarefa]); 
        setTarefa('');  
    }


    function excluirTarefa(id) {
        setLista(lista.filter(t => t.id !== id)); 

    }
    function salvarEdicao(){
        setLista(lista.map(e =>
            e.id === idTarefaEditando ? {... e, tarefa:tarefaNova} : e
        ))
        setIdTarefaEditando(null); 
        setTarefaNova(''); 
    }
    

    
    function editarTarefa(id) {
        const tarefaParaEditar = lista.find(e => e.id === id)
        setTarefaNova(tarefaParaEditar.tarefa)
        setIdTarefaEditando(id)
    }

    return (
        <div className="div">
            Nova tarefa: 
            <input 
                type="text" 
                value={tarefa} 
                onChange={(e) => setTarefa(e.target.value)} 
            />
            <button onClick={addTarefa}>Adicionar tarefa</button>
            <button onClick={() => setLista([])}>Resetar Tarefa</button>

            <div className="lista">
                <ul>
                    {lista.map((tarefaObj) => (
                        <li key={tarefaObj.id}>
                            {tarefaObj.tarefa}
                            <button onClick={() => excluirTarefa(tarefaObj.id)}>
                                Excluir Tarefa
                            </button>
                            <button onClick={() => editarTarefa(tarefaObj.id)}>
                                Editar
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            {idTarefaEditando && (
                <div>
                    <h3>Editar Tarefa</h3>
                    <input 
                        type="text" 
                        value={tarefaNova} 
                        onChange={(e) => setTarefaNova(e.target.value)} 
                    />
                    <button onClick={salvarEdicao}>Salvar Edição</button>
                    <button onClick={() => setIdTarefaEditando(null)}>Cancelar</button>
                </div>
            )}
        </div>
    );
}

export default Interativo;
