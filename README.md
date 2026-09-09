<p align="center">
  <img src="./docs/assets/artemis-banner.png?v=7" alt="Bannière ARTEMIS" width="100%" />
</p>

<p align="center">
  <strong>Permettre aux assistants IA et aux suites de tests de piloter de vrais smartphones avec l'agilité et l'intuition d'un être humain.</strong>
</p>

<p align="center">
  <a href="#antigravity--artemis--flux-de-test-autonome">Démonstration</a> •
  <a href="#démarrage-rapide">Démarrage Rapide</a> •
  <a href="#modes-dutilisation">Modes d'Utilisation</a> •
  <a href="#intégration-mcp-pour-ides">Intégration MCP</a> •
  <a href="#sdk-python">SDK Python</a> •
  <a href="#architecture-technique-dartemis">Architecture</a> •
  <a href="#benchmarks--androidworld-sota-99">Benchmarks</a> •
  <a href="https://discord.gg/wF2FN4WHGY">Communauté Discord</a>
</p>

<p align="center">
  <a href="https://www.python.org/downloads/"><img src="https://img.shields.io/badge/Python-3.12+-3776AB.svg?logo=python&logoColor=white" alt="Python 3.12+"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/Licence-Apache%202.0-blue.svg" alt="Licence: Apache-2.0"></a>
  <a href="https://modelcontextprotocol.io/"><img src="https://img.shields.io/badge/MCP-Serveur%20Natif-8A2BE2.svg" alt="MCP Natif"></a>
  <a href="https://ai.google.dev/"><img src="https://img.shields.io/badge/Multimodal-Gemini%20%7C%20Claude%20%7C%20GPT--4o%20%7C%20Qwen--VL-4285F4.svg" alt="Multi-Modèle"></a>
  <a href="https://github.com/google-research/android_world"><img src="https://img.shields.io/badge/AndroidWorld-99%25%2B%20SOTA-success.svg" alt="AndroidWorld SOTA"></a>
</p>

<!-- Démonstration animée -->
<p align="center">
  <img src="./docs/assets/demo.gif" alt="Artemis en action" width="100%" />
  <br>
  <em>Démonstration en direct : Planification d'un itinéraire et calcul de sa durée dans Google Maps, puis bascule vers YouTube pour lancer un titre musical de Coldplay.</em>
</p>

## Points Forts Clés

