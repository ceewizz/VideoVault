// Future vesrion of validation will make an api call to tik tok itself to check for existence of video. 
function isValidTikTokUrl(url) {
    const tiktokRegex = /^https:\/\/www\.tiktok\.com\/@[\w.-]+\/video\/\d+$/;
    return tiktokRegex.test(url);
}
// Function to toggle input states
function toggleInputStates() {
    const typeSelect = document.querySelector('#type').value;
    const locationSelect = document.querySelector('#location').value;
    const urlInput = document.querySelector('#url');
    const fileInput = document.querySelector('#file');
    const folderNameInput = document.querySelector('#folder-name');

    // Toggle URL input and File input based on type selection
    if (typeSelect === 'Local Image') {
        urlInput.disabled = true;
        fileInput.disabled = false;
        urlInput.value = '';
    } else {
        urlInput.disabled = false;
        fileInput.disabled = true;
        if (fileInput.files.length) {
            fileInput.value = '';
        }
    }

    // Toggle folder name input based on location selection
    if (locationSelect === 'New Folder') {
        folderNameInput.disabled = false;
    } else {
        folderNameInput.disabled = true;
        folderNameInput.value = ''; // Clear input if disabled
    }
}

// Event listener for type selection
document.querySelector('#type').addEventListener('change', toggleInputStates);

// Event listener for location selection
document.querySelector('#location').addEventListener('change', toggleInputStates);



const uploadFormHandler = async (event) => {
    event.preventDefault();

    const typeSelect = document.querySelector('#type').value;
    const locationSelect = document.querySelector('#location').value;
    const folderNameInput = document.querySelector('#folder-name').value.trim();
    const urlInput = document.querySelector('#url').value.trim();
    const itemNameInput = document.querySelector('#name').value.trim();
    const fileInput = document.querySelector('#file').files[0];
    // if (!typeSelect || !locationSelect || !folderNameInput || !urlInput || !itemNameInput) {
    //     document.getElementById('error-message').textContent = 'Missing Field';
    //     showModal();
    //     return;
    // }

    if(typeSelect === 'URL') {
        if (!isValidTikTokUrl(urlInput)) {
            document.getElementById('error-message').textContent = 'Invalid TikTok URL. Please use the format: https://www.tiktok.com/@user/video/id';
            showModal();
            return;
        }
    }
    if (typeSelect === 'URL') {
        if (locationSelect === 'New Folder' && !folderNameInput || !urlInput || !itemNameInput) {
            document.getElementById('error-message').textContent = 'Missing Field';
            showModal();
            return;
        }
    } else if (typeSelect === 'URL' && folderNameInput !== 'New Folder' ) {
        if (!urlInput || !itemNameInput) {
            document.getElementById('error-message').textContent = 'Missing Field';
            showModal();
            return;
        }
    } else if (typeSelect ==='Local Image') {
        if (locationSelect === 'New Folder' && !folderNameInput || !itemNameInput || !fileInput) {
            document.getElementById('error-message').textContent = 'Missing Field or Upload';
            showModal();
            return;
        }
    } else if (typeSelect ==='Local Image' && folderNameInput !== 'New Folder' ) {
        if (!itemNameInput) {
            document.getElementById('error-message').textContent = 'Missing Field';
            showModal();
            return;
        }
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

// Initialize input states on page load
document.addEventListener('DOMContentLoaded', toggleInputStates);

//Upload form selector
const uploadForm = document.querySelector('#upload-form');
if (uploadForm) {
    uploadForm.addEventListener('submit', uploadFormHandler);
}