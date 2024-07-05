import React, {useState, useEFfect, useEffect} from 'react'
import axios from 'axios'



function App() {

    const num=8;

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        setLoading(true)
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            setData(response.data)
            setLoading(false)
        })
        .catch((error)=>{
            setError(error)
            setLoading(false)
        })
    },[])

    console.log(data)
    
  return (
    <div className="w-min-[100vw]  p-5 pb-20  h-min-[100vh] bg-slate-400 flex items-center justify-around flex-col">
        <h1 className='font-bold  text-[2rem] m-4'>Posts</h1>
        {loading ? <h2 className='min-h-[100vh] min-w-[100vw] text-center'>Loading...</h2> : (
            <ul className='flex flex-wrap justify-center items-center '>
                {data.slice(0,num).map((post)=>(
                    <li className='border-solid min-h-[200px]  rounded-lg p-5 max-w-[400px] border-slate-200 border-[0.5px] m-4 flex flex-col' key={post.id}><div className='text-center text-slate-800 text-[1.1rem] pb-2 font-semibold'>{post.title}</div><div className='text-center text-slate-700'>{post.body}</div></li>
                ))}
            </ul>
        )}
        {error && <p>{error.message}</p>}
    </div>
  )
}

export default App