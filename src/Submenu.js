import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  
  const {isSubmenuOpen,Location,Page} = useGlobalContext();

  const container = useRef();
  const [Colums ,setColumns]  = useState('col-2');

  const itemsLenth = Page.links.length;

  useEffect(()=>{
    const submenu = container.current;
    submenu.style.left = `${Location}px`;

    if(itemsLenth === 3){setColumns('col-3')}
    if(itemsLenth > 3){setColumns('col-4')}

  },[Location])
  return (
    <aside className={`${isSubmenuOpen?'submenu show':'submenu'}`} 
    ref = {container}>
      <section>
        <h4>{Page.page}</h4>
        <div className={`submenu-center ${Colums}`}>
          {Page.links.map((link,index)=>{
            const {url ,icon ,label} = link;
            return (
              <a href={url} key ={index}>{icon} {label}</a>
            )
          })}
          
        </div>
      </section>
    </aside>
  )
}

export default Submenu
