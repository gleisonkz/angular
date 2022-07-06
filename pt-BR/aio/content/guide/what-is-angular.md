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

To use this component, you write the following in a template:

<code-example format="html" language="html" path="what-is-angular/src/app/app.component.html" region="hello-world-selector"></code-example>

When Angular renders this component, the resulting DOM looks like this:

<code-example format="html" language="html" path="what-is-angular/src/app/hello-world-example.html"></code-example>

Angular's component model offers strong encapsulation and an intuitive application structure. Components also make your application painless to unit test and can improve the overall readability of your code.

For more information on what to do with components, see the [Components](guide/component-overview) section.

<a id="templates"></a>

### Templates

Every component has an HTML template that declares how that component renders. You define this template either inline or by file path.

Angular extends HTML with additional syntax that lets you insert dynamic values from your component. Angular automatically updates the rendered DOM when your component's state changes. One application of this feature is inserting dynamic text, as shown in the following example.

<code-example format="html" language="html" path="what-is-angular/src/app/hello-world-interpolation/hello-world-interpolation.component.html" region="say-hello"></code-example>

The value for message comes from the component class:

<code-example format="typescript" language="typescript" path="what-is-angular/src/app/hello-world-interpolation/hello-world-interpolation.component.ts"></code-example>

When the application loads the component and its template, the user sees the following:

<code-example format="shell" language="html">

&lt;p&gt;Hello, World!&lt;/p&gt;

</code-example>

Notice the use of double curly braces—they instruct Angular to interpolate the contents within them.

Angular also supports property bindings, to help you set values for properties and attributes of HTML elements and pass values to your application's presentation logic.

<code-example format="html" language="html" path="what-is-angular/src/app/hello-world-bindings/hello-world-bindings.component.html" region="bindings"></code-example>

Notice the use of the square brackets—that syntax indicates that you're binding the property or attribute to a value in the component class.

Declare event listeners to listen for and respond to user actions such as keystrokes, mouse movements, clicks, and touches. You declare an event listener by specifying the event name in parentheses:

<code-example format="html" language="html" path="what-is-angular/src/app/hello-world-bindings/hello-world-bindings.component.html" region="event-binding"></code-example>

The preceding example calls a method, which is defined in the component class:

<code-example format="typescript" language="typescript" path="what-is-angular/src/app/hello-world-bindings/hello-world-bindings.component.ts" region="method"></code-example>

The following is a combined example of Interpolation, Property Binding and Event Binding within an Angular template:

<code-tabs linenums="true">
    <code-pane header="hello-world-bindings.component.ts" path="what-is-angular/src/app/hello-world-bindings/hello-world-bindings.component.ts"></code-pane>
    <code-pane header="hello-world-bindings.component.html" path="what-is-angular/src/app/hello-world-bindings/hello-world-bindings.component.html"></code-pane>
</code-tabs>

Add additional functionality to your templates through the use of [directives](guide/built-in-directives). The most popular directives in Angular are `*ngIf` and `*ngFor`. Use directives to perform a variety of tasks, such as dynamically modifying the DOM structure. And create your own custom directives to create great user experiences.

The following code is an example of the `*ngIf` directive.

<code-tabs linenums="true">
  <code-pane header="hello-world-ngif.component.ts" path="what-is-angular/src/app/hello-world-ngif/hello-world-ngif.component.ts"></code-pane>
  <code-pane header="hello-world-ngif.component.html" path="what-is-angular/src/app/hello-world-ngif/hello-world-ngif.component.html"></code-pane>
</code-tabs>

Angular's declarative templates let you cleanly separate your application's logic from its presentation. Templates are based on standard HTML, for ease in building, maintaining, and updating.

For more information on templates, see the [Templates](guide/template-syntax) section.

<a id="di"></a>

### Dependency injection

