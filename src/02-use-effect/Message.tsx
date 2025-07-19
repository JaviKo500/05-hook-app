import { useEffect } from 'react';
export const Message = () => {
  useEffect(() => {
    console.log('<--------------- JK Message --------------->');
    console.log('Message component rendered');
  
    return () => {
      console.log('<--------------- JK Message --------------->');
      console.log('Message component unmounted');
    }
  }, [])
  
  return (
    <>
      <h3 className="mt-2">Message</h3>
      <hr />
      <p>User exists</p>
    </>
  )
}