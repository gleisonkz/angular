# Configuração para atualização do AngularJS

<!--todo: Question: Can we remove this file and instead direct readers to https://github.com/angular/quickstart/blob/master/README.md -->

<div class="alert is-critical">

**PÚBLICO**: <br />
Use este guia **apenas** no contexto de [Atualização do AngularJS](guide/upgrade 'Atualizando do AngularJS para Angular 2+') ou [Atualização para Desempenho](guide/upgrade-performance 'Atualização para Desempenho').
Estes guias de atualização referem-se a este guia de configuração para informações sobre o uso do [repositório obsoleto QuickStart GitHub](https://github.com/angular/quickstart 'Repositório QuickStart do GitHub obsoleto '), criado antes do atual Angular [CLI](cli 'CLI Overview').

**Para todos os outros cenários**, consulte as instruções atuais em [Configurar ambiente local e workspace](guide/setup-local 'Configuração para desenvolvimento local').

</div>

<!--
The <live-example name=quickstart>QuickStart live-coding</live-example> example is an Angular *playground*.
There are also some differences from a local app, to simplify that live-coding experience.
In particular, the QuickStart live-coding example shows just the AppComponent file; it creates the equivalent of app.module.ts and main.ts internally for the playground only.
-->

Este guia descreve como desenvolver localmente na sua própria máquina. Configurar um novo projeto em sua máquina é rápido e fácil com [QuickStart Seed no github](https://github.com/angular/quickstart 'Install the github QuickStart repo').

## Pré-requisitos

Certifique-se de que você tenha [Node.js&reg; e npm instalado](guide/setup-local#prerequisites 'Angular prerequisites').

<a id="clone"></a>

## Clone

Execute as etapas do _clone-to-launch_ com esses comandos no terminal.

<code-example format="shell" language="shell">

git clone https://github.com/angular/quickstart.git quickstart
cd quickstart
npm install

</code-example>

<a id="download"></a>

## Download

[Baixe o QuickStart seed](https://github.com/angular/quickstart/archive/master.zip 'Download the QuickStart seed repository') e descompacte-o na sua pasta do projeto. Em seguida, execute as etapas restantes com esses comandos no terminal.

<code-example format="shell" language="shell">

cd quickstart
npm install

</code-example>

<a id="non-essential"></a>

## Excluir arquivos _não essenciais_ (opcional)

Você pode excluir rapidamente os arquivos _não essenciais_ relacionados a testes e manutenção do repositório QuickStart \(**_incluindo todos os artefatos relacionados ao git_**, como a pasta `.git` e `.gitignore`\).

<div class="alert is-important">

Faça isso apenas no início para evitar apagar acidentalmente seus próprios testes e configurações do git.

</div>

Abra uma janela de terminal na pasta do projeto e digite os seguintes comandos para o seu ambiente:

### macOS / Mac OS X (bash)

<code-example format="shell" language="shell">

xargs rm -rf < non-essential-files.osx.txt
rm src/app/_.spec_.ts
rm non-essential-files.osx.txt

</code-example>

### Windows

<code-example format="shell" language="shell">

for /f %i in (non-essential-files.txt) do del %i /F /S /Q
rd .git /s /q
rd e2e /s /q

</code-example>

## Atualização das versões das dependências

Como o repositório quickstart está obsoleto, ele não é mais atualizado e você precisa de algumas etapas adicionais para usar o Angular mais recente.

1.  Remova o pacote `@angular/http` que está obsoleto \(ambos do `package.json > dependencies` e do arquivo `src/systemjs.config.js > SystemJS.config() > map`\).
1.  Instale as versões mais recentes dos pacotes do Angular executando:

    <code-example format="shell" language="shell">

    npm install --save &commat;angular/common&commat;latest &commat;angular/compiler&commat;latest &commat;angular/core&commat;latest &commat;angular/forms&commat;latest &commat;angular/platform-browser&commat;latest &commat;angular/platform-browser-dynamic&commat;latest &commat;angular/router&commat;latest

    </code-example>

1.  Instale as últimas versões de outros pacotes utilizado pelo Angular (RxJS, TypeScript, Zone.js\) executando:

    <code-example format="shell" language="shell">
    npm install --save rxjs&commat;latest zone.js&commat;latest
    npm install --save-dev typescript&commat;latest

    </code-example>

1.  Instale o pacote `systemjs-plugin-babel`. Isso será usado mais tarde para carregar os arquivos de framework Angular, que estão no formato ES2015, usando o SystemJS.

    <code-example format="shell" language="shell">

    npm install --save systemjs-plugin-babel&commat;latest

    </code-example>

1.  Para poder carregar os pacotes mais recentes do Angular (no formato ES2015) corretamente, substitua as entradas relevantes em `src/systemjs.config.js`:

    <code-examples format="javascript" language="javascript" path="upgrade-phonecat-2-hybrid/systemjs.config.1.js" region="angular-paths"> </code-example>

    <li marker="1" level="0" spaces="0" spaces-after-marker="1"><p spaces-before="0"> Para carregar o pacote mais atualizado do RxJS corretamente, substitua as entradas relevantes em <code>src/systemjs.config.js</code>:

    <code-examples format="javascript" language="javascript" path="upgrade-phonecat-2-hybrid/systemjs.config.1.js" region="rxjs-paths"></code-example></p></li>

    <li marker="1" level="0" spaces="0" spaces-after-marker="1"><p spaces-before="0"> Para poder carregar o pacote <code>tslib</code> (necessário para arquivos transpilados por TypeScript\), adicione a seguinte entrada em `src/systemjs.config.js`:

    <code-examples format="javascript" language="javascript" path="upgrade-phonecat-2-hybrid/systemjs.config.1.js" region="tslib-paths"></code-example></p></li>

    <li marker="1" level="0" spaces="0" spaces-after-marker="1"><p spaces-before="0"> Para que o SystemJS possa carregar corretamente os arquivos ES2015 do Angular, adicione as seguintes entradas ao <code>src/systemjs.config.js</code>:

    <code-examples format="javascript" language="javascript" path="upgrade-phonecat-2-hybrid/systemjs.config.1.js" region="plugin-babel"></code-example></p></li>

    <li marker="1" level="0" spaces="0" spaces-after-marker="1"><p spaces-before="0"> Finalmente, de modo a evitar erros de checagem de tipos do TypeScript para dependências, adicione a seguinte entrada ao arquivo <code>src/tsconfig.json</code>:

    <code-example format="json" language="json">
        {
          "compilerOptions": {
            "skipLibCheck": true,
            // &hellip;
          }
        }
    </code-example>

Com isso, agora você pode executar `npm start` e ter a aplicação compilada e rodando. Uma vez construído, a aplicação será aberta automaticamente em uma nova aba do navegador e será recarregada automaticamente quando você fizer alterações no código-fonte.

<a id="seed"></a>

## O que há no QuickStart seed?

O **QuickStart Seed ** fornece uma aplicação Quick Start básica e outros arquivos necessários para o desenvolvimento local. Consequentemente, há muitos arquivos na pasta de projeto em sua máquina, a maioria dos quais você pode [aprender mais tarde](guide/file-structure).

<div class="alert is-helpful">

**Lembrete:** O exemplo "QuickStart seed" foi criado antes da CLI Angular, então há algumas diferenças entre o que é descrito aqui e uma aplicação criada com a CLI do angular.

</div>

<a id="app-files"></a>

Foco nos três arquivos TypeScript seguintes (`.ts`) na pasta `/src`.

<div class="filetree">
  <div class="file">
    src
  </div>
  <div class="children">
    <div class="file">
      app
    </div>
    <div class="children">
      <div class="file">
        app.component.ts
      </div>
      <div class="file">
        app.module.ts
      </div>
    </div>
    <div class="file">
      main.ts
    </div>
  </div>
</div>

<code-tabs>
    <code-pane header="src/app/app.component.ts" path="setup/src/app/app.component.ts"></code-pane>
    <code-pane header="src/app/app.module.ts" path="setup/src/app/app.module.ts"></code-pane>
    <code-pane header="src/main.ts" path="setup/src/main.ts"></code-pane>
</code-tabs>

todos os guias e livro de receitas têm _pelo menos esses arquivos de núcleo_. Cada arquivo tem um propósito distinto e evolui de forma independente à medida que a aplicação cresce.

Arquivos fora de `src/` dizem respeito a compilação, implantação e teste de sua aplicação. Eles incluem arquivos de configuração e dependências externas.

Arquivos na pasta `src/` "pertencem" a sua aplicação. Adicione novos arquivos Typescript, HTML e CSS no diretório `src/`, a maioria deles dentro de `src/app`, a menos que precise fazer o contrário.

Todas as alternativas a seguir estão localizadas em `src/`

| Arquivo              | Objetivo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| :------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| app/app.component.ts | Define o mesmo `AppComponent` que o que está no QuickStart playground. É o componente raiz \*\*\*\* do que se tornará uma árvore de componentes aninhados à medida que a aplicação evolui.                                                                                                                                                                                                                                                                                                                       |
| app/app.module.ts    | Define o `AppModule`, o [módulo raiz](guide/bootstrapping 'AppModule: the root module') que diz para Angular como montar a aplicação. Quando inicialmente criado, ele declara somente o `AppComponent`. Com o tempo, você adicionara mais componentes a este modulo.                                                                                                                                                                                                                                             |
| main.ts              | Compila o aplicativo com [o compilador JIT](guide/glossary#jit) e [bootstraps](guide/bootstrapping) o módulo principal do aplicativo \(`AppModule`\) para ser executado no navegador. O compilador JIT é uma escolha razoável durante o desenvolvimento da maioria dos projetos e é a única escolha viável para uma amostra rodando em um ambiente de _live-coding_ como Stackblitz. As opções de [compilation](guide/aot-compiler), [build](guide/build), and [deployment](guide/deployment) estão disponíveis. |

## Apêndice: Testes usando `fakeAsync()/waitForAsync()`

Se você usar as funções `fakeAsync()` ou `waitForAsync()` para executar testes unitários (para detalhes, leia o [Guia sobre testes](guide/testing-components-scenarios#fake-async)), será necessário importar o arquivo `zona.js/testing` em seu arquivo de configuração de teste.

<div class="alert is-important">

Se você criar um projeto com `Angular/CLI`, ele já está importado em `src/test.ts`.

</div>

E nas versões anteriores do `Angular`, os seguintes arquivos foram importados ou adicionados no seu arquivo html:

<code-example format="html" language="html">

import 'zone.js/plugins/long-stack-trace-zone';
import 'zone.js/plugins/proxy';
import 'zone.js/plugins/sync-test';
import 'zone.js/plugins/jasmine-patch';
import 'zone.js/plugins/async-test';
import 'zona. s/plugins/fake-async-test';

</code-example>

Você ainda pode carregar esses arquivos separadamente, mas a ordem é importante, você precisa importar o `proxy ` antes de `sync-test`, `async-test`, `fake-async-test` e `jasmine-patch`. E você também precisa importar a `sync-test` antes de `jasmine-patch`, portanto, é recomendável apenas importar `zona-testing` em vez de carregar esses arquivos separados.

<!-- links -->

<!-- external links -->

<!-- end links -->

@reviewed 2022-02-28
