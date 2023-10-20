import { useParams } from "react-router-dom";

function Blog(){
    const params = useParams()
    // const {id} = useParams();

    return (
        <>
            <section className='blog'>
                <h1>Hola, soy el blog</h1>
                <smal>Unicamente como ejemplos:</smal>
                <p>https://pokeapi.co/api/v2/pokemon/{params.id}</p>
                <p>http://localhost:3000/estudiantes/{params.id}</p>
            </section>
        </>
    )
}

export default Blog;