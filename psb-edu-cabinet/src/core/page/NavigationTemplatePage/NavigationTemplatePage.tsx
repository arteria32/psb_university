import { Tabbar, TabbarItem } from "@vkontakte/vkui";
import React, { FC, useEffect, useState } from "react";
import { useMatches, useNavigate } from "react-router-dom";
import "./NavigationTemplatePage.scss";
import { NAVIGATION_BAR_CONFIG } from "./navigation-config";
import { Icon24UserCircleOutline } from "@vkontakte/icons";
import { Icon24CalendarOutline } from "@vkontakte/icons";
import { Icon24EducationOutline } from "@vkontakte/icons";

const NavigationTemplatePage: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  /* 1. Доступная навигация */

  /*  */
  /* 2. Отслиживаем навигацию */
  const [curMatches] = useMatches();
  const [curRootPath, setCurPath] = useState<string>("");

  useEffect(() => {
    console.log("curMatches", curMatches);
    setCurPath(curMatches.pathname || "");
  }, [curMatches]);

  useEffect(() => {
    console.log("curRootPath", curRootPath);
  }, [curRootPath]);

  /* 3.переход на страницу */
  const navigate = useNavigate();
  function goToPage(path: string) {
    navigate(path);
  }
  function genTabbarItemIcon(id: number) {
    switch (id) {
      case 0:
        return <Icon24UserCircleOutline />;
      case 1:
        return <Icon24CalendarOutline />;
      case 2:
        return <Icon24EducationOutline />;
    }
  }

  return (
    <div className="basis-page-container">
      <Tabbar
        mode="horizontal"
        style={{ position: "static", margin: "10px 0" }}
      >
        {NAVIGATION_BAR_CONFIG.map((item) => (
          <TabbarItem
            key={item.id}
            selected={curRootPath.includes(item.url)}
            onClick={() => goToPage(item.url)}
            text={item.name}
          >
            {genTabbarItemIcon(item.id)}
          </TabbarItem>
        ))}
      </Tabbar>
      {children}
    </div>
  );
};

export default NavigationTemplatePage;
