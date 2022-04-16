import Image from 'next/image'
import nookies from 'nookies'


export async function getServerSideProps(ctx) {
    const cookies = nookies.get(ctx)
    console.log('cookies',cookies)

    const SENHA_MESTRA  = 'AbC12E'
    const USER_MESTRE  = 'adimCachorroCaramelho'

    const senhaDigitida =  cookies.SENHA 
    const  userDigitado = cookies.User

    const ValidaçaoSenha  = senhaDigitida === SENHA_MESTRA 
    const validaçaoUser = userDigitado === USER_MESTRE

    if(validaçaoUser && ValidaçaoSenha){
        return {
            props: {}, // will be passed to the page component as props
          }

    }

    else{

        return {
            redirect: {
              pemanent: false,
              destination: "/?status=401",
            },
          };
    }






    
  }

export default function adim () {
    return (

        
        <>
        
        <main>



        <h1>   VOCÊ  ESTAR NA PAGINA DE ADIMINISTRAÇÂO PARABENS  </h1>
        <Image src="/adim.jpeg" width="300px" height="300px" alt="foto do adm" />



        </main>
          
        <style jsx>{`
            
            

            main{
                box-sizing: border-box;
                padding: 2rem;
                width: 100vw;
                height: 100vh;
                background-color:#282a36;
                color:#ff5555;
            }
            


            `} </style>
        </>

    )
}