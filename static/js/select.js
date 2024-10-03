var currentSceneList = ["bicycle", "garden", "stump"];
var currentScene = "bicycle";

var currentSceneList = ["lego", "hotdog", "armadillo", "ficus"];
var currentObject = "lego";



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
    const video = document.getElementById('all_video');
    const source = video.querySelector('source');
    source.src = "static/videos/" + currentScene +'.mp4';
    video.load();
    video.play();
}

function ChangeObject(idx){
    var li_list = document.getElementById("object").children;
    console.log(idx);
    console.log(li_list);
    for(i = 0; i < li_list.length; i++){
        if (li_list[i].className === "disabled"){
            continue
        }
        li_list[i].className = "";
    }
    li_list[idx].className = "active";
    currentObject = currentObjectList[idx]
    const video = document.getElementById('all_video');
    const source = video.querySelector('source');
    source.src = "static/videos/" + currentObject +'.mp4';
    video.load();
    video.play();
}
