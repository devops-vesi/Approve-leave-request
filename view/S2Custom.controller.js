jQuery.sap.require("hcm.approve.leaverequest.util.Conversions");
jQuery.sap.require("sap.ca.scfld.md.controller.ScfldMasterController");
jQuery.sap.require("sap.ca.ui.message.message");
sap.ui.controller("hcm.approve.leaverequest.YHCM_LRQ_APV.view.S2Custom", {
	//    extHookChangeFooterButtons: null,
	//    onInit: function () {
	//        "use strict";
	//        this.resourceBundle = this.oApplicationFacade.getResourceBundle();
	//        this.oDataModel = this.oApplicationFacade.getODataModel();
	//        this._getData();
	//        this.registerMasterListBind(this.getList());
	//        this.aRequestFilterList = [];
	//        var c = sap.ui.core.Component.getOwnerIdFor(this.getView());
	//        var C = sap.ui.component(c);
	//        C.oEventBus.subscribe("hcm.approve.leaverequest", "leaveRequestApproveReject", this._handleApproveRejectCallBack, this);
	//        this.oRouter.attachRoutePatternMatched(function (e) {
	//            if (e.getParameter("name") === "detail") {
	//                var b = this.getBindingContextPathFor(e.getParameter("arguments"));
	//                var I = this.findItemByContextPath(b);
	//                var l = this.getList();
	//                var L = l.getItems().filter(function (d, f, g) {
	//                    return d.getVisible();
	//                });
	//                if (L.length >= 2) {
	//                    for (var i = 0; i < L.length; i++) {
	//                        if (I.getBindingContext(this.sModelName).getPath() === L[i].getBindingContext(this.sModelName).getPath()) {
	//                            var a = i;
	//                            break;
	//                        }
	//                    }
	//                    if (a + 1 < L.length) {
	//                        this.oApplicationFacade._sNextDetailPath = L[a + 1].getBindingContext(this.sModelName).getPath();
	//                    } else {
	//                        this.oApplicationFacade._sNextDetailPath = L[a - 1].getBindingContext(this.sModelName).getPath();
	//                    }
	//                } else {
	//                    this.oApplicationFacade._sNextDetailPath = null;
	//                }
	//            }
	//        }, this);
	//    },
	//    applySearchPattern: function (f) {
	//        this.iCount = 0;
	//        sap.ca.scfld.md.controller.ScfldMasterController.prototype.applySearchPattern.call(this, f);
	//        return this.iCount;
	//    },
	//    applySearchPatternToListItem: function (i, f) {
	//        var d = this.oDataModel.getProperty(i.getBindingContext().sPath);
	//        if (this.aRequestFilterList.indexOf(d.RequestId) !== -1) {
	//            return false;
	//        }
	//        var v = sap.ca.scfld.md.controller.ScfldMasterController.prototype.applySearchPatternToListItem.call(this, i, f);
	//        if (v) {
	//            this.iCount++;
	//        }
	//        return v;
	//    },
	//    findItemByContextPath: function (c) {
	//        if (c) {
	//            var r = c.match(/RequestId='(\w+)'/);
	//            if (r.length >= 1) {
	//                var a = r[1];
	//                if (this.aRequestFilterList.indexOf(a) !== -1) {
	//                    return null;
	//                }
	//            }
	//        }
	//        return sap.ca.scfld.md.controller.ScfldMasterController.prototype.findItemByContextPath.call(this, c);
	//    },
	//    onDataLoaded: function () {
	//        this.aRequestFilterList = [];
	//        var l = this.getList().getItems();
	//        for (var i = 0; i < l.length; i++) {
	//            l[i].setVisible(true);
	//        }
	//        if (this.getList().getItems().length < 1) {
	//            if (!sap.ui.Device.system.phone) {
	//                this.showEmptyView("DETAIL_TITLE", "NO_ITEMS_AVAILABLE");
	//            }
	//        }
	//    },
	//    _handleApproveRejectCallBack: function (c, e, d) {
	//        "use strict";
	//        var i = this.findItemByContextPath(this.oApplicationFacade._sNextDetailPath);
	//        var l = this.getList().getItems().filter(function (a, b, f) {
	//            return a.getVisible();
	//        });
	//        if (i !== null && l.length > 1) {
	//            this.setListItem(i);
	//        } else {
	//            if (l.length > 1) {
	//                this.selectFirstItem();
	//            } else {
	//                this.showEmptyView("DETAIL_TITLE", "NO_ITEMS_AVAILABLE");
	//            }
	//        }
	//        this.aRequestFilterList.push(d.RequestId);
	//        this._applyClientSideSearch();
	//    },
	//    _getData: function () {
	//        "use strict";
	//        var l = this.getList(), t = l.getItems()[0].clone(), p = {}, a = this;
	//        l.bindItems("/LeaveRequestSet", t);
	//    },
	//    getHeaderFooterOptions: function () {
	//        "use strict";
	//        var o = { sI18NMasterTitle: "view.Master.title" };
	//        var m = new sap.ui.core.routing.HashChanger();
	//        var u = m.getHash();
	//        if (u.indexOf("Shell-runStandaloneApp") >= 0) {
	//            o.bSuppressBookmarkButton = true;
	//        }
	//        if (this.extHookChangeFooterButtons) {
	//            o = this.extHookChangeFooterButtons(o);
	//        }
	//        return o;
	//    },
	//    _handleListSwipe: function () {
	//        "use strict";
	//        var t = this;
	//        var l = this.getList(), s = l.getSwipedItem(), c = s.getBindingContext(), o = c.getProperty("SAP__Origin"), r = c.getProperty("RequestId"), v = c.getProperty("Version"), d = "PREPARE_APPROVE", T = "dialog.success.approve", p = {};
	//        l.swipeOut();
	//        var P = "ApplyLeaveRequestDecision?RequestId='" + r + "'&Version=" + v + "&Comment=''" + "&Decision='" + d + "'";
	//        p.context = null;
	//        p.success = function () {
	//            sap.ca.ui.message.showMessageToast(t.resourceBundle.getText(T));
	//            t.oDataModel.refresh(true);
	//        };
	//        p.error = jQuery.proxy(this._onRequestFailed, this);
	//        this.oDataModel.read(P, p);
	//    },
	//    _onRequestFailed: function (e) {
	//        "use strict";
	//        sap.ca.ui.message.showMessageBox({
	//            type: sap.ca.ui.message.Type.ERROR,
	//            message: e.message,
	//            details: e.response.body
	//        });
	//    },
	//+FJO
		formatterAbsenceDuration: function(AbsenceDays, AbsenceHours, AllDayFlag) {
			var oAbsenceDays, oAbsenceHours, oDuration;
			if (AbsenceDays === null || AbsenceHours === null || AllDayFlag === null) {
				return "";
			}
			oAbsenceDays = AbsenceDays;
			oAbsenceHours = AbsenceHours;
			if (AllDayFlag) {
				oDuration = oAbsenceDays;
				// oDuration = hcm.approve.leaverequest.util.NumberFormatter.formatNumberStripZerosDays(oAbsenceDays);
				oDuration = hcm.approve.leaverequest.util.NumberFormatter.formatNumberStripZeros(oAbsenceDays);
			} else {
				oDuration = hcm.approve.leaverequest.util.NumberFormatter.formatNumberStripZeros(oAbsenceHours);
			}
			return oDuration;
		}
		
});