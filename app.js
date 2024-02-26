       

        const heading=React.createElement("div",{id:"parent"},[
            React.createElement("div",{id:"child"}),
            [React.createElement("h1",{},"im abdul"),
            React.createElement("h2",{},"im abdul")],
        
        React.createElement("div",{id:"child2"}),
        [React.createElement("h1",{},"im abdul"),
        React.createElement("h2",{},"im abdul")]]);

        

        const root = ReactDOM.createRoot(document.getElementById("root"));

        root.render(heading);
 