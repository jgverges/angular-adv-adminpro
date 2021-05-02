**Índice**
1. [N2G-CHARTS](#id1)
2. [HTML para sidebar](#id2)
3. [Git TAGS](#id3)
<div id='id1' />
## N2G-CHARTS

Llas versiones del curso dan errores:
npm install --save ng2-charts
npm install --save chart.js


* Primero desinstala las versiones que tienes con

npm uninstall ng2-charts

npm uninstall chart.js


* Luego simplemente instala las siguientes versiones:

npm install --save ng2-charts@2.3.0

npm install --save chart.js@2.9.3

<div id='id2' />
## HTML para sidebar

`<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script> `

También hay un archivo colores.txt con el siguiente contenido.

~~~
<div class="r-panel-body">
    <ul id="themecolors" class="m-t-20">
        <li><b>Con el sidebar claro</b></li>
        <li><a data-theme="default" class="selector default-theme">1</a></li>
        <li><a data-theme="green" class="selector green-theme">2</a></li>
        <li><a data-theme="red" class="selector red-theme">3</a></li>
        <li><a data-theme="blue" class="selector blue-theme">4</a></li>
        <li><a data-theme="purple" class="selector purple-theme">5</a></li>
        <li><a data-theme="megna" class="selector megna-theme">6</a></li>
        
        <li class="d-block m-t-30"><b>Con el sidebar oscuro</b></li>
        <li><a data-theme="default-dark" class="selector default-dark-theme">7</a></li>
        <li><a data-theme="green-dark" class="selector green-dark-theme">8</a></li>
        <li><a data-theme="red-dark" class="selector red-dark-theme">9</a></li>
        <li><a data-theme="blue-dark" class="selector blue-dark-theme working">10</a></li>
        <li><a data-theme="purple-dark" class="selector purple-dark-theme">11</a></li>
        <li><a data-theme="megna-dark" class="selector megna-dark-theme">12</a></li>
    </ul>

</div>
~~~

<div id='id3' />
# Git TAGS

git tag     // consultar tags
git tag -a v1.1.1 -m "texto para la version que queramos"
git pusg --tag

git remove -v  // mostrará los enlaces a github para accedeer directamente