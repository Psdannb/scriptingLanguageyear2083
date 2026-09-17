<form id="registrationform" enctype="multipart/form-data">
    <input type="text" name="username" placeholder="Enter your name" required />
    <input type="text" name="address" placeholder="Enter your address" required />
    <input type="tel" name="phonenumber" placeholder="Enter your phonenumber" required />
    <input type="email" name="email" placeholder="Enter your valid email address" required />
    <input type="file" name="studentimage" />
    <input type="submit" id="submitbtn" />
</form>
<p id="responseMessage"></p>
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script>
$(document).ready(function() {
    $("#registrationform").submit(function(e) {
        e.preventDefault();
        // let formdata = $(this).serialize();
        let formselector = $("#registrationform")[0];
        let formdata = new FormData(formselector);
        $.ajax({
            url: '../database/insert.php',
            type: 'POST',
            data: formdata,
            // Required when sending FormData 
            contentType: false,
            processData: false,
            beforeSend: function() {
                $("#submitbtn").val("Submitting");
            },
            success: function(response) {
                // alert(response);
                $("#responseMessage").text(response);
                setTimeout(() => {
                    location.reload();
                }, 3000);
            },
            error: function() {
                alert("Sorry unable to submit the form");

            }
        })
    })

})
</script>