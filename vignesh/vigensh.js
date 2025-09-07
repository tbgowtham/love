document.getElementById("hotelForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let checkin = document.getElementById("checkin").value;
  let checkout = document.getElementById("checkout").value;
  let guests = document.getElementById("guests").value;
  let room = document.getElementById("room").value;

  let details = `
    <strong>Check-in:</strong> ${checkin} <br>
    <strong>Check-out:</strong> ${checkout} <br>
    <strong>Guests:</strong> ${guests} <br>
    <strong>Room Type:</strong> ${room}
  `;

  document.getElementById("details").innerHTML = details;
  document.getElementById("confirmation").classList.remove("hidden");
});