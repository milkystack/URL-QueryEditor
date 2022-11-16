function url_input_func() {
    main_table.innerHTML = "";
    var input_url = document.getElementById('url_input').value;
    var input_url = new URL(input_url);
    var params = new URLSearchParams(input_url.search);
    for(let param of params){
        main_table.innerHTML += 
        "<tr>"
            +"<th>"
                +"<textarea cols='30' rows='1' oninput='url_output_func()'>"+param[0]+"</textarea>"
            +"</th>"
            +"<td>"
                +"<textarea cols='30' rows='1' oninput='url_output_func()'>"+param[1]+"</textarea>"
            +"</td>"
        +"</tr>";
    }
    url_output_func()
}
url_input_func()

function url_output_func() {
    var tableElem = document.getElementById('main_table');
    var input_url = document.getElementById('url_input').value;
    var input_url = input_url.split(/[?#]/)[0];
    var input_url = new URL(input_url);
    for (i = 0, len = tableElem.rows.length; i < len; i++) {
        var key = tableElem.rows[i].firstElementChild.firstElementChild.value;
        var value = tableElem.rows[i].lastElementChild.firstElementChild.value;
        input_url.searchParams.append(key, value);
    }
    document.getElementById('url_input').value = decodeURIComponent(input_url.toString()).replace(/\+/g, " ");
}