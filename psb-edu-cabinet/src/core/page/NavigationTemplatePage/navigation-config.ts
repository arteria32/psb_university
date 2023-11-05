export type NavigationTab = {
    id: number,
    url: string,
    name: string,
    img?: string
}
export const NAVIGATION_BAR_CONFIG: NavigationTab[] = [{
    id: 0,
    url: "/path1",
    name: "Navigation1"
}]