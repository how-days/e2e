# language: fr
@homepage
Fonctionnalité: Tester l'input de recherche de la page d'accueil

  Plan du Scénario:Tester l'input de recherche de la page d'accueil
    Sachant que l'utilisateur peut se connecter à wikipedia
    Quand l'utilisateur recherche "<texte>" dans l'input de recherche
    Alors l'utilisateur doit voir un titre "<texte>" dans la page de recherche

    Exemples:
      | texte |
      | Louis |
      | Paris |
      | France |