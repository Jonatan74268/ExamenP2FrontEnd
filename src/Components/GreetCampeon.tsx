
type GreetCamepeonProps = {
    nombre: String,
    alias: String,
    rol: String,
    dificultad: String,
    historia: string,
    imagen: string

}

export default function Campeon(Props: GreetCamepeonProps){
    return (
        <section className="hero">
        <div className="hero-content">
        <img className="imagen" src={Props.imagen}></img>
        
        <div className="conten">
        
        
            
           <h2 className="hero-subtitle">
           {Props.alias}
           </h2>
        
           <h1 className="hero-title">
           {Props.nombre}
           </h1>
           
           </div>
           <br></br>
           <div className="wrapper">
           <div><br></br><h1>DIFICULTAD:</h1> <h2 className='dorado'>{Props.dificultad}</h2></div>
           <div><br></br><h1>ROL:</h1> <h2 className='dorado'>{Props.rol}</h2></div>
          <div className="hero-history">{Props.historia}</div>
        
        </div>
        </div>
        
        </section>
        
        
            );}
