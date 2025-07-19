import { useEffect, useState } from 'react';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'Javiko@500',
    email: 'jjavikog@gmail.com',
  });
  const { username, email } = formState;
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  }

  useEffect(() => {
    console.log('<--------------- JK SimpleForm --------------->');
    console.log('initial formState');
  }, []);
  useEffect(() => {
    console.log('<--------------- JK SimpleForm --------------->');
    console.log('update formState');
  }, [formState]);
  useEffect(() => {
    console.log('<--------------- JK SimpleForm --------------->');
    console.log('update email');
  }, [email]);
  
  return (    
    <>
      <h1>Simple Form</h1>
      <hr />
      <input 
        type="text" 
        className="form-control" 
        name="username" 
        id=""  
        placeholder="Username" 
        value={username} onChange={onChangeInput}/>
      <input 
        type="email" 
        className="form-control mt-2" 
        name="email" 
        id=""  
        placeholder="example@example.com" 
        value={email}
        onChange={onChangeInput}/>
    </>
  )
}