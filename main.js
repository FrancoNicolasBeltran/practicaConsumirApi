const texto1=document.getElementById("texto");
const contenedor1=document.getElementById("contenedor");
/*fetch("https://pokeapi.co/api/v2/pokemon/ditto")
.then(res=>console.log(res))*/
const api=document.getElementById("btnApi");
const url="https://www.thesportsdb.com/api/v1/json/3/all_leagues.php";
const callAPI=()=>{fetch(url)
.then(res=>res.json())
.then(res=>{
    for(let i=0;i<10;i++){
        const n=Math.floor(Math.random()*res.leagues.length);
        console.log(n);
        const divCrear=document.createElement("div");
        const id=`<h6 class="aa">ID: ${res.leagues[n].idLeague}</h1>`;
        const titulo=` <h1 class="aa">${res.leagues[n].strLeague}</h1>`;
        const texto=`<h1 class="tipo">${res.leagues[n].strSport}</h1> `;
        console.log(res.leagues[n].strSport)
        switch(res.leagues[n].strSport){
            case "Soccer":
                //console.log("Soccer....");
                divCrear.innerHTML=`
                ${id}
                ${titulo}
                <img src="https://th.bing.com/th/id/OIP.N50Asscy8Rb0wkseOKvYRwHaE8?w=296&h=197&c=7&r=0&o=5&pid=1.7">
                ${texto}
                `;
            break;
            case "Volleyball":
                //console.log("Volleyball....");
                divCrear.innerHTML=`
                ${id}
                ${titulo}
                <img src="https://th.bing.com/th/id/OIP.3Ib417rrWCbJGr9UTRoBlwHaE7?w=276&h=184&c=7&r=0&o=5&pid=1.7">
                ${texto}
                `;
            break;
            case "Rugby":
                //console.log("Rugby....");
                divCrear.innerHTML=`
                ${id}
                ${titulo}
                <img src="https://th.bing.com/th/id/OIP.L5q7_HnxF6bOVnITv7cMLQHaDt?w=308&h=174&c=7&r=0&o=5&pid=1.7">
                ${texto}
                `;
            break;
            case "Fighting":
                //console.log("Fighting....");
                divCrear.innerHTML=`
                ${id}
                ${titulo}
                <img src="https://th.bing.com/th/id/OIP.2RpUwBL4R5D6mpgj6aVmIQHaGa?w=203&h=180&c=7&r=0&o=5&pid=1.7">
                ${texto}
                `;
            break;
            case "Basketball":
                //console.log("Basketball....");
                divCrear.innerHTML=`
                ${id}
                ${titulo}
                <img src="https://th.bing.com/th/id/OIP.bkMQxAT1wcyNnhFPz8fGUQHaEo?w=226&h=180&c=7&r=0&o=5&pid=1.7">
                ${texto}
                `;
            break;
            case "Watersports":
                //console.log("Watersports....");
                divCrear.innerHTML=`
                ${id}
                ${titulo}
                <img src="https://th.bing.com/th/id/OIP.l7IeiW1Lxns3kTHO_QcWRwHaEH?w=300&h=180&c=7&r=0&o=5&pid=1.7">
                ${texto}
                `;
            break;
            case "Athletics":
                //console.log("Athletics....");
                divCrear.innerHTML=`
                ${id}
                ${titulo}
                <img src="https://th.bing.com/th/id/OIP.dJd4F6VGpd4-4ZHRJeApAQHaE8?w=249&h=180&c=7&r=0&o=5&pid=1.7">
                ${texto}
                `;
            break;
            case "Lacrosse":
                //console.log("Lacrosse....");
                divCrear.innerHTML=`
                ${id}
                ${titulo}
                <img src="https://th.bing.com/th/id/OIP.ZM1gZs8eUPa3OiXJrAAPRwHaE8?w=258&h=180&c=7&r=0&o=5&pid=1.7">
                ${texto}
                `;
            break;
            case "Golf":
                //console.log("Golf....");
                divCrear.innerHTML=`
                ${id}
                ${titulo}
                <img src="https://th.bing.com/th/id/OIP.l43fx2Skq8GwE5iUCbN5gAHaEr?w=240&h=180&c=7&r=0&o=5&pid=1.7">
                ${texto}
                `;
            break;
            case "Motorsport":
                //console.log("Motorsport....");
                divCrear.innerHTML=`
                ${id}
                ${titulo}
                <img src="https://th.bing.com/th/id/OIP.nLFvEdq6Xx-C1B01k0pgdgHaFZ?w=233&h=180&c=7&r=0&o=5&pid=1.7">
                ${texto}
                `;
            break;
            case "Ice Hockey":
                //console.log("Ice Hockey....");
                divCrear.innerHTML=`
                ${id}
                ${titulo}
                <img src="https://th.bing.com/th/id/OIP._BMLoH4vQbS4YxCa-CkFVgHaFj?w=243&h=182&c=7&r=0&o=5&pid=1.7">
                ${texto}
                `;
            break;
            case "Handball":
                //console.log("Handball....");
                divCrear.innerHTML=`
                ${id}
                ${titulo}
                <img src="https://th.bing.com/th/id/OIP.q_NuAV4hh0vPEQah5XoMlQHaE8?w=255&h=180&c=7&r=0&o=5&pid=1.7">
                ${texto}
                `;
            break;
            case "ESports":
                //console.log("ESports....");
                divCrear.innerHTML=`
                ${id}
                ${titulo}
                <img src="https://th.bing.com/th/id/OIP.LqZXVmR_sXroyyzsTNrfrAHaD4?w=340&h=180&c=7&r=0&o=5&pid=1.7">
                ${texto}
                `;
            break;
            case "Cricket":
                //console.log("Cricket....");
                divCrear.innerHTML=`
                ${id}
                ${titulo}
                <img src="https://th.bing.com/th/id/OIP.Hr1oRwGDd5xOHKMzn92mPAHaGT?w=203&h=180&c=7&r=0&o=5&pid=1.7">
                ${texto}
                `;
            break;
            case "Tennis":
                //console.log("Tennis....");
                divCrear.innerHTML=`
                ${id}
                ${titulo}
                <img src="https://th.bing.com/th/id/OIP.cTTNlQtULuvg6YwphkD9TAHaJ4?w=140&h=188&c=7&r=0&o=5&pid=1.7">
                ${texto}
                `;
            break;
            case "Field Hockey":
                //console.log("Field Hockey....");
                divCrear.innerHTML=`
                ${id}
                ${titulo}
                <img src="https://th.bing.com/th/id/OIP.0A-WKBcLsKAaBWR1UirhZAHaFj?w=256&h=192&c=7&r=0&o=5&pid=1.7">
                ${texto}
                `;
            break;
            case "Weightlifting":
                //console.log("Weightlifting....");
                divCrear.innerHTML=`
                ${id}
                ${titulo}
                <img src="https://th.bing.com/th/id/OIP.pgqyBU2G-2HHa3TafAUNDQHaEK?w=333&h=187&c=7&r=0&o=5&pid=1.7">
                ${texto}
                `;
            break;
            case "Gymnastics":
                //console.log("Gymnastics....");
                divCrear.innerHTML=`
                ${id}
                ${titulo}
                <img src="https://th.bing.com/th/id/OIP.Lt29Aofas0-VcLzDmRiTdgHaE8?w=295&h=197&c=7&r=0&o=5&pid=1.7">
                ${texto}
                `;
            break;
            case "Netball":
                //console.log("Netball....");
                divCrear.innerHTML=`
                ${id}
                ${titulo}
                <img src="https://th.bing.com/th/id/OIP.P6FMQs_wPqmRYtEUjshhBgHaFP?w=261&h=186&c=7&r=0&o=5&pid=1.7">
                ${texto}
                `;
            break;
            case "Baseball":
                //console.log("Baseball....");
                divCrear.innerHTML=`
                ${id}
                ${titulo}
                <img src="https://th.bing.com/th/id/OIP.JarqcHG2hOU8QgH5dYXEGwHaEq?w=284&h=180&c=7&r=0&o=5&pid=1.7">
                ${texto}
                `;
            break;
            case "Shooting":
                //console.log("Shooting....");
                divCrear.innerHTML=`
                ${id}
                ${titulo}
                <img src="https://th.bing.com/th/id/OIP.ijSalCQB-Hi7y-x4z7t-GQHaD7?w=340&h=181&c=7&r=0&o=5&pid=1.7">
                ${texto}
                `;
            break;
            case "Wintersports":
                //console.log("Wintersports....");
                divCrear.innerHTML=`
                ${id}
                ${titulo}
                <img src="https://th.bing.com/th/id/OIP.RImV4Ya8hMbxpPv-bm1PpQHaDT?w=299&h=156&c=7&r=0&o=5&pid=1.7">
                ${texto}
                `;
            break;
            case "Australian Football":
                //console.log("Australian Football....");
                divCrear.innerHTML=`
                ${id}
                ${titulo}
                <img src="https://th.bing.com/th/id/OIP.ZG-zPvLGsovK-bdCyP_NcQHaE4?w=254&h=180&c=7&r=0&o=5&pid=1.7">
                ${texto}
                `;
            break;
            case "Skiing":
                //console.log("Skiing....");
                divCrear.innerHTML=`
                ${id}
                ${titulo}
                <img src="https://th.bing.com/th/id/OIP.vtHKl3ckSMGOXcK8sW-qlAHaE8?w=259&h=180&c=7&r=0&o=5&pid=1.7">
                ${texto}
                `;
            break;
            case "American Football":
                //console.log("American Football....");
                divCrear.innerHTML=`
                ${id}
                ${titulo}
                <img src="https://th.bing.com/th/id/OIP.3yNEgVtev78sBCnXBqc9kQHaD_?w=335&h=180&c=7&r=0&o=5&pid=1.7">
                ${texto}
                `;
            break;
            case "Cycling":
                //console.log("Cycling....");
                divCrear.innerHTML=`
                ${id}
                ${titulo}
                <img src="https://th.bing.com/th/id/OIP.DHcWFwkmel8aEhb4OZEFGwHaE7?w=234&h=180&c=7&r=0&o=5&pid=1.7">
                ${texto}
                `;
            break;
            case "Table Tennis":
                //console.log("Table Tennis....");
                divCrear.innerHTML=`
                ${id}
                ${titulo}
                <img src="https://th.bing.com/th/id/OIP.EMkvfEXEPQXgIvau1ICL7AHaEK?w=272&h=180&c=7&r=0&o=5&pid=1.7">
                ${texto}
                `;
            break;
            case "Badminton":
                //console.log("Badminton....");
                divCrear.innerHTML=`
                ${id}
                ${titulo}
                <img src="https://th.bing.com/th/id/OIP.RGmDSOcFugcONijPzzQ-KQHaFW?w=238&h=180&c=7&r=0&o=5&pid=1.7">
                ${texto}
                `;
            break;
            case "Multi-Sports":
                //console.log("Multi-Sports....");
                divCrear.innerHTML=`
                ${id}
                ${titulo}
                <img src="https://th.bing.com/th/id/OIP.N7FhVPh9CtP1cPXf58U69QHaEE?w=268&h=180&c=7&r=0&o=5&pid=1.7">
                ${texto}
                `;
            break;
            case "Climbing":
                //console.log("Climbing....");
                divCrear.innerHTML=`
                ${id}
                ${titulo}
                <img src="https://th.bing.com/th/id/OIP.y1RKQlWJnCeVc8mLVeHOTgHaJ4?w=126&h=180&c=7&r=0&o=5&pid=1.7">
                ${texto}
                `;
            break;
            case "Snooker":
                //console.log("Snooker....");
                divCrear.innerHTML=`
                ${id}
                ${titulo}
                <img src="https://th.bing.com/th/id/OIP.KWvpOvxbkhXoAYIoflxBmAHaEK?w=287&h=180&c=7&r=0&o=5&pid=1.7">
                ${texto}
                `;
            break;
            case "Olympics":
                //console.log("Olympics....");
                divCrear.innerHTML=`
                ${id}
                ${titulo}
                <img src="https://th.bing.com/th/id/OIP.rxXUPie4JROaA4mgZd9I_wHaEF?w=326&h=180&c=7&r=0&o=5&pid=1.7">
                ${texto}
                `;
            break;
            case "Equestrian":
                //console.log("Equestrian....");
                divCrear.innerHTML=`
                ${id}
                ${titulo}
                <img src="https://th.bing.com/th/id/OIF.8Ghj2l2kSyXPW6HzeozFow?w=300&h=199&c=7&r=0&o=5&pid=1.7">
                ${texto}
                `;
            break;
            case "Darts":
                //console.log("Darts....");
                divCrear.innerHTML=`
                ${id}
                ${titulo}
                <img src="https://th.bing.com/th/id/OIP.K6VUlkwUKGQc770Vz_ZdRwAAAA?w=271&h=180&c=7&r=0&o=5&pid=1.7">
                ${texto}
                `;
            break;
            default:
            divCrear.innerHTML=`
            ${id}
            ${titulo}
            <img src="">
            ${texto}
            `;
            break;

        }
        contenedor1.appendChild(divCrear);
    }
    texto1.innerHTML= "Consumi mi primera API !!!";
    console.log(res);
})
}
api.addEventListener("click",callAPI);