# MCD Draft


```
DOG: name, gender, race
::

HAS, 11 DOG, 0N USER
PARTICIPATE, 0N EVENT, 0N USER
EVENT: name, date, place

RECEIVE, 11 MESSAGE, 01 USER
USER: name, password, fellowDoggers, city
CREATE, 11 EVENT, 0N USER

MESSAGE: content
SEND, 11 MESSAGE, 0N USER
ADD, 0N POINT_OF_INTEREST, 0N USER

TYPE: name, logo
INCLUDE, 0N TYPE, 11 POINT_OF_INTEREST
POINT_OF_INTEREST: name, location

```