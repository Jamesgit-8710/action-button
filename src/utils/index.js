export const getStyleOptions = (type, status, size) => {
    let style = {
        border: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2px 4px",
        gap: "4px",
        fontWeight: "600",
        borderRadius: "5px"
    };

    switch (type) {
        case 'Neutral':
            style.color = '#282829';
            style.backgroundColor = 'transparent';
            break;
        case 'Reverse':
            style.color = '#FCFCFC';
            style.backgroundColor = '#0F0F0F';
            break;
        default:
            style.color = '#47B647';
            style.backgroundColor = 'transparent';
    }

    switch (size) {
        case 'Small':
            style.fontSize = '13.5px';
            break;
        case 'X-Small':
            style.fontSize = '12px';
            break;
        default:
            style.fontSize = '15px';
    }

    const combinedValue = `${type}_${status}`

    switch (combinedValue) {
        case 'Default_Disabled':
            style.color = '#c8e9c8';
            break;
        case 'Neutral_Disabled':
            style.color = '#bfbfbf';
            break;
        case 'Reverse_Disabled':
            style.color = '#565656';
            break;
    }

    return style;
}