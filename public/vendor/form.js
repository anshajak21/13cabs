$(document).ready(function() {
    const dateFormat = "dd.mm.yy"; // Ensure this format is consistent with your Datepicker configuration
    const startDateFrom = new Date();
    startDateFrom.setHours(0, 0, 0, 0);

    // Initialize Datepickers
    const to = $("#return_date").datepicker({ minDate: startDateFrom, dateFormat });
    const from = $("#transfer_date").datepicker({ minDate: startDateFrom, dateFormat }).on("change", function () {
        to.datepicker("option", "minDate", getDate(this));
    });

    function getDate(element) {
        try {
            return $.datepicker.parseDate(dateFormat, $(element).val()) || startDateFrom;
        } catch (error) {
            console.log('datepicker error', error);
            return startDateFrom;
        }
    }

    // Time pickable input handler
    $(".time-pickable").on("focus", function () {
        const $timePickable = $(this);
        if ($timePickable.data('activePicker')) return;

        const activePicker = buildPicker($timePickable);
        $('body').append(activePicker);
        $timePickable.data('activePicker', activePicker);

        const offset = $timePickable.offset();
        activePicker.css({ top: offset.top + $timePickable.outerHeight(), left: offset.left });

        $(document).on("mousedown", function(event) {
            if (!$.contains(activePicker[0], event.target) && event.target !== $timePickable[0]) {
                activePicker.remove();
                $timePickable.removeData('activePicker');
            }
        });
    });

    // Function to build time picker
    function buildPicker($timePickable) {
        const hours = generateOptions([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
        const minutes = generateOptions([0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]);
        const $picker = $(`
            <div class="time-picker">
                <select class="time-picker__select">${hours}</select>:
                <select class="time-picker__select">${minutes}</select>
                <select class="time-picker__select">
                    <option value="am">am</option>
                    <option value="pm">pm</option>
                </select>
            </div>
        `);

        const $selects = getSelectsFromPicker($picker);

        $selects.hour.on("change", updateTimePickable);
        $selects.minute.on("change", updateTimePickable);
        $selects.meridiem.on("change", updateTimePickable);

        if ($timePickable.val()) {
            const { hour, minute, meridiem } = getTimePartsFromPickable($timePickable);
            $selects.hour.val(hour);
            $selects.minute.val(minute);
            $selects.meridiem.val(meridiem);
        }

        return $picker;

        function updateTimePickable() {
            $timePickable.val(getTimeStringFromPicker($picker));
        }
    }

    function generateOptions(numbers) {
        return numbers.map(number => `<option value="${String(number).padStart(2, '0')}">${String(number).padStart(2, '0')}</option>`).join("");
    }

    function getSelectsFromPicker($picker) {
        const $selects = $picker.find(".time-picker__select");
        return { hour: $selects.eq(0), minute: $selects.eq(1), meridiem: $selects.eq(2) };
    }

    function getTimeStringFromPicker($picker) {
        const $selects = getSelectsFromPicker($picker);
        return `${$selects.hour.val()}:${$selects.minute.val()} ${$selects.meridiem.val()}`;
    }

    function getTimePartsFromPickable($timePickable) {
        const match = $timePickable.val().match(/^(\d+):(\d+) (am|pm)$/);
        if (match) {
            const [, hour, minute, meridiem] = match;
            return { hour, minute, meridiem };
        }
        return { hour: '00', minute: '00', meridiem: 'am' };
    }

    // Event for count container buttons
    $(document).on("click", ".count-container button", function () {
        const id = $(this).data('id');
        const button = $(this).data('type');
        const inType = $(this).data('input-id');
        const passengers = $(`#${inType}-${id}`);
        let process = parseInt(passengers.val(), 10);

        process = button === 'increase' ? process + 1 : button === 'decrease' ? process - 1 : process;

        if (process < 1 && id !== 'adults') process = 0;
        if (process < 1 && id === 'adults') process = 1;

        $("#" + id + " .count").html(process);
        passengers.val(process);

        updatePassengerCount();
    });

    // Update passengers count display
    function updatePassengerCount() {
        const passengersTotal = ['adults', 'children', 'infants', 'wheelchair']
            .reduce((total, type) => total + parseInt($(`#passengers-${type}`).val() || 0), 0);

        $("#passengers").val(passengersTotal === 1 ? `${passengersTotal} Passenger` : `${passengersTotal} Passengers`);
    }

    // Event for saving passengers data
    $(document).on("click", "#passenger-save", function () {
        $("#dropdown-passengers").hide();
    });

    // Generalized dropdown input handling (passenger, baggage, etc.)
    function setupDropdownInputHandlers() {
        const dropdownElements = ['passengers', 'baggage', 'cab-type', 'return-cab-type', 'occasion', 'wheelchairs', 'carseat'];
        dropdownElements.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.addEventListener('focus', function () {
                    $('.dropdown-list').css("display", "none");
                    $(`#dropdown-${id}`).css("display", "flex");
                    setTimeout(() => {
                        const element = document.getElementById(`dropdown-${id}`);
                        element.scrollTop = 1450;
                    }, 100);
                });

                $(document).on("click", `.${id}-item`, function () {
                    element.value = $(this).html();
                    $(`#dropdown-${id}`).hide();
                });
            }
        });
    }

    setupDropdownInputHandlers();

    // Close dropdowns when clicking outside
    $(document).click(function (event) {
        const target = $(event.target);
        if (!target.closest('.dropdown-list').length && !target.closest('.input-with-icon').length) {
            $('.dropdown-list').hide();
        }
    });

    // Handle form submission and validation
    $('#form-booking').on('submit', function (e) {
        e.preventDefault();
        handleFormSubmission(this);
    });

    $('#form-advance-booking').on('submit', function (e) {
        e.preventDefault();
        handleFormSubmission(this);
    });
    
    $('#form-booking button[type="submit"]').on('click', function() {
        $('#form-booking button[type="submit"]').removeClass('clicked');
        $(this).addClass('clicked');
    });

    $('#form-advance-booking button[type="submit"]').on('click', function() {
        $('#form-advance-booking button[type="submit"]').removeClass('clicked');
        $(this).addClass('clicked');
    });

    function handleFormSubmission(form) {
        // Remove existing error messages and hidden subject fields
        $('.error').removeClass('error');
        $('.error-message').remove();
        $('input[name="subject"]').remove();

        // Validate required fields
        let isValid = true;
        $(form).find('[required]').each(function () {
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
            return;
        }

        const subjectText = $(form).find('button[type="submit"].clicked').data('subject') || 'default-subject';
        $('<input>', { type: 'hidden', name: 'subject', value: subjectText }).appendTo(form);
        

        // Prepare form data
        const formData = new FormData(form);
        const filteredData = {};
        formData.forEach((value, key) => {
            if (value.trim() !== "" && value.trim() !== "0" && value !== null) {
                filteredData[key] = value.trim();
            }
        });

        const emailContent = formatEmailTemplate(filteredData, subjectText);
        sendFormDataToServer(emailContent, subjectText);
    }

    function formatEmailTemplate(filteredData, subject) {
        let emailTemplate = `
            <div style="font-family: Arial, sans-serif; color: #333;">
                <h2 style="background-color: #068445; color: #fff; padding: 10px; text-align: center; border-radius: 8px;">
                ${subject} - ApexCabs
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
    function sendFormDataToServer(html_content, subject) {
        const url = "https://zffd4gxxgkk4gbjvzqdhng7ndy0bqljf.lambda-url.ap-southeast-2.on.aws";
        $.ajax({
            url,
            type: 'POST',
            headers: {
                "Access-Control-Allow-Origin" : "*",
                "Content-Type": "application/json"
            },
            data: JSON.stringify({ subject, html_content }),
            success: function (response) {
                const data = response;
                if (data.message === "Email sent successfully") {
                    document.getElementById('form-booking').reset(); // Reset the form
                    openpopup("Thank You for Filling Out the Form!", "We’ve received your information and are processing your request. Our team will get back to you shortly to confirm your booking.", false);
                } else {
                    openpopup("Something went wrong", "Didn't get your query. Please resend it.", true);
                }
            },
            error: function (error) {
                console.error('Error:', error);
                openpopup("Something went wrong", "Didn't get your query. Please resend it.", true);
            }
        });
    }
    function openpopup(head="Thank you",line, error=false) {
        let html = `
        <div class="popup open-popup ${error?'popup-error': ''}" id="popup">
            ${error? (
                '<svg class="popup-img" width="200" height="200" viewBox="0 0 3.75 3.75" xmlns="http://www.w3.org/2000/svg"><path d="m.66.318 1.215 1.214 1.21-1.21A.23.23 0 0 1 3.25.25.25.25 0 0 1 3.5.5a.23.23 0 0 1-.068.165L2.21 1.875l1.222 1.222a.23.23 0 0 1 .068.153.25.25 0 0 1-.25.25.23.23 0 0 1-.172-.068L1.875 2.217.663 3.429A.23.23 0 0 1 .5 3.5a.25.25 0 0 1-.25-.25.23.23 0 0 1 .068-.165l1.222-1.21L.318.652A.23.23 0 0 1 .25.5.25.25 0 0 1 .5.25a.23.23 0 0 1 .16.068"/></svg>'
            ): (
                '<svg class="popup-img" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 13 13" xml:space="preserve"><path d="M4.775 10.625.65 6.475a.39.39 0 0 1 0-.55l.55-.55c.15-.15.4-.15.55 0L4.85 8.5c.1.1.275.1.375 0L11.3 2.375c.15-.15.4-.15.55 0l.55.55c.15.15.15.4 0 .55l-7.075 7.15a.354.354 0 0 1-.55 0"/></svg>'
            )}
            <h6>${head}</h6>
            <p>${line}</p>
            <button type="button" onclick="closepopup()">OK</button>
        </div>`;
        const newDiv = document.createElement("div");
        newDiv.innerHTML = html;
        document.getElementsByTagName('body')[0].appendChild(newDiv);
    }
});
function closepopup(id="popup") {
    document.getElementById(id).remove();
}
