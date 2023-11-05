import { Tabbar, TabbarItem } from "@vkontakte/vkui"
import React, { FC, useEffect, useState } from "react"
import { useMatches, useNavigate } from "react-router-dom"
import "./NavigationTemplatePage.scss"
import { NAVIGATION_BAR_CONFIG } from "./navigation-config"
const NavigationTemplatePage: FC<{ children: React.ReactNode }> = ({ children }) => {
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
    const navigate = useNavigate()
    function goToPage(path: string) {
        navigate(path)
    }
    /*  */
    return (<div className="basis-page-container">
        <Tabbar style={{ position: 'static', margin: '0 0 10px' }}>
            {NAVIGATION_BAR_CONFIG.map((item) => (
                <TabbarItem key={item.id} selected={curRootPath.includes(item.url)} onClick={() => goToPage(item.url)} text={item.name} />
            ))}
        </Tabbar>
        {children}
    </div>)
}

export default NavigationTemplatePage