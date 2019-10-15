# RxJS

## Type d'observables

* Observable (flux de données distribué à partir du moment ou il y a un souscripteur)
* Subject (flux de données distribué sans cache même si pas de souscripteur)
* BehaviorSubject (idem subject avec 1 niveau de cache)
* ReplaySubject (behavior avec cache plus important)
* AsyncSubject (behavior avec dernier élément en cache)

## Nature d'observables

* cold (froid) : pas de désinscription au flux (faite après le complete)
* chaud (hot) : désinscription explicite

## Modules, components
Modules -> Components

## Poids des sélecteurs CSS
balise => 1
attribut => 10
id => 100
style => 1000
important => the boss !

## Wrapper bootstrap pour Angular
ngx-bootstrap
ng-bootstrap

## Schematics
ng add @ng-bootstrap/schematics
ng update @ng-bootstrap/ng-bootstrap

## Types de composants
Composants d'affichage (silly)
Composants de conteneurs (organisent d'autres composants)
Composants de layout (mise en page)

## Génération de documentation
npm -g @compodoc/compodoc
npm run generate-doc

## Good to know
* interpolation : {{ mavar }}
* property binding : []={}

## Bonnes pratiques
* Faire communiquer des composants entre eux via des services
* Les composants ne devraient tirer leur logique que des services
* Convention : ajouter un dollar en fin de nom de variables pour identifier des observables
* Créer une librairie consiste à encapsuler un module pour être réutiliser
* Toujours injecter les services en private
