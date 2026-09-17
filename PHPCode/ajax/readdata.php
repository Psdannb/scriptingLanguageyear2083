<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script>
$(document).ready(function() {
    $.ajax({
        url: '../database/readdataapi.php',
        type: 'GET',
        dataType: 'json',
        success: function(response) {
            // console.log(typeof response);
            if (response.status == true) {
                // console.log(response.data);
                let data = response.data;

                let $tbody = $('#studentTableBody');
                $tbody.empty();

                if (data.length === 0) {
                    $tbody.append('<tr><td colspan="4">No students found</td></tr>');
                    return;
                }
                data.forEach((student) => {
                    let $row = $('<tr>');
                    $row.append($('<td>').text(student.name));
                    $row.append($('<td>').text(student.address));
                    $row.append($('<td>').text(student.number));
                    $row.append($('<td>').text(student.email));
                    $tbody.append($row);
                });
            } else {
                alert("failed to load data");
            }

        },
        error: function() {
            alert("failed to fetch the data");
        }
    })

})
</script>

<table border="1">
    <thead>
        <tr>
            <th>Student Name</th>
            <th>Student address</th>
            <th>Student Number</th>
            <th>Student Email</th>
        </tr>
    </thead>
    <tbody id="studentTableBody">

    </tbody>
</table>