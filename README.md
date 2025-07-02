# Vanille Bourbon Madagascar - Boutique en Ligne

Une landing page moderne et responsive avec système de panier intégré pour promouvoir et vendre la vanille Bourbon de Madagascar à l'international.

## 🌿 Fonctionnalités

### 🛒 Boutique en ligne
- **Catalogue de produits** - 4 formats disponibles (100g, 250g, 500g, 1kg)
- **Système de panier** - Ajout, modification et suppression d'articles
- **Bouton panier flottant** - Accès rapide au panier depuis n'importe où
- **Commande intégrée** - Formulaire de commande avec récapitulatif automatique

### 🎨 Design et UX
- **Design responsive** - Optimisé pour mobile, tablette et desktop
- **Animations fluides** - Micro-interactions et effets de scroll
- **Images haute qualité** - Photos authentiques de plantations de vanille
- **Interface intuitive** - Navigation fluide et expérience utilisateur optimisée

### 📞 Contact et commande
- **Formulaire de commande** - Intégré avec Formspree pour la réception automatique
- **Bouton WhatsApp flottant** - Contact direct via WhatsApp
- **Validation automatique** - Vérification du panier avant envoi
- **Confirmation de commande** - Message de succès après envoi

### 🔧 Technique
- **SEO optimisé** - Meta tags et structure sémantique
- **Performance** - Préchargement des images critiques
- **Accessibilité** - Labels et navigation au clavier

## 💰 Tarifs

| Quantité | Prix | Description |
|----------|------|-------------|
| 100g | 21,00 € | Environ 15-20 gousses - Idéal pour débuter |
| 250g | 52,50 € | Environ 40-50 gousses - Plus populaire |
| 500g | 105,00 € | Environ 80-100 gousses - Meilleur rapport qualité/prix |
| 1kg | 210,00 € | Environ 160-200 gousses - Pour professionnels |

## 🚀 Déploiement sur GitHub Pages

1. **Fork ou clone ce repository**
2. **Activez GitHub Pages** :
   - Allez dans Settings > Pages
   - Sélectionnez "Deploy from a branch"
   - Choisissez "main" branch et "/ (root)"
   - Cliquez sur "Save"

3. **Votre site sera disponible à** : `https://votre-username.github.io/nom-du-repo`

## 📝 Personnalisation

### Modifier les informations de contact

Dans `index.html`, modifiez :
- L'email dans le footer et le formulaire
- Le numéro WhatsApp dans le lien du bouton flottant
- Les informations de contact dans le footer

### Changer les prix

Dans `index.html`, modifiez les attributs `data-price` des cartes produits et les prix affichés.

Dans `script.js`, mettez à jour les appels à `addToCart()` avec les nouveaux prix.

### Modifier le formulaire

Le formulaire utilise Formspree. Pour utiliser votre propre endpoint :
1. Créez un compte sur [Formspree](https://formspree.io)
2. Remplacez l'URL dans `script.js` ligne 140

### Changer les images

Remplacez les URLs Pexels dans `index.html` par vos propres images :
- Images de header (plantation)
- Images de produits (gousses de vanille)
- Image de section

## 🛒 Fonctionnement du panier

1. **Ajout de produits** - Clic sur "Ajouter au panier"
2. **Gestion des quantités** - Boutons + et - pour modifier les quantités
3. **Visualisation** - Section panier avec récapitulatif détaillé
4. **Commande** - Formulaire pré-rempli avec les détails de la commande
5. **Envoi automatique** - Les détails sont envoyés par email via Formspree

## 🎨 Structure des fichiers

```
├── index.html          # Page principale avec produits et panier
├── styles.css          # Styles CSS avec design responsive
├── script.js           # JavaScript pour panier et formulaires
└── README.md           # Documentation
```

## 📱 Compatibilité

- ✅ Chrome, Firefox, Safari, Edge
- ✅ iOS Safari, Chrome Mobile
- ✅ Responsive design (320px - 1920px+)
- ✅ Panier fonctionnel sur tous les appareils

## 🔧 Technologies utilisées

- HTML5 sémantique
- CSS3 avec Flexbox et Grid
- JavaScript Vanilla (ES6+)
- Font Awesome pour les icônes
- Formspree pour le traitement des commandes

## 📊 Fonctionnalités du panier

- **Persistance visuelle** - Le panier reste visible pendant la navigation
- **Calculs automatiques** - Total mis à jour en temps réel
- **Validation** - Vérification avant envoi de commande
- **Récapitulatif** - Affichage détaillé dans le formulaire
- **Réinitialisation** - Nettoyage automatique après commande

## 📞 Support

Pour toute question technique, contactez : klaus.schaaf@pebge.eu

## 🎯 Optimisations SEO

- Meta description optimisée pour la vanille de Madagascar
- Mots-clés pertinents (vanille, Madagascar, Bourbon, gourmet)
- Structure sémantique HTML5
- Images avec attributs alt descriptifs
- Temps de chargement optimisé