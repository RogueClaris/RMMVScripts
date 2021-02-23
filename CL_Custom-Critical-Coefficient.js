/*:
 * @plugindesc v1.0 Allow for the customization of the Critical Coefficient.
 * @author Rogue Claris
 * @param Critical Coefficient
 * @min 1
 * @max 9999
 * @desc The number by which damage is multiplied when a critical hit is landed. The default is 3.
 * @default 3
 * @type number
 *
 */

Game_Action.prototype.applyCritical = function(damage) {
    return Math.floor(damage * Number(PluginManager.parameters('CL_Custom-Critical-Coefficient')['Critical Coefficient']));
};