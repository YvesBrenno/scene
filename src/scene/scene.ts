import {
  Scene,
  AxesHelper,
  AmbientLight,
  DirectionalLight,
  Mesh,
  SphereGeometry,
  MeshToonMaterial,
  PlaneGeometry,
  Color,
  BoxGeometry,
  AddEquation,
  CircleGeometry,
  ConeGeometry,
  CylinderGeometry,
  TorusGeometry,
} from "three"
import { renderer, updateRenderer } from "/src/core/renderer"

import { gui } from "/src/core/gui"

export const scene = new Scene()

// Axes Helper
const axesHelper = new AxesHelper(0.5)
scene.add(axesHelper)

gui.addInput(axesHelper, "visible", {
  label: "AxesHelper",
})

const ambientLight = new AmbientLight(0xffffff, 0.5)
scene.add(ambientLight)

const directionalLight = new DirectionalLight("#ffffff", 2)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.far = 500
directionalLight.shadow.normalBias = 0.5
directionalLight.position.set(0.25, 2, 2.25)

scene.add(directionalLight)

const PARAMS = {
  color: "#5EDCAE",
}

//Código referente ao Sol

const sol = new Mesh(
  new SphereGeometry(1, 32, 32),
  new MeshToonMaterial({
    color: "#e9ff00",
    wireframe: false,
  })
)

sol.position.set(-4, 5, 10)
sol.castShadow = false

sol.rotation.set(-Math.PI / -1, 0, 0)

//Código referente à areia (chão)


const plane = new Mesh(
  new PlaneGeometry(10, 10, 10, 10),
  new MeshToonMaterial({
    color: "#dcb85e",
  })
)

const planeCtrls = gui.addFolder({
  title: "Plane",
})

plane.receiveShadow = true
plane.rotation.set(-Math.PI / 2, 0, 0)
scene.add(plane)

//Código referente ao guarda sol


const guarda_sol = new Mesh(
  new ConeGeometry(1.5, 1, 7),
  new MeshToonMaterial({
    color: "#ff4040",
  })
)
guarda_sol.position.set(-4, 2.3, -4.3)
guarda_sol.rotation.set(-Math.PI / 100, 0, 0)

const base_guarda_sol = new Mesh(
  new CylinderGeometry(0.05, 0.05, 2.3),
  new MeshToonMaterial({
    color: "#efefef",
  })
)
base_guarda_sol.position.set(-4, 1.1, -4.3)
base_guarda_sol.rotation.set(-Math.PI / 100, 0, 0)


//Código referente à boia

const boia = new Mesh(
  new TorusGeometry(0.6, 0.3, 4, 200),
  new MeshToonMaterial({
    color: "#f846c5",
  })
)
boia.position.set(3.3, 0.6, 3.9)
boia.rotation.set(-Math.PI / 2, 0, 0)

//Código referente ao banhista (alien)

const corpo_alien = new Mesh(
  new CylinderGeometry(0.1, 0.2, 1.7, 10),
  new MeshToonMaterial({
    color: "#7effcf",
  })
)
corpo_alien.position.set(3.3, 0.8, 3.9)
corpo_alien.rotation.set(-Math.PI / 100, 0, 0)

const cabeça_alien = new Mesh(
  new SphereGeometry(0.45, 50, 100, 10),
  new MeshToonMaterial({
    color: "#7effcf",
  })
)
cabeça_alien.scale.set(1, 1 , 1.3)
cabeça_alien.position.set(3.3, 1.8, 3.9)
cabeça_alien.rotation.set(-Math.PI / 2, 0, 0)

const braço_esquerdo = new Mesh(
  new CylinderGeometry(0.08, 0.02, 0.8, 10),
  new MeshToonMaterial({
    color: "#7effcf",
  })
)
braço_esquerdo.position.set(3, 1.1, 3.8)
braço_esquerdo.rotation.set(-Math.PI / -2, 0.5, 5)

const braço_direito = new Mesh(
  new CylinderGeometry(0.08, 0.02, 0.8, 10),
  new MeshToonMaterial({
    color: "#7effcf",
  })
)
braço_direito.position.set(3.6, 1.05, 3.8)
braço_direito.rotation.set(-Math.PI / 4, 0.5, -5)

