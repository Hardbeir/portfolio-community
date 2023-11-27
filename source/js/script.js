const apiRest = 'https://vadcher.free.beeceptor.com';

apiRest.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(apiRest);

    for (item of formData) {

        console.log(item[0], item[1]);

    }

})