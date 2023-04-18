# Adicionando navegação

Este guia é a continuação da seção [Primeiros passos](start "Get started with a basic Angular app").

Nesta fase de desenvolvimento, nossa aplicação de loja virtual tem um catálogo básico de produtos.

In the following sections, you'll add the following features to the application:

*   Digite uma URL na barra de endereços para navegar para a página de produto correspondente
*   Clique nos links da página para navegar na sua aplicação
*   Click the browser's back and forward buttons to navigate the browser history intuitively

<a id="define-routes"></a>

## Associar o caminho de uma URL a um componente

The application already uses the Angular `Router` to navigate to the `ProductListComponent`. This section shows you how to define a route to show individual product details.

1.  Crie um componente para apresentar os detalhes do produto. No terminal, execute o seguinte comando:

    <code-example format="shell" language="shell">

    ng generate component product-details

    </code-example>

1.  In `app.module.ts`, add a route for product details, with a `path` of `products/:productId` and `ProductDetailsComponent` for the `component`.

    <code-example header="src/app/app.module.ts" path="getting-started/src/app/app.module.ts" region="product-details-route"></code-example>

1.  Abra o arquivo `product-list.component.html`.

1.  Modify the product name anchor to include a `routerLink` with the `product.id` as a parameter.

    <code-example header="src/app/product-list/product-list.component.html" path="getting-started/src/app/product-list/product-list.component.html" region="router-link"></code-example>

    A directiva `RouterLink` é útil para personalizar o elemento âncora. Neste caso, a rota ou a URL contém o segmento fixo `/products`. O segmento final é variável, inserindo o valor da propriedade `id` do produto atual. Por exemplo, a URL de um produto com `id` 1 seria similar a `https://getting-started-myfork.stackblitz.io/products/1`.

1.  Verifique se o router funciona conforme o esperado clicando no nome do produto. A aplicação deve exibir o componente `ProductDetailsComponent`, com o texto "product-details works!"

    Observe que a URL na janela de pré-visualização muda. O segmento final é `produtos/#` onde `#` é o número da rota em que você clicou.

    <div class="lightbox">

    <img alt="Exibição de detalhes do produto com URL atualizada" src="generated/images/guide/start/product-details-works.png">

    </div>

## Ver detalhes do produto

O componente `ProductDetailsComponent` trata a exibição de cada produto. O Router do Angular exibe os componentes com base na URL do navegador e [suas rotas definidas](#define-routes).

In this section, you'll use the Angular Router to combine the `products` data and route information to display the specific details for each product.

1.  No arquivo `product-details.component.ts`, importe `ActivatedRoute` do `@angular/router`, e o array de `produtos` de `../products`.

    <code-example header="src/app/product-details/product-details.component.ts" path="getting-started/src/app/product-details/product-details.component.1.ts" region="imports"></code-example>

1.  Crie a propriedade `product`.

    <code-example header="src/app/product-details/product-details.component.ts" path="getting-started/src/app/product-details/product-details.component.1.ts" region="product-prop"></code-example>

1.  Injete o `ActivatedRoute` no `constructor()` adicionando `private route: ActivatedRoute` como parâmetro.

    <code-example header="src/app/product-details/product-details.component.ts" path="getting-started/src/app/product-details/product-details.component.1.ts" region="props-methods"></code-example>

    A classe `ActivatedRoute` é específica para cada componente que o Router do Angular carrega. A classe `ActivatedRoute` contém os dados da rota e seus parâmetros.

    Injetando a classe `ActivatedRoute`, você está configurando o componente para usar um serviço. A seção [Gerenciando Dados](start/start-data "Try it: Managing Data") aborda serviços com mais detalhes.

1.  No método `ngOnInit()`, extraia o `productId` a partir dos parâmetros de rota e busque o produto correspondente no array `produtos`.

    <code-example header="src/app/product-details/product-details.component.ts" path="getting-started/src/app/product-details/product-details.component.1.ts" region="get-product"></code-example>

    Os parâmetros de rota correspondem às variáveis definidas no path de cada rota. Para acessar os parâmetros de rota, usamos `route.snapshot`, que retorna uma instância da classe `ActivatedRouteSnapshot`. Essa classe contém informações sobre a rota ativa naquele momento. A URL que corresponde à rota fornece o `productId`. Angular uses the `productId` to display the details for each unique product.

1.  Atualize o template do componente `ProductDetailsComponent` para exibir detalhes do produto com um `*ngIf`. Se um produto existir, será exibido uma `<div>` com um nome, preço e descrição.

    <code-example header="src/app/product-details/product-details.component.html" path="getting-started/src/app/product-details/product-details.component.html" region="details"></code-example>

    A linha, `<h4>{{ product.price | currency }}</h4>`, usa o pipe `currency` para transformar o número da propriedade `product.price` em uma string com o valor e a respectiva moeda. A pipe is a way you can transform data in your HTML template. For more information about Angular pipes, see [Pipes](guide/pipes "Pipes").

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
