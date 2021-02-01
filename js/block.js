class Block {

    constructor (x, y, z, color, scene) {
        this.x = x
        this.y = y
        this.z = z
        this.color = color
        this.scene = scene
    }

    display(showEdges) {
        var faces = [
            { // left
                dir: [ -5,  0,  0, "left"],
            },
            { // right
                dir: [  5,  0,  0, "right"],
            },
            { // bottom
                dir: [  0, -5,  0, "bottom"],
            },
            { // top
                dir: [  0,  5,  0, "top"],
            },
            { // back
                dir: [  0,  0, -5, "back"],
            },
            { // front
                dir: [  0,  0,  5, "front"],
            },
        ];

        var loader = new THREE.TextureLoader();
		var materialArray = [
			new THREE.MeshBasicMaterial({map : loader.load("../texture/side.jpg")}),
			new THREE.MeshBasicMaterial({map : loader.load("../texture/side.jpg")}),
			new THREE.MeshBasicMaterial({map : loader.load("../texture/top.jpg")}),
			new THREE.MeshBasicMaterial({map : loader.load("../texture/bottom.jpg")}),
			new THREE.MeshBasicMaterial({map : loader.load("../texture/side.jpg")}),
			new THREE.MeshBasicMaterial({map : loader.load("../texture/side.jpg")}),
		];        

        // Box
        this.shape = new THREE.BoxGeometry(5, 5, 5)
        //this.mesh = new THREE.MeshBasicMaterial({ color: this.color })
        this.cube = new THREE.Mesh(this.shape, materialArray)
        this.scene.add(this.cube)

        this.cube.position.x = this.x
        this.cube.position.y = this.y
        this.cube.position.z = this.z

        if (showEdges) {
            // Wireframe
            this.edges = new THREE.EdgesGeometry(this.shape)
            this.lmesh = new THREE.LineBasicMaterial({ color: 0x000000 })
            this.lines = new THREE.LineSegments(this.edges, this.lmesh)

            this.scene.add(this.lines)

            this.lines.position.x = this.x
            this.lines.position.y = this.y
            this.lines.position.z = this.z
        }

    }

}