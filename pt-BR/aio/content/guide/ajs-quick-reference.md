# AngularJS to Angular concepts: Quick reference

*Angular* is the name for the Angular of today and tomorrow.

*AngularJS* is the name for all v1.x versions of Angular.

This guide helps you transition from AngularJS to Angular by mapping AngularJS syntax to the equivalent Angular syntax.

**See the Angular syntax in this <live-example name="ajs-quick-reference"></live-example>**.

## Template basics

Templates are the user-facing part of an Angular application and are written in HTML. The following table lists some of the key AngularJS template features with their equivalent Angular template syntax.

### Bindings/interpolation &rarr; Bindings/interpolation

<table spaces-before="0">
  <tr>
    <th align="left">
      AngularJS
    </th>
    
    <th align="left">
      Angular
    </th>
  </tr>
  
  <tr>
    <td align="left">
      <header>Bindings/interpolation</header> <code-example hideCopy format="html" language="html"> Your favorite hero is: {{vm.favoriteHero}} </code-example> In AngularJS, an expression in curly braces denotes one-way binding. This binds the value of the element to a property in the controller associated with this template. <br /> When using the <code>controller as</code> syntax, the binding is prefixed with the controller alias \(<code>vm</code> or <code>$ctrl</code>\) because you have to be specific about the source of the binding.
    </td>
    
    <td align="left">
      <header>Bindings/interpolation</header> <code-example hideCopy path="ajs-quick-reference/src/app/movie-list.component.html" region="interpolation"></code-example> In Angular, a template expression in curly braces still denotes one-way binding. This binds the value of the element to a property of the component. The context of the binding is implied and is always the associated component, so it needs no reference variable. <br /> For more information, see the <a href="guide/interpolation" title="Text interpolation | Angular" f-id="AioGuideInterpolation" lbb="2" fo="16">Interpolation</a> guide.
    </td>
  </tr>
</table>

### Filters &rarr; Pipes

<table spaces-before="0">
  <tr>
    <th align="left">
      AngularJS
    </th>
    
    <th align="left">
      Angular
    </th>
  </tr>
  
  <tr>
    <td align="left">
      <header>Filters</header> <code-example hideCopy format="html" language="html"> &lt;td&gt; &NewLine; &nbsp; {{movie.title &verbar; uppercase}} &NewLine; &lt;/td&gt; </code-example> To filter output in AngularJS templates, use the pipe \(<code>&verbar;</code>\) character and one or more filters. <br /> This example filters the <code>title</code> property to uppercase.
    </td>
    
    <td align="left">
      <header>Pipes</header> <code-example hideCopy path="ajs-quick-reference/src/app/app.component.html" region="uppercase"></code-example> In Angular you use similar syntax with the pipe \(<code>&verbar;</code>\) character to filter output, but now you call them <strong x-id="1">pipes</strong>. Many \(but not all\) of the built-in filters from AngularJS are built-in pipes in Angular. <br /> For more information, see <a href="guide/ajs-quick-reference#filterspipes" title="Filters/pipes - AngularJS to Angular concepts: Quick reference | Angular" f-id="AioGuideAjsQuickReferenceFiltersPipes" lbb="2" fo="3">Filters/pipes</a>.
    </td>
  </tr>
</table>

### Local variables &rarr; Input variables

<table spaces-before="0">
  <tr>
    <th align="left">
      AngularJS
    </th>
    
    <th align="left">
      Angular
    </th>
  </tr>
  
  <tr>
    <td align="left">
      <header>Local variables</header> <code-example hideCopy format="html" language="html"> &lt;tr ng-repeat="movie in vm.movies"&gt; &NewLine;&nbsp; &lt;td&gt; &NewLine;&nbsp;&nbsp;&nbsp; {{movie.title}} &NewLine;&nbsp; &lt;/td&gt; &NewLine;&lt;/tr&gt; </code-example> Here, <code>movie</code> is a user-defined local variable.
    </td>
    
    <td align="left">
      <header>Input variables</header> <code-example hideCopy path="ajs-quick-reference/src/app/app.component.html" region="local"></code-example> Angular has true template input variables that are explicitly defined using the <code>let</code> keyword. <br /> For more information, see the <a href="guide/structural-directives#structural-directive-shorthand" title="Structural directive shorthand - Writing structural directives | Angular" f-id="AioGuideStructuralDirectivesStructuralDirectiveShorthand" fo="23">Structural directive shorthand</a> section of <a href="guide/structural-directives" title="Writing structural directives | Angular" f-id="AioGuideStructuralDirectives" lbb="2" fo="22">Structural Directives</a>.
    </td>
  </tr>
</table>

## Template directives

AngularJS provides more than seventy built-in directives for templates. Many of them are not needed in Angular because of its more capable and expressive binding system. The following are some of the key AngularJS built-in directives and their equivalents in Angular.

### `ng-app` &rarr; Bootstrapping

