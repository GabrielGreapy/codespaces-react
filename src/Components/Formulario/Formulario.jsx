import { userState } from "react";
import { requestFormReset } from "react-dom";

function Formulario(){
    const [nome, setNome] = useState("")

    return(
        <div>
        <input type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
        
        />
        </div>

    );
}
export default Formulario;