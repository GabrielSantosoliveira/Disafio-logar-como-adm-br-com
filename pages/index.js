
import nookies from 'nookies'

import {useState} from "react"

import { useRouter } from "next/router"

function login() {

  const biscoito = nookies

  const [user,setUser] = useState('')
  const [senha,setSenha] = useState('')

  const rota = useRouter()
  

  const logar = e =>{
    e.preventDefault()
      biscoito.set(null,"User", user , {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      }) 


      biscoito.set(null,"SENHA", senha , {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      }) 


      console.log('user' ,user)
      rota.push('adim')
  } 
  
  return (
    <>
      <main>
        <section>
          <h1> Login </h1>
          <p> Coloque as informações para logar como adm</p>
          <form>
            <input type="text" placeholder="Usuario" onChange={(e) => {setUser(e.target.value)}} />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => {setSenha(e.target.value)}}
            />
            <button type="submit" onClick={(e) => {logar(e)}}>
              {" "}
              Logar{" "}
            </button>
          </form>
        </section>
      </main>

      <style jsx>
        {`
          main {
            box-sizing: border-box;
            width: 100vw;
            height: 100vh;
            background-color: #282a36;
            padding: 1rem;
          }
          section {
            background-color: #44475a;
            color: #f8f8f2;
            font-family: sans-serif;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-around;
            padding: 1rem;
            width: 70%;
            margin: 0 auto;
          }

          h1 {
            font-size: 2rem;
            color: #8be9fd;
          }

          form {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-around;
            width: 90%;
          }
          input {
            background-color: #6272a4;
            color: #f8f8f2;
            border-width: 1px;
            border-style: solid;
            border-color: #000;
            font-size: 1.1rem;
            padding: 1rem;
            width: 100%;
            margin-bottom: 1rem;
          }

          ::placeholder {
            color: #f8f8f2;
          }

          button {
            background-color: #6272a4;
            color: #f8f8f2;
            border-width: 1px;
            border-style: solid;
            border-color: #000;
            font-size: 1.5rem;
            padding: 1rem;
            box-shadow: 1.5px 4px 0px 0px black;
          }
          button:active {
            box-shadow: 1.5px -5px 0px 0px black;
            background-color: #282a36;
          }

          @media (min-width: 900px) {
            section {
              width: 668px;
            }
          }

          @media (max-width: 500px) {

            input {
              padding:0.2rem;
              font-size: 1.1rem;
            }
            
            h1 {
              font-size:1.6rem;
            }
            button{

              font-size: 1.4rem;
              padding: 0.7rem;

            }
            section{
              width: 90%



            }
          
          }
        `}
      </style>
    </>
  );
}
export default login;
