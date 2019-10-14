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

