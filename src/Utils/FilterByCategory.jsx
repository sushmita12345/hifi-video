export const FilterByCategory = (data, category) => {
    if(category === "ALL"){
        return [...data]
    }else{
        return [...data].filter((video) => video.categoryName === category)
    }
}