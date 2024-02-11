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

const url__ = new URL(window.location.href);
const searchParams__ = url__.searchParams;

function loadingComments() {
    var __url__ = '/php/loadingComments.php?id=' + searchParams__.get('id');
    $.ajax({
        url: __url__,
        dataType: 'json',
        success: function (data) {
            if (data.ID_COMMENT.length == 0) {
                document.getElementById("comment").innerHTML = "Коментарі відсутні! Буть першим хто прокоментує цей аукціон :)";
                document.getElementById("comment").style.fontFamily = "Montserrat-Regular";
                document.getElementById("comment").style.border = "none";
            }
            else {
                tmp = "";
                for (let i = 0; i < data.ID_COMMENT.length; i++) {
                    tmp += '<div id="comment">';
                    tmp += '<div id="author-comment">' + data.AUTHOR_COMMENT[i] + " <span id = 'data-comment'>" + data.DATE[i] + "</span></div>";
                    tmp += '<p id = "text">' + data.MESSAGE[i] + "</p>";
                    tmp += "</div>";
                }
                document.getElementById("div-block-comments").innerHTML = tmp;
            }
        }
    });
}

loadingComments()

function addComent() {
    let msg = document.getElementById("new_comment").value; let __username__ = getCookie("username");
    let url___ = "/php/addComment.php?id=" + searchParams__.get('id') + "&author=" + getCookie("username") + "&msg=" + msg;
    if (__username__ == null) {
        alert("Для того щоб залишити коментар, потрібно авторизуватися.");
        window.location.href = "/pages/auth.html";
    }
    else {
        fetch(url___, {
            method: "GET"
        });
        alert("Коментар додано!");
        window.location.reload();
    }
}