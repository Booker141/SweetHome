import { useSession, signIn } from 'next-auth/react'
import global from 'styles/global.module.css'
import {colors, fonts} from 'styles/frontend-conf'
import Layout from 'components/Layout/Layout'
import Loader from 'components/Loader/Loader'
import Pet from 'components/Pet/Pet'
import { server } from '/server'
import {useState} from 'react'
import Head from 'next/head'

/**
 * It's a function that returns a layout component with a title and a list of users
 * @returns the Layout component with the title "Usuarios" and the User component.
 */
export default function AllPets ({ pets }) {

  const { data: session, status } = useSession({ required: true })

  const [isSortedByBreed, setIsSortedByBreed] = useState(false);
  const [isSortedByAnimal, setIsSortedByAnimal] = useState(false);
  const [isSortedByName, setIsSortedByName] = useState(false);
  const [isSortedByWeight, setIsSortedByWeight] = useState(false);
  const [petsList, setPetsList] = useState(pets)



  const sortByFilters = (e) => {


    if(e === "breed"){

      setIsSortedByBreed(!isSortedByBreed)
      const sortedPets = pets.sort((a, b) => (a.breed > b.breed) ? 1 : ((b.breed > a.breed) ? -1 : 0))
      setPetsList(sortedPets)


    }

    if(e === "animal"){

      setIsSortedByAnimal(!isSortedByAnimal)
      const sortedPets = pets.sort((a, b) => (a.animal > b.animal) ? 1 : ((b.animal > a.animal) ? -1 : 0))
      setPetsList(sortedPets)

    }

    if(e === "name"){

      setIsSortedByName(!isSortedByName)
      const sortedPets = pets.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
      setPetsList(sortedPets)


    }
    if(e === "weight"){

      setIsSortedByWeight(!isSortedByWeight)
      const sortedPets = pets.sort((a, b) => (a.weight > b.weight) ? 1 : ((b.weight > a.weight) ? -1 : 0))
      setPetsList(sortedPets)


    }
  }


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
        <Head><title>Todas las mascotas | Sweet Home</title></Head>
        <h1 className="title">Mascotas de otros usuarios</h1>
        <div className='column1__buttons'>
          <button className={global.buttonPrimary} onClick={() => Router.push('/profile/myprofile/pets/createPet')} aria-label='Crear nueva mascota'>Crear mascota</button>
          <div className='filter__list'>
          <select name="filters" onChange={(e) => sortByFilters(e.target.value)}>
                      <option default value="default">Selecciona un filtro</option>
                      <option value="name">Ordenar por nombre</option>
                      <option value="breed">Ordenar por raza</option>
                      <option value="animal">Ordenar por animal</option>
                      <option value="weight">Ordenar por peso</option>
                  </select>
                </div>
        </div>
        <div className='pets'>
          {petsList.length === 0 && <div><p className={global.loading2}>No hay ninguna mascota registrada en la aplicación.</p></div>}
          
          {petsList.map(({ _id, animal, breed, name, weight, birthdate, image, ownerUsername }) => {
            return (
                <>
                    <Pet key={_id} id={_id} animal={animal} breed={breed} name={name} weight={weight} birthdate={birthdate} image={image} ownerUsername={ownerUsername} />
                </>
            )
        })}
        </div>
        
      <style jsx>{`

          .pets{

          /*Box model*/

          display: flex;
          flex-direction: row;
          gap: 2rem;
          flex-wrap: wrap;

          }

          .column1__buttons{

            /*Box model*/

            display: flex;
            flex-direction: row;
            align-items: center;
            margin-bottom: 2rem;


            }

            .column1__buttons button{

            /*Box model*/

            margin-right: 1rem;

            }

          .filter__list{

            /*Box model*/

            display: flex;
            flex-direction: row;
            align-items: center;
            align-self: flex-end;

            }

            select{

                /*Box model*/

                width: 10vw;
                height: 2rem;
                align-self: flex-end;

                /*Text*/

                font-family: ${fonts.default};
                color: ${colors.secondary};
                font-size: 0.8rem;

                /*Visuals*/

                border-radius: 20px;
                border: none;
                background-color: ${colors.primary};
                box-shadow: 0px 5px 10px 0px rgba(168,97,20,1);

                }

                select:focus{

                /*Visuals*/

                border: 2px solid #4d97f7;
                outline: none;
                box-shadow: 10px 10px 20px 0px rgba(176,176,176,0.66);

                }

                select::part(listbox){

                /*Visuals*/

                border-radius: 20px;
                }


          .title{

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
  }
  else {
  return (
    <Layout>
      <>
        <div className={global.content}>
          <div className='message'>
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

                
            `}
        </style>
      </>
    </Layout>
  )
}
}

export async function getServerSideProps () {

  const res = await fetch(`${server}/api/pets`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const pets = await res.json()

  return {
    props: { pets: JSON.parse(JSON.stringify(pets)) }
  }
}
