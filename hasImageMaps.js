function hasImageMaps(){
    let anchors = document.querySelectorAll("a").length;
    let links = document.links.length;
    return (links - anchors) !== 0;
  }