import { useState } from "react";
import { Addarea, Container, Results } from "./style";
import {Tempo} from '../../type/types' 
import { api } from "../../services/api";
import { FiSearch, FiXCircle } from "react-icons/fi";



export function Main(){
    const [input, setInput] = useState('')
    const [tempo, setTempo] = useState<Tempo>()
    const [aux, setAux] = useState('')
    

    async function handleTemp(){
        let response = await api.get(`${input}`)
            setTempo(response.data);
            setAux(input)
            setInput('') 
    }
    
    return(
        <Container>
            <h1>Tempo</h1>
            <Addarea>
            <input type="text"
            placeholder="digite o nome da cidade aqui..."
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            />
            <button onClick={handleTemp}><FiSearch size={20}/></button>
            </Addarea>
            {tempo && 
                <Results>
                
                <h1>Cidade: {aux}</h1>
                <h2>Descrição: {tempo?.description}</h2>
                <h3>Temperatura: {tempo?.temperature}</h3>
                </Results>
            }
            
            
        </Container>
    )
}