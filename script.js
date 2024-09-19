document.getElementById("leaveForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get form values
    var name = document.getElementById("name").value;
    var id = document.getElementById("id").value;
    var hostel = document.getElementById("hostel").value;
    var roomNo = document.getElementById("roomNo").value;
    var departureDate = new Date(document.getElementById("departureDate").value);
    var returnDate = new Date(document.getElementById("returnDate").value);
    var reason = document.getElementById("reason").value;

    // Format the departure and return dates using the formatDate function
    var formattedDepartureDate = formatDate(departureDate);
    var formattedReturnDate = formatDate(returnDate);

    // Set values in the status section
    document.getElementById("displayName").textContent = name;
    document.getElementById("displayId").textContent = id;
    document.getElementById("displayHostel").textContent = hostel;
    document.getElementById("displayRoomNo").textContent = roomNo;
    document.getElementById("displayDeparture").textContent = formattedDepartureDate;
    document.getElementById("displayReturn").textContent = formattedReturnDate;
    document.getElementById("displayReason").textContent = reason;

    document.getElementById("welcomeMessage").textContent = `WELCOME, ${name}`;

    var today = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var formattedDate = today.toLocaleDateString('en-US', options);
    document.getElementById("currentDate").textContent = ` ${formattedDate} |`;

    // Get current date for application date
    var appliedDate = today.toISOString().split('T')[0];
    document.getElementById("displayAppliedDate").textContent = appliedDate;

    // Hide the form and show the status section
    document.getElementById("leaveForm").style.display = "none";
    document.getElementById("statusSection").style.display = "block";

    // Function to format the date as DD-MMM-YYYY
    function formatDate(date) {
        var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var day = date.getDate();
        var month = monthNames[date.getMonth()];
        var year = date.getFullYear();
        return `${day}-${month}-${year}`;
    }
});
