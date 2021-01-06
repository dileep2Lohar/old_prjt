import React, {useState} from 'react';

const Customhookfnt = () => {
    const [Count, setCount] = useState(0);
    const Increment = () => {
        setCount(Count + 1);
    };
    return{
        Count,
        Increment
    };
};

const CustomExple = () => {
    const data = Customhookfnt();
    const data1 = Customhookfnt();
    return(
        <>
            <h2> Count : {data.Count}</h2>
            <button onClick={data.Increment}> Increment </button>

            <h2> Count : {data1.Count}</h2>
            <button onClick={data1.Increment}> Increment </button>
        </>
    );
};
export default CustomExple;