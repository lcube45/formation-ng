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
* Routing : forRoot (instancie le routeur) alors que forChild (utilise l'instance déjà créée)
* Server side rendering pour les problèmes de SEO/Référencement
* Lazy loading de module gère le préfixe des paths de routes
* Si Lazy Loading de module, il faut utiliser le pre loading de module
* Un composant ça se déclare, ça s'importe
* Un module ça s'exporte
* Transclusion = projection de template
* ngx translate : library i18n
* stratégie "changement de détection" (ex: OnPush)
* Ne pas passer d'objet complet à une directive qui surveille des changements, il faut passer des propriétés (car sinon l'adresse mémoire de l'objet n'évoluant pas, ...)

## Utilisation Firebase
* déploiement de notre application avec firebase
* ng deploy (build and push src to firebase)

## PWA
* ng add @angular/pwa
* realfavicongenerator.net
