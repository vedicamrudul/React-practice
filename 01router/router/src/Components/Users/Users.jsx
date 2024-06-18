import { useParams } from "react-router-dom";

export default function Users(){
    const {userId}= useParams()

    return(
        <>
        <div className="text-center bg-orange-600 text-white text-[1.2rem] h-10">User: {userId}</div>
        </>
    )
}