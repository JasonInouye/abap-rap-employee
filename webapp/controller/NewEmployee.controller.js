sap.ui.define([
	"./BaseController",
	"sap/ui/core/routing/History"
], function (BaseController, History) {
	"use strict";
	return BaseController.extend("EmployeeSkillApp.employeeskill.controller.NewEmployee", {
		onNavBack : function() {
            var sPreviousHash = History.getInstance().getPreviousHash();
            if (sPreviousHash !== undefined) {
                // eslint-disable-next-line sap-no-history-manipulation
                history.go(-1);
            } else {
                this.getRouter().navTo("worklist", {}, true);
            }
        },
        onSave: function (oEvent) {
            console.log("Clicked Saved")
            var oList = this.byId("inputs")
            console.log("clicked save", oList)
            var oBinding = oList.getBinding('items')
            var oContext = oBinding.create({
                "FirstName": this.byId("FirstName").getProperty("value"),
                "LastName": this.byId("LastName").getProperty("value")
            })
        }
	});
});