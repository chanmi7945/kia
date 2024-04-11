function login() {
  alert('로그인 후 이용해주세요.')
}

function favorites() {
  alert('관심상품으로 등록되었습니다.')
}

function compares() {
  alert('보관함에 등록되었습니다.')
}

// top버튼 스크롤 이벤트 리스너
window.addEventListener("scroll", () => {
  // 스크롤 위치가 100px 이상일 때 위로 가기 버튼을 보이게 함
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 20
  ) {
    document.getElementById("btn-back-to-top").style.display = "block";
  } else {
    document.getElementById("btn-back-to-top").style.display = "none";
  }
});

// 클릭 시 페이지 맨 위로 스크롤 (애니메이션 효과 추가)
function backToTop() {
  const position =
    document.documentElement.scrollTop || document.body.scrollTop;
  if (position) {
    window.requestAnimationFrame(() => {
      window.scrollTo(0, position - position / 10);
      backToTop();
    });
  }
}

// main 견적내기 버튼 모달창
// 모달창 열기 이벤트
$("#product_button").on("click", function () {
  $("#overlay").css({
    visibility: "visible",
    opacity: 1
  });
});

$("#product_button2").on("click", function () {
  $("#overlay").css({
    visibility: "visible",
    opacity: 1
  });
});

$("#product_button3").on("click", function () {
  $("#overlay").css({
    visibility: "visible",
    opacity: 1
  });
});

$("#product_button4").on("click", function () {
  $("#overlay").css({
    visibility: "visible",
    opacity: 1
  });
});

// 모달창 닫기 이벤트
$(".product_close").on("click", function () {
  $("#overlay").css({
    visibility: "hidden",
    opacity: 0
  });
});

$(".product_close2").on("click", function () {
  $("#overlay").css({
    visibility: "hidden",
    opacity: 0
  });
});


$(document).on("click", function (e) {
  if ($("#overlay").is(e.target)) {
    $("#overlay").css({
      visibility: "hidden",
      opacity: 0
    });
  }
});

// 모달 스와이퍼
var appendNumber = 4;
var prependNumber = 1;
var mimgs = new Swiper('.mimgs', {
  // spaceBetween: 10,
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  pagination: {
    el: '.mimg-pag',
    clickable: true,
  },
  breakpoints: {
    866: {
      slidesPerView: 1, //브라우저가 768보다 클 때
      spaceBetween: 20,
    },
  },

});

// recos 탭 메뉴
function openCity(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" tabmenu-color", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " tabmenu-color";
}

var choices = new Swiper('.choices', {
  // spaceBetween: 10,
  loop: true,
  effect: 'fade',
  pagination: {
    el: '.choices-pag',
    clickable: true,
  },

});

// recos 슬라이더
var recommend = new Swiper('.reco', {
  slidesPerView: 1,
  loop: true,
  // pagination: {
  //   el: '.reco-pag',
  //   clickable: true,
  // },
  navigation: {
    nextEl: ".reco-n",
    prevEl: ".reco-p",
  },
  breakpoints: {
    1366: {
      slidesPerView: 3, //브라우저가 1366보다 클 때
      spaceBetween: 10,
    },
  },

});

// recos 견적내기버튼 팝업창
const calPopup = document.querySelector("#cal-pop");

function openCalculator() {
  // #cal-pop 클릭하면
  document.querySelector(".calculator").style.display = "block";
  document.querySelector(".bottomMenu").style.display = "none";
}

function closeCalculator() {
  // .close-calculator 클릭하면
  document.querySelector(".calculator").style.display = "none";
  document.querySelector(".bottomMenu").style.display = "flex";
}


// event 
const clockTitle = document.querySelector(".dDay");

function christmasClock() {
  const today = new Date();
  const year = today.getFullYear();
  const christmas = new Date(`${year}-04-08`);
  const untilChristmas = new Date(christmas - today);
  const day = String(Math.floor(untilChristmas / (1000 * 3600 * 24)));
  const hour = String(Math.floor((untilChristmas / (1000 * 3600)) % 24)).padStart(2, "0");
  const minute = String(Math.floor((untilChristmas / (1000 * 60)) % 60)).padStart(2, "0");
  const second = String(Math.floor((untilChristmas / 1000) % 60)).padStart(2, "0");
  clockTitle.innerText = `${day}일 ${hour}시 ${minute}분 ${second}초`;
}
setInterval(christmasClock, 1000);

// event 오토 슬라이드
var recommend = new Swiper('.reco2', {
  slidesPerView: 1,
  loop: true,
  autoplay: true,
  loop: true,
  // pagination: {
  //   el: '.reco-pag2',
  //   clickable: true,
  // },
  navigation: {
    nextEl: ".reco-n2",
    prevEl: ".reco-p2",
  },
  breakpoints: {
    1366: {
      slidesPerView: 1, //브라우저가 768보다 클 때
      spaceBetween: 10,
    },
  },

});

