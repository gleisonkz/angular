# Primeiros passos com Angular

Bem-vindo ao Angular!

Este tutorial lhe apresenta o essencial do Angular ao caminhar por meio da construção de um site de e-commerce com um catálogo, carrinho de compras e formulário de check-out.

Para ajudá-lo a começar logo, este tutorial usa um aplicativo pronto, que você pode examinar e modificar interativamente no [StackBlitz](https://stackblitz.com) &mdash; sem precisar [configurar um ambiente de trabalho local](guide/setup-local "Setup guide"). StackBlitz é um ambiente de desenvolvimento baseado no navegador onde você pode criar, salvar e compartilhar projetos usando uma variedade de tecnologias.

## Pré-requisitos

Para tirar o máximo proveito deste tutorial, você já deve ter um entendimento básico sobre o seguinte.

*   [HTML](https://developer.mozilla.org/docs/Learn/HTML "Aprendendo HTML: Guias e Tutoriais")
*   [JavaScript](https://developer.mozilla.org/docs/Web/JavaScript "JavaScript")
*   [TypeScript](https://www.typescriptlang.org/ "A linguagem TypeScript")

<a id="components"></a>

## Faça um tour pela aplicação de exemplo

Você constrói aplicações Angular com componentes. Componentes definem áreas de responsabilidade na interface do usuário que permitem reutilizar conjuntos de funcionalidades da UI.

Um componente consiste em três coisas:

|                                    | Detalhes                             |
|:---------------------------------- |:------------------------------------ |
| Uma classe                         | Gerencia os dados e funcionalidades. |
| Um template HTML                   | Determina a UI.                      |
| Estilos específicos de componentes | Define a aparência e a sensação.     |

Este guia demonstra a construção de uma aplicação com os seguintes componentes.

| Componentes                  | Detalhes                                                                   |
|:---------------------------- |:-------------------------------------------------------------------------- |
| `<app-root>`           | O primeiro componente a carregar e o contêiner para os outros componentes. |
| `<app-top-bar>`        | O nome da loja e botão de check-out.                                       |
| `<app-product-list>`   | A lista de produtos.                                                       |
| `<app-product-alerts>` | Um componente que contém os alertas do aplicativo.                         |

<div class="lightbox">

<img alt="Loja virtual com três componentes" src="generated/images/guide/start/app-components.png">

</div>

Para obter mais informações sobre componentes, consulte a [Introdução aos Componentes](guide/architecture-components "Introduction to Components and Templates").

<a id="new-project"></a>

## Criando o projeto de exemplo

Para criar o projeto de exemplo, gere o <live-example name="getting-started-v0" noDownload>projeto de exemplo pronto no StackBlitz</live-example>. Para salvar seu trabalho:

1.  Entre no StackBlitz.
1.  Faça um fork do projeto que você gerou.
1.  Salve periodicamente.

<div class="lightbox">

<img alt="Fork do projeto" src="generated/images/guide/start/fork-the-project.png">

</div>

No StackBlitz, o painel de pré-visualização à direita mostra o estado inicial do aplicativo de exemplo. A pré-visualização apresenta duas áreas:

*   Uma barra superior com o nome da loja, `Minha Loja`, e um botão de pagamento
*   Um cabeçalho para uma lista de produtos, `Produtos`

<div class="lightbox">

<img alt="Aplicação inicial de uma loja virtual" src="generated/images/guide/start/new-app-all.gif">

</div>

A seção de projetos à esquerda mostra os arquivos de origem que compõem o aplicativo, incluindo os arquivos de infraestrutura e configuração.

Quando você gera as aplicações de exemplo do StackBlitz que acompanham os tutoriais, o StackBlitz cria os arquivos iniciais e os dados simulados para você. Os arquivos que você usa ao longo do tutorial estão na pasta `src`.

Para obter mais informações sobre como usar o StackBlitz, consulte a [documentação do StackBlitz](https://developer.stackblitz.com/docs/platform).

<a id="product-list"></a>

## Criando a lista de produtos

Nesta seção, você irá atualizar a aplicação para exibir uma lista de produtos. Você usará dados de produto predefinidos do arquivo de `produtos` e métodos do arquivo `product-list.component.ts`. Esta seção guia você através da edição do HTML, também conhecido como o template.

1.  Na pasta `lista de produtos`, abra o arquivo de modelo `product-list.component.html`.

1.  Adicione a diretiva estrutural `*ngFor` a uma `<div>`, da seguinte forma.

    <code-example header="src/app/product-list/product-list.component.html" path="getting-started/src/app/product-list/product-list.component.2.html" region="ngfor"></code-example>

    Com `*ngFor`, a `<div>` irá se repetir para cada produto da lista.

    As diretivas estruturais podem alterar a estrutura do DOM, acrescentando, removendo e manipulando elementos. Para obter mais informações sobre diretivas estruturais, consulte [Diretivas Estruturais](guide/structural-directives).

1.  Dentro da `<div>`, adicione um `<h3>` e `{{ product.name }}`. A instrução `{{ product.name }}` é um exemplo da sintaxe de interpolação do Angular. A Interpolação `{{ }}` é responsável pela renderização do valor da propriedade como texto.

    <code-example header="src/app/product-list/product-list.component.html" path="getting-started/src/app/product-list/product-list.component.2.html" region="interpolation"></code-example>

    O painel de pré-visualização é atualizado e então é exibido o nome de cada produto da lista.

    <div class="lightbox">

    <img alt="Product names added to list" src="generated/images/guide/start/template-syntax-product-names.png">

    </div>

1.  Para fazer com que cada nome de um produto seja um link para os detalhes do produto, adicione o elemento `<a>` em torno de `{{ product.name }}`.

1.  Defina o título do link com o nome do produto usando a sintaxe de property binding `[ ]` da seguinte forma:

    <code-example header="src/app/product-list/product-list.component.html" path="getting-started/src/app/product-list/product-list.component.2.html"></code-example>

    No painel de pré-visualização, passe o mouse sobre o nome de um produto para ver o valor da propriedade vinculada, concatenado com a palavra "details". O Property binding `[ ]` permite usar o valor da propriedade em um template.

    <div class="lightbox">

    <img alt="O texto &quot;nome do produto&quot; recebe o valor da propriedade &quot;name&quot;" src="generated/images/guide/start/template-syntax-product-anchor.png">

    </div>

1.  Adicione as descrições do produto. Em um elemento `<p>`, use uma diretiva `*ngIf` para que o Angular apenas crie o elemento `<p>` se o produto atual tiver uma descrição.

    <code-example header="src/app/product-list/product-list.component.html" path="getting-started/src/app/product-list/product-list.component.3.html"></code-example>

    A aplicação agora exibe o nome e a descrição de cada produto da lista. Observe que o produto final não tem um parágrafo de descrição. O Angular não cria o elemento `<p>` porque a propriedade descrição do produto está vazia.

    <div class="lightbox">

    <img alt="Descrições do produto adicionadas à lista" src="generated/images/guide/start/template-syntax-product-description.png">

    </div>

1.  Adicione um botão para que os usuários possam compartilhar um produto. Vincule o evento `clique` do botão para o método `share()` declarado no `product-list.component.ts`. O Event binding usa parênteses ao redor do evento, como pode ser visto no `(click)` do elemento `<button>`.

    <code-example header="src/app/product-list/product-list.component.html" path="getting-started/src/app/product-list/product-list.component.4.html"></code-example>

    Cada produto agora tem um botão **Share**.

    <div class="lightbox">

    <img alt="Share button added for each product" src="generated/images/guide/start/template-syntax-product-share-button.png">

    </div>

    Clicando no botão **Share** será exibido um alerta com a mensagem "O produto foi compartilhado!".

    <div class="lightbox">

    <img alt="Alert box indicating product has been shared" src="generated/images/guide/start/template-syntax-product-share-alert.png">

    </div>

Ao editar o template, você explorou algumas das funcionalidades mais populares fornecidas pelo Angular. Para obter mais informações, consulte a seção [Introdução aos componentes e templates](guide/architecture-components#template-syntax "Template Syntax").

<a id="passing-data-in"></a>

## Passando dados para um componente filho

Neste momento, a lista de produtos exibe o nome e a descrição de cada produto. O `ProductListComponent` também conta com a propriedade `products`, que recebe os dados do array `products` declarado no arquivo `products.ts`.

O próximo passo é criar um alerta que exibe os dados de um produto do `ProductListComponent`. O alerta verifica o preço do produto e, caso seja maior que &dollar;700, exibe um botão **Notify Me**, que permite aos usuários se cadastrarem para receber notificações quando o produto estiver em promoção.

Nesta seção você aprenderá a criar de um componente filho, chamado `ProductAlertsComponent`, que pode receber dados de seu componente pai, `ProductListComponent`.

1.  Clique no sinal de mais na parte superior do terminal atual para abrir um novo terminal e executar o comando para gerar o componente.

    <div class="lightbox">

    <img alt="Comando do StackBlitz para gerar componente" src="generated/images/guide/start/create-new-terminal.png">

    </div>

1.  In the new terminal, generate a new component named `product-alerts` by running the following command.

    <code-example format="shell" language="shell">

    ng generate component product-alerts

    </code-example>

    O gerador criará os arquivos iniciais para as três partes do componente:

    *   `product-alerts.component.ts`
    *   `product-alerts.component.html`
    *   `product-alerts.component.css`

1.  Abra o arquivo `product-alerts.component.ts`. The `@Component()` decorator indicates that the following class is a component. `@Component()` also provides metadata about the component, including its selector, templates, and styles.

    <code-example header="src/app/product-alerts/product-alerts.component.ts" path="getting-started/src/app/product-alerts/product-alerts.component.1.ts" region="as-generated"></code-example>

    Key features in the `@Component()` are as follows:

    *   O `seletor`, `app-product-alerts`, que identifica o componente. Por convenção, os seletores de componente angular começam com o prefixo `app-`, seguido do nome do componente.

    *   Os nomes no template e o estilo fazem referência aos arquivos HTML e CSS do componente
    *   Na definição do decorator `@Component()`, a classe `ProductAlertsComponent` também é exportada

1.  Para configurar o `ProductAlertsComponent` para receber dados do produto, primeiro importe o decorator `Input` de `@angular/core`.

    <code-example header="src/app/product-alerts/product-alerts.component.ts" path="getting-started/src/app/product-alerts/product-alerts.component.1.ts" region="imports"></code-example>

1.  Na definição da classe `ProductAlertsComponent`, crie uma propriedade chamada `product` com um decorator `@Input()`. O decorator `@Input()` indica que o valor da propriedade será passada por um componente pai.

    <code-example header="src/app/product-alerts/product-alerts.component.ts" path="getting-started/src/app/product-alerts/product-alerts.component.1.ts" region="input-decorator"></code-example>

1.  Open `product-alerts.component.html` and replace the placeholder paragraph with a **Notify Me** button that appears if the product price is over &dollar;700.

    <code-example header="src/app/product-alerts/product-alerts.component.html" path="getting-started/src/app/product-alerts/product-alerts.component.1.html"></code-example>

1.  A CLI adicionou automaticamente o `ProductAlertsComponent` ao `AppModule`, tornando-o acessível por outros componentes na aplicação.

    <code-example header="src/app/app.module.ts" path="getting-started/src/app/app.module.ts" region="declare-product-alerts"></code-example>

1.  Por fim, para exibir `ProductAlertsComponent` como filho de `ProductListComponent`, adicione o elemento `<app-product-alerts>` ao arquivo `product-list.component.html`. Insira o valor do produto atual para o componente usando property binding.

    <code-example header="src/app/product-list/product-list.component.html" path="getting-started/src/app/product-list/product-list.component.5.html" region="app-product-alerts"></code-example>

O novo componente de alerta recebe um produto como entrada da lista. Com essa entrada, ela mostra ou oculta o botão **Notify Me** com base no preço do produto. O preço do Phone XL é maior que &dollar;700, por isso, o botão **Notify Me** é exibido.

<div class="lightbox">

<img alt="Product alert button added to products over $700" src="generated/images/guide/start/product-alert-button.png">

</div>

<a id="output"></a>

## Passando dados para um componente pai

Para fazer o botão **Notify Me** funcionar, o componente filho precisa passar os dados para o componente pai. O componente `ProductAlertsComponent` precisa emitir um evento quando o usuário clicar em **Notify Me** e o `ProductListComponent` precisa responder ao evento.

<div class="alert is-helpful">

Na criação de componentes, a CLI do Angular inclui um `constructor()` vazio, a interface `OnInit` e o método `ngOnInit()`.
Como nestes passos eles não são necessários, os exemplos de código a seguir irá omiti-los para deixar o código mais curto.

</div>

1.  No arquivo `product-alerts.component.ts`, importe `Output` e `EventEmitter` do pacote `@angular/core`.

    <code-example header="src/app/product-alerts/product-alerts.component.ts" path="getting-started/src/app/product-alerts/product-alerts.component.ts" region="imports"></code-example>

1.  Na classe do componente, crie uma propriedade chamada `notify` com o decorador `@Output()` e uma instância de `EventEmitter()`. Inserindo o decorator `@Output()` no `ProductAlertsComponent` será possível emitir um evento quando o valor da propriedade `notify` mudar.

    <code-example header="src/app/product-alerts/product-alerts.component.ts" path="getting-started/src/app/product-alerts/product-alerts.component.ts" region="input-output"></code-example>

1.  No arquivo `product-alerts.component.html`, atualize o botão **Notify Me** utilizando event binding para chamar o método `notify.emit()`.

    <code-example header="src/app/product-alerts/product-alerts.component.html" path="getting-started/src/app/product-alerts/product-alerts.component.html"></code-example>

1.  Defina o comportamento que irá acontecer quando o usuário clicar no botão. O componente pai, `ProductListComponent` &mdash;não o `ProductAlertsComponent`&mdash; atua quando o filho emite o evento. No arquivo `product-list.component.ts`, crie um método `onNotify()`, semelhante ao método `share()`.

    <code-example header="src/app/product-list/product-list.component.ts" path="getting-started/src/app/product-list/product-list.component.ts" region="on-notify"></code-example>

1.  Atualize o componente `ProductListComponent` para receber os dados do `ProductAlertsComponent`.

    No arquivo `product-list.component.html`, vincule o evento do componente `<app-product-alerts>`  ao método `onNotify()` do componente de lista de produtos. O componente `<app-product-alerts>` exibe o botão **Notify Me**.

    <code-example header="src/app/product-list/product-list.component.html" path="getting-started/src/app/product-list/product-list.component.6.html" region="on-notify"></code-example>

1.  Clique no botão **Notify Me** para exibir um alerta com a seguinte mensagem, "Você será notificado quando o produto estiver em promoção".

    <div class="lightbox">

    <img alt="Product alert notification confirmation dialog" src="generated/images/guide/start/product-alert-notification.png">

    </div>

Para obter mais informações sobre a comunicação entre componentes, consulte a seção de [Interação com um componente](guide/component-interaction "Component interaction").

<a id="whats-next"></a>

## Próximos passos

Nesta seção, você criou uma aplicação que percorre uma lista de dados e utiliza a comunicação entre componentes.

Para continuar explorando o Angular e desenvolvendo esta aplicação:

*   Continue na seção [Aplicação com Navegação](start/start-routing "Getting started: In-app navigation") para criar uma página de detalhes do produto.
*   Skip ahead to [Deployment](start/start-deployment "Getting started: Deployment") to move to local development, or deploy your application to Firebase or your own server.

@reviewed 2022-02-28
