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

function loadingMyProfile() {
  var __username = getCookie("username");
  var __pib = getCookie("PIB");
  var __phone = getCookie("PHONE");
  var __avatar = getCookie("AVATAR");
  if (__username < 3) {
    window.location.href = '/pages/auth.html';
  }

  document.getElementById("username").innerHTML = __username;
  document.getElementById("pib").innerHTML = __pib;
  document.getElementById("phone").innerHTML = __phone;
  document.getElementById("avatar").src = __avatar;

  var __url = '/php/loadingauctions.php?username=' + __username;

  $.ajax({
    url: __url,
    dataType: 'json',
    success: function (data) {
      tmp = "";
      for (let i = 0; i < data.auctions_authors.length; i++) {
        tmp += '<tr>';
        tmp += '<td>' + data.auctions_ids[i] + '</td>';
        tmp += '<td>' + data.auctions_name[i] + '</td>';
        tmp += '<td>' + data.auctions_bets[i] + '</td>';
        tmp += '<td>' + data.auctions_authors[i] + '</td>';
        if (data.auctions_status[i] == 0) {
          var status = "Активний";
        }
        else {
          var status = "НЕ активиний"
        }
        tmp += '<td>' + status + '</td>';
        tmp += '<td><a href = "/pages/check-auction.html?id=' + data.auctions_ids[i] + '">Детальніше</a></td>';
        tmp += '</tr>';
      }
      document.getElementById("table_body").innerHTML = tmp;
      if (data.auctions_authors.length == 0) {
        document.getElementById("full-table").innerHTML = "<p id = 'text' style = 'text-align: center;'>Поки що аукціони відсутні.</p>"
      }
    }
  });
}