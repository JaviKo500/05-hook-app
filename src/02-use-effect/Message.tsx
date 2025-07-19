import { useEffect, useState } from 'react';
export const Message = () => {
  const [ mousePosition, setMousePosition ] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    const onMouseMount = ({ x, y }: MouseEvent) => {
      console.log('<--------------- JK Message --------------->');
      console.log(`(${x}, ${y})`);
      setMousePosition({
        x,
        y,
      });
    }
    window.addEventListener('mousemove', onMouseMount);
    return () => {
      window.removeEventListener('mousemove', onMouseMount);
    }
  }, [])
  
  return (
    <>
      <h3 className="mt-2">Message</h3>
      <hr />
      <p>User exists</p>
      {
        JSON.stringify(mousePosition)
      }
    </>
  )
}