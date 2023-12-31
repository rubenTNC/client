export const getUrlId = () =>  {
    const url = new URL(document.documentURI)
    return url.pathname
}