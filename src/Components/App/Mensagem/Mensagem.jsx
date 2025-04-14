function Mensagem(props){
    let mensagem = "Bem vindo(a)," + props.nome + "! Obrigado por ser usuario premium!";
    if(props.premium == false){
        mensagem = "Olá, " + props.nome + "!! Considere se tornar um usuario premium para mais beneficios."
    }
    <div>
        <h1>
            {mensagem}
        </h1>
        {props.idade < 18(
            <h1>
                Atenção: Você tem menos de 18. algumas funcionalidades não estarão disponiveis
            </h1>
        )}
        
    </div>
};

export default Mensagem;