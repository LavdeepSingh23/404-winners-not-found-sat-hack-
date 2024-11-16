document.addEventListener("DOMContentLoaded", () => {
    const parkingLot = document.getElementById("parking-lot");
    const slotSelect = document.getElementById("slot");
    const reservationForm = document.getElementById("reservation-form");
    const feedback = document.getElementById("feedback");

    // Initialize parking slots
    const slots = Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        occupied: Math.random() > 0.7, // Randomly set some slots as occupied
    }));

    function renderParkingLot() {
        parkingLot.innerHTML = "";
        slotSelect.innerHTML = "";
        slots.forEach((slot) => {
            const slotDiv = document.createElement("div");
            slotDiv.className = slot ${slot.occupied ? "occupied" : ""};
            slotDiv.textContent = slot.id;
            if (!slot.occupied) {
                const option = document.createElement("option");
                option.value = slot.id;
                option.textContent = Slot ${slot.id};
                slotSelect.appendChild(option);
            }
            parkingLot.appendChild(slotDiv);
        });
    }

    reservationForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const slotId = parseInt(slotSelect.value, 10);
        const slot = slots.find((s) => s.id === slotId);

        if (slot && !slot.occupied) {
            slot.occupied = true;
            feedback.textContent = Slot ${slotId} has been reserved!;
            feedback.style.color = "green";
            renderParkingLot();
        } else {
            feedback.textContent = Slot ${slotId} is no longer available.;
            feedback.style.color = "red";
        }
    });

    renderParkingLot();
});
