import { Tabbar, TabbarItem } from "@vkontakte/vkui"
import React, { FC, useEffect, useState } from "react"
import { useMatches, useNavigate } from "react-router-dom"
import "./NavigationTemplatePage.scss"
import { NAVIGATION_BAR_CONFIG } from "./navigation-config"
import { RootState } from "../../store/store"
import { useSelector } from "react-redux"
const NavigationTemplatePage: FC<{ children: React.ReactNode }> = ({ children }) => {
    /* 0. Проверка на авторизацию  */
    /*     {"email":"Test@tets.ru","password":"Arteria32!","name":"RRRTest"}
     */
    const isAuth = useSelector((state: RootState) => state.authSlice.isAuthorizarated);
    const navigate = useNavigate()
    useEffect(() => {
        console.log("auth", isAuth)
        if (!isAuth) navigate("/auth")
    }, [isAuth])

    /* 1. Доступная навигация */

    /*  */
    /* 2. Отслиживаем навигацию */
    const [curMatches] = useMatches();
    const [curRootPath, setCurPath] = useState<string>("")
    useEffect(() => {
        console.log('curMatches', curMatches)
        setCurPath(curMatches.pathname || "")
    }, [curMatches])
    useEffect(() => {
        console.log("curRootPath", curRootPath)
    }, [curRootPath])
    /*  */
    /* 3.переход на страницу */
    function goToPage(path: string) {
        navigate(path)
    }
    /*  */
    return (<div className="basis-page-container">
        <Tabbar className="tabbar" >
            {NAVIGATION_BAR_CONFIG.map((item) => (
                <TabbarItem key={item.id} selected={curRootPath.includes(item.url)} onClick={() => goToPage(item.url)} text={item.name} />
            ))}
        </Tabbar>
        {children}
    </div>)
}

export default NavigationTemplatePage