Лента
=======
<p class="tages">главная</p>

<script>
$('.rawhtml').append('<ul class="tages"></ul>');
    $.getJSON(
        '../articles.json',
        function(data) {
            j=-1
            for (var i in data) {
                var row = data[i];
                j++;                
                $('.tages').append('<li><a href="' + Object.keys(data)[j].replace('.md','.html') + '">' + row.title + '</a></li>');                                
            }

        }
    );    
</script>