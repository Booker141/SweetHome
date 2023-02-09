import global from "styles/global.module.css"

export default function New(props){


    return (
        <>

            <div key={props._id} className={global.new}>
                <article>
                    <h2 className={global.secondary}>{props.title}</h2>
                    <h3 className={global.tertiary__bold}>{props.date}</h3>
                    <h3 className={global.tertiary__bold}>{props.author}</h3>
                            <p className={global.text}>{props.introduction}</p>
                            <p className={global.text}>{props.body}</p>
                            <p className={global.text}>{props.conclusion}</p>
                </article>
            </div>
            <style jsx>{`

                

                .text{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                }

                p{
                    white-space: pre-wrap;
                }

            
            `}</style>

        </>

    )
}