jQuery.sap.require("sap.ca.scfld.md.controller.BaseDetailController");
jQuery.sap.require("sap.ca.ui.dialog.factory");
jQuery.sap.require("hcm.approve.leaverequest.util.Conversions");
jQuery.sap.require("hcm.approve.leaverequest.util.CalendarServices");
jQuery.sap.require("sap.ca.ui.message.message");
sap.ui.controller("hcm.approve.leaverequest.YHCM_LRQ_APV.view.S3Custom", {
	//    extHookChangeFooterButtons: null,
	//    onInit: function () {
	//        "use strict";
	//        this.resourceBundle = this.oApplicationFacade.getResourceBundle();
	//        this.oDataModel = this.oApplicationFacade.getODataModel();
	//        this.oView = this.getView();
	//        this.mailSubject = "";
	//        this.msg = "";
	//        this.dateFilter = "";
	//        this.RequesterName = "";
	//        this.oNextItemContext = null;
	//        this.sApprovingOperation = null;
	//        this.oApprovingRequest = null;
	//        this.oRouter.attachRouteMatched(function (e) {
	//            if (e.getParameter("name") === "detail") {
	//                this.oNextItemContext = new sap.ui.model.Context(this.oView.getModel(), "/" + e.getParameter("arguments").contextPath);
	//                var d = e.getParameter("arguments").contextPath;
	//                var a = this.oDataModel.getProperty("/" + d);
	//                this.oBusyDialog = new sap.m.BusyDialog();
	//                if (a === undefined) {
	//                    this.oBusyDialog.open();
	//                    this.oDataModel.read("/LeaveRequestSet", null, null, true, jQuery.proxy(this._handleSuccess, this), jQuery.proxy(this._handleFailure, this));
	//                } else {
	//                    this.initializeData(a);
	//                }
	//                if (this.oView.byId("LRAtc").getSelectedKey() !== "contentInfo") {
	//                    this.oView.byId("LRAtc").setSelectedKey("contentInfo");
	//                }
	//            }
	//        }, this);
	//        this.oBusyDialog = new sap.m.BusyDialog();
	//        this.jsonModel = new sap.ui.model.json.JSONModel();
	//        this.getView().setModel(this.jsonModel, "NewModel");
	//    },
	//    _handleSuccess: function (a) {
	//        var o = new sap.ui.core.routing.HashChanger(), i;
	//        var u = o.getHash();
	//        var c = u.split("'")[1];
	//        for (i = 0; i < a.results.length; i++) {
	//            if (a.results[i].RequestId === c) {
	//                var d = a.results[i];
	//                break;
	//            }
	//        }
	//        this.oBusyDialog.close();
	//        this.initializeData(d);
	//    },
	//    _handleFailure: function (e) {
	//        "use strict";
	//        this.oBusyDialog.close();
	//        sap.ca.ui.message.showMessageBox({
	//            type: sap.ca.ui.message.Type.ERROR,
	//            message: e.message,
	//            details: e.response.body
	//        });
	//    },
	//    initializeData: function (d) {
	//        if (d && d.Note) {
	//            var D = hcm.approve.leaverequest.util.Conversions._parseNotes(d.Note);
	//            if (D.NotesCollection) {
	//                var n = new sap.ui.model.json.JSONModel(D);
	//                this.byId("NotesList").setModel(n, "notes");
	//            }
	//        }
	//        if (d && d.Fileattachments) {
	//            var o = hcm.approve.leaverequest.util.Conversions._parseAttachments(d.Fileattachments, d.RequestId, this.oDataModel);
	//            if (o.AttachmentsCollection) {
	//                var a = new sap.ui.model.json.JSONModel(o);
	//                this.byId("S3_FILE_LIST").setModel(a, "files");
	//            }
	//        }
	//        if (d.CalculateOverlaps) {
	//            this._onOverlapCallSuccess(d);
	//            d.CalculateOverlaps = "";
	//        } else {
	//            var b = d.StartDate;
	//            var c = new Date();
	//            this.RequesterName = d.RequesterName;
	//            var s = hcm.approve.leaverequest.util.CalendarServices.setDateType(c.setTime(b));
	//            var E = hcm.approve.leaverequest.util.CalendarServices.setDateType(c.setTime(d.EndDate));
	//            var p = "RequestId='" + d.RequestId + "'," + "RequesterName=''," + "RequesterNumber='" + d.RequesterNumber + "'," + "StartDate=datetime'" + encodeURIComponent(s) + "'," + "EndDate=datetime'" + encodeURIComponent(E) + "'";
	//            this.oDataModel.read("/LeaveRequestSet(" + p + ")", null, null, true, jQuery.proxy(this._onOverlapCallSuccess, this), jQuery.proxy(this._onOverlapCallFail, this));
	//            this.oBusyDialog.open();
	//        }
	//    },
	//    _onOverlapCallSuccess: function (o) {
	//        this.oBusyDialog.close();
	//        o.RequesterName = this.RequesterName;
	//        this.oView.setBindingContext(this.oNextItemContext);
	//        this.oNextItemContext = null;
	//        var a = this.byId("Overlaps");
	//        var b = this.byId("OverlapListLabel");
	//        var c = this.byId("OverlapList");
	//        var d = this.byId("S3_OverlapCalendar");
	//        if (o.Overlaps) {
	//            a.setVisible(true);
	//            b.setText(hcm.approve.leaverequest.util.Conversions.formatterOverlaps(o.Overlaps));
	//            c.setText(hcm.approve.leaverequest.util.Conversions._parseOverlapList(o.OverlapList));
	//            d.setVisible(true);
	//            d.setCount(o.Overlaps);
	//        } else {
	//            a.setVisible(false);
	//            d.setVisible(false);
	//        }
	//        var l = hcm.approve.leaverequest.util.Conversions._parseOverlapPernr(o.OverlapList);
	//        var C = this.byId("OverlapCalendar2");
	//        var e = o.StartDate;
	//        var f = new Date();
	//        var s = hcm.approve.leaverequest.util.CalendarServices.setDateType(f.setTime(e));
	//        var g, E;
	//        if (new Date().getTimezoneOffset() > 0) {
	//            o.StartDate = this.toUTCDate(o.StartDate);
	//            o.EndDate = this.toUTCDate(o.EndDate);
	//        }
	//        if (o.EndDate.getDate() > o.StartDate.getDate() + 13) {
	//            g = new Date(o.EndDate);
	//            E = hcm.approve.leaverequest.util.CalendarServices.setDateType(g.setDate(g.getDate()));
	//        } else {
	//            g = new Date(o.StartDate);
	//            E = hcm.approve.leaverequest.util.CalendarServices.setDateType(g.setDate(g.getDate() + 13));
	//        }
	//        this.dateFilter = "$filter=OverlapList eq '" + l + "' and EmployeeNumber eq '" + o.RequesterNumber + "' and StartDate eq datetime'" + s + "' and EndDate eq datetime'" + E + "'";
	//        var t = hcm.approve.leaverequest.util.CalendarServices.dateFormatter(e);
	//        var h = hcm.approve.leaverequest.util.CalendarServices.dateFormatter(g);
	//        C.setStartDate(o.StartDate);
	//        this.msg = this.resourceBundle.getText("dialog.leave.overlaps.disclaimer", [
	//            o.RequesterName,
	//            t,
	//            h
	//        ]);
	//        var L = this.byId("CalenderLegend");
	//        if (L) {
	//            L.setLegendForNormal(this.resourceBundle.getText("view.Calendar.LegendWorkingDay"));
	//            L.setLegendForType00(this.resourceBundle.getText("view.Calendar.LegendDayOff"));
	//            L.setLegendForType01(this.resourceBundle.getText("view.Calendar.LegendApproved"));
	//            L.setLegendForType04(this.resourceBundle.getText("view.Calendar.LegendPending"));
	//            L.setLegendForType06(this.resourceBundle.getText("view.Calendar.LegendHoliday"));
	//            L.setLegendForType07(this.resourceBundle.getText("view.Calendar.LegendDeletionRequested"));
	//            L.setLegendForToday(this.resourceBundle.getText("view.Calendar.LegendToday"));
	//        }
	//    },
	//    _onOverlapCallFail: function (e) {
	//        "use strict";
	//        this.oBusyDialog.close();
	//        sap.ca.ui.message.showMessageBox({
	//            type: sap.ca.ui.message.Type.ERROR,
	//            message: e.message,
	//            details: e.response.body
	//        });
	//    },
	//    getHeaderFooterOptions: function () {
	//        "use strict";
	//        var t = this;
	//        var o = {
	//            sI18NDetailTitle: "view.Detail.title",
	//            oPositiveAction: {
	//                sId: "S3_APPROVE",
	//                sI18nBtnTxt: t.resourceBundle.getText("XBUT_APPROVE"),
	//                onBtnPressed: jQuery.proxy(t._handleApprove, t)
	//            },
	//            oNegativeAction: {
	//                sId: "S3_REJECT",
	//                sI18nBtnTxt: t.resourceBundle.getText("XBUT_REJECT"),
	//                onBtnPressed: jQuery.proxy(t._handleReject, t)
	//            },
	//            oAddBookmarkSettings: {
	//                title: t.resourceBundle.getText("view.Detail.title"),
	//                icon: "sap-icon://card"
	//            },
	//            bSuppressBookmarkButton: true
	//        };
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
	//    _handleTabSelect: function (e) {
	//        "use strict";
	//        var k = e.getParameter("selectedKey");
	//        if (k === "calendar") {
	//            this.oDataModel.read("/TeamCalendarSet", null, [this.dateFilter], true, jQuery.proxy(this._onSuccess, this), jQuery.proxy(this._onFail, this));
	//            this.oBusyDialog.open();
	//            var m = new sap.m.Text();
	//            m = this.byId("infoText");
	//            m.setText(this.msg);
	//            m.addStyleClass("msgCss");
	//        }
	//    },
	//    _onSuccess: function (o) {
	//        for (var i = 0; i < o.results.length; i++) {
	//            if (new Date().getTimezoneOffset() > 0) {
	//                o.results[i].StartDate = this.toUTCDate(o.results[i].StartDate);
	//                o.results[i].EndDate = this.toUTCDate(o.results[i].EndDate);
	//            }
	//        }
	//        var m = new sap.ui.model.json.JSONModel(o.results);
	//        this.oBusyDialog.close();
	//        var e = new sap.me.OverlapCalendarEvent({
	//            startDay: "{StartDate}",
	//            endDay: "{EndDate}",
	//            row: "{Order}",
	//            type: "{LegendType}",
	//            name: "{EmployeeName}"
	//        });
	//        this.oCal = this.byId("OverlapCalendar2");
	//        this.oCal.setModel(m);
	//        this.oCal.bindAggregation("calendarEvents", "/", e);
	//    },
	//    _onFail: function (e) {
	//        "use strict";
	//        this.oBusyDialog.close();
	//        sap.ca.ui.message.showMessageBox({
	//            type: sap.ca.ui.message.Type.ERROR,
	//            message: e.message,
	//            details: e.response.body
	//        });
	//    },
	    _handleApprove: function () {
	        "use strict";
	        var d = this.oView.getModel().getProperty(this.oView.getBindingContext().getPath()), a = true, c = jQuery.proxy(function (R) {
	                this._handleApproveRejectExecute(R, a, d);
	            }, this), u = this.oView.getBindingContext().getProperty("RequesterName"), l = this.oView.getBindingContext().getProperty("LeaveTypeDesc"), A = this.oView.getBindingContext().getProperty("AbsenceDays"), s = this.oView.getBindingContext().getProperty("AbsenceHours"), b = this.oView.getBindingContext().getProperty("AllDayFlag"), L = this.oView.getBindingContext().getProperty("LeaveRequestType"),
	           //+FJO
	            // r = hcm.approve.leaverequest.util.Conversions.formatterAbsenceDurationAndUnit(A, s, b), 
	            r = this.formatterAbsenceDurationAndUnit(A, s, b), 
	            e = "";
	        if (L === "3") {
	            e = this.resourceBundle.getText("dialog.question.approvecancel", [u]);
	        } else {
	            e = this.resourceBundle.getText("dialog.question.approve", [u]);
	        }
	        sap.ca.ui.dialog.confirmation.open({
	            question: e,
	            showNote: true,
	            additionalInformation: [
	                {
	                    label: this.resourceBundle.getText("view.AddInfo.LeaveType"),
	                    text: l
	                },
	                {
	                    label: this.resourceBundle.getText("view.AddInfo.Requested"),
	                    text: r
	                }
	            ],
	            title: this.resourceBundle.getText("XTIT_APPROVAL"),
	            confirmButtonLabel: this.resourceBundle.getText("XBUT_APPROVE")
	        }, jQuery.proxy(c, this));
	    },
	    _handleReject: function () {
	        "use strict";
	        var d = this.oView.getModel().getProperty(this.oView.getBindingContext().getPath()), a = false, c = jQuery.proxy(function (o) {
	                this._handleApproveRejectExecute(o, a, d);
	            }, this), u = this.oView.getBindingContext().getProperty("RequesterName"), l = this.oView.getBindingContext().getProperty("LeaveTypeDesc"), A = this.oView.getBindingContext().getProperty("AbsenceDays"), s = this.oView.getBindingContext().getProperty("AbsenceHours"), b = this.oView.getBindingContext().getProperty("AllDayFlag"), L = this.oView.getBindingContext().getProperty("LeaveRequestType"), 
	         r = this.formatterAbsenceDurationAndUnit(A, s, b), R = "";
	        if (L === "3") {
	            R = this.resourceBundle.getText("dialog.question.rejectcancel", [u]);
	        } else {
	            R = this.resourceBundle.getText("dialog.question.reject", [u]);
	        }
	        sap.ca.ui.dialog.confirmation.open({
	            question: R,
	            showNote: true,
	            additionalInformation: [
	                {
	                    label: this.resourceBundle.getText("view.AddInfo.LeaveType"),
	                    text: l
	                },
	                {
	                    label: this.resourceBundle.getText("view.AddInfo.Requested"),
	                    text: r
	                }
	            ],
	            title: this.resourceBundle.getText("XTIT_REJECT"),
	            confirmButtonLabel: this.resourceBundle.getText("XBUT_REJECT")
	        }, jQuery.proxy(c, this));
	    }
	    ,
	    // _handleApproveRejectExecute: function (r, a, d) {
	    //     "use strict";
	    //     if (r.isConfirmed) {
	    //         var D, u;
	    //         if (a) {
	    //             D = "PREPARE_APPROVE";
	    //             this.sTextKey = "dialog.success.approve";
	    //         } else {
	    //             D = "PREPARE_REJECT";
	    //             this.sTextKey = "dialog.success.reject";
	    //         }
	    //         u = "ApplyLeaveRequestDecision?SAP__Origin='" + d.SAP__Origin + "'&RequestId='" + d.RequestId + "'&Version=" + d.Version + "&Comment='" + encodeURIComponent(r.sNote) + "'&Decision='" + D + "'";
	    //         var R = [];
	    //         var b = this.oDataModel.createBatchOperation(u, "GET");
	    //         R.push(b);
	    //         if (this.oApplicationFacade._sNextDetailPath) {
	    //             var c = this.oApplicationFacade._sNextDetailPath;
	    //             if (c.match("^/") == "/") {
	    //                 c = c.substring(1);
	    //             }
	    //             var e = this.oDataModel.createBatchOperation(c, "GET");
	    //             R.push(e);
	    //         }
	    //         this.oBusyDialog.open();
	    //         this.sApprovingOperation = D;
	    //         this.oApprovingRequest = d;
	    //         this.oDataModel.addBatchReadOperations(R);
	    //         this.oDataModel.submitBatch(jQuery.proxy(this._handleApproveBatchRequestSuccess, this), jQuery.proxy(this._handleApproveBatchRequestError, this));
	    //     }
	    // },
	//    _handleApproveBatchRequestSuccess: function (d, r, e) {
	//        this.oBusyDialog.close();
	//        if (!d.__batchResponses[0].statusText || d.__batchResponses[0].statusText !== "OK") {
	//            hcm.approve.leaverequest.util.Conversions.formatErrorDialog(d.__batchResponses[0]);
	//            return;
	//        }
	//        if (d.__batchResponses.length > 1 && d.__batchResponses[1].statusText && d.__batchResponses[1].statusText === "OK") {
	//            var R = d.__batchResponses[1].data;
	//            var k = true;
	//            if (R.OverlapList && this.sApprovingOperation === "PREPARE_REJECT") {
	//                var o = R.OverlapList.split("::NEW::");
	//                var O = [];
	//                for (var i = 0; i < o.length; i++) {
	//                    var p = o[i].split("::::");
	//                    if (p.length === 4) {
	//                        O.push({
	//                            name: p[0],
	//                            pernr: p[1],
	//                            begda: p[2],
	//                            endda: p[3]
	//                        });
	//                    }
	//                }
	//                var P = this.oApprovingRequest;
	//                k = !O.some(function (a, b, f) {
	//                    var g = new Date(P.StartDate.getFullYear(), P.StartDate.getMonth(), P.StartDate.getDate());
	//                    var h = new Date(P.EndDate.getFullYear(), P.EndDate.getMonth(), P.EndDate.getDate());
	//                    var j = new Date(a.begda.substr(0, 4), a.begda.substr(4, 2) - 1, a.begda.substr(6, 2));
	//                    var l = new Date(a.begda.substr(0, 4), a.begda.substr(4, 2) - 1, a.begda.substr(6, 2));
	//                    return P.RequesterNumber === a.pernr && g.getTime() <= l.getTime() && h.getTime() >= j.getTime();
	//                });
	//            }
	//            if (k) {
	//                var m = this.oDataModel.getProperty(this.oApplicationFacade._sNextDetailPath);
	//                m.CalculateOverlaps = "X";
	//                m.OverlapList = R.OverlapList;
	//                m.Overlaps = R.Overlaps;
	//            }
	//        }
	//        var c = sap.ui.core.Component.getOwnerIdFor(this.oView), C = sap.ui.component(c);
	//        C.oEventBus.publish("hcm.approve.leaverequest", "leaveRequestApproveReject", this.oApprovingRequest);
	//        this.sApprovingOperation = null;
	//        this.oApprovingRequest = null;
	//        sap.ca.ui.message.showMessageToast(this.resourceBundle.getText(this.sTextKey));
	//    },
	//    _handleApproveBatchRequestError: function (e) {
	//        "use strict";
	//        this.oBusyDialog.close();
	//        hcm.approve.leaverequest.util.Conversions.formatErrorDialog(e);
	//    },
	//    _handleNamePress: function (e) {
	//        "use strict";
	//        jQuery.proxy(this._handleEmployeeNameClick(e), this);
	//    },
	//    _handleSenderPress: function (e) {
	//        "use strict";
	//        jQuery.proxy(this._handleEmployeeNameClick(e), this);
	//    },
	//    _handleEmployeeNameClick: function (E) {
	//        "use strict";
	//        this.oControl = E.getParameters().domRef;
	//        var c = this.oView.getBindingContext(), u = c.getProperty("RequesterNumber"), l = c.getProperty("LeaveTypeDesc"), s = c.getProperty("StartDate"), a = c.getProperty("StartTime"), b = c.getProperty("EndDate"), d = c.getProperty("EndTime"), f = c.getProperty("AllDayFlag"), t = hcm.approve.leaverequest.util.Conversions.formatterAbsenceDays3(s, a, b, d, f), S = this.resourceBundle.getText("view.BusinessCard.Employee.Subject", [l]);
	//        try {
	//            var i = E.getSource().getParent().getId();
	//            if (i.indexOf("NotesList") >= 0) {
	//                var g = E.getSource().getBindingContextPath().split("/")[2];
	//                var m = this.byId("NotesList").getModel("notes").getData();
	//                u = m.NotesCollection[g].Pernr;
	//            }
	//        } catch (e) {
	//            jQuery.sap.log.warning("Couldn't find the Details of employee", "_handleEmployeeNameClick", "hcm.approve.leaverequest.view.S3");
	//        }
	//        this.mailSubject = S + " " + t;
	//        this.oDataModel.read("EmployeeSet", null, ["$filter=EmployeeNumber eq '" + u + "'"], true, jQuery.proxy(this._onRequestSuccess, this), jQuery.proxy(this._onRequestFailed, this));
	//    },
	//    _onRequestSuccess: function (d) {
	//        "use strict";
	//        jQuery.sap.require("sap.ca.ui.quickoverview.EmployeeLaunch");
	//        var a = d.results[0], e = {
	//                title: "Employee",
	//                name: a.Name,
	//                department: a.Department,
	//                contactmobile: a.Mobile,
	//                contactphone: a.Phone,
	//                contactemail: a.Email,
	//                contactemailsubj: this.mailSubject,
	//                companyname: a.Company,
	//                companyaddress: a.Address
	//            }, E = new sap.ca.ui.quickoverview.EmployeeLaunch(e);
	//        E.openBy(this.oControl);
	//    },
	//    toUTCDate: function (d) {
	//        return new Date(d.setMinutes(d.getMinutes() + d.getTimezoneOffset()));
	//    },
	//    _onRequestFailed: function (e) {
	//        "use strict";
	//        sap.ca.ui.message.showMessageBox({
	//            type: sap.ca.ui.message.Type.ERROR,
	//            message: e.message,
	//            details: e.response.body
	//        });
	//    }
	//+FJO
		formatterAbsenceDurationAndUnit: function(AbsenceDays, AbsenceHours, AllDayFlag) {
			var oAbsenceDays, oAbsenceHours, oDurationUnit;
			var oBundle = hcm.approve.leaverequest.Configuration.oApplicationFacade.getResourceBundle();
			if (AbsenceDays === null || AbsenceHours === null || AllDayFlag === null) {
				return "";
			}
			oAbsenceDays = AbsenceDays;
			oAbsenceHours = AbsenceHours;
			if (AllDayFlag) {
				// oAbsenceDays = hcm.approve.leaverequest.util.NumberFormatter.formatNumberStripZerosDays(oAbsenceDays);
				oAbsenceDays = hcm.approve.leaverequest.util.NumberFormatter.formatNumberStripZeros(oAbsenceDays);
				if (parseInt(oAbsenceDays, 10) === 1) {
					oDurationUnit = oBundle.getText("util.Conversions.Value_Day_Singular", [oAbsenceDays]);
				} else {
					oDurationUnit = oBundle.getText("util.Conversions.Value_Days", [oAbsenceDays]);
				}
			} else {
				oAbsenceHours = hcm.approve.leaverequest.util.NumberFormatter.formatNumberStripZeros(oAbsenceHours);
				if (parseInt(oAbsenceHours, 10) === 1) {
					oDurationUnit = oBundle.getText("util.Conversions.Value_Hour_Singular", [oAbsenceHours]);
				} else {
					oDurationUnit = oBundle.getText("util.Conversions.Value_Hours", [oAbsenceHours]);
				}
			}

			return oDurationUnit;
		},
		formatterAbsenceDuration: function(AbsenceDays, AbsenceHours, AllDayFlag) {
			var oAbsenceDays, oAbsenceHours, oDuration;
			if (AbsenceDays === null || AbsenceHours === null || AllDayFlag === null) {
				return "";
			}
			oAbsenceDays = AbsenceDays;
			oAbsenceHours = AbsenceHours;

			if (AllDayFlag) {
				// oDuration = hcm.approve.leaverequest.util.NumberFormatter.formatNumberStripZerosDays(oAbsenceDays);
				oDuration = hcm.approve.leaverequest.util.NumberFormatter.formatNumberStripZeros(oAbsenceDays);

			} else {
				oDuration = hcm.approve.leaverequest.util.NumberFormatter.formatNumberStripZeros(oAbsenceHours);
			}
			return oDuration;
		}
});