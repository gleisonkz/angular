# Adding navigation

This guide builds on the first step of the Getting Started tutorial, [Get started with a basic Angular app](start "Get started with a basic Angular app").

At this stage of development, the online store application has a basic product catalog.

In the following sections, you'll add the following features to the application:

*   Type a URL in the address bar to navigate to a corresponding product page
*   Click links on the page to navigate within your single-page application
*   Click the browser's back and forward buttons to navigate the browser history intuitively

<a id="define-routes"></a>

## Associe um caminho de URL com um componente

O aplicativo já utiliza o Angular `Router` para navegar para o `ProductListComponent`. Esta seção mostra como definir uma rota para mostrar detalhes de produtos individuais.

1. Gerar um novo componente para detalhes do produto. No terminal gera um novo componente  `product-details` executando o seguinte comando:

    <code-example format="shell" language="shell">

    ng generate component product-details

    </code-example>

1.  Em `app.module.ts`, adicionar uma rota para detalhes do produto, com o `caminho(path)` de `products/:productId` e `ProductDetailsComponent` para o `componente``.

    <code-example header="src/app/app.module.ts" path="getting-started/src/app/app.module.ts" region="product-details-route"></code-example>

1.  Abrir `product-list.component.html`.

1.  Modifique o nome do produto para incluir um  `routerLink` com o `product.id` como parâmetro..

    <code-example header="src/app/product-list/product-list.component.html" path="getting-started/src/app/product-list/product-list.component.html" region="router-link"></code-example>

    A diretiva `RouterLink` ajuda você a personalizar o elemento âncora. Neste caso, a rota ou a URL contém um segmento fixo, `/products`. O segmento final é variável, inserindo a propriedade `id` do produto atual. Por exemplo, a URL de um produto com `id` de 1 seria semelhante a `https://getting-started-myfork.stackblitz.io/products/1`.

1.  Verifique se o roteador funciona conforme o esperado clicando no nome do produto. A aplicação deve exibir o `ProductDetailsComponent`, que atualmente diz "product-details works!"

    Observe que a URL na janela de visualização muda.O segmento final é `products/#` onde `#`  é o número da rota em que você clicou.

    <div class="lightbox">

    <img alt="Product details view with updated URL" src="generated/images/guide/start/product-details-works.png">

    </div>

## Ver detalhes do produto

O `ProductDetailsComponent` trata da exibição de cada produto. O Angular Router exibe componentes com base na URL do navegador e [suas rotas definidas.](#define-routes).

Nesta seção, você usará o Angular Router para combinar os dados dos `products` e as informações de rota para exibir os detalhes específicos de cada produto.

1.  In `product-details.component.ts`, import `ActivatedRoute` from `@angular/router`, and the `products` array from `../products`.

    <code-example header="src/app/product-details/product-details.component.ts" path="getting-started/src/app/product-details/product-details.component.1.ts" region="imports"></code-example>

1.  Define the `product` property.

    <code-example header="src/app/product-details/product-details.component.ts" path="getting-started/src/app/product-details/product-details.component.1.ts" region="product-prop"></code-example>

1.  Inject `ActivatedRoute` into the `constructor()` by adding `private route: ActivatedRoute` as an argument within the constructor's parentheses.

    <code-example header="src/app/product-details/product-details.component.ts" path="getting-started/src/app/product-details/product-details.component.1.ts" region="props-methods"></code-example>

    `ActivatedRoute` is specific to each component that the Angular Router loads. `ActivatedRoute` contains information about the route and the route's parameters.

    By injecting `ActivatedRoute`, you are configuring the component to use a service. The [Managing Data](start/start-data "Try it: Managing Data") step covers services in more detail.

1.  In the `ngOnInit()` method, extract the `productId` from the route parameters and find the corresponding product in the `products` array.

    <code-example header="src/app/product-details/product-details.component.ts" path="getting-started/src/app/product-details/product-details.component.1.ts" region="get-product"></code-example>

    The route parameters correspond to the path variables you define in the route. To access the route parameters, we use `route.snapshot`, which is the `ActivatedRouteSnapshot` that contains information about the active route at that particular moment in time. The URL that matches the route provides the `productId` . Angular uses the `productId` to display the details for each unique product.

1.  Update the `ProductDetailsComponent` template to display product details with an `*ngIf`. If a product exists, the `<div>` renders with a name, price, and description.

    <code-example header="src/app/product-details/product-details.component.html" path="getting-started/src/app/product-details/product-details.component.html" region="details"></code-example>

    The line, `<h4>{{ product.price | currency }}</h4>`, uses the `currency` pipe to transform `product.price` from a number to a currency string. A pipe is a way you can transform data in your HTML template. For more information about Angular pipes, see [Pipes](guide/pipes "Pipes").

When users click on a name in the product list, the router navigates them to the distinct URL for the product, shows the `ProductDetailsComponent`, and displays the product details.

<div class="lightbox">

<img alt="Product details page with updated URL and full details displayed" src="generated/images/guide/start/product-details-routed.png">

</div>

For more information about the Angular Router, see [Routing & Navigation](guide/router "Routing & Navigation guide").

## What's next

You have configured your application so you can view product details, each with a distinct URL.

To continue exploring Angular:

*   Continue to [Managing Data](start/start-data "Try it: Managing Data") to add a shopping cart feature, manage cart data, and retrieve external data for shipping prices
*   Skip ahead to [Deployment](start/start-deployment "Try it: Deployment") to deploy your application to Firebase or move to local development

@reviewed 2022-02-28
