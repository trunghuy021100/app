import React,{useContext, useEffect, useState} from 'react'

const AppContext=React.createContext();
const AppProvider=({children})=>
    {
        const url="https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01";
        const url1="https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01";
        const [listphim,setListphim]=useState([]);
        const [listrap,setListrap]=useState([]);
        useEffect(async()=>
            {
                const responsive = await fetch(url)
                const data=await responsive.json();
                setListphim(data);
                

            },[])
        useEffect(async()=>
            {
                const responsive = await fetch(url1)
                const data=await responsive.json();
                setListrap(data);
                

            },[])
        return <AppContext.Provider value={{
            listphim,setListphim,
            listrap,setListrap,
        }}>
            {children}
        </AppContext.Provider>
    }
export const useGlobalContext = () => {
        return useContext(AppContext)
      }
      
     export { AppContext, AppProvider }