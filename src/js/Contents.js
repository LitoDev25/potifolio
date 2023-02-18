class Contents {

    
    inicioCont() {
       const inicioValue = `<div class="card">
                                <div class="text_info">
                                    <p><span class="space"></span>Olá! meu nome é <a href="#"><span class="redInf">Saulo Morais</span></a>,
                                    tenho 26 Anos, e estudo programação desde os 17 anos. Fascinado pelo mundo dos código,
                                    venho me desenvolvendo cada vez mais ao longo dos anos, hoje possuo conhecimentos que abrangem
                                    JavaScript, CSS3, HTML5, JAVA, SQL entre outras linguagens.</p> <br>
                                    <p><span class="space"></span>Continuo meus estudos e desenvolvo pequenos projetos para prática 
                                    e ganho de novos conhecimentos. Seja muito bem vindo ao meu espaço!</p>
                                </div>

                                <div class="foto_inicio">
                                    <img src="./src/files/img/outdor.png" alt="">
                                </div>
                            </div>

                            

                            <div class="tecPainel">
                                <div class="tecTitulo"><h1>TECNOLOGIAS:</h1></div>
                                <div class="tec htm5">
                                    <img src="./src/files/img/icons8-html-64.png" alt="">
                                    <h4>HTML5</h4>
                                </div>

                                <div class="tec2 css3">
                                    <img src="./src/files/img/icons8-css3-48.png" alt=""> 
                                    <h4>CSS3</h4>
                                </div>

                                <div class="tec javaScript">
                                    <img src="./src/files/img/javascript.png" alt="">
                                    <h4>JavaScript</h4>
                                </div>
                                
                                <div class="tec2 git">
                                    <img src="./src/files/img/pngegg.png" alt=""> 
                                    <h4>GIT</h4>
                                </div>

                                <div class="tec sql">
                                    <img src="./src/files/img/servidor-sql.png" alt=""> 
                                    <h4>SQL</h4>
                                </div>

                                <div class="tec2 java">
                                    <img src="./src/files/img/java.png" alt=""> 
                                    <h4>Java</h4>
                                </div>

                                <div class="tec php">
                                    <img src="./src/files/img/php.png" alt="">
                                    <h4>PHP</h4>
                                </div>

                                <div class="tec2 csharp">
                                    <img src="./src/files/img/c-logo-icon-28402.png" alt=""> 
                                    <h4>C#</h4>
                                </div>
                            </div>
                            `;
        return inicioValue;
    }

    sobreCont() {
        const app = new App();
        const root = document.getElementById('root');

        const divSobreBox     = document.createElement('div');
        divSobreBox.className ='boxSobre';

        const divTitle        = document.createElement('div');
        divTitle.className    = 's-title';

        const sTitle          = document.createElement('h1');
        sTitle.innerHTML      = 'Jornada:';

        const divSCards       = document.createElement('div');
        divSCards.className   = 's-cards';

        const scTitle         = document.createElement('div');
        scTitle.className     = 'sc-title';

        const h3Title         = document.createElement('h3');
        h3Title.className     = 'btnOpt';
        h3Title.innerHTML     = 'Formação  &DoubleDownArrow;';

        // div contents
        const sContents       = document.createElement('div');
        sContents.className   = 's-content';
        sContents.classList.add('hidden');
        sContents.innerHTML   = `<p><span class="space"></span>Ensino médio Completo em 2014, me formei integralmente 
                                em escola publica. Por 2 semestres fiz bacharelado em Administração descontinuando em 2018.</p>
                                <p><span class="space"></span>Com o trancamento da faculdade, continuei a jornada que havia
                                descoberto em 2017, amigos, que faziam Analise e desenvolvimento de sistema se surprenderam com 
                                a facilidade em aprender coisas em que a maioria tinha dificuldade, e realmente, fiquei fascinado!
                                Pensei "realmente isso é para mim!". Desde então venho fazendo cursos na plataforma que descobri
                                a <a href="http://www.udemy.com"><span class="redInf">Udemy</span></a>. E venho estudando
                                vária tecnologias incríveis até hoje.</p>`;

        let numVeri = 0;

        h3Title.onclick = () => {
            if (numVeri !== 0) {
                numVeri--
                sContents.classList.add('hidden');
                h3Title.innerHTML = 'Formação  &DoubleDownArrow;';
            } else {
                numVeri++
                sContents.classList.remove('hidden');
                h3Title.innerHTML = 'Formação  &DoubleUpArrow;';
            }
        }

        const divSCardsC     = document.createElement('div');
        divSCardsC.className = 's-cards';

        const scTitleC       = document.createElement('div');
        scTitleC.className   = 'sc-title';

        const h3TitleC       = document.createElement('h3');
        h3TitleC.className   = 'btnOpt';
        h3TitleC.innerText   = 'Tecnologias e conhecimentos: ';

        const sContentsC     = document.createElement('div');
        sContentsC.className = 's-content';

        const divTriad       = document.createElement('div');
        divTriad.className   = 'triad';

        const h3Triad        = document.createElement('h3');
        h3Triad.innerHTML    = 'A tríade(HTML, CSS, JavaScript) &DoubleDownArrow;';

        const tInfo          = document.createElement('div');
        tInfo.className      = 't-info';
        tInfo.classList.add('hidden');
        tInfo.innerHTML      = `<p><span class="redInf">HTML:</span> Essa foi minha primeira experiencia, Bom, é claro que ninguém pode falar "Eu 
                            Programo em html", mas foi ele que abriu as portas para mim. Um amigo que fazia faculdade
                            de Analise e desenvolvimento de sistemas(ADS), apresentou para mim. e no dia seguinte 
                            ele ficou surpreso com a quantidade de conteúdo que havia aprendido. andar mais um pouco nesse 
                            caminho me levaria ao css.</p>
                            <p><span class="redInf">CSS:</span> É aqui que tudo começou a ganhar forma para mim, saber que posso dar estilização ao
                            html, e criar layouts incríveis com um código tão simples e fácil de aplicar como o css, fez
                            ganhar ainda mais gosto pela coisa.</p>
                            <p><span class="redInf">JavaScript:</span> Agora sim posso dizer que estou programando. A primeira linguagem real que tive 
                            contato foi o tão amado e odiado JavaScript(js). Lógica, rotinas, POO, tudo começou aqui,
                            além de contato com NodeJs e react utilizando essa linguagem.</p>
                            
                            <div class="niveis">
                                <h3>Níveis:</h3>
                                <p>HTML: <span class="green"> Muito Bom</span></p>
                                <p>CSS: <span class="green"> Muito Bom</span></p>
                                <p>JS: <span class="green"> Muito Bom</span></p>
                            </div>`


        

        let numVeriC = 0;

        h3Triad.onclick = () => {
            if (numVeriC !== 0) {
                numVeriC--
                tInfo.classList.add('hidden');
                h3Triad.innerHTML = 'A tríade(HTML, CSS, JavaScript) &DoubleDownArrow;';
            } else {
                numVeriC++
                tInfo.classList.remove('hidden');
                h3Triad.innerHTML = 'A tríade(HTML, CSS, JavaScript) &DoubleUpArrow;';
            }
        }


        const divSql            = document.createElement('div');
        divSql.className        = 'SqlDiv';

        const h3SQL             = document.createElement('h3');
        h3SQL.innerHTML         = 'SQL Databases &DoubleDownArrow;';

        const SqlInfoSQL        = document.createElement('div');
        SqlInfoSQL.className    = 't-info';
        SqlInfoSQL.classList.add('hidden');
        SqlInfoSQL.innerHTML    = `<p><span class="space"></span>Bons conhecimentos na linguagem, realização de query's, CRUD, entre outros recursos</p>
                                    <div class="niveis">
                                        <h3>Níveis:</h3>
                                        <p>HTML: <span class="yellow"> Bom</span></p>
                                    </div>`


        let numVeriSql          = 0;

        h3SQL.onclick = () => {
            if (numVeriSql !== 0) {
                numVeriSql--
                SqlInfoSQL.classList.add('hidden');
                h3SQL.innerHTML  = 'SQL Databases &DoubleDownArrow;';
            } else {
                numVeriSql++
                SqlInfoSQL.classList.remove('hidden');
                h3SQL.innerHTML  = 'SQL Databases &DoubleUpArrow;';

            }
        }

        const divJava = document.createElement('div');
        divJava.className = 'javaDiv';

        const h3Java = document.createElement('h3');
        h3Java.innerHTML = 'Java &DoubleDownArrow;';

        const divInfoJava = document.createElement('div');
        divInfoJava.className = 't-info';
        divInfoJava.classList.add('hidden');
        divInfoJava.innerHTML = `<p>Bom conhecimento de lógica e Programação Orientada a Objetos(POO).</p>
                                <div class="niveis">
                                    <h3>Níveis:</h3>
                                    <p>HTML: <span class="yellow"> Bom</span></p>
                                </div>`;


        let numVeriJava = 0;

        h3Java.onclick = () => {
            if (numVeriJava !== 0) {
                numVeriJava--
                divInfoJava.classList.add('hidden');
                h3Java.innerHTML = 'Java &DoubleDownArrow;';

            } else {
                numVeriJava++
                divInfoJava.classList.remove('hidden');
                h3Java.innerHTML = 'Java &DoubleUpArrow;';
            }
        }

        const divPhp = document.createElement('div');
        divPhp.className = 'phpDiv';

        const h3Php = document.createElement('h3');
        h3Php.innerHTML = 'Php &DoubleDownArrow;';

        const divInfoPhp = document.createElement('div');
        divInfoPhp.className = 't-info';
        divInfoPhp.classList.add('hidden');
        divInfoPhp.innerHTML = `<p>Bom conhecimento de lógica e Programação Orientada a Objetos(POO).</p>
                                    <div class="niveis">
                                        <h3>Níveis:</h3>
                                        <p>HTML: <span class="yellow"> Bom</span></p>
                                    </div>`;


        let numVeriPhp = 0;

        h3Php.onclick = () => {
            if (numVeriPhp !== 0) {
                numVeriPhp--
                divInfoPhp.classList.add('hidden');
                h3Php.innerHTML = 'Php &DoubleDownArrow;';
            } else {
                numVeriPhp++
                divInfoPhp.classList.remove('hidden');
                h3Php.innerHTML = 'Php &DoubleUpArrow;';
            }
        }


        const divCCharp = document.createElement('div');
        divCCharp.className = 'CCharpDiv';

        const h3CCharp = document.createElement('h3');
        h3CCharp.innerHTML = 'C# &DoubleDownArrow;';

        const divInfoCCharp = document.createElement('div');
        divInfoCCharp.className = 't-info';
        divInfoCCharp.classList.add('hidden');
        divInfoCCharp.innerHTML = `<p>Bom conhecimento de lógica e Programação Orientada a Objetos(POO).</p>
                                    <div class="niveis">
                                        <h3>Níveis:</h3>
                                        <p>HTML: <span class="yellow"> Bom</span></p>
                                    </div>`;


        let numVeriCCharp = 0;

        h3CCharp.onclick = () => {
            if (numVeriCCharp !== 0) {
                numVeriCCharp--
                divInfoCCharp.classList.add('hidden');
                h3CCharp.innerHTML = 'C# &DoubleDownArrow;';
            } else {
                numVeriCCharp++
                divInfoCCharp.classList.remove('hidden');
                h3CCharp.innerHTML = 'C# &DoubleUpArrow;';
            }
        }

        const painelProjetos        = document.createElement('div');
        painelProjetos.className    = 'projectsPainel';

        const divTitlePainelP       = document.createElement('div');
        divTitlePainelP.className   = 'painelT';

        const divPaiTitle           = document.createElement('h3');
        divPaiTitle.innerHTML       = 'Projetos &DoubleDownArrow;';


        painelProjetos.appendChild(divTitlePainelP);
        divTitlePainelP.appendChild(divPaiTitle);

        const boxPainelInfo = document.createElement('div');
        boxPainelInfo.className = 'painelInf';
        boxPainelInfo.classList.add('hidden');
        painelProjetos.appendChild(boxPainelInfo);

        
        app.makeBox(boxPainelInfo, 'Em breve!', 'Disponível em breve!');
        app.makeBox(boxPainelInfo, 'Em breve!', 'Disponível em breve!');
        app.makeBox(boxPainelInfo, 'Em breve!', 'Disponível em breve!');
        app.makeBox(boxPainelInfo, 'Em breve!', 'Disponível em breve!');
        app.makeBox(boxPainelInfo, 'Em breve!', 'Disponível em breve!');


        let numVeriPainel = 0;

        divPaiTitle.onclick = () => {
            if (numVeriPainel !== 0) {
                numVeriPainel--
                boxPainelInfo.classList.add('hidden');
            } else {
                numVeriPainel++
                boxPainelInfo.classList.remove('hidden');
            }
        }

        
        divSCards.appendChild(scTitle);
        divSCardsC.appendChild(scTitleC);
        divSobreBox.appendChild(divTitle);
        divTitle.appendChild(sTitle);
        scTitle.appendChild(h3Title);
        scTitleC.appendChild(h3TitleC);

        sContentsC.appendChild(divTriad);
        divTriad.appendChild(h3Triad);
        sContentsC.appendChild(tInfo);

        sContentsC.appendChild(divSql)
        divSql.appendChild(h3SQL);
        sContentsC.appendChild(SqlInfoSQL)

        sContentsC.appendChild(divJava);
        divJava.appendChild(h3Java);
        sContentsC.appendChild(divInfoJava);

        sContentsC.appendChild(divPhp);
        divPhp.appendChild(h3Php);
        sContentsC.appendChild(divInfoPhp);

        sContentsC.appendChild(divCCharp);
        divCCharp.appendChild(h3CCharp);
        sContentsC.appendChild(divInfoCCharp);


        divSobreBox.appendChild(divSCards);
        divSobreBox.appendChild(divSCardsC);

        divSobreBox.appendChild(painelProjetos);

        divSCards.appendChild(sContents);
        divSCardsC.appendChild(sContentsC);
        root.appendChild(divSobreBox);

    }

    contatoCont() {
        const app = new App();

        // Div Principal -------------------------------------------
        const boxContD              = document.createElement('div');
        boxContD.className          = 'contactBox';
        //----------------------------------------------------------

        const divH1Contact          = document.createElement('div');
        divH1Contact.className      = 'titleContact';

        const h1TitleContact        = document.createElement('h1');
        h1TitleContact.innerText    = 'Contatos';


        boxContD.appendChild(divH1Contact);
        divH1Contact.appendChild(h1TitleContact);
        

        app.makeAContact('Linkedin', './src/files/img/redes/linkedin.png', 'https://www.linkedin.com/in/saulo-morais-aba719241', 'Linkedin', boxContD);
        app.makeAContact('Facebook', './src/files/img/redes/facebook.png', 'https://web.facebook.com/profile.php?id=100078387018074', 'Facebook', boxContD);
        app.makeAContact('Youtube', './src/files/img/redes/youtube.png', 'https://www.youtube.com/@litodev6123/', 'Youtube', boxContD);
        app.makeAContact('E-mail', './src/files/img/redes/o-email.png', '#', 'litodev97@gmail.com', boxContD);
        app.makeAContact('Github', './src/files/img/redes/icons8-github-squared-32.png', 'https://github.com/LitoDev25', 'GitHub', boxContD);
        
        root.appendChild(boxContD);
    }

    
}