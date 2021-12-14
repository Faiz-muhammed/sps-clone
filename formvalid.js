$("#registration_form").validate({
    rules: {
        Full_name: {
            required: true
        },
        Place: {
            required: true
        },
        age: {
            required: true,
            number: true
        },
        Email: {
            required: true
        },
        Contact_no: {
            required: true,
            number: true,
            minlength: 10
        },
        employment_status: {
            required: true
        },
        education: {
            required: true
        },
        organisation: {
            required: true
        },
        graduation: {
            required: true
        },
        tell_us: {
            required: true,
            minlength: 5
        },
        join_sps: {
            required: true
        },
        motivates: {
            required: true
        },
        know_sps: {
            required: true
        },
        agree: {
            required: true
        }




    },
    messages: {
        Full_name: {
            required: 'Full name is mandatory!'
        }
    },
    submitHandler: function(form) {
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbzY7YcW9ncm8g-49qmheVsysIlWwnGUY087k_7XW0x-L1BmlOcIo-N14TqAplglDLh-/exec",
            data: $("#registration_form").serialize(),
            method: "post",
            success: function(response) {
                alert("Message submitted successfully")
                window.location.reload()
            },
            error: function(err) {
                alert("Something Error")
            }
        })
    }
})