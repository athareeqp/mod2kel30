import React from 'react';
const praktikan = {
    name: 'PRAKTIKUM RPLBK',
    jurusan: 'TEKNIK KOMPUTER 2020'
};
function greetings(praktikan) {
    return praktikan.name +' - '+ praktikan.jurusan;
}

//menggunakan JSX
const ReactJSX = () => {
    return (
        <div style={{ color: 'yellow' }}>
            <h1>Belajar JSX</h1>
            <h2>{greetings(praktikan)}</h2>
        </div>
    );
}
//tidak menggunakan JSX
const ReactNoJSX = () => {
    return React.createElement('div', null,
        React.createElement('h2', null, 'KELOMPOK 30 ', 
        )
    )
}
export default ReactJSX;
export { ReactNoJSX };
