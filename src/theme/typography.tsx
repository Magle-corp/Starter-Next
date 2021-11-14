const fontFamily = `font-family: Arial, sans-serif;`;

const variant: object = {
    h1: `
    ${fontFamily}
    font-size: 4rem;
    line-height: 4.8rem;
    font-weight: 900;
    text-decoration: none;
    `,
    h2: `
    ${fontFamily}
    font-size: 3.2rem;
    line-height: 4rem;
    font-weight: 800;
    text-decoration: none;
`,
    h3: `
    ${fontFamily}
    font-size: 2.4rem;
    line-height: 3.2rem;
    font-weight: 700;
    text-decoration: none;
`,
    h4: `
    ${fontFamily}
    font-size: 2rem;
    line-height: 2.8rem;
    font-weight: 600;
    text-decoration: none;
`,
    p: `
    ${fontFamily}
    font-size: 1.4rem;
    line-height: 2.4rem;
    font-weight: 400;
    text-decoration: none;
`,
    button: `
    padding: 5px 7px;
    ${fontFamily}
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 700;
    text-decoration: none;
    background-color: #ffffff;
    border: 2px solid #000000;
    border-radius: 3px;
    cursor: pointer;
`,
    inline_link: `
    ${fontFamily}
    font-size: 1.4rem;
    line-height: 2.4rem;
    font-weight: 400;
    text-decoration: none;
    color: #000000;
`,
};

export default variant;
