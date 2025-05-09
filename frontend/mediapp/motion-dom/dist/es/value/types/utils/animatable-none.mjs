import { complex } from '../complex/index.mjs';
import { filter } from '../complex/filter.mjs';
import { getDefaultValueType } from '../maps/defaults.mjs';

function getAnimatableNone(key, value) {
    let defaultValueType = getDefaultValueType(key);
    if (defaultValueType !== filter)
        defaultValueType = complex;
    // If value is not recognised as animatable, ie "none", create an animatable version origin based on the target
    return defaultValueType.getAnimatableNone
        ? defaultValueType.getAnimatableNone(value)
        : undefined;
}

export { getAnimatableNone };