<table spaces-before="0">
  <tr>
    <th align="left">
      AngularJS
    </th>
    
    <th align="left">
      Angular
    </th>
  </tr>
  
  <tr>
    <td align="left">
      <header><code>ng-app</code></header> <code-example hideCopy format="html" language="html"> &lt;body ng-app="movieHunter"&gt; </code-example> The application startup process is called <strong x-id="1">bootstrapping</strong>. <br /> Although you can bootstrap an AngularJS application in code, many applications bootstrap declaratively with the <code>ng-app</code> directive, giving it the name of the module \(<code>movieHunter</code>\) of the application.
    </td>
    
    <td align="left">
      <header>Bootstrapping</header> <code-example header="main.ts" format="typescript" hideCopy language="typescript" path="ajs-quick-reference/src/main.ts"></code-example> <code-example hideCopy path="ajs-quick-reference/src/app/app.module.1.ts" header="app.module.ts"></code-example> Angular does not have a bootstrap directive. To launch the application in code, explicitly bootstrap the root module \(<code>AppModule</code>\) of the application in <code>main.ts</code> and the root component \(<code>AppComponent</code>\) of the application in <code>app.module.ts</code>.
    </td>
  </tr>
</table>

### `ng-class` &rarr; `ngClass`

<table spaces-before="0">
  <tr>
    <th align="left">
      AngularJS
    </th>
    
    <th align="left">
      Angular
    </th>
  </tr>
  
  <tr>
    <td align="left">
      <header><code>ng-class</code></header> <code-example hideCopy format="html" language="html"> &lt;div ng-class="{active: isActive}"&gt; &NewLine; &lt;div ng-class="{active: isActive, shazam: isImportant}"&gt; </code-example> In AngularJS, the <code>ng-class</code> directive includes/excludes CSS classes based on an expression. That expression is often a key-value control object with each key of the object defined as a CSS class name, and each value defined as a template expression that evaluates to a Boolean value. <br /> In the first example, the <code>active</code> class is applied to the element if <code>isActive</code> is true. <br /> You can specify multiple classes, as shown in the second example.
    </td>
    
    <td align="left">
      <header><code>ngClass</code></header> <code-example hideCopy path="ajs-quick-reference/src/app/app.component.html" region="ngClass"></code-example> In Angular, the <code>ngClass</code> directive works similarly. It includes/excludes CSS classes based on an expression. <br /> In the first example, the <code>active</code> class is applied to the element if <code>isActive</code> is true. <br /> You can specify multiple classes, as shown in the second example. <br /> Angular also has <strong x-id="1">class binding</strong>, which is a good way to add or remove a single class, as shown in the third example. <br /> For more information see <a href="guide/attribute-binding" title="Attribute, class, and style bindings | Angular" f-id="AioGuideAttributeBinding" lbb="2" fo="9">Attribute, class, and style bindings</a> page.
    </td>
  </tr>
</table>

### `ng-click` &rarr; Bind to the `click` event

<table spaces-before="0">
  <tr>
    <th align="left">
      AngularJS
    </th>
    
    <th align="left">
      Angular
    </th>
  </tr>
  
  <tr>
    <td align="left">
      <header><code>ng-click</code></header> <code-example hideCopy format="html" language="html"> &lt;button ng-click="vm.toggleImage()"&gt; &NewLine; &lt;button ng-click="vm.toggleImage(&dollar;event)"&gt; </code-example> In AngularJS, the <code>ng-click</code> directive allows you to specify custom behavior when an element is clicked. <br /> In the first example, when the user clicks the button, the <code>toggleImage()</code> method in the controller referenced by the <code>vm</code> <code>controller as</code> alias is executed. <br /> The second example demonstrates passing in the <code>$event</code> object, which provides details about the event to the controller.
    </td>
    
    <td align="left">
      <header>Bind to the <code>click</code> event</header> <code-example hideCopy path="ajs-quick-reference/src/app/app.component.html" region="event-binding"></code-example> AngularJS event-based directives do not exist in Angular. Rather, define one-way binding from the template view to the component using <strong x-id="1">event binding</strong>. <br /> For event binding, define the name of the target event within parenthesis and specify a template statement, in quotes, to the right of the equals. Angular then sets up an event handler for the target event. When the event is raised, the handler executes the template statement. <br /> In the first example, when a user clicks the button, the <code>toggleImage()</code> method in the associated component is executed. <br /> The second example demonstrates passing in the <code>$event</code> object, which provides details about the event to the component. <br /> For a list of DOM events, see <a href="https://developer.mozilla.org/docs/Web/Events" title="Event reference | MDN" f-id="MdnDocsWebEvents" lbb="2" fo="24">Event reference</a>. <br /> For more information, see the <a href="guide/event-binding" title="Event binding | Angular" f-id="AioGuideEventBinding" lbb="2" fo="15">Event binding</a> page.
    </td>
  </tr>
</table>

### `ng-controller` &rarr; Component decorator

<table spaces-before="0">
  <tr>
    <th align="left">
      AngularJS
    </th>
    
    <th align="left">
      Angular
    </th>
  </tr>
  
  <tr>
    <td align="left">
      <header><code>ng-controller</code></header> <code-example hideCopy format="html" language="html"> &lt;div ng-controller="MovieListCtrl as vm"&gt; </code-example> In AngularJS, the <code>ng-controller</code> directive attaches a controller to the view. Using the <code>ng-controller</code> \(or defining the controller as part of the routing\) ties the view to the controller code associated with that view.
    </td>
    
    <td align="left">
      <header>Component decorator</header> <code-example hideCopy path="ajs-quick-reference/src/app/movie-list.component.ts" region="component"></code-example> In Angular, the template no longer specifies its associated controller. Rather, the component specifies its associated template as part of the component class decorator. <br /> For more information, see <a href="guide/architecture#components" title="Components - Introduction to Angular concepts | Angular" f-id="AioGuideArchitectureComponents" fo="6">Architecture Overview</a>.
    </td>
  </tr>
