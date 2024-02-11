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

const url = new URL(window.location.href);
const searchParams = url.searchParams;

function loadingAuctionInformation() {

    var __url = '/php/checkauction.php?id=' + searchParams.get('id');

    $.ajax({
        url: __url,
        dataType: 'json',
        success: function (data) {
            if (data.ID != -1) {

                if(getCookie("username") == data.USER_CREATE)
                {
                    document.getElementById("cp-panel").style.display = "block";
                }
                if(data.AuctionActive == 1)
                {
                    document.getElementById("cp-panel").style.display = "none";
                }
                document.getElementById("number_lot").innerHTML = data.ID;
                document.getElementById("name_lot").innerHTML = data.NameAuction;
                document.getElementById("AboutAuction").innerHTML = data.AboutAuction;
                document.getElementById("tmp_bet").innerHTML = data.BET + "$";
                document.getElementById("prev_bet").innerHTML = data.PREV_BET + "$";
                document.getElementById("user_how_create_prev_bet").innerHTML = "-> Користувач який поставив останню ставку: " + "<a href = '/pages/check-user.html?username=" + data.USER_BET + "'>" + data.USER_BET + "</a>"; //data.USER_BET;
                document.getElementById("date_create").innerHTML = data.DATA_CREATE;
                document.getElementById("date_end").innerHTML = data.DATE_END;
                document.getElementById("author").innerHTML = "-> Автор: " + "<a href = '/pages/check-user.html?username=" + data.USER_CREATE + "'>" + data.USER_CREATE + "</a>";
                if(data.AuctionActive == 1)
                {
                    document.getElementById("new-bet").style.display = "none";
                    document.getElementById("status_lot").innerHTML = "НЕ активний";
                }
                else{
                    document.getElementById("status_lot").innerHTML = "Активний";
                }
            }
            else {
                alert("ЛОТ НЕ ЗНАЙДЕНО!");
                window.location.href = "/pages/all-auction.html";
            }
        }
    });
}

loadingAuctionInformation()



function new_bet() {
    let new_bet__ = document.getElementById("new-bet_").value;
    alert("Перевірка");
    var __url = '/php/checkauction.php?id=' + searchParams.get('id');
    $.ajax({
        url: __url,
        dataType: 'json',
        success: function (data) {
            if (new_bet__ - 1 < data.BET) {
                alert("Сумма повина бути більша за актуальну.");
                window.location.href = "/pages/check-auction?id=" + data.ID;
            }
            else {
                checkAuth();
            }
        }
    });
}

function checkAuth() {
    try {
        let username__ = getCookie("username");
        if (username__.length < 3) {
            alert("Потрібно авторизуватися.");
            window.location.href = "/pages/auth.html";
        }

        alert("CТАВКУ ОНОВЛЕНО!");
        __new_bet_id = searchParams.get('id');
        __new_user = getCookie("username");
        __new_bet = document.getElementById("new-bet_").value;
        var url___ = "/php/new_bet.php?id=" + __new_bet_id + "&username=" + __new_user + "&new_bet=" + __new_bet;
        fetch(url___, {
            method: "GET"
        });

        window.location.reload();
    }
    catch (error) {
        alert("Потрібно авторизуватися.");
        window.location.href = "/pages/auth.html";
    }
}

function deleteAuction()
{
    let auction_id = searchParams.get('id');

    let __url__ = "/php/delete-auction.php?id=" + auction_id;
    
    fetch(__url__)
    .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
      })
      .then(data => {
        alert("ЛОТ ВИДАЛЕНО!");
        window.location.href = "/pages/my-profile.html";
      });
}

function deactiveAuction()
{
    let auction_id = searchParams.get('id');

    let __url__ = "/php/deactive-auction.php?id=" + auction_id;
    
    fetch(__url__)
    .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
      })
      .then(data => {
        alert("АУКЦІОН ЗАВЕРШЕНО!");
        window.location.href = "/pages/my-profile.html";
      });
}

function closeDialog()
{
    document.getElementById("dialog-window").style.display = "none";
}

function openDialog(type)
{
    document.getElementById("dialog-window").style.display = "block";
    document.getElementById("change").addEventListener('click', function() {
        ChangeAboud(type);
    });
    if(type == 'about')
    {
        msg = "ОПИС";
    }
    if(type == 'date'){
        msg = "Дата закінчення";
    }
    document.getElementById("title-dialog-window").innerHTML = "Зміна даних: " + msg; 
}

function ChangeAboud(type)
{
    let new_content = document.getElementById("new_content").value;
    let __url__ = "/php/change_about.php?content=" + new_content + "&type=" + type + "&id=" + searchParams.get('id');
    
    fetch(__url__)
    .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
      })
      .then(data => {
        alert("Інформацію про лот змінено!");
        window.location.reload();
      });
}