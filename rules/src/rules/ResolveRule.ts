export class ResolveRule extends PlayerTurnRule {
    onRuleStart() {
        // Pour accéder au joueur, ici on fait juste this.player (qui correspond au player que l'on a passé dans .startPlayerTurn(...))
        // Récupérer la carte sur LocationType.Table, du joueur = this.player
        // La placer dans la bonne ligne
        return []
    }
}