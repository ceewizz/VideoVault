const uploadFormHandler = async (event) => {
    event.preventDefault();

    const typeSelect = document.querySelector('#type').value;
    const locationSelect = document.querySelector('#location').value;
    const folderNameInput = document.querySelector('#folder-name').value.trim();
    const urlInput = document.querySelector('#url').value.trim();
    const itemNameInput = document.querySelector('#name').value.trim();
    // const fileInput = document.querySelector('#file').files[0];
    if (!typeSelect || !locationSelect || !folderNameInput || !urlInput || !itemNameInput) {
        document.getElementById('error-message').textContent = 'Missing Field';
        showModal();
        return;
    }

    try {
        // Send a POST request with the form data
        const response = await fetch('/api/items/upload', { 
            method: 'POST',
            body: JSON.stringify({ typeSelect, locationSelect, folderNameInput, urlInput, itemNameInput }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            console.log('Upload successful!');
            document.location.replace('/upload'); 
            // Using modal, but for confirmation of upload.
            document.getElementById('error-message').textContent = 'Upload Successful!';
            showModal();
        } else {
            const result = await response.json();
            // console.log('Something went wrong:', result.message);
            // Using modal, but for confirmation of upload.
            document.getElementById('error-message').textContent = 'Upload failed, please try again later.';
            showModal();
        }
    } catch (error) {
        // console.error('Error');
        document.getElementById('error-message').textContent = 'Upload failed, please try again later.';
        showModal();
    }
};

//Upload form selector
const uploadForm = document.querySelector('#upload-form');
if (uploadForm) {
    uploadForm.addEventListener('submit', uploadFormHandler);
}