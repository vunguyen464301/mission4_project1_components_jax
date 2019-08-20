import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
const App=()=> {
  var a=5;
  var b=7;
    const showProducts=(product)=>{
      if(product.status){
        return(
          <div>
           id: {product.id}<br/>
           name:{product.name}<br/>
           price:{product.price}<br/>
           status:{product.status? 'Active':'Pending'}<br/> 
          </div>
        );  
      }
    }
    var listItem =[
      {
        id:1,
        name:'anh vu'
      },
      {
        id:2,
        name:'anh 2'
      },
      {
        id:3,
        name:'út'
      },
    ];
    var showListItem=listItem.map((user,index)=>{
      return(
        <div>
          id:{user.id}<br/>
          name:{user.name}<br/>
        </div>
      )
    })

    var product ={
      id:1,
      name:"Iphone XS MAX 512GB",
      price:2000,
      status:true
    }
  return (
    <div >
      <Header/>
      a ={a}
      <br/>
      b ={b}
      <br/>
      a + b = {a+b}
      <hr/>
      {showProducts(product)}
      <hr/>
      {showListItem}
    </div>
  );
}

export default App;
