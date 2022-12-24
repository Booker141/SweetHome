import Image from 'next/image';
import Logo from '../../public/LogoWeb.png'

/*
    * @author Sergio García Navarro
    * @returns Trademark component
    * @version 1.0
    * @date 13/01/2020
    * @description Trademark component
*/
/**
 * This function returns an image that links to the link passed in as a prop
 * @returns A function that returns a JSX element.
 */


export default function Trademark({link}){

    return(

        <>
            <div className="img">
                <a href={link} aria-label='Ir a Inicio'><Image src={Logo} width={150} height={65}/></a>
            </div>
        </>
        
    )


}

