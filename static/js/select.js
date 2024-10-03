var currentSceneList = ["bicycle", "garden","stump", "lego", "hotdog", "armadillo", "ficus"];
var currentScene = "bicycle";



function ChangeScene(idx){
    var li_list = document.getElementById("scene").children;
    console.log(idx);
    console.log(li_list);
    for(i = 0; i < li_list.length; i++){
        if (li_list[i].className === "disabled"){
            continue
        }
        li_list[i].className = "";
    }
    li_list[idx].className = "active";
    currentScene = currentSceneList[idx]
    document.getElementById("render").src = "static/videos/" + currentScene +'/'+ "render" +'/'+'.mp4';
    document.getElementById("occlusion").src = "static/videos/" + currentScene +'/'+ "occlusion" +'/'+'.mp4';
    document.getElementById("indirect").src = "static/videos/" + currentScene +'/'+ "indirect" +'/'+'.mp4';
    document.getElementById("normal").src = "static/videos/" + currentScene +'/'+ "normal" +'/'+'.mp4';
    document.getElementById("albedo").src = "static/videos/" + currentScene +'/'+ "albedo" +'/'+'.mp4';
    document.getElementById("roughness").src = "static/videos/" + currentScene +'/'+ "roughness" +'/'+'.mp4';
}
