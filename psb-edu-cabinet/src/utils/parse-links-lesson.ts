export const parseLinkToButtonName=(link:string):string=>{
    if (link.includes("docs")){
        return "Методические материалы"
    }else if (link.includes('disk')){
    return "Ссылка на диск"
    }else if (link.includes("git")){
        return "Репозиторий"
    } else if (link.includes("zoom")){
        return "Zооm"
    }else {
        return "Доп. материалы"
    }
}