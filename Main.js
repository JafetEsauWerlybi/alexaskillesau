// componente.js
import React from 'react';

const Componente = () => {
  return (
    <div>
      <header>
        <h1>Bienvenido a mi Componente</h1>
      </header>
      <main>
        <section>
          <h2>Sección de Introducción</h2>
          <p>Este es un párrafo dentro de la sección de introducción.</p>
          <button onClick={() => alert('¡Botón clickeado!')}>Haz clic en mí</button>
        </section>

        <section>

          <h2>Otra Sección</h2>
          <ul>
            <li>UNO</li>
            <li>DOS</li>
            <li>TRES</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Mi Componente</p>
      </footer>
    </div>
  );
};

export default Componente;
