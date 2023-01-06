import React from 'react'
import { FaTimes } from 'react-icons/fa'
import {  useGlobalContext } from './context';
import sublinks from './data';

const Sidebar = () => {


  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <div className={` ${isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'}`}>
      <aside className='sidebar'>
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className='sidebar-links'>

          {sublinks.map((item, index) => {

            return (
              <article key={index}>

                <h4>{item.page}</h4>
                <div className='sidebar-sublinks'>

                  {item.links.map((links, index) => {
                    const { label, icon, url } = links

                    return <a key={index} href={url}>{icon} {label}</a>
                    
                  })}

                </div>
              </article>)

          })}
        </div>

      </aside>
    </div>
  )
}

export default Sidebar
