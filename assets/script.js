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

    // horarios
    const horariosContent = `
           <div class="side-img">
            <img src="/components/Lado.jpg" alt="Imagen lateral">
        </div>

        <div class="actividades-container">
            <div class="actividades-header">
                <button class="btn actividades-btn-header" style="background-image: url('/components/horarios.webp');">HORARIOS</button>
            </div>

            <div class="actividades-info">
                <div class="actividad-card">
                    <h3>Escuelita de Canotaje</h3>
                    <p>Lun|Mar|Mie 14:30 - 16:30</p>
                </div>

                <div class="actividad-card">
                    <h3>Entrada por el día</h3>
                    <p>Todos los dias 10:00 - 19:00</p>
                </div>

                <div class="actividad-card">
                    <h3>Juegos inflables acuáticos</h3>
                    <p> Lunes a Viernes 13:00 - 18:00</p>
                </div>
            </div>

            <div class="back-btn-container">
                <button class="btn back-btn" style="background-image: url('/components/volver.webp');">VOLVER</button>
            </div>
        </div>

        <div class="side-img">
            <img src="/components/Lado.jpg" alt="Imagen lateral">
        </div>
    `;

    // actividades
    const actividadesContent = `
        <div class="side-img">
            <img src="/components/Lado.jpg" alt="Imagen lateral">
        </div>

        <div class="actividades-container">
            <div class="actividades-header">
                <button class="btn actividades-btn-header" style="background-image: url('/components/actividades.webp');">ACTIVIDADES</button>
            </div>

            <div class="actividades-info">
                <div class="actividad-card">
                    <h3>Escuelita de Canotaje</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipiscing elit ut condimentum sollicitudin, molestie nostra vitae porta. Lacus sed</p>
                </div>

                <div class="actividad-card">
                    <h3>Entrada por el día</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipiscing elit ut condimentum sollicitudin, molestie nostra vitae porta. Lacus sed</p>
                </div>

                <div class="actividad-card">
                    <h3>Juegos inflables acuáticos</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipiscing elit ut condimentum sollicitudin, molestie nostra vitae porta. Lacus sed</p>
                </div>
            </div>

            <div class="back-btn-container">
                <button class="btn back-btn" style="background-image: url('/components/volver.webp');">VOLVER</button>
            </div>
        </div>

        <div class="side-img">
            <img src="/components/Lado.jpg" alt="Imagen lateral">
        </div>
    `;

    function showActividades() {
        const main = document.querySelector('main');
        
        main.classList.add('fade-out');
        
        setTimeout(() => {
            main.innerHTML = actividadesContent;
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
            
            const actividadesBtn = document.querySelector('.btn:nth-child(2)');
            if (actividadesBtn) {
                actividadesBtn.addEventListener('click', showActividades);
            }
        }, 500);
    }

    const horariosBtn = document.querySelector('.horarios-btn');
    if (horariosBtn) {
        horariosBtn.addEventListener('click', showHorarios);
    }
    
    const actividadesBtn = document.querySelector('.btn:nth-child(2)');
    if (actividadesBtn) {
        actividadesBtn.addEventListener('click', showActividades);
    }
});