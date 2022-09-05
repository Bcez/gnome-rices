import General   from './pages/general.js'
import Blacklist from './pages/blacklist.js'
import Custom    from './pages/custom.js'

export const pages = () => [
    {
        title: 'General',
        icon_name: 'emblem-system-symbolic',
        widget: new General (),
    },
    {
        title: 'Blacklist',
        icon_name: 'action-unavailable-symbolic',
        widget: new Blacklist (),
    },
    {
        title: 'Custom',
        icon_name: 'document-edit-symbolic',
        widget: new Custom (),
    },
]
