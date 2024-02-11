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


if(getCookie("username") != null)
{
    let name = getCookie("username");
    document.getElementById("main_button").innerHTML = name;
}

function deleteCookie() {
    document.cookie = "username=test; path=/; expires=Tue, 19 Jan 2022 03:14:07 GMT";
    document.cookie = "AVATAR=test; path=/; expires=Tue, 19 Jan 2022 03:14:07 GMT";
    document.cookie = "PHONE=test; path=/; expires=Tue, 19 Jan 2022 03:14:07 GMT";
    document.cookie = "PIB=test; path=/; expires=Tue, 19 Jan 2022 03:14:07 GMT";
}

function exitAccount() {
    deleteCookie();
    window.location.href = "/pages/auth.html";
}