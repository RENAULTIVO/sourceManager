(()=>{

    let fileSettings = {
        js: {
            tag: 'script',
            insertInto: 'body',
            srcAttribute: 'src',
            attributes: null
        },
        css: {
            tag: 'link',
            insertInto: 'head',
            srcAttribute: 'href',
            attributes: {
                rel: 'stylesheet',
                type: 'text/css'
            }
        }
    };

    function loadFile(src) {

        return new Promise(function(resolve, reject) {
        
            let fileType = src.split('.').pop();
            let element = document.createElement(fileSettings[fileType].tag);

            element[fileSettings[fileType].srcAttribute] = src;

            if (fileSettings[fileType].attributes != null) {

                for (let att in fileSettings[fileType].attributes) {
                    element[att] = fileSettings[fileType].attributes[att];
                }

            }

            element.onload = () => {
                resolve(element);
            }

            element.onerror = (e) => {
                reject(e);
            }

            document[fileSettings[fileType].insertInto].appendChild(element);

        });

    }

    window.loadFile = loadFile;

 })(window);