/* Static imports */

import { fonts, colors } from "styles/frontend-conf.js";
import Head from "next/head";
import global from "styles/global.module.css";
import dynamic from "next/dynamic";
import BasicLayout from "/components/BasicLayout/BasicLayout";

/* Dynamic imports */

const LazyLoad = dynamic(() => import("react-lazyload"));

/**
 * @author Sergio García Navarro
 * @returns Privacy page
 * @version 1.0
 * @description Privacy page
 */
export default function Privacy() {
  return (
    <BasicLayout>
      <Head>
        <title>Privacidad | Sweet Home </title>
      </Head>
      <h1 className={global.title}>Privacidad ✎</h1>
      <h2 className="first-line">
        Última actualización el 23 de mayo de 2023
      </h2>
      <hr className={global.line} />
      <div className="privacy__text1">
        <p className={global.text}>
          La política de privacidad de Sweet Home describe el modo de uso y
          recopilación de los datos personales de aquellos usuarios que hacen
          uso de la aplicación. Es usuario aquella persona que hace uso habitual
          de la aplicación, entendiéndose por uso, la modificación e inserción
          de datos así como la interacción con las funciones que ofrece la
          aplicación. La presente política de privacidad tiene una aplicación a
          nivel mundial.
        </p>
      </div>
      <h2 className={global.secondary}>
        Política de Privacidad de Sweet Home ⚠︎
      </h2>
      <hr className={global.line} />
      <h6 className={global.text}>
        Sweet Home es responsable del tratamiento de los datos personales de los
        usuarios. Por favor lea detenidamente la correspondiente política para
        obtener más información.
      </h6>
      <ul className={global.list}>
        <li className={global.list__item}> Información personal.</li>
        <li className={global.list__item}> Uso de la información.</li>
        <li className={global.list__item}> Información sobre la privacidad de los niños.
        </li>
        <li className={global.list__item}> Enlace a redes sociales.</li>
        <li className={global.list__item}> Seguridad de la información.</li>
        <li className={global.list__item}> Conservación.</li>
        <li className={global.list__item}> Cambios en la política de privacidad.
        </li>
      </ul>

      <h2 className={global.secondary}>1. Información personal</h2>
      <hr className={global.line} />
      <h6 className={global.text}>
        La recopilación de información personal la realizamos una vez ingresa en
        la aplicación, a la hora del registro o bien la información publicada
        posteriormente. Esta información se divide en dos partes: a) información
        facilitada por el usuario y b) información recopilada mientras el
        usuario hace uso de la aplicación. La información personal del registro
        es obligatoria para el uso de la aplicación. Combinamos la información
        que usted nos proporciona con información que obtenemos más adelante con
        métodos automatizados. Podemos categorizar la información que nos
        proporciona mientras hace uso de la aplicación en:
      </h6>
      <ul className={global.list}>
        <li className={global.list__item}>
          
          Nombre, correo electrónico, teléfono, fecha de cumpleaños, género y
          otros datos que proporciona en el formulario de registro.
        </li>
        <li className={global.list__item}>
          
          Información demográfica como edad o género.
        </li>
        <li className={global.list__item}>
          
          Información relativa a su cuenta como nombre de usuario y contraseña.
        </li>
        <li className={global.list__item}> Información sobre su perfil.</li>
      </ul>
      <p className={global.text}>
        Con métodos automatizados solo recogemos información relativa a su
        perfil y haya sido introducida en nuestra aplicación. No recogeremos
        información sobre su dirección IP, sistema operativo y dispositivo
        utilizados, etc.
      </p>

      <h2 className={global.secondary}>2. Uso de la información</h2>
      <hr className={global.line} />
      <h6 className={global.text}>
        Realizamos un uso sencillo con la información que nos proporciona. En
        general, utilizamos la información para realizar un análisis empresarial
        completo para evaluar y analizar las tendencias de los usuarios y así
        poder realizar una mejora completa de la aplicación en el futuro.
        Además, para garantizar la seguridad de nuestros servicios en línea y de
        la tecnología empleada en nuestra aplicación. Esto incluye el uso para
        proteger y prevenir fraudes o delitos que se han realizado dentro de la
        aplicación.
      </h6>

      <p className={global.text}>
        Por último, anonimizaremos su información para su uso interno y externo
        de forma que no haya manera de ser identificado, así como cumplir con
        las obligaciones legales descritas en <strong>Condiciones</strong>.
        Antes de realizar un uso distinto al aquí descrito, se lo comunicaremos
        en el momento de recopilarla.
      </p>

      <h2 className={global.secondary}>
        3. Información sobre la privacidad de los niños
      </h2>
      <hr className={global.line} />
      <p className={global.text}>
        Sabemos la importancia de proteger la privacidad de los niños que
        utilizan nuestra aplicación. Nos comprometemos a la protección total de
        la información que recogemos de estos usuarios. Pedimos a los padres o
        tutores legales que controlen el uso regular que realizan sus hijos en
        nuestros servicios en línea.
      </p>

      <h2 className={global.secondary}>4. Enlace a redes sociales</h2>
      <hr className={global.line} />
      <p className={global.text}>
        En nuestra aplicación hacemos uso de enlaces a sitios webs de terceros
        de los que no disponemos el control, por tanto si visita algunos de
        estos sitios web, debe leer con atención la política de privacidad y
        condiciones de dichos sitios.
      </p>

      <h2 className={global.secondary}>5. Seguridad de la información</h2>
      <hr className={global.line} />
      <p className={global.text}>
        Tomaremos todas las medidas necesarias y adecuadas para garantizar la
        seguridad y protección de los datos personales que nos ha proporcionado.
        Estas medidas se diseñaron en primera instancia para proteger la
        información contra la pérdida, acceso, uso ilegal o divulgación.
      </p>

      <h2 className={global.secondary}>6. Conservación</h2>
      <hr className={global.line} />
      <p className={global.text}>
        Conservaremos la información durante el tiempo necesario para realizar
        actividades descritas en esta política de seguridad. Sin embargo si el
        usuario pide expresamente que esta información sea eliminada, nos
        encargaremos de hacerlo inmediatamente.
      </p>

      <h2 className={global.secondary}>
        7. Cambios en la política de privacidad
      </h2>
      <hr className={global.line} />
      <p className={global.text}>
        Esta política de privacidad es posible que sufra modificaciones a lo
        largo del tiempo. Si se realiza alguna modificación, el usuario será
        informado y el cambio correspondiente se verá reflejado en esta página,
        así como la modificación de la fecha en la que entra en vigor dicha
        política.
      </p>
      <p className="last-line">
        Si presenta alguna duda con respecto a la política de privacidad, tiene
        la información para contactar con nosotros en el siguiente enlace:
        &nbsp;
        <a
          className={global.link}
          aria-label="Ir a información de contacto"
          href="/contact"
        >
          Contacta con nosotros
        </a>
        .
      </p>

      <style jsx>
        {`

                    .privacy__text1{

                        /*Box model*/

                        margin-top: 4rem;
                        text-align: justify;
                    }

                    .first-line{

                        /*Text*/

                        font-family: ${fonts.default};
                        font-size: 0.9rem;
                        font-weight: bold;
                    }

                    .last-line{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        margin-top: 2rem;

                        /*Text*/

                        font-weight: 350;
                        font-family: ${fonts.default};
                    }


                    hr{
                        /*Box model*/

                        width: 100%;
                    }

                    p{
                        /*Box model*/

                        margin-bottom: 5rem;
                    }

                    ul{
                        /*Box model*/

                        margin-bottom: 2rem;
                    }

                    h2{

                        /*Visuals*/

                        font-weight: 400;
                        color: ${colors.primary};
                    }

                    h1{
                      /*Text*/

                      font-size: 4rem;
                      font-weight: 600;
                      background-color: ${colors.primary};
                      font-family: "Archivo Black", sans-serif;
                      background-image: linear-gradient(45deg, #f0810f, #ffe45c);
                      background-repeat: repeat;
                      -webkit-background-clip: text;
                      -webkit-text-fill-color: transparent; 
                      background-size: 100%
                      text-align: center;
                      margin: 0;
                      padding: 0;
                    }
                `}
      </style>
    </BasicLayout>
  );
}
