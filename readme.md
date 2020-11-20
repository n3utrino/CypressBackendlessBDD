# Backendless BDD with Angular + Cucumber + Cypress

This is a demo Project to show how to test an Angular Application
with BDD features without a backend.

The BDD Features could be used to implement a compatible backend.

## Benefits of BDD

* Features need to be specified either way why not use Gherkin Syntax?
* Use the .feature Files to drive your tests for the backend or frontend
* Using Cucumber mandates a ubiquitous language for the domain you re working
because to reuse the step definitions they need to match and thus the same
actions, preconditions, outcomes will be phrased the same way => less brainspace needed

## Caveats

* Mind the test pyramid!!!
* The more complex the tests the more work you need to keep them in line
with changing behaviour
* Please don't look at the Angular app. It's ugly, and full of bad practise

## Usage

`ng serve` the ngBdd Angular app

then run `npm run cy:open` in e2e to run the BDD Feature Tests


## Setup

```
e2e
   |cypress
        |integration
            |BDD
                | *.feature
```

Contain the features in German Gherkin syntax.
The step definitions are implemented in the according `.ts` files

## Tools

* Gherkin https://cucumber.io/docs/gherkin/reference/
* Cypress https://www.cypress.io/
* Cypress Cucumber Preprocessor https://github.com/TheBrainFamily/cypress-cucumber-preprocessor#step-definitions-creation
* Angular https://angular.io/
