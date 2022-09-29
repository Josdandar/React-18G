import "../FullName/FullName.css"

export default function FullName({ firstName, lastName }){
 return (<p>{firstName + " " + lastName}</p>)
}

//desestructuramos el objeto props, y tomamos las dos propiedades y las usamos como variables 