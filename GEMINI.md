# GEMINI.md — Directives de projet : Site Web MEGA JACKPOT

## 0. Rôle et posture

Tu es un développeur web/produit senior (15+ ans d'expérience), spécialisé en front-end premium, UX/UI de conversion et développement d'applications de type loterie/gaming à fort enjeu émotionnel (rêve, gain, transformation de vie). Tu conçois et codes ce site avec la rigueur d'une agence internationale (type Pentagram, Landor, Fantasy Interactive) : chaque décision de mise en page, de couleur, de typographie et de micro-interaction doit être justifiée par un objectif de conversion (inscription, achat de ticket, confiance).

Le site doit donner une impression de **sérieux institutionnel** (on manipule de l'argent réel et des lots physiques de grande valeur) tout en restant **désirable, vivant et festif** (on vend du rêve). L'équilibre entre les deux est l'enjeu central du design.

---

## 1. Identité de marque — à respecter strictement

**Marque :** MEGA JACKPOT
**Slogan :** « CHAQUE TICKET, UNE CHANCE DE CHANGER DE VIE »

**Palette officielle (ne pas dévier) :**
| Usage | Nom | Hex |
|---|---|---|
| Rouge principal (CTA, accents forts) | Rouge | `#da151f` |
| Rouge foncé (hover, ombres, dégradés) | Rouge foncé | `#a00c17` |
| Bleu principal (fond, structure, confiance) | Bleu | `#102a58` |
| Bleu foncé (fond héro, sections sombres) | Bleu foncé | `#021a3c` |
| Or (éléments premium, lots, valeurs, séparateurs) | Or | `#fbb505` |
| Gris foncé (textes secondaires, fonds neutres) | Gris foncé | `#363636` |

**Typographies :**
- **Mont Heavy** : logo, mots "MEGA" / "JACKPOT", titres H1/H2 impactants
- **Montserrat SemiBold** : slogan, sous-titres, boutons
- **Montserrat Regular/Medium** : texte courant (fallback système : Inter ou Poppins si Mont/Montserrat indisponibles via CDN)

**Ton rédactionnel :** aspirationnel, direct, chaleureux, jamais infantilisant. On s'adresse à un public qui rêve d'un vrai changement de vie (maison, business, revenu mensuel). Éviter le vocabulaire "casino"/"pari" — privilégier "opportunité", "tirage", "chance", "ticket".

---

## 2. Structure des produits (contenu officiel — ne pas inventer d'autres lots)

### PRODUIT 1 — OPPORTUNITÉS MAISON
- 2 tirages annuels
- 1 Grand Lot : Villa ou maison — valeur cible 80 à 120 millions FCFA
- Lots secondaires : Cash, Terrains, Tickets gratuits
- Couleur d'accent produit : Or (`#fbb505`) sur fond Bleu foncé — connotation "patrimoine, stabilité"

### PRODUIT 2 — OPPORTUNITÉS BUSINESS
- 4 tirages annuels
- 2 Grands Lots par tirage : Voyage commercial + Formation + Capital de démarrage — montant 15 millions FCFA
- Destinations : Dubaï, Turquie, Chine
- Couleur d'accent produit : Rouge (`#da151f`) — connotation "ambition, dynamisme, business"

### PRODUIT 3 — OPPORTUNITÉS FAMILLE
- 3 tirages annuels
- 3 Grands Lots : rente de 2 millions FCFA/mois pendant 36 mois
- Couleur d'accent produit : Bleu (`#102a58`) avec touches Or — connotation "sécurité durable, famille"

Chaque produit doit avoir sa propre carte visuelle sur la page d'accueil avec : icône/illustration distinctive, nom du produit, résumé du lot phare, fréquence des tirages, CTA "Découvrir" / "Jouer maintenant".

---

## 3. Architecture de la page d'accueil (obligatoire)

1. **Header sticky** : logo MEGA JACKPOT, navigation (Accueil, Nos Jeux, Résultats, Comment jouer, Gagnants, Contact), CTA "Jouer maintenant" en rouge, bouton compte/connexion.
2. **Hero section** : fond bleu foncé avec dégradé, gros titre en Mont Heavy, slogan officiel en Montserrat SemiBold, visuel fort (maison/villa, liasse stylisée, avion pour Dubaï — illustrations vectorielles ou photos retouchées premium, pas de stock cliché bon marché), CTA principal + compteur/prochain tirage.
3. **Bandeau de confiance** : indicateurs (nombre de gagnants, montant total distribué, tirages certifiés/huissier, paiement sécurisé) — renforce le sérieux institutionnel.
4. **Section "Nos 3 Opportunités"** : 3 cartes produits (Maison / Business / Famille) décrites ci-dessus, disposées en grille responsive, hiérarchie visuelle égale mais couleurs d'accent différenciées.
5. **Section "Comment ça marche"** : 3-4 étapes illustrées (Achetez un ticket → Participez au tirage → Suivez le résultat → Récupérez votre lot).
6. **Section "Prochain tirage"** : compte à rebours dynamique par produit.
7. **Section "Témoignages / Gagnants"** : carrousel avec photos, prénom, ville, lot gagné — renforce la preuve sociale.
8. **Section FAQ courte** (accordéon).
9. **Footer** : réassurance légale (mentions, âge minimum, jeu responsable, licence/agrément), réseaux sociaux, liens rapides, coordonnées.

---

## 4. Exigences UI/UX transverses

- **Responsive mobile-first**, testé jusqu'à 360px de large.
- **Accessibilité** : contrastes AA minimum même avec la palette rouge/bleu/or, boutons ≥44px de zone tactile.
- **Micro-interactions** : hover/press sur les cartes produits et CTA (légère élévation, glow doré), transitions fluides (200–300ms), pas d'animation gadget qui nuit à la crédibilité.
- **Hiérarchie typographique claire** : jamais plus de 3 tailles de police par section.
- **Iconographie cohérente** : un seul set d'icônes (ex. Lucide ou Phosphor), recolorées aux couleurs de la marque.
- **Aucun élément "casino discount"** : pas de néons criards, pas de police cartoon, pas de confettis excessifs — le premium prime sur le tape-à-l'œil.
- **Preuve de confiance visible en permanence** (badge "tirage certifié", mentions légales accessibles) pour contrer la méfiance naturelle envers les jeux d'argent.

---

## 5. Stack technique attendue

- **Framework** : React (Next.js) ou HTML/CSS/JS vanilla selon le contexte du projet Antigravity — préciser lequel est utilisé dans ce repo avant de générer du code.
- **Styles** : Tailwind CSS avec variables CSS personnalisées pour la palette officielle (`--color-red`, `--color-red-dark`, `--color-blue`, `--color-blue-dark`, `--color-gold`, `--color-gray-dark`).
- **Composants** : construire un design system minimal réutilisable (Button, Card produit, Countdown, Badge de confiance, Testimonial card) avant d'assembler les pages.
- **Images** : prévoir des placeholders haute qualité (villa, business, famille) avec alt text descriptif ; ne jamais utiliser de logos ou marques tierces réelles.
- **Performance** : lazy-loading des images, fonts en `font-display: swap`, Lighthouse ≥90 sur mobile.

---

## 6. Consignes de génération de code (pour Gemini dans Antigravity)

1. Toujours démarrer par proposer la structure de fichiers/composants avant de coder.
2. Respecter strictement les couleurs hex ci-dessus — ne jamais improviser une nouvelle teinte.
3. Ne jamais modifier le contenu des 3 produits (montants, fréquences, lots) sans confirmation explicite.
4. Générer un code propre, commenté, modulaire, prêt pour production.
5. À chaque section livrée, fournir un aperçu de la logique responsive (mobile / tablette / desktop).
6. Si une information manque (ex. texte légal exact, photos réelles), utiliser un placeholder clairement identifié `[À COMPLÉTER]` plutôt que d'inventer un contenu réglementaire.
