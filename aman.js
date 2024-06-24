const containerBody = document.querySelector('.container-body');
        const hiddenContainer = document.querySelector('.hidden-section');
        const imgContainer = document.querySelectorAll('.container-body img');
        const container = document.querySelector('.container');

        // Loop through the NodeList and add event listeners to each image
        imgContainer.forEach(img => {
            img.addEventListener('click', () => {
                containerBody.style.display = 'none';
                hiddenContainer.style.display = 'flex';
            });
        });