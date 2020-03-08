Run this to copy all matches to clipboard

copy( [ ...document.querySelectorAll('tr:nth-child(2) > td:nth-child(3)') ].map( i => i.innerText).join("\n") )
