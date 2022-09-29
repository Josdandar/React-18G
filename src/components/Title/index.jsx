import "./Title.css"

export default function Title({ text }){
    return (
        <h1>{text.toUpperCase()}</h1>
    )
}

//con la destructuracion podemos ser mas claros con lo que estamos tomando del objeto 