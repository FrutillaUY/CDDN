document.addEventListener('DOMContentLoaded', function() {
    // Contenido original del main
    const originalMainContent = `
        <div class="side-img">
            <img src="/components/Lado.jpg" alt="Imagen lateral">
        </div>

        <div class="menu-buttons">
            <button class="btn horarios-btn" style="background-image: url('/components/horarios.webp');">HORARIOS</button>
            <button class="btn" style="background-image: url('/components/actividades.webp');">ACTIVIDADES</button>
            <button class="btn" style="background-image: url('/components/planes.webp');">PLANES</button>
            <button class="btn" style="background-image: url('/components/contacto.webp');">CONTACTO</button>
            <button class="btn" style="background-image: url('/components/ubicacion.webp');">UBICACION</button>
            <button class="btn" style="background-image: url('/components/extras.webp');">EXTRAS</button>
        </div>

        <div class="side-img">
            <img src="/components/Lado.jpg" alt="Imagen lateral">
        </div>
    `;

    // Contenido de horarios
    const horariosContent = `
        <div class="horarios-btn-container">
            <button class="btn back-btn" style="background-image: url('/components/volver.webp');">VOLVER</button>
        </div>

        <div class="side-img">
            <img src="/components/Lado.jpg" alt="Imagen lateral">
        </div>

        <div class="horarios-info">
            <div class="horario-card">
                <h3>Escuelita de Canotaje</h3>
                <p>Lunes Miércoles y Viernes</p>
                <p class="time">13:00 - 16:00hs</p>
            </div>

            <div class="horario-card">
                <h3>Entrada por el día</h3>
                <p>Todos los días</p>
                <p class="time">10:00 - 19:00hs</p>
            </div>

            <div class="horario-card">
                <h3>Juegos inflables acuáticos</h3>
                <p>Lunes Miércoles y Viernes</p>
                <p class="time">13:00 - 16:00hs</p>
            </div>
        </div>

        <div class="side-img">
            <img src="/components/Lado.jpg" alt="Imagen lateral">
        </div>
    `;

    function showHorarios() {
        const main = document.querySelector('main');
        
        main.classList.add('fade-out');
        
        setTimeout(() => {
            main.innerHTML = horariosContent;
            main.classList.remove('fade-out');
            main.classList.add('fade-in');
            
            setTimeout(() => {
                main.classList.remove('fade-in');
            }, 500);
            
            const backBtn = document.querySelector('.back-btn');
            if (backBtn) {
                backBtn.addEventListener('click', showMainMenu);
            }
        }, 500);
    }

    function showMainMenu() {
        const main = document.querySelector('main');
        
        main.classList.add('fade-out');
        
        setTimeout(() => {
            main.innerHTML = originalMainContent;
            main.classList.remove('fade-out');
            main.classList.add('fade-in');
            
            setTimeout(() => {
                main.classList.remove('fade-in');
            }, 500);
            
            const horariosBtn = document.querySelector('.horarios-btn');
            if (horariosBtn) {
                horariosBtn.addEventListener('click', showHorarios);
            }
        }, 500);
    }

    const horariosBtn = document.querySelector('.horarios-btn');
    if (horariosBtn) {
        horariosBtn.addEventListener('click', showHorarios);
    }
});