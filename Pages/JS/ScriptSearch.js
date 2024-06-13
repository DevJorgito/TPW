document.addEventListener("DOMContentLoaded", () => {
    const izquierdaCeldas = document.querySelectorAll(".tabla.izquierda td");
    const contenidoDerecha = document.getElementById("contenido-derecha");
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");

    izquierdaCeldas.forEach(celda => {
        celda.addEventListener("mouseover", () => {
            celda.style.fontWeight = "bold";
            celda.style.transform = "scale(1.05)";
        });

        celda.addEventListener("mouseout", () => {
            celda.style.fontWeight = "normal";
            celda.style.transform = "scale(1)";
        });

        celda.addEventListener("click", () => {
            if (!celda.classList.contains("regiones")) {
                contenidoDerecha.innerHTML = `
                    <tr>
                        <td>2024</td>
                        <td>${celda.textContent}</td>
                        <td>${celda.textContent} Localidad</td>
                        <td>Resultado de ${celda.textContent}</td>
                    </tr>
                `;
            }
        });
    });

    searchButton.addEventListener("click", () => {
        const query = searchInput.value.toLowerCase();
        const results = [];

        izquierdaCeldas.forEach(celda => {
            if (!celda.classList.contains("regiones")) {
                if (celda.textContent.toLowerCase().includes(query)) {
                    results.push(celda.textContent);
                }
            }
        });

        contenidoDerecha.innerHTML = results.map(result => `
            <tr>
                <td>2024</td>
                <td>${result}</td>
                <td>${result} Localidad</td>
                <td>Resultado de ${result}</td>
            </tr>
        `).join('') || `<tr><td colspan="4">No se encontraron resultados</td></tr>`;
    });
});
