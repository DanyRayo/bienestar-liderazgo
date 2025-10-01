document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica del contador ---
    const countdown = () => {
        const countDate = new Date('October 20, 2025 00:00:00').getTime();
        const now = new Date().getTime();
        const gap = countDate - now;

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const textDay = Math.floor(gap / day);
        const textHour = Math.floor((gap % day) / hour);
        const textMinute = Math.floor((gap % hour) / minute);
        const textSecond = Math.floor((gap % minute) / second);

        document.getElementById('days').innerText = textDay < 10 ? '0' + textDay : textDay;
        document.getElementById('hours').innerText = textHour < 10 ? '0' + textHour : textHour;
        document.getElementById('minutes').innerText = textMinute < 10 ? '0' + textMinute : textMinute;
        document.getElementById('seconds').innerText = textSecond < 10 ? '0' + textSecond : textSecond;
    };

    setInterval(countdown, 1000);

    // --- Datos y lógica de los Ponentes ---
    const speakersData = [
        {
            name: "Roberto <br> Breedingham",
            imgSrc: "./images/speakers/roberto-breedingham.png",
            imgAlt: "Foto de Roberto Breedingham",
            description: "Conector de vida con 30 años de experiencia en México y Francia, especializado en comunicación y literatura. Facilita herramientas para descubrir talentos, conectar emocionalmente y transformarse en la mejor versión de uno mismo."
        },
        {
            name: "Ana <br> López",
            imgSrc: "./images/speakers/ana-lopez.png", // Asegúrate de tener esta imagen
            imgAlt: "Foto de Ana López",
            description: "Psicóloga experta en mindfulness y gestión del estrés. Ayuda a profesionales a encontrar el equilibrio y mejorar su bienestar a través de técnicas de meditación y autoconciencia."
        },
        {
            name: "Carlos <br> Gómez",
            imgSrc: "./images/speakers/carlos-gomez.png", // Asegúrate de tener esta imagen
            imgAlt: "Foto de Carlos Gómez",
            description: "Asesor financiero con más de 15 años de experiencia en planificación de patrimonios y finanzas personales. Apasionado por educar a las personas para que tomen el control de su futuro económico."
        }
    ];

    const speakersContent = document.querySelector('.speakers-content');

    function renderSpeakers() {
        speakersContent.innerHTML = ''; // Limpiar contenido
        speakersData.forEach(speaker => {
            const speakerCardHTML = `
                <div class="speaker-card">
                    <div class="speaker-card-inner">
                        <div class="speakers-item">
                            <figure class="speakers-item__img-container">
                                <img src="${speaker.imgSrc}" alt="${speaker.imgAlt}" class="speakers-item__img">
                            </figure>
                            <b class="speakers-item__name">${speaker.name}</b>
                            <p>...</p>
                            <i class="bi bi-arrow-right-circle-fill speakers-item__icon"></i>
                        </div>
                        <div class="speakers-item__back">
                            <b class="speakers-item__name">${speaker.name}</b>
                            <hr class="speakers-item__divider">
                            <p class="speakers-item__description">${speaker.description}</p>
                        </div>
                    </div>
                </div>
            `;
            speakersContent.innerHTML += speakerCardHTML;
        });
    }

    renderSpeakers(); // Llamar a la función para generar los ponentes

    // --- Datos y lógica de la Agenda ---
    const agendaData = [
        {
            day: 2,
            imgSrc: './images/agenda/finanzas.jpg',
            imgAlt: 'Mujer preocupada revisando sus finanzas personales',
            title: 'La verdad incómoda de las finanzas personales',
            presenter: 'Roberto Breedingham',
            date: '20 Octubre 2025',
            time: '10:30 AM',
            dateTime: '2025-10-20T10:30',
            topic: 'Finanzas'
        },
        {
            day: 2,
            imgSrc: './images/agenda/salud-mental.jpg',
            imgAlt: 'Persona meditando en un ambiente tranquilo',
            title: 'Mindfulness en el trabajo: reduce el estrés y aumenta la productividad',
            presenter: 'Ana López',
            date: '20 Octubre 2025',
            time: '12:00 PM',
            dateTime: '2025-10-20T12:00',
            topic: 'Salud Emocional'
        },
        {
            day: 3,
            imgSrc: './images/agenda/liderazgo.jpg',
            imgAlt: 'Líder de equipo motivando a su grupo',
            title: 'Liderazgo empático: Conectando con tu equipo',
            presenter: 'Carlos Gómez',
            date: '21 Octubre 2025',
            time: '09:00 AM',
            dateTime: '2025-10-21T09:00',
            topic: 'Liderazgo'
        },
        {
            day: 4,
            imgSrc: './images/agenda/nutricion.jpg',
            imgAlt: 'Plato con comida saludable y colorida',
            title: 'Nutrición para una mente activa',
            presenter: 'Sofía Martín',
            date: '22 Octubre 2025',
            time: '11:00 AM',
            dateTime: '2025-10-22T11:00',
            topic: 'Salud Física'
        }
    ];

    const agendaContent = document.querySelector('.agenda-content');
    const dateButtons = document.querySelectorAll('.agenda-dates__btn');

    function renderAgenda(day) {
        agendaContent.innerHTML = ''; // Limpiar el contenido actual
        const filteredEvents = agendaData.filter(event => event.day == day);

        if (filteredEvents.length === 0) {
            agendaContent.innerHTML = '<p class="agenda-empty">No hay ponencias programadas para este día.</p>';
            return;
        }

        filteredEvents.forEach(event => {
            const eventCard = `
                <div class="agenda-item">
                    <figure class="agenda-item__img-container">
                        <img src="${event.imgSrc}" alt="${event.imgAlt}">
                    </figure>
                    <div class="agenda-item__details">
                        <h3 class="agenda-item__title">${event.title}</h3>
                        <p class="agenda-item__presenter"><b>Presentado por:</b> ${event.presenter}</p>
                        <div class="agenda-item__meta">
                            <p class="agenda-item__date"><b>Fecha:</b> <time datetime="${event.dateTime}">${event.date}</time></p>
                            <p class="agenda-item__time"><b>Hora:</b> <time datetime="${event.dateTime}">${event.time}</time></p>
                        </div>
                    </div>
                    <div class="agenda-item__actions">
                        <span class="agenda-item__topic">Temática: ${event.topic}</span>
                        <a href="#" class="agenda-item__btn">Registrarme aquí</a>
                    </div>
                </div>
            `;
            agendaContent.innerHTML += eventCard;
        });
    }

    dateButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Actualizar el botón activo
            dateButtons.forEach(btn => btn.classList.remove('agenda-dates__btn--active'));
            button.classList.add('agenda-dates__btn--active');

            // Renderizar los eventos para el día seleccionado
            const selectedDay = button.getAttribute('data-day');
            renderAgenda(selectedDay);
        });
    });

    // Renderizar los eventos del primer día por defecto
    const initialDay = document.querySelector('.agenda-dates__btn--active').getAttribute('data-day');
    renderAgenda(initialDay);
});