
import { useEffect } from 'react';
const Title = (title) =>{
    useEffect(()=>{
        document.title = `${title} / Xd-Cinema`;
      },[])
}
export default Title;
