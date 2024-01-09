document.addEventListener("DOMContentLoaded", function () {
            createList(fruitList);
        });

        function addNewDom(element) {
            let newDom = document.createElement(element);
            let bodyElement = document.getElementsByTagName("body")[0];
            bodyElement.appendChild(newDom);
            return newDom;
        }

        function addNewDomWithIDAndClass(element, id, className) {
            let newDom = addNewDom(element);

            if (className !== undefined) {
                newDom.className = className;
            }

            if (id !== undefined) {
                newDom.id = id;
            }

            return newDom;
        }

        function createList(arrList) {
            let unorderedList = addNewDomWithIDAndClass("ul", "101", "list");

            for (let i = 0; i < arrList.length; i++) {
                let style = {
                    "background": "red",
                    "display": "flex",
                    "flexDirection": "row"
                };

                let listItem = createDom("li", undefined, "class", arrList[i], style);
                unorderedList.appendChild(listItem);
            }

            document.body.appendChild(unorderedList);
        }

        function createDom(elementName, id, className, content, style) {
            const myElement = document.createElement(elementName);

            if (id !== undefined) {
                myElement.id = id;
            }

            if (className !== undefined) {
                myElement.className = className;
            }

            if (content !== undefined) {
                myElement.textContent = content;
            }

            if (style !== undefined) {
                addStyleInElement(myElement, style);
            }

            return myElement;
        }

        function addStyleInElement(element, styleObject) {
            for (let key in styleObject) {
                element.style[key] = styleObject[key];
            }
        }

        const fruitList = ["apple", "banana", "tomato"];