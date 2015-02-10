var recordBase = 'http://catalog.tadl.org/eg/opac/record/';
var imageBase = 'https://catalog.tadl.org/opac/extras/ac/jacket/medium/r/'

function booksFicDataSuccess(data) {
    var content = "";
    for (var i in data["items"]) {
        var id = data["items"][i].record_id;
        var img = imageBase + id;
        var alt = data["items"][i].author + ' : ' + data["items"][i].title;
        content += "<a target=\"_blank\" href=\"" + recordBase + id + "\"><img src=\"" +img+ "\" title=\"" +alt+ "\"></a>"
    }
    jQuery("#owl-books-fiction").html(content);
}

jQuery("#owl-books-fiction").owlCarousel({
    jsonPath : 'http://kcl-listcacher.herokuapp.com/list/view.json?list=books_fic',
    jsonSuccess : booksFicDataSuccess
});

