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
            name: "Aldo <br> Garcia",
            imgSrc: "./images/speakers/aldo-garcia.jpg",
            imgAlt: "Foto de Aldo Garcia",
            description: "",
            p: "Skandia"
        },
        {
            name: "Roberto <br> Breedingham",
            imgSrc: "./images/speakers/roberto-breedingham.jpg", // Asegúrate de tener esta imagen
            imgAlt: "Foto de Roberto Breedingham",
            description: "Titular de Wellness Journal, experto en impulsar talentos y conexión emocional."
        },
        {
            name: "Vanya <br> Perez",
            imgSrc: "./images/speakers/vanya-perez.jpg", // Asegúrate de tener esta imagen
            imgAlt: "Foto de Vanya Perez",
            description: "Directora Comercial en Cocoon, experta en programas de transformación y resultados de negocio.",
            p: "Cocoon"
        },
        {
            name: "Tere <br> Estrada",
            imgSrc: "./images/speakers/tere-estrada.jpg", // Asegúrate de tener esta imagen
            imgAlt: "Foto de Tere Estrada",
            description: "Coach en Salud y Antiaging, experta en psicología, musicoterapia y nutrición fitness.",
            p: "Musicoterapia"        
        },
        {
            name: "Germán <br> Rodríguez",
            imgSrc: "./images/speakers/german-rodriguez.jpg", // Asegúrate de tener esta imagen
            imgAlt: "Foto de Germán Rodríguez",
            description: "Experto en mercados inmobiliarios, ingeniero por el IPN con trayectoria de más de 12 años.",
            p: "Axa"
        },
        {
            name: "Oscar <br> Viau",
            imgSrc: "./images/speakers/oscar-viau.jpg", // Asegúrate de tener esta imagen
            imgAlt: "Foto de Oscar Viau",
            description: "Ejecutivo con amplia experiencia en operaciones, digitalización y desarrollo humano.",
            p: "Red Integral"
        },
        {
            name: "Joshua <br> Aguilar",
            imgSrc: "./images/speakers/joshua-aguilar.jpg", // Asegúrate de tener esta imagen
            imgAlt: "Foto de Joshua Aguilar",
            description: "Gerente en Red Integral, especialista en transformación digital, analítica de datos e IA.",
            p: "Red Integral"
        },
        {
            name: "Raul <br> Medina",
            imgSrc: "./images/speakers/raul-medina.jpg", // Asegúrate de tener esta imagen
            imgAlt: "Foto de Raul Medina",
            description: "Lic. en Economía y Maestría en Negocios, combina experiencia financiera y docencia.",
            p: "Afore"
        },
        {
            name: "Arturo <br> Guillén",
            imgSrc: "./images/speakers/arturo-guilen.jpg", // Asegúrate de tener esta imagen
            imgAlt: "Foto de Arturo Guillén",
            description: "Lic. en Quiropráctica, líder en tratamientos ajustados a cada paciente.",
            p: "Dolorfin"
        },
        {
            name: "Nayeli <br> Meza",
            imgSrc: "./images/speakers/nayeli-meza.jpg", // Asegúrate de tener esta imagen
            imgAlt: "Foto de Nayeli Meza",
            description: "Editora en Jefe de MIT SMR México, especializada en economía, negocios e innovación.",
            p: "MIT"
        },
        {
            name: "Jorge <br> Alcántara",
            imgSrc: "./images/speakers/jorge-alcantara.jpg", // Asegúrate de tener esta imagen
            imgAlt: "Foto de Jorge Alcántara",
            description: "Lic. en Economía por la UNAM, experto en finanzas e inversiones y académico activo.",
            p: "Skandia"
        },
        {
            name: "Mafalda <br> Hurtado",
            imgSrc: "./images/speakers/mafalda-hurtado.jpg", // Asegúrate de tener esta imagen
            imgAlt: "Foto de Mafalda Hurtado",
            description: "Director Médico en Auna Oncosalud, experto en endocrinología y liderazgo en oncología.",
            p: "Auna"
        },
        {
            name: "Julián <br> Robles",
            imgSrc: "./images/speakers/julian-robles.jpg", // Asegúrate de tener esta imagen
            imgAlt: "Foto de Julián Robles",
            description: "ICF Coach y Maestro en Filosofía, especializado en desarrollo de líderes y equipos.",
            p: "Lumine"
        },
        {
            name: "Miguel <br> Hernández",
            imgSrc: "./images/speakers/miguel-hernandez.jpg", // Asegúrate de tener esta imagen
            imgAlt: "Foto de Miguel Hernández",
            description: "Profesional en nutrición funcional, combinando ciencia, innovación y salud intestinal.",
            p: "Epigenética"
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
                            <p class="speakers-item__company">${speaker.p ? speaker.p : '...'}</p>
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

    // --- Speakers: colapsar a 4 en móvil con botón "Ver todos" ---
    const speakersContainer = document.querySelector('.speakers-content');
    const speakersToggleBtn = document.getElementById('speakersToggle');

    const applySpeakersCollapseByViewport = () => {
        const isMobile = window.matchMedia('(max-width: 992px)').matches;
        if (!speakersContainer || !speakersToggleBtn) return;
        if (isMobile) {
            speakersContainer.classList.add('is-collapsed');
            speakersToggleBtn.style.display = 'inline-block';
            speakersToggleBtn.textContent = 'Ver todos';
            speakersToggleBtn.setAttribute('aria-expanded', 'false');
        } else {
            speakersContainer.classList.remove('is-collapsed');
            speakersToggleBtn.style.display = 'none';
            speakersToggleBtn.setAttribute('aria-expanded', 'true');
        }
    };

    applySpeakersCollapseByViewport();
    window.addEventListener('resize', applySpeakersCollapseByViewport);

    if (speakersToggleBtn) {
        speakersToggleBtn.addEventListener('click', () => {
            const collapsed = speakersContainer.classList.toggle('is-collapsed');
            const expanded = !collapsed;
            speakersToggleBtn.textContent = expanded ? 'Ver menos' : 'Ver todos';
            speakersToggleBtn.setAttribute('aria-expanded', String(expanded));
        });
    }

    // --- Datos y lógica de la Agenda ---
    const agendaData = [
        {
            day: 2,
            imgSrc: './images/agenda/La-verdad-de-las-finanzas-personales.jpg',
            imgAlt: 'Mujer preocupada revisando sus finanzas personales',
            title: 'La verdad incómoda de las finanzas personales',
            presenter: 'Aldo García',
            date: '20 Octubre 2025',
            time: '09:00 AM - 10:00 AM',
            dateTime: '2025-10-20T09:00',
            topic: 'Finanzas',
            link: 'https://mailchi.mp/grupomedios.com/registro-bl-verdad-incomoda-finanzas-20-oct-2025'
        },
        {
            day: 2,
            imgSrc: './images/agenda/amor-propio.jpg',
            imgAlt: 'Persona meditando en un ambiente tranquilo',
            title: 'Amor propio',
            presenter: 'Roberto Breedingham',
            date: '20 Octubre 2025',
            time: '10:00 AM - 11:30 AM',
            dateTime: '2025-10-20T10:00',
            topic: 'Salud Emocional',
            link: 'https://mailchi.mp/grupomedios.com/registro-bl-amor-propio-20-oct-2025'
        },
        {
            day: 2,
            imgSrc: './images/agenda/liderar-es-crecer-juntos.jpg',
            imgAlt: 'Grupo de personas colaborando en una oficina moderna',
            title: 'Liderar es crecer juntos',
            presenter: 'Vanya Pérez',
            date: '20 Octubre 2025',
            time: '12:00 PM - 01:00 PM',
            dateTime: '2025-10-20T12:00',
            topic: 'Liderazgo',
            link: 'https://mailchi.mp/grupomedios.com/registro-bl-liderar-crecer-juntos-20-oct-2025'
        },
        {
            day: 2,
            imgSrc: './images/agenda/paz-con-bano-de-gong.jpg',
            imgAlt: 'Persona tocando el gong',
            title: 'Elige crear tu paz con baño de Gong',
            presenter: 'Guillermo Villasana',
            date: '20 Octubre 2025',
            time: '01:30 PM - 02:30 PM',
            dateTime: '2025-10-20T13:30',
            topic: 'Salud Emocional',
            link: 'https://mailchi.mp/grupomedios.com/registro-bl-paz-con-bano-de-gong-20-oct-2025',
            // Agregar esta linea (soldOut: true) para indicar que está agotado 
            // soldOut: true
        },
        {
            day: 2,
            imgSrc: './images/agenda/Strong-funcional-ritmico.jpg',
            imgAlt: 'Funcional rítmico',
            title: 'Strong: Funcional - Rítmico',
            presenter: 'Ali Hernández',
            date: '20 Octubre 2025',
            time: '01:30 PM - 02:30 PM',
            dateTime: '2025-10-20T13:30',
            topic: 'Danzaterapia',
            link: 'https://mailchi.mp/grupomedios.com/registro-bl-strong-funcional-ritmico-20-oct-2025'
        },
        {
            day: 3,
            imgSrc: './images/agenda/interes-financiero.jpg',
            imgAlt: 'Mujer tranquila disfrutando sus relaciones personales',
            title: 'La clave para una vida sin estrés financiero',
            presenter: 'Germán Rodríguez',
            date: '21 Octubre 2025',
            time: '09:00 AM - 10:00 AM',
            dateTime: '2025-10-21T09:00',
            topic: 'Finanzas',
            link: 'https://mailchi.mp/grupomedios.com/registro-bl-vida-sin-estres-financiero-21-oct-2025'
        },
        {
            day: 3,
            imgSrc: './images/agenda/inteligencia-emocional-para-vivir-y-trabajar-mejor.jpg',
            imgAlt: 'Mujer sonriente en un entorno laboral',
            title: 'Equilibrio en acción: Inteligencia emocional para vivir y trabajar mejor',
            presenter: 'Oscar Viau Gómez',
            date: '21 Octubre 2025',
            time: '10:30 AM - 11:30 AM',
            dateTime: '2025-10-21T10:30',
            topic: 'Salud Emocional',
            link: 'https://mailchi.mp/grupomedios.com/registro-bl-equilibrio-en-accion-21-oct-2025'
        },
        {
            day: 3,
            imgSrc: './images/agenda/IA-para-un-liderazgo-asertivo.jpg',
            imgAlt: 'Mujer con gafas trabajando con una computadora portátil',
            title: 'Cómo utilizar la IA para lograr un liderazgo asertivo',
            presenter: 'Gerardo Joshua Aguilar Vasquez',
            date: '21 Octubre 2025',
            time: '12:00 PM - 01:00 PM',
            dateTime: '2025-10-21T12:00',
            topic: 'Liderazgo',
            link: 'https://mailchi.mp/grupomedios.com/registro-bl-ia-liderazgo-asertivo-21-oct-2025'
        },
        {
            day: 3,
            imgSrc: './images/agenda/introduccion-a-pmr.jpg',
            imgAlt: 'Hombre relajado con los ojos cerrados meditando',
            title: 'Introducción a PMR "Progresive Muscle Relaxation"',
            presenter: 'Tere Estrada',
            date: '21 Octubre 2025',
            time: '01:30 PM - 02:30 PM',
            dateTime: '2025-10-21T13:30',
            topic: 'Salud física',
            link: 'https://mailchi.mp/grupomedios.com/registro-bl-introduccion-a-pmr-21-oct-2025'
        },
        {
            day: 3,
            imgSrc: './images/agenda/danzaterapia.jpg',
            imgAlt: 'Mujer bailando en un entorno alegre',
            title: 'Danzaterapia',
            presenter: 'Vanya Pérez',
            date: '21 Octubre 2025',
            time: '01:30 PM - 02:30 PM',
            dateTime: '2025-10-21T13:30',
            topic: 'Salud física',
            link: 'https://mailchi.mp/grupomedios.com/registro-bl-danzaterapia-21-oct-2025'
        },
        {
            day: 4,
            imgSrc: './images/agenda/prepararme-para-mi-retiro.jpg',
            imgAlt: 'Hombre sentado pensativo',
            title: 'El camino hacia el retiro',
            presenter: 'Oscar Jiménez',
            date: '22 Octubre 2025',
            time: '09:00 AM - 10:00 AM',
            dateTime: '2025-10-22T09:00',
            topic: 'Finanzas',
            link: 'https://mailchi.mp/grupomedios.com/registro-bl-camino-hacia-el-retiro-22-oct-2025'
        },
        {
            day: 4,
            imgSrc: './images/agenda/higiene-de-la-columna.jpg',
            imgAlt: 'Mujer realizando ejercicios de estiramiento',
            title: 'Higiene de la columna',
            presenter: 'Arturo Guilén Huerta',
            date: '22 Octubre 2025',
            time: '10:30 AM - 11:30 AM',
            dateTime: '2025-10-22T10:30',
            topic: 'Salud Física',
            link: 'https://mailchi.mp/grupomedios.com/registro-bl-higiene-de-columna-22-oct-2025'
        },
        {
            day: 4,
            imgSrc: './images/agenda/5-estrategias-de-mario-bros.jpg',
            imgAlt: 'Estrellita de videojuego',
            title: 'Conéctate contigo: 5 estrategias de Mario Bros para cuidar tu salud mental en el trabajo',
            presenter: 'Nayeli Meza Orozco',
            date: '22 Octubre 2025',
            time: '12:00 AM - 01:00 PM',
            dateTime: '2025-10-22T12:00',
            topic: 'Salud emocional',
            link: 'https://mailchi.mp/grupomedios.com/registro-bl-conectate-contigo-22-oct-2025'
        },
        {
            day: 4,
            imgSrc: './images/agenda/relaja-tu-cuerpo-relaja-tu-mente.jpg',
            imgAlt: 'Mujer relajada con los ojos cerrados meditando',
            title: 'Relaja tu cuerpo, relaja tu mente',
            presenter: 'Tere Estrada',
            date: '22 Octubre 2025',
            time: '01:30 PM - 02:30 PM',
            dateTime: '2025-10-22T13:30',
            topic: 'Salud emocional',
            link: 'https://mailchi.mp/grupomedios.com/registro-bl-relaja-tu-cuerpo-relaja-tu-mente-22-oct-2025'
        },
        {
            day: 4,
            imgSrc: './images/agenda/body-balance.jpg',
            imgAlt: 'Mujeres haciendo ejercicio en un gimnasio',
            title: 'Body Balance Mix Yoya-Pilates',
            presenter: 'Guadalupe Avalos',
            date: '22 Octubre 2025',
            time: '01:30 AM - 02:30 PM',
            dateTime: '2025-10-22T13:30',
            topic: 'Salud física',
            link: 'https://mailchi.mp/grupomedios.com/registro-bl-body-balance-22-oct-2025'
        },
        {
            day: 5,
            imgSrc: './images/agenda/aprender-a-gastar.jpg',
            imgAlt: 'Mujer feliz con sus finanzas personales',
            title: 'No es ahorrar,  es aprender a gastar',
            presenter: 'Jorge Eduardo Alcántara Uribe',
            date: '23 Octubre 2025',
            time: '09:00 AM - 10:00 AM',
            dateTime: '2025-10-23T09:00',
            topic: 'Finanzas',
            link: 'https://mailchi.mp/grupomedios.com/registro-bl-aprender-a-gastar-23-oct-2025'
        },
        {
            day: 5,
            imgSrc: './images/agenda/tu-salud-tu-eleccion.jpg',
            imgAlt: 'Hombre de la tercera edad sonriendo al aire libre',
            title: 'Tu salud, tu elección: Prevenir es poder',
            presenter: 'Dra. Mafalda Hurtado ',
            date: '23 Octubre 2025',
            time: '10:30 AM - 11:30 AM',
            dateTime: '2025-10-23T10:30',
            topic: 'Salud',
            link: 'https://mailchi.mp/grupomedios.com/registro-bl-prevenir-es-poder-23-oct-2025'
        },
        {
            day: 5,
            imgSrc: './images/agenda/liderazgo-5-0.jpg',
            imgAlt: 'Manos unidas en señal de trabajo en equipo',
            title: 'Liderazgo 5.0',
            presenter: 'Julián Robles',
            date: '23 Octubre 2025',
            time: '12:00 PM - 01:00 PM',
            dateTime: '2025-10-23T12:00',
            topic: 'Liderazgo',
            link: 'https://mailchi.mp/grupomedios.com/registro-bl-liderazgo-5-0-23-oct-2025'
        },
        {
            day: 5,
            imgSrc: './images/agenda/transforma-creencias-con-el-gong.jpg',
            imgAlt: 'Gong con fondo de atardecer',
            title: 'Transforma tus creencias con el Gong',
            presenter: 'Guillermo Villasana',
            date: '23 Octubre 2025',
            time: '01:30 PM - 02:30 PM',
            dateTime: '2025-10-23T13:30',
            topic: 'Salud emocional',
            link: 'https://mailchi.mp/grupomedios.com/registro-bl-transforma-creencias-con-el-gong-23-oct-2025'
        },
        {
            day: 5,
            imgSrc: './images/agenda/estiramiento-relajante.jpg',
            imgAlt: 'Mujer realizando estiramientos',
            title: 'Stretch: Estiramiento-Relajante',
            presenter: 'Adrián Ruíz',
            date: '23 Octubre 2025',
            time: '01:30 PM - 02:30 PM',
            dateTime: '2025-10-23T13:30',
            topic: 'Salud emocional',
            link: 'https://mailchi.mp/grupomedios.com/registro-bl-estiramiento-relajante-23-oct-2025'
        },
        {
            day: 6,
            imgSrc: './images/agenda/amor-y-dinero.jpg',
            imgAlt: 'Pareja con una alcancia en forma de cerdito',
            title: 'Amor y dinero: guia para finanzas en pareja',
            presenter: 'Aldo García',
            date: '24 Octubre 2025',
            time: '09:00 AM - 10:00 AM',
            dateTime: '2025-10-24T09:00',
            topic: 'Finanzas',
            link: 'https://mailchi.mp/grupomedios.com/registro-bl-amor-y-dinero-24-oct-2025'
        },
        {
            day: 6,
            imgSrc: './images/agenda/epigenetica.jpg',
            imgAlt: 'Mujer observando genetica en una pantalla',
            title: 'Epigenética: ¿destino de enfermedad o herramienta de prevención?',
            presenter: 'Dr. Miguel Angel Hernández',
            date: '24 Octubre 2025',
            time: '10:30 AM - 11:30 AM',
            dateTime: '2025-10-24T10:30',
            topic: 'Salud',
            link: 'https://mailchi.mp/grupomedios.com/registro-bl-epigenetica-24-oct-2025'
        },
        {
            day: 6,
            imgSrc: './images/agenda/soft-power-skills-en-liderazgo.jpg',
            imgAlt: 'Mujer feliz',
            title: 'De soft a power skills en el liderazgo',
            presenter: 'Julián Robles',
            date: '24 Octubre 2025',
            time: '12:00 PM - 01:00 PM',
            dateTime: '2025-10-24T12:00',
            topic: 'Liderazgo',
            link: 'https://mailchi.mp/grupomedios.com/registro-bl-soft-power-skills-24-oct-2025'
        },
        {
            day: 6,
            imgSrc: './images/agenda/que-puede-hacer-la-musica-por-ti.jpg',
            imgAlt: 'Mujer disfrutando de un concierto',
            title: '¿Qué puede hacer la música por ti?',
            presenter: 'Tere Estrada',
            date: '24 Octubre 2025',
            time: '01:30 PM - 02:30 PM',
            dateTime: '2025-10-24T13:30',
            topic: 'Salud emocional',
            link: 'https://mailchi.mp/grupomedios.com/registro-bl-musica-por-ti-24-oct-2025'
        },
        {
            day: 6,
            imgSrc: './images/agenda/power-hits.jpg',
            imgAlt: 'Mujeres haciendo ejercicio en un gimnasio',
            title: 'Power Hits: Funcional Multinivel',
            presenter: 'Cecy Flores',
            date: '24 Octubre 2025',
            time: '01:30 PM - 02:30 PM',
            dateTime: '2025-10-24T13:30',
            topic: 'Salud física',
            link: 'https://mailchi.mp/grupomedios.com/registro-bl-power-hits-24-oct-2025'
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
            const isSoldOut = !!event.soldOut;
            const figure = `
                <figure class="agenda-item__img-container">
                    <img src="${event.imgSrc}" alt="${event.imgAlt}">
                    ${isSoldOut ? '<div class="agenda-item__soldout">Agotado</div>' : ''}
                </figure>
            `;

            const actions = isSoldOut
                ? `<button class="agenda-item__btn agenda-item__btn--disabled" disabled>Agotado</button>`
                : `<a href="${event.link || '#'}" target="_blank" class="agenda-item__btn">Registrarme aquí</a>`;

            const eventCard = `
                <div class="agenda-item">
                    ${figure}
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
                        ${actions}
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

    // --- Menú fijo: visible solo cuando el header del héroe deja de estar en viewport ---
    const heroHeader = document.querySelector('header.hero');
    const navFixed = document.getElementById('navFixed');

    if (heroHeader && navFixed) {
        // Observamos el NAV visible dentro del header (desktop o móvil)
        const getVisibleHeroNav = () => {
            const desktopNav = heroHeader.querySelector('nav.nav:not(.nav--mobile)');
            const mobileNav = heroHeader.querySelector('nav.nav--mobile');
            const mobileVisible = mobileNav && window.getComputedStyle(mobileNav).display !== 'none';
            return mobileVisible ? mobileNav : desktopNav;
        };

        let observedTarget = getVisibleHeroNav();
        let heroNavObserver;

        const createHeroNavObserver = () => {
            if (heroNavObserver) heroNavObserver.disconnect();
            observedTarget = getVisibleHeroNav();
            if (!observedTarget) return;

            heroNavObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // El nav del hero es visible, ocultamos el fijo
                        navFixed.classList.remove('is-visible');
                    } else {
                        // El nav del hero ya salió, mostramos el fijo
                        navFixed.classList.add('is-visible');
                        navFixed.classList.remove('is-hidden');
                    }
                });
            }, {
                root: null,
                threshold: 0,
                rootMargin: '0px 0px 0px 0px'
            });

            heroNavObserver.observe(observedTarget);
        };

        createHeroNavObserver();
        // Recalcular al cambiar el viewport (p. ej., pasar de desktop a móvil)
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(createHeroNavObserver, 150);
        });

        // Fallback por si IntersectionObserver no está disponible
        if (!('IntersectionObserver' in window)) {
            const heroNavBottom = () => {
                const t = getVisibleHeroNav();
                return t ? t.getBoundingClientRect().bottom : (document.querySelector('.hero')?.getBoundingClientRect().bottom || 0);
            };
            const onScroll = () => {
                if (heroNavBottom() <= 0) {
                    navFixed.classList.add('is-visible');
                    navFixed.classList.remove('is-hidden');
                } else {
                    navFixed.classList.remove('is-visible');
                }
            };
            window.addEventListener('scroll', onScroll, { passive: true });
            onScroll();
        }

        // Sin menú móvil: limpieza completa de lógica de hamburguesa/overlay

        // Menú móvil (hamburguesa) en nav fijo
        const toggleBtn = document.getElementById('navFixedToggle');
        const menu = document.getElementById('navFixedMenu');
        if (toggleBtn && menu) {
            const closeMenu = () => {
                toggleBtn.classList.remove('is-open');
                toggleBtn.setAttribute('aria-expanded', 'false');
                menu.classList.remove('is-open');
            };
            toggleBtn.addEventListener('click', () => {
                const isOpen = toggleBtn.classList.toggle('is-open');
                toggleBtn.setAttribute('aria-expanded', String(isOpen));
                menu.classList.toggle('is-open');
            });
            // Cerrar al hacer click en un link
            menu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
            // Cerrar con tecla ESC
            window.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') closeMenu();
            });
        }

        // Scroll suave con offset para enlaces del nav fijo
        navFixed.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                const targetId = link.getAttribute('href');
                const target = document.querySelector(targetId);
                if (!target) return;
                e.preventDefault();
                const offset = navFixed.getBoundingClientRect().height + 12; // pequeño padding
                const top = window.scrollY + target.getBoundingClientRect().top - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            });
        });

        // Scrollspy básico para resaltar el enlace activo
        const sections = Array.from(document.querySelectorAll('section[id], header.hero'));
        const links = Array.from(navFixed.querySelectorAll('.nav-links a'));

        const activateLink = (id) => {
            links.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === `#${id}`));
        };

        const spyObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id || 'home';
                    activateLink(id);
                }
            });
        }, { threshold: 0.4 });

        sections.forEach(sec => spyObserver.observe(sec));

        // --- Menú móvil del héroe ---
        const heroToggle = document.getElementById('heroNavToggle');
        const heroMenu = document.getElementById('heroNavMenu');
        if (heroToggle && heroMenu) {
            const closeHeroMenu = () => {
                heroToggle.classList.remove('is-open');
                heroToggle.setAttribute('aria-expanded', 'false');
                heroMenu.classList.remove('is-open');
                // Restaurar visibilidad del nav fijo según observer
                const target = observedTarget || getVisibleHeroNav();
                if (target && target.getBoundingClientRect().bottom <= 0) {
                    navFixed.classList.add('is-visible');
                    navFixed.classList.remove('is-hidden');
                }
            };
            heroToggle.addEventListener('click', () => {
                const isOpen = heroToggle.classList.toggle('is-open');
                heroToggle.setAttribute('aria-expanded', String(isOpen));
                heroMenu.classList.toggle('is-open');
                // Si se abre el menú del héroe, ocultar el nav fijo para no superponer
                if (isOpen) {
                    navFixed.classList.remove('is-visible');
                } else {
                    const target = observedTarget || getVisibleHeroNav();
                    if (target && target.getBoundingClientRect().bottom <= 0) {
                        navFixed.classList.add('is-visible');
                        navFixed.classList.remove('is-hidden');
                    }
                }
            });
            heroMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeHeroMenu));
            window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeHeroMenu(); });
        }

        // --- Auto-hide desactivado: mantener fijo visible mientras se hace scroll ---
        // Aseguramos que, cuando deba mostrarse, no tenga la clase is-hidden
        const ensureVisibleOnScroll = () => {
            if (!navFixed.classList.contains('is-visible')) return;
            navFixed.classList.remove('is-hidden');
        };
        window.addEventListener('scroll', ensureVisibleOnScroll, { passive: true });
    }
});