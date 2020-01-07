import { useEffect } from 'react';
import { withRouter } from 'react-router-dom'

const ScrollToTop = (props) => {

//  przy zmianie route dajemy okno na sama góre, np przy click Link w navbar ładowala sie nowa strona a uzytkownik zostawał na samym dole okna
  useEffect(() => {
      window.scrollTo(0,0)
  }, [props])
  
    return(props.children)
}

export default withRouter(ScrollToTop)