* **Automatisation Multi-Applications & Assistant IA Autonome** : Bien plus qu'un framework de test conventionnel, ARTEMIS agit comme un agent autonome capable d'exécuter des workflows complexes à travers plusieurs applications mobiles à partir d'instructions en langage naturel ;
* **Maintenance Zéro Script (Zero-Maintenance Automation)** : Repose sur un moteur d'ancrage multimodal « Sémantique dynamique d'abord, coordonnées de repli », éliminant la fragilité des sélecteurs traditionnels (XPath, identifiants d'éléments) et résistant naturellement aux refontes d'interface, aux variations de résolution et aux mises à jour système ;
* **Reproduction de Bugs en 1 Clic & Diagnostics Logcat dans l'IDE** : L'intégration native du protocole **Model Context Protocol (MCP)** permet à **Antigravity, Claude Code, Cursor et Windsurf** de piloter directement des terminaux physiques de test, en capturant automatiquement les piles d'appels de crash depuis **Logcat** et les captures d'écran des trames clés ;
* **Débit d'Exécution Ultra-Rapide (3 à 5 s par étape)** : Pionnier du pipeline **asynchrone optimiste (Optimistic Asynchronous Pipeline)** qui découple l'interaction avec l'interface graphique de l'inférence lourde des LLM, garantissant une cadence élevée lors des campagnes de non-régression en profil Flash ;
* **Auto-Guérison contre les Popups & Exploration Longue Durée (10h+)** : Le mécanisme breveté **Safety Net** vérifie la cible quelques millisecondes avant chaque frappe pour intercepter et neutraliser les fenêtres intempestives (autorisations système, bandeaux) ; le profil Pro permet plus de **10 heures** de tests d'exploration et de robustesse en continu sans intervention humaine ;
* **État de l'Art Mondial (SOTA 99%+)** : Taux d'achèvement de **99%+** sur le banc d'essai d'évaluation standard **AndroidWorld** de Google Research (plus de 100 tâches réelles et complexes).

<a id="antigravity--artemis--flux-de-test-autonome"></a>
## Antigravity × ARTEMIS : Flux de Test Autonome

Grâce au protocole MCP natif, **Antigravity** et **ARTEMIS** s'associent pour automatiser l'intégralité du cycle de test — depuis l'expression d'un besoin fonctionnel en langage naturel jusqu'à la livraison d'un rapport de diagnostic complet en quatre phases automatisées :

<table width="100%">
  <tr>
    <td width="50%" align="center">
      <b>1. Expression du Besoin (Task Dispatch)</b><br>
      <sub>Décrivez votre scénario de test et vos critères d'acceptation dans Antigravity</sub><br><br>
      <img src="./docs/assets/workflow-1-prompt.png" width="100%" alt="Étape 1 : Expression du besoin dans Antigravity" />
    </td>
    <td width="50%" align="center">
      <b>2. Élaboration du Plan de Test</b><br>
      <sub>Génération automatique d'un plan de validation jalonné avec critères de vérification</sub><br><br>
      <img src="./docs/assets/workflow-2-plan.png" width="100%" alt="Étape 2 : Plan de test généré" />
    </td>
  </tr>
  <tr>
    <td width="50%" align="center">
      <b>3. Exécution Autonome sur Terminal</b><br>
      <sub>Navigation sur l'appareil réel, manipulation de l'UI et analyse de la télémétrie</sub><br><br>
      <img src="./docs/assets/workflow-3-exec.png" width="100%" alt="Étape 3 : Exécution autonome du test" />
    </td>
    <td width="50%" align="center">
      <b>4. Rapport d'Audit Exhaustif</b><br>
      <sub>Synthèse structurée des constats, tableau des métriques et jeux de données bruts</sub><br><br>
      <img src="./docs/assets/workflow-4-report.png" width="100%" alt="Étape 4 : Rapport final d'audit" />
    </td>
  </tr>
</table>

<a id="démarrage-rapide"></a>
## Démarrage Rapide

Assurez-vous qu'un appareil Android (avec le **Débogage USB** activé) ou un émulateur est connecté. Les scripts d'initialisation en un clic se chargent automatiquement de :
- **Installer la chaîne d'outils système** : Détection et installation autonome de ADB, scrcpy, FFmpeg, Node.js et de l'environnement Python avec `uv`.
- **Connecter le serveur MCP global et les règles pour agents IA** : Configuration assistée des passerelles MCP et injection des consignes d'ingénierie mobile (**`mcp_server/rules.md`**) au sein de vos IDEs IA (**Antigravity**, **Cursor**, **Claude Code**, **Codex**, **Windsurf**, **VS Code**, **Cline/Roo**, **OpenClaw**).

### macOS et Linux

```bash
# 1. Cloner le dépôt et accéder au répertoire
git clone https://github.com/noumegniedmond237-sketch/artemis.git && cd artemis

# 2. Lancement en un clic
./start.sh
```

### Windows PowerShell

```powershell
# 1. Cloner le dépôt et accéder au répertoire
git clone https://github.com/noumegniedmond237-sketch/artemis.git
cd artemis

# 2. Lancement en un clic
.\start.bat
```

> **Remarque PowerShell** : Par défaut sous PowerShell, l'exécution de scripts dans le répertoire courant nécessite la syntaxe `.\start.bat`. Sous l'invite de commande classique (CMD), tapez simplement `start.bat`.

> **Astuce** : Le serveur lance automatiquement la console sur `http://localhost:8000` dans votre navigateur par défaut avec assistant de connexion d'appareils, miroir vidéo en temps réel, bac à sable de prompts et rejeu d'exécutions. Vous pouvez également lancer des tâches directement depuis le terminal :
> ```bash
> uv run artemis run "Ouvre les Paramètres, va dans Batterie et donne-moi le niveau actuel" --profile flash
> ```

<a id="intégration-mcp-pour-ides"></a>
<a id="mcp-setup"></a>
<details>
<summary><b>Configuration MCP pour Antigravity / Claude Code / Codex / Windsurf / Cursor (Cliquez pour dérouler)</b></summary>

<br>

ARTEMIS intègre nativement un serveur **Model Context Protocol (MCP)** permettant de connecter directement votre terminal mobile à vos environnements de développement IA :

### 1. Installation Automatique en 1 Clic (Recommandé)

Les scripts `./start.sh` (macOS/Linux) ou `.\start.bat` (Windows PowerShell) vous proposent de configurer automatiquement l'intégration MCP et les règles de test pour tous les IDEs détectés. Vous pouvez aussi exécuter ces commandes manuellement à tout moment :

```bash
# Installation automatique pour Antigravity / Jetski :
uv run artemis mcp --install antigravity

# Ou installation pour l'ensemble des IDEs IA pris en charge (incluant Codex, Claude, Cursor) :
uv run artemis mcp --install all
```

> **Conseil** : Vous pouvez également configurer le MCP de manière interactive via `uv run artemis init`.  
> **Accès global** : Pour invoquer la commande `artemis` directement dans n'importe quel dossier sans préfixer par `uv run`, exécutez `uv tool install -e .` à la racine du projet.

### 2. Configuration Manuelle (Optionnel)

Pour configurer manuellement votre client MCP, générez l'extrait de configuration adapté via `uv run artemis mcp --generate-config <client>` (par exemple `codex` ou `antigravity`). Remplacez `/chemin/vers/artemis` par votre chemin absolu et pointez `command` vers l'exécutable Python de votre environnement virtuel `.venv` :

* **Antigravity** (`~/.gemini/jetski/mcp_config.json`) :
```json
{
  "mcpServers": {
    "artemis": {
      "command": "/chemin/vers/artemis/.venv/bin/python",
      "args": ["-m", "mcp_server"],
      "cwd": "/chemin/vers/artemis",
      "env": {
        "PYTHONUNBUFFERED": "1"
      },
      "tools": {
        "mobile_run_task": { "eager": true },
        "mobile_manage_task": { "eager": true },
        "mobile_get_device_state": { "eager": true },
        "mobile_inspect_trace": { "eager": true }
      }
    }
  }
}
```

* **Codex** (`~/.codex/config.toml`) :
```toml
[mcp_servers.artemis]
command = "/chemin/vers/artemis/.venv/bin/python"
args = ["-m", "mcp_server"]
cwd = "/chemin/vers/artemis"

[mcp_servers.artemis.env]
PYTHONUNBUFFERED = "1"
PYTHONPATH = "/chemin/vers/artemis"
```

* **Claude Desktop** (`claude_desktop_config.json`) :
```json
{
  "mcpServers": {
    "artemis": {
      "command": "/chemin/vers/artemis/.venv/bin/python",
      "args": ["-m", "mcp_server"],
      "cwd": "/chemin/vers/artemis"
    }
  }
}
```

### 3. Règles Comportementales pour Agents IA (Hautement Recommandé)

Afin que votre assistant de code adopte la rigueur méthodique d'un ingénieur QA mobile senior et n'hallucine aucune interaction d'écran, ARTEMIS fournit un fichier de règles méthodologiques : [`mcp_server/rules.md`](./mcp_server/rules.md) (incluant l'**exploration préalable de l'état d'écran**, la **stratégie d'arbitrage Flash vs. Pro**, la **compensation de latence tactile** et la règle stricte du **« Sémantique d'abord, coordonnées en repli »**).

