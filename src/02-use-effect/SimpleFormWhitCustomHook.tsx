import { useForm } from '../hooks/useForm';

interface MyForm {
  username: string;
  email: string;
  password: string;
}

export const SimpleFormWhitCustomHook = () => {
  const { username, email, password, onChangeInput } = useForm<MyForm>({
    username: 'Javiko@500',
    email: 'jjavikog@gmail.com',
    password: '12345678',
  });

  // const { username, email, password } = formState;

  return (    
    <>
      <h1>Simple Form with Custom Hook</h1>
      <hr />
      <input 
        type="text" 
        className="form-control" 
        name="username" 
        id="username"
        placeholder="Username" 
        value={username} onChange={onChangeInput}/>
      <input 
        type="email" 
        className="form-control mt-2" 
        name="email" 
        id="email"
        placeholder="example@example.com" 
        value={email}
        onChange={onChangeInput}/>
      <input 
        type="password"
        className="form-control mt-2" 
        name="password"
        id="password"
        placeholder="Password"
        value={password}
        onChange={onChangeInput}/>
    </>
  )
}