import { colors } from "styles/frontend-conf";
import {fonts} from "styles/frontend-conf";
/*
    * @author Sergio García Navarro
    * @returns Form Button component
    * @version 1.0
    * @date 13/01/2020
    * @description Form Button component
*/
/**
 * This function takes in a name prop and returns a styled input element with the value of the name
 * prop
 * @returns A styled input element.
 */
export default function FormButton({ name }) {
  return (
    <>
      <input type="submit" value={name}></input>
      <style jsx>
        {`
        
          input {
            /*Position*/

            position: relative;

            /*Box model*/

            display: block;
            height: 7vh;
            width: 16vw;
            padding: 1vh 2vh;
            margin: 0 auto;

            /*Text*/

            color: ${colors.secondary};
            font-family: ${fonts.default} + 'Light';
            font-style: bold;
            font-size: 1rem;

            /*Visuals*/

            background-color: #FCAA7F;
            border-radius: 5px;
            border: 1px solid ${colors.secondary};
          
          }

          input:hover{

            /*Visuals*/

            background-color: #F9B776;
            transition: all 0.5s ease-in-out;
          }
        `}
      </style>
    </>
  );
}
