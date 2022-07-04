# Refer to locales by ID

Angular uses the Unicode *locale identifier* \(Unicode locale ID\) to find the correct locale data for internationalization of text strings.

<div class="callout is-helpful">

<header>Unicode locale ID</header>

*   A locale ID conforms to the [Unicode Common Locale Data Repository (CLDR) core specification][UnicodeCldrDevelopmentCoreSpecification].
    For more information about locale IDs, see [Unicode Language and Locale Identifiers][UnicodeCldrDevelopmentCoreSpecificationHVgyyng33o798].

*   CLDR and Angular use [BCP 47 tags][RfcEditorInfoBcp47] as the base for the locale ID

</div>

A locale ID specifies the language, country, and an optional code for further variants or subdivisions. A locale ID consists of the language identifier, a hyphen \(`-`\) character, and the locale extension.

<code-example>

{language_id}-{locale_extension}

</code-example>

<div class="alert is-helpful">

To accurately translate your Angular project, you must decide which languages and locales you are targeting for internationalization.

Many countries share the same language, but differ in usage.
The differences include grammar, punctuation, formats for currency, decimal numbers, dates, and so on.

</div>

For the examples in this guide, use the following languages and locales.

| Language | Locale                   | Unicode locale ID |
|:-------- |:------------------------ |:----------------- |
| English  | Canada                   | `en-CA`           |
| English  | United States of America | `en-US`           |
| French   | Canada                   | `fr-CA`           |
| French   | France                   | `fr-FR`           |

The [Angular repository][GithubAngularAngularTreeMasterPackagesCommonLocales] includes common locales.

<div class="callout is-helpful">

For a list of language codes, see [ISO 639-2][LocStandardsIso6392].

</div>

## Set the source locale ID

Use the Angular CLI to set the source language in which you are writing the component template and code.

By default, Angular uses `en-US` as the source locale of your project.

To change the source locale of your project for the build, complete the following actions.

1.  Open the [`angular.json`][AioGuideWorkspaceConfig] workspace build configuration file.
1.  Change the source locale in the `sourceLocale` field.

## What's next

*   [Format data based on locale][AioGuideI18nCommonFormatDataLocale]

<!-- links -->



<!-- external links -->



<!-- end links -->

@reviewed 2021-10-28</code-example>

[AioGuideI18nCommonFormatDataLocale]: guide/i18n-common-format-data-locale "Format data based on locale | Angular"

[AioGuideWorkspaceConfig]: guide/workspace-config "Angular workspace configuration | Angular"

[GithubAngularAngularTreeMasterPackagesCommonLocales]: https://github.com/angular/angular/tree/main/packages/common/locales "angular/packages/common/locales | angular/angular | GitHub"
