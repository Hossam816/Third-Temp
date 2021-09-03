

//all vars
var model = document.getElementById('01452'),

    lito = document.getElementById('nav'),

    btn = document.getElementById('show'),

    list1 = document.getElementById('lista'),

    hc = document.getElementById('hea'),

    bottunUp = document.getElementById("btnup"),

    lage = document.getElementById('for-change'),

    nab = document.getElementById('chose-pic'),

    pre = document.getElementById('openpre'),

    imgpre = document.getElementById('98722'),

    spe = document.getElementById('222'),

    spa = document.getElementById('223'),

    spt = document.getElementById('224'),

    tex = document.getElementById('01452'),

    ac = document.getElementById('openac'),

    bring = document.getElementById('adw'),

    tex1 = document.getElementById('1235'),

    spm = document.getElementById('225'),

    spn = document.getElementById('226'),

    imglen = document.getElementById('887799'),

    len = document.getElementById('openle'),

    spo = document.getElementById('227'),

    spp = document.getElementById('228'),

    spu = document.getElementById('229'),

    tex2 = document.getElementById('112233');



//show and hide laps pics

//predator pics

pre.onclick = function () {
    "use strict";
    if (imgpre.style.display === "none") {
        imgpre.style.display = "grid";
        document.getElementById('557788').style.display = "none";
        imglen.style.display = "none"
        tex2.style.display = "none"
        tex1.style.display = "none"

    } else
        imgpre.style.display = "none";
    tex.style.display = "none";
    document.getElementById('557788').style.display = "none";
    imglen.style.display = "none"

}

spe.onclick = function () {
    "use strict";

    if (tex.style.display === "none") {
        tex.style.display = "block";
    } else {
        tex.style.display = "none";
    }
}
spa.onclick = function () {
    "use strict";

    if (tex.style.display === "none") {
        tex.style.display = "block";
    } else {
        tex.style.display = "none";
    }
}
spt.onclick = function () {
    "use strict";

    if (tex.style.display === "none") {
        tex.style.display = "block";
    } else {
        tex.style.display = "none";
    }
}
//acer pics
ac.onclick = function () {
    "use strict";

    if (document.getElementById('557788').style.display === "none") {

        document.getElementById('557788').style.display = "grid";
        imgpre.style.display = "none";
        imglen.style.display = "none";
        document.querySelector(".pre-info").style.display = "none";
        tex2.style.display = "none"


    } else {
        document.getElementById('557788').style.display = "none";
        imgpre.style.display = "none";
        imglen.style.display = "none"

    }
}

bring.getElementsByTagName('span')[0].onclick = function () {
    "use strict";
    if (tex1.style.display === "none") {
        tex1.style.display = "block";
    } else {
        tex1.style.display = "none";

    }

}
bring.getElementsByTagName('span')[0].onclick = function () {
    "use strict";
    if (tex1.style.display === "none") {
        tex1.style.display = "block";
    } else {
        tex1.style.display = "none";

    }

}
spm.onclick = function () {
    "use strict";
    if (tex1.style.display === "none") {
        tex1.style.display = "block";
    } else {
        tex1.style.display = "none";

    }

}
spn.onclick = function () {
    "use strict";
    if (tex1.style.display === "none") {
        tex1.style.display = "block";
    } else {
        tex1.style.display = "none";

    }

}

//lenovo pics

len.onclick = function () {
    "use strict";

    if (imglen.style.display === 'none') {
        imglen.style.display = "grid";
        imgpre.style.display = "none";
        document.getElementById('557788').style.display = "none";
        document.querySelector(".pre-info").style.display = "none";
        tex1.style.display = "none"


    } else {
        imglen.style.display = "none"
        imgpre.style.display = "none";
        document.getElementById('557788').style.display = "none";

    }
}

spp.onclick = function () {
    "use strict";

    if (tex2.style.display === 'none') {
        tex2.style.display = "block";
    } else {
        tex2.style.display = "none";

    }
}
spo.onclick = function () {
    "use strict";

    if (tex2.style.display === 'none') {
        tex2.style.display = "block";
    } else {
        tex2.style.display = "none";

    }
}
spu.onclick = function () {
    "use strict";

    if (tex2.style.display === 'none') {
        tex2.style.display = "block";
    } else {
        tex2.style.display = "none";

    }
}





window.onclick = function (event) {
    if (event.target == model) {
        model.style.display = 'none';
    }
}