</table>

### `ng-hide` &rarr; Bind to the `hidden` property

<table spaces-before="0">
  <tr>
    <th align="left">
      AngularJS
    </th>
    
    <th align="left">
      Angular
    </th>
  </tr>
  
  <tr>
    <td align="left">
      <header><code>ng-hide</code></header> In AngularJS, the <code>ng-hide</code> directive shows or hides the associated HTML element based on an expression. For more information, see <a href="guide/ajs-quick-reference#template-directives" title="Template directives - AngularJS to Angular concepts: Quick reference | Angular" f-id="AioGuideAjsQuickReferenceTemplateDirectives" fo="4">ng-show</a>.
    </td>
    
    <td align="left">
      <header>Bind to the <code>hidden</code> property</header> In Angular, you use property binding; there is no built-in <em x-id="3">hide</em> directive. For more information, see <a href="guide/ajs-quick-reference#template-directives" title="Template directives - AngularJS to Angular concepts: Quick reference | Angular" f-id="AioGuideAjsQuickReferenceTemplateDirectives" fo="4">ng-show</a>.
    </td>
  </tr>
</table>

### `ng-href` &rarr; Bind to the `href` property

<table spaces-before="0">
  <tr>
    <th align="left">
      AngularJS
    </th>
    
    <th align="left">
      Angular
    </th>
  </tr>
  
  <tr>
    <td align="left">
      <header><code>ng-href</code></header> <code-example hideCopy format="html" language="html"> &lt;a ng-href="{{ angularDocsUrl }}"&gt; &NewLine; &nbsp; Angular Docs &NewLine; &lt;/a&gt; </code-example> The <code>ng-href</code> directive allows AngularJS to preprocess the <code>href</code> property so that it can replace the binding expression with the appropriate URL before the browser fetches from that URL. <br /> In AngularJS, the <code>ng-href</code> is often used to activate a route as part of navigation. <br /> <code-example hideCopy format="html" language="html"> &lt;a ng-href="#{{ moviesHash }}"&gt; &NewLine;&nbsp; Movies &NewLine;&lt;/a&gt; </code-example> Routing is handled differently in Angular.
    </td>
    
    <td align="left">
      <header>Bind to the <code>href</code> property</header> <code-example hideCopy path="ajs-quick-reference/src/app/app.component.html" region="href"></code-example> Angular uses property binding; there is no built-in <em x-id="3">href</em> directive. Place the <code>href</code> property of the element in square brackets and set it to a quoted template expression. For more information see the <a href="guide/property-binding" title="Property binding | Angular" f-id="AioGuidePropertyBinding" lbb="2" fo="19">Property binding</a> page. In Angular, <code>href</code> is no longer used for routing. Routing uses <code>routerLink</code>, as shown in the following example. <code-example hideCopy path="ajs-quick-reference/src/app/app.component.html" region="router-link"></code-example> For more information on routing, see <a href="guide/router#defining-a-basic-route" title="Defining a basic route - Common Routing Tasks | Angular" f-id="AioGuideRouterDefiningABasicRoute" fo="21">Defining a basic route</a> in the <a href="guide/router" title="Common Routing Tasks | Angular" f-id="AioGuideRouter" lbb="2" fo="20">Routing & Navigation</a> page.
    </td>
  </tr>
</table>

### `ng-if` &rarr; `*ngIf`

<table spaces-before="0">
  <tr>
    <th align="left">
      AngularJS
    </th>
    
    <th align="left">
      Angular
    </th>
  </tr>
  
  <tr>
    <td align="left">
      <header><code>ng-if</code></header> <code-example hideCopy format="html" language="html"> &lt;table ng-if="movies.length"&gt; </code-example> In AngularJS, the <code>ng-if</code> directive removes or recreates a portion of the DOM, based on an expression. If the expression is false, the element is removed from the DOM. <br /> In this example, the <code>&lt;table&gt;</code> element is removed from the DOM unless the <code>movies</code> array has a length greater than zero.
    </td>
    
    <td align="left">
      <header><code>&ast;ngIf</code></header> <code-example hideCopy path="ajs-quick-reference/src/app/movie-list.component.html" region="ngIf"></code-example> The <code>*ngIf</code> directive in Angular works the same as the <code>ng-if</code> directive in AngularJS. It removes or recreates a portion of the DOM based on an expression. <br /> In this example, the <code>&lt;table&gt;</code> element is removed from the DOM unless the <code>movies</code> array has a length. <br /> The \(<code>*</code>\) before <code>ngIf</code> is required in this example. For more information, see <a href="guide/structural-directives" title="Writing structural directives | Angular" f-id="AioGuideStructuralDirectives" lbb="2" fo="22">Structural Directives</a>.
    </td>
  </tr>
</table>

### `ng-model` &rarr; `ngModel`

