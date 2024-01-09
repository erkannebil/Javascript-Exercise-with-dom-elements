
document.addEventListener("DOMContentLoaded", function () {
    runFunction();
});

function runFunction() {
    createH1Dom("h1", "Bu satır işlemi Dom ile birlikte istenilen texti yerleştiren bir h1 etiketi oluşturan fonksiyon çalıştırıyor.");
    createDomElement("div", "Content", "red", true);
    let existingUl = document.getElementById("existUl");
    addLiToUl(existingUl, "New List Item 1");
    addLiToUl(existingUl, "New List Item 2");
    updateToText("button", "Butona Bastıkça metni güncelleyen bir js", "mybutton")
    changeDivStyle("mydiv", "blue")
    filterListByLetter("N");
}

//1 .Bir HTML sayfasında bulunan bir başlık elementini (h1) JavaScript kullanarak değiştirin. Yeni başlık metni "Merhaba, Dünya!" olsun.
function createH1Dom(element, text) {
    let newDom = document.createElement(element);
    let bodyElement = document.getElementsByTagName("body")[0];
    newDom.textContent = text;
    bodyElement.appendChild(newDom);
}
//2. Bir HTML sayfasında bulunan bir div elementinin arka plan rengini JavaScript kullanarak değiştirin.
function createDomElement(element, content, color, setBackgroundColor = false) {
    let newDom = document.createElement(element);
    newDom.textContent = content;
    if (setBackgroundColor) {
        newDom.style.backgroundColor = color;
    }
    document.body.appendChild(newDom);
}
//3. Bir HTML sayfasında bulunan bir ul (sırasız liste) elementine JavaScript kullanarak yeni liste elemanları ekleyin.
function addLiToUl(ulElement, content) {
    let newLi = document.createElement("li");
    newLi.textContent = content;
    ulElement.appendChild(newLi);
}

//4. Bir düğmeye tıklandığında bir metni güncelleyen bir JavaScript fonksiyonunu çağırın.
function updateToText(element, content, id, className) {
    let newDom = document.createElement(element);
    let bodyElement = document.getElementsByTagName("body")[0];
    newDom.textContent = content;
    if (id !== undefined) {
        newDom.id = id;
    }
    bodyElement.appendChild(newDom);

    document.getElementById("mybutton").addEventListener('click', function () {
        var myParagraph = document.getElementById('mybutton');
        myParagraph.textContent = 'Yeni Metin';
    });
}
//5. Bir HTML formunda kullanıcıdan bir metin girmesini isteyin. Ardından, girilen metni başka bir bölümde görüntüleyin.
function showTextFromİnput() {
    var textInput = document.getElementById('textInput');
    var displayArea = document.getElementById('mydiv');
    var enteredText = textInput.value;
    displayArea.textContent = 'Girilen Metin: ' + enteredText;
}

//6. Bir HTML sayfasında bulunan bir div elementinin (veya istediğiniz bir elementin) 
//stilini JavaScript kullanarak değiştirin. Örneğin, genişliğini artırın ve rengini değiştirin.
function changeDivStyle(divName, color) {
    var myDiv = document.getElementById(divName);
    myDiv.style.backgroundColor = color;
}
//7. Bir HTML sayfasında bulunan bir sırasız listeyi (ul) JavaScript kullanarak filtreleyin. 
//Örneğin, sadece belirli bir harfi içerenleri gösterin.
function filterListByLetter(letter) {
    var ulElement = document.getElementById("existUl");
    var listItems = ulElement.getElementsByTagName("li");

    for (var i = 0; i < listItems.length; i++) {
        var listItemText = listItems[i].innerText || listItems[i].textContent;

        if (listItemText.includes(letter)) {
            listItems[i].style.display = "list-item";
        } else {
            listItems[i].style.display = "none";
        }
    }
}

//8. Bir HTML sayfasında bulunan bir sırasız 
//listeye JavaScript kullanarak yeni bir liste elemanı ekleyin ve ardından bir elemanı silin.
// Yukarıda benzerini zaten yaptım o sebeple remove kısmını oluşturdum sadece çalışmıyor yukarda çünki listeme ıd vermemişim üşendim geçtim.
function removeListItem() {
    var ulElement = document.getElementById("myList");
    
    // Örneğin, ilk elemanı siliyoruz
    var firstListItem = ulElement.getElementsByTagName("li")[0];
    
    if (firstListItem) {
        ulElement.removeChild(firstListItem);
    }
}



//9. Bir HTML sayfasında bulunan bir liste üzerinde olay delegasyonu kullanarak tıklanan elemanın metnini gösterin.


//10. Bir HTML formunu JavaScript kullanarak doğrulayın. 
//Örneğin, kullanıcı adı ve şifre alanlarını kontrol edin ve hatalı giriş durumunda bir uyarı gösterin. -->//


