// HyVRa: VR hydra extension

let v = window.document.getElementById("hyVRa");
if (!v) {
  let hyvra = {
  	VRdistance: 0.641,
    adjustingVR: false,
  	alpha: 0,
  	beta: 0,
  	gamma: 0
  };
	if (window.DeviceOrientationEvent) {
		window.addEventListener('deviceorientation', function(event) {
			hyvra.alpha = event.alpha;
			hyvra.beta = event.beta;
			hyvra.gamma = event.gamma;
			if (hyvra.adjustingVR) {
				hyvra.VRdistance += event.beta * 0.02;
			}
		});
	}

	vrWrapper = document.createElement("div");
	vrWrapper.id = "hyVRa";
	vrWrapper.addEventListener("click", function(element) {
		hyvra.adjustingVR = !hyvra.adjustingVR;
	});

  document.bodut.addEventListener("touchstart",()=>{
    hyvra.adjustingVR: true,
  })
  document.bodut.addEventListener("touchend",()=>{
    hyvra.adjustingVR: false,
  })

	vr = document.createElement("i");
	vr.id = "hyvra-icon";
	vr.id = "vr-icon";
	vr.title = "VR adjust";
	vr.className = "fas icon fa-glasses";
	vr.ariaHidden = true;
	vrWrapper.appendChild(vr);
	document.body.appendChild(vrWrapper);
}
