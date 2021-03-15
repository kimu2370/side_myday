const size = {
    mobile: '414px',
    tabletS: '1023px',
    tabletM: '1220px',
    tabletL: '1280px',
    laptop: '1460px',
    desktop: '1700px',
};

const theme = {
    mobile: `max-width: ${size.mobile}`,
    tabletS: `max-width: ${size.tabletS}`,
    tabletM: `max-width: ${size.tabletM}`,
    tabletL: `max-width: ${size.tabletL}`,
    laptop: `min-width: ${size.laptop}`,
    desktop: `min-width: ${size.desktop}`,
};

export const color = {
    basic: `#007AFF`,
};

export const iphone11 = {
    config: `
        max-width: 414px;
        max-height: 896px;
    `,
};

export default theme;
