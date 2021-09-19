:root {
    --color-ocean: hsl(240, 100%, 58%);
    --color-snow: snow;

    font-family: Arial, Helvetica, sans-serif;
    --grandezza-testo: 5vh;
}

body {
    margin: 0;
    font-size: var(--grandezza-testo);
}

.tutto {
    width: 100%;
    height: 100vh;
}

.centra {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.output {
    width: 30ch;
    text-align: center;
}

.input {
    display: flex;
}

.input > * {
    margin: calc(var(--grandezza-testo) * 0.75) calc(var(--grandezza-testo) * 0.25);
}

/* BOTTONE */

.button {
    display: flex;
    overflow: hidden;

    cursor: pointer;
    user-select: none;
    transition: all 150ms linear;
    text-align: center;
    white-space: nowrap;
    text-decoration: none !important;

    font-size: calc(var(--grandezza-testo) * 0.75);
    padding: 10px;

    color: #fff;
    background-color: none;
    border-radius: calc(var(--grandezza-testo) * 0.3);

    -webkit-appearance: none;
    -moz-appearance:    none;
    appearance:         none;

    justify-content: center;
    align-items: center;
}

.button:hover {
    transition: all 150ms linear;
}

.button:active {
    transition: all 150ms linear;
    opacity: .75;
}

.button:focus {
    outline: 1px dotted #959595;
    outline-offset: -4px;
}

.button.-blue {
    border: 2px solid var(--color-ocean);
    color: var(--color-ocean);
}

.button.-blue:hover {
    color: var(--color-snow);
    background: var(--color-ocean);
}
