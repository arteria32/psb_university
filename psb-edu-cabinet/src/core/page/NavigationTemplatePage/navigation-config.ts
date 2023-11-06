export type NavigationTab = {
  id: number;
  url: string;
  name: string;
  img?: string;
};
export const NAVIGATION_BAR_CONFIG: NavigationTab[] = [
  {
    id: 0,
    url: "/user",
    name: "Профиль",
  },
  {
    id: 1,
    url: "/schedule",
    name: "Расписание",
  },
  {
    id: 2,
    url: "/tasks",
    name: "Задания",
  },
];
