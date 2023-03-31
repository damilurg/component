# Generator of html elements

## Description
#### You can use the Component class to generate elements on a site page. In the current version there is no need to generate all kinds of html elements. It is enough to generate several kinds of buttons.
#### Depending on the parameters passed, the Component class can create a different kind of the same page element.
#### The input to the Component class is data about the element being created:
1) Template - the template (html representation) of the page element;
2) Display options - with their help you can change the appearance of the page element;
3) Modifiers - are intended for "fine tuning" of page element display;
4) Text values which can contain page elements;
5) Events - the list of actions on each event.
As an output we get a generated page item created by class Component depending on input data.
