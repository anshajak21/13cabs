$(document).on("click", ".count-container button", function (e) {

    var id = $(this).attr('data-id');
    var button = $(this).attr('data-type');
    var inType = $(this).attr('data-input-id');
    var passengers = $(`#${inType}-${id}`);
    var getCount = passengers.val();

    if (button == 'increase') {
        var process = parseInt(getCount) + 1
    }

    if (button == 'decrease') {
        var process = parseInt(getCount) - 1
    }

    if (process < 1) {
        if(id == 'adults') {
            var process = 1;
        } else {
            var process = 0;
        }
    }

    $("#" + id + " .count").html(process);
    passengers.val(parseInt(process));

    if (inType === "passengers") {
        let passengers_adult = parseInt($('#passengers-adults').val());
        let passengers_children = parseInt($('#passengers-children').val());
        let passengers_infants = parseInt($('#passengers-infants').val());
        let passengers_wheelchair = parseInt($('#passengers-wheelchair').val());
    
        let passengers_total = parseInt(passengers_adult + passengers_children + passengers_infants + passengers_wheelchair);
    
        $("#passengers").val(passengers_total + " Passenger(s)");
    } else {
        let baggage_large = parseInt($('#baggage-luggage').val(), 0);
        let baggage_medium = parseInt($('#baggage-skis').val(), 0);
        let baggage_small = parseInt($('#baggage-bicycle').val(), 0);
        let baggage_golf = parseInt($('#baggage-golf-bags').val(), 0);
        let baggage_surfboard = parseInt($('#baggage-surfboard').val(), 0);
        let baggage_total = parseInt(baggage_large + baggage_medium + baggage_small + baggage_surfboard + baggage_golf);
    
        $("#baggage").val(baggage_total + " Luggage(s)");
    }
})

$(document).on("click", "#passenger-save", function (e) {
    $("#dropdown-passengers").css("display", "none");
})

var currentTime = new Date();
var startDateFrom = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate());

var dateFormat = "dd.mm.yy"; // Ensure this format is consistent with your Datepicker configuration

to = $("#return_date").datepicker({
    minDate: startDateFrom,
    dateFormat: dateFormat // Set the date format
});

from = $("#transfer_date").datepicker({
    minDate: startDateFrom,
    dateFormat: dateFormat // Set the date format
}).on("change", function () {
    var selectedDate = getDate(this);
    to.datepicker("option", "minDate", selectedDate);
});

function getDate(element) {
    var date;
    try {
        date = $.datepicker.parseDate(dateFormat, $(element).val());
    } catch (error) {
        console.log('datepicker error', error);
        date = startDateFrom;
    }
    return date;
}

var input_passengers    = document.getElementById('passengers');
var input_baggages      = document.getElementById('baggage');
var transfer_time       = document.getElementById('transfer_time');
var return_time         = document.getElementById('return_time');

$(document).on("click", ".time-item", function (e) {
    console.log($(this).html());
    transfer_time.value = $(this).html();
    $("#dropdown-transfer-time").css("display", "none");
})


$(document).on("click", ".return-cab-type-item", function (e) {
    console.log($(this).html());
    return_cabType.value = $(this).html();
    $("#dropdown-return-cab-type").css("display", "none");

})

$(document).on("click", ".return-time-item", function (e) {
    console.log($(this).html());
    return_time.value = $(this).html();
    $("#dropdown-return-time").css("display", "none");

})

input_passengers.addEventListener('focus', function () {
    $("#dropdown-passengers").css("display", "flex");
});

input_baggages.addEventListener('focus', function () {
    $("#dropdown-baggage").css("display", "flex");
});

$(document).ready(function(){
    $(document).click(function(event) {
        var target = $(event.target);
        if(!target.closest('.dropdown-list').length && !target.closest('.input-with-icon').length) {
            $('.dropdown-list').hide();
        }
    });
});

try {
    var cabType             = document.getElementById('cabType');
    var return_cabType      = document.getElementById('return_cabType');
    cabType.addEventListener('focus', function () {
        $("#dropdown-cab-type").css("display", "flex");
    
        setTimeout(function () {
            const element = document.getElementById("dropdown-cab-type");
            element.scrollTop = 1450;
    
        }, 100);
    });
    
    $(document).on("click", ".cab-type-item", function (e) {
        console.log($(this).html());
        cabType.value = $(this).html();
        $("#dropdown-cab-type").css("display", "none");
    
    })
    
    return_cabType.addEventListener('focus', function () {
        $("#dropdown-return-cab-type").css("display", "flex");
    
        setTimeout(function () {
            const element = document.getElementById("dropdown-return-cab-type");
            element.scrollTop = 1450;
    
        }, 100);
    });
} catch (error) {
    
}

