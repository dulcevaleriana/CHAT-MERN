import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

const Chats = () =>{
    const [getData, setGetData] = useState([{}])

    const fetchChat = async () => {
        const {data} = await axios.get('http://localhost:5000/api/chat');
        setGetData(data);
    }

    useEffect(()=>{
        fetchChat();
    },[])

    return <div>
        {getData.map(data=>(
            <div key={data._id}>chat with: {data.chatName}</div>
        ))}
    </div>
}

export default Chats;