<table spaces-before="0">
  <tr>
    <th align="left">
      AngularJS
    </th>
    
    <th align="left">
      Angular
    </th>
  </tr>
  
  <tr>
    <td align="left">
      <header><code>ng-model</code></header> <code-example hideCopy format="html" language="html"> &lt;input ng-model="vm.favoriteHero" /&gt; </code-example> In AngularJS, the <code>ng-model</code> directive binds a form control to a property in the controller associated with the template. This provides <strong x-id="1">two-way binding</strong>, whereby any change made to the value in the view is synchronized with the model, and any change to the model is synchronized with the value in the view.
    </td>
    
    <td align="left">
      <header><code>ngModel</code></header> <code-example hideCopy path="ajs-quick-reference/src/app/movie-list.component.html" region="ngModel"></code-example> In Angular, <strong x-id="1">two-way binding</strong> is indicatedr5t by <code>[()]</code>, descriptively referred to as a "banana in a box". This syntax is a shortcut for defining both property binding \(from the component to the view\) and event binding \(from the view to the component\), thereby providing two-way binding. <br /> For more information on two-way binding with <code>ngModel</code>, see the <a href="guide/built-in-directives#displaying-and-updating-properties-with-ngmodel" title="Displaying and updating properties with ngModel - Built-in directives | Angular" f-id="AioGuideBuiltInDirectivesDisplayingAndUpdatingPropertiesWithNgmodel" fo="12">Displaying and updating properties with <code>ngModel</code></a> section of <a href="guide/built-in-directives" title="Built-in directives | Angular" f-id="AioGuideBuiltInDirectives" lbb="2" fo="11">Built-in directives</a>.
    </td>
  </tr>
</table>

### `ng-repeat` &rarr; `*ngFor`

<table spaces-before="0">
  <tr>
    <th align="left">
      AngularJS
    </th>
    
    <th align="left">
      Angular
    </th>
  </tr>
  
  <tr>
    <td align="left">
      <header><code>ng-repeat</code></header> <code-example hideCopy format="html" language="html"> &lt;tr ng-repeat="movie in vm.movies"&gt; </code-example> In AngularJS, the <code>ng-repeat</code> directive repeats the associated DOM element for each item in the specified collection. <br /> In this example, the table row \(<code>&lt;tr&gt;</code>\) element repeats for each movie object in the collection of movies.
    </td>
    
    <td align="left">
      <header><code>&ast;ngFor</code></header> <code-example hideCopy path="ajs-quick-reference/src/app/movie-list.component.html" region="ngFor"></code-example> The <code>*ngFor</code> directive in Angular is similar to the <code>ng-repeat</code> directive in AngularJS. It repeats the associated DOM element for each item in the specified collection. More accurately, it turns the defined element \(<code>&lt;tr&gt;</code> in this example\) and its contents into a template and uses that template to instantiate a view for each item in the list. <br /> Notice the other syntax differences: The \(<code>*</code>\) before <code>ngFor</code> is required; the <code>let</code> keyword identifies <code>movie</code> as an input variable; the list preposition is <code>of</code>, not <code>in</code>. <br /> For more information, see <a href="guide/structural-directives" title="Writing structural directives | Angular" f-id="AioGuideStructuralDirectives" lbb="2" fo="22">Structural Directives</a>.
    </td>
  </tr>
</table>

### `ng-show` &rarr; Bind to the `hidden` property

<table spaces-before="0">
  <tr>
    <th align="left">
      AngularJS
    </th>
    
    <th align="left">
      Angular
    </th>
  </tr>
  
  <tr>
    <td align="left">
      <header><code>ng-show</code></header> <code-example hideCopy format="html" language="html"> &lt;h3 ng-show="vm.favoriteHero"&gt; &NewLine; &nbsp; Your favorite hero is: {{vm.favoriteHero}} &NewLine; &lt;/h3&gt; </code-example> In AngularJS, the <code>ng-show</code> directive shows or hides the associated DOM element, based on an expression. <br /> In this example, the <code>&lt;div&gt;</code> element is shown if the <code>favoriteHero</code> variable is truthy.
    </td>
    
    <td align="left">
      <header>Bind to the <code>hidden</code> property</header> <code-example hideCopy path="ajs-quick-reference/src/app/movie-list.component.html" region="hidden"></code-example> Angular uses property binding; there is no built-in <em x-id="3">show</em> directive. For hiding and showing elements, bind to the HTML <code>hidden</code> property. <br /> To conditionally display an element, place the <code>hidden</code> property of the element in square brackets and set it to a quoted template expression that evaluates to the <em x-id="3">opposite</em> of <em x-id="3">show</em>. <br /> In this example, the <code>&lt;div&gt;</code> element is hidden if the <code>favoriteHero</code> variable is not truthy. <br /> For more information on property binding, see the <a href="guide/property-binding" title="Property binding | Angular" f-id="AioGuidePropertyBinding" lbb="2" fo="19">Property binding</a> page.
    </td>
  </tr>
</table>

### `ng-src` &rarr; Bind to the `src` property

<table spaces-before="0">
  <tr>
    <th align="left">
      AngularJS
    </th>
    
    <th align="left">
      Angular
    </th>
  </tr>
  
  <tr>
    <td align="left">
      <header><code>ng-src</code></header> <code-example hideCopy format="html" language="html"> &lt;img ng-src="{{movie.imageurl}}"&gt; </code-example> The <code>ng-src</code> directive allows AngularJS to preprocess the <code>src</code> property so that it can replace the binding expression with the appropriate URL before the browser fetches from that URL.
    </td>
    
    <td align="left">
      <header>Bind to the <code>src</code> property</header> <code-example hideCopy path="ajs-quick-reference/src/app/app.component.html" region="src"></code-example> Angular uses property binding; there is no built-in <em x-id="3">src</em> directive. Place the <code>src</code> property in square brackets and set it to a quoted template expression. <br /> For more information on property binding, see the <a href="guide/property-binding" title="Property binding | Angular" f-id="AioGuidePropertyBinding" lbb="2" fo="19">Property binding</a> page.
    </td>
  </tr>
