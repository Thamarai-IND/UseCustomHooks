import React from 'react'
import UseFetchCustomHook from './CustomHook'

const Component = () => {

    const {data, loading} = UseFetchCustomHook('https://dummyjson.com/products',{});

    console.log(data,loading);
    if(loading) return <h1>Loading data ! Please wait</h1>
  return (
    <div>
        <h1>Calling Custom Fetch Hooks</h1>
        <ul>
            {
                data && data.products && data.products.length > 0 ?
                data.products.map(item => (<li key={item.id}>{item.title}</li>)) : <h>No data found</h>


            }
        </ul>
    </div>
  )
}

export default Component