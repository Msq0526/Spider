if(data.status === '1'){
    data = data.data;
    let html = '';
    $.each(data, function(index, val) {
        html += '<td>'+ val.value + '</td>'
    });
    $('.number').text('').append(html);
    }
    else {
        alert('请关闭抓包软件哦~')
    };