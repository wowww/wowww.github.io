let autocomplete = function () {
  let _inp = null;
  let _arr = [];
  let _currentFocus;

  let _setAutocomplete = function (inp, arr) {
    // autocomplete할 배열 
    _arr = arr;
    // 기존의 input 값과 같지 않다면, 리스너 해제 
    if (_inp === inp) {
      return;
    }
    // 기존 리스너해제 
    _removeListener();

    // 새로운 input 의 리스너 추가. 
    _inp = inp;
    _inp.addEventListener("input", inputEvent);
    _inp.addEventListener("keydown", keydownEvent);
  }

  let inputEvent = function (e) {
    var a, b, i, val = this.value;
    // 이전 생성된 div 제거 
    closeAllLists();
    // 요소 확인 
    if (!val) {
      return false;
    }

    // 현재의 포커스의 위치는 없음. 
    _currentFocus = -1;

    // autocomplet에서 항목을 보여줄 div 생성 
    a = document.createElement("DIV");

    a.setAttribute("id", this.id + "autocomplete-list");

    a.setAttribute("class", "autocomplete-items");

    this.parentNode.appendChild(a);

    // autocomplet할 요소 찾기 
    for (i = 0; i < _arr.length; i++) {
      // 배열의 요소를 현재 input의 value의 값만큼 자른 후, 같으면 추가한다. 
      if (_arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        b = document.createElement("DIV");
        // value의 값 만큼 굵게 표시

        b.innerHTML = "<strong>" + _arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += _arr[i].substr(val.length);
        b.innerHTML += "<input type='hidden' value='" + _arr[i] + "'>";

        // 생성된 div에서 이벤트 발생시 hidden으로 생성된 input안의 value의 값을 autocomplete할 요소에 넣기 
        b.addEventListener("click", function (e) {
          _inp.value = this.getElementsByTagName("input")[0].value;
          closeAllLists();
        });
        // autocomplete 리스트를 붙이기. 
        a.appendChild(b);
      }
    }
  }

  let keydownEvent = function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");

    if (x) {
      x = x.getElementsByTagName("div");
    }

    if (e.keyCode == 40) {
      _currentFocus++;
      addActive(x);
    } else if (e.keyCode == 38) {
      _currentFocus--;
      addActive(x);
    } else if (e.keyCode == 13) {
      e.preventDefault();
      if (_currentFocus > -1) {
        if (x) x[_currentFocus].click();
      }
    }
  }

  let addActive = function (x) {
    if (!x) return false;
    removeActive(x);
    if (_currentFocus >= x.length) _currentFocus = 0;
    if (_currentFocus < 0) _currentFocus = (x.length - 1);
    x[_currentFocus].classList.add("autocomplete-active");
  }

  let removeActive = function (x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }

  let closeAllLists = function (elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != _inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }

  let _removeListener = function () {
    if (_inp !== null) {
      console.log(_inp)
      _inp.removeEventListener("input", inputEvent, false);
      _inp.removeEventListener("keydown", keydownEvent, false);
    }
  }

  return {
    setAutocomplete: function (inp, arr) {
      _setAutocomplete(inp, arr);
    },
  }
};