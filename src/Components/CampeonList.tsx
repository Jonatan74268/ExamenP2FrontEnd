import { useEffect, useState, ChangeEvent, MouseEvent } from 'react';

import GreetCampeon from './GreetCampeon'
import axios from 'axios';
import Campeon from '../Models/Campeon';

export default function CampeonList () {
    
    const [campeones, setcampeon] = useState<Campeon[]>([]);
    const [loaded, setLoaded] = useState<boolean>(false);

    async function loadcampeones() {
        const response = await axios.get('http://localhost:3001/campeones');
        setcampeon(
          response.data.map((c: Campeon) => new Campeon(c.id, c.nombre, c.alias, c.rol, c.dificultad, c.historia, c.imagen))
        );
        setLoaded(true);
    }    
    useEffect(() => {
        if (!loaded) {
         loadcampeones();
      }
    }, [campeones, loaded]);

    const rendercampeones = () => campeones.map(c => (
        <div>
        <GreetCampeon
    key={c.id}
    nombre={c.nombre}
    alias={c.alias}
    rol={c.rol}
    dificultad={c.dificultad}
    historia={c.historia}
    imagen={c.imagen}
        />
        </div>
    ));

    return (
        <div>
          {rendercampeones()}
        </div>
    );
}
