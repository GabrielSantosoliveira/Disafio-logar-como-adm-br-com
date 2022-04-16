

function MyApp({ Component, pageProps }) {
  return (
  
<>

<Component {...pageProps} />

<style global jsx>
  {`
  
  body{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
    
  
  
  `}
</style>

</>

  
  )
}

export default MyApp
