import Button from './Button';
import Tooltip from './Tooltip';

const ComponentsOverrides = (theme) => ({ ...Tooltip(theme), ...Button(theme) });

export default ComponentsOverrides;
