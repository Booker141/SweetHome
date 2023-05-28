/* Static imports */

import { colors } from 'styles/frontend-conf'
import { useState, useEffect } from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'
import { MdHealthAndSafety } from 'react-icons/md'
import {useSession} from 'next-auth/react'
import global from 'styles/global.module.css'
import dynamic from 'next/dynamic'

/*Dynamic imports*/

const FollowButton = dynamic(() => import('/components/FollowButton/FollowButton'))
const FallbackImage = dynamic(() => import('/components/FallbackImage/FallbackImage'))
const LazyLoad = dynamic(() => import('react-lazyload'))


export default function UserCard (props) {

  const {data: session} = useSession()
  
  const [isShelter, setIsShelter] = useState(false)
  const [isVet, setIsVet] = useState(false)

  
  useEffect(() => {
    if(props?.role.name === "veterinaria")
      setIsVet(true)
    else if(props?.role.name === "protectora")
      setIsShelter(true)
  }, [])

  return (
    <>

      <div key={props._id} className={global.user}>
        <div className='user__image'>
          <FallbackImage src={props?.banner} style={{ borderRadius: '20px' }} alt='Imagen banner' width={900} height={400} />
          <div className="profile__image">
            <FallbackImage src={props?.image} style={{ borderRadius: '50px' }} alt='Imagen de usuario' width={80} height={80} />
          </div>
        </div>
        <div className='user__username'>
          <a className={global.link} href={`/profile/${props?.username}`} aria-label={`Ir a perfil de ${props?.username}`}><strong>@{props?.username}</strong> {isShelter && <BsPatchCheckFill size={18} color={colors.primary}/>}{isVet && <MdHealthAndSafety size={18} color={colors.primary}/>}</a>
        </div>
        <div className="follow__button">
          <LazyLoad><FollowButton idFrom={session?.user.id} usernameFrom={session?.user.username} idTo={props?.id} usernameTo={props?.username}/></LazyLoad>
        </div>
        
      </div>
      <style jsx>{`

                
                .user__image{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-left: 0.2rem;

                    /*Visuals*/

                    border-radius: 70px;
                    border-image: linear-gradient(45 deg, #f0810f, #f9A603) 30;
                }

                .follow__button{

                  /*Box model*/

                  margin-top: 1rem;
                  display: flex;
                  align-items: flex-end;
                }

                .profile__image{

                    /*Position*/

                    position: relative;
                    bottom: 2rem;

                    /*Box model*/

                    display: flex;
                    z-index: 1000;


                    /*Visuals*/

                    border-radius: 70px;

              
                }

                .user__username{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    flex-wrap: wrap;
                    text-align: center;
                    gap: 0.5rem;
                    padding: 0rem;

                }

                .text{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                }

                .buttonTertiary{

                    /*Box model*/

                    display: flex;
                    float: right;
                }

                .user__image a {

                  /*Visuals*/

                  text-decoration: none;
                  width: 50px;
                  height: 50px;

                }

                a{

                    /*Visuals*/

                    text-decoration: none;
                    gap: 0.5rem;
                }

                button{

                    /*Box model*/

                    margin-right: 1rem;
                    margin-top: 1rem;
                    margin-bottom: 1rem;
                }
            
            `}
      </style>

    </>

  )
}
