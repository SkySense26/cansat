// Funzione per inizializzare il modello 3D
function caricaModello3D() {
// 1. Seleziona il contenitore HTML
const container = document.getElementById('container-3d');

// 2. Crea l'elemento model-viewer
const viewer = document.createElement('model-viewer');

// 3. Configura le proprietà del modello (COLORI INCLUSI)
viewer.src = 'modello2.glb'; // Assicurati che il file sia in questa cartella
viewer.alt = 'Scansione 3D SkySense';
viewer.ar = true;
viewer.cameraControls = true;
viewer.autoRotate = true;
viewer.shadowIntensity = 1;
viewer.exposure = 1; // Regola la luminosità dei colori
viewer.environmentImage = 'neutral'; // Ottimizza i riflessi

viewer.interactionPrompt = 'auto'; // Attiva il suggerimento (la mano)
viewer.interactionPromptThreshold = 0; // Fa apparire la mano subito (0 millisecondi)
viewer.interactionPromptStyle = 'wiggle'; // Tipo di animazione della mano
viewer.touchAction = 'pan-y'; // Rende lo scorrimento fluido su mobile

// Imposta lo stile via JS
viewer.style.width = '100%';
viewer.style.height = '100%';

// 4. Aggiungi un listener per gestire eventuali errori di caricamento
viewer.addEventListener('error', (error) => {
console.error("Errore nel caricamento del modello 3D:", error);
container.innerHTML = "<p>Impossibile caricare il modello 3D. Controlla il formato .glb!</p>";
});

// 5. Inserisci il viewer nel contenitore
container.appendChild(viewer);
}

// Avvia la funzione al caricamento della pagina
window.onload = caricaModello3D;