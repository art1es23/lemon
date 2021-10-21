const wheelMainPage = (page) => {
    console.log("IM WHEEL SPINNER");
    const s = page.querySelectorAll('.section');
    let delay = false;

    let rotateDeg = 360 / s.length;

    page.addEventListener('wheel', e => {
        e.preventDefault();
        e = e || window.event;
        let s = page.querySelectorAll('.section');

        if (delay) return;
        delay = true;
        setTimeout(function () {
            delay = false;
        }, 1250);

        console.log(rotateDeg);

        let delta = e.deltaY || e.detail;

        for (let i = 0; i <= s.length; i++) {
            let rotateAngle = s[i].style.transform;

            if (delta < 0) {

                for (let j = i; j <= s.length; j++) {
                    e.preventDefault();

                    let joinArr = parseInt(rotateAngle.split("").slice(8, length - 4).join(''));
                    s[i].style.transform = `rotateZ(${joinArr - rotateDeg}deg)`;
                }
            } else {
                for (let j = i; j <= s.length; j++) {
                    e.preventDefault();

                    let joinArr = parseInt(rotateAngle.split("").slice(8, length - 4).join(''));
                    s[i].style.transform = `rotateZ(${joinArr + rotateDeg}deg)`;
                }
            }
            e.stopPropagation();

            if (s[i].style.transform === 'rotateZ(0deg)' || s[i].style.transform === 'rotateZ(360deg)') {
                s[i].classList.add('section--active');
            } else {
                s[i].classList.remove('section--active');
            }

        }
    });

    page.addEventListener('touchmove', function (e) {
        this.dispatchEvent(new Event('wheel'));
        console.log(this.dispatchEvent(new Event('wheel')));
    });


    if (s[0].style.transform === 'rotateZ(360deg)' || s[0].style.transform === 'rotateZ(-360deg)') {
        s.forEach(k => {
            let sliderData = k.dataset.slider;

            console.log(sliderData);
            k.style.transform = `rotateZ(${sliderData * rotateDeg}deg)`;
        });
    }

    s.forEach(element => {
        let sliderData = element.dataset.slider;

        console.log(sliderData);
        element.style.transform = `rotateZ(${sliderData * rotateDeg}deg)`;
    });

    // for (let i = 0; i <= s.length; i++) {
    //     s[i].style.transform = `rotateZ(${i * rotateDeg}deg)`;
    // }

};

export default wheelMainPage;