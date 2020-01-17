jQuery.sap.declare("hcm.approve.leaverequest.YHCM_LRQ_APV.Component");
// use the load function for getting the optimized preload file if present
sap.ui.component.load({
	name: "hcm.approve.leaverequest",
	// Use the below URL to run the extended application when SAP-delivered application is deployed on SAPUI5 ABAP Repository
	url: "/sap/bc/ui5_ui5/sap/HCM_LRQ_APV" // we use a URL relative to our own component
		// extension application is deployed with customer namespace
});
this.hcm.approve.leaverequest.Component.extend("hcm.approve.leaverequest.YHCM_LRQ_APV.Component", {
	metadata: {
		version: "1.0",
		config: {
			   "resourceBundle" : "i18n/i18n_custom.properties",
    			"titleResource" : "appTitle"
		},
		customizing: {
			"sap.ui.viewReplacements": {
				"hcm.approve.leaverequest.view.S2": {
					"viewName": "hcm.approve.leaverequest.YHCM_LRQ_APV.view.S2Custom",
					"type": "XML"
				},
				"hcm.approve.leaverequest.view.S3": {
					"viewName": "hcm.approve.leaverequest.YHCM_LRQ_APV.view.S3Custom",
					"type": "XML"
				}
			},
			"sap.ui.controllerExtensions": {
				"hcm.approve.leaverequest.view.S3": {
					"controllerName": "hcm.approve.leaverequest.YHCM_LRQ_APV.view.S3Custom"
				},
				"hcm.approve.leaverequest.view.S2": {
					"controllerName": "hcm.approve.leaverequest.YHCM_LRQ_APV.view.S2Custom"
				}
			}
		}
	}
});