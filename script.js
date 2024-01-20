function submitForm() {
     var feedbackText = document.getElementById("feedback").value;
         console.log("Feedback submitted: " + feedbackText);
            document.getElementById("feedbackForm").reset();
            return false;
}