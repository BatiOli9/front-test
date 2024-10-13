document.getElementById('uploadForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('nombre', document.getElementById('nombre').value);
    formData.append('apellido', document.getElementById('apellido').value);
    formData.append('file', document.getElementById('file').files[0]);

    try {
        const response = await fetch('http://localhost:8000/analyze/uploadAnalyzePost', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();
        if (response.ok) {
            alert('Análisis subido correctamente: ' + result.imageUrl);
        } else {
            alert('Error: ' + result.message);
        }
    } catch (error) {
        console.error('Error al subir análisis:', error);
        alert('Error al subir análisis');
    }
});