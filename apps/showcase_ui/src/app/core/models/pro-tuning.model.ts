/**
 * Copyright 2026 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Launcher options for `/api/run` (`verification_level`, `explorer_mode`).
 * Keep ids in sync with `VERIFICATION_LEVEL_PRESETS` in `artemis/config/agent.py`
 * and `EXPLORER_TIERS` in `artemis/agents/explorer/tiers.py`.
 */

export type VerificationLevelId = 'off' | 'final' | 'checkpoints' | 'strict';
export type ExplorerModeId = 'flash' | 'pro' | 'ultra';

/** One notch on a tuning slider. */
export interface TuningLevel<TId extends string = string> {
  /** Wire value sent to the backend. */
  id: TId;
  /** Short name shown next to the slider title and as the hover card heading. */
  label: string;
  /** One-sentence summary shown in the hover card. */
  tagline: string;
  /** Plain-language time cost, e.g. "no extra time". */
  latency: string;
  /** Checks or searches performed at this level. */
  runs: string[];
  /** Checks or searches omitted at this level. */
  skips?: string[];
  /** When to pick this level. */
  bestFor: string;
}

export const VERIFICATION_LEVELS: readonly TuningLevel<VerificationLevelId>[] = [
  {
    id: 'off',
    label: 'Désactivé',
    tagline: 'Aucune vérification. L\'exécution se termine dès que la tâche semble achevée.',
    latency: 'aucun temps supplémentaire',
    runs: [
      'Chaque étape est considérée terminée dès son exécution.',
      'Vous obtenez la trace complète des actions, sans verdict succès / échec.'
    ],
    skips: ['Rien n\'est revérifié et aucune tentative supplémentaire n\'est effectuée.'],
    bestFor: 'Essais rapides et démonstrations, lorsque vous souhaitez simplement observer ce qui se passe.'
  },
  {
    id: 'final',
    label: 'À la fin',
    tagline: 'Une vérification du résultat final par rapport à votre objectif. Option par défaut.',
    latency: 'ajoute environ 20 à 60 s à la fin',
    runs: [
      'À la fin de la tâche, l\'écran final, l\'historique des étapes et l\'état de l\'appareil sont comparés à votre demande.',
      'Si le résultat ne correspond pas, l\'agent revient en arrière et tente de corriger, jusqu\'à 3 fois.'
    ],
    skips: ['Rien n\'est vérifié pendant l\'exécution de la tâche.'],
    bestFor: 'Tâches courantes : un verdict honnête sans ralentir l\'exécution.'
  },
  {
    id: 'checkpoints',
    label: 'À chaque étape',
    tagline: 'Chaque étape est vérifiée dès son exécution, en plus de la vérification finale.',
    latency: 'courte vérification après chaque étape en arrière-plan',
    runs: [
      'Chaque étape est contrôlée juste après son exécution à l\'aide des captures de ce moment.',
      'Si une étape a échoué, elle est corrigée avant de continuer (jusqu\'à 2 essais par étape).',
      'Une condition échouée est consignée et la tâche continue.',
      'La vérification finale s\'exécute toujours à la fin.'
    ],
    bestFor: 'Tâches longues où une erreur précoce compromettrait toute la suite.'
  },
  {
    id: 'strict',
    label: 'Strict',
    tagline: 'Chaque étape est contrôlée avec plus de tentatives. Le premier échec arrête l\'exécution.',
    latency: 'le plus lent : vérifications et reprises approfondies',
    runs: [
      'Chaque vérification prend plus de temps et bénéficie de plus d\'essais : 4 corrections par étape et 5 à la fin.',
      'La première condition de test non satisfaite arrête immédiatement la tâche, preuves à l\'appui.'
    ],
    bestFor: 'Tests de non-régression et recettes, où un faux positif est inacceptable.'
  }
];

export const EXPLORER_MODES: readonly TuningLevel<ExplorerModeId>[] = [
  {
    id: 'flash',
    label: 'Coup d\'œil rapide',
    tagline: 'Localise les boutons et le texte à l\'écran en un seul regard.',
    latency: '1 observation par recherche',
    runs: [
      'Un élément à l\'écran est recherché par son nom, icône ou couleur et sa position est renvoyée immédiatement.',
      'Plusieurs éléments peuvent être recherchés en même temps.'
    ],
    skips: ['Pas de zoom avant ni de seconde tentative.'],
    bestFor: 'Applications classiques avec des boutons, icônes et textes clairement identifiables.'
  },
  {
    id: 'pro',
    label: 'Double regard',
    tagline: 'Effectue jusqu\'à 3 observations avec réflexion intermédiaire avant de répondre.',
    latency: 'jusqu\'à 3 observations par recherche',
    runs: [
      'La structure de l\'écran est d\'abord analysée, puis l\'image est inspectée.',
      'Si la première tentative échoue, une approche différente est tentée au cours des 3 observations.'
    ],
    skips: ['Pas de zoom sur les petites zones pour garder les recherches rapides.'],
    bestFor: 'Éléments décrits par leur position ("le bouton à côté du Wi-Fi") ou sans libellé évident.'
  },
  {
    id: 'ultra',
    label: 'Gros plan',
    tagline: 'Zoome sur des parties de l\'écran et prend jusqu\'à 8 observations.',
    latency: 'jusqu\'à 8 observations par recherche (le plus lent)',
    runs: [
      'Des portions de l\'écran peuvent être recadrées et agrandies pour lire les petits textes et interfaces denses.',
      'Les observations suivantes réutilisent les précédentes pour optimiser le temps.'
    ],
    bestFor: 'Écrans denses, cibles minuscules, graphiques et vérifications où l\'emplacement exact est crucial.'
  }
];

/** Per-run tuning sent with `/api/run` for the Pro profile. */
export interface ProTuningOptions {
  verificationLevel?: VerificationLevelId | string;
  explorerMode?: ExplorerModeId | string;
}

/** Effective defaults reported by `GET /api/run/defaults`. */
export interface ProTuningDefaults {
  verification_level?: string | null;
  explorer_mode?: string | null;
}

export const DEFAULT_VERIFICATION_LEVEL: VerificationLevelId = 'final';
export const DEFAULT_EXPLORER_MODE: ExplorerModeId = 'flash';

/** Index of a level id within its ladder; falls back to the default when unknown. */
export function levelIndex<TId extends string>(
  ladder: readonly TuningLevel<TId>[],
  id: string | null | undefined,
  fallback: TId
): number {
  const wanted = String(id ?? '').trim().toLowerCase();
  const idx = ladder.findIndex((l) => l.id === wanted);
  if (idx >= 0) return idx;
  return Math.max(0, ladder.findIndex((l) => l.id === fallback));
}

/** Slider fill percentage for a notch index on a ladder of `count` notches. */
export function notchPercent(index: number, count: number): number {
  if (count <= 1) return 0;
  const clamped = Math.min(Math.max(index, 0), count - 1);
  return (clamped / (count - 1)) * 100;
}
