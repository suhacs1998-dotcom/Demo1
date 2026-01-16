sap.ui.define([
	"sap/dm/dme/podfoundation/component/production/ProductionUIComponent",
	"sap/ui/Device"
], function (ProductionUIComponent, Device) {
	"use strict";

	return ProductionUIComponent.extend("custom.shoubii.plugins.testplugin.testplugin.Component", {
		metadata: {
			manifest: "json"
		}
	});
});