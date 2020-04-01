// Run this to copy all matches of group 1 to clipboard

copy( [ ...document.querySelectorAll('tr:nth-child(2) > td:nth-child(3)') ].map( i => i.innerText).join("\n") )
