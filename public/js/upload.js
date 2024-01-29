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

    const formData = new FormData();
    formData.append('typeSelect', typeSelect);
    formData.append('locationSelect', locationSelect);
    formData.append('folderNameInput', folderNameInput);
    formData.append('itemNameInput', itemNameInput);

    if (typeSelect === 'Local Image') {
        const fileInput = document.querySelector('#file').files[0];
        if (fileInput) {
            formData.append('file', fileInput);
        } else {
            // Handle error for missing file
            document.getElementById('error-message').textContent = 'Please select a file to upload';
            showModal();
            return;
        }
    } else {
        formData.append('urlInput', urlInput);
    }

    try {
        const response = await fetch('/api/items/upload', { 
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            // console.log('Upload successful!');
            // folderNameInput.value = '';
            // urlInput.value = '';
            // itemNameInput.value = '';
            // Using modal, but for confirmation of upload.
            document.getElementById('error-message').textContent = 'Upload Successful!';
            showModal();
        } else {
            // Work on failed response messages
            const result = await response.json();
            console.error('Upload failed:', result.message);
        }
    } catch (error) {
        // Work on failed response messages
        console.error('Error during upload:', error);
    }
};

//Upload form selector
const uploadForm = document.querySelector('#upload-form');
if (uploadForm) {
    uploadForm.addEventListener('submit', uploadFormHandler);
}