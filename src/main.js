import './style.css'
import { TYPES, typeRelations, typeIcons } from './data.js'

// ACTIVE SELECTION STATE
let selectedPrimary = "Normal";
let selectedSecondary = "None";

// Helper to generate type badge HTML
function createTypeBadge(type, isImmunity = false) {
  const icon = typeIcons[type] || "";
  const immunityClass = isImmunity ? " immunity-badge" : "";
  return `<span class="type-badge${immunityClass}" data-type="${type}">${icon}${type === 'None' ? 'Nenhum' : type}</span>`;
}

// Helper to derive offensive strengths and weaknesses for a single type
function getOffensiveEffectiveness(attackingType) {
  const strengths = [];
  const resists = [];
  const immunities = [];

  for (const defendingType of Object.keys(typeRelations)) {
    const relation = typeRelations[defendingType];
    if (relation.immunity.includes(attackingType)) {
      immunities.push(defendingType);
    } else if (relation.weakness.includes(attackingType)) {
      strengths.push(defendingType);
    } else if (relation.resistance.includes(attackingType)) {
      resists.push(defendingType);
    }
  }

  return { strengths, resists, immunities };
}

// INITIALIZATION & RENDER
document.addEventListener("DOMContentLoaded", () => {
  renderPickers();
  updateCalculations();
});

// Render the interactive tag pickers for primary and secondary type
function renderPickers() {
  const primaryContainer = document.getElementById("primary-picker-container");
  const secondaryContainer = document.getElementById("secondary-picker-container");

  primaryContainer.innerHTML = "";
  secondaryContainer.innerHTML = "";

  // 1. Primary Pickers (18 types)
  TYPES.forEach(type => {
    const badge = document.createElement("span");
    badge.className = "type-badge";
    badge.setAttribute("data-type", type);
    badge.innerHTML = `${typeIcons[type] || ""} ${type}`;
    badge.onclick = () => selectType('primary', type);
    primaryContainer.appendChild(badge);
  });

  // 2. Secondary Pickers (None + 18 types)
  // "None" option first
  const noneBadge = document.createElement("span");
  noneBadge.className = "type-badge";
  noneBadge.setAttribute("data-type", "None");
  noneBadge.innerHTML = `${typeIcons["None"]} Nenhum`;
  noneBadge.onclick = () => selectType('secondary', "None");
  secondaryContainer.appendChild(noneBadge);

  TYPES.forEach(type => {
    const badge = document.createElement("span");
    badge.className = "type-badge";
    badge.setAttribute("data-type", type);
    badge.innerHTML = `${typeIcons[type] || ""} ${type}`;
    badge.onclick = () => selectType('secondary', type);
    secondaryContainer.appendChild(badge);
  });

  updatePickerHighlightState();
}

// Update active visual styles of pickers (glow selected, dim others)
function updatePickerHighlightState() {
  const primContainer = document.getElementById("primary-picker-container");
  const secContainer = document.getElementById("secondary-picker-container");

  // Primary
  primContainer.setAttribute("data-selected", selectedPrimary ? "true" : "false");
  const primBadges = primContainer.querySelectorAll(".type-badge");
  primBadges.forEach(badge => {
    const type = badge.getAttribute("data-type");
    if (type === selectedPrimary) {
      badge.className = "type-badge active-picker-selection";
      badge.style.setProperty("--badge-glow-color", `var(--type-${type.toLowerCase()})`);
    } else {
      badge.className = "type-badge";
    }
  });

  // Secondary
  secContainer.setAttribute("data-selected", selectedSecondary ? "true" : "false");
  const secBadges = secContainer.querySelectorAll(".type-badge");
  secBadges.forEach(badge => {
    const type = badge.getAttribute("data-type");
    if (type === selectedSecondary) {
      badge.className = "type-badge active-picker-selection";
      badge.style.setProperty("--badge-glow-color", type === "None" ? "rgba(255,255,255,0.2)" : `var(--type-${type.toLowerCase()})`);
    } else {
      badge.className = "type-badge";
    }
  });
}

// Select Type Action
function selectType(role, type) {
  if (role === 'primary') {
    selectedPrimary = type;
    // If secondary is equal to new primary, clear secondary to "None"
    if (selectedSecondary === selectedPrimary) {
      selectedSecondary = "None";
    }
  } else {
    selectedSecondary = type;
    // If secondary is set to primary, clear primary? Actually, let's keep primary and set secondary to none
    if (selectedPrimary === selectedSecondary) {
      selectedSecondary = "None";
    }
  }

  updatePickerHighlightState();
  updateCalculations();
}

