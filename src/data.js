// 18 Pokemon Types List
export const TYPES = [
  "Normal", "Fire", "Water", "Electric", "Grass", "Ice", "Fighting", "Poison", 
  "Ground", "Flying", "Psychic", "Bug", "Rock", "Ghost", "Dragon", "Dark", "Steel", "Fairy"
];

// Minimal Defensive profiles mapping
export const typeRelations = {
  Normal: { weakness: ["Fighting"], resistance: [], immunity: ["Ghost"] },
  Fire: { weakness: ["Water", "Ground", "Rock"], resistance: ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"], immunity: [] },
  Water: { weakness: ["Grass", "Electric"], resistance: ["Fire", "Water", "Ice", "Steel"], immunity: [] },
  Electric: { weakness: ["Ground"], resistance: ["Electric", "Flying", "Steel"], immunity: [] },
  Grass: { weakness: ["Fire", "Ice", "Poison", "Flying", "Bug"], resistance: ["Water", "Electric", "Grass", "Ground"], immunity: [] },
  Ice: { weakness: ["Fire", "Fighting", "Rock", "Steel"], resistance: ["Ice"], immunity: [] },
  Fighting: { weakness: ["Flying", "Psychic", "Fairy"], resistance: ["Bug", "Rock", "Dark"], immunity: [] },
  Poison: { weakness: ["Ground", "Psychic"], resistance: ["Grass", "Fighting", "Poison", "Bug", "Fairy"], immunity: [] },
  Ground: { weakness: ["Water", "Grass", "Ice"], resistance: ["Poison", "Rock"], immunity: ["Electric"] },
  Flying: { weakness: ["Electric", "Ice", "Rock"], resistance: ["Grass", "Fighting", "Bug"], immunity: ["Ground"] },
  Psychic: { weakness: ["Bug", "Ghost", "Dark"], resistance: ["Fighting", "Psychic"], immunity: [] },
  Bug: { weakness: ["Fire", "Flying", "Rock"], resistance: ["Fighting", "Ground", "Grass"], immunity: [] },
  Rock: { weakness: ["Water", "Grass", "Fighting", "Ground", "Steel"], resistance: ["Normal", "Fire", "Poison", "Flying"], immunity: [] },
  Ghost: { weakness: ["Ghost", "Dark"], resistance: ["Poison", "Bug"], immunity: ["Normal", "Fighting"] },
  Dragon: { weakness: ["Ice", "Dragon", "Fairy"], resistance: ["Fire", "Water", "Electric", "Grass"], immunity: [] },
  Dark: { weakness: ["Fighting", "Bug", "Fairy"], resistance: ["Ghost", "Dark"], immunity: ["Psychic"] },
  Steel: { weakness: ["Fire", "Fighting", "Ground"], resistance: ["Normal", "Grass", "Ice", "Flying", "Psychic", "Bug", "Rock", "Dragon", "Steel", "Fairy"], immunity: ["Poison"] },
  Fairy: { weakness: ["Poison", "Steel"], resistance: ["Fighting", "Bug", "Dark"], immunity: ["Dragon"] }
};

// SVG Icons Map for Types
export const typeIcons = {
  Normal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="8"/></svg>`,
  Fire: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
  Water: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`,
  Electric: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  Grass: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2C6.5 7.5 6.5 14.5 12 20c5.5-5.5 5.5-12.5 0-18z"/><path d="M12 2v18"/></svg>`,
  Ice: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2v20M2 12h20M12 12l7 7M12 12l-7-7M12 12l7-7M12 12l-7 7M8 4l4 4 4-4M16 20l-4-4-4 4M4 8l4 4-4 4M20 16l-4-4 4-4"/></svg>`,
  Fighting: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="10" width="4" height="4" rx="1"/><rect x="17" y="10" width="4" height="4" rx="1"/><line x1="7" y1="12" x2="17" y2="12" stroke-width="3"/></svg>`,
  Poison: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 3h6M12 3v3M10 6h4l2 4v9a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-9l2-4z"/><circle cx="12" cy="14" r="1.5"/></svg>`,
  Ground: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 20l6-10 4 6 5-8 3 12z"/></svg>`,
  Flying: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 12c4 0 8-3 12-6a6 6 0 0 1 6 6c-2 4-6 6-12 6-3 0-5-1-6-6z M9 12c2 1 4 1 6 0"/></svg>`,
  Psychic: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="3"/><path d="M3 12c4-8 14-8 18 0-4 8-14 8-18 0z"/></svg>`,
  Bug: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2v18M12 6a4 4 0 0 1 4 4v4a4 4 0 0 1-8 0v-4a4 4 0 0 1 4-4zM6 8h12M6 14h12M8 18l-2 2M16 18l2-2"/></svg>`,
  Rock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 22 8.5 18 20 6 20 2 8.5"/></svg>`,
  Ghost: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2a8 8 0 0 0-8 8v9a1 1 0 0 0 1.7.7l1.8-1.8 1.8 1.8a1 1 0 0 0 1.4 0l1.8-1.8 1.8 1.8a1 1 0 0 0 1.4 0l1.8-1.8 1.8 1.8A1 1 0 0 0 20 19v-9a8 8 0 0 0-8-8z"/><circle cx="9" cy="10" r="1" fill="currentColor"/><circle cx="15" cy="10" r="1" fill="currentColor"/></svg>`,
  Dragon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 12h-2v-2h2v2zm0-4h-2V7h2v5z"/></svg>`,
  Dark: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 3a9 9 0 1 0 9 9 9.75 9.75 0 0 1-9-9z"/></svg>`,
  Steel: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  Fairy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2l2.4 7.4h7.8l-6.3 4.6 2.4 7.4-6.3-4.6-6.3 4.6 2.4-7.4-6.3-4.6h7.8z"/></svg>`,
  None: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="5" x2="19" y2="19"/><circle cx="12" cy="12" r="10"/></svg>`
};
