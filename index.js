function Leer() {
    const clima = document.getElementById("input").value;
 
    const key='ebd9e415ba968c2dd0b9c7059bb1dd32';
    const api_url=`http://api.openweathermap.org/data/2.5/weather?q=${clima}&apikey=${key}&units=metric`
    buscar2(api_url);
}

function buscar1(api_url){

    fetch(api_url)
      .then(data => {
        return data.json()
      }).then(resultado=>{
            console.log(resultado);

            const {Search=[]} = resultado;
            
            console.log(Search);
            document.getElementById("lista").innerHTML='';

           /* Search.map((p)=>{
                document.getElementById("lista").innerHTML+=`<div style="margin-top:10px;">
                         <img width='100%' src=${p.Poster} alt="No hay poster"></img>
            </div>`;
            })*/
      });


}

const buscar2=async(api_url)=>{

    const data= await fetch(api_url);
    const respuesta= await data.json();
    //const Search = await respuesta.Search;

    console.log(respuesta);
    document.getElementById("lista").innerHTML=`<div class="card" style="width: 18rem;">
    <img src="https://pbs.twimg.com/profile_images/1390856664237158408/0iaf87nk_400x400.jpg" class="card-img-top" alt="...">
    <div class="card-body">
    <h3> Temperatura de: ${respuesta.main.temp}</h3>
    </div>
  </div>`;
 /*   if(Search!=null)
    {   
 
       Search.map((p)=>{
                document.getElementById("lista").innerHTML+=`<div style="margin-top:10px;">
                    <img width='100%' src=${p.Poster} alt="No hay poster"></img></div>`;
        })
    }*/

}    

     
const buscar3=async(api_url)=>{

    const respuesta= await axios(api_url);
    const Search = await respuesta.data.Search;
    console.log(respuesta.data);
    
    console.log(Search);
    document.getElementById("lista").innerHTML=`<div class="card" style="width: 18rem;">
    <img src="https://pbs.twimg.com/profile_images/1390856664237158408/0iaf87nk_400x400.jpg" class="card-img-top" alt="...">
    <div class="card-body">
    <h3> tem: ${respuesta.main.temp}</h3>
    </div>
  </div>`;
    
   /* if(Search!=null)
    {
  
        
        Search.map((p)=>{
                document.getElementById("lista").innerHTML+=`<div style="margin-top:10px;">
                    <img width='100%' src=${p.Poster} alt="No hay poster"></img></div>`;
        })
    }*/

}    