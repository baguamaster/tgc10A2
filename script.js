$("#form").submit(function(e)) {
e.preventDefault()

var query = $("#search").val()

var API_KEY = '91e67499c338b646b3590f73a5696583'

var url = 'http://api.serpstack.com/search ?
    access_key = $ { API_KEY } &
    type = web &
    query = $ { query }
'

$.get(url, function(data) {
    console.log(data)
})







})