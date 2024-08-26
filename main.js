function App(){


    const st1 = {color: 'white', backgroundColor: 'black', margin :'auto', padding:'20px', display : 'flex', flexDirection : 'column', gap: '20px' }
    const st2 = {color: '343A46', backgroundColor: '#23272F', padding:'40px', width : '100%', margin :'auto', borderRadius: '20px', display : 'flex', flexDirection : 'column', gap: '20px' }
    const st3 = {display : 'flex', flexDirection : 'column', gap: '5px' }
    
    

    return(
        <div  style = {st1}>
            <h1>Quick Start</h1>
            <p>Welcome to the React documentation! This page will give you an introduction to the 80% of React concepts that you will use on a daily basis.</p>
            <div style = {st2}>
                <h2>You will learn</h2>
                <ul style ={st3}>
                    <li>How to create and nest components</li>
                    <li>How to add markup and styles</li>
                    <li>How to display data</li>
                    <li>How to render conditions and lists</li>
                    <li>How to respond to events and update the screen</li>
                    <li>How to share data between components</li>
                </ul>
            </div>
        </div>
    )
}

ReactDOM.createRoot(document.querySelector('#root')).render(<App />)