const olho_esquerdo = new Mesh(
  new SphereGeometry(0.13, 50, 100, 10),
  new MeshToonMaterial({
    color: "#000000",
  })
)

olho_esquerdo.position.set(3, 1.86, 3.6)
olho_esquerdo.scale.set(1, 1 , 2)
olho_esquerdo.rotation.set(-Math.PI / 3, -0.3, 2)

const olho_direito = new Mesh(
  new SphereGeometry(0.13, 50, 100, 10),
  new MeshToonMaterial({
    color: "#000000",
  })
)

olho_direito.position.set(3.5, 1.86, 3.5)
olho_direito.scale.set(1, 1 , 2)
olho_direito.rotation.set(-Math.PI / 3, 0.3, 2)


//Codigo referente à cadeira de praia


const pe1 = new Mesh(
  new CylinderGeometry(0.05, 0.05, 0.35),
  new MeshToonMaterial({
    color: "#efefef",
  })
)
pe1.position.set(-1, 0.2, -4.5)
pe1.rotation.set(-Math.PI / 100, 0, 0)

const pe2 = new Mesh(
  new CylinderGeometry(0.05, 0.05, 0.35),
  new MeshToonMaterial({
    color: "#efefef",
  })
)
pe2.position.set(-1, 0.2, -3.3)
pe2.rotation.set(-Math.PI / 100, 0, 0)

const pe3 = new Mesh(
  new CylinderGeometry(0.05, 0.05, 0.35),
  new MeshToonMaterial({
    color: "#efefef",
  })
)
pe3.position.set(1, 0.2, -3.3)
pe3.rotation.set(-Math.PI / 100, 0, 0)

const pe4 = new Mesh(
  new CylinderGeometry(0.05, 0.05, 0.35),
  new MeshToonMaterial({
    color: "#efefef",
  })
)
pe4.position.set(1, 0.2, -4.5)
pe4.rotation.set(-Math.PI / 100, 0, 0)

const acento1 = new Mesh(
  new BoxGeometry(2.3, 0.06, 1.5),
  new MeshToonMaterial({
    color: "#f964ff",
    wireframe: false,
  })
)
acento1.position.set(-0.1, 0.39, -4)
acento1.rotation.set(-Math.PI / 100, 0, 0)

const acento2 = new Mesh(
  new BoxGeometry(1.3, 0.06, 1.5),
  new MeshToonMaterial({
    color: "#f964ff",
    wireframe: false,
  })
)
acento2.position.set(1.5, 0.6, -4)
acento2.rotation.set(-Math.PI / 100, 0, -53)


//Código referente ao mar


const mar = new Mesh(
  new BoxGeometry(10, 0.7, 2),
  new MeshToonMaterial({
    color: "#5246e8",
    wireframe: false,
  })
)
mar.castShadow = true
mar.position.set(0, 0.3, 4)
mar.rotation.set(-Math.PI / 90, 0, 0)

const mar_raso = new Mesh(
  new BoxGeometry(10, 0.5, 2),
  new MeshToonMaterial({
    color: "#5246e8",
    wireframe: false,
  })
)
mar_raso.position.set(0, 0.1, 2.5)

const mar_muitoraso = new Mesh(
  new BoxGeometry(10, 0.5, 2),
  new MeshToonMaterial({
    color: "#5246e8",
    wireframe: false,
  })
)
mar_muitoraso.position.set(0, 0, 1)

//Adição dos objetos na cena

scene.add(sol)
scene.add(mar)
scene.add(mar_raso)
scene.add(mar_muitoraso)
scene.add(guarda_sol)
scene.add(base_guarda_sol)
scene.add(boia)
scene.add(corpo_alien)
scene.add(cabeça_alien)
scene.add(braço_esquerdo)
scene.add(braço_direito)
scene.add(olho_esquerdo)
scene.add(olho_direito)
scene.add(pe1)
scene.add(pe2)
scene.add(pe3)
scene.add(pe4)
scene.add(acento1)
scene.add(acento2)



export function updateScene() {
  updateRenderer()
}