Dependency injection lets you declare the dependencies of your TypeScript classes without taking care of their instantiation. Instead, Angular handles the instantiation for you. This design pattern lets you write more testable and flexible code. Even though understanding dependency injection is not critical to start using Angular, we strongly recommend it as a best practice and many aspects of Angular take advantage of it to some degree.

To illustrate how dependency injection works, consider the following example. The first file, `logger.service.ts`, defines a `Logger` class. This class contains a `writeCount` function that logs a number to the console.

<code-example format="typescript" language="typescript" path="what-is-angular/src/app/logger.service.ts"></code-example>

Next, the `hello-world-di.component.ts` file defines an Angular component. This component contains a button that uses the `writeCount` function of the Logger class. To access that function, the `Logger` service is injected into the `HelloWorldDI` class by adding `private logger: Logger` to the constructor.

<code-example format="typescript" language="typescript" path="what-is-angular/src/app/hello-world-di/hello-world-di.component.ts"></code-example>

For more information about dependency injection and Angular, see the [Dependency injection in Angular](guide/dependency-injection) section.

<a id="cli"></a>

## Angular CLI

The Angular CLI is the fastest, straightforward, and recommended way to develop Angular applications. The Angular CLI makes a number of tasks trouble-free. Here are some examples:

| Command                     | Details                                                               |
|:--------------------------- |:--------------------------------------------------------------------- |
| [ng build](cli/build)       | Compiles an Angular app into an output directory.                     |
| [ng serve](cli/serve)       | Builds and serves your application, rebuilding on file changes.       |
| [ng generate](cli/generate) | Generates or modifies files based on a schematic.                     |
| [ng test](cli/test)         | Runs unit tests on a given project.                                   |
| [ng e2e](cli/e2e)           | Builds and serves an Angular application, then runs end-to-end tests. |

You'll find the Angular CLI a valuable tool for building out your applications.

For more information about the Angular CLI, see the [CLI Reference](cli) section.

<a id="1p-libraries"></a>

## First-party libraries

The section, [Angular applications: The essentials](#essentials), provides a brief overview of a couple of the key architectural elements you'll use when building Angular applications. But the many benefits of Angular really become apparent when your application grows and you want to add additional functions such as site navigation or user input. Use the Angular platform to incorporate one of the many first-party libraries that Angular provides.

Some of the libraries available to you include:

| Library                                   | Details                                                                                                                                        |
|:----------------------------------------- |:---------------------------------------------------------------------------------------------------------------------------------------------- |
| [Angular Router](guide/router)            | Advanced client-side navigation and routing based on Angular components. Supports lazy-loading, nested routes, custom path matching, and more. |
| [Angular Forms](guide/forms-overview)     | Uniform system for form participation and validation.                                                                                          |
| [Angular HttpClient](guide/http)          | Robust HTTP client that can power more advanced client-server communication.                                                                   |
| [Angular Animations](guide/animations)    | Rich system for driving animations based on application state.                                                                                 |
| [Angular PWA](guide/service-worker-intro) | Tools for building Progressive Web Applications \(PWAs\) including a service worker and Web app manifest.                                    |
| [Angular Schematics](guide/schematics)    | Automated scaffolding, refactoring, and update tools that simplify development at large scale.                                                 |

These libraries expand your application's functionality while also letting you focus more on the features that make your application unique. Add these libraries knowing that they're designed to integrate seamlessly into and update simultaneously with the Angular framework.

These libraries are only required if and when they can help you add functionality to your applications or solve a particular problem.

## Next steps

This topic is intended to give you a brief overview of what Angular is, the advantages it provides, and what to expect as you start to build your applications.

To see Angular in action, see our [Getting Started](start) tutorial. This tutorial uses [stackblitz.com](https://stackblitz.com), for you to explore a working example of Angular without any installation requirements.

To explore Angular's capabilities further, we recommend reading through the sections, Understanding Angular and Developer Guides.

<!-- links -->

<!-- external links -->

<!-- end links -->

@reviewed 2022-02-28
