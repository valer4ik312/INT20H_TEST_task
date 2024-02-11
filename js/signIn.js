function regist()
{
    var __pib = document.getElementById("pib").value;
    var __nickname = document.getElementById("nickname").value;
    var __password = document.getElementById("password").value;
    var __phone = document.getElementById("phone").value;

    var __url = '/php/regist.php?pib=' + __pib + "&nickname=" + __nickname + "&password=" + __password + "&phone=" + __phone;

    $.ajax({
        url: __url,
        dataType: 'json',
        success: function (data) {
            result_regist = data.result;
            if(result_regist == false)
            {
                alert("Користувача не створено!\nПеревірте введені вами дані!");
            }
            else{
                alert("Користувача створенно!");
                window.location.href = '/pages/auth.html';
            }
        }
    });
}

function login()
{
    var __nickname = document.getElementById("nickname").value;
    var __password = document.getElementById("password").value;

    if(__nickname.length < 1 || __password.length < 1)
    {
        return false;
    }

    var __url = "/php/signin.php?nickname=" + __nickname + "&password=" + __password;

    $.ajax({
        url: __url,
        dataType: 'json',
        success: function (data) {
            result_login = data.result;
            if(result_login == false)
            {
                alert("Неправильний логін або пароль!\nПеревірте дані та спробуйте ще раз.");
            }
            else{
                result_login = data;
                alert("Ви успішно увійшли в аккаунт!");
                console.log(result_login)
                setCookie("username", result_login.USERNAME, 30);
                setCookie("PIB", result_login.PIB, 30);
                setCookie("PHONE", result_login.PHONE, 30);
                setCookie("AVATAR", result_login.AVATAR, 30);
                window.location.href = '/pages/my-profile.html';
            }
        }
    });
}

// Функция для установки куки
function setCookie(name, value, daysToLive) {
    // Преобразуем дни в миллисекунды
    var millisecondsPerDay = 24 * 60 * 60 * 1000;
    var expires = "";
    
    // Если задано число дней для хранения куки, устанавливаем дату истечения срока действия
    if (daysToLive) {
        var date = new Date();
        date.setTime(date.getTime() + (daysToLive * millisecondsPerDay));
        expires = "; expires=" + date.toUTCString();
    }
    
    // Устанавливаем куки с указанным именем, значением и сроком действия
    document.cookie = name + "=" + value + expires + "; path=/";
}

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

function checkuserInSystem()
{
    let __username__ = getCookie("username");
    if(__username__ != null){
        window.location.href = "/pages/my-profile.html";
    }
}

checkuserInSystem();