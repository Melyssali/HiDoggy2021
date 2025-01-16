# Our routes

## Users routes

```
GET /users : voir tous les utilisateurs
GET /users/:id/dogs : voir tous les chiens d'un utilisateur
GET /users/:id : voir le profil d'un utilisateur spécifique
GET /users/:id/doggers : voir les amis d'un utilisateur spécifique
GET /users/:id/events : voir les évènements futurs et passés d'un utilisateur (visible uniquement des amis ou de l'utilisateur)
GET /users/:id/message : voir les messages d'un utilisateur (uniquement visible par l'utilisateur en question)

POST /users/:id/dogs : ajouter un chien à un utilisateur (Ajouter une sécurité : on ne peut ajouter des chiens qu'à soi-même)
POST /users : Créer un nouvel utilisateur

UPDATE /users/:id : MàJ d'un utilisateur spécifique (admin ou utilisateur en question uniquement)
UPDATE /users/dogs/:id : MàJ du chien d'un utilisateur
UPDATE /users/:id/doggers/:id2 : ajouter un ami ou accepter un ami?

DELETE /users/:id : supprimer un utilisateur (admin ou utilisateur en question uniquement)
DELETE /users/:id/doggers : enlever une personne de sa liste d'amis
DELETE /users/dogs/:id : supprimer un chien d'un utilisateur
```


## Dogs routes

```
GET /dogs : voir tous les chiens
GET /dogs/:id : voir un chien spécifique
GET /dogs/query_string : avec queryString ou req.body trouver un chien spécifique (e.g. race du chien + sexe du propriétaire + localisation)

DELETE /dogs/:id : supprimer un chien (redondant avec DELETE /users/dogs/:id)

```


## Events routes

```
GET /events : voir TOUS les évènements
GET /events/:id : voir un évènement spécifique
GET /events/:location : voir tous les évènements dans une localisation spécifique?

POST /events : Créer un nouvel évènement de rencontre

UPDATE /events/:id : MàJ d'un évènement spécifique

DELETE /events/:id : supprimer un évènement de rencontre
```


## Point_of_interest routes

```
GET /point_of_interest/query_string : voir les évènements correspondant aux conditions données par la query string (certainement le type de point_of_interest)

GET /point_of_interest : voir tous les points d'intérêts ajoutés par les utilisateurs
GET /point_of_interest/:id : voir un point d'intérêt particulier (pourquoi faire?)

POST /point_of_interest : créer un nouveau point d'intérêt

UPDATE /point_of_interest/:id : MàJ d'un point d'intérêt particulier

DELETE /point_of_interest/:id : supprimer un point d'intérêt (admin ou utilisateur qui l'a créée?)
```

## Type routes

```
GET /type : voir TOUS les types
GET /type/:id : voir un type spécifique
GET /type/:id/point_of_interest : voir les points d'intérêt d'un type spécifique

POST /type : Créer un nouveau type

UPDATE /type/:id : MàJ d'un type spécifique

DELETE /type/:id : supprimer un type
```

## Message routes

```
GET /message : voir TOUS les messages (en théorie, personne pas même les admins peuvent le faire sauf en cas de modération?)
GET /message/:id : voir un message spécifique - visible uniquement par l'expéditeur et le destinataire du message
GET /users/:id/message : voir les messages d'un utilisateur (uniquement visible par l'utilisateur en question)

POST /message : Envoyer un message

UPDATE /message/:id : MàJ d'un message spécifique (uniquement par l'expéditeur)

DELETE /message/:id : supprimer un message (uniquement par l'expéditeur)
```