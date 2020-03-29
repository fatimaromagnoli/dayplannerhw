$(document).ready(function(){
    const $date = $(".date");
    const $inputsForm = $(".inputs");
    const hours = ['9 AM','10 AM','11 AM','12 AM','1 PM','2 PM','3 PM','4 PM','5 PM',];
    const currentH = moment().format("H");

    $date.text(moment().format('llll'));

    for(let i in hours){
        const iTime = parseInt(i) + 9;
        const $inputGroupDiv = $("<div>");
        const $input = $("<input>");
        const $hourDiv = $("<div>");
        const $buttonDiv = $("<div>");
        const $saveBtn = $("<button>");
        const $saveIcon = $("<i>");

        $inputGroupDiv.addClass("input-group mb-3");
        $input.addClass("form-control").attr("type", "text");
        $hourDiv.addClass("input-group-prepend input-group-text").text(hours[i]);
        $buttonDiv.addClass("input-group-append");
        $saveBtn.addClass("btn btn-primary saveButton")
        // $saveBtn.attr("type", "submit");
        $saveIcon.addClass("material-icons").text("save");
        
        if(iTime > currentH){
            $input.addClass("future");
        } else if(iTime < currentH){
            $input.addClass("past");
        } else{
            $input.addClass("current");
        }

        if(localStorage.getItem(hours[i])){
            $input.val(localStorage.getItem(hours[i]));
        }

        $saveBtn.append($saveIcon);
        $buttonDiv.append($saveBtn);
        $inputGroupDiv.append($hourDiv, $input, $buttonDiv);
        $inputsForm.append($inputGroupDiv);
    }

    $(document).on('click', ".saveButton", function(e){
        e.preventDefault();
        const inputVal = $(this).parents('.input-group-append').siblings('input').val();
        const inputHour = $(this).parents('.input-group-append').siblings('.input-group-text').text();
        console.log(inputHour);
        // add a separate attr that assigns a number to each input
        
            localStorage.setItem(inputHour, inputVal);
    })
})