</table>

### `ng-style` &rarr; `ngStyle`

<table spaces-before="0">
  <tr>
    <th align="left">
      AngularJS
    </th>
    
    <th align="left">
      Angular
    </th>
  </tr>
  
  <tr>
    <td align="left">
      <header><code>ng-style</code></header> <code-example hideCopy format="html" language="html"> &lt;div ng-style="{color: colorPreference}"&gt; </code-example> In AngularJS, the <code>ng-style</code> directive sets a CSS style on an HTML element based on an expression. That expression is often a key-value control object with each key of the object defined as a CSS property, and each value defined as an expression that evaluates to a value appropriate for the style. <br /> In the example, the <code>color</code> style is set to the current value of the <code>colorPreference</code> variable.
    </td>
    
    <td align="left">
      <header><code>ngStyle</code></header> <code-example hideCopy path="ajs-quick-reference/src/app/app.component.html" region="ngStyle"></code-example> In Angular, the <code>ngStyle</code> directive works similarly. It sets a CSS style on an HTML element based on an expression. <br /> In the first example, the <code>color</code> style is set to the current value of the <code>colorPreference</code> variable. <br /> Angular also has <strong x-id="1">style binding</strong>, which is good way to set a single style. This is shown in the second example. <br /> For more information on style binding, see the <a href="guide/class-binding" title="Class and style binding | Angular" f-id="AioGuideAttributeBindingBindingToTheStyleAttribute" fo="10">Style binding</a> section of the <a href="guide/attribute-binding" title="Attribute, class, and style bindings | Angular" f-id="AioGuideAttributeBinding" lbb="2" fo="9">Attribute binding</a> page. <br /> For more information on the <code>ngStyle</code> directive, see the <a href="guide/built-in-directives#setting-inline-styles-with-ngstyle" title="Setting inline styles with NgStyle - Built-in directives | Angular" f-id="AioGuideBuiltInDirectivesSettingInlineStylesWithNgstyle" fo="13">NgStyle</a> section of the <a href="guide/built-in-directives" title="Built-in directives | Angular" f-id="AioGuideBuiltInDirectives" lbb="2" fo="11">Built-in directives</a> page.
    </td>
  </tr>
</table>

### `ng-switch` &rarr; `ngSwitch`

<table spaces-before="0">
  <tr>
    <th align="left">
      AngularJS
    </th>
    
    <th align="left">
      Angular
    </th>
  </tr>
  
  <tr>
    <td align="left">
      <header><code>ng-switch</code></header> <code-example hideCopy format="html" language="html"> &lt;div ng-switch="vm.favoriteHero &amp;&amp; vm.checkMovieHero(vm.favoriteHero)"&gt; &NewLine; &nbsp; &lt;div ng-switch-when="true"&gt; &NewLine; &nbsp; &nbsp; Excellent choice. &NewLine; &nbsp; &lt;/div&gt; &NewLine; &nbsp; &lt;div ng-switch-when="false"&gt; &NewLine; &nbsp; &nbsp; No movie, sorry. &NewLine; &nbsp; &lt;/div&gt; &NewLine; &nbsp; &lt;div ng-switch-default&gt; &NewLine; &nbsp; &nbsp; Please enter your favorite hero. &NewLine; &nbsp; &lt;/div&gt; &NewLine; &lt;/div&gt; </code-example> In AngularJS, the <code>ng-switch</code> directive swaps the contents of an element by selecting one of the templates based on the current value of an expression. <br /> In this example, if <code>favoriteHero</code> is not set, the template displays "Please enter &hellip;". If <code>favoriteHero</code> is set, it checks the movie hero by calling a controller method. If that method returns <code>true</code>, the template displays "Excellent choice!". If that methods returns <code>false</code>, the template displays "No movie, sorry!".
    </td>
    
    <td align="left">
      <header><code>ngSwitch</code></header> <code-example hideCopy path="ajs-quick-reference/src/app/movie-list.component.html" region="ngSwitch"></code-example> In Angular, the <code>ngSwitch</code> directive works similarly. It displays an element whose <code>*ngSwitchCase</code> matches the current <code>ngSwitch</code> expression value. <br /> In this example, if <code>favoriteHero</code> is not set, the <code>ngSwitch</code> value is <code>null</code> and <code>*ngSwitchDefault</code> displays, "Please enter &hellip;". If <code>favoriteHero</code> is set, the application checks the movie hero by calling a component method. If that method returns <code>true</code>, the application selects <code>*ngSwitchCase="true"</code> and displays: "Excellent choice!" If that methods returns <code>false</code>, the application selects <code>*ngSwitchCase="false"</code> and displays: "No movie, sorry!" <br /> The \(<code>*</code>\) before <code>ngSwitchCase</code> and <code>ngSwitchDefault</code> is required in this example. <br /> For more information, see <a href="guide/built-in-directives#switching-cases-with-ngswitch" title="Switching cases with NgSwitch - Built-in directives | Angular" f-id="AioGuideBuiltInDirectivesSwitchingCasesWithNgswitch" fo="14">The NgSwitch directives</a> section of the <a href="guide/built-in-directives" title="Built-in directives | Angular" f-id="AioGuideBuiltInDirectives" lbb="2" fo="11">Built-in directives</a> page.
    </td>
  </tr>
