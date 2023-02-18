class App {
     root = document.getElementById('root');

    postGen(imgSrc, target, title, descricaoPost) {
        // divs
        const divPost             =    document.createElement('div');
        const divTitle            =    document.createElement('div');
        const divImg              =    document.createElement('div');
        const divDescri           =    document.createElement('div');

        // objects(img, video, etc...)
        const img                 =    document.createElement('img');

        // title
        divTitle.className        =    "post_title";
        divTitle.innerHTML        =    `<h2>${title}</h2>`;

        // img post
        divImg.className          =    "post_img";
        // img
        img.className             =    "imgP";
        img.src                   =    imgSrc;
        img.width                 =    300;
        img.height                =    350;
        
        // description
        divDescri.className       =    "post_description";
        divDescri.innerHTML       =    `<p>${descricaoPost}</p>`;

        divImg.appendChild(img);

        divPost.appendChild(divTitle);
        divPost.appendChild(divImg);
        divPost.appendChild(divDescri);
        target.appendChild(divPost);
    }

    makeVideo(src,title, descricao, target) {
       const divVideo             =    document.createElement('div');
       const video                =    document.createElement('video');
       const divTitle             =    document.createElement('div');
       const divDescription       =    document.createElement('div');

       // title
       divTitle.className         =    "titleVid";
       divTitle.innerHTML         =    `<h1>${title}</h1>`;

       // edit div
       divVideo.className         =    "videoBox";

       // edit video
       video.className            =    "video";
       video.src                  =    src;
       video.width                =    620;
       video.height               =    340;
       video.autoplay             =    false;
       video.controls             =    true

       // description
       divDescription.className   =    "descriptionVid";
       divDescription.innerHTML   =    `<h4>${descricao}</h4>`;

       divVideo.appendChild(divTitle);
       divVideo.appendChild(video);
       divVideo.appendChild(divDescription);
       target.appendChild(divVideo);

    }

    makeBox(target, title, content) {
        const divBoxPainel          = document.createElement('div');
        divBoxPainel.className      = 'box-p';

        const boxTitle              = document.createElement('div');
        boxTitle.className          = 'box-titleP';

        const h3TitleBP             = document.createElement('h3');
        h3TitleBP.innerHTML         = title;

        const divContBoxPainel      = document.createElement('div')
        divContBoxPainel.className  = 'contBoxPainel';

        const divContPainel         = document.createElement('div');
        divContPainel.className      = 'cont-p';
        divContPainel.innerHTML      = content;

        divBoxPainel.appendChild(boxTitle);
        boxTitle.appendChild(h3TitleBP);
        divBoxPainel.appendChild(divContBoxPainel);
        divContBoxPainel.appendChild(divContPainel);
        target.appendChild(divBoxPainel);
    }

    makeAContact(title, srcIcon, linkAnchor, linkWebs, appendLook) {
        // Div principal ---------------------------------------
        const BDivContact       = document.createElement('div');
        BDivContact.className   = "b-contact";
        // -----------------------------------------------------

        // icon box --------------------------------------------
        const DivIconCont           = document.createElement('div');
        DivIconCont.className       = 'icon-Contact';
        const iconCont              = document.createElement('img');
        iconCont.src                = srcIcon;
        iconCont.width              = 25;
        iconCont.height             = 25
        // -----------------------------------------------------

        // Title Box -------------------------------------------
        const divContentsCont       = document.createElement('div');
        divContentsCont.className   = 'title-cont';
        const h3Contact             = document.createElement('h3');
        h3Contact.innerText         = title;
        // -----------------------------------------------------

        // Ancora Box ------------------------------------------
        const anContactB            = document.createElement('a');
        anContactB.href             = linkAnchor;
        const pContactB             = document.createElement('p');
        pContactB.innerText         = linkWebs;



        BDivContact.appendChild(DivIconCont);
        DivIconCont.appendChild(iconCont);

        BDivContact.appendChild(divContentsCont);
        divContentsCont.appendChild(h3Contact);

        divContentsCont.appendChild(anContactB);
        anContactB.appendChild(pContactB);

        appendLook.appendChild(BDivContact);
    }

}