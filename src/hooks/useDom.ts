import {useCallback,useState} from 'react'
export default <T>()=>{
  const [dom, setDom] = useState<T|null>(null);
  const domRef = useCallback(node => {
    if (node !== null) {
      setDom(node);
    }
  }, []);
  let res:[T|null,(node:any)=>void] = [dom,domRef]
  return res; 
}