# Git i verzioniranje koda

## Zadatci

### Prvi set zadataka

1. Napraviti novu mapu i unutar mape napraviti datoteku index.html s nekim html kôdom
2. Otvoriti Command Prompt, pozicionirati se u upravo napravljenu mapu
3. Inicijalizirati mapu kao git repozitorij `git init`
4. Provjeriti da li se repozitorij zbilja inicijalizirao (je li nastala .git mapa)
5. Provjeriti trenutno stanje repozitorija `git status`
6. Dodati datoteku index.html u repozitorij `git add .`
7. Potrebno je napraviti commit trenutnog stanja repozitorija `git commit`
8. Provjeriti trenutno stanje repozitorija `git status`
9. Provjeriti log repozitorija `git log`
10. Napraviti promjene u index.html datoteci
11. Napraviti novu mapu unutar našeg projekat i unutar nje napraviti test.html datoteku
12. Provjeriti trenutno stanje repozitorija
13. Dodati novu mapu i datoteku u repozitorij `git add .`
14. Provjeriti trenutno stanje repozitorija
15. Potrebno je napraviti commit trenutnog stanja repozitorija `git commit`
16. Provjeriti log repozitorija `git log`
17. Dodati još jedan paragraf u index.html
18. Commitati novonastale promjene

### Drugi set zadataka

1. Vratiti kôd datoteke index.html na stanje drugog commita `git checkout <unikatan key commita> index.html`
2. Provjeriti index.html datoteku
3. Provjeriti stanje repozetorija `git status`
4. Vratiti se natrag na master branch `git checkout master`
5. Provjeriti stanje repozetorija
6. Provjeriti index.html datoteku

### Treci set zadataka

1. Napraviti novu mapu i unutar mape napraviti datoteku index.html s nekim html kôdom
2. Otvoriti Command Prompt, pozicionirati se u upravo napravljenu mapu
3. Inicijalizirati mapu kao git repozitorij `git init`
4. Provjeriti da li se repozitorij zbilja inicijalizirao (je li nastala .git mapa)
5. Provjeriti trenutno stanje repozitorija `git status`
6. Dodati datoteku index.html u repozitorij `git add .`
7. Potrebno je napraviti commit trenutnog stanja repozitorija `git commit`
8. Provjeriti trenutno stanje repozitorija `git status`
9. Provjeriti log repozitorija `git log`
10. Napraviti promjene u index.html datoteci
11. Napraviti novu mapu unutar našeg projekat i unutar nje napraviti test.html datoteku
12. Provjeriti trenutno stanje repozitorija
13. Dodati novu mapu i datoteku u repozitorij `git add .`
14. Provjeriti trenutno stanje repozitorija
15. Potrebno je napraviti commit trenutnog stanja repozitorija `git commit`
16. Provjeriti log repozitorija `git log`
17. Dodati još jedan paragraf u index.html
18. Commitati novonastale promjene

### Cetvrti set zadataka

1. Napraviti github.com account
2. Na githubu napraviti novi private repozetorij
3. Povezati repozitorij iz prošle vježbe s github repozitorijem `git remote add origin <repository_url>`
4. Potrebno je poslati sve podatke iz lokalnog git repozetorija na github `git push -u origin main` (`-u` je shorthand za `--set-upstream` koji povezuje lokalni branch sa remote branchom)

### Peti set zadataka

Početno stanje je GitHub repozitorij kreiran u prethodnom zadatku.

1. Napraviti i aktivirati novi feature branch pod imenom "button" `git checkout -b button`
2. Dodati button u index.html
3. Commitati promjene i pushati promjene na GitHub repozitorij

Rezultat:
GitHub repozitorij ima 2 brancha: main i button
