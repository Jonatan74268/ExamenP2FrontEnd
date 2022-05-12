import { ChangeEvent, MouseEvent, useState } from "react";
import Campeon from "../Models/Campeon";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export default function CreateCampeonForm() {

    const [id, setId] = useState('');
    const [nombre, setNombre] = useState('');
    const [alias, setAlias] = useState('');
    const [rol,setRol] = useState('');
    const [dificultad, setDificultad] = useState('');
    const [historia, setHistoria] = useState('');
    const [imagen, setImagen] = useState('');



    function handleIdChange(event: ChangeEvent<HTMLInputElement>) {
        const newValueForId = event.target.value;
        setId(newValueForId);
    }

    function handleNombreChange(event: ChangeEvent<HTMLInputElement>) {
        const newValueForNombre= event.target.value;
        setNombre(newValueForNombre);
    }

    function handleAliasChange(event: ChangeEvent<HTMLInputElement>) {
        const newValueForAlias = event.target.value;
        setAlias(newValueForAlias);
    }

    function handleRolChange(event: ChangeEvent<HTMLInputElement>) {
        const newValueForRol = event.target.value;
        setRol(newValueForRol);
    }

    function handleDificultadChange(event: ChangeEvent<HTMLInputElement>) {
        const newValueForDificultad = event.target.value;
        setDificultad(newValueForDificultad);
    }

    function handleHistoriaChange(event: ChangeEvent<HTMLInputElement>) {
        const newValueForHistoria = event.target.value;
        setHistoria(newValueForHistoria);
    }

    function handleImagenChange(event: ChangeEvent<HTMLInputElement>) {
        const newValueForImagen = event.target.value;
        setImagen(newValueForImagen);
    }


    async function handleSave(event: MouseEvent<HTMLButtonElement>){
        event.preventDefault();

        const CampeonToCreate = new Campeon(id, nombre, alias, rol, dificultad, historia, imagen);

        console.log('Campeon creado: ', CampeonToCreate)

        await CreateCampeon(CampeonToCreate);

        ClearForm();

        window.alert('Campeon creado!');

        window.location.reload();

    }

    async function CreateCampeon(CampeonToCreate: Campeon){
        await axios.post('http://localhost:3001/campeones', CampeonToCreate, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    async function handleDelete(event: MouseEvent<HTMLButtonElement>){
        event.preventDefault();

        console.log('Campeon eliminado: ', id)

        await DeleteCampeon(id);

        ClearForm();

        window.alert('Campeon eliminado!');

        window.location.reload();

    }

    async function DeleteCampeon(id: string){
        await axios.delete('http://localhost:3001/campeones/'+ id, {
            headers: {
                'Content-Type': 'Access-Control-Allow-Origin'
            }
        });
    }

    async function handleUpdate(event: MouseEvent<HTMLButtonElement>){
        event.preventDefault();

        const campeonToUpdate = new Campeon(id, nombre, alias, rol, dificultad, historia, imagen);

        console.log('Campeon actualizado: ', campeonToUpdate)

        await UpdateCampeon(campeonToUpdate);

        ClearForm();

        window.alert('Campeon actualizado!');

        window.location.reload();

    }

    async function UpdateCampeon(campeonToUpdate: Campeon){
        await axios.put('http://localhost:3001/campeones', campeonToUpdate, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    function ClearForm(){
        setId('');
        setNombre('');
        setAlias('');
        setRol('');
        setDificultad('');
        setHistoria('');
        setImagen('');
        setRol('');

    }

    return (
        <section className="hero">
        <div className="hero-content">
        <form className="form-container">
            <h1 className='title'>Administrador de campeones</h1>
            <input type="text" placeholder="ID" className="form2" value={id} onChange={handleIdChange} />
            <br />
            <input type="text" placeholder="Nombre" className="form2" value={nombre} onChange={handleNombreChange} />
            <br />
            <input type="text" placeholder="Alias" className="form2" value={alias} onChange={handleAliasChange} />
            <br />
            <input type="text" placeholder="Dificultad" className="form2" value={dificultad} onChange={handleDificultadChange} />
            <br />
            <input type="text" placeholder="Historia" className="form2" value={historia} onChange={handleHistoriaChange} />
            <br />
            <input type="text" placeholder="Imagen" className="form2" value={imagen} onChange={handleImagenChange} />
            <br />
            <input type="text" placeholder="Rol" className="form2" value={rol} onChange={handleRolChange} />
            <br />
            <br />


            <button className="boton-save" onClick={handleSave} >Save</button><span></span>
            <button className="boton-delete" onClick={handleDelete}><FontAwesomeIcon icon={faTrashAlt} /></button>
            <button className="boton-update" onClick={handleUpdate} >Update</button>
            <br />
        </form>
        </div>
        </section>
    );
}