(function($) {

    $(function () {
      $.getJSON('myjson.json', function(data) {
            for(var i=0;i<data.students.length;i++){
                $('#myList tbody').append('<tr><td>' + data.students[i].name +
                    '</td><td>' + data.students[i].surname +
                    '</td><td>' + data.students[i].age +
                    '</td><td>' + data.students[i].grades +
                    '</td><tr>');
            }
    });


        $('#btn-post').click(function () {
            $('#dialog-form').show();
            $('#create-user').click(function () {
                $("#myList tbody").append("<tr>" +
                    "<td>" + $('#name').val() + "</td>" +
                    "<td>" + $('#surname').val() + "</td>" +
                    "<td>" + $('#age').val() + "</td>" +
                    "<td>" + $('#grades').val() + "</td>" +
                    "</tr>");
                $('#dialog-form').hide();
                $.ajax({
                    url: "myjson.json",
                    method: "POST",
                    data: {"name":$('#name').val(), "surname":$('#surname').val(), "age":$('#age').val(), "grades":$('#grades').val()},
                    success: function(){
                        alert('Load was performed.');
                    }
                })
            });
            return false;
        });

        $('#myList').on('click', 'tr', function () {
            var elem = $(this);
            $('#myList tbody tr').css('background', 'none');
            elem.css('background', 'gray');
            $('#btn-delete, #btn-put, #btn-chat').removeAttr('disabled');

            $('#btn-delete').click(function () {
                elem.remove();
                $('#btn-delete, #btn-put, #btn-chat').attr('disabled', 'disabled');
            });

            $('#btn-put').click(function () {
                $('#dialog-form').show();
                $('#create-user').click(function () {
                    elem.children('*').remove();
                    elem.add(
                        "<td>" + $('#name').val() + "</td>" +
                        "<td>" + $('#surname').val() + "</td>" +
                        "<td>" + $('#age').val() + "</td>" +
                        "<td>" + $('#grades').val() + "</td>");
                    $('#dialog-form').hide();
                    elem.css('background', 'none');
                    $('#btn-delete, #btn-put, #btn-chat').attr('disabled', 'disabled');
                });
                return false;
            });

            $('#btn-chat').click(function () {
              // $(ajax)
            });
        });
    });
})(jQuery);
