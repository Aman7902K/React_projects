import React, { useEffect, useState } from 'react'

export default function Load_more(){

  const [data,setData] = useState([])
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState("")
  const [count,setCount] = useState(0)
  const [loadDisable,setLoadDisable] = useState(false)

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count *20}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((data) => {
        setData((prev) => (count === 0 ? data.products : [...prev, ...data.products]));
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setLoading(false);
      });
      if(count === 4){
        setLoadDisable(true)
      }
  }, [count]);
  
  // console.log(data);


  if (loading) {
    return <div>Loading Data please wait</div>
  }


  return (
    <div className=''>
          <div className='grid grid-cols-4 gap-8' >
        { data && data.length ?
          data.map((products) => {
            return (
            <div key={products.id} className=''>
              <img src={products.thumbnail}  alt="" />
              <p className='text-center'>{products.title}</p>
            </div>
            )
          }) : null
        }
    </div>
    <div className='text-center mb-8'><button onClick={()=>setCount(count+1)} disabled = {loadDisable} >Load more</button></div>
    </div>
  )
}      