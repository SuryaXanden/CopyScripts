// To copy all available URLs in href, use the following code 

copy([...new Set(([...document.querySelectorAll('a')].map(i=>i.href)))].join("\n"))
