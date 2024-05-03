$(function () {
    // Initialize the stage variable
    let stage = 1;

    function updateStyling(){
        $('#info,#line-1, #2,#payment-det,#line-2, #3, #line-3').removeClass('text-green-500 border-green-500 bg-green-500');

        if(stage > 1){
            $('#line-1').addClass('bg-green-500');
            $('#2').addClass('text-green-500 border-green-500');
            $('#info').addClass('text-green-500')
        }
        if(stage === 3){
            $('#3').addClass('border-green-500 text-green-500')
            $('#line-2').addClass('bg-green-500')
            $('#payment-det').addClass('text-green-500')
        }
    }
    $('#name').focus(function () {
        $('.label').addClass('text-green-500');
    });

    // Event handler for blur on input with id 'name'
    $('#name').blur(function () {
        $('.label').removeClass('text-green-500');
    });

    // Initial hiding/showing of steps based on stage
    toggleSteps();
    updateStyling()

    // Event handler for click on element with id 'continue'
    $('#continue, #back-to-2').on('click', function(){
        // Update the stage variable when 'continue' is clicked
        stage = 2;
        toggleSteps();
        updateStyling()
    });

    $('#to-stage-3').on('click', function(){
        // Update the stage variable when 'continue' is clicked
        stage = 3;
        toggleSteps();
        updateStyling()
    });
    $('#back-to-1').on('click', function(){
        // Update the stage variable when 'continue' is clicked
        stage = 1;
        toggleSteps();
        updateStyling()
    });


    // Function to toggle visibility of steps based on stage
    function toggleSteps() {
        $('#step-1, #step-2, #step-3').hide(); // Hide all steps initially
        if (stage === 1) {
            $('#step-1').show();
        } else if (stage === 2) {
            $('#step-2').show();
        } else if (stage === 3) {
            $('#step-3').show();
        }
    }
    updateStyling()
});