try {
    $(document).ready(function() {
        function activate() {
            $(".time-pickable").each(function() {
                var $timePickable = $(this);
                var activePicker = null;

                $timePickable.on("focus", function() {
                    if (activePicker) return;

                    // Create and show the picker
                    activePicker = buildPicker($timePickable);
                    $('body').append(activePicker); // Append to body or appropriate container

                    // Position the picker near the input field
                    var offset = $timePickable.offset();
                    activePicker.css({
                        top: offset.top + $timePickable.outerHeight(),
                        left: offset.left
                    });

                    function onClickAway(event) {
                        var $target = $(event.target);

                        if (
                            $target.is(activePicker) ||
                            $target.is($timePickable) ||
                            $.contains(activePicker[0], $target[0])
                        ) {
                            return;
                        }

                        $(document).off("mousedown", onClickAway);
                        activePicker.remove();
                        activePicker = null;
                    }

                    $(document).on("mousedown", onClickAway);
                });
            });
        }

        function buildPicker($timePickable) {
            var hourOptions = generateOptions([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
            var minuteOptions = generateOptions([0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]);

            var $picker = $('<div class="time-picker"></div>');
            $picker.html(`
                <select class="time-picker__select">${hourOptions}</select>
                :
                <select class="time-picker__select">${minuteOptions}</select>
                <select class="time-picker__select">
                    <option value="am">am</option>
                    <option value="pm">pm</option>
                </select>
            `);

            var $selects = getSelectsFromPicker($picker);

            function updateTimePickable() {
                $timePickable.val(getTimeStringFromPicker($picker));
            }

            $selects.hour.on("change", updateTimePickable);
            $selects.minute.on("change", updateTimePickable);
            $selects.meridiem.on("change", updateTimePickable);

            if ($timePickable.val()) {
                var { hour, minute, meridiem } = getTimePartsFromPickable($timePickable);
                $selects.hour.val(hour);
                $selects.minute.val(minute);
                $selects.meridiem.val(meridiem);
            }

            return $picker;
        }

        function generateOptions(numbers) {
            return numbers.map(function(number) {
                var padded = number.toString().padStart(2, "0");
                return `<option value="${padded}">${padded}</option>`;
            }).join("");
        }

        function getSelectsFromPicker($picker) {
            var $selects = $picker.find(".time-picker__select");
            return {
                hour: $selects.eq(0),
                minute: $selects.eq(1),
                meridiem: $selects.eq(2)
            };
        }

        function getTimeStringFromPicker($picker) {
            var $selects = getSelectsFromPicker($picker);
            return `${$selects.hour.val()}:${$selects.minute.val()} ${$selects.meridiem.val()}`;
        }

        function getTimePartsFromPickable($timePickable) {
            var pattern = /^(\d+):(\d+) (am|pm)$/;
            var match = $timePickable.val().match(pattern);
            
            if (match) {
                var [, hour, minute, meridiem] = match;
                return { hour, minute, meridiem };
            }
            return { hour: '00', minute: '00', meridiem: 'am' }; // Default fallback
        }

        activate();
    });
    
} catch (error) {
    
}

try {
    function formatEmailTemplate(filteredData, subject) {
        let emailTemplate = `
            <div style="font-family: Arial, sans-serif; color: #333;">
                <h2 style="background-color: #068445; color: #fff; padding: 10px; text-align: center; border-radius: 8px;">
                ${subject} - ApexMaxiCabs
                </h2>
                <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                    <thead>
                        <tr>
                            <th style="text-align: left; background-color: #fffc65; color: #000; padding: 8px; border-bottom: 2px solid #f8b400;">
                                Field
                            </th>
                            <th style="text-align: left; background-color: #fffc65; color: #000; padding: 8px; border-bottom: 2px solid #f8b400;">
                                Value
                            </th>
                        </tr>
                    </thead>
                    <tbody>
        `;
    
        for (const [key, value] of Object.entries(filteredData)) {
            emailTemplate += `
                <tr style="background-color: #eaeaea;">
                    <td style="padding: 8px; border-bottom: 1px solid #ccc;">
                        ${key.replace(/-/g, ' ')}
                    </td>
                    <td style="padding: 8px; border-bottom: 1px solid #ccc;">
                        ${value}
                    </td>
                </tr>
            `;
        }
    
        emailTemplate += `
                    </tbody>
                </table>
                <p style="text-align: center; font-size: 14px; color: #888; margin-top: 20px;">
                    This is an automated message. Please do not reply.
                </p>
            </div>
        `;
    
        return emailTemplate;
    }
    $(document).ready(function() {
        $('#form-search').on('submit', function(e) {
            e.preventDefault(); // Prevent the default form submission
    
            // Remove existing error messages and hidden subject fields
            $('.error').removeClass('error');
            $('.error-message').remove();
            $('input[name="subject"]').remove();
    
            // Initialize validity flag
            let isValid = true;
    
            // Validate required fields
            $('#form-search [required]').each(function() {
                if (!$(this).val().trim()) {
                    isValid = false;
                    $(this).addClass('error');
                    if (!$(this).next('.error-message').length) {
                        $(this).parent().after('<span class="error-message">This field is required.</span>');
                    }
                }
            });
    
            if (!isValid) {
                alert('Please fill in all required fields.');
                return; // Stop form submission if validation fails
            }
    
            // Get the text of the clicked submit button and add it as a hidden subject field
            const subjectText = $(this).find('button[type="submit"].clicked').data('subject') || 'default-subject';
            $('<input>', {
                type: 'hidden',
                name: 'subject',
                value: subjectText
            }).appendTo('#form-search');
    
            // Prepare form data, filtering out empty, null, or zero values
            let formData = new FormData(this);
            let filteredData = {};
    
            formData.forEach((value, key) => {
                const val = value.trim()
                if (val !== "" && val !== "0" && val !== null) {
                    filteredData[key] = val;
                }
            });
    
            // Serialize filtered form data
            const serializedData = formatEmailTemplate(filteredData, subjectText);
              
              // Submit the form data via AJAX
            const url = "https://zffd4gxxgkk4gbjvzqdhng7ndy0bqljf.lambda-url.ap-southeast-2.on.aws";
            const payload = {
                subject: subjectText,
                html_content: serializedData
            };

            // Use fetch to submit the form data
            fetch(url, {
                method: "POST",
                headers: {
                    "Access-Control-Allow-Origin" : "*",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            })
            .then(response => response.json()) // Parse JSON response
            .then(data => {
                if (data.message === "Email sent successfully") {
                    document.getElementById('form-search').reset(); // Reset the form
                    openpopup("Thank You for Filling Out the Form!", "We’ve received your information and are processing your request. Our team will get back to you shortly to confirm your booking.", false);
                } else {
                    openpopup("Something went wrong", "Didn't get your query. Please resend it.", true);
                }
            })
            .catch(error => {
                console.error('Error:', error);
                openpopup("Something went wrong", "Didn't get your query. Please resend it.", true);
            });

        });
    
        // Add 'clicked' class to the submit button when clicked
        $('#form-search button[type="submit"]').on('click', function() {
            $('#form-search button[type="submit"]').removeClass('clicked');
            $(this).addClass('clicked');
        });
    });
} catch (error) {
    
}
function openpopup(head="Thank you",line, error=false) {
    let html = `
    <div class="popup open-popup ${error?'popup-error': ''}" id="popup">
        ${error? (
            '<svg class="popup-img" width="200" height="200" viewBox="0 0 3.75 3.75" xmlns="http://www.w3.org/2000/svg"><path d="m.66.318 1.215 1.214 1.21-1.21A.23.23 0 0 1 3.25.25.25.25 0 0 1 3.5.5a.23.23 0 0 1-.068.165L2.21 1.875l1.222 1.222a.23.23 0 0 1 .068.153.25.25 0 0 1-.25.25.23.23 0 0 1-.172-.068L1.875 2.217.663 3.429A.23.23 0 0 1 .5 3.5a.25.25 0 0 1-.25-.25.23.23 0 0 1 .068-.165l1.222-1.21L.318.652A.23.23 0 0 1 .25.5.25.25 0 0 1 .5.25a.23.23 0 0 1 .16.068"/></svg>'
        ): (
            '<svg class="popup-img" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 13 13" xml:space="preserve"><path d="M4.775 10.625.65 6.475a.39.39 0 0 1 0-.55l.55-.55c.15-.15.4-.15.55 0L4.85 8.5c.1.1.275.1.375 0L11.3 2.375c.15-.15.4-.15.55 0l.55.55c.15.15.15.4 0 .55l-7.075 7.15a.354.354 0 0 1-.55 0"/></svg>'
        )}
        <h2>${head}</h2>
        <p>${line}</p>
        <button type="button" onclick="closepopup()">OK</button>
    </div>`;
    const newDiv = document.createElement("div");
    newDiv.innerHTML = html;
    document.getElementsByTagName('body')[0].appendChild(newDiv);
}
function closepopup(id="popup") {
    document.getElementById(id).remove();
}