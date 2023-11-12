export type NavigationTab = {
    id: number,
    url: string,
    name: string,
    img?: string
}
export const NAVIGATION_BAR_CONFIG: NavigationTab[] = [
    {
        id: 0,
        url: "/profile",
        name: "Профиль"
    }, {
        id: 1,
        url: "/applications",
        name: "Заявки на обучение"
    }, {
        id: 2,
        url: "/schedular",
        name: "Расписание"
    }, {
        id: 3,
        url: "/tasks",
        name: "Домашния задания"
    }, {
        id: 3,
        url: "/tasks",
        name: "Успеваемость"
    }]