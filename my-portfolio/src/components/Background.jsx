

import rain from '../rain.mp4'


function Background() {
    return (
       <>
      <video autoPlay muted loop id="myVideo">
  <source src={rain} type="video/mp4"/>
</video>

  
       </>
    )
  }

  export default Background;
