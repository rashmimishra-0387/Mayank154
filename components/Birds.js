/*
AFRAME.registerComponent("birds", {
  inti: function () {
    for (var i = 1; i <= 20; i++) {
      var id = `bird${i}`;
      var x = Math.random() * 3000 + -1000;
      var y = Math.random() * 2 + -1;
      var z = Math.random() * 3000 + -1000;

      var position = { x: x, y: y, z: z };

      this.createBird(id, position);
    }
  },

  createBird: function (id, position) {
    var terrain = document.querySelector("#terrain");
    var bird = document.createElement("a-entity");

    bird.setAttribute("id", id);
    bird.setAttribute("position", position);
    bird.setAttribute("scale", { x: 500, y: 500, z: 500 });
    bird.setAttribute("gltf-model", "./assets/models/flying_bird/scene.gltf");
    bird.setAttribute("animation-mixer", {});
    terrain.appendChild(bird);
  },
});
*/
// Registering component in Collider.js
AFRAME.registerComponent("birds", {
  init: function () {
    for (var i = 1; i <= 20; i++) {
      //id
      var id = `hurdle${i}`;

      //position variables
      var posX = Math.random() * 3000 + (-1000);      
      var posY = Math.random() * 2 + (-1);
      var posZ = Math.random() * 3000 + (-1000);

      var position = { x: posX, y: posY, z: posZ }

      //call the function
      this.Birds(id, position);

    }
  },
  Birds:(id,position) => {
    
    //Get the terrain element
    var terrainEl = document.querySelector("#terrain");

    //creating the bird model entity
    var birdEl = document.createElement("a-entity");

    //Setting multiple attributes
    birdEl.setAttribute("id", id);
    
    birdEl.setAttribute("position",position);
    birdEl.setAttribute("scale",{ x: 500,y: 500,z: 500 });

    birdEl.setAttribute(
      "gltf-model",
      "./assets/models/flying_bird/scene.gltf"
    );
    
    //animated models
    birdEl.setAttribute("animation-mixer",{});
    

    //append the bird entity as the child of the terrain entity
    terrainEl.appendChild(birdEl);

  }
  
});