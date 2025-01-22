import { MODULE_NAME } from "./const";
/**
 * Enumerable of identifiers for setting names.
 * @enum {String}
 */
export const SETTING_NAMES = {
  QUICK_SKILL_ENABLED: "enableSkillQuickRoll",
};

// QUICK ROLL SETTINGS
const quickRollOptions = [
  { name: SETTING_NAMES.QUICK_SKILL_ENABLED, default: true },
];
Hooks.once("init", () => {
  game.settings.register(MODULE_NAME, "test-setting", {
    name: "Test setting",
    hint: "Test hint",
    scope: "world",
    config: true,
    type: Boolean,
    default: false,
    requiresReload: false,
  });
});
