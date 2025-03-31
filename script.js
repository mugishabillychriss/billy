// Wait for the document to load before adding functionality
document.addEventListener("DOMContentLoaded", function () {

    const orderForm = document.getElementById('orderForm');
    const orderMessage = document.getElementById('orderMessage');

    orderForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form from submitting the default way

        // Capture form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const clothing = document.getElementById('clothing').value;
        const size = document.getElementById('size').value;
        const quantity = document.getElementById('quantity').value;

        // Validation check (just in case)
        if (name && email && clothing && size && quantity) {
            // Create the message to be sent
            const orderDetails = `
                New Order Received:
                Name: ${name}
                Email: ${email}
                Clothing Item: ${clothing}
                Size: ${size}
                Quantity: ${quantity}
            `;

            // For this example, we'll just simulate an email by logging to the console
            console.log(orderDetails);

            // Display a confirmation message to the user
            orderMessage.classList.remove('hidden');
            orderMessage.textContent = 'Your order has been placed successfully!';
        } else {
            // Show an error if form is not valid
            orderMessage.classList.remove('hidden');
            orderMessage.textContent = 'Please fill out all fields!';
            orderMessage.style.color = 'red';
        }

        // Optionally, reset the form after submission
        orderForm.reset();
    });

});