Intégrez ce fichier dans vos configurations d'agent :
* **Antigravity** : Ajoutez le contenu de `rules.md` dans les règles de workspace (*Workspace Rules*) ou instructions globales.
* **Claude Code** : Lancez `artemis mcp --install claude` pour déployer vers `~/.claude/rules/artemis.md`.
* **Cursor** : Copiez le contenu dans `.cursorrules` ou créez `.cursor/rules/artemis.mdc`.
* **Codex** : Ajoutez le contenu à `~/.codex/AGENTS.md`.
* **Windsurf / OpenClaw** : Importez les règles dans vos consignes de projet ou invites système.

> Pour plus de détails techniques sur l'architecture MCP, consultez le [Guide MCP Server](./mcp_server/README.md).

### 4. Pilotez Votre Smartphone Depuis le Chat de l'IDE
Dans Antigravity, Codex ou Claude Code, demandez simplement :
> *« Compile les derniers changements en un APK, installe-le sur le smartphone connecté, ouvre l'écran de connexion avec le compte de test, vérifie qu'aucune pop-up inattendue n'apparaît après l'authentification et renvoie-moi une capture d'écran de la page d'accueil. »*

</details>

<a id="sdk-python"></a>
<details>
<summary><b>Intégration via le SDK Python (Cliquez pour dérouler)</b></summary>

<br>

