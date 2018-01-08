/*
$.getJSON('./articles.json', function (data) {
    console.log(data);
    }
);
*/

/*
We get more control this way rather than using the way above
 */
$.ajax({
    url: './articles.json',
    dataType: 'json',
    type: 'get',
    cache: true,
    success: function (data) {
        //console.log(data);
        $(data.articles).each(function (index, value) {
            //console.log('It worked');
            console.log(value.id);
            document.writeln(value.name);
        });

    }
});