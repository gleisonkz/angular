# O que é Angular?

Este tópico pode ajudá-lo a entender Angular: o que é Angular, quais vantagens ele oferece, e o que você pode esperar ao começar a construir suas aplicações.

Angular é uma plataforma de desenvolvimento, construída em [TypeScript](https://www.typescriptlang.org). Como uma plataforma, inclui:

*   Uma estrutura baseada em componentes para construir aplicações web escaláveis
*   Uma coleção de bibliotecas bem integradas que cobrem uma ampla variedade de recursos, incluindo roteamento, gerenciamento de formulários, comunicação cliente-servidor e muito mais
*   Um conjunto de ferramentas de desenvolvedor para ajudá-lo a desenvolver, compilar, testar e atualizar seu código

Com Angular, você está aproveitando uma plataforma que pode escalar de projetos de um único desenvolvedor para aplicações de nível empresarial. Angular é projetado para tornar a atualização o mais simples possível, por isso aproveite os últimos desenvolvimentos com um mínimo de esforço. O melhor de tudo, o ecossistema Angular consiste em um grupo diversificado de mais de 1,7 milhões de desenvolvedores, autores de bibliotecas e criadores de conteúdo.

<div class="alert is-helpful">

Consulte o <live-example name="what-is-angular"></live-example> para encontrar um exemplo funcional contendo os trechos de código deste guia.

</div>

<a id="essentials"></a>

## Aplicações Angular: Os fundamentos

Esta seção explica as ideias centrais por trás do Angular. Entendendo essas ideias pode ajudá-lo a projetar e construir suas aplicações de uma maneira mais eficaz.

<a id="components"></a>

### Componentes

Componentes são os blocos de construção que compõem uma aplicação. Um componente inclui uma classe TypeScript com um decorador `@Component()`, um template HTML e estilos. O decorador `@Component()` especifica algumas informações específicas do Angular:

*   Um seletor CSS que define como o componente é usado em um template. Elementos HTML no seu template que correspondem a este seletor se tornam instâncias do componente.

*   Um template HTML que instrui como renderizar o componente
*   Um conjunto opcional de estilos CSS que definem a aparência dos elementos HTML do template

A seguir o mínimo de um componente Angular.

<code-example format="typescript" language="typescript" path="what-is-angular/src/app/hello-world/hello-world.component.ts"></code-example>

Para usar esse componente, você escreve o seguinte num template:

<code-example format="html" language="html" path="what-is-angular/src/app/app.component.html" region="hello-world-selector"></code-example>

Quando Angular renderiza este componente, o DOM resultante se parece com isso:

<code-example format="html" language="html" path="what-is-angular/src/app/hello-world-example.html"></code-example>

O modelo de componentes do Angular oferece uma encapsulamento forte e uma estrutura intuitiva de aplicações. Componentes também tornam sua aplicação mais fácil de ser testada e podem melhorar a legibilidade geral do seu código.

Para obter mais informações sobre o que fazer com os componentes, consulte a seção [Componentes](guide/component-overview)

<a id="templates"></a>

### Templates

Cada componente tem um template HTML que declara como esse componente renderiza. Você define este template inline (no mesmo arquivo .ts) ou referenciando o caminho do arquivo.

Angular estende HTML com sintaxe adicional que te permite inserir valores dinâmicos do seu componente. O Angular atualiza automaticamente o DOM renderizado quando o estado do seu componente for alterado. Uma aplicação desse recurso é a inserção de texto dinâmico, conforme mostrado no exemplo a seguir.

<code-example format="html" language="html" path="what-is-angular/src/app/hello-world-interpolation/hello-world-interpolation.component.html" region="say-hello"></code-example>

O valor da variável message vem da classe do componente:

<code-example format="typescript" language="typescript" path="what-is-angular/src/app/hello-world-interpolation/hello-world-interpolation.component.ts"></code-example>

Quando a aplicação carrega o componente e seu template, o usuário vê o seguinte:

<code-example format="shell" language="html">

&lt;p&gt;Hello, World!&lt;/p&gt;

</code-example>

Observe o uso das chaves duplas - elas instruem o Angular a interpolar o conteúdo dentro delas.

O Angular também suporta property binding, para ajudar você a definir valores para propriedades e atributos de elementos HTML e passar valores para a lógica de apresentação da sua aplicação.

<code-example format="html" language="html" path="what-is-angular/src/app/hello-world-bindings/hello-world-bindings.component.html" region="bindings"></code-example>

Observe o uso dos colchetes — essa sintaxe indica que você está vinculando a propriedade ou atributo a um valor na classe do componente.

Declare ouvintes de eventos (event listeners) para ouvir e responder às ações do usuário, como pressionamentos de tecla, movimentos do mouse, cliques e toques. Você declara um ouvinte de evento (event listener) especificando o nome do evento entre parênteses:

<code-example format="html" language="html" path="what-is-angular/src/app/hello-world-bindings/hello-world-bindings.component.html" region="event-binding"></code-example>

O exemplo anterior chama um método, que é definido na classe do componente:

<code-example format="typescript" language="typescript" path="what-is-angular/src/app/hello-world-bindings/hello-world-bindings.component.ts" region="method"></code-example>

A seguir está um exemplo combinado de interpolação, property binding e event binding com um template Angular:

<code-tabs linenums="true">
     <code-pane header="hello-world-bindings.component.ts" path="what-is-angular/src/app/hello-world-bindings/hello-world-bindings.component.ts"></code-pane>
     <code-pane header="hello-world-bindings.component.html" path="what-is-angular/src/app/hello-world-bindings/hello-world-bindings.component.html"></code-pane>
</code-tabs>

Adicione funcionalidades adicionais aos seus templates por meio do uso de [diretivas](guide/built-in-directives). As diretivas mais populares no Angular são `*ngIf` e `*ngFor`. Use diretivas para executar uma variedade de tarefas, como modificar dinamicamente a estrutura do DOM. E crie suas próprias diretivas personalizadas para criar grandes experiências de usuário.

O código a seguir é um exemplo da diretiva `*ngIf`.

<code-tabs linenums="true">
  <code-pane header="hello-world-ngif.component.ts" path="what-is-angular/src/app/hello-world-ngif/hello-world-ngif.component.ts"></code-pane>
  <code-pane header="hello-world-ngif.component.html" path="what-is-angular/src/app/hello-world-ngif/hello-world-ngif.component.html"></code-pane>
</code-tabs>

Os templates declarativos do Angular permitem separar corretamente a lógica da sua aplicação de sua apresentação. Os templates são baseados em HTML padrão, para facilitar a construção, manutenção e atualização.

Para obter mais informações sobre templates, consulte a seção [Templates](guide/template-syntax).

<a id="di"></a>

### Injeção de dependência

Injeção de dependência permite declarar as dependências de suas classes TypeScript sem se preocupar com sua instanciação. Ao invés disso, o Angular lida com a instanciação para você. Este padrão de design permite que você escreva código mais testável e flexível. Embora a injeção de dependências não seja fundamental para começar a usar Angular Recomendamos fortemente o seu uso como melhor prática e que muitos aspectos de Angular tiram vantagem dela de certa forma.

Para ilustrar como a injeção de dependência funciona, considere o seguinte exemplo. O primeiro arquivo, `logger.service.ts`, define a classe `Logger`. Esta classe contém uma função `writeCount` que exibe um número no console.

<code-example format="typescript" language="typescript" path="what-is-angular/src/app/logger.service.ts"></code-example>

Em seguida, o arquivo `hello-world-di.component.ts` define um componente Angular. Este componente contém um botão que usa a função `writeCount` da Classe Logger. Para acessar esta função, o serviço `Logger` é injetado na classe `HelloWorldDI` adicionando `logger privado: Logger` no construtor.

<code-example format="typescript" language="typescript" path="what-is-angular/src/app/hello-world-di/hello-world-di.component.ts"></code-example>

Para obter mais informações sobre a injeção de dependências e Angular, consulte a seção de [Injeção de dependência no Angular](guide/dependency-injection).

<a id="cli"></a>

## Angular CLI

O Angular CLI é a maneira mais rápida, direta e recomendada de desenvolver aplicações Angular. A CLI do Angular faz com que inúmeras tarefas sejam menos problemáticas. Aqui estão alguns exemplos:

| Comando                     | Detalhes                                                                                |
|:--------------------------- |:--------------------------------------------------------------------------------------- |
| [ng build](cli/build)       | Compila uma aplicação Angular para um diretório de saída específico.                    |
| [ng serve](cli/serve)       | Compila e executa sua aplicação, reconstruindo-a a cada alteração de algum arquivo.     |
| [ng generate](cli/generate) | Generates or modifies files based on a schematic.                                       |
| [ng test](cli/test)         | Executa testes de unidade em um determinado projeto.                                    |
| [ng e2e](cli/e2e)           | Compila e executa uma aplicação Angular e, em seguida, executa testes de ponta a ponta. |

Você vai achar a CLI do Angular uma ferramenta valiosa para construir suas aplicações.

Para obter mais informações sobre o Angular CLI, consulte a seção [Referência da CLI](cli).

<a id="1p-libraries"></a>

## Bibliotecas Nativas

A seção, [Aplicações Angular: Os fundamentos](#essentials), fornece uma breve visão geral de alguns dos principais elementos arquitetônicos que você vai usar ao construir aplicações Angular. Mas os muitos benefícios do Angular realmente se tornam visíveis quando sua aplicação cresce e você deseja adicionar funções adicionais, como navegação no site ou tratamento de dados do usuário com formulários. Use a plataforma Angular para incorporar uma das muitas bibliotecas nativas que o Angular fornece.

Algumas das bibliotecas disponíveis para você inclui:

| Biblioteca                                | Detalhes                                                                                                                                                                                                         |
|:----------------------------------------- |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Angular Router](guide/router)            | Navegação e roteamento avançados do lado do cliente com base em componentes Angulares. Suporta carregamento sobre demanda (lazy-loading), rotas aninhadas, correspondência de rotas personalizados e muito mais. |
| [Angular Forms](guide/forms-overview)     | Sistema uniforme para a manipulação e validação de formulários.                                                                                                                                                  |
| [Angular HttpClient](guide/http)          | Cliente HTTP robusto que prove uma comunicação mais avançada do cliente-servidor.                                                                                                                                |
| [Angular Animations](guide/animations)    | Sistema rico de manipulação de animações baseado no estado da aplicação.                                                                                                                                         |
| [Angular PWA](guide/service-worker-intro) | Ferramentas para a construção de Aplicativos Web Progressivos (PWAs) incluindo um service worker e manifesto de aplicação Web.                                                                                   |
| [Angular Schematics](guide/schematics)    | Estruturas automatizadas, refatoração e ferramentas de atualizações que simplificam o desenvolvimento em grande escala.                                                                                          |

Estas bibliotecas expandem as funcionalidades da sua aplicação enquanto permitem que você se concentre mais nos recursos que tornam sua aplicação única. Adicione estas bibliotecas sabendo que elas são projetadas para integrar perfeitamente e atualizar simultaneamente com o framework Angular.

Essas bibliotecas só são necessárias se e quando podem ajudá-lo a adicionar funcionalidade aos seus aplicativos ou resolver um problema específico.

## Próximos passos

Este tópico destina-se a dar-lhe uma breve visão geral do que é Angular, as vantagens que ele oferece e o que esperar à medida que você começa a construir suas aplicações.

Para ver o Angular em ação, veja nosso tutorial sobre [Primeiros Passos](start). Este tutorial usa o [stackblitz.com](https://stackblitz.com), para que você explore um exemplo funcional de uma aplicação Angular sem quaisquer requisitos de instalação.

Para explorar ainda mais as capacidades do Angular, recomendamos a leitura das seções, Entendendo Angular e Guia do Desenvolvedor.

<!-- links -->

<!-- external links -->

<!-- end links -->

@reviewed 2022-02-28
