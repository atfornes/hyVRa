// HyVRa: VR hydra extension

let v = window.document.getElementById("hyVRa");
if (!v) {
  let hyvra = {
  	VRdistance: 0.641,
  	adjustingVR: true,
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


	vr = document.createElement("i");
	vr.id = "hyvra-icon";
	vr.id = "vr-icon";
	vr.title = "VR adjust";
	vr.className = "fas icon fa-glasses";
	vr.ariaHidden = true;
	vrWrapper.appendChild(vr);
	document.body.appendChild(vrWrapper);
}


	vrWrapper = document.createElement("div");
	vrWrapper.id = "hyVRa";
	vrWrapper.addEventListener("click", function(element) {
		hyvra.adjustingVR = !hyvra.adjustingVR;
	});


	vr = document.createElement("i");
	vr.id = "hyvra-icon";
	vr.id = "vr-icon";
	vr.title = "VR adjust";
	vr.className = "fas icon fa-glasses";
	vr.ariaHidden = true;
	vrWrapper.appendChild(vr);
	document.body.appendChild(vrWrapper);
	console.log(vrWrapper);