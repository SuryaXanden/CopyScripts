// To copy the selected JSON tree / path, use the following code

copy( document.querySelector("#root > div > div.body > div.contents-panel > div.right-panel > div > div.panel-contents > div > div > div.jsoneditor-navigation-bar > div").innerText.replace(/►/g,'.').replace('object.', '') )
