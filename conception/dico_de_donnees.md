# Dictionnaire de données

## Table 'User'

| Champ         | Type          | Spécificités        | Description        |
| ------------- |:-------------:| -------------:      |-------------------:|
| id            | INTEGER           | IDENTITY PRIMARY KEY| ID de l'utilisateur|
| name          | TEXT          | NOT NULL, UNIQUE    | Pseudo de l'utilisateur|
| birthdate    | TIMESTAMPTZ   | NOT NULL        | Date de naissance de l'utilisateur|
| gender        | TEXT          | NOT NULL            | Sexe de l'utilisateur (choix entre Homme, Femme, non-binaire, undefined?)                   |
| profile_pic   | TEXT          | DEFAULT VALUE (DEFAULT PATH TO DEFAULT PICTURE)| Chemin vers la photo de l'utilisateur. Valeur par défaut sera un chemin vers une image par défaut|
| city | TEXT | NOT NULL | Ville de l'utilisateur - A choisir grâce à l'API gouvernementale|
| languages | TEXT[] | NOT NULL | Langues parlées par l'utilisateur |
| fellow_doggies | INTEGER[] | DEFAULT NULL | Tableau renvoyant les 'amis de promenade' de l'utilisateur|
| registration_date | TIMESTAMPTZ | DEFAULT VALUE NOW() | Date d'inscription de l'utilisateur|

## Table 'dog' 🐕

| Champ         | Type          | Spécificités        | Description        |
| ------------- |:-------------:| -------------:      |-------------------:|
| id            | INTEGER           | IDENTITY PRIMARY KEY| ID du doggy|
| user_id(FK)          | INTEGER          | NOT NULL, REFERENCES user(id)   | Clé étrangère vers user|
| profile_pic    | TEXT   | DEFAULT VALUE (PATH TO DEFAULT PIC)         | Chemin vers la photo du doggy|
| gender        | TEXT          | NOT NULL            | Sexe du chien                  |
| race   | TEXT          | NOT NULL, DEFAULT VALUE | Race du chien|
| birthday | DAY OF TIMESTAMPTZ | NO SPECIFICITY | Jour d'anniversaire du chien|
| birth_month | MONTH OF TIMESTAMPTZ | NO SPECIFICITY | Mois d'anniversaire du chien|
| birth_year | YEAR OF TIMESTAMPTZ | NOT NULL | Année de naissance du chien|


## Table 'point_of_interest'

| Champ         | Type          | Spécificités        | Description        |
| ------------- |:-------------:| -------------:      |-------------------:|
| id            | INTEGER           | IDENTITY PRIMARY KEY| ID du point_of_interest|
| name    | TEXT   | NOT NULL        | Nom donné au point d'intérêt|
| location        | TEXT          | NOT NULL            | Une adresse           |


## Table 'event'

| Champ         | Type          | Spécificités        | Description        |
| ------------- |:-------------:| -------------:      |-------------------:|
| id            | INTEGER           | IDENTITY PRIMARY KEY| ID de l'évènement|
| user_id(FK)          | INTEGER          | NOT NULL, REFERENCES user(id)   | Clé étrangère vers user|
| name    | TEXT   | NOT NULL        | Nom donné à l'évènement|
| date        | TIMESTAMPTZ (DATE ONLY)        | NOT NULL, DEFAULT VALUE (DATE OF NOW())            | Date de l'évènement                 |
| time   | TIMETZ          | DEFAULT VALUE (TIME OF NOW()), NOT NULL | Heure de l'évènement|
| location | TEXT | NOT NULL | Une adresse|
| evaluation | DECIMAL | NO SPECIFICITY | Note entre 1 et 5|
| access_PMR | BOOLEAN | NO SPECIFICITY | Accessible ou non aux PMR|


## Table 'participate'
| Champ         | Type          | Spécificités        | Description        |
| ------------- |:-------------:| -------------:      |-------------------:|
| id            | INTEGER           | IDENTITY PRIMARY KEY| ID de l'objet 'participate'|
| user_id(FK)          | INTEGER          | NOT NULL, REFERENCES user(id)   | Clé étrangère vers user|
| event_id(FK)          | INTEGER          | NOT NULL, REFERENCES event(id)   | Clé étrangère vers event|


## Table 'add'
| Champ         | Type          | Spécificités        | Description        |
| ------------- |:-------------:| -------------:      |-------------------:|
| id            | INTEGER           | IDENTITY PRIMARY KEY| ID de l'objet 'participate'|
| user_id(FK)          | INTEGER          | NOT NULL, REFERENCES user(id)   | Clé étrangère vers user|
| point_of_interest_id(FK)          | INTEGER          | NOT NULL, REFERENCES point_of_interest_id(id)   | Clé étrangère vers point_of_interest_id|


## Table 'message'

| Champ         | Type          | Spécificités        | Description        |
| ------------- |:-------------:| -------------:      |-------------------:|
| id            | INTEGER           | IDENTITY PRIMARY KEY| ID du message|
| content          | TEXT          | NOT NULL   | Contenu du message|
| user_id(FK)        | TIMESTAMPTZ (DATE ONLY)        | NOT NULL, REFERENCES user(id)            | Clé étrangère vers user                |


## Table 'type'

| Champ         | Type          | Spécificités        | Description        |
| ------------- |:-------------:| -------------:      |-------------------:|
| id            | INTEGER           | IDENTITY PRIMARY KEY| ID du type|
| name          | TEXT          | NOT NULL   | Nom du type|
| logo        | TEXT | NOT NULL            | Chemin vers le logo du type               |