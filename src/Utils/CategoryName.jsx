export const ByCategoryName = (data, category) => {
    const categoryName = data?.map((video) => video[category])
    return [...new Set(categoryName)]
}