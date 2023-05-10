import global from 'styles/global.module.css'
import { fonts, colors } from 'styles/frontend-conf.js'
import { MdDeleteOutline, MdOutlineEdit, MdClose } from 'react-icons/md'
import { useState, useEffect } from 'react'
import { server } from 'server'
import { useSession } from 'next-auth/react'
import {toast} from 'react-toastify'
import Modal from 'components/Modal/Modal'
import Router from 'next/router'


/**
 * This function takes in a question object and returns a div with the question's title and description
 * @param props - This is the object that contains all the data that was passed to the component.
 * @returns A function that returns a JSX element.
 */
export default function Question (props) {

  const { data: session } = useSession();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAdmin, setIsAdmin] = useState(props.isAdmin);

  console.log(props)


  /**
   * It deletes the question from the database and then shows a toast message to the user
   */
  const deleteQuestion = async () => {

    await fetch(`${server}/api/questions/${props.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    setIsModalVisible(false)
    toast.error('Se ha eliminado la pregunta', { position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored", })
      setTimeout(() => {
        Router.push(`${server}/faq`)
      }, 5000)
      
  }

  return (

    <>

      <div key={props._id} className={global.question}>

          <div className="question__header">
            <h2 className={global.secondary2}>{props.title}</h2>
            {props.isAdmin && <div className="header__buttons"><button className='edit__button' onClick={() => Router.push(`/dashboard/editQuestion/${props.id}`)}><MdOutlineEdit size={20} color={colors.secondary} /></button><button className='delete__button' onClick={() => setIsModalVisible(true)}><MdDeleteOutline size={20} color={colors.secondary} /></button></div>}
          </div>
          <hr className={global.white__line}></hr>
        <p className={global.text2}>{props.answer}</p>
      </div>
      {isModalVisible && <Modal>
        <button className="close__modal" onClick={() => setIsModalVisible(false)}><MdClose size={30} color={`${colors.secondary}`}/></button>
        <h2 className={global.title3}>Eliminar pregunta</h2>
        <p className={global.text2}>¿Estás seguro de eliminar esta pregunta?</p>
        <div className='buttons'>
          <button className={global.buttonSecondary} onClick={() => deleteQuestion()}>Sí</button>
          <button className={global.buttonTertiary} onClick={() => setIsModalVisible(false)}>No</button>
        </div>
      </Modal>}

      <style jsx>{`


        .question__header{

          /*Box model*/

          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;

        }
        
        .delete__button{

          /*Box model*/

          display: flex;
          align-items: flex-end;
          margin-bottom: 0.5rem;

          /*Visuals*/

          border: none;
          background: transparent;
          cursor: pointer;

        }

        .close__modal{

        /*Box model*/

        display: flex;
        flex-direction: row;
        align-self: flex-end;
        margin-right: 2rem;

        /*Visuals*/

        border: none;
        background: transparent;
        cursor: pointer;

        }

        .edit__button{

          /*Box model*/

          display: flex;
          align-items: center;
          margin-bottom: 0.5rem;

          /*Visuals*/

          border: none;
          background: transparent;
          cursor: pointer;

        }

        .header__buttons{


          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;
          margin-left: 1rem;
          gap: 1rem;
          
          margin-top: 0.5rem;
          
        
        }

        .buttons{

          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 2rem;
        }

        button{

          /*Box model*/

          padding: 1rem;

          /*Visuals*/

          border-radius: 70px;
          box-shadow: 0px 5px 10px 0px rgba(168,97,20,1);
        }

        hr{

          /*Box model*/

          width: 100%;
          height: 0.1rem;
          margin-bottom: 3rem;
        }

            `}
      </style>
    </>

  )
}
