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

export interface AppReference {
  name: string;
  icon: string;
  pkg?: string;
  category?: string;
}

export type SuggestionCategory =
  | 'all'
  | 'flash'
  | 'pro'
  | 'cross_app'
  | 'monitor';

export interface SmartSuggestion {
  id: string;
  title: string;
  description: string;
  goal: string;
  profile: 'flash' | 'pro';
  category: 'flash' | 'pro' | 'cross_app' | 'monitor';
  tag: string;
  apps: AppReference[];
  requiredPackages?: string[];
  matchMode?: 'any' | 'all';
  priority?: number;
}

/**
 * Recognized Android App Package Registry
 */
export const APP_REGISTRY: Record<string, AppReference> = {
  // Google Suite & System
  'com.google.android.apps.maps': { name: 'Maps', icon: 'explore', pkg: 'com.google.android.apps.maps', category: 'navigation' },
  'com.google.android.gm': { name: 'Gmail', icon: 'mail', pkg: 'com.google.android.gm', category: 'productivity' },
  'com.android.chrome': { name: 'Chrome', icon: 'public', pkg: 'com.android.chrome', category: 'browser' },
  'com.google.android.youtube': { name: 'YouTube', icon: 'smart_display', pkg: 'com.google.android.youtube', category: 'entertainment' },
  'com.android.settings': { name: 'Settings', icon: 'settings', pkg: 'com.android.settings', category: 'system' },
  'com.google.android.deskclock': { name: 'Clock', icon: 'timer', pkg: 'com.google.android.deskclock', category: 'utility' },
  'com.android.deskclock': { name: 'Clock', icon: 'timer', pkg: 'com.android.deskclock', category: 'utility' },
  'com.google.android.calculator': { name: 'Calculator', icon: 'calculate', pkg: 'com.google.android.calculator', category: 'utility' },
  'com.android.calculator2': { name: 'Calculator', icon: 'calculate', pkg: 'com.android.calculator2', category: 'utility' },
  'com.google.android.apps.photos': { name: 'Photos', icon: 'photo_library', pkg: 'com.google.android.apps.photos', category: 'media' },
  'com.google.android.calendar': { name: 'Calendar', icon: 'calendar_month', pkg: 'com.google.android.calendar', category: 'productivity' },
  'com.google.android.keep': { name: 'Keep Notes', icon: 'note_alt', pkg: 'com.google.android.keep', category: 'productivity' },
  'com.android.vending': { name: 'Play Store', icon: 'storefront', pkg: 'com.android.vending', category: 'tools' },
  'com.google.android.apps.messaging': { name: 'Messages', icon: 'chat', pkg: 'com.google.android.apps.messaging', category: 'communication' },

  // Popular Ecosystem Apps
  'com.tencent.mm': { name: 'WeChat', icon: 'forum', pkg: 'com.tencent.mm', category: 'social' },
  'com.xingin.xhs': { name: 'Xiaohongshu', icon: 'auto_stories', pkg: 'com.xingin.xhs', category: 'social' },
  'com.sankuai.meituan': { name: 'Meituan', icon: 'restaurant', pkg: 'com.sankuai.meituan', category: 'lifestyle' },
  'com.dianping.v1': { name: 'Dianping', icon: 'star', pkg: 'com.dianping.v1', category: 'lifestyle' },
  'tv.danmaku.bili': { name: 'Bilibili', icon: 'video_library', pkg: 'tv.danmaku.bili', category: 'entertainment' },
  'com.eg.android.AlipayGphone': { name: 'Alipay', icon: 'account_balance_wallet', pkg: 'com.eg.android.AlipayGphone', category: 'finance' },
  'com.netease.cloudmusic': { name: 'NetEase Music', icon: 'headphones', pkg: 'com.netease.cloudmusic', category: 'entertainment' },
  'com.spotify.music': { name: 'Spotify', icon: 'music_note', pkg: 'com.spotify.music', category: 'entertainment' }
};

/**
 * Curated, clean task preset library (1~2 representative tasks per common app)
 */
