export const DescriptionSplice = (str) => {
    return str.split(' ').splice(0, 25).join(' ')+"..."
}