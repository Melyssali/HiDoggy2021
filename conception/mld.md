# MLD Draft

## MLD


```
event(id, user_id(FK), name, date, time, location, evaluation, access_PMR)

dog(id, user_id(FK), profile_pic, name, gender, race, allergy, vaccination(?))

user(id, message_id(FK), pseudo, password, birth_date, gender, mail, phone_number, profile_pic, city, languages, fellow_doggers, registration_date)

point_of_interest(id, user_id(FK), name, location, type, logo)

type(id, name, logo)

participate(id, event_id(FK), user_id(FK))

add(id, user_id(FK), point_of_interest_id(FK))

message(id, content, user_id(FK))

```

## Rappel des règles

### Règle n°1

Toute entité du MCD devient une table du MLD. Les propriétés de ces entités deviennent les colonnes des tables. L’identifiant de l’entité devient une colonne comme les autres, simplement assortie d’une contrainte d’unicité. (La clé primaire de la table sera un id auto-généré par le SGBD)


### Règle n°2

Si l’une des cardinalités max. vaut 1, une clé étrangère est créée du côté de l’entité où se trouve le 1. Cette clé étrangère fera référence à l’identifiant dans la table associée.

Dans notre exemple (Livre est écrit par 1 Auteur), c’est donc le Livre qui aura une clé étrangère vers l’Auteur.


### Règle n°3

Si les deux cardinalités max. sont n, donc une relation « plusieurs à plusieurs » la relation devient une table à part entière en relation avec les deux entités. On parle de table de liaison, d’association, de jonction ou de correspondance. Cette table de liaison contient 2 clefs étrangères vers les 2 tables à lier.