import { Registry } from '@bem-react/di';

import { cnModal } from '../Modal';
import { Popup } from '../../Popup/Popup@touch-phone';

export const modalRegistry = new Registry({ id: cnModal() });

modalRegistry.set('Popup', Popup);
