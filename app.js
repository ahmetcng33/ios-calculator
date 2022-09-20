let hesap = document.querySelector(".btns");
let alt = document.querySelector(".alt");
let ust = document.querySelector(".ust")
let del = document.querySelector(".del")


hesap.addEventListener("click" , (e)=>{
    if(e.target.classList.contains("num")){
        alt.innerHTML += e.target.innerHTML;
    }else if(e.target.classList.contains("islem")){
        ust.innerHTML = alt.innerHTML + " " + e.target.innerHTML;
        alt.innerHTML = "";
    }else if(e.target == document.querySelector(".sil")){
        alt.innerHTML = "";
        ust.innerHTML = "";
    }else if(e.target == document.querySelector(".yuzde")){
        alt.innerHTML = parseFloat(alt.innerHTML) /100;
    }else if(e.target == document.querySelector(".hal")){
        alt.innerHTML = -alt.innerHTML
    }else if(e.target == document.querySelector(".esitle")){
        esitle()
    }
});

function esitle() {
    if (ust.innerHTML.slice(-1) == "÷") {
      alt.innerHTML = (ust.innerHTML.slice(0, -1) / alt.innerHTML).toFixed(1);
    } else if (ust.innerHTML.slice(-1) == "x") {
      alt.innerHTML = ust.innerHTML.slice(0, -1) * alt.innerHTML;
    } else if (ust.innerHTML.slice(-1) == "-") {
      alt.innerHTML = ust.innerHTML.slice(0, -1) - alt.innerHTML;
    } else if (ust.innerHTML.slice(-1) == "+") {
      alt.innerHTML = Number(ust.innerHTML.slice(0, -1)) + Number(alt.innerHTML);
    }
  }