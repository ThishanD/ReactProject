import React, {useEffect,useState} from 'react'

interface componentData {
    name:string,
    age:number
}


const Home: React.FC = ( ) => {

    const [number,Setnumber] = useState<number>(0);
    const [test,Settest] = useState<number>(0);

    useEffect(()=>console.log('use effect called!!'),[test]);
    const handleIncrement = () =>{
    Settest(test+1);
    }
    const handleClick = () =>{
        Setnumber(number+1);
    }

    return( <div>
        <p>hello</p>
        <h2>{number}</h2>
        <h2>{test}</h2>
            <button className='btn btn-primary' onClick={handleClick}>Click</button>
            <button onClick={handleIncrement}>Increment</button>
</div>);
  };
  
  export default Home;