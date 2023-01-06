import React, { useState, useContext } from 'react'
import sublinks from './data'

const Appcontext = React.createContext();

export const useGlobalContext = () => {
    return useContext(Appcontext);
  };

function AppProvider({ children }) {

    console.log('appprovider rendered');
    const [isSidebarOpen, setSidebar] = useState(false);
    const [isSubmenuOpen, setSubmenu] = useState(false);
    const [Location ,setLocatioin] = useState('');
    const [Page ,setPage] = useState({page:'',links:[]});

    const openSidebar = () => { setSidebar(true) }
    const closeSidebar = () => { setSidebar(false) }

    const openSubmenu = (e) => {
        const button = e.target;
        const left = button.getBoundingClientRect().left;
        const right = button.getBoundingClientRect().right;
        const location = (left+right)/2;
        let page = sublinks.find((item)=>{return item.page === button.textContent});

        setLocatioin(location);
        setPage(page);
        setSubmenu(true) }

    const closeSubmenu = () => { setSubmenu(false) }

    return (
        <Appcontext.Provider
            value={{
                isSidebarOpen,
                isSubmenuOpen,
                openSidebar,
                closeSidebar,
                openSubmenu,
                closeSubmenu,
                Location,
                Page
            }}>
            {children}
        </Appcontext.Provider>
    );
}

export default AppProvider;