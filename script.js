var d = new Date();

function calender(d) {
    var year_display = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var year = d.getFullYear();
    var month = d.getMonth();
    var date = d.getDate();
    var num_of_dates = 0;
    var first_day_of_the_month = (new Date(year + "-" + (month + 1) + "-01")).getDay();
    if (month != 1) {
        num_of_dates = year_display[month];
    } else {
        if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
            num_of_dates = 29;
        } else {
            num_of_dates = 28;
        }
    }
    document.getElementById("cal_year").innerHTML = year + "年" + (month + 1) + "月";
    var output = "<span>日</span><span>一</span><span>二</span><span>三</span><span>四</span><span>五</span><span>六</span>";
    var cal_body = document.getElementById("cal_body");
    for (var i = 0; i < first_day_of_the_month; i++) {
        output += "<span></span>";
    }
    cal_body.innerHTML = output;
    for (var i = 1; i <= num_of_dates; i++) {
        var s = document.createElement("SPAN");
        s.addEventListener("click", function() {
            selected(this)
        }, false);
        s.innerHTML = i;
        if (i == date) {
            s.className += " selected";
        }
        cal_body.appendChild(s);
    }

}

function selected(target) {
    var selectedDate = document.getElementById("cal_body").getElementsByClassName("selected")[0];
    selectedDate.className = "";
    target.className += " selected";
    var date = target.innerHTML;
    d.setDate(date);
}

function prev(d) {
    var year = d.getFullYear();
    var month = d.getMonth();
    var date = d.getDate();
    if (month == 0) {
        year--;
        month = 11;
    } else {
        month--;
    }
    var newDate = new Date(year + "-" + (month + 1) + "-" + date);
    calender(newDate);
    return newDate;
}

function next(d) {
    var year = d.getFullYear();
    var month = d.getMonth();
    var date = d.getDate();
    if (month == 11) {
        year++;
        month = 0;
    } else {
        month++;
    }
    var newDate = new Date(year + "-" + (month + 1) + "-" + date);
    calender(newDate);
    return newDate;
}

window.onload = function() {
    calender(d);
    document.getElementById("prev").addEventListener("click", function() {
        d = prev(d)
    }, false);
    document.getElementById("next").addEventListener("click", function() {
        d = next(d)
    }, false);
};