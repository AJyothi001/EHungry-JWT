import React,{useState} from 'react'
import './Header.css'
import assets from '../constants/images';
import Productsone from './Products';
const Header = () => {
    const[searching,setSearch]=useState('');
    const[data,setData]=useState([]);
    const submitHandler = e =>{
        e.preventDefault();
        fetch(`https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=${searching}&app_id=857de008&app_key=b8590d76eea186bff7871d9f5846111b`).then(
            response=>response.json()).then(data=>setData(data.hits))
    }
  return (
    <form className="outer" onSubmit={submitHandler}>
    <div className='header'>
        Let's chase the flavour
    <img src={assets.spoon} alt=""></img></div>
    <img src={assets.main} alt="" className='image'></img>
    <div className='search'>
        <input type="text" placeholder='Search delicious food...' value={searching} onChange={(e)=>setSearch(e.target.value)}></input>
       <button type="submit" className="btn btn-primary">Submit</button>
    </div>
    <h1 className='head'>THE KEY TO FINE DINING</h1>
    <div className='about'>Welcome to eHungry, where every meal is a delightful journey! Indulge in our carefully curated menu, featuring the freshest ingredients and mouthwatering flavors that will leave you craving more.</div>
    {data.length>1?<Productsone data={data}/>:null}
    </form>
  )
}
export default Header
