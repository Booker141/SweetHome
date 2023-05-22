import { useSession, signIn } from 'next-auth/react'
import Head from 'next/head'
import Layout from 'components/Layout/Layout'
import global from '/styles/global.module.css'
import Message from '/components/Message/Message'
import Sidebar from 'components/ChatSidebar/ChatSidebar'
import Loader from 'components/Loader/Loader'
import { useEffect, useState } from 'react'
import { server } from '/server'
import {colors} from '/styles/frontend-conf'


/**
 * It renders a page with a chat, where the user can send messages
 * @returns The chat page is being returned.
 */
export default function Chat () {

  const { data: session, status } = useSession({ required: true })
  const [messagesList, setMessagesList] = useState({});
  const [chatMessage, setChatMessage] = useState('')

  

  if (status == 'loading') {
    return (
      <>
        <div className={global.loading}><p>Cargando..</p></div>
        <Loader />
      </>
    )
  }
  if (session) {
    return (
      <Layout>
        <Head><title>Chat | Sweet Home</title></Head>
        <h1 className={global.title4}>Mis chats</h1>
        <div className={global.chat}>

            
        </div>
        <style jsx>{`
            
            h1{
                    /*Text*/

                    font-size: 3.5rem;
                      font-weight: 600;
                      background-color: ${colors.primary};
                      font-family: "Archivo Black", sans-serif;
                      background-image: linear-gradient(180deg, #f0810f, #ffe45c 170%);
                      background-repeat: repeat;
                      -webkit-background-clip: text;
                      -webkit-text-fill-color: transparent; 
                      background-size: 100%
                      text-align: center;
            }
          
          `}</style>
      </Layout>
    )
  } else {
    return (
      <Layout>
        <div className={global.content}>
          <div className='message'>
            <h1 className={global.title}>Para acceder a esta página debe ser administrador de Sweet Home</h1>
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
                        
                    `}
        </style>
      </Layout>
    )
  }
}

