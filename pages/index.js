function login() {
  return (
    <>
    
    <main>


      <section> 

        <h1> Login </h1>
        <p> Coloque as informações para logar como adm</p>
        <form>
          <input type="email" placeholder="Email" onChange={e=>{}}/>
          <input type="password"  placeholder="Password" onChange={e=>{}}/>
          <button type='submit' onClick={e=>{}}> Logar </button>
        </form>


      </section>


    </main>
    
    <style jsx>

      
        {`
        
        main{
          box-sizing: border-box;
          width: 100vw;
          height: 100vh;
          background-color:#282a36;
          padding:1rem;
        }
          section{
            background-color:#44475a;
            color:#f8f8f2;
            font-family: sans-serif;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-around;
            padding:1rem;
            width: 70%;
            margin: 0 auto;
            


          }

          h1{
            font-size: 2rem;
            color:#8be9fd;
          }

          form{
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: space-around;
              width:90%;
          }
          input{
            background-color:#6272a4;
            color:#f8f8f2;
            border-width: 1px;
            border-style: solid;
            border-color: #000;
            font-size: 1.1rem;
            padding:1rem;
            width: 100%;
            margin-bottom: 1rem;
          }
          
          ::placeholder{
            color:#f8f8f2;
          }

          button{
            background-color:#6272a4;
            color:#f8f8f2;
            border-width: 1px;
            border-style: solid;
            border-color: #000;
            font-size: 1.5rem;
            padding:1rem;
            box-shadow: 1.5px 4px 0px 0px black; 
          }
          button:active{
            box-shadow: 1.5px -5px 0px 0px black;
            background-color:#282a36;

          }
        `}

    </style>
    </>
  )
}
export default login;
