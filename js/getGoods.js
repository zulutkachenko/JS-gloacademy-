const getGoods = () => {
    const links = document.querySelectorAll('.navigation-link');

    const getData = () => {
        fetch('https://gloacademyles2-default-rtdb.firebaseio.com/db.json')
            .then((res) => res.json())
            .then((data) => {
                localStorage.setItem('dbgoods', JSON.stringify(data));
            })
    }

    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            getData();
        })
    })

}

getGoods()