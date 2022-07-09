# Começando com Angular

Bem-vindo ao Angular!

Este tutorial lhe apresenta o essencial do Angular ao caminhar por meio da construção de um site de e-commerce com um catálogo, carrinho de compras e formulário de check-out.

Para ajudá-lo a começar logo, este tutorial usa um aplicativo pronto, que você pode examinar e modificar interativamente no [StackBlitz](https://stackblitz.com) &mdash; sem precisar [configurar um ambiente de trabalho local](guide/setup-local "Setup guide"). StackBlitz é um ambiente de desenvolvimento baseado no navegador onde você pode criar, salvar e compartilhar projetos usando uma variedade de tecnologias.

## Pré-requisitos

Para tirar o máximo proveito deste tutorial, você já deve ter um entendimento básico sobre o seguinte.

*   [HTML](https://developer.mozilla.org/docs/Learn/HTML "Learning HTML: Guides and tutorials")
*   [JavaScript](https://developer.mozilla.org/docs/Web/JavaScript "JavaScript")
*   [TypeScript](https://www.typescriptlang.org/ "The TypeScript language")

<a id="components"></a>

## Faça um tour pela aplicação de exemplo

Você constrói aplicações Angular com componentes. Componentes definem áreas de responsabilidade na interface do usuário que permitem reutilizar conjuntos de funcionalidades da UI.

Um componente consiste em três coisas:

|                                    | Detalhes                             |
|:---------------------------------- |:------------------------------------ |
| Uma classe de componente           | Gerencia os dados e funcionalidades. |
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

<img alt="Online store with three components" src="generated/images/guide/start/app-components.png">

</div>

Para obter mais informações sobre componentes, consulte a [Introdução aos Componentes](guide/architecture-components "Introduction to Components and Templates").

<a id="new-project"></a>

## Create the sample project

Para criar o projeto de exemplo, gere o <live-example name="getting-started-v0" noDownload>projeto de exemplo pronto no StackBlitz</live-example>. Para salvar seu trabalho:

1.  Entre no StackBlitz.
1.  Faça um fork do projeto que você gerou.
1.  Salve periodicamente.

<div class="lightbox">

<img alt="Fork the project" src="generated/images/guide/start/fork-the-project.png">

</div>

No StackBlitz, o painel de pré-visualização à direita mostra o estado inicial do aplicativo de exemplo. A pré-visualização apresenta duas áreas:

*   Uma barra superior com o nome da loja, `Minha Loja`, e um botão de pagamento
*   Um cabeçalho para uma lista de produtos, `Produtos`

<div class="lightbox">

<img alt="Starter online store application" src="generated/images/guide/start/new-app-all.gif">

</div>

A seção de projetos à esquerda mostra os arquivos de origem que compõem o aplicativo, incluindo os arquivos de infraestrutura e configuração.

Quando você gera as aplicações de exemplo do StackBlitz que acompanham os tutoriais, o StackBlitz cria os arquivos iniciais e os dados simulados para você. Os arquivos que você usa ao longo do tutorial estão na pasta `src`.

Para obter mais informações sobre como usar o StackBlitz, consulte a [documentação do StackBlitz](https://developer.stackblitz.com/docs/platform).

<a id="product-list"></a>

## Create the product list

Nesta seção, você irá atualizar a aplicação para exibir uma lista de produtos. Você usará dados de produto predefinidos do arquivo de `produtos` e métodos do arquivo `product-list.component.ts`. Esta seção guia você através da edição do HTML, também conhecido como o template.

1.  Na pasta `lista de produtos`, abra o arquivo de modelo `product-list.component.html`.

1.  Add an `*ngFor` structural directive on a `<div>`, as follows.

    <code-example header="src/app/product-list/product-list.component.html" path="getting-started/src/app/product-list/product-list.component.2.html" region="ngfor"></code-example>

    With `*ngFor`, the `<div>` repeats for each product in the list.

    Structural directives shape or reshape the DOM's structure, by adding, removing, and manipulating elements. For more information about structural directives, see [Structural directives](guide/structural-directives).

1.  Inside the `<div>`, add an `<h3>` and `{{ product.name }}`. The `{{ product.name }}` statement is an example of Angular's interpolation syntax. Interpolation `{{ }}` lets you render the property value as text.

    <code-example header="src/app/product-list/product-list.component.html" path="getting-started/src/app/product-list/product-list.component.2.html" region="interpolation"></code-example>

    The preview pane updates to display the name of each product in the list.

    <div class="lightbox">

    <img alt="Product names added to list" src="generated/images/guide/start/template-syntax-product-names.png">

    </div>

1.  To make each product name a link to product details, add the `<a>` element around `{{ product.name }}`.

1.  Set the title to be the product's name by using the property binding `[ ]` syntax, as follows:

    <code-example header="src/app/product-list/product-list.component.html" path="getting-started/src/app/product-list/product-list.component.2.html"></code-example>

    In the preview pane, hover over a product name to see the bound name property value, which is the product name plus the word "details". Property binding `[ ]` lets you use the property value in a template expression.

    <div class="lightbox">

    <img alt="Product name anchor text is product name property" src="generated/images/guide/start/template-syntax-product-anchor.png">

    </div>

1.  Add the product descriptions. On a `<p>` element, use an `*ngIf` directive so that Angular only creates the `<p>` element if the current product has a description.

    <code-example header="src/app/product-list/product-list.component.html" path="getting-started/src/app/product-list/product-list.component.3.html"></code-example>

    The application now displays the name and description of each product in the list. Notice that the final product does not have a description paragraph. Angular doesn't create the `<p>` element because the product's description property is empty.

    <div class="lightbox">

    <img alt="Product descriptions added to list" src="generated/images/guide/start/template-syntax-product-description.png">

    </div>

1.  Add a button so users can share a product. Bind the button's `click` event to the `share()` method in `product-list.component.ts`. Event binding uses a set of parentheses, `( )`, around the event, as in the `(click)` event on the  `<button>` element.

    <code-example header="src/app/product-list/product-list.component.html" path="getting-started/src/app/product-list/product-list.component.4.html"></code-example>

    Each product now has a **Share** button.

    <div class="lightbox">

    <img alt="Share button added for each product" src="generated/images/guide/start/template-syntax-product-share-button.png">

    </div>

    Clicking the **Share** button triggers an alert that states, "The product has been shared!".

    <div class="lightbox">

    <img alt="Alert box indicating product has been shared" src="generated/images/guide/start/template-syntax-product-share-alert.png">

    </div>

In editing the template, you have explored some of the most popular features of Angular templates. For more information, see [Introduction to components and templates](guide/architecture-components#template-syntax "Template Syntax").

<a id="passing-data-in"></a>

## Pass data to a child component

Currently, the product list displays the name and description of each product. The `ProductListComponent` also defines a `products` property that contains imported data for each product from the `products` array in `products.ts`.

The next step is to create a new alert feature that uses product data from the `ProductListComponent`. The alert checks the product's price, and, if the price is greater than &dollar;700, displays a **Notify Me** button that lets users sign up for notifications when the product goes on sale.

This section walks you through creating a child component, `ProductAlertsComponent` that can receive data from its parent component, `ProductListComponent`.

1.  Click on the plus sign above the current terminal to create a new terminal to run the command to generate the component.

    <div class="lightbox">

    <img alt="StackBlitz command to generate component" src="generated/images/guide/start/create-new-terminal.png">

    </div>

1.  In the new terminal, generate a new component named `product-alerts` by running the following command.

    <code-example format="shell" language="shell">

    ng generate component product-alerts

    </code-example>

    The generator creates starter files for the three parts of the component:

    *   `product-alerts.component.ts`
    *   `product-alerts.component.html`
    *   `product-alerts.component.css`

1.  Open `product-alerts.component.ts`. The `@Component()` decorator indicates that the following class is a component. `@Component()` also provides metadata about the component, including its selector, templates, and styles.

    <code-example header="src/app/product-alerts/product-alerts.component.ts" path="getting-started/src/app/product-alerts/product-alerts.component.1.ts" region="as-generated"></code-example>

    Key features in the `@Component()` are as follows:

    *   The `selector`, `app-product-alerts`, identifies the component. By convention, Angular component selectors begin with the prefix `app-`, followed by the component name.

    *   The template and style filenames reference the component's HTML and CSS
    *   The `@Component()` definition also exports the class, `ProductAlertsComponent`, which handles functionality for the component

1.  To set up `ProductAlertsComponent` to receive product data, first import `Input` from `@angular/core`.

    <code-example header="src/app/product-alerts/product-alerts.component.ts" path="getting-started/src/app/product-alerts/product-alerts.component.1.ts" region="imports"></code-example>

1.  In the `ProductAlertsComponent` class definition, define a property named `product` with an `@Input()` decorator. The `@Input()` decorator indicates that the property value passes in from the component's parent, `ProductListComponent`.

    <code-example header="src/app/product-alerts/product-alerts.component.ts" path="getting-started/src/app/product-alerts/product-alerts.component.1.ts" region="input-decorator"></code-example>

1.  Open `product-alerts.component.html` and replace the placeholder paragraph with a **Notify Me** button that appears if the product price is over &dollar;700.

    <code-example header="src/app/product-alerts/product-alerts.component.html" path="getting-started/src/app/product-alerts/product-alerts.component.1.html"></code-example>

1.  The generator automatically added the `ProductAlertsComponent` to the `AppModule` to make it available to other components in the application.

    <code-example header="src/app/app.module.ts" path="getting-started/src/app/app.module.ts" region="declare-product-alerts"></code-example>

1.  Finally, to display `ProductAlertsComponent` as a child of `ProductListComponent`, add the `<app-product-alerts>` element to `product-list.component.html`. Pass the current product as input to the component using property binding.

    <code-example header="src/app/product-list/product-list.component.html" path="getting-started/src/app/product-list/product-list.component.5.html" region="app-product-alerts"></code-example>

The new product alert component takes a product as input from the product list. With that input, it shows or hides the **Notify Me** button, based on the price of the product. The Phone XL price is over &dollar;700, so the **Notify Me** button appears on that product.

<div class="lightbox">

<img alt="Product alert button added to products over $700" src="generated/images/guide/start/product-alert-button.png">

</div>

<a id="output"></a>

## Pass data to a parent component

To make the **Notify Me** button work, the child component needs to notify and pass the data to the parent component. The `ProductAlertsComponent` needs to emit an event when the user clicks **Notify Me** and the `ProductListComponent` needs to respond to the event.

<div class="alert is-helpful">

In new components, the Angular Generator includes an empty `constructor()`, the `OnInit` interface, and the `ngOnInit()` method.
Since these steps don't use them, the following code examples omit them for brevity.

</div>

1.  In `product-alerts.component.ts`, import `Output` and `EventEmitter` from `@angular/core`.

    <code-example header="src/app/product-alerts/product-alerts.component.ts" path="getting-started/src/app/product-alerts/product-alerts.component.ts" region="imports"></code-example>

1.  In the component class, define a property named `notify` with an `@Output()` decorator and an instance of `EventEmitter()`. Configuring `ProductAlertsComponent` with an `@Output()` allows the `ProductAlertsComponent` to emit an event when the value of the `notify` property changes.

    <code-example header="src/app/product-alerts/product-alerts.component.ts" path="getting-started/src/app/product-alerts/product-alerts.component.ts" region="input-output"></code-example>

1.  In `product-alerts.component.html`, update the **Notify Me** button with an event binding to call the `notify.emit()` method.

    <code-example header="src/app/product-alerts/product-alerts.component.html" path="getting-started/src/app/product-alerts/product-alerts.component.html"></code-example>

1.  Define the behavior that happens when the user clicks the button. The parent, `ProductListComponent` &mdash;not the `ProductAlertsComponent`&mdash; acts when the child raises the event. In  `product-list.component.ts`, define an `onNotify()` method, similar to the `share()` method.

    <code-example header="src/app/product-list/product-list.component.ts" path="getting-started/src/app/product-list/product-list.component.ts" region="on-notify"></code-example>

1.  Update the `ProductListComponent` to receive data from the `ProductAlertsComponent`.

    In `product-list.component.html`, bind `<app-product-alerts>`  to the `onNotify()` method of the product list component. `<app-product-alerts>` is what displays the **Notify Me** button.

    <code-example header="src/app/product-list/product-list.component.html" path="getting-started/src/app/product-list/product-list.component.6.html" region="on-notify"></code-example>

1.  Click the **Notify Me** button to trigger an alert which reads, "You will be notified when the product goes on sale".

    <div class="lightbox">

    <img alt="Product alert notification confirmation dialog" src="generated/images/guide/start/product-alert-notification.png">

    </div>

For more information on communication between components, see [Component Interaction](guide/component-interaction "Component interaction").

<a id="whats-next"></a>

## What's next

In this section, you've created an application that iterates through data and features components that communicate with each other.

To continue exploring Angular and developing this application:

*   Continue to [In-app navigation](start/start-routing "Getting started: In-app navigation") to create a product details page.
*   Skip ahead to [Deployment](start/start-deployment "Getting started: Deployment") to move to local development, or deploy your application to Firebase or your own server.

@reviewed 2022-02-28
