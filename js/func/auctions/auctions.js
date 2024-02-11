var __url = '/php/allauctions.php';

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