// UPDATE CALCULATOR AND ROWS
function updateCalculations() {
  // Calculate Combined Defense
  const defenseMultipliers = {};
  TYPES.forEach(t => defenseMultipliers[t] = 1.0);

  const applyTypeDefense = (type) => {
    if (!type || type === "None") return;
    const rel = typeRelations[type];
    rel.weakness.forEach(t => defenseMultipliers[t] *= 2.0);
    rel.resistance.forEach(t => defenseMultipliers[t] *= 0.5);
    rel.immunity.forEach(t => defenseMultipliers[t] *= 0.0);
  };

  applyTypeDefense(selectedPrimary);
  applyTypeDefense(selectedSecondary);

  // Categorize multipliers
  const defenseResults = {
    quadWeak: [],   // 4x
    doubleWeak: [], // 2x
    halfResist: [], // 0.5x
    quadResist: [], // 0.25x
    immune: []      // 0x
  };

  TYPES.forEach(t => {
    const mult = defenseMultipliers[t];
    if (mult === 4.0) defenseResults.quadWeak.push(t);
    else if (mult === 2.0) defenseResults.doubleWeak.push(t);
    else if (mult === 0.5) defenseResults.halfResist.push(t);
    else if (mult === 0.25) defenseResults.quadResist.push(t);
    else if (mult === 0.0) defenseResults.immune.push(t);
  });

  // 1. Render Combined Badges Display
  const combDisplay = document.getElementById("combined-badges-display");
  combDisplay.innerHTML = "";
  combDisplay.innerHTML += createTypeBadge(selectedPrimary);
  if (selectedSecondary && selectedSecondary !== "None" && selectedSecondary !== selectedPrimary) {
    combDisplay.innerHTML += createTypeBadge(selectedSecondary);
  }

  // 2. Render defensive profile list
  const renderDefCell = (cellId, list) => {
    const cell = document.getElementById(cellId);
    cell.innerHTML = "";
    if (list.length === 0) {
      cell.innerHTML = '<span class="no-results">-</span>';
    } else {
      cell.innerHTML = list.map(t => createTypeBadge(t)).join('');
    }
  };

  renderDefCell("def-mult-0", defenseResults.immune);
  renderDefCell("def-mult-0-25", defenseResults.quadResist);
  renderDefCell("def-mult-0-5", defenseResults.halfResist);
  renderDefCell("def-mult-2", defenseResults.doubleWeak);
  renderDefCell("def-mult-4", defenseResults.quadWeak);

  // 3. Render filtered individual rows
  renderFilteredRows();
}

// Render matchup table with ONLY selected rows
function renderFilteredRows() {
  const container = document.getElementById("effectiveness-rows-container");
  container.innerHTML = "";

  // Determine unique selected types to render
  const activeTypes = [];
  if (selectedPrimary) activeTypes.push(selectedPrimary);
  if (selectedSecondary && selectedSecondary !== "None" && selectedSecondary !== selectedPrimary) {
    activeTypes.push(selectedSecondary);
  }

  if (activeTypes.length === 0) {
    container.innerHTML = `<div style="text-align:center; padding: 30px; color: var(--text-muted); font-style:italic;">Nenhum tipo selecionado. Selecione um tipo acima para detalhar.</div>`;
    return;
  }

  activeTypes.forEach(refType => {
    const defProfile = typeRelations[refType];
    const offProfile = getOffensiveEffectiveness(refType);

    // Defensive column 1: Resisted and Immune
    const defenseResistedBadges = [];
    defProfile.resistance.forEach(t => defenseResistedBadges.push(createTypeBadge(t)));
    defProfile.immunity.forEach(t => defenseResistedBadges.push(createTypeBadge(t, true)));

    // Defensive column 2: Weaknesses
    const defenseWeaknessBadges = defProfile.weakness.map(t => createTypeBadge(t));

    // Offensive column 1: Deals double damage
    const offenseStrengthsBadges = offProfile.strengths.map(t => createTypeBadge(t));

    // Offensive column 2: Deals reduced damage
    const offenseResistedBadges = [];
    offProfile.resists.forEach(t => offenseResistedBadges.push(createTypeBadge(t)));
    offProfile.immunities.forEach(t => offenseResistedBadges.push(createTypeBadge(t, true)));

    // Assemble row element
    const row = document.createElement("div");
    row.className = "effectiveness-row";

    row.innerHTML = `
      <!-- DEFENSE RESIST / IMMUNE (Green Label) -->
      <div class="row-col">
        <span class="col-label-mobile green-label">Defesa: Toma Menos Dano (Resiste)</span>
        <div class="row-col-badges">
          ${defenseResistedBadges.length > 0 ? defenseResistedBadges.join('') : '<span class="no-results">-</span>'}
        </div>
      </div>

      <!-- DEFENSE WEAKNESS (Red Label) -->
      <div class="row-col">
        <span class="col-label-mobile red-label">Defesa: Toma Mais Dano (Fraqueza)</span>
        <div class="row-col-badges">
          ${defenseWeaknessBadges.length > 0 ? defenseWeaknessBadges.join('') : '<span class="no-results">-</span>'}
        </div>
      </div>

      <!-- REFERENCE TYPE (CENTER) -->
      <div class="row-col">
        <div class="center-type-wrapper">
          <span class="type-badge" data-type="${refType}" style="padding: 10px 18px; font-size: 0.95rem; cursor: default;">
            ${typeIcons[refType]}${refType}
          </span>
        </div>
      </div>

      <!-- OFFENSE SUPER EFFECTIVE (Green Label) -->
      <div class="row-col">
        <span class="col-label-mobile green-label">Ataque: Causa Mais Dano (Forte)</span>
        <div class="row-col-badges">
          ${offenseStrengthsBadges.length > 0 ? offenseStrengthsBadges.join('') : '<span class="no-results">-</span>'}
        </div>
      </div>

      <!-- OFFENSE RESISTED / NO EFFECT (Red Label) -->
      <div class="row-col">
        <span class="col-label-mobile red-label">Ataque: Causa Menos Dano (Fraco)</span>
        <div class="row-col-badges">
          ${offenseResistedBadges.length > 0 ? offenseResistedBadges.join('') : '<span class="no-results">-</span>'}
        </div>
      </div>
    `;

    container.appendChild(row);
  });
}