Installez le client léger (sans dépendance d'exécution lourde) sur votre machine de développement. Les couches ADB, les modèles d'IA, les agents et le traitement d'image restent centralisés sur la machine hôte :

```powershell
uv add "artemis-client @ git+https://github.com/noumegniedmond237-sketch/artemis.git#subdirectory=packages/artemis-client"
```

```python
import asyncio
from artemis_client import ArtemisClient


async def main():
    # Initialisation du client Artemis connecté au serveur
    client = ArtemisClient(
        "http://artemis-host:8000",
        device_serial="emulator-5554",  # Facultatif : cibler un numéro de série précis
        default_profile="flash",  # "flash" (réactif rapide) ou "pro" (raisonnement approfondi)
    )

    # Lancement d'une tâche de test en langage naturel
    result = await client.run(
        "Ouvre les Paramètres système, accède à la rubrique 'Batterie', "
        "vérifie que le pourcentage de batterie est affiché et signale toute anomalie.",
    )

    # Validation des assertions
    assert result.succeeded, f"Échec du test : {result.error or result.status}"
    print(f"✅ Test réussi ! Appareil : {result.device_serial} | Trace ID : {result.trace_id}")


if __name__ == "__main__":
    asyncio.run(main())
```

</details>

## Modes d'Utilisation

<p align="center">
  <img src="./docs/assets/artemis-ui-showcase-en.png" alt="Console Web Artemis" width="100%" />
  <br />
  <sub><b>Vue d'ensemble de la console</b> : <b>① Sélecteur de vue</b> (Accueil / Espace de travail) · <b>② Profil & Rejeu vidéo</b> (Statut Flash/Pro et relecture) · <b>③ Flux d'agent en direct</b> (Perception d'action, coordonnées cibles et résultats structurés) · <b>④ Dock d'instructions</b> (Déclenchement en langage naturel) · <b>⑤ File d'attente et historique des tâches</b></sub>
</p>

* **Console Visuelle Web (`uv run artemis ui`)** : Projection vidéo temps réel et panneau interactif, offrant la saisie d'instructions en langage naturel, la télémétrie de raisonnement en direct, le suivi des trajectoires d'action et le rejeu vidéo complet. Gestion du cycle de vie du serveur à tout instant avec `uv run artemis restart`, `uv run artemis stop` et `uv run artemis status` ;
* **Protocole MCP Natif (Collaboration IDE)** : Opère comme un serveur MCP standard s'intégrant directement à **Antigravity, Claude Code, Windsurf, Cursor**, pour piloter vos appareils physiques depuis l'éditeur de code ;
* **Interface en Ligne de Commande (`uv run artemis run`)** : Exécution directe dans le terminal pour les suites de tests automatisées, les campagnes de robustesse exploratoire ou les benchmarks AndroidWorld avec sortie structurée haute fidélité ;
* **SDK Python** : S'intègre comme une bibliothèque Python standard au sein de vos frameworks de test existants (ex. pytest) ou de vos pipelines CI/CD grâce à des sorties structurées Pydantic fortement typées et au support natif des assertions.

<a id="benchmarks--androidworld-sota-99"></a>
## Benchmarks : AndroidWorld (SOTA 99%+)

Évalué sur [AndroidWorld](https://github.com/google-research/android_world) — le benchmark d'excellence conçu par Google Research couvrant plus de 20 applications réelles et plus de 100 tâches multi-étapes complexes : **Artemis a fait preuve d'une robustesse exceptionnelle sur l'ensemble de la suite, atteignant un taux de réussite supérieur à 99 %.**

<p align="center">
  <img src="./docs/assets/androidworld_leaderboard.png?v=2" alt="Classement Benchmark AndroidWorld" width="100%" />
</p>

## Architecture Technique d'ARTEMIS

* **Garde Pré-Touch Pixel & Chaînage Spéculatif** : Élimine les « clics dans le vide » dus aux aléas de latence réseau ou de rendu. Quelques millisecondes avant la transmission de la commande, un garde d'interface local intercepte les dialogues imprévus (0 token consommé, 0 attente dans le cloud), une porte Micro-ROI valide la fixité de la cible et des touchers spéculatifs en chaîne activent les contrôles éphémères (ex. barres de lecture vidéo en fondu automatique) avant leur disparition ;
* **Moteur d'Ancrage Progressif à Trois Niveaux** : Fusionne la reconnaissance optique locale (OCR) avec l'arborescence d'accessibilité Android (~150 ms, 0 token) pour couvrir plus de 85 % des actions standard via des identifiants numériques insensibles aux dérives de coordonnées, avec bascule fluide vers des modèles de vision spatiale pour les interfaces complexes (Canvas, Compose, Flutter) ;
* **Double Moteur Élastique avec Compacteur de Contexte en Vol** : Bascule dynamiquement entre des cycles d'intégration continue haut débit et très réactifs (Mode Flash, 3 à 5 s par étape) et des graphes d'états cognitifs approfondis (Mode Pro). Réduit la consommation de tokens de plus de 70 % grâce aux deltas visuels en arrière-plan et à l'élagage intelligent du DOM, autorisant plus de 10 heures de tests d'endurance continus et sans surveillance.

<p align="center">
  <img src="./docs/assets/artemis_architecture_diagram.png" alt="Schéma d'Architecture du Système ARTEMIS" width="100%" />
</p>

## Profils d'Exécution : Flash vs. Pro

ARTEMIS propose deux profils d'exécution complémentaires selon vos objectifs d'automatisation :

* **Profil Flash (`--profile flash`)** : Boucle réactive optimisée en vitesse et en consommation de tokens (~3 à 5 s par étape). Un modèle observe l'écran en direct, évalue la situation et déclenche l'action sans orchestration de graphe intermédiaire. Idéal pour les scénarios déterministes et les tests de non-régression fréquents. La boucle est sans limite stricte par défaut (`agent.flash.max_turns`, 0 = illimité) car le contexte historique est compressé en continu plutôt que tronqué : Flash partage le grand livre de transcription de session Pro (horodatage relatif `T+mm:ss`, condensés visuels d'écrans, découpage en époques interrogeables via `search_history` / `replay_steps`) et peut interroger l'enregistrement vidéo via `video_analyzer`. *Caractéristiques* : Pas de plan Markdown persistant, pas d'analyseur de points de contrôle lourd, exécution directe et agile.
* **Profil Pro (`--profile pro`)** : Notre architecture la plus sophistiquée (~15 à 40 s par étape), structurée en graphe multi-agents. Un **Planificateur (Planner)** maintient un plan d'action dynamique en Markdown incluant des jalons clés et des clauses de contrôle (`verify` / `assert`) ; l'**Opérateur (Operator)** exécute chaque phase avec un arsenal d'outils étendu (ancrage sémantique à plusieurs niveaux, prise de notes, relecture d'historique, analyse vidéo et diagnostics système ADB). Chaque action est sécurisée par le **Safety Net** avant émission. En cas d'incident, un contexte d'anomalie est ouvert pour permettre à l'Opérateur de s'auto-corriger. Un **Vérificateur (Checker)** indépendant valide chaque point de contrôle et produit une revue finale détaillée par rapport à l'objectif initial (`--verification-level` : `off` / `final` / `checkpoints` / `strict`). Conçu pour les workflows longs de plus de 100 étapes et la surveillance continue en boucle.

## Feuille de Route

- [ ] **Intégration Native Android Studio** : Plugin IDE dédié pour le débogage interactif, l'enregistrement de scénarios et le pilotage direct de terminaux depuis Android Studio.
- [ ] **Extension à l'Écosystème iOS** : Élargissement de la perception multimodale et de l'automatisation aux appareils et simulateurs iOS.
- [ ] **Modèles de Vision Légers Embarqués (On-Device VLMs)** : Exécution locale avec des modèles de vision légers pour une latence minimale et une confidentialité absolue des flux vidéo.
- [ ] **Interaction Vocale Duplex Temps Réel** : Pilotage et réorientation des tests par la voix avec prise en charge des interruptions instantanées.

## Communauté et Contribution

Les contributions de la communauté sont les bienvenues !
* **Attribuez une étoile (Star)** au dépôt pour suivre nos évolutions et publications.
* Rejoignez notre **[Communauté Discord](https://discord.gg/wF2FN4WHGY)** pour échanger sur vos cas d'usage et architectures.
* Proposez vos améliorations via des **[Issues](https://github.com/noumegniedmond237-sketch/artemis/issues)** ou des **[Pull Requests](https://github.com/noumegniedmond237-sketch/artemis/pulls)**.

## Licence

Ce projet est distribué sous licence open source [Apache 2.0](LICENSE).