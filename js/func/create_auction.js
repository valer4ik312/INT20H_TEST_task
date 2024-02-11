function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split("=");
      if (cookieName === name) {
        return decodeURIComponent(cookieValue);
      }
    }
    return null;
  }

document.getElementById("author_auction").innerHTML = getCookie("username");

function create_aunction()
{
    var author_lot = document.getElementById("author_auction").value;
    var name_lot = document.getElementById("name_auction").value
    var start_bet = document.getElementById("start_bet").value;
    var about_lot = document.getElementById("about_auction").value;
    var date_end = document.getElementById("date_end_auction").value;
    var author_lot = getCookie("username");

    var __url = "/php/create-auction.php?author_lot=" + author_lot + "&name_lot=" + name_lot + "&start_bet=" + start_bet + "&about_lot=" + about_lot + "&author_lot=" + author_lot + "&date_end=" + date_end;

    alert("Створення...")
    $.ajax({
        url: __url,
        dataType: 'json'
    });

    alert("ЛОТ СТВОРЕННО!");

    window.location.href = '/pages/my-profile.html';
}