</table>

## Filters/pipes

Angular **pipes** provide formatting and transformation for data in the template, similar to AngularJS **filters**. Many of the built-in filters in AngularJS have corresponding pipes in Angular. For more information on pipes, see [Pipes][AioGuidePipes].

### `currency` &rarr; `currency`

<table spaces-before="0">
  <tr>
    <th align="left">
      AngularJS
    </th>
    
    <th align="left">
      Angular
    </th>
  </tr>
  
  <tr>
    <td align="left">
      <header><code>currency</code></header> <code-example hideCopy format="html" language="html"> &lt;td&gt; &NewLine; &nbsp; {{movie.price &verbar; currency}} &NewLine; &lt;/td&gt; </code-example> Formats a number as currency.
    </td>
    
    <td align="left">
      <header><code>currency</code></header> <code-example hideCopy path="ajs-quick-reference/src/app/app.component.html" region="currency"></code-example> The Angular <code>currency</code> pipe is similar although some of the parameters have changed.
    </td>
  </tr>
</table>

### `date` &rarr; `date`

<table spaces-before="0">
  <tr>
    <th align="left">
      AngularJS
    </th>
    
    <th align="left">
      Angular
    </th>
  </tr>
  
  <tr>
    <td align="left">
      <header><code>date</code></header> <code-example hideCopy format="html" language="html"> &lt;td&gt; &NewLine; &nbsp; {{movie.releaseDate &verbar; date}} &NewLine; &lt;/td&gt; </code-example> Formats a date to a string based on the requested format.
    </td>
    
    <td align="left">
      <header><code>date</code></header> <code-example hideCopy path="ajs-quick-reference/src/app/app.component.html" region="date"></code-example> The Angular <code>date</code> pipe is similar.
    </td>
  </tr>
</table>

### `filter` &rarr; none

<table spaces-before="0">
  <tr>
    <th align="left">
      AngularJS
    </th>
    
    <th align="left">
      Angular
    </th>
  </tr>
  
  <tr>
    <td align="left">
      <header><code>filter</code></header> <code-example hideCopy format="html" language="html"> &lt;tr ng-repeat="movie in movieList &verbar; filter: {title:listFilter}"&gt; </code-example> Selects a subset of items from the defined collection, based on the filter criteria.
    </td>
    
    <td align="left">
      <header>none</header> For performance reasons, no comparable pipe exists in Angular. Do all your filtering in the component. If you need the same filtering code in several templates, consider building a custom pipe.
    </td>
  </tr>
</table>

### `json` &rarr; `json`

<table spaces-before="0">
  <tr>
    <th align="left">
      AngularJS
    </th>
    
    <th align="left">
      Angular
    </th>
  </tr>
  
  <tr>
    <td align="left">
      <header><code>json</code></header> <code-example hideCopy format="html" language="html"> &lt;pre&gt; &NewLine; &nbsp; {{movie &verbar; json}} &NewLine; &lt;/pre&gt; </code-example> Converts a JavaScript object into a JSON string. This is useful for debugging.
    </td>
    
    <td align="left">
      <header><code>json</code></header> <code-example hideCopy path="ajs-quick-reference/src/app/app.component.html" region="json"></code-example> The Angular <a href="api/common/JsonPipe" title="JsonPipe | @angular/common - API | Angular" f-id="AioApiCommonJsonpipe" fo="2"><code>json</code></a> pipe does the same thing.
    </td>
  </tr>
</table>

### `limitTo` &rarr; `slice`

<table spaces-before="0">
  <tr>
    <th align="left">
      AngularJS
    </th>
    
    <th align="left">
      Angular
    </th>
  </tr>
  
  <tr>
    <td align="left">
      <header><code>limitTo</code></header> <code-example hideCopy format="html" language="html"> &lt;tr ng-repeat="movie in movieList &verbar; limitTo:2:0"&gt; </code-example> Selects up to the first parameter \(2\) number of items from the collection starting \(optionally\) at the beginning index \(0\).
    </td>
    
    <td align="left">
      <header><code>slice</code></header> <code-example hideCopy path="ajs-quick-reference/src/app/app.component.html" region="slice"></code-example> The <code>SlicePipe</code> does the same thing but the <em x-id="3">order of the parameters is reversed</em>, in keeping with the JavaScript <code>Slice</code> method. The first parameter is the starting index; the second is the limit. As in AngularJS, coding this operation within the component instead could improve performance.
    </td>
  </tr>
</table>

### `lowercase` &rarr; `lowercase`

<table spaces-before="0">
  <tr>
    <th align="left">
      AngularJS
    </th>
    
    <th align="left">
      Angular
    </th>
  </tr>
  
  <tr>
    <td align="left">
      <header><code>lowercase</code></header> <code-example hideCopy format="html" language="html"> &lt;td&gt; &NewLine; &nbsp; {{movie.title &verbar; lowercase}} &NewLine; &lt;/td&gt; </code-example> Converts the string to lowercase.
    </td>
    
    <td align="left">
      <header><code>lowercase</code></header> <code-example hideCopy path="ajs-quick-reference/src/app/app.component.html" region="lowercase"></code-example> The Angular <code>lowercase</code> pipe does the same thing.
    </td>
  </tr>
</table>

### `number` &rarr; `number`

