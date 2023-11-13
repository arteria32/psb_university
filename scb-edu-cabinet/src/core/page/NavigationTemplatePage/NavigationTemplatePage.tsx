import { Tabbar, TabbarItem } from "@vkontakte/vkui"
import React, { FC, useEffect, useState } from "react"
import { useMatches, useNavigate } from "react-router-dom"
import "./NavigationTemplatePage.scss"
import { NAVIGATION_BAR_CONFIG } from "./navigation-config"
import { RootState } from "../../store/store"
import { useSelector } from "react-redux"
import { useLazyGetUserInfoByIdQuery } from "../../store/api/auth-api"
const NavigationTemplatePage: FC<{ children: React.ReactNode }> = ({ children }) => {
    /* 0. Проверка на авторизацию  */
    /*     {"email":"Test@tets.ru","password":"Arteria32!","name":"RRRTest"}
     */
    const { isAuthorizarated: isAuth, id: userId } = useSelector((state: RootState) => state.authSlice);
    const navigate = useNavigate()
    useEffect(() => {
        console.log("auth", isAuth)
        if (!isAuth) navigate("/auth")
    }, [isAuth])
    useEffect(() => {
        console.log("userID", userId)
        if (userId) triggerUserInfo(userId)
    }, [userId])
    /* 1. Доступная навигация */
    const [triggerUserInfo, resultUserInfo] = useLazyGetUserInfoByIdQuery();
    useEffect(() => {
        console.log("resultUserInforesultUserInfo;t", resultUserInfo)
    }, [resultUserInfo])
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