export const SMART_TASK_LIBRARY: SmartSuggestion[] = [
  // 1. Google Maps
  {
    id: 'maps_coffee',
    title: 'Trouver un café de spécialité',
    description: 'Rechercher les cafés les mieux notés à proximité sur Google Maps',
    goal: 'Ouvrir Google Maps, rechercher les cafés de spécialité les mieux notés à proximité et afficher les détails du premier résultat.',
    profile: 'flash',
    category: 'flash',
    tag: 'Maps',
    apps: [{ name: 'Maps', icon: 'explore', pkg: 'com.google.android.apps.maps' }],
    requiredPackages: ['com.google.android.apps.maps'],
    priority: 95
  },
  {
    id: 'pro_commute_share',
    title: 'Trajet & Message d\'arrivée',
    description: 'Vérifier le temps de trajet sur Maps et rédiger un SMS avec l\'heure d\'arrivée',
    goal: 'Ouvrir Google Maps pour vérifier le temps de trajet jusqu\'à l\'aéroport international, calculer l\'heure d\'arrivée, puis ouvrir Messages et rédiger un SMS avec l\'heure estimée.',
    profile: 'pro',
    category: 'cross_app',
    tag: 'Maps + Messages',
    apps: [
      { name: 'Maps', icon: 'explore', pkg: 'com.google.android.apps.maps' },
      { name: 'Messages', icon: 'chat', pkg: 'com.google.android.apps.messaging' }
    ],
    requiredPackages: ['com.google.android.apps.maps', 'com.google.android.apps.messaging'],
    matchMode: 'all',
    priority: 92
  },

  // 2. Gmail
  {
    id: 'gmail_receipts',
    title: 'Rechercher des reçus de commande',
    description: 'Trouver les emails récents de confirmation de vol ou de livraison dans Gmail',
    goal: 'Ouvrir Gmail et rechercher les emails récents de confirmation de vol ou de livraison de colis.',
    profile: 'flash',
    category: 'flash',
    tag: 'Gmail',
    apps: [{ name: 'Gmail', icon: 'mail', pkg: 'com.google.android.gm' }],
    requiredPackages: ['com.google.android.gm'],
    priority: 90
  },
  {
    id: 'pro_email_to_calendar',
    title: 'Itinéraire email vers Agenda',
    description: 'Extraire les dates de vol ou d\'événement depuis Gmail et les planifier dans l\'Agenda',
    goal: 'Ouvrir Gmail pour trouver la dernière invitation ou itinéraire, extraire les dates et le lieu, puis ouvrir Google Agenda et créer l\'événement correspondant.',
    profile: 'pro',
    category: 'cross_app',
    tag: 'Gmail + Agenda',
    apps: [
      { name: 'Gmail', icon: 'mail', pkg: 'com.google.android.gm' },
      { name: 'Calendar', icon: 'calendar_month', pkg: 'com.google.android.calendar' }
    ],
    requiredPackages: ['com.google.android.gm'],
    priority: 94
  },

  // 3. Chrome
  {
    id: 'chrome_research',
    title: 'Rechercher les actualités IA',
    description: 'Rechercher les dernières avancées en IA multimodale dans Chrome',
    goal: 'Ouvrir le navigateur Chrome et rechercher les dernières avancées concernant les agents IA mobiles multimodaux.',
    profile: 'flash',
    category: 'flash',
    tag: 'Chrome',
    apps: [{ name: 'Chrome', icon: 'public', pkg: 'com.android.chrome' }],
    requiredPackages: ['com.android.chrome'],
    priority: 88
  },
  {
    id: 'pro_research_keep',
    title: 'Recherche produit & Note Keep',
    description: 'Comparer les 3 meilleurs casques sur Chrome et noter la comparaison dans Keep',
    goal: 'Ouvrir Chrome, rechercher les 3 meilleurs casques à réduction de bruit en comparant prix et autonomie, puis rédiger un récapitulatif structuré dans Google Keep.',
    profile: 'pro',
    category: 'pro',
    tag: 'Chrome + Keep',
    apps: [
      { name: 'Chrome', icon: 'public', pkg: 'com.android.chrome' },
      { name: 'Keep Notes', icon: 'note_alt', pkg: 'com.google.android.keep' }
    ],
    requiredPackages: ['com.android.chrome'],
    priority: 91
  },

  // 4. YouTube
  {
    id: 'youtube_lofi',
    title: 'Lancer une radio Lo-Fi',
    description: 'Rechercher et lancer un stream musical Lo-Fi relaxant sur YouTube',
    goal: 'Ouvrir YouTube, rechercher "Lofi hip hop beats relaxing radio" et appuyer sur le direct.',
    profile: 'flash',
    category: 'flash',
    tag: 'YouTube',
    apps: [{ name: 'YouTube', icon: 'smart_display', pkg: 'com.google.android.youtube' }],
    requiredPackages: ['com.google.android.youtube'],
    priority: 85
  },

  // 5. Settings
  {
    id: 'settings_display_wifi',
    title: 'Mode sombre & Vérification Wi-Fi',
    description: 'Activer le thème sombre et vérifier la connexion réseau dans les Paramètres',
    goal: 'Ouvrir l\'application Paramètres, aller dans Affichage, vérifier que le thème sombre est activé, et contrôler l\'état du Wi-Fi.',
    profile: 'flash',
    category: 'flash',
    tag: 'Paramètres',
    apps: [{ name: 'Settings', icon: 'settings', pkg: 'com.android.settings' }],
    requiredPackages: ['com.android.settings'],
    priority: 87
  },
  {
    id: 'pro_settings_qa',
    title: 'Audit système & Détection de crash',
    description: 'Parcourir les sous-menus des Paramètres et vérifier l\'absence d\'erreurs',
    goal: 'Explorer les sous-menus des Paramètres (Réseau, Appareils connectés, Applications, Batterie, Stockage), vérifier que chaque écran s\'affiche sans erreur ni plantage, et synthétiser les résultats.',
    profile: 'pro',
    category: 'monitor',
    tag: 'Paramètres QA',
    apps: [{ name: 'Settings', icon: 'settings', pkg: 'com.android.settings' }],
    requiredPackages: ['com.android.settings'],
    priority: 93
  },

  // 6. Clock
  {
    id: 'clock_timer',
    title: 'Minuteur Pomodoro de 25 min',
    description: 'Démarrer un compte à rebours de 25 minutes dans l\'application Horloge',
    goal: 'Ouvrir l\'application Horloge, aller sur l\'onglet Minuteur, régler 25 minutes et lancer le décompte.',
    profile: 'flash',
    category: 'flash',
    tag: 'Horloge',
    apps: [{ name: 'Clock', icon: 'timer', pkg: 'com.google.android.deskclock' }],
    requiredPackages: ['com.google.android.deskclock', 'com.android.deskclock'],
    priority: 86
  },

  // 7. Calculator
  {
    id: 'calc_gratuity',
    title: 'Partage d\'addition & Pourboire',
    description: 'Calculer 18% de pourboire sur 186,40 $ pour 3 personnes dans la Calculatrice',
    goal: 'Ouvrir la Calculatrice et calculer 18% de pourboire sur une addition de 186,40 $, puis diviser par 3 personnes.',
    profile: 'flash',
    category: 'flash',
    tag: 'Calculatrice',
    apps: [{ name: 'Calculator', icon: 'calculate', pkg: 'com.google.android.calculator' }],
    requiredPackages: ['com.google.android.calculator', 'com.android.calculator2'],
    priority: 84
  },

  // 8. Photos
  {
    id: 'photos_inspect',
    title: 'Inspecter la capture récente',
    description: 'Ouvrir Google Photos et consulter la dernière capture d\'écran prise',
    goal: 'Ouvrir Google Photos et afficher la capture d\'écran la plus récente dans l\'album des captures.',
    profile: 'flash',
    category: 'flash',
    tag: 'Photos',
    apps: [{ name: 'Photos', icon: 'photo_library', pkg: 'com.google.android.apps.photos' }],
    requiredPackages: ['com.google.android.apps.photos'],
    priority: 82
  },

  // 9. WeChat
  {
    id: 'wechat_browse',
    title: 'Consulter les messages WeChat',
    description: 'Ouvrir WeChat et consulter les conversations récentes',
    goal: 'Ouvrir WeChat et consulter les messages récents dans la première discussion.',
    profile: 'flash',
    category: 'flash',
    tag: 'WeChat',
    apps: [{ name: 'WeChat', icon: 'forum', pkg: 'com.tencent.mm' }],
    requiredPackages: ['com.tencent.mm'],
    priority: 89
  },
  {
    id: 'pro_wechat_to_calendar',
    title: 'Annonce WeChat vers Agenda',
    description: 'Extraire une annonce de réunion depuis WeChat et l\'ajouter à l\'Agenda',
    goal: 'Ouvrir WeChat, repérer la dernière annonce de réunion dans la discussion principale, extraire l\'heure et l\'objet, puis ouvrir l\'Agenda et planifier l\'événement.',
    profile: 'pro',
    category: 'cross_app',
    tag: 'WeChat + Agenda',
    apps: [
      { name: 'WeChat', icon: 'forum', pkg: 'com.tencent.mm' },
      { name: 'Calendar', icon: 'calendar_month', pkg: 'com.google.android.calendar' }
    ],
    requiredPackages: ['com.tencent.mm'],
    priority: 93
  },

  // 10. Xiaohongshu
  {
    id: 'xhs_coffee_guide',
    title: 'Recherche avis cafés sur RED',
    description: 'Rechercher les avis tendances sur les cafés de spécialité sur Xiaohongshu',
    goal: 'Ouvrir Xiaohongshu, rechercher les cafés de spécialité les mieux notés et consulter la publication principale.',
    profile: 'flash',
    category: 'flash',
    tag: 'Xiaohongshu',
    apps: [{ name: 'Xiaohongshu', icon: 'auto_stories', pkg: 'com.xingin.xhs' }],
    requiredPackages: ['com.xingin.xhs'],
    priority: 87
  },

  // 11. Meituan / Dianping
  {
    id: 'meituan_ramen_search',
    title: 'Recherche restaurants de ramen',
    description: 'Trouver les meilleurs restaurants de ramen à proximité sur Meituan ou Dianping',
    goal: 'Ouvrir Meituan ou Dianping, rechercher les meilleurs ramen à proximité et consulter la note du premier restaurant.',
    profile: 'flash',
    category: 'flash',
    tag: 'Meituan',
    apps: [{ name: 'Meituan', icon: 'restaurant', pkg: 'com.sankuai.meituan' }],
    requiredPackages: ['com.sankuai.meituan', 'com.dianping.v1'],
    priority: 86
  },

  // 12. Bilibili
  {
    id: 'bilibili_stream',
    title: 'Vidéo tech sur Bilibili',
    description: 'Rechercher et lire un tutoriel sur les agents IA sur Bilibili',
    goal: 'Ouvrir Bilibili, rechercher "AI Agent Architecture" et lancer la première vidéo correspondante.',
    profile: 'flash',
    category: 'flash',
    tag: 'Bilibili',
    apps: [{ name: 'Bilibili', icon: 'video_library', pkg: 'tv.danmaku.bili' }],
    requiredPackages: ['tv.danmaku.bili'],
    priority: 85
  },

  // 13. Play Store
  {
    id: 'pro_playstore_review',
    title: 'Étude d\'applications Play Store',
    description: 'Comparer les meilleures applications de gestion de tâches et leurs avis',
    goal: 'Ouvrir le Google Play Store, rechercher les meilleures applications de gestion de tâches, comparer les notes et avis des 2 premières, et synthétiser les recommandations.',
    profile: 'pro',
    category: 'pro',
    tag: 'Play Store',
    apps: [{ name: 'Play Store', icon: 'storefront', pkg: 'com.android.vending' }],
    requiredPackages: ['com.android.vending'],
    priority: 88
  }
];
