import LexicalDocumentation from "./LexicalDocumentation"
import axios from 'axios'
function Mediator(){
    return (
        <>
        <LexicalDocumentation data = {() =>{
            axios.post("http://localhost:3002/document", { doc_id: window.location.pathname.split("/")[1] })
            .then(response => {
              return response.data
            })
        }} />
        </>
    )
}

export default Mediator