import SettingType from './setting-types';

const settings: SettingType = {
    mode: {
        name: 'dark',
        background: '#1B2430',
        foreground: '#252d3a',
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
        openStyle: 'accordion',
        visible: false
    },
    skin: 'default'
}

export default settings;