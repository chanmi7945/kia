function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
};

// 네비게이션
const navBar = document.querySelector("#menu-nav");
const navMenu = document.querySelector("#nav-open-btn");
const closeMenu = document.querySelector(".nav-close-btn");

function openNavMenu() {
  navBar.style.left = "0%";
  navBar.style.transition = "0.3s";
  document.body.style.overflow = "hidden";
};

function closeNavMenu() {
  navBar.style.left = "100%";
  document.body.style.overflowY = "scroll";
};

// 언어 선택
const languageOptions = document.querySelector(".lan-options");
const searchPopup = document.querySelector(".search-pop");

function openLanguageOption() {
  if (languageOptions.style.opacity === "0" || languageOptions.style.opacity === "") {
    languageOptions.style.opacity = "1";
    searchPopup.style.opacity = "0";
  } else {
    languageOptions.style.opacity = "0";
  }
};

// 검색
function openSearch() {
  searchPopup.style.opacity = "1";
  searchPopup.style.top = "70px";
  searchPopup.style.visibility = "unset";

  document.querySelector(".close-search").addEventListener("click", function () {
    searchPopup.style.opacity = "0";
    searchPopup.style.top = "50px";
    searchPopup.style.visibility = "hidden";
  });
};

// footer 아코디언
function collapse(element) {
  var before = document.getElementsByClassName("active")[0] // 기존에 활성화된 버튼
  if (before && document.getElementsByClassName("active")[0] != element) { // 자신 이외에 이미 활성화된 버튼이 있으면
    before.nextElementSibling.style.maxHeight = null; // 기존에 펼쳐진 내용 접고
    before.classList.remove("active"); // 버튼 비활성화
  }
  element.classList.toggle("active"); // 활성화 여부 toggle

  var content = element.nextElementSibling;
  if (content.style.maxHeight != 0) { // 버튼 다음 요소가 펼쳐져 있으면
    content.style.maxHeight = null; // 접기
  } else {
    content.style.maxHeight = content.scrollHeight + "px"; // 접혀있는 경우 펼치기
  }
};