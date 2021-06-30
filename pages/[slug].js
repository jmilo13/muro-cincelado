import React, {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import NotFound from './404'

export default function Post () {
    const [data, setData] = useState('')
    const router = useRouter()
    useEffect(async () =>{
        const slug = router.query.slug
        const response = await fetch('https://www.murocincelado.com/api/blog/'+slug)
        setData(response.data)
    })

    if(data){
    return (
        <React.Fragment>
            {/* <h1>{data.title}</h1> */}
            <h1>{}</h1>
            <p>Funciona</p>
        </React.Fragment>
    )
    }else{
        return <NotFound/>
    }
}