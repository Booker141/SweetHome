import Head from 'next/head'
import {useSession} from 'next-auth/react'
import {useRouter} from 'next/router'
import {useState} from 'react'
import {MdLocationOn} from 'react-icons/md'
import {BsImageFill, BsFillChatLeftTextFill} from 'react-icons/bs'
import {colors} from '/styles/frontend-conf'
import {fonts} from '/styles/frontend-conf'
import global from '/styles/global.module.css'
import Layout from '/components/Layout/Layout'
import {server} from '/server'


export default function CreateAttendance(){

    const {data: session, status} = useSession({required: true});
    const Router = useRouter();
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [message, setMessage] = useState("");
    
    const createAttendance = async (e) =>{

        e.preventDefault();

        const res = await fetch(`${server}/api/attendances`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: session.user.id,
                location: location,
                description: description,
                username: session.user.username,
            })
        }).catch(err => console.log(err));

        const data = await res.json()

        if(data.error){
            console.log(data.error);
            setMessage("Introduzca los campos obligatorios")
        }else{
            setMessage("Publicación de cuidado creada correctamente");
            Router.push("/home");
        }

    }

    if(status == "loading"){
        return <div className={global.loading}><p className={global.title}>Cargando..</p></div>
    }
    if(session){

        return (
            <Layout>
                <Head><title>Crear publicación de cuidado</title></Head>
                <div className={global.content}>
                    <div className={global.dots}>
                    <div className="form">
                        <h1 className="form__title">Crear publicación de cuidado</h1>
                        <p className={global.text2}>Introduzca los datos de la publicación. Los campos obligatorios vienen indicados con un asterisco *:</p>
                        <form action="/api/posts" id="form">
                            <div className="form-vertical__email">
                                <div className="label">
                                    <p className={global.text}>Ubicación</p>
                                    <MdLocationOn size={25} color={colors.secondary} />
                                </div>
                                <div className="location__input">
                                    <input
                                        title="Introducir ubicación"
                                        type="text"
                                        name="location"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                        placeholder="p. ej.: Cádiz"
                                        className="input">
                                    </input>
                            </div>
                            </div>
                            <div className="form-vertical__old">
                                <div className="label">
                                    <p className={global.text}>Seleccionar imagen:</p>
                                    <BsImageFill size={25} color={colors.secondary} />
                                </div> 
                                <div className="image__input">
                                    <input 
                                        title="Introducir imagen"
                                        type="file" 
                                        name="image" 
                                        accept="image/*"
                                        placeholder='Ningún archivo seleccionado'
                                        className="input"> 
                                    </input>
                                    <input type="submit" className={global.buttonPrimary}/>
                                </div>
                            </div>
                            <div className="form-vertical__new">
                                <div className="label">
                                    <p className={global.text}>Descripción (*)</p>
                                    <BsFillChatLeftTextFill size={25} color={colors.secondary} />
                                </div> 
                                <div className="password__input">
                                <textarea
                                    title="Introducir descripción"
                                    name="Description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="p. ej.: Esta es mi mascota..."
                                ></textarea>
                            </div>
                            </div>
                            
                            </form>  
                                <input className={global.buttonPrimary} type="submit" onClick={(e) => createAttendance(e)} value="Crear"/> 
                            </div>
                        </div>
                    </div>
                <style jsx>{`

                    .form{

                        /*Box model*/

                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    
                        width: 100%;

                        /*Visuals*/

                        background-image: linear-gradient(45deg, rgba(240,129,15, 0.8) 35%, rgba(249,166,3, 0.8) 100%);
                        background-size: 100% 110%;
                        border-radius: 20px;
                        
                    }

                    .form__title{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        margin-top: 2rem;
                        margin-bottom: 1rem;

                        /*Text*/

                        font-family: 'Satisfy';
                        font-size: 4rem;
                        font-weight: 500;
                        color: ${colors.secondary};
                    }

                    .label{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        align-items: center;

                    }

                    .label p{

                        /*Box model*/

                        margin-right: 1rem;

                        /*Visuals*/

                        color: ${colors.secondary};

                    }
                    
                    .input{

                        /*Box model*/

                        width: 100%;
                        height: 2rem;
                        padding: 0.4rem;
                        margin-bottom: 1rem;
                        

                        /*Text*/

                        font-family: ${fonts.default};
                        font-size: 1rem;

                        /*Visuals*/

                        border-radius: 5px;
                        border: 1px solid ${colors.primary};
                    }

                

                    .form-vertical__old {

                        /*Box model*/

                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        width: 100%;

                    }

                    .form-vertical__new {

                        /*Box model*/

                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        width: 100%;

                    }

                    .form-vertical__new2 {

                        /*Box model*/

                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        width: 100%;

                    }

                    .password__input{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        width: 115%;
                        

                    }

                    .location__input{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        align-items: center;
                    }

                    .image__input{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    gap: 1rem;

                    }

                    
                    input[type="submit"]{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        margin-top: 2rem;
                        margin-bottom: 2rem;

                    }

                    input[type="file"]{

                        /*Box model*/

                        width: 100%;
                        height: 100%;

                        /*Visuals*/

                        border-radius: 10px;
                        background-color: transparent;
                        border: 1px solid ${colors.secondary};
                        color: ${colors.secondary};

                    }

                    input[type="file"]::before{

                        /*Box model*/

                        padding: 0.5rem;
                        margin-right: 1rem;

                        /*Visuals*/

                        cursor: pointer;
                        content: 'Subir imagen..';
                        background-color: ${colors.primary};
                        color: ${colors.secondary};
                        border-radius: 5px;
                    


                    }

                    input[type="file"]::-webkit-file-upload-button {

                        display: none;

                    }


                    input[type="email"]:focus {

                        /*Visuals*/

                        border: 2px solid #4d97f7;
                        outline: none;
                        box-shadow: 10px 10px 20px 0px rgba(176,176,176,0.66);

                    }

                    input[type="password"]:focus {

                        /*Visuals*/

                        border: 2px solid #4d97f7;
                        outline: none;
                        box-shadow: 10px 10px 20px 0px rgba(176,176,176,0.66);

                    }

                    ::placeholder{

                        /*Text*/

                        color: ${colors.primary};
                    }

                    textarea{

                    /*Box model*/

                    width: 100%;
                    height: 3rem;
                    padding: 0.4rem;
                    margin-bottom: 2rem;

                    /*Text*/

                    font-family: ${fonts.default};
                    font-size: 1rem;

                    /*Visuals*/

                    border-radius: 5px;
                    border: 1px solid ${colors.primary};

                    }

                    h1{

                        /*Box model*/

                        margin-top: 2rem;
                        margin-bottom: 3rem;
                    }

                    a{

                        /*Misc*/

                        cursor: pointer;
                    }

                `}</style>
            </Layout>
        )
  

    }else {
        return(
            <Layout>
                    <div className={global.content}>
                        <div className="message">
                            <h1 className={global.title}>Para acceder a esta página debe iniciar sesión</h1>
                            <button className={global.buttonPrimary} onClick={() => signIn()}>Iniciar sesión</button>
                        </div>
                    </div>
                    <style jsx>{`

                        .message{

                            /*Box model*/

                            display: flex
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            
                            
                        }
                        
                    `}</style>
            </Layout>
        )
    }
}