<table spaces-before="0">
  <tr>
    <th align="left">
      AngularJS
    </th>
    
    <th align="left">
      Angular
    </th>
  </tr>
  
  <tr>
    <td align="left">
      <header><code>number</code></header> <code-example hideCopy format="html" language="html"> &lt;td&gt; &NewLine; &nbsp; {{movie.starRating &verbar; number}} &NewLine; &lt;/td&gt; </code-example> Formats a number as text.
    </td>
    
    <td align="left">
      <header><code>number</code></header> <code-example hideCopy path="ajs-quick-reference/src/app/app.component.html" region="number"></code-example> The Angular <a href="api/common/DecimalPipe" title="DecimalPipe | @angular/common - API | Angular" f-id="AioApiCommonDecimalpipe" lbb="2" fo="1"><code>number</code></a> pipe is similar. It provides more functionality when defining the decimal places, as shown in the second example above. <br /> Angular also has a <code>percent</code> pipe, which formats a number as a local percentage as shown in the third example.
    </td>
  </tr>
</table>

### `orderBy` &rarr; none

<table spaces-before="0">
  <tr>
    <th align="left">
      AngularJS
    </th>
    
    <th align="left">
      Angular
    </th>
  </tr>
  
  <tr>
    <td align="left">
      <header><code>orderBy</code></header> <code-example hideCopy format="html" language="html"> &lt;tr ng-repeat="movie in movieList &verbar; orderBy : 'title'"&gt; </code-example> Displays the collection in the order specified by the expression. In this example, the movie title orders the <code>movieList</code>.
    </td>
    
    <td align="left">
      <header>none</header> For performance reasons, no comparable pipe exists in Angular. Instead, use component code to order or sort results. If you need the same ordering or sorting code in several templates, consider building a custom pipe.
    </td>
  </tr>
</table>

## Modules/controllers/components

In both AngularJS and Angular, modules help you organize your application into cohesive blocks of functionality.

In AngularJS, you write the code that provides the model and the methods for the view in a **controller**. In Angular, you build a **component**.

Because much AngularJS code is in JavaScript, JavaScript code is shown in the AngularJS column. The Angular code is shown using TypeScript.

### IIFE &rarr; none

<table spaces-before="0">
  <tr>
    <th align="left">
      AngularJS
    </th>
    
    <th align="left">
      Angular
    </th>
  </tr>
  
  <tr>
    <td align="left">
      <header>IIFE</header> <code-example hideCopy format="typescript" language="typescript"> ( &NewLine;&nbsp; function () { &NewLine;&nbsp;&nbsp;&nbsp; &hellip; &NewLine;&nbsp; }() &NewLine;); </code-example> In AngularJS, an immediately invoked function expression \(or IIFE\) around controller code keeps it out of the global namespace.
    </td>
    
    <td align="left">
      <header>none</header> This is a nonissue in Angular because ES 2015 modules handle the namespacing for you. <br /> For more information on modules, see the <a href="guide/architecture#modules" title="Modules - Introduction to Angular concepts | Angular" f-id="AioGuideArchitectureModules" fo="7">Modules</a> section of the <a href="guide/architecture" title="Introduction to Angular concepts | Angular" f-id="AioGuideArchitecture" lbb="2" fo="5">Architecture Overview</a>.
    </td>
  </tr>
</table>

### Angular modules &rarr; `NgModules`

<table spaces-before="0">
  <tr>
    <th align="left">
      AngularJS
    </th>
    
    <th align="left">
      Angular
    </th>
  </tr>
  
  <tr>
    <td align="left">
      <header>Angular modules</header> <code-example hideCopy format="typescript" language="typescript"> angular .module( &NewLine;&nbsp; "movieHunter", &NewLine;&nbsp; [ &NewLine;&nbsp;&nbsp;&nbsp; "ngRoute" &NewLine;&nbsp; ] &NewLine;); </code-example> In AngularJS, an Angular module keeps track of controllers, services, and other code. The second argument defines the list of other modules that this module depends upon.
    </td>
    
    <td align="left">
      <header><code>NgModules</code></header> <code-example hideCopy path="ajs-quick-reference/src/app/app.module.1.ts"></code-example> NgModules, defined with the <code>NgModule</code> decorator, serve the same purpose: <ul> <li>`imports`: specifies the list of other modules that this module depends upon</li> <li>`declaration`: keeps track of your components, pipes, and directives.</li> </ul> For more information on modules, see <a href="guide/ngmodules" title="NgModules | Angular" f-id="AioGuideNgmodules" lbb="2" fo="17">NgModules</a>.
    </td>
  </tr>
</table>

### Controller registration &rarr; Component decorator

