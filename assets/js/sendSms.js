
document.querySelectorAll('.vehicule').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        if (e.target.id === "location-form") {
            const ville = document.getElementById("ville").value.trim();
            const dateDepart = document.getElementById("date-depart").value.trim();
            const dateRetour = document.getElementById("date-retour").value.trim();
            const typeVehicule = document.getElementById("type-vehicule").value.trim();

            if (!ville || !dateDepart || !dateRetour || !typeVehicule) {
                alert("Veuillez remplir tous les champs avant de continuer.");
                return;
            }

            const message = `
                *Demande de réservation de véhicule :*

                *🗺️ Ville :* ${ville}
                *📅 Date de départ :* ${dateDepart}
                *📅 Date de retour :* ${dateRetour}
                *🚗 Type de véhicule :* ${typeVehicule}
                        `.trim();

            const numero = "2250719093910";
            const url = `https://wa.me/${numero}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        }
        else {
            const carCard = this.closest('.car-rentals-items');
            const title = carCard.querySelector('h4 a').textContent.trim();
            const price = carCard.querySelector('h6').textContent.trim();
            const model = carCard.querySelector('.post-cat').textContent.trim();
            const reviews = carCard.querySelector('.star span').textContent.trim();

            const icons = carCard.querySelectorAll('.icon-items ul li');
            const seats = icons[0]?.textContent.trim() || '';
            const doors = icons[1]?.textContent.trim() || '';
            const transmission = icons[2]?.textContent.trim() || '';
            const fuel = icons[3]?.textContent.trim() || '';

            const message =
                `*Demande de réservation de voiture* 🚗\n\n` +
                `*Modèle* : ${model}\n` +
                `*Nom* : ${title}\n` +
                `*Prix* : ${price}\n` +
                `*Avis* : ${reviews}\n\n` +
                `*Nombre de places* : ${seats}\n` +
                `*Portes* : ${doors}\n` +
                `*Transmission* : ${transmission}\n` +
                `*Carburant* : ${fuel}\n\n` +
                `Merci de me confirmer la disponibilité.`

            const phone = '2250719093910';
            const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        }
    });
});