// live  탭메뉴
var tabBtn = $("#tab-btn > ul > li"); //각각의 버튼을 변수에 저장
var tabCont = $("#tab-cont > div"); //각각의 콘텐츠를 변수에 저장
// 컨텐츠 내용을 숨겨주세요!
tabCont.hide().eq(0).show();
tabBtn.click(function () {
  var target = $(this); //버튼의 타겟(순서)을 변수에 저장
  var index = target.index(); //버튼의 순서를 변수에 저장
  tabBtn.removeClass("active"); //버튼의 클래스를 삭제
  target.addClass("active"); //타겟의 클래스를 추가
  tabCont.css("display", "none");
  tabCont.eq(index).css("display", "block");
});


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// why 스크롤 애니메이션
$(document).ready(function () {
  // 클래스가 "scroll_on"인 모든 요소를 선택합니다.
  const $counters = $(".scroll_on");

  // 노출 비율(%)과 애니메이션 반복 여부(true/false)를 설정합니다.
  const exposurePercentage = 50; // ex) 스크롤 했을 때 $counters 컨텐츠가 화면에 100% 노출되면 숫자가 올라갑니다.
  const loop = true; // 애니메이션 반복 여부를 설정합니다. (true로 설정할 경우, 요소가 화면에서 사라질 때 다시 숨겨집니다.)

  // 윈도우의 스크롤 이벤트를 모니터링합니다.
  $(window)
    .on("scroll", function () {
      // 각 "scroll_on" 클래스를 가진 요소에 대해 반복합니다.
      $counters.each(function () {
        const $el = $(this);

        // 요소의 위치 정보를 가져옵니다.
        const rect = $el[0].getBoundingClientRect();
        const winHeight = window.innerHeight; // 현재 브라우저 창의 높이
        const contentHeight = rect.bottom - rect.top; // 요소의 높이

        // 요소가 화면에 특정 비율만큼 노출될 때 처리합니다.
        if (
          rect.top <=
          winHeight - (contentHeight * exposurePercentage) / 100 &&
          rect.bottom >= (contentHeight * exposurePercentage) / 100
        ) {
          $el.addClass("active");
        }
        // 요소가 화면에서 완전히 사라졌을 때 처리합니다.
        if (
          loop &&
          (rect.bottom <= 0 || rect.top >= window.innerHeight)
        ) {
          $el.removeClass("active");
        }
      });
    })
    .scroll();
});

// art02 할부계산기
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
}

const pst = document.getElementById("myRange1");
const value = document.getElementById("value");
value.textContent = pst.value;
pst.oninput = function () {
  value.textContent = this.value;
}

// news 
const newsSections = document.querySelectorAll(".news-list");

for (let a = 0; a < newsSections.length; a++) {
  newsSections[a].addEventListener("mouseover", function () {
    clearNews();
    this.style.backgroundColor = "white";
    this.style.color = "black";
    this.style.transition = "0.3s";
    this.lastElementChild.style.filter = "invert(0)";
  });

  function clearNews() {
    for (let a = 0; a < newsSections.length; a++) {
      newsSections[a].addEventListener("mouseout", function () {
        newsSections[a].style.background = "none";
        newsSections[a].style.color = "white";
        newsSections[a].lastElementChild.style.filter = "invert(1)";
      });
    };
  };
}

// qna onclick

function showQnaContent(menuId) {
  // 모든 콘텐츠 숨기기
  var QnaContents = document.querySelectorAll("[id$='-qnaContent']");
  for (var i = 0; i < QnaContents.length; i++) {
    QnaContents[i].style.display = "none";
  }

  // 선택한 메뉴의 콘텐츠 보이기
  var QnaNoneContent = document.getElementById(menuId + "-qnaContent");
  if (QnaNoneContent) {
    QnaNoneContent.style.display = "block";
  }
};

function selectQnaMenu(qnaMenu) {
  // 모든 메뉴에서 선택 클래스 제거
  var qnaMenus = document.querySelectorAll(".qna-tab-menu li");
  for (var i = 0; i < qnaMenus.length; i++) {
    qnaMenus[i].classList.remove("qnaSelected");
  }

  // 선택한 메뉴에 선택 클래스 추가
  qnaMenu.classList.add("qnaSelected");
};

// sub news onclick
function change_btn(e) {
  var newsButton = document.querySelectorAll(".news-page-num");
  newsButton.forEach(function (newsBtn, i) {
    if (e.currentTarget == newsBtn) {
      newsBtn.classList.add("newsActive");
    } else {
      newsBtn.classList.remove("newsActive");
    }
  });
  console.log(e.currentTarget);
};