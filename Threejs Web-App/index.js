function init() {


    // setup scene 
     
    let colorr = 0xf2f2f2;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(colorr);
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 5000);


    let width = window.innerWidth;
    let height = window.innerHeight;

   
    // Camera Positions
    camera.rotation.y = 45 / 180 * Math.PI;
    camera.rotation.y = 45;
    camera.position.x = 800;
    camera.position.y = 100;
    camera.position.z = 4000;



    hlight = new THREE.AmbientLight(0x404040, 100);
    scene.add(hlight)


    //    directional light with Cast Shadow

    directionalLight = new THREE.DirectionalLight(0xFF3A20, 200);
    directionalLight.position.set(0, 1, 0);
    directionalLight.castShadow = true;
    scene.add(directionalLight);


   

    light3 = new THREE.PointLight(0xc4c4c4, 10);
    light3.position.set(0, 100, -500);
    scene.add(light3);

    light4 = new THREE.PointLight(0xc4c4c4, 10);
    light4.position.set(-500, 300, 0);
    scene.add(light4);

   

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
     // orbit controls
   
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    camera.rotation.y = 45 / 180 * Math.PI;

    camera.position.set(800, 200, 1000);
    controls.update();



    let loader = new THREE.GLTFLoader();
    loader.load('scene.gltf', function (gltf) {
        car = gltf.scene.children[0];
        car.scale.set(0.5, 0.5, 0.5);

        scene.add(gltf.scene);
        animate();
    });



// Animate

function animate() {

        renderer.render(scene, camera);
        
        car.rotation.z += 0.01;
        requestAnimationFrame(animate);
    }

}


init();