<table spaces-before="0">
  <tr>
    <th align="left">
      AngularJS
    </th>
    
    <th align="left">
      Angular
    </th>
  </tr>
  
  <tr>
    <td align="left">
      <header>Controller registration</header> <code-example hideCopy format="typescript" language="typescript"> angular .module( &NewLine;&nbsp; "movieHunter" &NewLine;) .controller( &NewLine;&nbsp; "MovieListCtrl", &NewLine;&nbsp; [ &NewLine;&nbsp;&nbsp;&nbsp; "movieService", &NewLine;&nbsp;&nbsp;&nbsp; MovieListCtrl &NewLine;&nbsp; ] &NewLine;); </code-example> AngularJS has code in each controller that looks up an appropriate Angular module and registers the controller with that module. <br /> The first argument is the controller name. The second argument defines the string names of all dependencies injected into this controller, and a reference to the controller function.
    </td>
    
    <td align="left">
      <header>Component decorator</header> <code-example hideCopy path="ajs-quick-reference/src/app/movie-list.component.ts" region="component"></code-example> Angular adds a decorator to the component class to provide any required metadata. The <code>@Component</code> decorator declares that the class is a component and provides metadata about that component such as its selector \(or tag\) and its template. <br /> This is how you associate a template with logic, which is defined in the component class. <br /> For more information, see the <a href="guide/architecture#components" title="Components - Introduction to Angular concepts | Angular" f-id="AioGuideArchitectureComponents" fo="6">Components</a> section of the <a href="guide/architecture" title="Introduction to Angular concepts | Angular" f-id="AioGuideArchitecture" lbb="2" fo="5">Architecture Overview</a> page.
    </td>
  </tr>
</table>

### Controller function &rarr; Component class

<table spaces-before="0">
  <tr>
    <th align="left">
      AngularJS
    </th>
    
    <th align="left">
      Angular
    </th>
  </tr>
  
  <tr>
    <td align="left">
      <header>Controller function</header> <code-example hideCopy format="typescript" language="typescript"> function MovieListCtrl(movieService) { &NewLine; } </code-example> In AngularJS, you write the code for the model and methods in a controller function.
    </td>
    
    <td align="left">
      <header>Component class</header> <code-example hideCopy path="ajs-quick-reference/src/app/movie-list.component.ts" region="class"></code-example> In Angular, you create a component class to contain the data model and control methods. Use the TypeScript <code>export</code> keyword to export the class so that the functionality can be imported into NgModules. <br /> For more information, see the <a href="guide/architecture#components" title="Components - Introduction to Angular concepts | Angular" f-id="AioGuideArchitectureComponents" fo="6">Components</a> section of the <a href="guide/architecture" title="Introduction to Angular concepts | Angular" f-id="AioGuideArchitecture" lbb="2" fo="5">Architecture Overview</a> page.
    </td>
  </tr>
</table>

### Dependency injection &rarr; Dependency injection

<table spaces-before="0">
  <tr>
    <th align="left">
      AngularJS
    </th>
    
    <th align="left">
      Angular
    </th>
  </tr>
  
  <tr>
    <td align="left">
      <header>Dependency injection</header> <code-example hideCopy format="typescript" language="typescript"> MovieListCtrl.&dollar;inject = [ &NewLine;&nbsp; 'MovieService' &NewLine;]; &NewLine;function MovieListCtrl(movieService) { &NewLine;} </code-example> In AngularJS, you pass in any dependencies as controller function arguments. This example injects a <code>MovieService</code>. <br /> To guard against minification problems, tell Angular explicitly that it should inject an instance of the <code>MovieService</code> in the first parameter.
    </td>
    
    <td align="left">
      <header>Dependency injection</header> <code-example hideCopy path="ajs-quick-reference/src/app/movie-list.component.ts" region="di"></code-example> In Angular, you pass in dependencies as arguments to the component class constructor. This example injects a <code>MovieService</code>. The TypeScript type of the first parameter tells Angular what to inject, even after minification. <br /> For more information, see the <a href="guide/architecture#services-and-dependency-injection" title="Services and dependency injection - Introduction to Angular concepts | Angular" f-id="AioGuideArchitectureServicesAndDependencyInjection" fo="8">Dependency injection</a> section of the <a href="guide/architecture" title="Introduction to Angular concepts | Angular" f-id="AioGuideArchitecture" lbb="2" fo="5">Architecture Overview</a>.
    </td>
  </tr>
</table>

## Style sheets

Style sheets give your application a nice look. In AngularJS, you specify the style sheets for your entire application. As the application grows over time, the styles for the many parts of the application merge, which can cause unexpected results. In Angular, you can still define style sheets for your entire application. But now you can also encapsulate a style sheet within a specific component.

### `Link` tag &rarr; `styles` configuration or `styleUrls`

<table spaces-before="0">
  <tr>
    <th align="left">
      AngularJS
    </th>
    
    <th align="left">
      Angular
    </th>
  </tr>
  
  <tr>
    <td align="left">
      <header><code>Link</code> tag</header> <code-example hideCopy format="html" language="html"> &lt;link href="styles.css" &NewLine;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; rel="stylesheet" /&gt; </code-example> AngularJS, uses a <code>link</code> tag in the head section of the <code>index.html</code> file to define the styles for the application.
    </td>
    
    <td align="left">
      <header><code>styles</code> configuration</header> <code-example hideCopy path="ajs-quick-reference/.angular-cli.1.json" region="styles"></code-example> With the Angular CLI, you can configure your global styles in the <code>angular.json</code> file. You can rename the extension to <code>.scss</code> to use sass. <br /><br /> <header><code>styleUrls</code></header> In Angular, you can use the <code>styles</code> or <code>styleUrls</code> property of the <code>@Component</code> metadata to define a style sheet for a particular component. <br /> <code-example hideCopy path="ajs-quick-reference/src/app/movie-list.component.ts" region="style-url"></code-example> This allows you to set appropriate styles for individual components that will not leak into other parts of the application.
    </td>
  </tr>
</table>

<!-- links -->



<!-- external links -->



<!-- end links -->

@reviewed 2022-02-28

[AioGuidePipes]: guide/pipes "Transforming Data Using Pipes | Angular"
