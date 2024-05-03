$(function () {
    // Your array of objects containing questions and answers
    const faqs = [
        { question: "Must my Pharmacy be registered?", answer: "Yes. Your business should be registered with the right authorities." },
        { question: "Does Medloc accept all the banks?", answer: "Yes, all the CBN approved banks can be used for ..." },
        { question: "Who pays for the delivery of drugs?", answer: "The cost of dispatch delivery is on the shoulder of the both patient and the pharmacy at the ratio of 60:40 respectively" },
        { question: "Can I add other items?", answer: "The cost of dispatch delivery is on the shoulder of the both patient and the pharmacy at the ratio of 60:40 respectively" },
        { question: "Who pays for the delivery of drugs?", answer: "The cost of dispatch delivery is on the shoulder of the both patient and the pharmacy at the ratio of 60:40 respectively" }
        // Add more question-answer pairs as needed
    ];

    // Function to create HTML for a single FAQ item
    function createFaqItem(faq) {
        const faqItem = $('<div class="faq-item">').append(
            $('<div class="question font-bold w-full cursor-pointer truncate flex mb-4">').text(faq.question).append('<i class="fa fa-caret-down ml-2"></i>'),
            $('<div class="answer">').text(faq.answer),
            $('<hr class="w-full mt-4 mb-4">') // Add horizontal rule after each question-answer pair
        );

        // Hide answer initially
        faqItem.find('.answer').hide();

        // Toggle visibility of answer when question is clicked
        faqItem.find('.question').on('click', function() {
            const answer = $(this).siblings('.answer');
            const icon = $(this).find('i.fa');

            $('.answer').not(answer).slideUp(); // Close other answers
            $('.fa-caret-down').not(icon).removeClass('fa-rotate-180'); // Reset other icons

            answer.slideToggle(); // Toggle visibility of clicked answer
            icon.toggleClass('fa-rotate-180'); // Rotate the clicked icon
        });

        return faqItem;
    }

    // Function to populate FAQs in the container
    function populateFaqs() {
        const faqContainer = $('#faq-container');
        faqContainer.empty(); // Clear previous content

        // Create and append HTML for each FAQ item
        faqs.forEach(faq => {
            const faqItem = createFaqItem(faq);
            faqContainer.append(faqItem);
        });
    }

    // Populate FAQs when the page loads
    populateFaqs();
});