//DAHA KOLAY VE İSTENİLEN ÇÖZÜMLER


// 1 .Bir HTML sayfasında bulunan bir başlık elementini (h1) JavaScript kullanarak değiştirin. Yeni başlık metni "Merhaba, Dünya!" olsun.
// 2. Bir HTML sayfasında bulunan bir div elementinin arka plan rengini JavaScript kullanarak değiştirin.
// 3. Bir HTML sayfasında bulunan bir ul (sırasız liste) elementine JavaScript kullanarak yeni liste elemanları ekleyin.
// 4. Bir düğmeye tıklandığında bir metni güncelleyen bir JavaScript fonksiyonunu çağırın.
// 5. Bir HTML formunda kullanıcıdan bir metin girmesini isteyin. Ardından, girilen metni başka bir bölümde görüntüleyin.
// 6. Bir HTML sayfasında bulunan bir div elementinin (veya istediğiniz bir elementin) stilini JavaScript kullanarak değiştirin. Örneğin, genişliğini artırın ve rengini değiştirin.
// 7. Bir HTML sayfasında bulunan bir sırasız listeyi (ul) JavaScript kullanarak filtreleyin. Örneğin, sadece belirli bir harfi içerenleri gösterin.
// 8. Bir HTML sayfasında bulunan bir sırasız listeye JavaScript kullanarak yeni bir liste elemanı ekleyin ve ardından bir elemanı silin.
// 9. Bir HTML sayfasında bulunan bir liste üzerinde olay delegasyonu kullanarak tıklanan elemanın metnini gösterin.
// 10. Bir HTML formunu JavaScript kullanarak doğrulayın. Örneğin, kullanıcı adı ve şifre alanlarını kontrol edin ve hatalı giriş durumunda bir uyarı gösterin.

document.addEventListener("DOMContentLoaded", function () {
    updateFirstTitle();
    backGroundMyDiv();
    appendLi();
    divStyleChange();
  });
  
  function updateFirstTitle() {
    const newh1 = document.getElementById("myh1");
    newh1.innerText = "Merhaba, Dünya!";
  }
  
  
  
  function AddText() {
    let newText = "deneme metin içerik";
    let myh1 = document.getElementById("myh1");
    myh1.innerText = newText;
  }
  
  function backGroundMyDiv() {
    const mydiv = document.getElementById("mydiv");
    mydiv.style.backgroundColor = "red";
  }
  
  function appendLi() {
    let ul = document.getElementById("101");
    let createdLi = document.createElement("li");
  
    createdLi.innerText = "Liste 3";
  
    ul.appendChild(createdLi);
  }
  
  function metniGoruntule () {
      let girilenMetin = document.getElementsByName("fname")[0];
      let girilenMetinDegeri = girilenMetin.value
      let myh1 = document.getElementById("myh1");
      myh1.innerText = girilenMetinDegeri;
  }
  
  function submitBtn (event) {
      event.preventDefault();
      metniGoruntule();
  }
  
  function divStyleChange () {
      //background-Color = "brown" ok
      //font-family="arial" ok
      //font-size ="22px"ok
      //width: "300px"ok
      //height; "610px"ok
      let mydiv = document.getElementById("mydiv");
      mydiv.style.backgroundColor = "hsl(0, 0%, 15%)";
      mydiv.style.fontFamily = "Arial"
      mydiv.style.fontSize ="22px"
      mydiv.style.width = "300px"
      mydiv.style.height = "610px"
  }




// function addNewDomWithIDAndClass(element, id, className) {
//     let newDom = addNewDom(element);

//     if (className !== undefined) {
//         newDom.className = className;
//     }

//     if (id !== undefined) {
//         newDom.id = id;
//     }

//     return newDom;
// }

// function createList(arrList) {
//     let unorderedList = addNewDomWithIDAndClass("ul", "101", "list");

//     for (let i = 0; i < arrList.length; i++) {
//         let style = {
//             "background": "red",
//             "display": "flex",
//             "flexDirection": "row"
//         };

//         let listItem = createDom("li", undefined, "class", arrList[i], style);
//         unorderedList.appendChild(listItem);
//     }

//     document.body.appendChild(unorderedList);
// }

// function createDom(elementName, id, className, content, style) {
//     const myElement = document.createElement(elementName);

//     if (id !== undefined) {
//         myElement.id = id;
//     }

//     if (className !== undefined) {
//         myElement.className = className;
//     }

//     if (content !== undefined) {
//         myElement.textContent = content;
//     }

//     if (style !== undefined) {
//         addStyleInElement(myElement, style);
//     }

//     return myElement;
// }

// function addStyleInElement(element, styleObject) {
//     for (let key in styleObject) {
//         element.style[key] = styleObject[key];
//     }
// }

// const fruitList = ["apple", "banana", "tomato"];