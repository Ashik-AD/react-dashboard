import SettingType from './setting-types';

const settings: SettingType = {
    mode: {
        name: 'dark',
        background: '#1B2430',
        foreground: '#161b24',
        textColor: '#d3d3d3'
    },
    layout: {
        appBarBlur: true,
        appBarPosition: 'fixed',
        footerPositioin: 'static'
    },
    primaryColor: {
        name: 'purple',
        color: '#A66CFF'
    },
    menuStyle: {
        collapse: false,
        layout: 'y',
        toggle: 'accordion',
        visible: false
    },
    skin: {
        type: 'default'
    }
}

export default settings;