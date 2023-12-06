import './Contato.module.css'

function Contato () {
    function Enviar() {
        alert('Mensagem Enviada')
    }
    return (
        <>
        <h1>Contato</h1>
        <form>
            <label>
                Nome 
            </label>
            <input type="text"/>
            <label>
                Email
            </label>
            <input type="email"/>
            <label>
                Assunto 
            </label>
            <input type="text"/>
            <label>
                Mensagem 
            </label>
            <textarea rows={10}></textarea>
            <button onClick={Enviar} type="submit">Enviar Mensagem</button>
        </form>
        </>
    )
}

export default Contato