//styling the menu bar
window.onscroll = function () {
    "use strict";
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        lito.style.background = "#000000";
        lito.style.height = "73px";
        lito.style.width = "100%";
        lito.style.margin = "0px"
        //list1.style.background = "#ffffff";
        bottunUp.style.display = "block";
        btn.getElementsByClassName('sp')[0].style.background = "white";
        btn.getElementsByClassName('sp')[1].style.background = "white";
        btn.getElementsByClassName('sp')[2].style.background = "white";

    } else {
        lito.style.background = "#000000";
        btn.getElementsByClassName('sp')[0].style.background = "";
        btn.getElementsByClassName('sp')[1].style.background = "";
        btn.getElementsByClassName('sp')[2].style.background = "";
        lito.style.marginTop = "50px";
        lito.style.width = "50%";
        lito.style.marginLeft = "25%";
        list1.style.background = "";
        list1.style.margin = "";
        btn.style.marginTop = "";
        hc.style.marginTop = "";
        bottunUp.style.display = "";

    }
    const showcase1 = document.querySelector('.show-1');
    const showcase2 = document.querySelector('.show-2');
    const showcase3 = document.querySelector('.show-3');
    const imgcontainer = document.querySelector('.img-container');
    const row2 = document.querySelector('.row-2')



    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        showcase1.style.animation = 'topdown1 1.25s ease-out'
        showcase2.style.animation = ' topdown2 1.25s ease-out'
        showcase3.style.animation = ' topdown3 1.25s ease-out'

    }
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        imgcontainer.style.animation = 'leftright 1.25s ease-out';
        row2.style.animation = 'rightleft 1.25s ease-out'
    }


};
//Animation all 





//show the menu bar

btn.addEventListener('click', function () {
    "use strict";
    list1.classList.toggle('opena')
    btn.classList.toggle('active')
    list1.classList.remove('close')
});

(function () {
    'use strict';
    const hideList = document.querySelectorAll('#lista');
    hideList.forEach(function (a) {
        a.addEventListener('click', function () {
            list1.classList.add('close')
            btn.classList.remove('active')
            list1.classList.remove('opena')
        })
    })
})();




// toggle between the bed pic
lage.firstElementChild.onclick = function () {
    "use strict";

    nab.firstElementChild.style.opacity = "1";
    nab.childNodes[3].style.opacity = "0";
    nab.childNodes[5].style.opacity = "0";
    this.style.background = "#666666";
    lage.childNodes[3].style.background = "#000000";
    lage.childNodes[5].style.background = "#000000";

};

lage.childNodes[3].onclick = function () {
    "use strict";

    nab.firstElementChild.style.opacity = "0";
    nab.childNodes[3].style.opacity = "1";
    nab.childNodes[5].style.opacity = "0";
    lage.firstElementChild.style.background = "#000000";
    lage.childNodes[3].style.background = "#666666";
    lage.childNodes[5].style.background = "#000000";
};

lage.childNodes[5].onclick = function () {
    "use strict";

    nab.firstElementChild.style.opacity = "0";
    nab.childNodes[3].style.opacity = "0";
    nab.childNodes[5].style.opacity = "1";
    lage.firstElementChild.style.background = "#000000";
    lage.childNodes[3].style.background = "#000000";
    lage.childNodes[5].style.background = "#666666";
};
//show bed section 

document.getElementById('bed-sh').onclick = function () {
    "use strict";
    if (nab.style.display === "none") {

        nab.style.display = "block";

    } else {
        nab.style.display = "none";
    }
}

//living room
const modal = document.querySelector('.info-img')
const shows = document.querySelectorAll('.img-container img')
const img = document.querySelector('.full-img')
const text = document.querySelector('.caption')
console.log(shows)

shows.forEach(function (show) {
    show.addEventListener('click', function () {
        modal.classList.add('open');
        img.classList.add('open');
        const originalsrc = show.getAttribute('data-original')
        img.src = `image/furniture/chair/${originalsrc}`
        const altText = show.alt
        text.textContent = altText
    })
})

modal.addEventListener('click', function (e) {
    if (e.target.classList.contains('info-img')) {
        modal.classList.remove('open')
        img.classList.remove('open')
    }
})


// make loding page 

window.onload = function () {
    setTimeout(function () {
        "use strict"
        document.getElementById('gf').style.animation = "outcome 3.1s ease-out";
        document.getElementById('gf').addEventListener('animationend', function () {
            document.getElementById('gf').style.display = "none";

        })
    }, 200)
}


