function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-home></app-home>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/account/account.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/account/account.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeAccountAccountComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-register></app-register>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/account/login/login.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/account/login/login.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeAccountLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container py-8\" >\n    <div class=\"row justify-content-center \">\n      <div class=\"col-md-6\">\n        <div *ngIf=\"isLoading\" style=\"text-align: center;\">\n          <app-loading-spinner></app-loading-spinner>\n        </div>\n        <div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\" *ngIf=\"error\">\n          <strong>Error!</strong> {{ error }}\n        </div>\n        <div *ngIf=\"!isLoading\" class=\"card\">\n          <header class=\"card-header\">\n            <h4 class=\"card-title mt-2\"><i class=\"fa fa-fw fa-user\"></i> Sign In</h4>\n          </header>\n          <article class=\"card-body\">\n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n              <div class=\"form-row\">\n                <div class=\"col form-group js-form-message mb-4\">\n                  <label class=\"form-label\">Email <span class=\"text-danger\">*</span></label> \n                  <input type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n                  <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                      <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n                  </div> \n                </div> <!-- form-group end.// -->\n                <div class=\"col form-group\">\n                  <label class=\"form-label\">Password<span class=\"text-danger\">*</span></label>\n                  <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                  <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                      <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n                  </div>\n                </div> <!-- form-group end.// -->\n              </div> <!-- form-row end.// -->\n                    \n              <div class=\"form-group\">\n                <button type=\"submit\" class=\"btn btn-primary-dark-w btn-block\"> Log In  </button>\n              </div> <!-- form-group// -->                                              \n            </form>\n          </article> <!-- card-body end .// -->\n        </div> <!-- card.// -->\n      </div> <!-- col.//-->\n  \n    </div> <!-- row.//-->   \n</div> \n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/account/register/register.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/account/register/register.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeAccountRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container pt-8\">\n    <div class=\"row justify-content-center \">\n        <div class=\"col-md-6\">\n            <div *ngIf=\"isLoading\" style=\"text-align: center;\">\n                <app-loading-spinner></app-loading-spinner>\n              </div>\n            <div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\" *ngIf=\"error\">\n                <strong>Error!</strong> {{ error }}\n              </div>\n            <div *ngIf=\"!isLoading\" class=\"card\">\n                <header class=\"card-header\">\n                    <h4 class=\"card-title mt-2\"><span class=\"glyphicon glypghicon-user\"><i class=\"fa fa-fw fa-user\"></i> Sign up</span></h4>\n                </header>\n                <article class=\"card-body\">\n                    <form  [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">First name<span class=\"text-danger\">*</span></label>\n                                <input type=\"text\" formControlName=\"firstname\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstname.errors }\" />\n                                <div *ngIf=\"submitted && f.firstname.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.firstname.errors.required\">First Name is required</div>\n                                </div>   \n                            </div> <!-- form-group end.// -->\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">Last name<span class=\"text-danger\">*</span></label>\n                                <input type=\"text\" formControlName=\"lastname\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastname.errors }\" />\n                                <div *ngIf=\"submitted && f.lastname.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.lastname.errors.required\">Last Name is required</div>\n                                </div>\n                            </div>                           \n                        </div> <!-- form-row end.// -->\n                    \n                        <div class=\"form-group\">\n                            <label class=\"form-label\">Email address<span class=\"text-danger\">*</span></label>\n                            <input type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n                            <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                                <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n                            </div>\n                        </div> <!-- form-group end.// -->\n                    \n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">Password<span class=\"text-danger\">*</span></label>\n                                <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                                <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                                    <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n                                </div>\n                            </div> <!-- form-group end.// -->\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">Confirm Password<span class=\"text-danger\">*</span></label>\n                                <input type=\"password\" formControlName=\"confirmPassword\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.confirmPassword.errors }\" />\n                                <div *ngIf=\"submitted && f.confirmPassword.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.confirmPassword.errors.required\">Confirm Password is required</div>\n                                    <div *ngIf=\"f.confirmPassword.errors.mustMatch\">Passwords must match</div>\n                                </div>\n                            </div> <!-- form-group end.// -->\n                        </div> <!-- form-row end.// -->\n                    \n                        <div class=\"form-group\">\n                            <button type=\"submit\" class=\"btn btn-primary-dark-w btn-block\"> Register  </button>\n                        </div> <!-- form-group// -->                                              \n                    </form>\n                </article> <!-- card-body end .// -->\n            </div> <!-- card.// -->\n        </div> <!-- col.//-->\n    </div> <!-- row.//-->   \n</div> \n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/arcade/arcade-a2a/arcade-a2a.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/arcade/arcade-a2a/arcade-a2a.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeArcadeArcadeA2aArcadeA2aComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container py-8\">\n    <div class=\"card border-dark mb-3\">\n        <div class=\"card-header text-center bg-gray-3  py-0\" style=\"font-family:Georgia, 'Times New Roman', Times, serif\"> \n            <h4 class=\"card-title mt-2\">Arcade A2a</h4>\n        </div>\n\n        <div *ngIf=\"!auth.isLoggedIn()\">\n            <a style=\"font-family:Georgia, 'Times New Roman', Times, serif; color:black;\" routerLink=\"/login\">&nbsp;Please Sign In.</a>\n        </div>\n        <div *ngIf=\"auth.isLoggedIn()\"> \n            <div class=\"row p-6 justify-content-center\" *ngIf=\"!results\">\n                <div *ngIf=\"isLoading\" style=\"text-align: center;\">\n                    <app-loading-spinner></app-loading-spinner>\n                </div>\n                <div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\" *ngIf=\"error\">\n                    <strong>Error!</strong> {{ error }}\n                </div>\n                <div *ngIf=\"!isLoading && !submitted\"  class=\"col-md-12 p-4\">                    \n                    <form  [formGroup]=\"dataForm\" (ngSubmit)=\"onSubmit()\">\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">Version Distance Option<span class=\"text-danger\">:</span></label>\n                                <label>1 - for version distance = 1</label><br>\n                                <label>2 - for all combinations of version distance > 1</label><br>\n                                <label>3 - for a subset of combinations of version distance > 1</label>\n                                <select formControlName=\"distOp\" id=\"inputState\" class=\"form-control\"\n                                [ngClass]=\"{'is-invalid': submitted && f.distOp.errors}\" >\n                                    <option>1</option>\n                                    <option>2</option>\n                                    <option>3</option>\n                                </select>\n                                <div *ngIf=\"submitted && f.distOp.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"submitted && f.distOp.errors\">Log Type is required</div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <!-- <div class=\"form-row\">\n                            <div class=\"col form-group\">                               \n                                <label class=\"form-label\">(Input) Deps File Path<span class=\"text-danger\">:</span></label>\n                                <input name=\"depsFile\" type=\"text\" class=\"form-control\" formControlName=\"depsFile\" [ngClass]=\"{ 'is-invalid': submitted &&  f.depsFile.errors}\">\n                                \n                                <div *ngIf=\"submitted && f.depsFile.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.depsFile.errors.required\">Required _deps file input</div>\n                                </div>\n                            </div>\n                        </div> -->\n                        \n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">(Input) Clustered File Path<span class=\"text-danger\">:</span></label>\n                                <input name=\"clusteredDir\" type=\"text\" class=\"form-control\" formControlName=\"clusteredDir\" [ngClass]=\"{ 'is-invalid': submitted &&  f.clusteredDir.errors}\">\n                                <div *ngIf=\"submitted && f.clusteredDir.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.clusteredDir.errors.required\">Required clustered file output</div>\n                                </div>\n                            </div>\n                        </div>\n                        <br>\n                        <hr>\n                        <div class=\"form-group mt-5\">\n                            <button type=\"submit\" class=\"btn btn-primary-dark-w min-width-200\"> Submit  </button>\n                            <button type=\"button\" class=\"btn btn-primary-dark-w float-right min-width-200\"> Cancel  </button>\n                        </div> <!-- form-group// --> \n                    </form>\n                </div>\n            </div>\n\n            <div class=\"row py-18 px-0 justify-content-center m-2\"  *ngIf=\"results\">\n                <div class=\"col-md-8 bg-gray-3 py-3\"> \n                    <strong>Success! {{ results }}</strong>\n                </div>\n                <!-- <div class=\"col-md-4 \"> \n                    <button type=\"button\" class=\"btn btn-primary-dark-w float-right min-width-200 min-height-40\" (click)=\"downloadResults()\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Downlod Results </button>\n                </div> -->\n            </div>\n        </div>\n\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/arcade/arcade-acdc/arcade-acdc.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/arcade/arcade-acdc/arcade-acdc.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeArcadeArcadeAcdcArcadeAcdcComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container py-8\">\n    <div class=\"card border-dark mb-3\">\n        <div class=\"card-header text-center bg-gray-3  py-0\" style=\"font-family:Georgia, 'Times New Roman', Times, serif\"> \n            <h4 class=\"card-title mt-2\">Arcade ACDC</h4>\n        </div>\n\n        <div *ngIf=\"!auth.isLoggedIn()\">\n            <a style=\"font-family:Georgia, 'Times New Roman', Times, serif; color:black;\" routerLink=\"/login\">&nbsp;Please Sign In.</a>\n        </div>\n        <div *ngIf=\"auth.isLoggedIn()\"> \n            <div class=\"row p-6 justify-content-center\" *ngIf=\"!results\">\n                <div *ngIf=\"isLoading\" style=\"text-align: center;\">\n                    <app-loading-spinner></app-loading-spinner>\n                </div>\n                <div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\" *ngIf=\"error\">\n                    <strong>Error!</strong> {{ error }}\n                </div>\n                <div *ngIf=\"!isLoading && !submitted\"  class=\"col-md-12 p-4\">\n                    <form  [formGroup]=\"dataForm\" (ngSubmit)=\"onSubmit()\">\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                               \n                                <!-- <div class=\"input-group\"> -->\n                                    <!-- <div class=\"input-group-prepend\">                                   \n                                        <span class=\"input-group-text\">deps file path</span>\n                                    </div> -->\n                                    <!-- <div class=\"custom-file\">   -->\n                                        <!-- <input name=\"revisionfile\" type=\"file\" class=\"custom-file-input\" id=\"files\" (change)=\"onFileSelected1($event)\" [ngClass]=\"{ 'is-invalid': submitted &&  historyRevision=='Input _deps File' }\"> -->\n                                        <label class=\"form-label\">(Input) Deps File Path<span class=\"text-danger\">:</span></label>\n                                        <input name=\"depsFile\" type=\"text\" class=\"form-control\" formControlName=\"depsFile\" [ngClass]=\"{ 'is-invalid': submitted &&  f.depsFile.errors}\">\n                                        \n                                        <!-- <label class=\"custom-file-label\" for=\"files\">{{historyRevision}}</label> -->\n                                        <div *ngIf=\"submitted && f.depsFile.errors\" class=\"invalid-feedback\">\n                                            <div *ngIf=\"f.depsFile.errors.required\">Required _deps file input</div>\n                                        </div>\n                                    <!-- </div> -->\n                                <!-- </div>  -->\n                            </div>\n                        </div>\n                        <!-- <div class=\"form-row\"> -->\n                            <!-- <div class=\"col form-group\">\n                                <label class=\"form-label\">Log Type<span class=\"text-danger\">*</span></label>\n                                <select formControlName=\"logType\" id=\"inputState\" class=\"form-control\"\n                                [ngClass]=\"{'is-invalid': submitted && f.logType.errors}\" >\n                                    <option>git</option>\n                                    <option>svn</option>\n                                </select>\n                                <div *ngIf=\"submitted && f.logType.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"submitted && f.logType.errors\">Log Type is required</div>\n                                </div>\n                            </div> -->\n                            <!-- <div class=\"col form-group\">   -->\n                                    <!--The \"from\" Date Picker -->\n                            \n                                    <!-- <div class=\"md-form\">\n                                        <label class=\"form-label\">Start Date<span class=\"text-danger\">*</span></label>\n                                        <input placeholder=\"Start Date (dd/mm/yyyy)\" type=\"text\" formControlName=\"startDate\"  id=\"date-picker-example\" class=\"form-control\"\n                                        [ngClass]=\"{'is-invalid': submitted && f.startDate.errors}\">\n                                        <div *ngIf=\"submitted && f.startDate.errors\" class=\"invalid-feedback\">\n                                            <div *ngIf=\"submitted && f.startDate.errors\">Start Date is required</div>\n                                        </div>\n                                    </div> -->\n\n                                \n                            <!-- </div>\n                            <div class=\"col form-group\"> -->\n                                    <!--The \"to\" Date Picker -->\n                                    <!-- <label class=\"form-label\">End Date<span class=\"text-danger\">*</span></label>\n                                    <input placeholder=\"End Date (dd/mm/yyyy)\" type=\"text\" formControlName=\"endDate\" id=\"endingDate\" class=\"form-control\"\n                                    [ngClass]=\"{'is-invalid': submitted && f.endDate.errors}\">\n                                    <div *ngIf=\"submitted && f.endDate.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"submitted && f.endDate.errors\">End Date is required</div>\n                                    </div>        \n                            </div> -->\n                        <!-- </div> -->\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <!-- <div class=\"input-group\" > -->\n                                    <!-- <div class=\"input-group-prepend\"  >\n                                        <span class=\"input-group-text\">clustered file path</span>\n                                    </div> -->\n                                    <!-- <div class=\"custom-file\"> -->\n                                        <label class=\"form-label\">(Output) Clustered File Path<span class=\"text-danger\">:</span></label>\n                                        <input name=\"clusteredFile\" type=\"text\" class=\"form-control\" formControlName=\"clusteredFile\" [ngClass]=\"{ 'is-invalid': submitted &&  f.clusteredFile.errors}\">\n                                        <!-- <label class=\"custom-file-label\" for=\"dsmfiles\">{{structurl_DSM}}</label> -->\n                                        <div *ngIf=\"submitted && f.clusteredFile.errors\" class=\"invalid-feedback\">\n                                            <div *ngIf=\"f.clusteredFile.errors.required\">Required clustered file output</div>\n                                        </div>\n                                    <!-- </div> -->\n                                <!-- </div>  -->\n                            </div>\n                        </div>\n                        <br>\n                        <hr>\n                        <div class=\"form-group mt-5\">\n                            <button type=\"submit\" class=\"btn btn-primary-dark-w min-width-200\"> Submit  </button>\n                            <button type=\"button\" class=\"btn btn-primary-dark-w float-right min-width-200\"> Cancel  </button>\n                        </div> <!-- form-group// --> \n                    </form>\n                </div>\n            </div>\n\n            <div class=\"row py-18 px-0 justify-content-center m-2\"  *ngIf=\"results\">\n                <div class=\"col-md-8 bg-gray-3 py-3\"> \n                    <strong>Success! {{ results }}</strong>\n                </div>\n                <!-- <div class=\"col-md-4 \"> \n                    <button type=\"button\" class=\"btn btn-primary-dark-w float-right min-width-200 min-height-40\" (click)=\"downloadResults()\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Downlod Results </button>\n                </div> -->\n            </div>\n        </div>\n\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/arcade/arcade-arc/arcade-arc.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/arcade/arcade-arc/arcade-arc.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeArcadeArcadeArcArcadeArcComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container py-8\">\n    <div class=\"card border-dark mb-3\">\n        <div class=\"card-header text-center bg-gray-3  py-0\" style=\"font-family:Georgia, 'Times New Roman', Times, serif\"> \n            <h4 class=\"card-title mt-2\">Arcade Arc</h4>\n        </div>\n\n        <div *ngIf=\"!auth.isLoggedIn()\">\n            <a style=\"font-family:Georgia, 'Times New Roman', Times, serif; color:black;\" routerLink=\"/login\">&nbsp;Please Sign In.</a>\n        </div>\n        <div *ngIf=\"auth.isLoggedIn()\"> \n            <div class=\"row p-6 justify-content-center\" *ngIf=\"!results\">\n                <div *ngIf=\"isLoading\" style=\"text-align: center;\">\n                    <app-loading-spinner></app-loading-spinner>\n                </div>\n                <div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\" *ngIf=\"error\">\n                    <strong>Error!</strong> {{ error }}\n                </div>\n                <div *ngIf=\"!isLoading && !submitted\"  class=\"col-md-12 p-4\">\n                    <form  [formGroup]=\"dataForm\" (ngSubmit)=\"onSubmit()\">\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                               \n                               <label class=\"form-label\">(Input) Source Dir Path<span class=\"text-danger\">:</span></label>\n                                <input name=\"srcDir\" type=\"text\" class=\"form-control\" formControlName=\"srcDir\" [ngClass]=\"{ 'is-invalid': submitted &&  f.srcDir.errors}\">\n                                <div *ngIf=\"submitted && f.srcDir.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.srcDir.errors.required\">Required _deps file input</div>\n                                </div>                                    \n                            </div>\n                        </div>\n                      \n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">(Output) Output Dir Path (should have base dir with prerequisite files: output.pipe, infer.mallet and topicmodel.data)<span class=\"text-danger\">:</span></label>\n                                <input name=\"outputDir\" type=\"text\" class=\"form-control\" formControlName=\"outputDir\" [ngClass]=\"{ 'is-invalid': submitted &&  f.outputDir.errors}\">\n                                \n                                <div *ngIf=\"submitted && f.outputDir.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.outputDir.errors.required\">Required clustered file output</div>\n                                </div>                                    \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">Class Dir<span class=\"text-danger\">:</span></label>\n                                <input name=\"classDir\" type=\"text\" class=\"form-control\" formControlName=\"classDir\" [ngClass]=\"{ 'is-invalid': submitted &&  f.classDir.errors}\">\n                                \n                                <div *ngIf=\"submitted && f.classDir.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.classDir.errors.required\">Required clustered file output</div>\n                                </div>                                    \n                            </div>\n                        </div>\n\n                        <br>\n                        <hr>\n                        <div class=\"form-group mt-5\">\n                            <button type=\"submit\" class=\"btn btn-primary-dark-w min-width-200\"> Submit  </button>\n                            <button type=\"button\" class=\"btn btn-primary-dark-w float-right min-width-200\"> Cancel  </button>\n                        </div> <!-- form-group// --> \n                    </form>\n                </div>\n            </div>\n\n            <div class=\"row py-18 px-0 justify-content-center m-2\"  *ngIf=\"results\">\n                <div class=\"col-md-8 bg-gray-3 py-3\"> \n                    <strong>Success! {{ results }}</strong>\n                </div>\n                <!-- <div class=\"col-md-4 \"> \n                    <button type=\"button\" class=\"btn btn-primary-dark-w float-right min-width-200 min-height-40\" (click)=\"downloadResults()\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Downlod Results </button>\n                </div> -->\n            </div>\n        </div>\n\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/arcade/arcade-archsmelldetector/arcade-archsmelldetector.component.html":
  /*!************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/arcade/arcade-archsmelldetector/arcade-archsmelldetector.component.html ***!
    \************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeArcadeArcadeArchsmelldetectorArcadeArchsmelldetectorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container py-8\">\n    <div class=\"card border-dark mb-3\">\n        <div class=\"card-header text-center bg-gray-3  py-0\" style=\"font-family:Georgia, 'Times New Roman', Times, serif\"> \n            <h4 class=\"card-title mt-2\">Arcade Archsmelldetector</h4>\n        </div>\n\n        <div *ngIf=\"!auth.isLoggedIn()\">\n            <a style=\"font-family:Georgia, 'Times New Roman', Times, serif; color:black;\" routerLink=\"/login\">&nbsp;Please Sign In.</a>\n        </div>\n        <div *ngIf=\"auth.isLoggedIn()\"> \n            <div class=\"row p-6 justify-content-center\" *ngIf=\"!results\">\n                <div *ngIf=\"isLoading\" style=\"text-align: center;\">\n                    <app-loading-spinner></app-loading-spinner>\n                </div>\n                <div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\" *ngIf=\"error\">\n                    <strong>Error!</strong> {{ error }}\n                </div>\n                <div *ngIf=\"!isLoading && !submitted\"  class=\"col-md-12 p-4\">\n                    <form  [formGroup]=\"dataForm\" (ngSubmit)=\"onSubmit()\">\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                               \n                                <!-- <div class=\"input-group\"> -->                                   \n                                    <!-- <div class=\"custom-file\">   -->\n                                        <!-- <input name=\"revisionfile\" type=\"file\" class=\"custom-file-input\" id=\"files\" (change)=\"onFileSelected1($event)\" [ngClass]=\"{ 'is-invalid': submitted &&  historyRevision=='Input _deps File' }\"> -->\n                                        <label class=\"form-label\">(Input) Deps File Path<span class=\"text-danger\">:</span></label>\n                                        <input name=\"depsFile\" type=\"text\" class=\"form-control\" formControlName=\"depsFile\" [ngClass]=\"{ 'is-invalid': submitted &&  f.depsFile.errors}\">                                        \n                                        <!-- <label class=\"custom-file-label\" for=\"files\">{{historyRevision}}</label> -->\n                                        <div *ngIf=\"submitted && f.depsFile.errors\" class=\"invalid-feedback\">\n                                            <div *ngIf=\"f.depsFile.errors.required\">Required _deps file input</div>\n                                        </div>\n                                    <!-- </div> -->\n                                <!-- </div>  -->\n                            </div>\n                        </div>\n                        \n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <!-- <div class=\"input-group\" > -->                                    \n                                    <!-- <div class=\"custom-file\"> -->\n                                        <label class=\"form-label\">(Input) Clustered File Path<span class=\"text-danger\">:</span></label>\n                                        <input name=\"clusteredFile\" type=\"text\" class=\"form-control\" formControlName=\"clusteredFile\" [ngClass]=\"{ 'is-invalid': submitted &&  f.clusteredFile.errors}\">\n                                        <!-- <label class=\"custom-file-label\" for=\"dsmfiles\">{{structurl_DSM}}</label> -->\n                                        <div *ngIf=\"submitted && f.clusteredFile.errors\" class=\"invalid-feedback\">\n                                            <div *ngIf=\"f.clusteredFile.errors.required\">Required clustered file output</div>\n                                        </div>\n                                    <!-- </div> -->\n                                <!-- </div>  -->\n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <!-- <div class=\"input-group\" > -->                                    \n                                    <!-- <div class=\"custom-file\"> -->\n                                        <label class=\"form-label\">(Output) smell file path<span class=\"text-danger\">:</span></label>\n                                        <input name=\"smellFile\" type=\"text\" class=\"form-control\" formControlName=\"smellFile\" [ngClass]=\"{ 'is-invalid': submitted &&  f.smellFile.errors}\">\n                                        <!-- <label class=\"custom-file-label\" for=\"dsmfiles\">{{structurl_DSM}}</label> -->\n                                        <div *ngIf=\"submitted && f.smellFile.errors\" class=\"invalid-feedback\">\n                                            <div *ngIf=\"f.smellFile.errors.required\">Required clustered file output</div>\n                                        </div>\n                                    <!-- </div> -->\n                                <!-- </div>  -->\n                            </div>\n                        </div>\n\n                        <br>\n                        <hr>\n                        <div class=\"form-group mt-5\">\n                            <button type=\"submit\" class=\"btn btn-primary-dark-w min-width-200\"> Submit  </button>\n                            <button type=\"button\" class=\"btn btn-primary-dark-w float-right min-width-200\"> Cancel  </button>\n                        </div> <!-- form-group// --> \n                    </form>\n                </div>\n            </div>\n\n            <div class=\"row py-18 px-0 justify-content-center m-2\"  *ngIf=\"results\">\n                <div class=\"col-md-8 bg-gray-3 py-3\"> \n                    <strong>Success! {{ results }}</strong>\n                </div>\n                <!-- <div class=\"col-md-4 \"> \n                    <button type=\"button\" class=\"btn btn-primary-dark-w float-right min-width-200 min-height-40\" (click)=\"downloadResults()\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Downlod Results </button>\n                </div> -->\n            </div>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/arcade/arcade-batchclonefinder/arcade-batchclonefinder.component.html":
  /*!**********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/arcade/arcade-batchclonefinder/arcade-batchclonefinder.component.html ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeArcadeArcadeBatchclonefinderArcadeBatchclonefinderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container py-8\">\n    <div class=\"card border-dark mb-3\">\n        <div class=\"card-header text-center bg-gray-3  py-0\" style=\"font-family:Georgia, 'Times New Roman', Times, serif\"> \n            <h4 class=\"card-title mt-2\">Clean-up Code-Maat</h4>\n        </div>\n\n        <div *ngIf=\"!auth.isLoggedIn()\">\n            <a style=\"font-family:Georgia, 'Times New Roman', Times, serif; color:black;\" routerLink=\"/login\">&nbsp;Please Sign In.</a>\n        </div>\n        <div *ngIf=\"auth.isLoggedIn()\"> \n            <div class=\"row p-6 justify-content-center\" *ngIf=\"!results\">\n                <div *ngIf=\"isLoading\" style=\"text-align: center;\">\n                    <app-loading-spinner></app-loading-spinner>\n                </div>\n                <div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\" *ngIf=\"error\">\n                    <strong>Error!</strong> {{ error }}\n                </div>\n                <div *ngIf=\"!isLoading && !submitted\"  class=\"col-md-12 p-4\">                    \n                    <form  [formGroup]=\"dataForm\" (ngSubmit)=\"onSubmit()\">\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">(Input) Project source code dir path<span class=\"text-danger\">:</span></label>\n                                <input name=\"inputDir\" type=\"text\" class=\"form-control\" formControlName=\"inputDir\" [ngClass]=\"{ 'is-invalid': submitted &&  f.inputDir.errors}\">\n                                <div *ngIf=\"submitted && f.inputDir.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.inputDir.errors.required\">Required clustered file output</div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">(Output) Output clone.xml dir path<span class=\"text-danger\">:</span></label>\n                                <input name=\"outputDir\" type=\"text\" class=\"form-control\" formControlName=\"outputDir\" [ngClass]=\"{ 'is-invalid': submitted &&  f.outputDir.errors}\">\n                                <div *ngIf=\"submitted && f.outputDir.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.outputDir.errors.required\">Required clustered file output</div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <br>\n                        <hr>\n                        <div class=\"form-group mt-5\">\n                            <button type=\"submit\" class=\"btn btn-primary-dark-w min-width-200\"> Submit  </button>\n                            <button type=\"button\" class=\"btn btn-primary-dark-w float-right min-width-200\"> Cancel  </button>\n                        </div> <!-- form-group// --> \n                    </form>\n                </div>\n            </div>\n\n            <div class=\"row py-18 px-0 justify-content-center m-2\"  *ngIf=\"results\">\n                <div class=\"col-md-8 bg-gray-3 py-3\"> \n                    <strong>Success! {{ results }}</strong>\n                </div>\n                <!-- <div class=\"col-md-4 \"> \n                    <button type=\"button\" class=\"btn btn-primary-dark-w float-right min-width-200 min-height-40\" (click)=\"downloadResults()\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Downlod Results </button>\n                </div> -->\n            </div>\n        </div>\n\n    </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/arcade/arcade-c2caverageanalyze/arcade-c2caverageanalyze.component.html":
  /*!************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/arcade/arcade-c2caverageanalyze/arcade-c2caverageanalyze.component.html ***!
    \************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeArcadeArcadeC2caverageanalyzeArcadeC2caverageanalyzeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container py-8\">\n    <div class=\"card border-dark mb-3\">\n        <div class=\"card-header text-center bg-gray-3  py-0\" style=\"font-family:Georgia, 'Times New Roman', Times, serif\"> \n            <h4 class=\"card-title mt-2\">Arcade C2cAverageAnalyze</h4>\n        </div>\n\n        <div *ngIf=\"!auth.isLoggedIn()\">\n            <a style=\"font-family:Georgia, 'Times New Roman', Times, serif; color:black;\" routerLink=\"/login\">&nbsp;Please Sign In.</a>\n        </div>\n        <div *ngIf=\"auth.isLoggedIn()\"> \n            <div class=\"row p-6 justify-content-center\" *ngIf=\"!results\">\n                <div *ngIf=\"isLoading\" style=\"text-align: center;\">\n                    <app-loading-spinner></app-loading-spinner>\n                </div>\n                <div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\" *ngIf=\"error\">\n                    <strong>Error!</strong> {{ error }}\n                </div>\n                <div *ngIf=\"!isLoading && !submitted\"  class=\"col-md-12 p-4\">                    \n                    <form  [formGroup]=\"dataForm\" (ngSubmit)=\"onSubmit()\">                      \n                        \n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">(input) Cvg Log File<span class=\"text-danger\">:</span></label>\n                                <input name=\"cvglogFile\" type=\"text\" class=\"form-control\" formControlName=\"cvglogFile\" [ngClass]=\"{ 'is-invalid': submitted &&  f.cvglogFile.errors}\">\n                                <div *ngIf=\"submitted && f.cvglogFile.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.cvglogFile.errors.required\">Required cvg log file input</div>\n                                </div>\n                            </div>\n                        </div>\n                        <br>\n                        <hr>\n                        <div class=\"form-group mt-5\">\n                            <button type=\"submit\" class=\"btn btn-primary-dark-w min-width-200\"> Submit  </button>\n                            <button type=\"button\" class=\"btn btn-primary-dark-w float-right min-width-200\"> Cancel  </button>\n                        </div> <!-- form-group// --> \n                    </form>\n                </div>\n            </div>\n\n            <div class=\"row py-18 px-0 justify-content-center m-2\"  *ngIf=\"results\">\n                <div class=\"col-md-8 bg-gray-3 py-3\"> \n                    <strong>Success! {{ results }}</strong>\n                </div>\n                <!-- <div class=\"col-md-4 \"> \n                    <button type=\"button\" class=\"btn btn-primary-dark-w float-right min-width-200 min-height-40\" (click)=\"downloadResults()\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Downlod Results </button>\n                </div> -->\n            </div>\n        </div>\n\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/arcade/arcade-cleanupcodemaat/arcade-cleanupcodemaat.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/arcade/arcade-cleanupcodemaat/arcade-cleanupcodemaat.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeArcadeArcadeCleanupcodemaatArcadeCleanupcodemaatComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container py-8\">\n    <div class=\"card border-dark mb-3\">\n        <div class=\"card-header text-center bg-gray-3  py-0\" style=\"font-family:Georgia, 'Times New Roman', Times, serif\"> \n            <h4 class=\"card-title mt-2\">Clean-up Code-Maat</h4>\n        </div>\n\n        <div *ngIf=\"!auth.isLoggedIn()\">\n            <a style=\"font-family:Georgia, 'Times New Roman', Times, serif; color:black;\" routerLink=\"/login\">&nbsp;Please Sign In.</a>\n        </div>\n        <div *ngIf=\"auth.isLoggedIn()\"> \n            <div class=\"row p-6 justify-content-center\" *ngIf=\"!results\">\n                <div *ngIf=\"isLoading\" style=\"text-align: center;\">\n                    <app-loading-spinner></app-loading-spinner>\n                </div>\n                <div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\" *ngIf=\"error\">\n                    <strong>Error!</strong> {{ error }}\n                </div>\n                <div *ngIf=\"!isLoading && !submitted\"  class=\"col-md-12 p-4\">                    \n                    <form  [formGroup]=\"dataForm\" (ngSubmit)=\"onSubmit()\">\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">(Input) Code Maat csv file dir path<span class=\"text-danger\">:</span></label>\n                                <input name=\"inputDir\" type=\"text\" class=\"form-control\" formControlName=\"inputDir\" [ngClass]=\"{ 'is-invalid': submitted &&  f.inputDir.errors}\">\n                                <div *ngIf=\"submitted && f.inputDir.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.inputDir.errors.required\">Required clustered file output</div>\n                                </div>\n                            </div>\n                        </div>\n                        <br>\n                        <hr>\n                        <div class=\"form-group mt-5\">\n                            <button type=\"submit\" class=\"btn btn-primary-dark-w min-width-200\"> Submit  </button>\n                            <button type=\"button\" class=\"btn btn-primary-dark-w float-right min-width-200\"> Cancel  </button>\n                        </div> <!-- form-group// --> \n                    </form>\n                </div>\n            </div>\n\n            <div class=\"row py-18 px-0 justify-content-center m-2\"  *ngIf=\"results\">\n                <div class=\"col-md-8 bg-gray-3 py-3\"> \n                    <strong>Success! {{ results }}</strong>\n                </div>\n                <!-- <div class=\"col-md-4 \"> \n                    <button type=\"button\" class=\"btn btn-primary-dark-w float-right min-width-200 min-height-40\" (click)=\"downloadResults()\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Downlod Results </button>\n                </div> -->\n            </div>\n        </div>\n\n    </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/arcade/arcade-cvg/arcade-cvg.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/arcade/arcade-cvg/arcade-cvg.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeArcadeArcadeCvgArcadeCvgComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container py-8\">\n    <div class=\"card border-dark mb-3\">\n        <div class=\"card-header text-center bg-gray-3  py-0\" style=\"font-family:Georgia, 'Times New Roman', Times, serif\"> \n            <h4 class=\"card-title mt-2\">Arcade Cvg</h4>\n        </div>\n\n        <div *ngIf=\"!auth.isLoggedIn()\">\n            <a style=\"font-family:Georgia, 'Times New Roman', Times, serif; color:black;\" routerLink=\"/login\">&nbsp;Please Sign In.</a>\n        </div>\n        <div *ngIf=\"auth.isLoggedIn()\"> \n            <div class=\"row p-6 justify-content-center\" *ngIf=\"!results\">\n                <div *ngIf=\"isLoading\" style=\"text-align: center;\">\n                    <app-loading-spinner></app-loading-spinner>\n                </div>\n                <div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\" *ngIf=\"error\">\n                    <strong>Error!</strong> {{ error }}\n                </div>\n                <div *ngIf=\"!isLoading && !submitted\"  class=\"col-md-12 p-4\">\n                    <form  [formGroup]=\"dataForm\" (ngSubmit)=\"onSubmit()\">\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">        \n                                <label class=\"form-label\">(Input) Cluster Dir Path<span class=\"text-danger\">:</span></label>\n                                <input name=\"clusterDir\" type=\"text\" class=\"form-control\" formControlName=\"clusterDir\" [ngClass]=\"{ 'is-invalid': submitted &&  f.clusterDir.errors}\">\n                                <div *ngIf=\"submitted && f.clusterDir.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.clusterDir.errors.required\">Required _deps Dir input</div>\n                                </div>\n                            </div>\n                        </div>                         \n                        \n\n                        <br>\n                        <hr>\n                        <div class=\"form-group mt-5\">\n                            <button type=\"submit\" class=\"btn btn-primary-dark-w min-width-200\"> Submit  </button>\n                            <button type=\"button\" class=\"btn btn-primary-dark-w float-right min-width-200\"> Cancel  </button>\n                        </div> <!-- form-group// --> \n                    </form>\n                </div>\n            </div>\n\n            <div class=\"row py-18 px-0 justify-content-center m-2\"  *ngIf=\"results\">\n                <div class=\"col-md-8 bg-gray-3 py-3\"> \n                    <strong>Success! {{ results }}</strong>\n                </div>\n                <!-- <div class=\"col-md-4 \"> \n                    <button type=\"button\" class=\"btn btn-primary-dark-w float-right min-width-200 min-height-40\" (click)=\"downloadResults()\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Downlod Results </button>\n                </div> -->\n            </div>\n        </div>\n\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/arcade/arcade-decaymetrics/arcade-decaymetrics.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/arcade/arcade-decaymetrics/arcade-decaymetrics.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeArcadeArcadeDecaymetricsArcadeDecaymetricsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container py-8\">\n    <div class=\"card border-dark mb-3\">\n        <div class=\"card-header text-center bg-gray-3  py-0\" style=\"font-family:Georgia, 'Times New Roman', Times, serif\"> \n            <h4 class=\"card-title mt-2\">Arcade DecayMetrics</h4>\n        </div>\n\n        <div *ngIf=\"!auth.isLoggedIn()\">\n            <a style=\"font-family:Georgia, 'Times New Roman', Times, serif; color:black;\" routerLink=\"/login\">&nbsp;Please Sign In.</a>\n        </div>\n        <div *ngIf=\"auth.isLoggedIn()\"> \n            <div class=\"row p-6 justify-content-center\" *ngIf=\"!results\">\n                <div *ngIf=\"isLoading\" style=\"text-align: center;\">\n                    <app-loading-spinner></app-loading-spinner>\n                </div>                \n                <div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\" *ngIf=\"error\">\n                    <strong>Error!</strong> {{ error }}\n                </div>       \n                <div *ngIf=\"!isLoading && !submitted\"  class=\"col-md-12 p-4\">\n                    <form [formGroup]=\"dataForm\" (ngSubmit)=\"onSubmit()\">\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">(Input) Deps Dir Path<span class=\"text-danger\">:</span></label>  \n                                <input name=\"depsDir\" type=\"text\" formControlName=\"depsDir\" class=\"form-control\" [ngClass]=\"{'is-invalid': submitted && f.depsDir.errors}\">\n                                <div *ngIf=\"submitted && f.depsDir.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.depsDir.errors.required\">Required field!!</div>\n                                </div> \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">(Input) Cluster Dir Path<span class=\"text-danger\">:</span></label>  \n                                <input name=\"clusterDir\" type=\"text\" formControlName=\"clusterDir\" class=\"form-control\" [ngClass]=\"{'is-invalid': submitted && f.clusterDir.errors}\">\n                                <div *ngIf=\"submitted && f.clusterDir.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.clusterDir.errors.required\">Required field!!</div>\n                                </div> \n                            </div>\n                        </div>                                 \n\n                        <hr>\n                        <div class=\"form-group mt-5\">\n                            <button type=\"submit\" class=\"btn btn-primary-dark-w min-width-200\"> Submit  </button>\n                            <button type=\"button\" class=\"btn btn-primary-dark-w float-right min-width-200\"> Cancel  </button>\n                        </div> \n                    </form>\n                    \n                </div>\n            </div>\n\n            <div class=\"row py-18 px-0 justify-content-center m-2\"  *ngIf=\"results\">\n                <div class=\"col-md-8 bg-gray-3 py-3\"> \n                    <strong>Success! {{ results }}</strong>\n                </div>            \n            </div>\n\n\n        </div>\n\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/arcade/arcade-dependencyfinderprocessing/arcade-dependencyfinderprocessing.component.html":
  /*!******************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/arcade/arcade-dependencyfinderprocessing/arcade-dependencyfinderprocessing.component.html ***!
    \******************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeArcadeArcadeDependencyfinderprocessingArcadeDependencyfinderprocessingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container py-8\">\n    <div class=\"card border-dark mb-3\">\n        <div class=\"card-header text-center bg-gray-3  py-0\" style=\"font-family:Georgia, 'Times New Roman', Times, serif\"> \n            <h4 class=\"card-title mt-2\">Clean-up Code-Maat</h4>\n        </div>\n\n        <div *ngIf=\"!auth.isLoggedIn()\">\n            <a style=\"font-family:Georgia, 'Times New Roman', Times, serif; color:black;\" routerLink=\"/login\">&nbsp;Please Sign In.</a>\n        </div>\n        <div *ngIf=\"auth.isLoggedIn()\"> \n            <div class=\"row p-6 justify-content-center\" *ngIf=\"!results\">\n                <div *ngIf=\"isLoading\" style=\"text-align: center;\">\n                    <app-loading-spinner></app-loading-spinner>\n                </div>\n                <div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\" *ngIf=\"error\">\n                    <strong>Error!</strong> {{ error }}\n                </div>\n                <div *ngIf=\"!isLoading && !submitted\"  class=\"col-md-12 p-4\">                    \n                    <form  [formGroup]=\"dataForm\" (ngSubmit)=\"onSubmit()\">\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">(Input) Project(s) source code dir path<span class=\"text-danger\">:</span></label>\n                                <input name=\"inputDir\" type=\"text\" class=\"form-control\" formControlName=\"inputDir\" [ngClass]=\"{ 'is-invalid': submitted &&  f.inputDir.errors}\">\n                                <div *ngIf=\"submitted && f.inputDir.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.inputDir.errors.required\">Required clustered file output</div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">(Input) cluster dir folder<span class=\"text-danger\">:</span></label>\n                                <input name=\"clusterDir\" type=\"text\" class=\"form-control\" formControlName=\"clusterDir\" [ngClass]=\"{ 'is-invalid': submitted &&  f.clusterDir.errors}\">\n                                <div *ngIf=\"submitted && f.clusterDir.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.clusterDir.errors.required\">Required clustered file output</div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">(Input) DepFinder dir folder<span class=\"text-danger\">:</span></label>\n                                <input name=\"depFinderDir\" type=\"text\" class=\"form-control\" formControlName=\"depFinderDir\" [ngClass]=\"{ 'is-invalid': submitted &&  f.depFinderDir.errors}\">\n                                <div *ngIf=\"submitted && f.depFinderDir.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.depFinderDir.errors.required\">Required clustered file output</div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">(Input) Clone dir folder<span class=\"text-danger\">:</span></label>\n                                <input name=\"cloneDir\" type=\"text\" class=\"form-control\" formControlName=\"cloneDir\" [ngClass]=\"{ 'is-invalid': submitted &&  f.cloneDir.errors}\">\n                                <div *ngIf=\"submitted && f.cloneDir.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.cloneDir.errors.required\">Required clustered file output</div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">(Input) Logical Dep File<span class=\"text-danger\">:</span></label>\n                                <input name=\"logicalDepFile\" type=\"text\" class=\"form-control\" formControlName=\"logicalDepFile\" [ngClass]=\"{ 'is-invalid': submitted &&  f.logicalDepFile.errors}\">\n                                <div *ngIf=\"submitted && f.logicalDepFile.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.logicalDepFile.errors.required\">Required clustered file output</div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">(Input) Package Name<span class=\"text-danger\">:</span></label>\n                                <input name=\"packageName\" type=\"text\" class=\"form-control\" formControlName=\"packageName\" [ngClass]=\"{ 'is-invalid': submitted &&  f.packageName.errors}\">\n                                <div *ngIf=\"submitted && f.packageName.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.packageName.errors.required\">Required clustered file output</div>\n                                </div>\n                            </div>\n                        </div>\n                        \n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">(Output) Output deps.xml dir path<span class=\"text-danger\">:</span></label>\n                                <input name=\"outputDir\" type=\"text\" class=\"form-control\" formControlName=\"outputDir\" [ngClass]=\"{ 'is-invalid': submitted &&  f.outputDir.errors}\">\n                                <div *ngIf=\"submitted && f.outputDir.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.outputDir.errors.required\">Required clustered file output</div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <br>\n                        <hr>\n                        <div class=\"form-group mt-5\">\n                            <button type=\"submit\" class=\"btn btn-primary-dark-w min-width-200\"> Submit  </button>\n                            <button type=\"button\" class=\"btn btn-primary-dark-w float-right min-width-200\"> Cancel  </button>\n                        </div> <!-- form-group// --> \n                    </form>\n                </div>\n            </div>\n\n            <div class=\"row py-18 px-0 justify-content-center m-2\"  *ngIf=\"results\">\n                <div class=\"col-md-8 bg-gray-3 py-3\"> \n                    <strong>Success! {{ results }}</strong>\n                </div>\n                <!-- <div class=\"col-md-4 \"> \n                    <button type=\"button\" class=\"btn btn-primary-dark-w float-right min-width-200 min-height-40\" (click)=\"downloadResults()\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Downlod Results </button>\n                </div> -->\n            </div>\n        </div>\n\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/arcade/arcade-depfindrunner/arcade-depfindrunner.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/arcade/arcade-depfindrunner/arcade-depfindrunner.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeArcadeArcadeDepfindrunnerArcadeDepfindrunnerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container py-8\">\n    <div class=\"card border-dark mb-3\">\n        <div class=\"card-header text-center bg-gray-3  py-0\" style=\"font-family:Georgia, 'Times New Roman', Times, serif\"> \n            <h4 class=\"card-title mt-2\">Clean-up Code-Maat</h4>\n        </div>\n\n        <div *ngIf=\"!auth.isLoggedIn()\">\n            <a style=\"font-family:Georgia, 'Times New Roman', Times, serif; color:black;\" routerLink=\"/login\">&nbsp;Please Sign In.</a>\n        </div>\n        <div *ngIf=\"auth.isLoggedIn()\"> \n            <div class=\"row p-6 justify-content-center\" *ngIf=\"!results\">\n                <div *ngIf=\"isLoading\" style=\"text-align: center;\">\n                    <app-loading-spinner></app-loading-spinner>\n                </div>\n                <div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\" *ngIf=\"error\">\n                    <strong>Error!</strong> {{ error }}\n                </div>\n                <div *ngIf=\"!isLoading && !submitted\"  class=\"col-md-12 p-4\">                    \n                    <form  [formGroup]=\"dataForm\" (ngSubmit)=\"onSubmit()\">\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">(Input) Project(s) source code dir path<span class=\"text-danger\">:</span></label>\n                                <input name=\"inputDir\" type=\"text\" class=\"form-control\" formControlName=\"inputDir\" [ngClass]=\"{ 'is-invalid': submitted &&  f.inputDir.errors}\">\n                                <div *ngIf=\"submitted && f.inputDir.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.inputDir.errors.required\">Required clustered file output</div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">(Input) class dir path<span class=\"text-danger\">:</span></label>\n                                <input name=\"classDir\" type=\"text\" class=\"form-control\" formControlName=\"classDir\" [ngClass]=\"{ 'is-invalid': submitted &&  f.classDir.errors}\">\n                                <div *ngIf=\"submitted && f.classDir.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.classDir.errors.required\">Required clustered file output</div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">(Output) Output deps.xml dir path<span class=\"text-danger\">:</span></label>\n                                <input name=\"outputDir\" type=\"text\" class=\"form-control\" formControlName=\"outputDir\" [ngClass]=\"{ 'is-invalid': submitted &&  f.outputDir.errors}\">\n                                <div *ngIf=\"submitted && f.outputDir.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.outputDir.errors.required\">Required clustered file output</div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <br>\n                        <hr>\n                        <div class=\"form-group mt-5\">\n                            <button type=\"submit\" class=\"btn btn-primary-dark-w min-width-200\"> Submit  </button>\n                            <button type=\"button\" class=\"btn btn-primary-dark-w float-right min-width-200\"> Cancel  </button>\n                        </div> <!-- form-group// --> \n                    </form>\n                </div>\n            </div>\n\n            <div class=\"row py-18 px-0 justify-content-center m-2\"  *ngIf=\"results\">\n                <div class=\"col-md-8 bg-gray-3 py-3\"> \n                    <strong>Success! {{ results }}</strong>\n                </div>\n                <!-- <div class=\"col-md-4 \"> \n                    <button type=\"button\" class=\"btn btn-primary-dark-w float-right min-width-200 min-height-40\" (click)=\"downloadResults()\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Downlod Results </button>\n                </div> -->\n            </div>\n        </div>\n\n    </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/arcade/arcade-depsbuilder/arcade-depsbuilder.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/arcade/arcade-depsbuilder/arcade-depsbuilder.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeArcadeArcadeDepsbuilderArcadeDepsbuilderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container py-8\">\n    <div class=\"card border-dark mb-3\">\n        <div class=\"card-header text-center bg-gray-3  py-0\" style=\"font-family:Georgia, 'Times New Roman', Times, serif\"> \n            <h4 class=\"card-title mt-2\">Arcade Depsbuilder</h4>\n        </div>\n\n        <div *ngIf=\"!auth.isLoggedIn()\">\n            <a style=\"font-family:Georgia, 'Times New Roman', Times, serif; color:black;\" routerLink=\"/login\">&nbsp;Please Sign In.</a>\n        </div>\n        <div *ngIf=\"auth.isLoggedIn()\"> \n            <div class=\"row p-6 justify-content-center\" *ngIf=\"!results\">\n                <div *ngIf=\"isLoading\" style=\"text-align: center;\">\n                    <app-loading-spinner></app-loading-spinner>\n                </div>                \n                <div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\" *ngIf=\"error\">\n                    <strong>Error!</strong> {{ error }}\n                </div>       \n                <div *ngIf=\"!isLoading && !submitted\"  class=\"col-md-12 p-4\">\n                    <form [formGroup]=\"dataForm\" (ngSubmit)=\"onSubmit()\">\n                        <div class=\"form-row\">                               \n                            <div class=\"col form-group\">\n                                <div class=\"icheck-primary\"><input type=\"radio\" [checked]=true formControlName=\"language\" value=\"upload\" id=\"java\" (click)=\"onRadioChange('java')\"><label for=\"java\">Java</label></div>\n                            </div> <!-- form-group end.// -->\n                            <div class=\"col form-group\">\n                                <div class=\"icheck-primary\"><input type=\"radio\" formControlName=\"language\" value=\"github\" id=\"cpp\" (click)=\"onRadioChange('cpp')\"><label for=\"cpp\">C++</label></div>\n                            </div>  \n                        </div>\n                        <div class=\"form-row\" *ngIf=\"language=='cpp'\">\n                            <div class=\"col form-group\">\n\n\n                                <!-- <div class=\"input-group\">\n                                    <div class=\"input-group-prepend\">\n                                        <span class=\"input-group-text\">Upload</span>\n                                    </div>\n                                    <div class=\"custom-file\">\n                                        <input name=\"revisionfile\" type=\"file\" class=\"custom-file-input\" id=\"files2\" (change)=\"onFileSelected1($event)\" [ngClass]=\"{ 'is-invalid': submitted &&  project=='Upload Project' }\">\n                                        <label class=\"custom-file-label\" for=\"files2\">{{project}}</label>\n                                        <div *ngIf=\"submitted && project=='Upload Project'\" class=\"invalid-feedback\">\n                                            <div *ngIf=\"project=='Upload Project'\">Project IS Required</div>\n                                        </div>\n                                    </div>\n                                </div>  -->\n\n\n                                <label class=\"form-label\">(Input) Project's Source Code Dir<span class=\"text-danger\">:</span></label>\n                                <input name=\"srcDir\" type=\"text\" class=\"form-control\" formControlName=\"srcDir\" [ngClass]=\"{ 'is-invalid': submitted &&  f.srcDir.errors}\">\n                                <div *ngIf=\"submitted && f.srcDir.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.srcDir.errors.required\">Required field!!</div>\n                                </div> \n\n\n                            </div>\n                        </div>                        \n\n\n                        <div class=\"form-row\" *ngIf=\"language=='java'\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">(Input) Bin Dir Path<span class=\"text-danger\">:</span></label>  \n                                <input name=\"classpath\" type=\"text\" formControlName=\"classpath\" class=\"form-control\" [ngClass]=\"{'is-invalid': submitted && f.classpath.errors}\">\n                                <div *ngIf=\"submitted && f.classpath.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.classpath.errors.required\">Required field!!</div>\n                                </div> \n                            </div>\n                        </div>\n\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">(Output) Deps File path<span class=\"text-danger\">:</span></label>  \n                                <input type=\"text\" formControlName=\"depsFile\" class=\"form-control\" \n                                [ngClass]=\"{'is-invalid': submitted && f.depsFile.errors}\">\n                                <div *ngIf=\"submitted && f.depsFile.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.depsFile.errors.required\">Required field!!</div>\n                                </div> \n                            </div>\n                        </div>\n\n\n                        <hr>\n                        <div class=\"form-group mt-5\">\n                            <button type=\"submit\" class=\"btn btn-primary-dark-w min-width-200\"> Submit  </button>\n                            <button type=\"button\" class=\"btn btn-primary-dark-w float-right min-width-200\"> Cancel  </button>\n                        </div> \n                    </form>\n\n\n                    \n                </div>\n            </div>\n\n            <div class=\"row py-18 px-0 justify-content-center m-2\"  *ngIf=\"results\">\n                <div class=\"col-md-8 bg-gray-3 py-3\"> \n                    <strong>Success! {{ results }}</strong>\n                </div>            \n            </div>\n\n\n        </div>\n\n    </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/arcade/arcade-pipeextractor/arcade-pipeextractor.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/arcade/arcade-pipeextractor/arcade-pipeextractor.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeArcadeArcadePipeextractorArcadePipeextractorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container py-8\">\n    <div class=\"card border-dark mb-3\">\n        <div class=\"card-header text-center bg-gray-3  py-0\" style=\"font-family:Georgia, 'Times New Roman', Times, serif\"> \n            <h4 class=\"card-title mt-2\">Arcade PipeExtractor</h4>\n        </div>\n\n        <div *ngIf=\"!auth.isLoggedIn()\">\n            <a style=\"font-family:Georgia, 'Times New Roman', Times, serif; color:black;\" routerLink=\"/login\">&nbsp;Please Sign In.</a>\n        </div>\n        <div *ngIf=\"auth.isLoggedIn()\"> \n            <div class=\"row p-6 justify-content-center\" *ngIf=\"!results\">\n                <div *ngIf=\"isLoading\" style=\"text-align: center;\">\n                    <app-loading-spinner></app-loading-spinner>\n                </div>\n                <div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\" *ngIf=\"error\">\n                    <strong>Error!</strong> {{ error }}\n                </div>\n                <div *ngIf=\"!isLoading && !submitted\"  class=\"col-md-12 p-4\">\n                    <form  [formGroup]=\"dataForm\" (ngSubmit)=\"onSubmit()\">\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                               \n                               <label class=\"form-label\">(Input) Source Dir Path<span class=\"text-danger\">:</span></label>\n                                <input name=\"srcDir\" type=\"text\" class=\"form-control\" formControlName=\"srcDir\" [ngClass]=\"{ 'is-invalid': submitted &&  f.srcDir.errors}\">\n                                \n                                <div *ngIf=\"submitted && f.srcDir.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.srcDir.errors.required\">Required source dir input</div>\n                                </div>                                  \n                            </div>\n                        </div>\n                       \n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">(Output) Output Dir Path<span class=\"text-danger\">:</span></label>\n                                <input name=\"outputDir\" type=\"text\" class=\"form-control\" formControlName=\"outputDir\" [ngClass]=\"{ 'is-invalid': submitted &&  f.outputDir.errors}\">\n                                <!-- <label class=\"custom-file-label\" for=\"dsmfiles\">{{structurl_DSM}}</label> -->\n                                <div *ngIf=\"submitted && f.outputDir.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.outputDir.errors.required\">Required output location</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <br>\n                        <hr>\n                        <div class=\"form-group mt-5\">\n                            <button type=\"submit\" class=\"btn btn-primary-dark-w min-width-200\"> Submit  </button>\n                            <button type=\"button\" class=\"btn btn-primary-dark-w float-right min-width-200\"> Cancel  </button>\n                        </div> <!-- form-group// --> \n                    </form>\n                </div>\n            </div>\n\n            <div class=\"row py-18 px-0 justify-content-center m-2\"  *ngIf=\"results\">\n                <div class=\"col-md-8 bg-gray-3 py-3\"> \n                    <strong>Success! {{ results }}</strong>\n                </div>\n                <!-- <div class=\"col-md-4 \"> \n                    <button type=\"button\" class=\"btn btn-primary-dark-w float-right min-width-200 min-height-40\" (click)=\"downloadResults()\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Downlod Results </button>\n                </div> -->\n            </div>\n        </div>\n\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/arcade/arcade-pkg/arcade-pkg.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/arcade/arcade-pkg/arcade-pkg.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeArcadeArcadePkgArcadePkgComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container py-8\">\n    <div class=\"card border-dark mb-3\">\n        <div class=\"card-header text-center bg-gray-3  py-0\" style=\"font-family:Georgia, 'Times New Roman', Times, serif\"> \n            <h4 class=\"card-title mt-2\">Arcade Pkg</h4>\n        </div>\n\n        <div *ngIf=\"!auth.isLoggedIn()\">\n            <a style=\"font-family:Georgia, 'Times New Roman', Times, serif; color:black;\" routerLink=\"/login\">&nbsp;Please Sign In.</a>\n        </div>\n        <div *ngIf=\"auth.isLoggedIn()\"> \n            <div class=\"row p-6 justify-content-center\" *ngIf=\"!results\">\n                <div *ngIf=\"isLoading\" style=\"text-align: center;\">\n                    <app-loading-spinner></app-loading-spinner>\n                </div>\n                <div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\" *ngIf=\"error\">\n                    <strong>Error!</strong> {{ error }}\n                </div>\n                <div *ngIf=\"!isLoading && !submitted\"  class=\"col-md-12 p-4\">\n                    <form  [formGroup]=\"dataForm\" (ngSubmit)=\"onSubmit()\">\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">        \n                                <label class=\"form-label\">(Input) Deps Dir Path<span class=\"text-danger\">:</span></label>\n                                <input name=\"depsDir\" type=\"text\" class=\"form-control\" formControlName=\"depsDir\" [ngClass]=\"{ 'is-invalid': submitted &&  f.depsDir.errors}\">\n                                <div *ngIf=\"submitted && f.depsDir.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.depsDir.errors.required\">Required _deps Dir input</div>\n                                </div>\n                            </div>\n                        </div>\n                         \n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">(Input) Pkg Prefixes<span class=\"text-danger\">:</span></label>\n                                <input name=\"pkgprefixes\" type=\"text\" class=\"form-control\" formControlName=\"pkgprefixes\" [ngClass]=\"{ 'is-invalid': submitted &&  f.pkgprefixes.errors}\">\n                                <div *ngIf=\"submitted && f.pkgprefixes.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.pkgprefixes.errors.required\">Required pkg prefixes output</div>\n                                </div>\n                            </div>\n                        </div>\n\n\n                        <br>\n                        <hr>\n                        <div class=\"form-group mt-5\">\n                            <button type=\"submit\" class=\"btn btn-primary-dark-w min-width-200\"> Submit  </button>\n                            <button type=\"button\" class=\"btn btn-primary-dark-w float-right min-width-200\"> Cancel  </button>\n                        </div> <!-- form-group// --> \n                    </form>\n                </div>\n            </div>\n\n            <div class=\"row py-18 px-0 justify-content-center m-2\"  *ngIf=\"results\">\n                <div class=\"col-md-8 bg-gray-3 py-3\"> \n                    <strong>Success! {{ results }}</strong>\n                </div>\n                <!-- <div class=\"col-md-4 \"> \n                    <button type=\"button\" class=\"btn btn-primary-dark-w float-right min-width-200 min-height-40\" (click)=\"downloadResults()\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Downlod Results </button>\n                </div> -->\n            </div>\n        </div>\n\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/arcade/arcade-smelldensitianalyzer/arcade-smelldensitianalyzer.component.html":
  /*!******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/arcade/arcade-smelldensitianalyzer/arcade-smelldensitianalyzer.component.html ***!
    \******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeArcadeArcadeSmelldensitianalyzerArcadeSmelldensitianalyzerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container py-8\">\n    <div class=\"card border-dark mb-3\">\n        <div class=\"card-header text-center bg-gray-3  py-0\" style=\"font-family:Georgia, 'Times New Roman', Times, serif\"> \n            <h4 class=\"card-title mt-2\">Arcade SmellDensityAnalyzer</h4>\n        </div>\n\n        <div *ngIf=\"!auth.isLoggedIn()\">\n            <a style=\"font-family:Georgia, 'Times New Roman', Times, serif; color:black;\" routerLink=\"/login\">&nbsp;Please Sign In.</a>\n        </div>\n        <div *ngIf=\"auth.isLoggedIn()\"> \n            <div class=\"row p-6 justify-content-center\" *ngIf=\"!results\">\n                <div *ngIf=\"isLoading\" style=\"text-align: center;\">\n                    <app-loading-spinner></app-loading-spinner>\n                </div>\n                <div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\" *ngIf=\"error\">\n                    <strong>Error!</strong> {{ error }}\n                </div>\n                <div *ngIf=\"!isLoading && !submitted\"  class=\"col-md-12 p-4\">\n                    <form  [formGroup]=\"dataForm\" (ngSubmit)=\"onSubmit()\">\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                               \n                                <label class=\"form-label\">(Input) Smells Dir Path<span class=\"text-danger\">:</span></label>\n                                <input name=\"smellsDir\" type=\"text\" class=\"form-control\" formControlName=\"smellsDir\" [ngClass]=\"{ 'is-invalid': submitted &&  f.smellsDir.errors}\">\n                                <div *ngIf=\"submitted && f.smellsDir.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.smellsDir.errors.required\">Required _deps file input</div>\n                                </div>                                 \n                            </div>\n                        </div>\n                        \n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                               \n                                <label class=\"form-label\">(Input) Clustered Dir Path<span class=\"text-danger\">:</span></label>\n                                <input name=\"clusteredDir\" type=\"text\" class=\"form-control\" formControlName=\"clusteredDir\" [ngClass]=\"{ 'is-invalid': submitted &&  f.clusteredDir.errors}\">\n                                <div *ngIf=\"submitted && f.clusteredDir.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.clusteredDir.errors.required\">Required clustered file output</div>\n                                </div>                                  \n                            </div>\n                        </div>\n                        <br>\n                        <hr>\n                        <div class=\"form-group mt-5\">\n                            <button type=\"submit\" class=\"btn btn-primary-dark-w min-width-200\"> Submit  </button>\n                            <button type=\"button\" class=\"btn btn-primary-dark-w float-right min-width-200\"> Cancel  </button>\n                        </div> <!-- form-group// --> \n                    </form>\n                </div>\n            </div>\n\n\n            <div class=\"row py-18 px-0 justify-content-center m-2\"  *ngIf=\"results\">\n                <div class=\"col-md-8 bg-gray-3 py-3\"> \n                    <strong>Success! {{ results }}</strong>\n                </div>\n                <!-- <div class=\"col-md-4 \"> \n                    <button type=\"button\" class=\"btn btn-primary-dark-w float-right min-width-200 min-height-40\" (click)=\"downloadResults()\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Downlod Results </button>\n                </div> -->\n            </div>\n        </div>\n\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/arcade/arcade-smellevolutionanalyzer/arcade-smellevolutionanalyzer.component.html":
  /*!**********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/arcade/arcade-smellevolutionanalyzer/arcade-smellevolutionanalyzer.component.html ***!
    \**********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeArcadeArcadeSmellevolutionanalyzerArcadeSmellevolutionanalyzerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container py-8\">\n    <div class=\"card border-dark mb-3\">\n        <div class=\"card-header text-center bg-gray-3  py-0\" style=\"font-family:Georgia, 'Times New Roman', Times, serif\"> \n            <h4 class=\"card-title mt-2\">Arcade SmellEvolutionAnalyzer</h4>\n        </div>\n\n        <div *ngIf=\"!auth.isLoggedIn()\">\n            <a style=\"font-family:Georgia, 'Times New Roman', Times, serif; color:black;\" routerLink=\"/login\">&nbsp;Please Sign In.</a>\n        </div>\n        <div *ngIf=\"auth.isLoggedIn()\"> \n            <div class=\"row p-6 justify-content-center\" *ngIf=\"!results\">\n                <div *ngIf=\"isLoading\" style=\"text-align: center;\">\n                    <app-loading-spinner></app-loading-spinner>\n                </div>\n                <div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\" *ngIf=\"error\">\n                    <strong>Error!</strong> {{ error }}\n                </div>\n                <div *ngIf=\"!isLoading && !submitted\"  class=\"col-md-12 p-4\">\n                    <form  [formGroup]=\"dataForm\" (ngSubmit)=\"onSubmit()\">\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                               \n                                <label class=\"form-label\">(Input) Smells Dir Path<span class=\"text-danger\">:</span></label>\n                                <input name=\"smellsDir\" type=\"text\" class=\"form-control\" formControlName=\"smellsDir\" [ngClass]=\"{ 'is-invalid': submitted &&  f.smellsDir.errors}\">\n                                <div *ngIf=\"submitted && f.smellsDir.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.smellsDir.errors.required\">Required _deps file input</div>\n                                </div>                                 \n                            </div>\n                        </div>                        \n                    \n                        <br>\n                        <hr>\n                        <div class=\"form-group mt-5\">\n                            <button type=\"submit\" class=\"btn btn-primary-dark-w min-width-200\"> Submit  </button>\n                            <button type=\"button\" class=\"btn btn-primary-dark-w float-right min-width-200\"> Cancel  </button>\n                        </div> <!-- form-group// --> \n                    </form>\n                </div>\n            </div>\n\n\n            <div class=\"row py-18 px-0 justify-content-center m-2\"  *ngIf=\"results\">\n                <div class=\"col-md-8 bg-gray-3 py-3\"> \n                    <strong>Success! {{ results }}</strong>\n                </div>\n                <!-- <div class=\"col-md-4 \"> \n                    <button type=\"button\" class=\"btn btn-primary-dark-w float-right min-width-200 min-height-40\" (click)=\"downloadResults()\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Downlod Results </button>\n                </div> -->\n            </div>\n        </div>\n\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/codemaat/codemaat-vcs/codemaat-vcs.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/codemaat/codemaat-vcs/codemaat-vcs.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeCodemaatCodemaatVcsCodemaatVcsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container py-8\">\n    <div class=\"card border-dark mb-3\">\n        <div class=\"card-header text-center bg-gray-3  py-0\" style=\"font-family:Georgia, 'Times New Roman', Times, serif\"> \n            <h4 class=\"card-title mt-2\">Code Maat Version Control Statistics</h4>\n        </div>\n\n        <div *ngIf=\"!auth.isLoggedIn()\">\n            <a style=\"font-family:Georgia, 'Times New Roman', Times, serif; color:black;\" routerLink=\"/login\">&nbsp;Please Sign In.</a>\n        </div>\n        <div *ngIf=\"auth.isLoggedIn()\"> \n            <div class=\"row p-6 justify-content-center\" *ngIf=\"!results\">\n                <div *ngIf=\"isLoading\" style=\"text-align: center;\">\n                    <app-loading-spinner></app-loading-spinner>\n                </div>\n                <div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\" *ngIf=\"error\">\n                    <strong>Error!</strong> {{ error }}\n                </div>\n                <div *ngIf=\"!isLoading && !submitted\"  class=\"col-md-12 p-4\">\n                    <form  [formGroup]=\"dataForm\" (ngSubmit)=\"onSubmit()\">\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                               \n                               <label class=\"form-label\">(Input) Input Log File: git log or svn log file<span class=\"text-danger\">:</span></label>\n                                <input name=\"inputLogFile\" type=\"text\" class=\"form-control\" formControlName=\"inputLogFile\" [ngClass]=\"{ 'is-invalid': submitted &&  f.inputLogFile.errors}\">                                \n                                <div *ngIf=\"submitted && f.inputLogFile.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.inputLogFile.errors.required\">Required topic model input</div>\n                                </div>                                  \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">(Output) Output File<span class=\"text-danger\">:</span></label>\n                                <input name=\"outputFile\" type=\"text\" class=\"form-control\" formControlName=\"outputFile\" [ngClass]=\"{ 'is-invalid': submitted &&  f.outputFile.errors}\">\n                                <div *ngIf=\"submitted && f.outputFile.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.outputFile.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">Version Control Type (default is git2)<span class=\"text-danger\">:</span></label>                               \n                                <select formControlName=\"versionControlType\" id=\"inputState\" class=\"form-control\"\n                                [ngClass]=\"{'is-invalid': submitted && f.versionControlType.errors}\" >\n                                    <option>git2</option> \n                                    <option>git</option> \n                                    <option>svn</option> \n                                    <option>hg</option> \n                                    <option>p4</option> \n                                    <option>tfs</option>   \n                                </select>                                \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">The analysis to run (default is authors)<span class=\"text-danger\">:</span></label>                               \n                                <select formControlName=\"analysis\" id=\"inputState\" class=\"form-control\"\n                                [ngClass]=\"{'is-invalid': submitted && f.analysis.errors}\" >\n                                    <option>authors</option> \n                                    <option>abs-churn</option> \n                                    <option>age</option> \n                                    <option>author-churn</option> \n                                    <option>communication</option> \n                                    <option>coupling</option> \n                                    <option>entity-churn</option> \n                                    <option>entity-effort</option> \n                                    <option>entity-ownership</option> \n                                    <option>fragmentation</option> \n                                    <option>identity</option> \n                                    <option>main-dev</option>\n                                    <option>main-dev-by-revs</option> \n                                    <option>messages</option> \n                                    <option>refactoring-main-dev</option> \n                                    <option>revisions</option> \n                                    <option>soc</option> \n                                    <option>summary</option>\n                                </select>                                \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Input Encoding (default is UTF-8)<span class=\"text-danger\">:</span></label>\n                                <input name=\"inputEncoding\" type=\"text\" class=\"form-control\" formControlName=\"inputEncoding\" [ngClass]=\"{ 'is-invalid': submitted &&  f.inputEncoding.errors}\">\n                                <div *ngIf=\"submitted && f.inputEncoding.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.inputEncoding.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                               \n                               <label class=\"form-label\">Max Rows in output (default is 0))<span class=\"text-danger\">:</span></label>\n                                <input name=\"maxRows\" type=\"text\" class=\"form-control\" formControlName=\"maxRows\" [ngClass]=\"{ 'is-invalid': submitted &&  f.maxRows.errors}\">                                \n                                <div *ngIf=\"submitted && f.maxRows.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.maxRows.errors.required\">Required inferencer filename</div>\n                                </div>                                  \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                               \n                               <label class=\"form-label\">Minimum number of revisions to include an entity in the analysis (default is 5))<span class=\"text-danger\">:</span></label>\n                                <input name=\"minRevisions\" type=\"text\" class=\"form-control\" formControlName=\"minRevisions\" [ngClass]=\"{ 'is-invalid': submitted &&  f.minRevisions.errors}\">                                \n                                <div *ngIf=\"submitted && f.minRevisions.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.minRevisions.errors.required\">Required inferencer filename</div>\n                                </div>                                  \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                               \n                               <label class=\"form-label\">Minimum number of shared revisions to include an entity in the analysis (default is 5))<span class=\"text-danger\">:</span></label>\n                                <input name=\"minSharedRevisions\" type=\"text\" class=\"form-control\" formControlName=\"minSharedRevisions\" [ngClass]=\"{ 'is-invalid': submitted &&  f.minSharedRevisions.errors}\">                                \n                                <div *ngIf=\"submitted && f.minSharedRevisions.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.minSharedRevisions.errors.required\">Required inferencer filename</div>\n                                </div>                                  \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                               \n                               <label class=\"form-label\">Minimum degree of coupling (in percentage) to consider (default is 30)<span class=\"text-danger\">:</span></label>\n                                <input name=\"minCouplings\" type=\"text\" class=\"form-control\" formControlName=\"minCouplings\" [ngClass]=\"{ 'is-invalid': submitted &&  f.minCouplings.errors}\">                                \n                                <div *ngIf=\"submitted && f.minCouplings.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.minCouplings.errors.required\">Required inferencer filename</div>\n                                </div>                                  \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                               \n                               <label class=\"form-label\">Maximum degree of coupling (in percentage) to consider (default is 100)<span class=\"text-danger\">:</span></label>\n                                <input name=\"maxCouplings\" type=\"text\" class=\"form-control\" formControlName=\"maxCouplings\" [ngClass]=\"{ 'is-invalid': submitted &&  f.maxCouplings.errors}\">                                \n                                <div *ngIf=\"submitted && f.maxCouplings.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.maxCouplings.errors.required\">Required inferencer filename</div>\n                                </div>                                  \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                               \n                               <label class=\"form-label\">Maximum number of modules in a change set if it shall be included in a coupling analysis (default is 30)<span class=\"text-danger\">:</span></label>\n                                <input name=\"maxChangeSetSize\" type=\"text\" class=\"form-control\" formControlName=\"maxChangeSetSize\" [ngClass]=\"{ 'is-invalid': submitted &&  f.maxChangeSetSize.errors}\">                                \n                                <div *ngIf=\"submitted && f.maxChangeSetSize.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.maxChangeSetSize.errors.required\">Required inferencer filename</div>\n                                </div>                                  \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                               \n                               <label class=\"form-label\">Group file: A file with a pre-defined set of layers. The data will be aggregated according to the group of layers<span class=\"text-danger\">:</span></label>\n                                <input name=\"groupFile\" type=\"text\" class=\"form-control\" formControlName=\"groupFile\" [ngClass]=\"{ 'is-invalid': submitted &&  f.groupFile.errors}\">                                \n                                <div *ngIf=\"submitted && f.groupFile.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.groupFile.errors.required\">Required inferencer filename</div>\n                                </div>                                  \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                               \n                               <label class=\"form-label\">A regex to match against commit messages. Used with -messages in analyses<span class=\"text-danger\">:</span></label>\n                                <input name=\"regex\" type=\"text\" class=\"form-control\" formControlName=\"regex\" [ngClass]=\"{ 'is-invalid': submitted &&  f.regex.errors}\">                                \n                                <div *ngIf=\"submitted && f.regex.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.regex.errors.required\">Required inferencer filename</div>\n                                </div>                                  \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">Temporal Period: Instructs Code Maat to consider all commits during the same day as a single, logical commit  <span class=\"text-danger\">:</span></label>                               \n                                <select formControlName=\"temporalPeriod\" id=\"inputState\" class=\"form-control\"\n                                [ngClass]=\"{'is-invalid': submitted && f.temporalPeriod.errors}\" >\n                                    <option>null</option> \n                                    <option>1</option>                                      \n                                </select>                                \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                               \n                               <label class=\"form-label\">Age Time Now: Specify a date as YYYY-MM-dd that counts as time zero when doing a code age analysis (default 0 means none)<span class=\"text-danger\">:</span></label>\n                                <input name=\"agetimeNow\" type=\"text\" class=\"form-control\" formControlName=\"agetimeNow\" [ngClass]=\"{ 'is-invalid': submitted &&  f.agetimeNow.errors}\">                                \n                                <div *ngIf=\"submitted && f.agetimeNow.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.agetimeNow.errors.required\">Required inferencer filename</div>\n                                </div>                                  \n                            </div>\n                        </div>\n\n                        <br>\n                        <hr>\n                        <div class=\"form-group mt-5\">\n                            <button type=\"submit\" class=\"btn btn-primary-dark-w min-width-200\"> Submit  </button>\n                            <button type=\"button\" class=\"btn btn-primary-dark-w float-right min-width-200\"> Cancel  </button>\n                        </div> <!-- form-group// --> \n                    </form>\n                </div>\n            </div>\n\n            <div class=\"row py-18 px-0 justify-content-center m-2\"  *ngIf=\"results\">\n                <div class=\"col-md-8 bg-gray-3 py-3\"> \n                    <strong>Success! {{ results }}</strong>\n                </div>\n                <!-- <div class=\"col-md-4 \"> \n                    <button type=\"button\" class=\"btn btn-primary-dark-w float-right min-width-200 min-height-40\" (click)=\"downloadResults()\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Downlod Results </button>\n                </div> -->\n            </div>\n        </div>\n\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/components-list/components-list.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/components-list/components-list.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeComponentsListComponentsListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">  \n    <div class=\"row\">   \n        <div class=\"col-md-9 mt-1 pl-2\">\n            <!-- row-2 details col-->\n            <!-- <div class=\"row row-details\" *ngFor=\"let tool of tools;index as i;\">  -->\n            <!----------------------------- arcade DepsBuidler -------------------------->\n            <div class=\"row row-details\">\n                <div class=\"col-lg-12\"><!-- col-2-->\n                    <div class=\"row\"> <!-- row-3-->\n                        <div class=\"col-lg-12\"><!-- col-3 -->\n                            <label class=\"row-caption\"><span class=\"secton-label-left\">Name</span><span class=\"secton-label-right\">Arcade DepsBuilder</span> </label>\n                            <label class=\"row-caption row-caption-right\"> <span class=\"secton-label-left\">Category</span><span class=\"secton-label-right\">Architecture Analysis</span></label>\n                        </div>\n                    </div>\n            \n                    <div class=\"row\"><!-- row-4 -->\n                        <div class=\"col-lg-12\"><!-- col-4 -->\n                            <div class=\"file-information p-0\"><!-- information-label -->\n                                <label class=\"snippet-id-label\">1</label>\n                                <label class=\"information-label p-1 m-1 ml-2\"><span class=\"secton-label-left\">Programing Language</span><span class=\"secton-label-right\">Java</span></label>\n                                <button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Download</button>\n                                <a href=\"https://hub.docker.com/repository/docker/nsfsain/arcade-depsbuilders-service\"><button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1\"><i class=\"fab fa-docker\" aria-hidden=\"true\"></i> Docker</button></a>\n                                <a routerLink=\"/arcade-depsbuilder\"><button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1 px-3\" ><i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i> Run tool</button></a>\n                            </div><!-- information-label -->\n                        </div><!-- /col-4 -->\n                    </div>\n                    <div class=\"row\"><!-- row-5 -->\n                        <div class=\"col-lg-12\"> <!-- col-5 -->\n                            <label class=\"snippet-caption\">Tool Description</label>\n                            <a class=\"btn btn-default float-right pb-0\" href=\"#\"> Details &raquo;</a>\n                        </div><!-- /col-5 -->\n                    </div><!-- row-5 -->\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"snippet-codes\">\n                                <p class=\"description text-justify\">blank</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!----------------------------- arcade Acdc -------------------------->\n            <div class=\"row row-details\">\n                <div class=\"col-lg-12\">\n                    <div class=\"row\"> \n                        <div class=\"col-lg-12\">\n                            <label class=\"row-caption\"><span class=\"secton-label-left\">Name</span><span class=\"secton-label-right\">Arcade Acdc</span> </label>\n                            <label class=\"row-caption row-caption-right\"> <span class=\"secton-label-left\">Category</span><span class=\"secton-label-right\">Architecture Analysis</span></label>\n                        </div>\n                    </div>\n            \n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"file-information p-0\">\n                                <label class=\"snippet-id-label\">2</label>\n                                <label class=\"information-label p-1 m-1 ml-2\"><span class=\"secton-label-left\">Programing Language</span><span class=\"secton-label-right\">Java</span></label>\n                                <button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Download</button>\n                                <a href=\"https://hub.docker.com/repository/docker/nsfsain/arcade-acdc-service\"><button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1\"><i class=\"fab fa-docker\" aria-hidden=\"true\"></i> Docker</button></a>\n                                <a routerLink=\"/arcade-acdc\"><button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1 px-3\" ><i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i> Run tool</button></a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\"> \n                            <label class=\"snippet-caption\">Tool Description</label>\n                            <a class=\"btn btn-default float-right pb-0\" href=\"#\"> Details &raquo;</a>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"snippet-codes\">\n                                <p class=\"description text-justify\">blank</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!----------------------------- arcade Archsmelldetector -------------------------->\n            <div class=\"row row-details\">\n                <div class=\"col-lg-12\">\n                    <div class=\"row\"> \n                        <div class=\"col-lg-12\">\n                            <label class=\"row-caption\"><span class=\"secton-label-left\">Name</span><span class=\"secton-label-right\">Arcade Archsmelldetector</span> </label>\n                            <label class=\"row-caption row-caption-right\"> <span class=\"secton-label-left\">Category</span><span class=\"secton-label-right\">Architecture Analysis</span></label>\n                        </div>\n                    </div>\n            \n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"file-information p-0\">\n                                <label class=\"snippet-id-label\">3</label>\n                                <label class=\"information-label p-1 m-1 ml-2\"><span class=\"secton-label-left\">Programing Language</span><span class=\"secton-label-right\">Java</span></label>\n                                <button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Download</button>\n                                <a href=\"https://hub.docker.com/repository/docker/nsfsain/arcade-archsmelldetector-service\"><button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1\"><i class=\"fab fa-docker\" aria-hidden=\"true\"></i> Docker</button></a>\n                                <a routerLink=\"/arcade-archsmelldetector\"><button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1 px-3\" ><i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i> Run tool</button></a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\"> \n                            <label class=\"snippet-caption\">Tool Description</label>\n                            <a class=\"btn btn-default float-right pb-0\" href=\"#\"> Details &raquo;</a>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"snippet-codes\">\n                                <p class=\"description text-justify\">blank</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <!----------------------------- arcade Pkg -------------------------->\n            <div class=\"row row-details\">\n                <div class=\"col-lg-12\">\n                    <div class=\"row\"> \n                        <div class=\"col-lg-12\">\n                            <label class=\"row-caption\"><span class=\"secton-label-left\">Name</span><span class=\"secton-label-right\">Arcade Pkg</span> </label>\n                            <label class=\"row-caption row-caption-right\"> <span class=\"secton-label-left\">Category</span><span class=\"secton-label-right\">Architecture Analysis</span></label>\n                        </div>\n                    </div>\n            \n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"file-information p-0\">\n                                <label class=\"snippet-id-label\">4</label>\n                                <label class=\"information-label p-1 m-1 ml-2\"><span class=\"secton-label-left\">Programing Language</span><span class=\"secton-label-right\">Python</span></label>\n                                <button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Download</button>\n                                <a href=\"https://hub.docker.com/repository/docker/nsfsain/arcade-pkg-service\"><button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1\"><i class=\"fab fa-docker\" aria-hidden=\"true\"></i> Docker</button></a>\n                                <a routerLink=\"/arcade-pkg\"><button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1 px-3\" ><i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i> Run tool</button></a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\"> \n                            <label class=\"snippet-caption\">Tool Description</label>\n                            <a class=\"btn btn-default float-right pb-0\" href=\"#\"> Details &raquo;</a>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"snippet-codes\">\n                                <p class=\"description text-justify\">blank</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <!----------------------------- arcade A2a -------------------------->\n            <div class=\"row row-details\">\n                <div class=\"col-lg-12\">\n                    <div class=\"row\"> \n                        <div class=\"col-lg-12\">\n                            <label class=\"row-caption\"><span class=\"secton-label-left\">Name</span><span class=\"secton-label-right\">Arcade A2a</span> </label>\n                            <label class=\"row-caption row-caption-right\"> <span class=\"secton-label-left\">Category</span><span class=\"secton-label-right\">Architecture Analysis</span></label>\n                        </div>\n                    </div>\n            \n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"file-information p-0\">\n                                <label class=\"snippet-id-label\">5</label>\n                                <label class=\"information-label p-1 m-1 ml-2\"><span class=\"secton-label-left\">Programing Language</span><span class=\"secton-label-right\">Java</span></label>\n                                <button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Download</button>\n                                <a href=\"https://hub.docker.com/repository/docker/nsfsain/arcade-a2a-service\"><button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1\"><i class=\"fab fa-docker\" aria-hidden=\"true\"></i> Docker</button></a>\n                                <a routerLink=\"/arcade-a2a\"><button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1 px-3\" ><i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i> Run tool</button></a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\"> \n                            <label class=\"snippet-caption\">Tool Description</label>\n                            <a class=\"btn btn-default float-right pb-0\" href=\"#\"> Details &raquo;</a>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"snippet-codes\">\n                                <p class=\"description text-justify\">blank</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!----------------------------- arcade Cvg -------------------------->\n            <div class=\"row row-details\">\n                <div class=\"col-lg-12\">\n                    <div class=\"row\"> \n                        <div class=\"col-lg-12\">\n                            <label class=\"row-caption\"><span class=\"secton-label-left\">Name</span><span class=\"secton-label-right\">Arcade Cvg</span> </label>\n                            <label class=\"row-caption row-caption-right\"> <span class=\"secton-label-left\">Category</span><span class=\"secton-label-right\">Architecture Analysis</span></label>\n                        </div>\n                    </div>\n            \n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"file-information p-0\">\n                                <label class=\"snippet-id-label\">6</label>\n                                <label class=\"information-label p-1 m-1 ml-2\"><span class=\"secton-label-left\">Programing Language</span><span class=\"secton-label-right\">Python</span></label>\n                                <button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Download</button>\n                                <a href=\"https://hub.docker.com/repository/docker/nsfsain/arcade-cvg-service\"><button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1\"><i class=\"fab fa-docker\" aria-hidden=\"true\"></i> Docker</button></a>\n                                <a routerLink=\"/arcade-cvg\"><button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1 px-3\" ><i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i> Run tool</button></a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\"> \n                            <label class=\"snippet-caption\">Tool Description</label>\n                            <a class=\"btn btn-default float-right pb-0\" href=\"#\"> Details &raquo;</a>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"snippet-codes\">\n                                <p class=\"description text-justify\">blank</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!----------------------------- arcade C2cAverageAnalyze -------------------------->\n            <div class=\"row row-details\">\n                <div class=\"col-lg-12\">\n                    <div class=\"row\"> \n                        <div class=\"col-lg-12\">\n                            <label class=\"row-caption\"><span class=\"secton-label-left\">Name</span><span class=\"secton-label-right\">Arcade C2cAverageAnalyze</span> </label>\n                            <label class=\"row-caption row-caption-right\"> <span class=\"secton-label-left\">Category</span><span class=\"secton-label-right\">Architecture Analysis</span></label>\n                        </div>\n                    </div>\n            \n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"file-information p-0\">\n                                <label class=\"snippet-id-label\">7</label>\n                                <label class=\"information-label p-1 m-1 ml-2\"><span class=\"secton-label-left\">Programing Language</span><span class=\"secton-label-right\">Java</span></label>\n                                <button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Download</button>\n                                <a href=\"https://hub.docker.com/repository/docker/nsfsain/arcade-c2caverageanalyze-service\"><button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1\"><i class=\"fab fa-docker\" aria-hidden=\"true\"></i> Docker</button></a>\n                                <a routerLink=\"/arcade-c2caverageanalyze\"><button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1 px-3\" ><i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i> Run tool</button></a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\"> \n                            <label class=\"snippet-caption\">Tool Description</label>\n                            <a class=\"btn btn-default float-right pb-0\" href=\"#\"> Details &raquo;</a>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"snippet-codes\">\n                                <p class=\"description text-justify\">blank</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!----------------------------- arcade Decaymetrics -------------------------->\n            <div class=\"row row-details\">\n                <div class=\"col-lg-12\">\n                    <div class=\"row\"> \n                        <div class=\"col-lg-12\">\n                            <label class=\"row-caption\"><span class=\"secton-label-left\">Name</span><span class=\"secton-label-right\">Arcade Decaymetrics</span> </label>\n                            <label class=\"row-caption row-caption-right\"> <span class=\"secton-label-left\">Category</span><span class=\"secton-label-right\">Architecture Analysis</span></label>\n                        </div>\n                    </div>\n            \n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"file-information p-0\">\n                                <label class=\"snippet-id-label\">8</label>\n                                <label class=\"information-label p-1 m-1 ml-2\"><span class=\"secton-label-left\">Programing Language</span><span class=\"secton-label-right\">Java</span></label>\n                                <button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Download</button>\n                                <a href=\"https://hub.docker.com/repository/docker/nsfsain/arcade-decaymetrics-service\"><button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1\"><i class=\"fab fa-docker\" aria-hidden=\"true\"></i> Docker</button></a>\n                                <a routerLink=\"/arcade-decaymetrics\"><button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1 px-3\" ><i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i> Run tool</button></a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\"> \n                            <label class=\"snippet-caption\">Tool Description</label>\n                            <a class=\"btn btn-default float-right pb-0\" href=\"#\"> Details &raquo;</a>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"snippet-codes\">\n                                <p class=\"description text-justify\">blank</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!----------------------------- arcade SmellDensityAnalyzer -------------------------->\n            <div class=\"row row-details\">\n                <div class=\"col-lg-12\">\n                    <div class=\"row\"> \n                        <div class=\"col-lg-12\">\n                            <label class=\"row-caption\"><span class=\"secton-label-left\">Name</span><span class=\"secton-label-right\">Arcade SmellDensityAnalyzer</span> </label>\n                            <label class=\"row-caption row-caption-right\"> <span class=\"secton-label-left\">Category</span><span class=\"secton-label-right\">Architecture Analysis</span></label>\n                        </div>\n                    </div>\n            \n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"file-information p-0\">\n                                <label class=\"snippet-id-label\">9</label>\n                                <label class=\"information-label p-1 m-1 ml-2\"><span class=\"secton-label-left\">Programing Language</span><span class=\"secton-label-right\">Java</span></label>\n                                <button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Download</button>\n                                <a href=\"https://hub.docker.com/repository/docker/nsfsain/arcade-smelldensityanalyzer-service\"><button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1\"><i class=\"fab fa-docker\" aria-hidden=\"true\"></i> Docker</button></a>\n                                <a routerLink=\"/arcade-smelldensityanalyzer\"><button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1 px-3\" ><i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i> Run tool</button></a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\"> \n                            <label class=\"snippet-caption\">Tool Description</label>\n                            <a class=\"btn btn-default float-right pb-0\" href=\"#\"> Details &raquo;</a>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"snippet-codes\">\n                                <p class=\"description text-justify\">blank</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!----------------------------- arcade SmellEvolutionAnalyzer -------------------------->\n            <div class=\"row row-details\">\n                <div class=\"col-lg-12\">\n                    <div class=\"row\"> \n                        <div class=\"col-lg-12\">\n                            <label class=\"row-caption\"><span class=\"secton-label-left\">Name</span><span class=\"secton-label-right\">Arcade SmellEvolutionAnalyzer</span> </label>\n                            <label class=\"row-caption row-caption-right\"> <span class=\"secton-label-left\">Category</span><span class=\"secton-label-right\">Architecture Analysis</span></label>\n                        </div>\n                    </div>\n            \n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"file-information p-0\">\n                                <label class=\"snippet-id-label\">10</label>\n                                <label class=\"information-label p-1 m-1 ml-2\"><span class=\"secton-label-left\">Programing Language</span><span class=\"secton-label-right\">Java</span></label>\n                                <button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Download</button>\n                                <a href=\"https://hub.docker.com/repository/docker/nsfsain/arcade-smellevolutionanalyzer-service\"><button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1\"><i class=\"fab fa-docker\" aria-hidden=\"true\"></i> Docker</button></a>\n                                <a routerLink=\"/arcade-smellevolutionanalyzer\"><button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1 px-3\" ><i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i> Run tool</button></a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\"> \n                            <label class=\"snippet-caption\">Tool Description</label>\n                            <a class=\"btn btn-default float-right pb-0\" href=\"#\"> Details &raquo;</a>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"snippet-codes\">\n                                <p class=\"description text-justify\">blank</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!----------------------------- arcade PipeExtractor -------------------------->\n            <div class=\"row row-details\">\n                <div class=\"col-lg-12\">\n                    <div class=\"row\"> \n                        <div class=\"col-lg-12\">\n                            <label class=\"row-caption\"><span class=\"secton-label-left\">Name</span><span class=\"secton-label-right\">Arcade PipeExtractor</span> </label>\n                            <label class=\"row-caption row-caption-right\"> <span class=\"secton-label-left\">Category</span><span class=\"secton-label-right\">Architecture Analysis</span></label>\n                        </div>\n                    </div>\n            \n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"file-information p-0\">\n                                <label class=\"snippet-id-label\">11</label>\n                                <label class=\"information-label p-1 m-1 ml-2\"><span class=\"secton-label-left\">Programing Language</span><span class=\"secton-label-right\">Java</span></label>\n                                <button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Download</button>\n                                <a href=\"https://hub.docker.com/repository/docker/nsfsain/arcade-pipeextractor-service\"><button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1\"><i class=\"fab fa-docker\" aria-hidden=\"true\"></i> Docker</button></a>\n                                <a routerLink=\"/arcade-pipeextractor\"><button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1 px-3\" ><i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i> Run tool</button></a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\"> \n                            <label class=\"snippet-caption\">Tool Description</label>\n                            <a class=\"btn btn-default float-right pb-0\" href=\"#\"> Details &raquo;</a>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"snippet-codes\">\n                                <p class=\"description text-justify\">blank</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!----------------------------- mallet import-dir -------------------------->\n            <div class=\"row row-details\">\n                <div class=\"col-lg-12\">\n                    <div class=\"row\"> \n                        <div class=\"col-lg-12\">\n                            <label class=\"row-caption\"><span class=\"secton-label-left\">Name</span><span class=\"secton-label-right\">Mallet TopicModelGenerator</span> </label>\n                            <label class=\"row-caption row-caption-right\"> <span class=\"secton-label-left\">Category</span><span class=\"secton-label-right\">Architecture Analysis</span></label>\n                        </div>\n                    </div>\n            \n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"file-information p-0\">\n                                <label class=\"snippet-id-label\">12</label>\n                                <label class=\"information-label p-1 m-1 ml-2\"><span class=\"secton-label-left\">Programing Language</span><span class=\"secton-label-right\">Java</span></label>\n                                <button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Download</button>\n                                <a href=\"https://hub.docker.com/repository/docker/nsfsain/mallet-importdir-service\"><button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1\"><i class=\"fab fa-docker\" aria-hidden=\"true\"></i> Docker</button></a>\n                                <a routerLink=\"/mallet-importdir\"><button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1 px-3\" ><i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i> Run tool</button></a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\"> \n                            <label class=\"snippet-caption\">Tool Description</label>\n                            <a class=\"btn btn-default float-right pb-0\" href=\"#\"> Details &raquo;</a>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"snippet-codes\">\n                                <p class=\"description text-justify\">blank</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n             <!----------------------------- mallet train-topics -------------------------->\n             <div class=\"row row-details\">\n                <div class=\"col-lg-12\">\n                    <div class=\"row\"> \n                        <div class=\"col-lg-12\">\n                            <label class=\"row-caption\"><span class=\"secton-label-left\">Name</span><span class=\"secton-label-right\">Mallet TrainTopics</span> </label>\n                            <label class=\"row-caption row-caption-right\"> <span class=\"secton-label-left\">Category</span><span class=\"secton-label-right\">Architecture Analysis</span></label>\n                        </div>\n                    </div>\n            \n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"file-information p-0\">\n                                <label class=\"snippet-id-label\">13</label>\n                                <label class=\"information-label p-1 m-1 ml-2\"><span class=\"secton-label-left\">Programing Language</span><span class=\"secton-label-right\">Java</span></label>\n                                <button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Download</button>\n                                <a href=\"https://hub.docker.com/repository/docker/nsfsain/mallet-traintopics-service\"><button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1\"><i class=\"fab fa-docker\" aria-hidden=\"true\"></i> Docker</button></a>\n                                <a routerLink=\"/mallet-traintopics\"><button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1 px-3\" ><i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i> Run tool</button></a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\"> \n                            <label class=\"snippet-caption\">Tool Description</label>\n                            <a class=\"btn btn-default float-right pb-0\" href=\"#\"> Details &raquo;</a>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"snippet-codes\">\n                                <p class=\"description text-justify\">blank</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!----------------------------- arcade Arc -------------------------->\n            <div class=\"row row-details\">\n                <div class=\"col-lg-12\">\n                    <div class=\"row\"> \n                        <div class=\"col-lg-12\">\n                            <label class=\"row-caption\"><span class=\"secton-label-left\">Name</span><span class=\"secton-label-right\">Arcade Arc</span> </label>\n                            <label class=\"row-caption row-caption-right\"> <span class=\"secton-label-left\">Category</span><span class=\"secton-label-right\">Architecture Analysis</span></label>\n                        </div>\n                    </div>\n            \n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"file-information p-0\">\n                                <label class=\"snippet-id-label\">14</label>\n                                <label class=\"information-label p-1 m-1 ml-2\"><span class=\"secton-label-left\">Programing Language</span><span class=\"secton-label-right\">Java</span></label>\n                                <button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Download</button>\n                                <a href=\"https://hub.docker.com/repository/docker/nsfsain/arcade-arc-service\"><button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1\"><i class=\"fab fa-docker\" aria-hidden=\"true\"></i> Docker</button></a>\n                                <a routerLink=\"/arcade-arc\"><button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1 px-3\" ><i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i> Run tool</button></a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\"> \n                            <label class=\"snippet-caption\">Tool Description</label>\n                            <a class=\"btn btn-default float-right pb-0\" href=\"#\"> Details &raquo;</a>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"snippet-codes\">\n                                <p class=\"description text-justify\">blank</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!----------------------------- mallet import-file -------------------------->\n            <div class=\"row row-details\">\n                <div class=\"col-lg-12\">\n                    <div class=\"row\"> \n                        <div class=\"col-lg-12\">\n                            <label class=\"row-caption\"><span class=\"secton-label-left\">Name</span><span class=\"secton-label-right\">Mallet Import File</span> </label>\n                            <label class=\"row-caption row-caption-right\"> <span class=\"secton-label-left\">Category</span><span class=\"secton-label-right\">Architecture Analysis</span></label>\n                        </div>\n                    </div>\n            \n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"file-information p-0\">\n                                <label class=\"snippet-id-label\">15</label>\n                                <label class=\"information-label p-1 m-1 ml-2\"><span class=\"secton-label-left\">Programing Language</span><span class=\"secton-label-right\">Java</span></label>\n                                <button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Download</button>\n                                <a href=\"https://hub.docker.com/repository/docker/nsfsain/mallet-importfile-service\"><button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1\"><i class=\"fab fa-docker\" aria-hidden=\"true\"></i> Docker</button></a>\n                                <a routerLink=\"/mallet-importfile\"><button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1 px-3\" ><i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i> Run tool</button></a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\"> \n                            <label class=\"snippet-caption\">Tool Description</label>\n                            <a class=\"btn btn-default float-right pb-0\" href=\"#\"> Details &raquo;</a>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"snippet-codes\">\n                                <p class=\"description text-justify\">blank</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!----------------------------- mallet train-classifier -------------------------->\n            <div class=\"row row-details\">\n                <div class=\"col-lg-12\">\n                    <div class=\"row\"> \n                        <div class=\"col-lg-12\">\n                            <label class=\"row-caption\"><span class=\"secton-label-left\">Name</span><span class=\"secton-label-right\">Mallet Train Classifier</span> </label>\n                            <label class=\"row-caption row-caption-right\"> <span class=\"secton-label-left\">Category</span><span class=\"secton-label-right\">Architecture Analysis</span></label>\n                        </div>\n                    </div>\n            \n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"file-information p-0\">\n                                <label class=\"snippet-id-label\">16</label>\n                                <label class=\"information-label p-1 m-1 ml-2\"><span class=\"secton-label-left\">Programing Language</span><span class=\"secton-label-right\">Java</span></label>\n                                <button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Download</button>\n                                <a href=\"https://hub.docker.com/repository/docker/nsfsain/mallet-trainclassifier-service\"><button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1\"><i class=\"fab fa-docker\" aria-hidden=\"true\"></i> Docker</button></a>\n                                <a routerLink=\"/mallet-trainclassifier\"><button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1 px-3\" ><i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i> Run tool</button></a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\"> \n                            <label class=\"snippet-caption\">Tool Description</label>\n                            <a class=\"btn btn-default float-right pb-0\" href=\"#\"> Details &raquo;</a>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"snippet-codes\">\n                                <p class=\"description text-justify\">blank</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!----------------------------- mallet infer-topics -------------------------->\n            <div class=\"row row-details\">\n                <div class=\"col-lg-12\">\n                    <div class=\"row\"> \n                        <div class=\"col-lg-12\">\n                            <label class=\"row-caption\"><span class=\"secton-label-left\">Name</span><span class=\"secton-label-right\">Mallet Infer Toopic</span> </label>\n                            <label class=\"row-caption row-caption-right\"> <span class=\"secton-label-left\">Category</span><span class=\"secton-label-right\">Architecture Analysis</span></label>\n                        </div>\n                    </div>\n            \n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"file-information p-0\">\n                                <label class=\"snippet-id-label\">17</label>\n                                <label class=\"information-label p-1 m-1 ml-2\"><span class=\"secton-label-left\">Programing Language</span><span class=\"secton-label-right\">Java</span></label>\n                                <button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Download</button>\n                                <a href=\"https://hub.docker.com/repository/docker/nsfsain/mallet-infertopics-service\"><button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1\"><i class=\"fab fa-docker\" aria-hidden=\"true\"></i> Docker</button></a>\n                                <a routerLink=\"/mallet-infertopics\"><button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1 px-3\" ><i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i> Run tool</button></a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\"> \n                            <label class=\"snippet-caption\">Tool Description</label>\n                            <a class=\"btn btn-default float-right pb-0\" href=\"#\"> Details &raquo;</a>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"snippet-codes\">\n                                <p class=\"description text-justify\">blank</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!----------------------------- mallet hlda -------------------------->\n            <div class=\"row row-details\">\n                <div class=\"col-lg-12\">\n                    <div class=\"row\"> \n                        <div class=\"col-lg-12\">\n                            <label class=\"row-caption\"><span class=\"secton-label-left\">Name</span><span class=\"secton-label-right\">Mallet hlda</span> </label>\n                            <label class=\"row-caption row-caption-right\"> <span class=\"secton-label-left\">Category</span><span class=\"secton-label-right\">Architecture Analysis</span></label>\n                        </div>\n                    </div>\n            \n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"file-information p-0\">\n                                <label class=\"snippet-id-label\">18</label>\n                                <label class=\"information-label p-1 m-1 ml-2\"><span class=\"secton-label-left\">Programing Language</span><span class=\"secton-label-right\">Java</span></label>\n                                <button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Download</button>\n                                <a href=\"https://hub.docker.com/repository/docker/nsfsain/mallet-hlda-service\"><button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1\"><i class=\"fab fa-docker\" aria-hidden=\"true\"></i> Docker</button></a>\n                                <a routerLink=\"/mallet-hlda\"><button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1 px-3\" ><i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i> Run tool</button></a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\"> \n                            <label class=\"snippet-caption\">Tool Description</label>\n                            <a class=\"btn btn-default float-right pb-0\" href=\"#\"> Details &raquo;</a>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"snippet-codes\">\n                                <p class=\"description text-justify\">blank</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!----------------------------- mallet prune -------------------------->\n            <div class=\"row row-details\">\n                <div class=\"col-lg-12\">\n                    <div class=\"row\"> \n                        <div class=\"col-lg-12\">\n                            <label class=\"row-caption\"><span class=\"secton-label-left\">Name</span><span class=\"secton-label-right\">Mallet prune</span> </label>\n                            <label class=\"row-caption row-caption-right\"> <span class=\"secton-label-left\">Category</span><span class=\"secton-label-right\">Architecture Analysis</span></label>\n                        </div>\n                    </div>\n            \n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"file-information p-0\">\n                                <label class=\"snippet-id-label\">19</label>\n                                <label class=\"information-label p-1 m-1 ml-2\"><span class=\"secton-label-left\">Programing Language</span><span class=\"secton-label-right\">Java</span></label>\n                                <button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Download</button>\n                                <a href=\"https://hub.docker.com/repository/docker/nsfsain/mallet-prune-service\"><button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1\"><i class=\"fab fa-docker\" aria-hidden=\"true\"></i> Docker</button></a>\n                                <a routerLink=\"/mallet-prune\"><button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1 px-3\" ><i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i> Run tool</button></a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\"> \n                            <label class=\"snippet-caption\">Tool Description</label>\n                            <a class=\"btn btn-default float-right pb-0\" href=\"#\"> Details &raquo;</a>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"snippet-codes\">\n                                <p class=\"description text-justify\">blank</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!----------------------------- mallet split -------------------------->\n            <div class=\"row row-details\">\n                <div class=\"col-lg-12\">\n                    <div class=\"row\"> \n                        <div class=\"col-lg-12\">\n                            <label class=\"row-caption\"><span class=\"secton-label-left\">Name</span><span class=\"secton-label-right\">Mallet split</span> </label>\n                            <label class=\"row-caption row-caption-right\"> <span class=\"secton-label-left\">Category</span><span class=\"secton-label-right\">Architecture Analysis</span></label>\n                        </div>\n                    </div>\n            \n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"file-information p-0\">\n                                <label class=\"snippet-id-label\">20</label>\n                                <label class=\"information-label p-1 m-1 ml-2\"><span class=\"secton-label-left\">Programing Language</span><span class=\"secton-label-right\">Java</span></label>\n                                <button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Download</button>\n                                <a href=\"https://hub.docker.com/repository/docker/nsfsain/mallet-split-service\"><button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1\"><i class=\"fab fa-docker\" aria-hidden=\"true\"></i> Docker</button></a>\n                                <a routerLink=\"/mallet-split\"><button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1 px-3\" ><i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i> Run tool</button></a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\"> \n                            <label class=\"snippet-caption\">Tool Description</label>\n                            <a class=\"btn btn-default float-right pb-0\" href=\"#\"> Details &raquo;</a>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"snippet-codes\">\n                                <p class=\"description text-justify\">blank</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!----------------------------- codemaat vcs -------------------------->\n            <div class=\"row row-details\">\n                <div class=\"col-lg-12\">\n                    <div class=\"row\"> \n                        <div class=\"col-lg-12\">\n                            <label class=\"row-caption\"><span class=\"secton-label-left\">Name</span><span class=\"secton-label-right\">Code Maat Version Control Statistics</span> </label>\n                            <label class=\"row-caption row-caption-right\"> <span class=\"secton-label-left\">Category</span><span class=\"secton-label-right\">Version Control Statistics</span></label>\n                        </div>\n                    </div>\n            \n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"file-information p-0\">\n                                <label class=\"snippet-id-label\">21</label>\n                                <label class=\"information-label p-1 m-1 ml-2\"><span class=\"secton-label-left\">Programing Language</span><span class=\"secton-label-right\">Java</span></label>\n                                <button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Download</button>\n                                <a href=\"https://hub.docker.com/repository/docker/nsfsain/codemaat-vcs-service\"><button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1\"><i class=\"fab fa-docker\" aria-hidden=\"true\"></i> Docker</button></a>\n                                <a routerLink=\"/codemaat-vcs\"><button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1 px-3\" ><i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i> Run tool</button></a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\"> \n                            <label class=\"snippet-caption\">Tool Description</label>\n                            <a class=\"btn btn-default float-right pb-0\" href=\"#\"> Details &raquo;</a>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"snippet-codes\">\n                                <p class=\"description text-justify\">blank</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!----------------------------- git log -------------------------->\n            <div class=\"row row-details\">\n                <div class=\"col-lg-12\">\n                    <div class=\"row\"> \n                        <div class=\"col-lg-12\">\n                            <label class=\"row-caption\"><span class=\"secton-label-left\">Name</span><span class=\"secton-label-right\">Git Log</span> </label>\n                            <label class=\"row-caption row-caption-right\"> <span class=\"secton-label-left\">Category</span><span class=\"secton-label-right\">Version Control Statistics</span></label>\n                        </div>\n                    </div>\n            \n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"file-information p-0\">\n                                <label class=\"snippet-id-label\">22</label>\n                                <label class=\"information-label p-1 m-1 ml-2\"><span class=\"secton-label-left\">Programing Language</span><span class=\"secton-label-right\">Java</span></label>\n                                <button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Download</button>\n                                <a href=\"https://hub.docker.com/repository/docker/nsfsain/git-log-service\"><button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1\"><i class=\"fab fa-docker\" aria-hidden=\"true\"></i> Docker</button></a>\n                                <a routerLink=\"/git-log\"><button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1 px-3\" ><i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i> Run tool</button></a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\"> \n                            <label class=\"snippet-caption\">Tool Description</label>\n                            <a class=\"btn btn-default float-right pb-0\" href=\"#\"> Details &raquo;</a>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"snippet-codes\">\n                                <p class=\"description text-justify\">blank</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!----------------------------- linux sed -------------------------->\n            <div class=\"row row-details\">\n                <div class=\"col-lg-12\">\n                    <div class=\"row\"> \n                        <div class=\"col-lg-12\">\n                            <label class=\"row-caption\"><span class=\"secton-label-left\">Name</span><span class=\"secton-label-right\">Linux Sed</span> </label>\n                            <label class=\"row-caption row-caption-right\"> <span class=\"secton-label-left\">Category</span><span class=\"secton-label-right\">Text Steam Editor</span></label>\n                        </div>\n                    </div>\n            \n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"file-information p-0\">\n                                <label class=\"snippet-id-label\">23</label>\n                                <label class=\"information-label p-1 m-1 ml-2\"><span class=\"secton-label-left\">Platform</span><span class=\"secton-label-right\">Unix</span></label>\n                                <button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Download</button>\n                                <a href=\"https://hub.docker.com/repository/docker/nsfsain/linux-sed-service\"><button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1\"><i class=\"fab fa-docker\" aria-hidden=\"true\"></i> Docker</button></a>\n                                <a routerLink=\"/linux-sed\"><button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1 px-3\" ><i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i> Run tool</button></a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\"> \n                            <label class=\"snippet-caption\">Tool Description</label>\n                            <a class=\"btn btn-default float-right pb-0\" href=\"#\"> Details &raquo;</a>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"snippet-codes\">\n                                <p class=\"description text-justify\">blank</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!----------------------------- Clean-up Code-Maat -------------------------->\n            <div class=\"row row-details\">\n                <div class=\"col-lg-12\">\n                    <div class=\"row\"> \n                        <div class=\"col-lg-12\">\n                            <label class=\"row-caption\"><span class=\"secton-label-left\">Name</span><span class=\"secton-label-right\">Clean-up Code-Maat</span> </label>\n                            <label class=\"row-caption row-caption-right\"> <span class=\"secton-label-left\">Category</span><span class=\"secton-label-right\">Text Processing</span></label>\n                        </div>\n                    </div>\n            \n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"file-information p-0\">\n                                <label class=\"snippet-id-label\">24</label>\n                                <label class=\"information-label p-1 m-1 ml-2\"><span class=\"secton-label-left\">Programing Language</span><span class=\"secton-label-right\">Java</span></label>\n                                <button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Download</button>\n                                <a href=\"https://hub.docker.com/repository/docker/nsfsain/arcade-cleanupcodemaat-service\"><button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1\"><i class=\"fab fa-docker\" aria-hidden=\"true\"></i> Docker</button></a>\n                                <a routerLink=\"/arcade-cleanupcodemaat\"><button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1 px-3\" ><i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i> Run tool</button></a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\"> \n                            <label class=\"snippet-caption\">Tool Description</label>\n                            <a class=\"btn btn-default float-right pb-0\" href=\"#\"> Details &raquo;</a>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"snippet-codes\">\n                                <p class=\"description text-justify\">blank</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!----------------------------- arcade BatchCloneFinder -------------------------->\n            <div class=\"row row-details\">\n                <div class=\"col-lg-12\">\n                    <div class=\"row\"> \n                        <div class=\"col-lg-12\">\n                            <label class=\"row-caption\"><span class=\"secton-label-left\">Name</span><span class=\"secton-label-right\">Arcade Batch Clone Finder</span> </label>\n                            <label class=\"row-caption row-caption-right\"> <span class=\"secton-label-left\">Category</span><span class=\"secton-label-right\">Text Processing</span></label>\n                        </div>\n                    </div>\n            \n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"file-information p-0\">\n                                <label class=\"snippet-id-label\">25</label>\n                                <label class=\"information-label p-1 m-1 ml-2\"><span class=\"secton-label-left\">Programing Language</span><span class=\"secton-label-right\">Java</span></label>\n                                <button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Download</button>\n                                <a href=\"https://hub.docker.com/repository/docker/nsfsain/arcade-batchclonefinder-service\"><button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1\"><i class=\"fab fa-docker\" aria-hidden=\"true\"></i> Docker</button></a>\n                                <a routerLink=\"/arcade-batchclonefinder\"><button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1 px-3\" ><i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i> Run tool</button></a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\"> \n                            <label class=\"snippet-caption\">Tool Description</label>\n                            <a class=\"btn btn-default float-right pb-0\" href=\"#\"> Details &raquo;</a>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"snippet-codes\">\n                                <p class=\"description text-justify\">blank</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!----------------------------- arcade DepFindRunner -------------------------->\n            <div class=\"row row-details\">\n                <div class=\"col-lg-12\">\n                    <div class=\"row\"> \n                        <div class=\"col-lg-12\">\n                            <label class=\"row-caption\"><span class=\"secton-label-left\">Name</span><span class=\"secton-label-right\">Arcade DepFindRunner</span> </label>\n                            <label class=\"row-caption row-caption-right\"> <span class=\"secton-label-left\">Category</span><span class=\"secton-label-right\">Text Processing</span></label>\n                        </div>\n                    </div>\n            \n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"file-information p-0\">\n                                <label class=\"snippet-id-label\">26</label>\n                                <label class=\"information-label p-1 m-1 ml-2\"><span class=\"secton-label-left\">Programing Language</span><span class=\"secton-label-right\">Java</span></label>\n                                <button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Download</button>\n                                <a href=\"https://hub.docker.com/repository/docker/nsfsain/arcade-depfindrunner-service\"><button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1\"><i class=\"fab fa-docker\" aria-hidden=\"true\"></i> Docker</button></a>\n                                <a routerLink=\"/arcade-depfindrunner\"><button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1 px-3\" ><i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i> Run tool</button></a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\"> \n                            <label class=\"snippet-caption\">Tool Description</label>\n                            <a class=\"btn btn-default float-right pb-0\" href=\"#\"> Details &raquo;</a>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"snippet-codes\">\n                                <p class=\"description text-justify\">blank</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!----------------------------- arcade DependencyFinderProcessing -------------------------->\n            <div class=\"row row-details\">\n                <div class=\"col-lg-12\">\n                    <div class=\"row\"> \n                        <div class=\"col-lg-12\">\n                            <label class=\"row-caption\"><span class=\"secton-label-left\">Name</span><span class=\"secton-label-right\">Arcade DependencyFinderProcessing</span> </label>\n                            <label class=\"row-caption row-caption-right\"> <span class=\"secton-label-left\">Category</span><span class=\"secton-label-right\">Text Processing</span></label>\n                        </div>\n                    </div>\n            \n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"file-information p-0\">\n                                <label class=\"snippet-id-label\">27</label>\n                                <label class=\"information-label p-1 m-1 ml-2\"><span class=\"secton-label-left\">Programing Language</span><span class=\"secton-label-right\">Java</span></label>\n                                <button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Download</button>\n                                <a href=\"https://hub.docker.com/repository/docker/nsfsain/arcade-dependencyfinderprocessing-service\"><button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1\"><i class=\"fab fa-docker\" aria-hidden=\"true\"></i> Docker</button></a>\n                                <a routerLink=\"/arcade-dependencyfinderprocessing\"><button type=\"button\" class=\"btn btn-sm btn-primary-dark tactics-button p-1 px-3\" ><i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i> Run tool</button></a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\"> \n                            <label class=\"snippet-caption\">Tool Description</label>\n                            <a class=\"btn btn-default float-right pb-0\" href=\"#\"> Details &raquo;</a>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"snippet-codes\">\n                                <p class=\"description text-justify\">blank</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <!--end of col 9-->\n        </div>\n        <!--end of first row-->\n    </div>\n    <!--end of container-->\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/contact-us/contact-us.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/contact-us/contact-us.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeContactUsContactUsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"container py-8\">\n    <div class=\"row justify-content-center \">\n        <div class=\"col-md-10 col-sm-12\">\n            <div class=\"mr-xl-6\">\n                <div class=\"border-bottom border-color-1 mb-5\">\n                    <h3 class=\"section-title mb-0 pb-2 font-size-25\">Leave us a Message</h3>\n                </div>\n                <form class=\"js-validate\" novalidate=\"novalidate\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <!-- Input -->\n                            <div class=\"js-form-message mb-4\">\n                                <label class=\"form-label\">\n                                    First name\n                                    <span class=\"text-danger\">*</span>\n                                </label>\n                                <input type=\"text\" class=\"form-control\" name=\"firstName\" placeholder=\"\" aria-label=\"\" required=\"\" data-msg=\"Please enter your frist name.\" data-error-class=\"u-has-error\" data-success-class=\"u-has-success\" autocomplete=\"off\">\n                            </div>\n                            <!-- End Input -->\n                        </div>\n\n                        <div class=\"col-md-6\">\n                            <!-- Input -->\n                            <div class=\"js-form-message mb-4\">\n                                <label class=\"form-label\">\n                                    Last name\n                                    <span class=\"text-danger\">*</span>\n                                </label>\n                                <input type=\"text\" class=\"form-control\" name=\"lastName\" placeholder=\"\" aria-label=\"\" required=\"\" data-msg=\"Please enter your last name.\" data-error-class=\"u-has-error\" data-success-class=\"u-has-success\">\n                            </div>\n                            <!-- End Input -->\n                        </div>\n\n                        <div class=\"col-md-12\">\n                            <!-- Input -->\n                            <div class=\"js-form-message mb-4\">\n                                <label class=\"form-label\">\n                                    Subject\n                                </label>\n                                <input type=\"text\" class=\"form-control\" name=\"Subject\" placeholder=\"\" aria-label=\"\" data-msg=\"Please enter subject.\" data-error-class=\"u-has-error\" data-success-class=\"u-has-success\">\n                            </div>\n                            <!-- End Input -->\n                        </div>\n                        <div class=\"col-md-12\">\n                            <div class=\"js-form-message mb-4\">\n                                <label class=\"form-label\">\n                                    Your Message\n                                </label>\n\n                                <div class=\"input-group\">\n                                    <textarea class=\"form-control p-5\" rows=\"4\" name=\"text\" placeholder=\"\"></textarea>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"mb-3\">\n                        <button type=\"submit\" class=\"btn btn-primary-dark-w px-5\">Send Message</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/git/git-log/git-log.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/git/git-log/git-log.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeGitGitLogGitLogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container py-8\">\n    <div class=\"card border-dark mb-3\">\n        <div class=\"card-header text-center bg-gray-3  py-0\" style=\"font-family:Georgia, 'Times New Roman', Times, serif\"> \n            <h4 class=\"card-title mt-2\">Git Log</h4>\n        </div>\n\n        <div *ngIf=\"!auth.isLoggedIn()\">\n            <a style=\"font-family:Georgia, 'Times New Roman', Times, serif; color:black;\" routerLink=\"/login\">&nbsp;Please Sign In.</a>\n        </div>\n        <div *ngIf=\"auth.isLoggedIn()\"> \n            <div class=\"row p-6 justify-content-center\" *ngIf=\"!results\">\n                <div *ngIf=\"isLoading\" style=\"text-align: center;\">\n                    <app-loading-spinner></app-loading-spinner>\n                </div>\n                <div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\" *ngIf=\"error\">\n                    <strong>Error!</strong> {{ error }}\n                </div>\n                <div *ngIf=\"!isLoading && !submitted\"  class=\"col-md-12 p-4\">\n                    <form  [formGroup]=\"dataForm\" (ngSubmit)=\"onSubmit()\">\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                               \n                               <label class=\"form-label\">(Input) Git Repo URL<span class=\"text-danger\">:</span></label>\n                                <input name=\"gitRepoURL\" type=\"text\" class=\"form-control\" formControlName=\"gitRepoURL\" [ngClass]=\"{ 'is-invalid': submitted &&  f.gitRepoURL.errors}\">                                \n                                <div *ngIf=\"submitted && f.gitRepoURL.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.gitRepoURL.errors.required\">Required topic model input</div>\n                                </div>                                  \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Shallow Since (YYYY-MM-DD)<span class=\"text-danger\">:</span></label>\n                                <input name=\"shallowSince\" type=\"text\" class=\"form-control\" formControlName=\"shallowSince\" [ngClass]=\"{ 'is-invalid': submitted &&  f.shallowSince.errors}\">\n                                <div *ngIf=\"submitted && f.shallowSince.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.shallowSince.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <label class=\"form-label\">git log options <span class=\"text-danger\">:</span></label>  \n                        <div class=\"form-row\">                                     \n                            <div class=\"col form-group\">                                \n                                <div class=\"icheck-primary\"><input #follow type=\"checkbox\" [checked]=\"false\" formControlName=\"follow\" id=\"follow\" (change)=\"followCheckbox(follow.checked)\"><label for=\"follow\">--follow</label></div>\n                            </div> \n                            <div class=\"col form-group\">\n                                <div class=\"icheck-primary\"><input #source type=\"checkbox\" [checked]=\"false\" formControlName=\"source\" id=\"source\" (change)=\"sourceCheckbox(source.checked)\"><label for=\"source\">--source</label></div>\n                            </div>  \n                            <div class=\"col form-group\">\n                                <div class=\"icheck-primary\"><input #fulldiff type=\"checkbox\" [checked]=\"false\" formControlName=\"fulldiff\" id=\"fulldiff\" (change)=\"fulldiffCheckbox(fulldiff.checked)\"><label for=\"fulldiff\">--full-diff</label></div>\n                            </div> \n                            <div class=\"col form-group\">\n                                <div class=\"icheck-primary\"><input #logsize type=\"checkbox\" [checked]=\"false\" formControlName=\"logsize\" id=\"logsize\" (change)=\"logsizeCheckbox(logsize.checked)\"><label for=\"logsize\">--log-size</label></div>\n                            </div>                             \n                        </div>\n\n                        <label class=\"form-label\">more options<span class=\"text-danger\">:</span></label>  \n                        <div class=\"form-row\">                                     \n                            <div class=\"col form-group\">                                \n                                <div class=\"icheck-primary\"><input #numstat type=\"checkbox\" [checked]=\"false\" formControlName=\"numstat\" id=\"numstat\" (change)=\"numstatCheckbox(numstat.checked)\"><label for=\"numstat\">--numstat</label></div>\n                            </div> \n                            <div class=\"col form-group\">\n                                <div class=\"icheck-primary\"><input #norenames type=\"checkbox\" [checked]=\"false\" formControlName=\"norenames\" id=\"norenames\" (change)=\"norenamesCheckbox(norenames.checked)\"><label for=\"norenames\">--no-renames</label></div>\n                            </div>  \n                            <div class=\"col form-group\">\n                                <div class=\"icheck-primary\"><input #allmatch type=\"checkbox\" [checked]=\"false\" formControlName=\"allmatch\" id=\"allmatch\" (change)=\"allmatchCheckbox(allmatch.checked)\"><label for=\"allmatch\">--all-match</label></div>\n                            </div> \n                            <div class=\"col form-group\">\n                                <div class=\"icheck-primary\"><input #invertgrep type=\"checkbox\" [checked]=\"false\" formControlName=\"invertgrep\" id=\"invertgrep\" (change)=\"invertgrepCheckbox(invertgrep.checked)\"><label for=\"invertgrep\">--invert-grep</label></div>\n                            </div>\n                            <div class=\"col form-group\">                                \n                                <div class=\"icheck-primary\"><input #regexpIgnorecase type=\"checkbox\" [checked]=\"false\" formControlName=\"regexpIgnorecase\" id=\"regexpIgnorecase\" (change)=\"regexpIgnorecaseCheckbox(regexpIgnorecase.checked)\"><label for=\"regexpIgnorecase\">--regexp-ignore-case</label></div>\n                            </div> \n                            <div class=\"col form-group\">\n                                <div class=\"icheck-primary\"><input #basicRegexp type=\"checkbox\" [checked]=\"false\" formControlName=\"basicRegexp\" id=\"basicRegexp\" (change)=\"basicRegexpCheckbox(basicRegexp.checked)\"><label for=\"basicRegexp\">--basic-regexp</label></div>\n                            </div>  \n                            <div class=\"col form-group\">\n                                <div class=\"icheck-primary\"><input #extendedRegexp type=\"checkbox\" [checked]=\"false\" formControlName=\"extendedRegexp\" id=\"extendedRegexp\" (change)=\"extendedRegexpCheckbox(extendedRegexp.checked)\"><label for=\"extendedRegexp\">--extended-regexp</label></div>\n                            </div> \n                            \n                        </div>\n                        <div class=\"form-row\">   \n                            <div class=\"col form-group\">\n                                <div class=\"icheck-primary\"><input #invertgrep type=\"checkbox\" [checked]=\"false\" formControlName=\"fixedstrings\" id=\"fixedstrings\" (change)=\"fixedstringsCheckbox(fixedstrings.checked)\"><label for=\"fixedstrings\">--fixed-strings</label></div>\n                            </div>   \n                            <div class=\"col form-group\">\n                                <div class=\"icheck-primary\"><input #perlRegexp type=\"checkbox\" [checked]=\"false\" formControlName=\"perlRegexp\" id=\"perlRegexp\" (change)=\"perlRegexpCheckbox(perlRegexp.checked)\"><label for=\"perlRegexp\">--perl-regexp</label></div>\n                            </div>  \n                            <div class=\"col form-group\">\n                                <div class=\"icheck-primary\"><input #removeEmpty type=\"checkbox\" [checked]=\"false\" formControlName=\"removeEmpty\" id=\"removeEmpty\" (change)=\"removeEmptyCheckbox(removeEmpty.checked)\"><label for=\"removeEmpty\">--remove-empty</label></div>\n                            </div> \n                            <div class=\"col form-group\">\n                                <div class=\"icheck-primary\"><input #merges type=\"checkbox\" [checked]=\"false\" formControlName=\"merges\" id=\"merges\" (change)=\"mergesCheckbox(merges.checked)\"><label for=\"merges\">--merges</label></div>\n                            </div>\n                            <div class=\"col form-group\">                                \n                                <div class=\"icheck-primary\"><input #nominParents type=\"checkbox\" [checked]=\"false\" formControlName=\"nominParents\" id=\"nominParents\" (change)=\"nominParentsCheckbox(nominParents.checked)\"><label for=\"nominParents\">--no-min-parents</label></div>\n                            </div> \n                            <div class=\"col form-group\">\n                                <div class=\"icheck-primary\"><input #nomaxParents type=\"checkbox\" [checked]=\"false\" formControlName=\"nomaxParents\" id=\"nomaxParents\" (change)=\"nomaxParentsCheckbox(nomaxParents.checked)\"><label for=\"nomaxParents\">--no-max-parents</label></div>\n                            </div>  \n                            <div class=\"col form-group\">\n                                <div class=\"icheck-primary\"><input #firstParent type=\"checkbox\" [checked]=\"false\" formControlName=\"firstParent\" id=\"firstParent\" (change)=\"firstParentCheckbox(firstParent.checked)\"><label for=\"firstParent\">--first-parent</label></div>\n                            </div> \n                            \n                        </div>\n                        <div class=\"form-row\">  \n                            <div class=\"col form-group\">\n                                <div class=\"icheck-primary\"><input #all type=\"checkbox\" [checked]=\"false\" formControlName=\"all\" id=\"all\" (change)=\"allCheckbox(all.checked)\"><label for=\"all\">--all</label></div>\n                            </div>  \n                            <div class=\"col form-group\">\n                                <div class=\"icheck-primary\"><input #reflog type=\"checkbox\" [checked]=\"false\" formControlName=\"reflog\" id=\"reflog\" (change)=\"reflogCheckbox(reflog.checked)\"><label for=\"reflog\">--reflog</label></div>\n                            </div> \n                            <div class=\"col form-group\">                                \n                                <div class=\"icheck-primary\"><input #alternateRefs type=\"checkbox\" [checked]=\"false\" formControlName=\"alternateRefs\" id=\"alternateRefs\" (change)=\"alternateRefsCheckbox(alternateRefs.checked)\"><label for=\"alternateRefs\">--alternate-refs</label></div>\n                            </div> \n                            <div class=\"col form-group\">\n                                <div class=\"icheck-primary\"><input #singleworktree type=\"checkbox\" [checked]=\"false\" formControlName=\"singleworktree\" id=\"singleworktree\" (change)=\"singleworktreeCheckbox(singleworktree.checked)\"><label for=\"singleworktree\">--single-worktree</label></div>\n                            </div>  \n                            <div class=\"col form-group\">\n                                <div class=\"icheck-primary\"><input #ignoremissing type=\"checkbox\" [checked]=\"false\" formControlName=\"ignoremissing\" id=\"ignoremissing\" (change)=\"ignoremissingCheckbox(ignoremissing.checked)\"><label for=\"ignoremissing\">--ignore-missing</label></div>\n                            </div> \n                            <div class=\"col form-group\">\n                                <div class=\"icheck-primary\"><input #boundary type=\"checkbox\" [checked]=\"false\" formControlName=\"boundary\" id=\"boundary\" (change)=\"boundaryCheckbox(boundary.checked)\"><label for=\"boundary\">--boundary</label></div>\n                            </div> \n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Optional Paramareters (i.e. --date=short --pretty=format:--%h--%ad--%aN)<span class=\"text-danger\">:</span></label>\n                                <input name=\"optionalParams\" type=\"text\" class=\"form-control\" formControlName=\"optionalParams\" [ngClass]=\"{ 'is-invalid': submitted &&  f.optionalParams.errors}\">\n                                <div *ngIf=\"submitted && f.optionalParams.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.optionalParams.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n                        \n                        \n                        <br>\n                        <hr>\n                        <div class=\"form-group mt-5\">\n                            <button type=\"submit\" class=\"btn btn-primary-dark-w min-width-200\"> Submit  </button>\n                            <button type=\"button\" class=\"btn btn-primary-dark-w float-right min-width-200\"> Cancel  </button>\n                        </div> <!-- form-group// --> \n                    </form>\n                </div>\n            </div>\n\n            <div class=\"row py-18 px-0 justify-content-center m-2\"  *ngIf=\"results\">\n                <div class=\"col-md-8 bg-gray-3 py-3\"> \n                    <strong>Success! {{ results }}</strong>\n                </div>\n                <!-- <div class=\"col-md-4 \"> \n                    <button type=\"button\" class=\"btn btn-primary-dark-w float-right min-width-200 min-height-40\" (click)=\"downloadResults()\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Downlod Results </button>\n                </div> -->\n            </div>\n        </div>\n\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/header/footer/footer.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/header/footer/footer.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHeaderFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- ========== FOOTER ========== -->\n<footer class=\"mt-10\">\n    <!-- Footer-newsletter -->\n    <div class=\"bg-primary py-3\">\n        <div class=\"container\">\n            <div class=\"row align-items-center\">\n                <div class=\"col-lg-7 mb-md-3 mb-lg-0\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-auto flex-horizontal-center\">\n                            <i class=\"ec ec-newsletter \" style=\"font-size:2.12525rem;\"></i>\n                            <h2 class=\"font-size-20 mb-0 ml-3\">Sign up to Newsletter</h2>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-5\">\n                    <!-- Subscribe Form -->\n                    <form class=\"js-validate js-form-message\">\n                        <label class=\"sr-only\" for=\"subscribeSrEmail\">Email address</label>\n                        <div class=\"input-group input-group-pill\">\n                            <input type=\"email\" class=\"form-control border-0 height-40\" name=\"email\" id=\"subscribeSrEmail\" placeholder=\"Email address\" aria-label=\"Email address\" aria-describedby=\"subscribeButton\" required\n                            data-msg=\"Please enter a valid email address.\">\n                            <div class=\"input-group-append\">\n                                <button type=\"submit\" class=\"btn btn-dark btn-sm-wide height-40 py-2\" id=\"subscribeButton\">Sign Up</button>\n                            </div>\n                        </div>\n                    </form>\n                    <!-- End Subscribe Form -->\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- End Footer-newsletter -->\n    <!-- Footer-bottom-widgets -->\n    <div class=\"pt-8 pb-4 bg-gray-13\">\n        <div class=\"container mt-1\">\n            <div class=\"row\">\n                <div class=\"col-lg-5\">\n                    <div class=\"my-4 my-md-4\">\n                        <ul class=\"list-inline mb-0 opacity-7\">\n                            <li class=\"list-inline-item mr-0\">\n                                <a class=\"btn font-size-20 btn-icon btn-soft-dark btn-bg-transparent rounded-circle\" href=\"#\">\n                                    <span class=\"fab fa-facebook-f btn-icon__inner\"></span>\n                                </a>\n                            </li>\n                            <li class=\"list-inline-item mr-0\">\n                                <a class=\"btn font-size-20 btn-icon btn-soft-dark btn-bg-transparent rounded-circle\" href=\"#\">\n                                    <span class=\"fab fa-google btn-icon__inner\"></span>\n                                </a>\n                            </li>\n                            <li class=\"list-inline-item mr-0\">\n                                <a class=\"btn font-size-20 btn-icon btn-soft-dark btn-bg-transparent rounded-circle\" href=\"#\">\n                                    <span class=\"fab fa-twitter btn-icon__inner\"></span>\n                                </a>\n                            </li>\n                            <li class=\"list-inline-item mr-0\">\n                                <a class=\"btn font-size-20 btn-icon btn-soft-dark btn-bg-transparent rounded-circle\" href=\"#\">\n                                    <span class=\"fab fa-github btn-icon__inner\"></span>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"col-lg-7\">\n                    <div class=\"row\">\n                        <div class=\"col-12 col-md mb-4 mb-md-0\">\n                            <!-- <h6 class=\"mb-3 font-weight-bold\">Find Links</h6> -->\n                            <!-- List Group -->\n                            <!-- <ul class=\"list-group list-group-flush list-group-borderless mb-0 list-group-transparent\">\n                                <li><a class=\"list-group-item list-group-item-action\" href=\"#\">Datasets</a></li>\n                                <li><a class=\"list-group-item list-group-item-action\" href=\"#\">Tools</a></li>\n                                <li><a class=\"list-group-item list-group-item-action\" href=\"#\">Resources</a></li>\n                                <li><a class=\"list-group-item list-group-item-action\" href=\"#\">Research</a></li>\n                                <li><a class=\"list-group-item list-group-item-action\" href=\"#\">Sain Team</a></li>\n                            </ul> -->\n                            <!-- End List Group -->\n                        </div>\n\n                        <div class=\"col-12 col-md mb-4 mb-md-0\">    \n                            <h6 class=\"mb-3 font-weight-bold\">Find Links</h6>                       \n                            <!-- List Group -->\n                            <ul class=\"list-group list-group-flush list-group-borderless mb-0 list-group-transparent\">                                \n                                <li><a class=\"list-group-item list-group-item-action\" href=\"http://sain.usc.edu/\">Website</a></li>\n                                <li><a class=\"list-group-item list-group-item-action\" href=\"#\">Contributors</a></li>\n                                <li><a class=\"list-group-item list-group-item-action\" href=\"#\">Sponsors</a></li>\n                                <li><a class=\"list-group-item list-group-item-action\" href=\"#\">Universities</a></li>                                \n                            </ul>\n                            <!-- End List Group -->\n                        </div>\n\n                        <div class=\"col-12 col-md mb-4 mb-md-0\">\n                            <h6 class=\"mb-3 font-weight-bold\">User Links</h6>\n                            <!-- List Group -->\n                            <ul class=\"list-group list-group-flush list-group-borderless mb-0 list-group-transparent\">\n                                <li><a class=\"list-group-item list-group-item-action\" href=\"#\">My Account</a></li>                                \n                                <li><a class=\"list-group-item list-group-item-action\" href=\"#\">Articles and Blogs</a></li>\n                                <li><a class=\"list-group-item list-group-item-action\" href=\"#\">FAQs</a></li>\n                            </ul>\n                            <!-- End List Group -->\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- End Footer-bottom-widgets -->\n    <!-- Footer-copy-right -->\n    <div class=\"bg-gray-14 py-2\">\n        <div class=\"container\">\n            <div class=\"flex-center-between d-block d-md-flex\">\n                <div class=\"mb-3 mb-md-0\">© <a href=\"#\" class=\"font-weight-bold text-gray-90\">Sain</a> - All rights Reserved</div>\n            </div>\n        </div>\n    </div>\n    <!-- End Footer-copy-right -->\n</footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/header/header-one/header-one.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/header/header-one/header-one.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHeaderHeaderOneHeaderOneComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"app\" class=\"container\">\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-transparent\">\n      <a class=\"navbar-brand\" href=\"#\"><img src=\"assets/img/logo.png\" class=\"logo\"></a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div id=\"navbarNavDropdown\" class=\"navbar-collapse collapse\">\n          <ul class=\"navbar-nav mr-auto\">\n              <li class=\"nav-item\">\n                  <a class=\"nav-link nav-link-local pl-2\" routerLink=\"/componentslist\">SAIN Components </a>\n              </li>            \n              <li class=\"nav-item\">\n                <a class=\"nav-link nav-link-local pl-2\" routerLink=\"/contactus\">Contact Us</a>\n              </li>\n          </ul>\n\n        \n        <ul class=\"nav navbar-nav navbar-right\">\n          \n          <li class=\"nav-item\" *ngIf=\"!auth.isLoggedIn()\">\n            <a class=\"nav-link nav-link-local \" routerLink=\"/register\"><i class=\"fa fa-fw fa-user\"></i>Register</a>\n          </li>\n          <li class=\"nav-item\" *ngIf=\"!auth.isLoggedIn()\">\n            <a class=\"nav-link nav-link-local \" routerLink=\"/login\">Sign In</a>\n          </li>\n          <li class=\"nav-item\" *ngIf=\"auth.isLoggedIn()\">\n            <a class=\"nav-link nav-link-local \" routerLink=\"/profile\"><i class=\"fa fa-fw fa-user\"></i>{{ auth.getUserDetails()?.firstname }}</a>\n          </li>\n          <li class=\"nav-item\" *ngIf=\"auth.isLoggedIn()\">\n            <a class=\"nav-link nav-link-local \" routerLink=\"\" (click)=\"auth.logout()\">log out</a>\n          </li>\n        </ul>\n      </div>\n  </nav>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/header/header-two/header-two.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/header/header-two/header-two.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHeaderHeaderTwoHeaderTwoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg navbar-light bg-primary min-height-45  py-0\">\r\n    <div class=\"container\">\r\n      <div style=\"font-weight:bold;text-align:center;font-size:18px;\">SAIN Microservices Docker Distribution</div>\r\n           \r\n    </div>\r\n</nav>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/header/header.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/header/header.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n        <app-header-one></app-header-one>\n        <app-header-two></app-header-two>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/linux/linux-sed/linux-sed.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/linux/linux-sed/linux-sed.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeLinuxLinuxSedLinuxSedComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container py-8\">\n    <div class=\"card border-dark mb-3\">\n        <div class=\"card-header text-center bg-gray-3  py-0\" style=\"font-family:Georgia, 'Times New Roman', Times, serif\"> \n            <h4 class=\"card-title mt-2\">Linux Text Stream Editor</h4>\n        </div>\n\n        <div *ngIf=\"!auth.isLoggedIn()\">\n            <a style=\"font-family:Georgia, 'Times New Roman', Times, serif; color:black;\" routerLink=\"/login\">&nbsp;Please Sign In.</a>\n        </div>\n        <div *ngIf=\"auth.isLoggedIn()\"> \n            <div class=\"row p-6 justify-content-center\" *ngIf=\"!results\">\n                <div *ngIf=\"isLoading\" style=\"text-align: center;\">\n                    <app-loading-spinner></app-loading-spinner>\n                </div>\n                <div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\" *ngIf=\"error\">\n                    <strong>Error!</strong> {{ error }}\n                </div>\n                <div *ngIf=\"!isLoading && !submitted\"  class=\"col-md-12 p-4\">                    \n                    <form  [formGroup]=\"dataForm\" (ngSubmit)=\"onSubmit()\">                       \n                        \n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">(Input) Input File Path<span class=\"text-danger\">:</span></label>\n                                <input name=\"inputFile\" type=\"text\" class=\"form-control\" formControlName=\"inputFile\" [ngClass]=\"{ 'is-invalid': submitted &&  f.inputFile.errors}\">\n                                <div *ngIf=\"submitted && f.inputFile.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.inputFile.errors.required\">Required field!</div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">Sed Command<span class=\"text-danger\">:</span></label>\n                                <input name=\"sedCommand\" type=\"text\" class=\"form-control\" formControlName=\"sedCommand\" [ngClass]=\"{ 'is-invalid': submitted &&  f.sedCommand.errors}\">\n                                <div *ngIf=\"submitted && f.sedCommand.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.sedCommand.errors.required\">Required field!</div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">Extended Regular Expression<span class=\"text-danger\">:</span></label>\n                                <input name=\"extendedRegex\" type=\"text\" class=\"form-control\" formControlName=\"extendedRegex\" [ngClass]=\"{ 'is-invalid': submitted &&  f.extendedRegex.errors}\">\n                                <div *ngIf=\"submitted && f.extendedRegex.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.extendedRegex.errors.required\">Required field!</div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">Sed Script File<span class=\"text-danger\">:</span></label>\n                                <input name=\"sedCommandFile\" type=\"text\" class=\"form-control\" formControlName=\"sedCommandFile\" [ngClass]=\"{ 'is-invalid': submitted &&  f.sedCommandFile.errors}\">\n                                <div *ngIf=\"submitted && f.sedCommandFile.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.sedCommandFile.errors.required\">Required field!</div>\n                                </div>\n                            </div>\n                        </div>\n\n\n\n                        <br>\n                        <hr>\n                        <div class=\"form-group mt-5\">\n                            <button type=\"submit\" class=\"btn btn-primary-dark-w min-width-200\"> Submit  </button>\n                            <button type=\"button\" class=\"btn btn-primary-dark-w float-right min-width-200\"> Cancel  </button>\n                        </div> <!-- form-group// --> \n                    </form>\n                </div>\n            </div>\n\n            <div class=\"row py-18 px-0 justify-content-center m-2\"  *ngIf=\"results\">\n                <div class=\"col-md-8 bg-gray-3 py-3\"> \n                    <strong>Success! {{ results }}</strong>\n                </div>\n                <!-- <div class=\"col-md-4 \"> \n                    <button type=\"button\" class=\"btn btn-primary-dark-w float-right min-width-200 min-height-40\" (click)=\"downloadResults()\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Downlod Results </button>\n                </div> -->\n            </div>\n        </div>\n\n    </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/mallet/mallet-hlda/mallet-hlda.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/mallet/mallet-hlda/mallet-hlda.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeMalletMalletHldaMalletHldaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container py-8\">\n    <div class=\"card border-dark mb-3\">\n        <div class=\"card-header text-center bg-gray-3  py-0\" style=\"font-family:Georgia, 'Times New Roman', Times, serif\"> \n            <h4 class=\"card-title mt-2\">Mallet hlda</h4>\n        </div>\n\n        <div *ngIf=\"!auth.isLoggedIn()\">\n            <a style=\"font-family:Georgia, 'Times New Roman', Times, serif; color:black;\" routerLink=\"/login\">&nbsp;Please Sign In.</a>\n        </div>\n        <div *ngIf=\"auth.isLoggedIn()\"> \n            <div class=\"row p-6 justify-content-center\" *ngIf=\"!results\">\n                <div *ngIf=\"isLoading\" style=\"text-align: center;\">\n                    <app-loading-spinner></app-loading-spinner>\n                </div>\n                <div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\" *ngIf=\"error\">\n                    <strong>Error!</strong> {{ error }}\n                </div>\n                <div *ngIf=\"!isLoading && !submitted\"  class=\"col-md-12 p-4\">\n                    <form  [formGroup]=\"dataForm\" (ngSubmit)=\"onSubmit()\">\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                               \n                               <label class=\"form-label\">(Input) Input File<span class=\"text-danger\">:</span></label>\n                                <input name=\"inputFile\" type=\"text\" class=\"form-control\" formControlName=\"inputFile\" [ngClass]=\"{ 'is-invalid': submitted &&  f.inputFile.errors}\">                                \n                                <div *ngIf=\"submitted && f.inputFile.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.inputFile.errors.required\">Required topic model input</div>\n                                </div>                                  \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Prefix code ('JAVA CODE')<span class=\"text-danger\">:</span></label>\n                                <input name=\"prefixCode\" type=\"text\" class=\"form-control\" formControlName=\"prefixCode\" [ngClass]=\"{ 'is-invalid': submitted &&  f.prefixCode.errors}\">\n                                <div *ngIf=\"submitted && f.prefixCode.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.prefixCode.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                               \n                               <label class=\"form-label\">Testing File: from which to read the list of instances for held-out likelihood calculation<span class=\"text-danger\">:</span></label>\n                                <input name=\"testingFile\" type=\"text\" class=\"form-control\" formControlName=\"testingFile\" [ngClass]=\"{ 'is-invalid': submitted &&  f.testingFile.errors}\">                                \n                                <div *ngIf=\"submitted && f.testingFile.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.testingFile.errors.required\">Required field!</div>\n                                </div>                                  \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Output State Interval: number of iterations between writing the sampling state to a text file<span class=\"text-danger\">:</span></label>\n                                <input name=\"outputStateInterval\" type=\"text\" class=\"form-control\" formControlName=\"outputStateInterval\" [ngClass]=\"{ 'is-invalid': submitted &&  f.outputStateInterval.errors}\">\n                                <div *ngIf=\"submitted && f.outputStateInterval.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.outputStateInterval.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Random Seed<span class=\"text-danger\">:</span></label>\n                                <input name=\"randomSeed\" type=\"text\" class=\"form-control\" formControlName=\"randomSeed\" [ngClass]=\"{ 'is-invalid': submitted &&  f.randomSeed.errors}\">\n                                <div *ngIf=\"submitted && f.randomSeed.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.randomSeed.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>   \n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">Show Progress (default is true)<span class=\"text-danger\">:</span></label>                               \n                                <select formControlName=\"showProgress\" id=\"inputState\" class=\"form-control\"\n                                [ngClass]=\"{'is-invalid': submitted && f.showProgress.errors}\" >\n                                    <option>true</option> \n                                    <option>false</option>   \n                                </select>                                \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Show Topics Interval (number of iterations between printing a brief summary of the topics so far)<span class=\"text-danger\">:</span></label>\n                                <input name=\"showTopicsInterval\" type=\"text\" class=\"form-control\" formControlName=\"showTopicsInterval\" [ngClass]=\"{ 'is-invalid': submitted &&  f.showTopicsInterval.errors}\">\n                                <div *ngIf=\"submitted && f.showTopicsInterval.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.showTopicsInterval.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                               \n                               <label class=\"form-label\">Number of top (most probable) words for each topic (default is 20))<span class=\"text-danger\">:</span></label>\n                                <input name=\"numtopwords\" type=\"text\" class=\"form-control\" formControlName=\"numtopwords\" [ngClass]=\"{ 'is-invalid': submitted &&  f.numtopwords.errors}\">                                \n                                <!-- <div *ngIf=\"submitted && f.numtopwords.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.numtopwords.errors.required\">Required inferencer filename</div>\n                                </div>                                   -->\n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                               \n                               <label class=\"form-label\">Num Levels: The number of levels in the tree<span class=\"text-danger\">:</span></label>\n                                <input name=\"numLevels\" type=\"text\" class=\"form-control\" formControlName=\"numLevels\" [ngClass]=\"{ 'is-invalid': submitted &&  f.numLevels.errors}\">                                \n                                <!-- <div *ngIf=\"submitted && f.numLevels.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.numLevels.errors.required\">Required inferencer filename</div>\n                                </div>                                   -->\n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Alpha parameter: smoothing over topic distribution<span class=\"text-danger\">:</span></label>\n                                <input name=\"alpha\" type=\"text\" class=\"form-control\" formControlName=\"alpha\" [ngClass]=\"{ 'is-invalid': submitted &&  f.alpha.errors}\">\n                                <!-- <div *ngIf=\"submitted && f.alpha.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.alpha.errors.required\">Required field!</div>\n                                </div>                             -->\n                            </div>\n                        </div>     \n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Gamma parameter: smoothing over topic distribution<span class=\"text-danger\">:</span></label>\n                                <input name=\"gamma\" type=\"text\" class=\"form-control\" formControlName=\"gamma\" [ngClass]=\"{ 'is-invalid': submitted &&  f.gamma.errors}\">\n                                <!-- <div *ngIf=\"submitted && f.gamma.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.gamma.errors.required\">Required field!</div>\n                                </div>                             -->\n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Eta parameter: smoothing over topic-word distributions<span class=\"text-danger\">:</span></label>\n                                <input name=\"eta\" type=\"text\" class=\"form-control\" formControlName=\"eta\" [ngClass]=\"{ 'is-invalid': submitted &&  f.eta.errors}\">\n                                <div *ngIf=\"submitted && f.eta.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.eta.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <br>\n                        <hr>\n                        <div class=\"form-group mt-5\">\n                            <button type=\"submit\" class=\"btn btn-primary-dark-w min-width-200\"> Submit  </button>\n                            <button type=\"button\" class=\"btn btn-primary-dark-w float-right min-width-200\"> Cancel  </button>\n                        </div> <!-- form-group// --> \n                    </form>\n                </div>\n            </div>\n\n            <div class=\"row py-18 px-0 justify-content-center m-2\"  *ngIf=\"results\">\n                <div class=\"col-md-8 bg-gray-3 py-3\"> \n                    <strong>Success! {{ results }}</strong>\n                </div>\n                <!-- <div class=\"col-md-4 \"> \n                    <button type=\"button\" class=\"btn btn-primary-dark-w float-right min-width-200 min-height-40\" (click)=\"downloadResults()\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Downlod Results </button>\n                </div> -->\n            </div>\n        </div>\n\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/mallet/mallet-importdir/mallet-importdir.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/mallet/mallet-importdir/mallet-importdir.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeMalletMalletImportdirMalletImportdirComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container py-8\">\n    <div class=\"card border-dark mb-3\">\n        <div class=\"card-header text-center bg-gray-3  py-0\" style=\"font-family:Georgia, 'Times New Roman', Times, serif\"> \n            <h4 class=\"card-title mt-2\">Mallet Import Dir</h4>\n        </div>\n\n        <div *ngIf=\"!auth.isLoggedIn()\">\n            <a style=\"font-family:Georgia, 'Times New Roman', Times, serif; color:black;\" routerLink=\"/login\">&nbsp;Please Sign In.</a>\n        </div>\n        <div *ngIf=\"auth.isLoggedIn()\"> \n            <div class=\"row p-6 justify-content-center\" *ngIf=\"!results\">\n                <div *ngIf=\"isLoading\" style=\"text-align: center;\">\n                    <app-loading-spinner></app-loading-spinner>\n                </div>\n                <div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\" *ngIf=\"error\">\n                    <strong>Error!</strong> {{ error }}\n                </div>\n                <div *ngIf=\"!isLoading && !submitted\"  class=\"col-md-12 p-4\">\n                    <form  [formGroup]=\"dataForm\" (ngSubmit)=\"onSubmit()\">\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                               \n                               <label class=\"form-label\">(Input) Source Dir Path<span class=\"text-danger\">:</span></label>\n                                <input name=\"srcDir\" type=\"text\" class=\"form-control\" formControlName=\"srcDir\" [ngClass]=\"{ 'is-invalid': submitted &&  f.srcDir.errors}\">                                \n                                <div *ngIf=\"submitted && f.srcDir.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.srcDir.errors.required\">Required source dir input</div>\n                                </div>                                  \n                            </div>\n                        </div>\n                       \n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">(Output) Output File Path<span class=\"text-danger\">:</span></label>\n                                <input name=\"outputFile\" type=\"text\" class=\"form-control\" formControlName=\"outputFile\" [ngClass]=\"{ 'is-invalid': submitted &&  f.outputFile.errors}\">\n                                <!-- <label class=\"custom-file-label\" for=\"dsmfiles\">{{structurl_DSM}}</label> -->\n                                <div *ngIf=\"submitted && f.outputFile.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.outputFile.errors.required\">Required output location</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">Remove topwords - remove default list of common English \"stop words\" from text<span class=\"text-danger\">:</span></label>                               \n                                <select formControlName=\"removeStopwords\" id=\"inputState\" class=\"form-control\"\n                                [ngClass]=\"{'is-invalid': submitted && f.removeStopwords.errors}\" >\n                                    <option>TRUE</option>\n                                    <option>FALSE</option>                                   \n                                </select>\n                                <!-- <div *ngIf=\"submitted && f.removeStopwords.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"submitted && f.removeStopwords.errors\">Log Type is required</div>\n                                </div> -->\n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">Keep Sequence - final data will be a FeatureSequenceWithBigrams rather than a FeatureVector<span class=\"text-danger\">:</span></label>                               \n                                <select formControlName=\"keepSequence\" id=\"inputState\" class=\"form-control\"\n                                [ngClass]=\"{'is-invalid': submitted && f.keepSequence.errors}\" >\n                                    <option>TRUE</option> \n                                    <option>FALSE</option>   \n                                </select>\n                                <!-- <div *ngIf=\"submitted && f.keepSequence.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"submitted && f.keepSequence.errors\">Log Type is required</div>\n                                </div> -->\n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Prefix code ('JAVA CODE')<span class=\"text-danger\">:</span></label>\n                                <input name=\"prefixCode\" type=\"text\" class=\"form-control\" formControlName=\"prefixCode\" [ngClass]=\"{ 'is-invalid': submitted &&  f.prefixCode.errors}\">\n                                <div *ngIf=\"submitted && f.prefixCode.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.prefixCode.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                         <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">Preserve Case<span class=\"text-danger\">:</span></label>                               \n                                <select formControlName=\"preserveCase\" id=\"inputState\" class=\"form-control\"\n                                [ngClass]=\"{'is-invalid': submitted && f.preserveCase.errors}\" >\n                                    <option>TRUE</option> \n                                    <option>FALSE</option>   \n                                </select>                                \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Use Pipe from File<span class=\"text-danger\">:</span></label>\n                                <input name=\"usePipefromFile\" type=\"text\" class=\"form-control\" formControlName=\"usePipefromFile\" [ngClass]=\"{ 'is-invalid': submitted &&  f.usePipefromFile.errors}\">                                \n                                <div *ngIf=\"submitted && f.usePipefromFile.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.usePipefromFile.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Stoplist File<span class=\"text-danger\">:</span></label>\n                                <input name=\"stoplistFile\" type=\"text\" class=\"form-control\" formControlName=\"stoplistFile\" [ngClass]=\"{ 'is-invalid': submitted &&  f.stoplistFile.errors}\">                                \n                                <div *ngIf=\"submitted && f.stoplistFile.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.stoplistFile.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Extra Stopwords<span class=\"text-danger\">:</span></label>\n                                <input name=\"extraStopwords\" type=\"text\" class=\"form-control\" formControlName=\"extraStopwords\" [ngClass]=\"{ 'is-invalid': submitted &&  f.extraStopwords.errors}\">                                \n                                <div *ngIf=\"submitted && f.extraStopwords.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.extraStopwords.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">Skip Header<span class=\"text-danger\">:</span></label>                               \n                                <select formControlName=\"skipHeader\" id=\"inputState\" class=\"form-control\"\n                                [ngClass]=\"{'is-invalid': submitted && f.skipHeader.errors}\" >\n                                    <option>TRUE</option> \n                                    <option>FALSE</option>   \n                                </select>\n                                \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">Skip html<span class=\"text-danger\">:</span></label>                               \n                                <select formControlName=\"skipHtml\" id=\"inputState\" class=\"form-control\"\n                                [ngClass]=\"{'is-invalid': submitted && f.skipHtml.errors}\" >\n                                    <option>TRUE</option> \n                                    <option>FALSE</option>   \n                                </select>\n                                \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">Binary Features<span class=\"text-danger\">:</span></label>                               \n                                <select formControlName=\"binaryFeatures\" id=\"inputState\" class=\"form-control\"\n                                [ngClass]=\"{'is-invalid': submitted && f.binaryFeatures.errors}\" >\n                                    <option>TRUE</option> \n                                    <option>FALSE</option>   \n                                </select>\n                                \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Gram Size<span class=\"text-danger\">:</span></label>\n                                <input name=\"gramSizes\" type=\"text\" class=\"form-control\" formControlName=\"gramSizes\" [ngClass]=\"{ 'is-invalid': submitted &&  f.gramSizes.errors}\">                                \n                                <div *ngIf=\"submitted && f.gramSizes.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.gramSizes.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">Binary Features<span class=\"text-danger\">:</span></label>                               \n                                <select formControlName=\"keepSequenceBigrams\" id=\"inputState\" class=\"form-control\"\n                                [ngClass]=\"{'is-invalid': submitted && f.keepSequenceBigrams.errors}\" >\n                                    <option>TRUE</option> \n                                    <option>FALSE</option>   \n                                </select>\n                               \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">Save Text in Source<span class=\"text-danger\">:</span></label>                               \n                                <select formControlName=\"saveTextinSource\" id=\"inputState\" class=\"form-control\"\n                                [ngClass]=\"{'is-invalid': submitted && f.saveTextinSource.errors}\" >\n                                    <option>TRUE</option> \n                                    <option>FALSE</option>   \n                                </select>\n                               \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">String Pipe<span class=\"text-danger\">:</span></label>\n                                <input name=\"stringPipe\" type=\"text\" class=\"form-control\" formControlName=\"stringPipe\" [ngClass]=\"{ 'is-invalid': submitted &&  f.stringPipe.errors}\">                                \n                                <div *ngIf=\"submitted && f.stringPipe.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.stringPipe.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Token Pipe<span class=\"text-danger\">:</span></label>\n                                <input name=\"tokenPipe\" type=\"text\" class=\"form-control\" formControlName=\"tokenPipe\" [ngClass]=\"{ 'is-invalid': submitted &&  f.tokenPipe.errors}\">                                \n                                <div *ngIf=\"submitted && f.tokenPipe.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.tokenPipe.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Fv-Pipe<span class=\"text-danger\">:</span></label>\n                                <input name=\"fvPipe\" type=\"text\" class=\"form-control\" formControlName=\"fvPipe\" [ngClass]=\"{ 'is-invalid': submitted &&  f.fvPipe.errors}\">                                \n                                <div *ngIf=\"submitted && f.fvPipe.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.fvPipe.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Encoding<span class=\"text-danger\">:</span></label>\n                                <input name=\"encoding\" type=\"text\" class=\"form-control\" formControlName=\"encoding\" [ngClass]=\"{ 'is-invalid': submitted &&  f.encoding.errors}\">                                \n                                <div *ngIf=\"submitted && f.encoding.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.encoding.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">     \n                                <!-- <label class=\"form-label\">Token-regex - Example: \"[\\p{L}\\p{N}_]+|[\\p{P}]+\" (unicode letters, numbers and underscore OR all punctuation)<span class=\"text-danger\">:</span></label>                            -->\n                                <label class=\"form-label\">Token-regex<span class=\"text-danger\">:</span></label>\n                                <input name=\"tokenRegex\" type=\"text\" class=\"form-control\" formControlName=\"tokenRegex\" [ngClass]=\"{ 'is-invalid': submitted &&  f.tokenRegex.errors}\">                                \n                                <div *ngIf=\"submitted && f.tokenRegex.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.tokenRegex.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">Print Output<span class=\"text-danger\">:</span></label>                               \n                                <select formControlName=\"printOutput\" id=\"inputState\" class=\"form-control\"\n                                [ngClass]=\"{'is-invalid': submitted && f.printOutput.errors}\" >\n                                    <option>TRUE</option> \n                                    <option>FALSE</option>   \n                                </select>\n                                \n                            </div>\n                        </div> \n\n                        <br>\n                        <hr>\n                        <div class=\"form-group mt-5\">\n                            <button type=\"submit\" class=\"btn btn-primary-dark-w min-width-200\"> Submit  </button>\n                            <button type=\"button\" class=\"btn btn-primary-dark-w float-right min-width-200\"> Cancel  </button>\n                        </div> <!-- form-group// --> \n                    </form>\n                </div>\n            </div>\n\n            <div class=\"row py-18 px-0 justify-content-center m-2\"  *ngIf=\"results\">\n                <div class=\"col-md-8 bg-gray-3 py-3\"> \n                    <strong>Success! {{ results }}</strong>\n                </div>\n                <!-- <div class=\"col-md-4 \"> \n                    <button type=\"button\" class=\"btn btn-primary-dark-w float-right min-width-200 min-height-40\" (click)=\"downloadResults()\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Downlod Results </button>\n                </div> -->\n            </div>\n        </div>\n\n    </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/mallet/mallet-importfile/mallet-importfile.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/mallet/mallet-importfile/mallet-importfile.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeMalletMalletImportfileMalletImportfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container py-8\">\n    <div class=\"card border-dark mb-3\">\n        <div class=\"card-header text-center bg-gray-3  py-0\" style=\"font-family:Georgia, 'Times New Roman', Times, serif\"> \n            <h4 class=\"card-title mt-2\">Mallet Import File</h4>\n        </div>\n\n        <div *ngIf=\"!auth.isLoggedIn()\">\n            <a style=\"font-family:Georgia, 'Times New Roman', Times, serif; color:black;\" routerLink=\"/login\">&nbsp;Please Sign In.</a>\n        </div>\n        <div *ngIf=\"auth.isLoggedIn()\"> \n            <div class=\"row p-6 justify-content-center\" *ngIf=\"!results\">\n                <div *ngIf=\"isLoading\" style=\"text-align: center;\">\n                    <app-loading-spinner></app-loading-spinner>\n                </div>\n                <div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\" *ngIf=\"error\">\n                    <strong>Error!</strong> {{ error }}\n                </div>\n                <div *ngIf=\"!isLoading && !submitted\"  class=\"col-md-12 p-4\">\n                    <form  [formGroup]=\"dataForm\" (ngSubmit)=\"onSubmit()\">\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                               \n                               <label class=\"form-label\">(Input) Input File Path<span class=\"text-danger\">:</span></label>\n                                <input name=\"inputFile\" type=\"text\" class=\"form-control\" formControlName=\"inputFile\" [ngClass]=\"{ 'is-invalid': submitted &&  f.inputFile.errors}\">                                \n                                <div *ngIf=\"submitted && f.inputFile.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.inputFile.errors.required\">Required source dir input</div>\n                                </div>                                  \n                            </div>\n                        </div>\n                       \n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">(Output) Output File Path<span class=\"text-danger\">:</span></label>\n                                <input name=\"outputFile\" type=\"text\" class=\"form-control\" formControlName=\"outputFile\" [ngClass]=\"{ 'is-invalid': submitted &&  f.outputFile.errors}\">\n                                <!-- <label class=\"custom-file-label\" for=\"dsmfiles\">{{structurl_DSM}}</label> -->\n                                <div *ngIf=\"submitted && f.outputFile.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.outputFile.errors.required\">Required output location</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">Remove topwords - remove default list of common English \"stop words\" from text<span class=\"text-danger\">:</span></label>                               \n                                <select formControlName=\"removeStopwords\" id=\"inputState\" class=\"form-control\"\n                                [ngClass]=\"{'is-invalid': submitted && f.removeStopwords.errors}\" >\n                                    <option>TRUE</option>\n                                    <option>FALSE</option>                                   \n                                </select>\n                                <!-- <div *ngIf=\"submitted && f.removeStopwords.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"submitted && f.removeStopwords.errors\">Log Type is required</div>\n                                </div> -->\n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">Keep Sequence - final data will be a FeatureSequenceWithBigrams rather than a FeatureVector<span class=\"text-danger\">:</span></label>                               \n                                <select formControlName=\"keepSequence\" id=\"inputState\" class=\"form-control\"\n                                [ngClass]=\"{'is-invalid': submitted && f.keepSequence.errors}\" >\n                                    <option>TRUE</option> \n                                    <option>FALSE</option>   \n                                </select>\n                                <!-- <div *ngIf=\"submitted && f.keepSequence.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"submitted && f.keepSequence.errors\">Log Type is required</div>\n                                </div> -->\n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Prefix code ('JAVA CODE')<span class=\"text-danger\">:</span></label>\n                                <input name=\"prefixCode\" type=\"text\" class=\"form-control\" formControlName=\"prefixCode\" [ngClass]=\"{ 'is-invalid': submitted &&  f.prefixCode.errors}\">\n                                <div *ngIf=\"submitted && f.prefixCode.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.prefixCode.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Line-Regex: Regular expression containing regex-groups for label, name and data<span class=\"text-danger\">:</span></label>\n                                <input name=\"lineRegex\" type=\"text\" class=\"form-control\" formControlName=\"lineRegex\" [ngClass]=\"{ 'is-invalid': submitted &&  f.lineRegex.errors}\">\n                                <div *ngIf=\"submitted && f.lineRegex.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.lineRegex.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Label: The index of the group containing the label string<span class=\"text-danger\">:</span></label>\n                                <input name=\"label\" type=\"text\" class=\"form-control\" formControlName=\"label\" [ngClass]=\"{ 'is-invalid': submitted &&  f.label.errors}\">\n                                <div *ngIf=\"submitted && f.label.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.label.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Name: The index of the group containing the instance name<span class=\"text-danger\">:</span></label>\n                                <input name=\"name\" type=\"text\" class=\"form-control\" formControlName=\"name\" [ngClass]=\"{ 'is-invalid': submitted &&  f.name.errors}\">\n                                <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.name.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Data: The index of the group containing the data<span class=\"text-danger\">:</span></label>\n                                <input name=\"data\" type=\"text\" class=\"form-control\" formControlName=\"data\" [ngClass]=\"{ 'is-invalid': submitted &&  f.data.errors}\">\n                                <div *ngIf=\"submitted && f.data.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.data.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                         <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">Preserve Case<span class=\"text-danger\">:</span></label>                               \n                                <select formControlName=\"preserveCase\" id=\"inputState\" class=\"form-control\"\n                                [ngClass]=\"{'is-invalid': submitted && f.preserveCase.errors}\" >\n                                    <option>TRUE</option> \n                                    <option>FALSE</option>   \n                                </select>                                \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Use Pipe from File<span class=\"text-danger\">:</span></label>\n                                <input name=\"usePipefromFile\" type=\"text\" class=\"form-control\" formControlName=\"usePipefromFile\" [ngClass]=\"{ 'is-invalid': submitted &&  f.usePipefromFile.errors}\">                                \n                                <div *ngIf=\"submitted && f.usePipefromFile.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.usePipefromFile.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Stoplist File<span class=\"text-danger\">:</span></label>\n                                <input name=\"stoplistFile\" type=\"text\" class=\"form-control\" formControlName=\"stoplistFile\" [ngClass]=\"{ 'is-invalid': submitted &&  f.stoplistFile.errors}\">                                \n                                <div *ngIf=\"submitted && f.stoplistFile.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.stoplistFile.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Extra Stopwords<span class=\"text-danger\">:</span></label>\n                                <input name=\"extraStopwords\" type=\"text\" class=\"form-control\" formControlName=\"extraStopwords\" [ngClass]=\"{ 'is-invalid': submitted &&  f.extraStopwords.errors}\">                                \n                                <div *ngIf=\"submitted && f.extraStopwords.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.extraStopwords.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n                        \n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">Binary Features<span class=\"text-danger\">:</span></label>                               \n                                <select formControlName=\"keepSequenceBigrams\" id=\"inputState\" class=\"form-control\"\n                                [ngClass]=\"{'is-invalid': submitted && f.keepSequenceBigrams.errors}\" >\n                                    <option>TRUE</option> \n                                    <option>FALSE</option>   \n                                </select>\n                               \n                            </div>\n                        </div>        \n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Encoding<span class=\"text-danger\">:</span></label>\n                                <input name=\"encoding\" type=\"text\" class=\"form-control\" formControlName=\"encoding\" [ngClass]=\"{ 'is-invalid': submitted &&  f.encoding.errors}\">                                \n                                <div *ngIf=\"submitted && f.encoding.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.encoding.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">     \n                                <!-- <label class=\"form-label\">Token-regex - Example: \"[\\p{L}\\p{N}_]+|[\\p{P}]+\" (unicode letters, numbers and underscore OR all punctuation)<span class=\"text-danger\">:</span></label>                            -->\n                                <label class=\"form-label\">Token-regex<span class=\"text-danger\">:</span></label>\n                                <input name=\"tokenRegex\" type=\"text\" class=\"form-control\" formControlName=\"tokenRegex\" [ngClass]=\"{ 'is-invalid': submitted &&  f.tokenRegex.errors}\">                                \n                                <div *ngIf=\"submitted && f.tokenRegex.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.tokenRegex.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">Print Output<span class=\"text-danger\">:</span></label>                               \n                                <select formControlName=\"printOutput\" id=\"inputState\" class=\"form-control\"\n                                [ngClass]=\"{'is-invalid': submitted && f.printOutput.errors}\" >\n                                    <option>TRUE</option> \n                                    <option>FALSE</option>   \n                                </select>\n                                \n                            </div>\n                        </div> \n\n                        <br>\n                        <hr>\n                        <div class=\"form-group mt-5\">\n                            <button type=\"submit\" class=\"btn btn-primary-dark-w min-width-200\"> Submit  </button>\n                            <button type=\"button\" class=\"btn btn-primary-dark-w float-right min-width-200\"> Cancel  </button>\n                        </div> <!-- form-group// --> \n                    </form>\n                </div>\n            </div>\n\n            <div class=\"row py-18 px-0 justify-content-center m-2\"  *ngIf=\"results\">\n                <div class=\"col-md-8 bg-gray-3 py-3\"> \n                    <strong>Success! {{ results }}</strong>\n                </div>\n                <!-- <div class=\"col-md-4 \"> \n                    <button type=\"button\" class=\"btn btn-primary-dark-w float-right min-width-200 min-height-40\" (click)=\"downloadResults()\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Downlod Results </button>\n                </div> -->\n            </div>\n        </div>\n\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/mallet/mallet-infertopics/mallet-infertopics.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/mallet/mallet-infertopics/mallet-infertopics.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeMalletMalletInfertopicsMalletInfertopicsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container py-8\">\n    <div class=\"card border-dark mb-3\">\n        <div class=\"card-header text-center bg-gray-3  py-0\" style=\"font-family:Georgia, 'Times New Roman', Times, serif\"> \n            <h4 class=\"card-title mt-2\">Mallet Infer Topics</h4>\n        </div>\n\n        <div *ngIf=\"!auth.isLoggedIn()\">\n            <a style=\"font-family:Georgia, 'Times New Roman', Times, serif; color:black;\" routerLink=\"/login\">&nbsp;Please Sign In.</a>\n        </div>\n        <div *ngIf=\"auth.isLoggedIn()\"> \n            <div class=\"row p-6 justify-content-center\" *ngIf=\"!results\">\n                <div *ngIf=\"isLoading\" style=\"text-align: center;\">\n                    <app-loading-spinner></app-loading-spinner>\n                </div>\n                <div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\" *ngIf=\"error\">\n                    <strong>Error!</strong> {{ error }}\n                </div>\n                <div *ngIf=\"!isLoading && !submitted\"  class=\"col-md-12 p-4\">\n                    <form  [formGroup]=\"dataForm\" (ngSubmit)=\"onSubmit()\">\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                               \n                               <label class=\"form-label\">(Input) Input File Path<span class=\"text-danger\">:</span></label>\n                                <input name=\"inputFile\" type=\"text\" class=\"form-control\" formControlName=\"inputFile\" [ngClass]=\"{ 'is-invalid': submitted &&  f.inputFile.errors}\">                                \n                                <div *ngIf=\"submitted && f.inputFile.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.inputFile.errors.required\">Required topic model input</div>\n                                </div>                                  \n                            </div>\n                        </div>\n                        \n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                               \n                               <label class=\"form-label\">Inferencer File Name Path<span class=\"text-danger\">:</span></label>\n                                <input name=\"inferencerFilename\" type=\"text\" class=\"form-control\" formControlName=\"inferencerFilename\" [ngClass]=\"{ 'is-invalid': submitted &&  f.inferencerFilename.errors}\">                                \n                                <div *ngIf=\"submitted && f.inferencerFilename.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.inferencerFilename.errors.required\">Required inferencer filename</div>\n                                </div>                                  \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">(Output) Doc Topics File: The file in which to write the topic proportions per document, at the end of the iterations<span class=\"text-danger\">:</span></label>\n                                <input name=\"outputDocTopics\" type=\"text\" class=\"form-control\" formControlName=\"outputDocTopics\" [ngClass]=\"{ 'is-invalid': submitted &&  f.outputDocTopics.errors}\">\n                                <div *ngIf=\"submitted && f.outputDocTopics.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.outputDocTopics.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Prefix code ('JAVA CODE')<span class=\"text-danger\">:</span></label>\n                                <input name=\"prefixCode\" type=\"text\" class=\"form-control\" formControlName=\"prefixCode\" [ngClass]=\"{ 'is-invalid': submitted &&  f.prefixCode.errors}\">\n                                <div *ngIf=\"submitted && f.prefixCode.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.prefixCode.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                               \n                               <label class=\"form-label\">Doc topics proportions threshold/lower boundaries (default is 0.0)<span class=\"text-danger\">:</span></label>\n                                <input name=\"doctopicsThreshold\" type=\"text\" class=\"form-control\" formControlName=\"doctopicsThreshold\" [ngClass]=\"{ 'is-invalid': submitted &&  f.doctopicsThreshold.errors}\">                                \n                                <!-- <div *ngIf=\"submitted && f.doctopicsThreshold.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.doctopicsThreshold.errors.required\">Required inferencer filename</div>\n                                </div>                                   -->\n                            </div>\n                        </div> \n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Doc Topics Max<span class=\"text-danger\">:</span></label>\n                                <input name=\"docTopicsMax\" type=\"text\" class=\"form-control\" formControlName=\"docTopicsMax\" [ngClass]=\"{ 'is-invalid': submitted &&  f.docTopicsMax.errors}\">\n                                <div *ngIf=\"submitted && f.docTopicsMax.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.docTopicsMax.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>    \n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                               \n                               <label class=\"form-label\">Number of Iterations (default is 1000)<span class=\"text-danger\">:</span></label>\n                                <input name=\"numIterations\" type=\"text\" class=\"form-control\" formControlName=\"numIterations\" [ngClass]=\"{ 'is-invalid': submitted &&  f.numIterations.errors}\">                                \n                                <!-- <div *ngIf=\"submitted && f.numIterations.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.numIterations.errors.required\">Required inferencer filename</div>\n                                </div>                                   -->\n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                               \n                               <label class=\"form-label\">Sample Interval: The number of iterations between saved samples (default is 10)<span class=\"text-danger\">:</span></label>\n                                <input name=\"sampleInterval\" type=\"text\" class=\"form-control\" formControlName=\"sampleInterval\" [ngClass]=\"{ 'is-invalid': submitted &&  f.sampleInterval.errors}\">                                \n                                <!-- <div *ngIf=\"submitted && f.sampleInterval.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.sampleInterval.errors.required\">Required inferencer filename</div>\n                                </div>-->\n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                               \n                               <label class=\"form-label\">Burn In: The number of iterations before the first sample is saved (default is 10)<span class=\"text-danger\">:</span></label>\n                                <input name=\"burnIn\" type=\"text\" class=\"form-control\" formControlName=\"burnIn\" [ngClass]=\"{ 'is-invalid': submitted &&  f.burnIn.errors}\">                                \n                                <!-- <div *ngIf=\"submitted && f.burnIn.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.burnIn.errors.required\">Required inferencer filename</div>\n                                </div>-->\n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Random Seed<span class=\"text-danger\">:</span></label>\n                                <input name=\"randomSeed\" type=\"text\" class=\"form-control\" formControlName=\"randomSeed\" [ngClass]=\"{ 'is-invalid': submitted &&  f.randomSeed.errors}\">\n                                <div *ngIf=\"submitted && f.randomSeed.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.randomSeed.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>     \n\n                        <br>\n                        <hr>\n                        <div class=\"form-group mt-5\">\n                            <button type=\"submit\" class=\"btn btn-primary-dark-w min-width-200\"> Submit  </button>\n                            <button type=\"button\" class=\"btn btn-primary-dark-w float-right min-width-200\"> Cancel  </button>\n                        </div> <!-- form-group// --> \n                    </form>\n                </div>\n            </div>\n\n            <div class=\"row py-18 px-0 justify-content-center m-2\"  *ngIf=\"results\">\n                <div class=\"col-md-8 bg-gray-3 py-3\"> \n                    <strong>Success! {{ results }}</strong>\n                </div>\n                <!-- <div class=\"col-md-4 \"> \n                    <button type=\"button\" class=\"btn btn-primary-dark-w float-right min-width-200 min-height-40\" (click)=\"downloadResults()\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Downlod Results </button>\n                </div> -->\n            </div>\n        </div>\n\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/mallet/mallet-prune/mallet-prune.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/mallet/mallet-prune/mallet-prune.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeMalletMalletPruneMalletPruneComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container py-8\">\n    <div class=\"card border-dark mb-3\">\n        <div class=\"card-header text-center bg-gray-3  py-0\" style=\"font-family:Georgia, 'Times New Roman', Times, serif\"> \n            <h4 class=\"card-title mt-2\">Mallet Prune</h4>\n        </div>\n\n        <div *ngIf=\"!auth.isLoggedIn()\">\n            <a style=\"font-family:Georgia, 'Times New Roman', Times, serif; color:black;\" routerLink=\"/login\">&nbsp;Please Sign In.</a>\n        </div>\n        <div *ngIf=\"auth.isLoggedIn()\"> \n            <div class=\"row p-6 justify-content-center\" *ngIf=\"!results\">\n                <div *ngIf=\"isLoading\" style=\"text-align: center;\">\n                    <app-loading-spinner></app-loading-spinner>\n                </div>\n                <div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\" *ngIf=\"error\">\n                    <strong>Error!</strong> {{ error }}\n                </div>\n                <div *ngIf=\"!isLoading && !submitted\"  class=\"col-md-12 p-4\">\n                    <form  [formGroup]=\"dataForm\" (ngSubmit)=\"onSubmit()\">\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                               \n                               <label class=\"form-label\">(Input) Input File Path<span class=\"text-danger\">:</span></label>\n                                <input name=\"inputFile\" type=\"text\" class=\"form-control\" formControlName=\"inputFile\" [ngClass]=\"{ 'is-invalid': submitted &&  f.inputFile.errors}\">                                \n                                <div *ngIf=\"submitted && f.inputFile.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.inputFile.errors.required\">Required topic model input</div>\n                                </div>                                  \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                               \n                               <label class=\"form-label\">(Output) Output File Name Path<span class=\"text-danger\">:</span></label>\n                                <input name=\"outputFile\" type=\"text\" class=\"form-control\" formControlName=\"outputFile\" [ngClass]=\"{ 'is-invalid': submitted &&  f.outputFile.errors}\">                                \n                                <div *ngIf=\"submitted && f.outputFile.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.outputFile.errors.required\">Required inferencer filename</div>\n                                </div>                                  \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Prefix code ('JAVA CODE')<span class=\"text-danger\">:</span></label>\n                                <input name=\"prefixCode\" type=\"text\" class=\"form-control\" formControlName=\"prefixCode\" [ngClass]=\"{ 'is-invalid': submitted &&  f.prefixCode.errors}\">\n                                <div *ngIf=\"submitted && f.prefixCode.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.prefixCode.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Training Portion: The fraction of the instances that should be used for training<span class=\"text-danger\">:</span></label>\n                                <input name=\"trainingPortion\" type=\"text\" class=\"form-control\" formControlName=\"trainingPortion\" [ngClass]=\"{ 'is-invalid': submitted &&  f.trainingPortion.errors}\">\n                                <div *ngIf=\"submitted && f.trainingPortion.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.trainingPortion.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Validation Portion: The fraction of the instances that should be used for validation<span class=\"text-danger\">:</span></label>\n                                <input name=\"validationPortion\" type=\"text\" class=\"form-control\" formControlName=\"validationPortion\" [ngClass]=\"{ 'is-invalid': submitted &&  f.validationPortion.errors}\">\n                                <div *ngIf=\"submitted && f.validationPortion.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.validationPortion.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Random Seed<span class=\"text-danger\">:</span></label>\n                                <input name=\"randomSeed\" type=\"text\" class=\"form-control\" formControlName=\"randomSeed\" [ngClass]=\"{ 'is-invalid': submitted &&  f.randomSeed.errors}\">\n                                <div *ngIf=\"submitted && f.randomSeed.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.randomSeed.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div> \n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Training File: Read the training set instance list from this file<span class=\"text-danger\">:</span></label>\n                                <input name=\"trainingFile\" type=\"text\" class=\"form-control\" formControlName=\"trainingFile\" [ngClass]=\"{ 'is-invalid': submitted &&  f.trainingFile.errors}\">\n                                <div *ngIf=\"submitted && f.trainingFile.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.trainingFile.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div> \n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Testing File: Read the test set instance list to this file<span class=\"text-danger\">:</span></label>\n                                <input name=\"testingFile\" type=\"text\" class=\"form-control\" formControlName=\"testingFile\" [ngClass]=\"{ 'is-invalid': submitted &&  f.testingFile.errors}\">\n                                <div *ngIf=\"submitted && f.testingFile.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.testingFile.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div> \n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Validation File: Read the validation set instance list to this file<span class=\"text-danger\">:</span></label>\n                                <input name=\"validationFile\" type=\"text\" class=\"form-control\" formControlName=\"validationFile\" [ngClass]=\"{ 'is-invalid': submitted &&  f.validationFile.errors}\">\n                                <div *ngIf=\"submitted && f.validationFile.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.validationFile.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Prune Infogain N: Reduce features to the top N by information gain<span class=\"text-danger\">:</span></label>\n                                <input name=\"pruneInfogain\" type=\"text\" class=\"form-control\" formControlName=\"pruneInfogain\" [ngClass]=\"{ 'is-invalid': submitted &&  f.pruneInfogain.errors}\">\n                                <div *ngIf=\"submitted && f.pruneInfogain.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.pruneInfogain.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Prune Count N: Reduce features to those that occur more than N times<span class=\"text-danger\">:</span></label>\n                                <input name=\"pruneInfogain\" type=\"text\" class=\"form-control\" formControlName=\"pruneInfogain\" [ngClass]=\"{ 'is-invalid': submitted &&  f.pruneInfogain.errors}\">\n                                <div *ngIf=\"submitted && f.pruneInfogain.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.pruneInfogain.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">Vector To Sequence: Convert FeatureVector's to FeatureSequence's<span class=\"text-danger\">:</span></label>                               \n                                <select formControlName=\"vectorToSequence\" id=\"inputState\" class=\"form-control\"\n                                [ngClass]=\"{'is-invalid': submitted && f.vectorToSequence.errors}\" >\n                                    <option>true</option> \n                                    <option>false</option>   \n                                </select>                                \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">Hide Targets<span class=\"text-danger\">:</span></label>                               \n                                <select formControlName=\"hideTargets\" id=\"inputState\" class=\"form-control\"\n                                [ngClass]=\"{'is-invalid': submitted && f.hideTargets.errors}\" >\n                                    <option>true</option> \n                                    <option>false</option>   \n                                </select>                                \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">Reveal Targets<span class=\"text-danger\">:</span></label>                               \n                                <select formControlName=\"revealTargets\" id=\"inputState\" class=\"form-control\"\n                                [ngClass]=\"{'is-invalid': submitted && f.revealTargets.errors}\" >\n                                    <option>true</option> \n                                    <option>false</option>   \n                                </select>                                \n                            </div>\n                        </div>\n\n                        <br>\n                        <hr>\n                        <div class=\"form-group mt-5\">\n                            <button type=\"submit\" class=\"btn btn-primary-dark-w min-width-200\"> Submit  </button>\n                            <button type=\"button\" class=\"btn btn-primary-dark-w float-right min-width-200\"> Cancel  </button>\n                        </div> <!-- form-group// --> \n                    </form>\n                </div>\n            </div>\n\n            <div class=\"row py-18 px-0 justify-content-center m-2\"  *ngIf=\"results\">\n                <div class=\"col-md-8 bg-gray-3 py-3\"> \n                    <strong>Success! {{ results }}</strong>\n                </div>\n                <!-- <div class=\"col-md-4 \"> \n                    <button type=\"button\" class=\"btn btn-primary-dark-w float-right min-width-200 min-height-40\" (click)=\"downloadResults()\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Downlod Results </button>\n                </div> -->\n            </div>\n        </div>\n\n    </div>\n</div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/mallet/mallet-split/mallet-split.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/mallet/mallet-split/mallet-split.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeMalletMalletSplitMalletSplitComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container py-8\">\n    <div class=\"card border-dark mb-3\">\n        <div class=\"card-header text-center bg-gray-3  py-0\" style=\"font-family:Georgia, 'Times New Roman', Times, serif\"> \n            <h4 class=\"card-title mt-2\">Mallet Split</h4>\n        </div>\n\n        <div *ngIf=\"!auth.isLoggedIn()\">\n            <a style=\"font-family:Georgia, 'Times New Roman', Times, serif; color:black;\" routerLink=\"/login\">&nbsp;Please Sign In.</a>\n        </div>\n        <div *ngIf=\"auth.isLoggedIn()\"> \n            <div class=\"row p-6 justify-content-center\" *ngIf=\"!results\">\n                <div *ngIf=\"isLoading\" style=\"text-align: center;\">\n                    <app-loading-spinner></app-loading-spinner>\n                </div>\n                <div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\" *ngIf=\"error\">\n                    <strong>Error!</strong> {{ error }}\n                </div>\n                <div *ngIf=\"!isLoading && !submitted\"  class=\"col-md-12 p-4\">\n                    <form  [formGroup]=\"dataForm\" (ngSubmit)=\"onSubmit()\">\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                               \n                               <label class=\"form-label\">(Input) Input File Path<span class=\"text-danger\">:</span></label>\n                                <input name=\"inputFile\" type=\"text\" class=\"form-control\" formControlName=\"inputFile\" [ngClass]=\"{ 'is-invalid': submitted &&  f.inputFile.errors}\">                                \n                                <div *ngIf=\"submitted && f.inputFile.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.inputFile.errors.required\">Required topic model input</div>\n                                </div>                                  \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                               \n                               <label class=\"form-label\">(Output) Output File Name Path<span class=\"text-danger\">:</span></label>\n                                <input name=\"outputFile\" type=\"text\" class=\"form-control\" formControlName=\"outputFile\" [ngClass]=\"{ 'is-invalid': submitted &&  f.outputFile.errors}\">                                \n                                <div *ngIf=\"submitted && f.outputFile.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.outputFile.errors.required\">Required inferencer filename</div>\n                                </div>                                  \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Prefix code ('JAVA CODE')<span class=\"text-danger\">:</span></label>\n                                <input name=\"prefixCode\" type=\"text\" class=\"form-control\" formControlName=\"prefixCode\" [ngClass]=\"{ 'is-invalid': submitted &&  f.prefixCode.errors}\">\n                                <div *ngIf=\"submitted && f.prefixCode.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.prefixCode.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Training Portion: The fraction of the instances that should be used for training<span class=\"text-danger\">:</span></label>\n                                <input name=\"trainingPortion\" type=\"text\" class=\"form-control\" formControlName=\"trainingPortion\" [ngClass]=\"{ 'is-invalid': submitted &&  f.trainingPortion.errors}\">\n                                <div *ngIf=\"submitted && f.trainingPortion.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.trainingPortion.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Validation Portion: The fraction of the instances that should be used for validation<span class=\"text-danger\">:</span></label>\n                                <input name=\"validationPortion\" type=\"text\" class=\"form-control\" formControlName=\"validationPortion\" [ngClass]=\"{ 'is-invalid': submitted &&  f.validationPortion.errors}\">\n                                <div *ngIf=\"submitted && f.validationPortion.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.validationPortion.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Random Seed<span class=\"text-danger\">:</span></label>\n                                <input name=\"randomSeed\" type=\"text\" class=\"form-control\" formControlName=\"randomSeed\" [ngClass]=\"{ 'is-invalid': submitted &&  f.randomSeed.errors}\">\n                                <div *ngIf=\"submitted && f.randomSeed.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.randomSeed.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div> \n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Training File: Read the training set instance list from this file<span class=\"text-danger\">:</span></label>\n                                <input name=\"trainingFile\" type=\"text\" class=\"form-control\" formControlName=\"trainingFile\" [ngClass]=\"{ 'is-invalid': submitted &&  f.trainingFile.errors}\">\n                                <div *ngIf=\"submitted && f.trainingFile.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.trainingFile.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div> \n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Testing File: Read the test set instance list to this file<span class=\"text-danger\">:</span></label>\n                                <input name=\"testingFile\" type=\"text\" class=\"form-control\" formControlName=\"testingFile\" [ngClass]=\"{ 'is-invalid': submitted &&  f.testingFile.errors}\">\n                                <div *ngIf=\"submitted && f.testingFile.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.testingFile.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div> \n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Validation File: Read the validation set instance list to this file<span class=\"text-danger\">:</span></label>\n                                <input name=\"validationFile\" type=\"text\" class=\"form-control\" formControlName=\"validationFile\" [ngClass]=\"{ 'is-invalid': submitted &&  f.validationFile.errors}\">\n                                <div *ngIf=\"submitted && f.validationFile.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.validationFile.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Prune Infogain N: Reduce features to the top N by information gain<span class=\"text-danger\">:</span></label>\n                                <input name=\"pruneInfogain\" type=\"text\" class=\"form-control\" formControlName=\"pruneInfogain\" [ngClass]=\"{ 'is-invalid': submitted &&  f.pruneInfogain.errors}\">\n                                <div *ngIf=\"submitted && f.pruneInfogain.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.pruneInfogain.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Prune Count N: Reduce features to those that occur more than N times<span class=\"text-danger\">:</span></label>\n                                <input name=\"pruneInfogain\" type=\"text\" class=\"form-control\" formControlName=\"pruneInfogain\" [ngClass]=\"{ 'is-invalid': submitted &&  f.pruneInfogain.errors}\">\n                                <div *ngIf=\"submitted && f.pruneInfogain.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.pruneInfogain.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">Vector To Sequence: Convert FeatureVector's to FeatureSequence's<span class=\"text-danger\">:</span></label>                               \n                                <select formControlName=\"vectorToSequence\" id=\"inputState\" class=\"form-control\"\n                                [ngClass]=\"{'is-invalid': submitted && f.vectorToSequence.errors}\" >\n                                    <option>true</option> \n                                    <option>false</option>   \n                                </select>                                \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">Hide Targets<span class=\"text-danger\">:</span></label>                               \n                                <select formControlName=\"hideTargets\" id=\"inputState\" class=\"form-control\"\n                                [ngClass]=\"{'is-invalid': submitted && f.hideTargets.errors}\" >\n                                    <option>true</option> \n                                    <option>false</option>   \n                                </select>                                \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">Reveal Targets<span class=\"text-danger\">:</span></label>                               \n                                <select formControlName=\"revealTargets\" id=\"inputState\" class=\"form-control\"\n                                [ngClass]=\"{'is-invalid': submitted && f.revealTargets.errors}\" >\n                                    <option>true</option> \n                                    <option>false</option>   \n                                </select>                                \n                            </div>\n                        </div>\n                        \n                        <br>\n                        <hr>\n                        <div class=\"form-group mt-5\">\n                            <button type=\"submit\" class=\"btn btn-primary-dark-w min-width-200\"> Submit  </button>\n                            <button type=\"button\" class=\"btn btn-primary-dark-w float-right min-width-200\"> Cancel  </button>\n                        </div> <!-- form-group// --> \n                    </form>\n                </div>\n            </div>\n\n            <div class=\"row py-18 px-0 justify-content-center m-2\"  *ngIf=\"results\">\n                <div class=\"col-md-8 bg-gray-3 py-3\"> \n                    <strong>Success! {{ results }}</strong>\n                </div>\n                <!-- <div class=\"col-md-4 \"> \n                    <button type=\"button\" class=\"btn btn-primary-dark-w float-right min-width-200 min-height-40\" (click)=\"downloadResults()\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Downlod Results </button>\n                </div> -->\n            </div>\n        </div>\n\n    </div>\n</div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/mallet/mallet-trainclassifier/mallet-trainclassifier.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/mallet/mallet-trainclassifier/mallet-trainclassifier.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeMalletMalletTrainclassifierMalletTrainclassifierComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container py-8\">\n    <div class=\"card border-dark mb-3\">\n        <div class=\"card-header text-center bg-gray-3  py-0\" style=\"font-family:Georgia, 'Times New Roman', Times, serif\"> \n            <h4 class=\"card-title mt-2\">Mallet Train Classifier</h4>\n        </div>\n\n        <div *ngIf=\"!auth.isLoggedIn()\">\n            <a style=\"font-family:Georgia, 'Times New Roman', Times, serif; color:black;\" routerLink=\"/login\">&nbsp;Please Sign In.</a>\n        </div>\n        <div *ngIf=\"auth.isLoggedIn()\"> \n            <div class=\"row p-6 justify-content-center\" *ngIf=\"!results\">\n                <div *ngIf=\"isLoading\" style=\"text-align: center;\">\n                    <app-loading-spinner></app-loading-spinner>\n                </div>\n                <div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\" *ngIf=\"error\">\n                    <strong>Error!</strong> {{ error }}\n                </div>\n                <div *ngIf=\"!isLoading && !submitted\"  class=\"col-md-12 p-4\">\n                    <form  [formGroup]=\"dataForm\" (ngSubmit)=\"onSubmit()\">\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                               \n                               <label class=\"form-label\">(Input) Input File Path<span class=\"text-danger\">:</span></label>\n                                <input name=\"inputFile\" type=\"text\" class=\"form-control\" formControlName=\"inputFile\" [ngClass]=\"{ 'is-invalid': submitted &&  f.inputFile.errors}\">                                \n                                <div *ngIf=\"submitted && f.inputFile.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.inputFile.errors.required\">Required topic model input</div>\n                                </div>                                  \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                               \n                               <label class=\"form-label\">(Output) Output Classifier File Name Path<span class=\"text-danger\">:</span></label>\n                                <input name=\"outputClassifier\" type=\"text\" class=\"form-control\" formControlName=\"outputClassifier\" [ngClass]=\"{ 'is-invalid': submitted &&  f.outputClassifier.errors}\">                                \n                                <div *ngIf=\"submitted && f.outputClassifier.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.outputClassifier.errors.required\">Required inferencer filename</div>\n                                </div>                                  \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Report<span class=\"text-danger\">:</span></label>\n                                <input name=\"report\" type=\"text\" class=\"form-control\" formControlName=\"report\" [ngClass]=\"{ 'is-invalid': submitted &&  f.report.errors}\">\n                                <div *ngIf=\"submitted && f.report.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.report.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">ClassifierTrainer constructor: Java code for the constructor used to create a ClassifierTrainer<span class=\"text-danger\">:</span></label>\n                                <input name=\"trainer\" type=\"text\" class=\"form-control\" formControlName=\"trainer\" [ngClass]=\"{ 'is-invalid': submitted &&  f.trainer.errors}\">\n                                <div *ngIf=\"submitted && f.trainer.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.trainer.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Training Portion: The fraction of the instances that should be used for training<span class=\"text-danger\">:</span></label>\n                                <input name=\"trainingPortion\" type=\"text\" class=\"form-control\" formControlName=\"trainingPortion\" [ngClass]=\"{ 'is-invalid': submitted &&  f.trainingPortion.errors}\">\n                                <div *ngIf=\"submitted && f.trainingPortion.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.trainingPortion.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Validation Portion: The fraction of the instances that should be used for validation<span class=\"text-danger\">:</span></label>\n                                <input name=\"validationPortion\" type=\"text\" class=\"form-control\" formControlName=\"validationPortion\" [ngClass]=\"{ 'is-invalid': submitted &&  f.validationPortion.errors}\">\n                                <div *ngIf=\"submitted && f.validationPortion.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.validationPortion.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Unlabeled Portion: The fraction of the training instances that should have their labels hidden<span class=\"text-danger\">:</span></label>\n                                <input name=\"unlabeledPortion\" type=\"text\" class=\"form-control\" formControlName=\"unlabeledPortion\" [ngClass]=\"{ 'is-invalid': submitted &&  f.unlabeledPortionerrors}\">\n                                <div *ngIf=\"submitted && f.unlabeledPortion.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.unlabeledPortion.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Random Seed<span class=\"text-danger\">:</span></label>\n                                <input name=\"randomSeed\" type=\"text\" class=\"form-control\" formControlName=\"randomSeed\" [ngClass]=\"{ 'is-invalid': submitted &&  f.randomSeed.errors}\">\n                                <div *ngIf=\"submitted && f.randomSeed.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.randomSeed.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>    \n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Num Trials: The number of random train/test splits to perform<span class=\"text-danger\">:</span></label>\n                                <input name=\"numTrials\" type=\"text\" class=\"form-control\" formControlName=\"numTrials\" [ngClass]=\"{ 'is-invalid': submitted &&  f.numTrials.errors}\">\n                                <div *ngIf=\"submitted && f.numTrials.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.numTrials.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div> \n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Classifier Evaluator: Java code for constructing a ClassifierEvaluating object<span class=\"text-danger\">:</span></label>\n                                <input name=\"classifierEvaluator\" type=\"text\" class=\"form-control\" formControlName=\"classifierEvaluator\" [ngClass]=\"{ 'is-invalid': submitted &&  f.classifierEvaluator.errors}\">\n                                <div *ngIf=\"submitted && f.classifierEvaluator.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.classifierEvaluator.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div> \n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Verbosity: The level of messages to print: 0 is silent, 8 is most verbose. <br>Levels 0-8 correspond to the java.logger predefined levels off, severe, warning, info, config, fine, finer, finest, all. <br>The default value is taken from the mallet logging.properties file, which currently defaults to INFO level (3)<span class=\"text-danger\">:</span></label>\n                                <input name=\"verbosity\" type=\"text\" class=\"form-control\" formControlName=\"verbosity\" [ngClass]=\"{ 'is-invalid': submitted &&  f.verbosity.errors}\">\n                                <div *ngIf=\"submitted && f.verbosity.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.verbosity.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div> \n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">No Overwrite Progress Message: Suppress writing-in-place on terminal for progess messages <br>- repetitive messages of which only the latest is generally of interest<span class=\"text-danger\">:</span></label>                               \n                                <select formControlName=\"noOverwriteProgressMessages\" id=\"inputState\" class=\"form-control\"\n                                [ngClass]=\"{'is-invalid': submitted && f.noOverwriteProgressMessages.errors}\" >\n                                    <option>true</option> \n                                    <option>false</option>   \n                                </select>                                \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Cross Validation: The number of folds for cross-validation (DEFAULT=0)<span class=\"text-danger\">:</span></label>\n                                <input name=\"crossValidation\" type=\"text\" class=\"form-control\" formControlName=\"crossValidation\" [ngClass]=\"{ 'is-invalid': submitted &&  f.crossValidation.errors}\">\n                                <div *ngIf=\"submitted && f.crossValidation.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.crossValidation.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div> \n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Training File: Read the training set instance list from this file<span class=\"text-danger\">:</span></label>\n                                <input name=\"trainingFile\" type=\"text\" class=\"form-control\" formControlName=\"trainingFile\" [ngClass]=\"{ 'is-invalid': submitted &&  f.trainingFile.errors}\">\n                                <div *ngIf=\"submitted && f.trainingFile.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.trainingFile.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div> \n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Testing File: Read the test set instance list to this file<span class=\"text-danger\">:</span></label>\n                                <input name=\"testingFile\" type=\"text\" class=\"form-control\" formControlName=\"testingFile\" [ngClass]=\"{ 'is-invalid': submitted &&  f.testingFile.errors}\">\n                                <div *ngIf=\"submitted && f.testingFile.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.testingFile.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div> \n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Validation File: Read the validation set instance list to this file<span class=\"text-danger\">:</span></label>\n                                <input name=\"validationFile\" type=\"text\" class=\"form-control\" formControlName=\"validationFile\" [ngClass]=\"{ 'is-invalid': submitted &&  f.validationFile.errors}\">\n                                <div *ngIf=\"submitted && f.validationFile.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.validationFile.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <br>\n                        <hr>\n                        <div class=\"form-group mt-5\">\n                            <button type=\"submit\" class=\"btn btn-primary-dark-w min-width-200\"> Submit  </button>\n                            <button type=\"button\" class=\"btn btn-primary-dark-w float-right min-width-200\"> Cancel  </button>\n                        </div> <!-- form-group// --> \n                    </form>\n                </div>\n            </div>\n\n            <div class=\"row py-18 px-0 justify-content-center m-2\"  *ngIf=\"results\">\n                <div class=\"col-md-8 bg-gray-3 py-3\"> \n                    <strong>Success! {{ results }}</strong>\n                </div>\n                <!-- <div class=\"col-md-4 \"> \n                    <button type=\"button\" class=\"btn btn-primary-dark-w float-right min-width-200 min-height-40\" (click)=\"downloadResults()\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Downlod Results </button>\n                </div> -->\n            </div>\n        </div>\n\n    </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/mallet/mallet-traintopics/mallet-traintopics.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/mallet/mallet-traintopics/mallet-traintopics.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeMalletMalletTraintopicsMalletTraintopicsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container py-8\">\n    <div class=\"card border-dark mb-3\">\n        <div class=\"card-header text-center bg-gray-3  py-0\" style=\"font-family:Georgia, 'Times New Roman', Times, serif\"> \n            <h4 class=\"card-title mt-2\">Mallet Train Topics</h4>\n        </div>\n\n        <div *ngIf=\"!auth.isLoggedIn()\">\n            <a style=\"font-family:Georgia, 'Times New Roman', Times, serif; color:black;\" routerLink=\"/login\">&nbsp;Please Sign In.</a>\n        </div>\n        <div *ngIf=\"auth.isLoggedIn()\"> \n            <div class=\"row p-6 justify-content-center\" *ngIf=\"!results\">\n                <div *ngIf=\"isLoading\" style=\"text-align: center;\">\n                    <app-loading-spinner></app-loading-spinner>\n                </div>\n                <div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\" *ngIf=\"error\">\n                    <strong>Error!</strong> {{ error }}\n                </div>\n                <div *ngIf=\"!isLoading && !submitted\"  class=\"col-md-12 p-4\">\n                    <form  [formGroup]=\"dataForm\" (ngSubmit)=\"onSubmit()\">\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                               \n                               <label class=\"form-label\">(Input) Topic Model File Path<span class=\"text-danger\">:</span></label>\n                                <input name=\"topicmodelFile\" type=\"text\" class=\"form-control\" formControlName=\"topicmodelFile\" [ngClass]=\"{ 'is-invalid': submitted &&  f.topicmodelFile.errors}\">                                \n                                <div *ngIf=\"submitted && f.topicmodelFile.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.topicmodelFile.errors.required\">Required topic model input</div>\n                                </div>                                  \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                               \n                               <label class=\"form-label\">(Output) Inferencer File Name Path<span class=\"text-danger\">:</span></label>\n                                <input name=\"inferencerFilename\" type=\"text\" class=\"form-control\" formControlName=\"inferencerFilename\" [ngClass]=\"{ 'is-invalid': submitted &&  f.inferencerFilename.errors}\">                                \n                                <div *ngIf=\"submitted && f.inferencerFilename.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.inferencerFilename.errors.required\">Required inferencer filename</div>\n                                </div>                                  \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                               \n                               <label class=\"form-label\">Number of topics to fit (default is -1)<span class=\"text-danger\">:</span></label>\n                                <input name=\"numTopics\" type=\"text\" class=\"form-control\" formControlName=\"numTopics\" [ngClass]=\"{ 'is-invalid': submitted &&  f.numTopics.errors}\">                                \n                                <!-- <div *ngIf=\"submitted && f.numTopics.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.numTopics.errors.required\">Required Num topics param</div>\n                                </div>                                   -->\n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                               \n                               <label class=\"form-label\">Number of top (most probable) words for each topic (default is 20))<span class=\"text-danger\">:</span></label>\n                                <input name=\"numtopwords\" type=\"text\" class=\"form-control\" formControlName=\"numtopwords\" [ngClass]=\"{ 'is-invalid': submitted &&  f.numtopwords.errors}\">                                \n                                <!-- <div *ngIf=\"submitted && f.numtopwords.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.numtopwords.errors.required\">Required inferencer filename</div>\n                                </div>                                   -->\n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                               \n                               <label class=\"form-label\">Number of threads for parallel training (default is 1))<span class=\"text-danger\">:</span></label>\n                                <input name=\"numThreads\" type=\"text\" class=\"form-control\" formControlName=\"numThreads\" [ngClass]=\"{ 'is-invalid': submitted &&  f.numThreads.errors}\">                                \n                                <!-- <div *ngIf=\"submitted && f.numThreads.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.numThreads.errors.required\">Required inferencer filename</div>\n                                </div>                                   -->\n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                               \n                               <label class=\"form-label\">Number of Iterations (default is 1000)<span class=\"text-danger\">:</span></label>\n                                <input name=\"numIterations\" type=\"text\" class=\"form-control\" formControlName=\"numIterations\" [ngClass]=\"{ 'is-invalid': submitted &&  f.numIterations.errors}\">                                \n                                <!-- <div *ngIf=\"submitted && f.numIterations.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.numIterations.errors.required\">Required inferencer filename</div>\n                                </div>                                   -->\n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                               \n                               <label class=\"form-label\">Doc topics proportions threshold/lower boundaries (default is 0.0)<span class=\"text-danger\">:</span></label>\n                                <input name=\"doctopicsThreshold\" type=\"text\" class=\"form-control\" formControlName=\"doctopicsThreshold\" [ngClass]=\"{ 'is-invalid': submitted &&  f.doctopicsThreshold.errors}\">                                \n                                <!-- <div *ngIf=\"submitted && f.doctopicsThreshold.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.doctopicsThreshold.errors.required\">Required inferencer filename</div>\n                                </div>                                   -->\n                            </div>\n                        </div> \n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Prefix code ('JAVA CODE')<span class=\"text-danger\">:</span></label>\n                                <input name=\"prefixCode\" type=\"text\" class=\"form-control\" formControlName=\"prefixCode\" [ngClass]=\"{ 'is-invalid': submitted &&  f.prefixCode.errors}\">\n                                <div *ngIf=\"submitted && f.prefixCode.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.prefixCode.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n                        \n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Doc Topics Max<span class=\"text-danger\">:</span></label>\n                                <input name=\"docTopicsMax\" type=\"text\" class=\"form-control\" formControlName=\"docTopicsMax\" [ngClass]=\"{ 'is-invalid': submitted &&  f.docTopicsMax.errors}\">\n                                <div *ngIf=\"submitted && f.docTopicsMax.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.docTopicsMax.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>    \n                        \n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Random Seed<span class=\"text-danger\">:</span></label>\n                                <input name=\"randomSeed\" type=\"text\" class=\"form-control\" formControlName=\"randomSeed\" [ngClass]=\"{ 'is-invalid': submitted &&  f.randomSeed.errors}\">\n                                <div *ngIf=\"submitted && f.randomSeed.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.randomSeed.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>                         \n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">Use PAM (Pachinko Allocation Model) rather than LDA by default<span class=\"text-danger\">:</span></label>                               \n                                <select formControlName=\"usePam\" id=\"inputState\" class=\"form-control\"\n                                [ngClass]=\"{'is-invalid': submitted && f.usePam.errors}\" >\n                                    <option>true</option> \n                                    <option>false</option>   \n                                </select>                                \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">Use N-Grams (Rather than using LDA, use Topical-N-Grams)<span class=\"text-danger\">:</span></label>                               \n                                <select formControlName=\"useNgrams\" id=\"inputState\" class=\"form-control\"\n                                [ngClass]=\"{'is-invalid': submitted && f.useNgrams.errors}\" >\n                                    <option>true</option> \n                                    <option>false</option>   \n                                </select>                                \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label class=\"form-label\">Use Symmetric Alpha: Only optimize the concentration parameter of the prior over document-topic distributions<span class=\"text-danger\">:</span></label>                               \n                                <select formControlName=\"useSymmetricAlpha\" id=\"inputState\" class=\"form-control\"\n                                [ngClass]=\"{'is-invalid': submitted && f.useSymmetricAlpha.errors}\" >\n                                    <option>true</option> \n                                    <option>false</option>   \n                                </select>                                \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Show Topics Interval (number of iterations between printing a brief summary of the topics so far)<span class=\"text-danger\">:</span></label>\n                                <input name=\"showTopicsInterval\" type=\"text\" class=\"form-control\" formControlName=\"showTopicsInterval\" [ngClass]=\"{ 'is-invalid': submitted &&  f.showTopicsInterval.errors}\">\n                                <div *ngIf=\"submitted && f.showTopicsInterval.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.showTopicsInterval.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Output Model Interval<span class=\"text-danger\">:</span></label>\n                                <input name=\"outputModelInterval\" type=\"text\" class=\"form-control\" formControlName=\"outputModelInterval\" [ngClass]=\"{ 'is-invalid': submitted &&  f.outputModelInterval.errors}\">\n                                <div *ngIf=\"submitted && f.outputModelInterval.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.outputModelInterval.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Output State Interval: number of iterations between writing the sampling state to a text file<span class=\"text-danger\">:</span></label>\n                                <input name=\"outputStateInterval\" type=\"text\" class=\"form-control\" formControlName=\"outputStateInterval\" [ngClass]=\"{ 'is-invalid': submitted &&  f.outputStateInterval.errors}\">\n                                <div *ngIf=\"submitted && f.outputStateInterval.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.outputStateInterval.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Optimize Interval: number of iterations between reestimating dirichlet hyperparameters<span class=\"text-danger\">:</span></label>\n                                <input name=\"optimizeInterval\" type=\"text\" class=\"form-control\" formControlName=\"optimizeInterval\" [ngClass]=\"{ 'is-invalid': submitted &&  f.optimizeInterval.errors}\">\n                                <div *ngIf=\"submitted && f.optimizeInterval.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.optimizeInterval.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Optimize Burn In: number of iterations to run before first estimating dirichlet hyperparameters<span class=\"text-danger\">:</span></label>\n                                <input name=\"optimizeBurnin\" type=\"text\" class=\"form-control\" formControlName=\"optimizeBurnin\" [ngClass]=\"{ 'is-invalid': submitted &&  f.optimizeBurnin.errors}\">\n                                <div *ngIf=\"submitted && f.optimizeBurnin.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.optimizeBurnin.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>                        \n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Alpha parameter: smoothing over topic distribution<span class=\"text-danger\">:</span></label>\n                                <input name=\"alpha\" type=\"text\" class=\"form-control\" formControlName=\"alpha\" [ngClass]=\"{ 'is-invalid': submitted &&  f.alpha.errors}\">\n                                <div *ngIf=\"submitted && f.alpha.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.alpha.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Beta parameter: smoothing over topic distribution<span class=\"text-danger\">:</span></label>\n                                <input name=\"beta\" type=\"text\" class=\"form-control\" formControlName=\"beta\" [ngClass]=\"{ 'is-invalid': submitted &&  f.beta.errors}\">\n                                <div *ngIf=\"submitted && f.beta.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.beta.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Gamma parameter: smoothing over topic distribution<span class=\"text-danger\">:</span></label>\n                                <input name=\"gamma\" type=\"text\" class=\"form-control\" formControlName=\"gamma\" [ngClass]=\"{ 'is-invalid': submitted &&  f.gamma.errors}\">\n                                <div *ngIf=\"submitted && f.gamma.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.gamma.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Delta parameter: smoothing over choice of unigram/bigram<span class=\"text-danger\">:</span></label>\n                                <input name=\"delta\" type=\"text\" class=\"form-control\" formControlName=\"delta\" [ngClass]=\"{ 'is-invalid': submitted &&  f.delta.errors}\">\n                                <div *ngIf=\"submitted && f.delta.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.delta.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Delta1: Topic N-gram smoothing parameter<span class=\"text-danger\">:</span></label>\n                                <input name=\"delta1\" type=\"text\" class=\"form-control\" formControlName=\"delta1\" [ngClass]=\"{ 'is-invalid': submitted &&  f.delta1.errors}\">\n                                <div *ngIf=\"submitted && f.delta1.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.delta1.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Delta2: Topic N-gram smoothing parameter<span class=\"text-danger\">:</span></label>\n                                <input name=\"delta2\" type=\"text\" class=\"form-control\" formControlName=\"delta2\" [ngClass]=\"{ 'is-invalid': submitted &&  f.delta2.errors}\">\n                                <div *ngIf=\"submitted && f.delta2.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.delta2.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">PAM Num Super-topics (When using the Pachinko Allocation Model set the number of supertopics)<span class=\"text-danger\">:</span></label>\n                                <input name=\"pamNumSupertopics\" type=\"text\" class=\"form-control\" formControlName=\"pamNumSupertopics\" [ngClass]=\"{ 'is-invalid': submitted &&  f.pamNumSupertopics.errors}\">\n                                <div *ngIf=\"submitted && f.pamNumSupertopics.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.pamNumSupertopics.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">PAM Num Sub-topics (When using the Pachinko Allocation Model set the number of subtopics)<span class=\"text-danger\">:</span></label>\n                                <input name=\"pamNumSubtopics\" type=\"text\" class=\"form-control\" formControlName=\"pamNumSubtopics\" [ngClass]=\"{ 'is-invalid': submitted &&  f.pamNumSubtopics.errors}\">\n                                <div *ngIf=\"submitted && f.pamNumSubtopics.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.pamNumSubtopics.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Language input file (for polylingual topic model)<span class=\"text-danger\">:</span></label>\n                                <input name=\"languageInput\" type=\"text\" class=\"form-control\" formControlName=\"languageInput\" [ngClass]=\"{ 'is-invalid': submitted &&  f.languageInput.errors}\">\n                                <div *ngIf=\"submitted && f.languageInput.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.languageInput.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Language input file (for polylingual topic model)<span class=\"text-danger\">:</span></label>\n                                <input name=\"languageInput\" type=\"text\" class=\"form-control\" formControlName=\"languageInput\" [ngClass]=\"{ 'is-invalid': submitted &&  f.languageInput.errors}\">\n                                <div *ngIf=\"submitted && f.languageInput.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.languageInput.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Testing File: The file from which to read the list of instances for empirical likelihood calculation<span class=\"text-danger\">:</span></label>\n                                <input name=\"testing\" type=\"text\" class=\"form-control\" formControlName=\"testing\" [ngClass]=\"{ 'is-invalid': submitted &&  f.testing.errors}\">\n                                <div *ngIf=\"submitted && f.testing.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.testing.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Output Model File: The file in which to write the binary topic model at the end of the iterations<span class=\"text-danger\">:</span></label>\n                                <input name=\"outputModel\" type=\"text\" class=\"form-control\" formControlName=\"outputModel\" [ngClass]=\"{ 'is-invalid': submitted &&  f.outputModel.errors}\">\n                                <div *ngIf=\"submitted && f.outputModel.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.outputModel.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Input Model File (to read the binary topic model to which the --input will be appended, allowing incremental training)<span class=\"text-danger\">:</span></label>\n                                <input name=\"inputModel\" type=\"text\" class=\"form-control\" formControlName=\"inputModel\" [ngClass]=\"{ 'is-invalid': submitted &&  f.inputModel.errors}\">\n                                <div *ngIf=\"submitted && f.inputModel.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.inputModel.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Evaluator File: A held-out likelihood evaluator for new documents<span class=\"text-danger\">:</span></label>\n                                <input name=\"evaluatorFilename\" type=\"text\" class=\"form-control\" formControlName=\"evaluatorFilename\" [ngClass]=\"{ 'is-invalid': submitted &&  f.evaluatorFilename.errors}\">\n                                <div *ngIf=\"submitted && f.evaluatorFilename.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.evaluatorFilename.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Output State File: The file in which to write the Gibbs sampling state after at the end of the iterations<span class=\"text-danger\">:</span></label>\n                                <input name=\"outputState\" type=\"text\" class=\"form-control\" formControlName=\"outputState\" [ngClass]=\"{ 'is-invalid': submitted &&  f.outputState.errors}\">\n                                <div *ngIf=\"submitted && f.outputState.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.outputState.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Output Topic Keys File: The file in which to write the top words for each topic and any Dirichlet parameters<span class=\"text-danger\">:</span></label>\n                                <input name=\"outputTopicKeys\" type=\"text\" class=\"form-control\" formControlName=\"outputTopicKeys\" [ngClass]=\"{ 'is-invalid': submitted &&  f.outputTopicKeys.errors}\">\n                                <div *ngIf=\"submitted && f.outputTopicKeys.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.outputTopicKeys.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Topic Word Weights File: The file in which to write unnormalized weights for every topic and word type<span class=\"text-danger\">:</span></label>\n                                <input name=\"topicWordWeightsFile\" type=\"text\" class=\"form-control\" formControlName=\"topicWordWeightsFile\" [ngClass]=\"{ 'is-invalid': submitted &&  f.topicWordWeightsFile.errors}\">\n                                <div *ngIf=\"submitted && f.topicWordWeightsFile.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.topicWordWeightsFile.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Word Topic Counts File: The file in which to write a sparse representation of topic-word assignments<span class=\"text-danger\">:</span></label>\n                                <input name=\"wordTopicCountsFile\" type=\"text\" class=\"form-control\" formControlName=\"wordTopicCountsFile\" [ngClass]=\"{ 'is-invalid': submitted &&  f.wordTopicCountsFile.errors}\">\n                                <div *ngIf=\"submitted && f.wordTopicCountsFile.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.wordTopicCountsFile.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Xml Topic Report File: The file in which to write the top words for each topic and any Dirichlet parameters in XML format<span class=\"text-danger\">:</span></label>\n                                <input name=\"xmlTopicReport\" type=\"text\" class=\"form-control\" formControlName=\"xmlTopicReport\" [ngClass]=\"{ 'is-invalid': submitted &&  f.xmlTopicReport.errors}\">\n                                <div *ngIf=\"submitted && f.xmlTopicReport.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.xmlTopicReport.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Xml Topic Phrase Report File: The file in which to write the top words and phrases for each topic and any Dirichlet parameters in XML format<span class=\"text-danger\">:</span></label>\n                                <input name=\"xmlTopicPhraseReport\" type=\"text\" class=\"form-control\" formControlName=\"xmlTopicPhraseReport\" [ngClass]=\"{ 'is-invalid': submitted &&  f.xmlTopicPhraseReport.errors}\">\n                                <div *ngIf=\"submitted && f.xmlTopicPhraseReport.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.xmlTopicPhraseReport.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">                                \n                                <label class=\"form-label\">Output Doc Topics File: The file in which to write the topic proportions per document, at the end of the iterations<span class=\"text-danger\">:</span></label>\n                                <input name=\"outputDocTopics\" type=\"text\" class=\"form-control\" formControlName=\"outputDocTopics\" [ngClass]=\"{ 'is-invalid': submitted &&  f.outputDocTopics.errors}\">\n                                <div *ngIf=\"submitted && f.outputDocTopics.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.outputDocTopics.errors.required\">Required field!</div>\n                                </div>                            \n                            </div>\n                        </div>\n\n                        <br>\n                        <hr>\n                        <div class=\"form-group mt-5\">\n                            <button type=\"submit\" class=\"btn btn-primary-dark-w min-width-200\"> Submit  </button>\n                            <button type=\"button\" class=\"btn btn-primary-dark-w float-right min-width-200\"> Cancel  </button>\n                        </div> <!-- form-group// --> \n                    </form>\n                </div>\n            </div>\n\n            <div class=\"row py-18 px-0 justify-content-center m-2\"  *ngIf=\"results\">\n                <div class=\"col-md-8 bg-gray-3 py-3\"> \n                    <strong>Success! {{ results }}</strong>\n                </div>\n                <!-- <div class=\"col-md-4 \"> \n                    <button type=\"button\" class=\"btn btn-primary-dark-w float-right min-width-200 min-height-40\" (click)=\"downloadResults()\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Downlod Results </button>\n                </div> -->\n            </div>\n        </div>\n\n    </div>\n</div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/loading-spinner/loading-spinner.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/loading-spinner/loading-spinner.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedLoadingSpinnerLoadingSpinnerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"lds-ring\"><div></div><div></div><div></div><div></div></div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/_helpers/must-match.validator.ts":
  /*!**************************************************!*\
    !*** ./src/app/_helpers/must-match.validator.ts ***!
    \**************************************************/

  /*! exports provided: MustMatch */

  /***/
  function srcApp_helpersMustMatchValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MustMatch", function () {
      return MustMatch;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // custom validator to check that two fields match


    function MustMatch(controlName, matchingControlName) {
      return function (formGroup) {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
          return;
        } // set error on matchingControl if validation fails


        if (control.value !== matchingControl.value) {
          matchingControl.setErrors({
            mustMatch: true
          });
        } else {
          matchingControl.setErrors(null);
        }
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_account_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/account/login/login.component */
    "./src/app/home/account/login/login.component.ts");
    /* harmony import */


    var _home_account_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/account/register/register.component */
    "./src/app/home/account/register/register.component.ts");
    /* harmony import */


    var _home_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/contact-us/contact-us.component */
    "./src/app/home/contact-us/contact-us.component.ts");
    /* harmony import */


    var _home_arcade_arcade_depsbuilder_arcade_depsbuilder_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home/arcade/arcade-depsbuilder/arcade-depsbuilder.component */
    "./src/app/home/arcade/arcade-depsbuilder/arcade-depsbuilder.component.ts");
    /* harmony import */


    var _home_components_list_components_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home/components-list/components-list.component */
    "./src/app/home/components-list/components-list.component.ts");
    /* harmony import */


    var _home_arcade_arcade_acdc_arcade_acdc_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./home/arcade/arcade-acdc/arcade-acdc.component */
    "./src/app/home/arcade/arcade-acdc/arcade-acdc.component.ts");
    /* harmony import */


    var _home_arcade_arcade_archsmelldetector_arcade_archsmelldetector_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./home/arcade/arcade-archsmelldetector/arcade-archsmelldetector.component */
    "./src/app/home/arcade/arcade-archsmelldetector/arcade-archsmelldetector.component.ts");
    /* harmony import */


    var _home_arcade_arcade_pkg_arcade_pkg_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./home/arcade/arcade-pkg/arcade-pkg.component */
    "./src/app/home/arcade/arcade-pkg/arcade-pkg.component.ts");
    /* harmony import */


    var _home_arcade_arcade_a2a_arcade_a2a_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./home/arcade/arcade-a2a/arcade-a2a.component */
    "./src/app/home/arcade/arcade-a2a/arcade-a2a.component.ts");
    /* harmony import */


    var _home_arcade_arcade_cvg_arcade_cvg_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./home/arcade/arcade-cvg/arcade-cvg.component */
    "./src/app/home/arcade/arcade-cvg/arcade-cvg.component.ts");
    /* harmony import */


    var _home_arcade_arcade_c2caverageanalyze_arcade_c2caverageanalyze_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./home/arcade/arcade-c2caverageanalyze/arcade-c2caverageanalyze.component */
    "./src/app/home/arcade/arcade-c2caverageanalyze/arcade-c2caverageanalyze.component.ts");
    /* harmony import */


    var _home_arcade_arcade_decaymetrics_arcade_decaymetrics_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./home/arcade/arcade-decaymetrics/arcade-decaymetrics.component */
    "./src/app/home/arcade/arcade-decaymetrics/arcade-decaymetrics.component.ts");
    /* harmony import */


    var _home_arcade_arcade_smelldensitianalyzer_arcade_smelldensitianalyzer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./home/arcade/arcade-smelldensitianalyzer/arcade-smelldensitianalyzer.component */
    "./src/app/home/arcade/arcade-smelldensitianalyzer/arcade-smelldensitianalyzer.component.ts");
    /* harmony import */


    var _home_arcade_arcade_smellevolutionanalyzer_arcade_smellevolutionanalyzer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./home/arcade/arcade-smellevolutionanalyzer/arcade-smellevolutionanalyzer.component */
    "./src/app/home/arcade/arcade-smellevolutionanalyzer/arcade-smellevolutionanalyzer.component.ts");
    /* harmony import */


    var _home_arcade_arcade_pipeextractor_arcade_pipeextractor_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./home/arcade/arcade-pipeextractor/arcade-pipeextractor.component */
    "./src/app/home/arcade/arcade-pipeextractor/arcade-pipeextractor.component.ts");
    /* harmony import */


    var _home_mallet_mallet_importdir_mallet_importdir_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./home/mallet/mallet-importdir/mallet-importdir.component */
    "./src/app/home/mallet/mallet-importdir/mallet-importdir.component.ts");
    /* harmony import */


    var _home_mallet_mallet_traintopics_mallet_traintopics_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./home/mallet/mallet-traintopics/mallet-traintopics.component */
    "./src/app/home/mallet/mallet-traintopics/mallet-traintopics.component.ts");
    /* harmony import */


    var _home_arcade_arcade_arc_arcade_arc_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./home/arcade/arcade-arc/arcade-arc.component */
    "./src/app/home/arcade/arcade-arc/arcade-arc.component.ts");
    /* harmony import */


    var _home_mallet_mallet_importfile_mallet_importfile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./home/mallet/mallet-importfile/mallet-importfile.component */
    "./src/app/home/mallet/mallet-importfile/mallet-importfile.component.ts");
    /* harmony import */


    var _home_mallet_mallet_trainclassifier_mallet_trainclassifier_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./home/mallet/mallet-trainclassifier/mallet-trainclassifier.component */
    "./src/app/home/mallet/mallet-trainclassifier/mallet-trainclassifier.component.ts");
    /* harmony import */


    var _home_mallet_mallet_infertopics_mallet_infertopics_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./home/mallet/mallet-infertopics/mallet-infertopics.component */
    "./src/app/home/mallet/mallet-infertopics/mallet-infertopics.component.ts");
    /* harmony import */


    var _home_mallet_mallet_hlda_mallet_hlda_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./home/mallet/mallet-hlda/mallet-hlda.component */
    "./src/app/home/mallet/mallet-hlda/mallet-hlda.component.ts");
    /* harmony import */


    var _home_mallet_mallet_prune_mallet_prune_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./home/mallet/mallet-prune/mallet-prune.component */
    "./src/app/home/mallet/mallet-prune/mallet-prune.component.ts");
    /* harmony import */


    var _home_mallet_mallet_split_mallet_split_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./home/mallet/mallet-split/mallet-split.component */
    "./src/app/home/mallet/mallet-split/mallet-split.component.ts");
    /* harmony import */


    var _home_codemaat_codemaat_vcs_codemaat_vcs_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./home/codemaat/codemaat-vcs/codemaat-vcs.component */
    "./src/app/home/codemaat/codemaat-vcs/codemaat-vcs.component.ts");
    /* harmony import */


    var _home_git_git_log_git_log_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./home/git/git-log/git-log.component */
    "./src/app/home/git/git-log/git-log.component.ts");
    /* harmony import */


    var _home_linux_linux_sed_linux_sed_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./home/linux/linux-sed/linux-sed.component */
    "./src/app/home/linux/linux-sed/linux-sed.component.ts");
    /* harmony import */


    var _home_arcade_arcade_cleanupcodemaat_arcade_cleanupcodemaat_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./home/arcade/arcade-cleanupcodemaat/arcade-cleanupcodemaat.component */
    "./src/app/home/arcade/arcade-cleanupcodemaat/arcade-cleanupcodemaat.component.ts");
    /* harmony import */


    var _home_arcade_arcade_batchclonefinder_arcade_batchclonefinder_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./home/arcade/arcade-batchclonefinder/arcade-batchclonefinder.component */
    "./src/app/home/arcade/arcade-batchclonefinder/arcade-batchclonefinder.component.ts");
    /* harmony import */


    var _home_arcade_arcade_depfindrunner_arcade_depfindrunner_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./home/arcade/arcade-depfindrunner/arcade-depfindrunner.component */
    "./src/app/home/arcade/arcade-depfindrunner/arcade-depfindrunner.component.ts");
    /* harmony import */


    var _home_arcade_arcade_dependencyfinderprocessing_arcade_dependencyfinderprocessing_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./home/arcade/arcade-dependencyfinderprocessing/arcade-dependencyfinderprocessing.component */
    "./src/app/home/arcade/arcade-dependencyfinderprocessing/arcade-dependencyfinderprocessing.component.ts");

    var routes = [//-------------Home page ------------------------
    {
      path: '',
      redirectTo: '/componentslist',
      pathMatch: 'full'
    }, {
      path: 'componentslist',
      component: _home_components_list_components_list_component__WEBPACK_IMPORTED_MODULE_7__["ComponentsListComponent"]
    }, {
      path: 'contactus',
      component: _home_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__["ContactUsComponent"]
    }, //-------------Account ---------------------------
    {
      path: 'login',
      component: _home_account_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'register',
      component: _home_account_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    }, //-------------Arcade Components ---------------------------
    {
      path: 'arcade-depsbuilder',
      component: _home_arcade_arcade_depsbuilder_arcade_depsbuilder_component__WEBPACK_IMPORTED_MODULE_6__["ArcadeDepsBuilderComponent"]
    }, {
      path: 'arcade-acdc',
      component: _home_arcade_arcade_acdc_arcade_acdc_component__WEBPACK_IMPORTED_MODULE_8__["ArcadeAcdcComponent"]
    }, {
      path: 'arcade-archsmelldetector',
      component: _home_arcade_arcade_archsmelldetector_arcade_archsmelldetector_component__WEBPACK_IMPORTED_MODULE_9__["ArcadeArchsmelldetectorComponent"]
    }, {
      path: 'arcade-arc',
      component: _home_arcade_arcade_arc_arcade_arc_component__WEBPACK_IMPORTED_MODULE_20__["ArcadeArcComponent"]
    }, {
      path: 'arcade-pkg',
      component: _home_arcade_arcade_pkg_arcade_pkg_component__WEBPACK_IMPORTED_MODULE_10__["ArcadePkgComponent"]
    }, {
      path: 'arcade-a2a',
      component: _home_arcade_arcade_a2a_arcade_a2a_component__WEBPACK_IMPORTED_MODULE_11__["ArcadeA2aComponent"]
    }, {
      path: 'arcade-cvg',
      component: _home_arcade_arcade_cvg_arcade_cvg_component__WEBPACK_IMPORTED_MODULE_12__["ArcadeCvgComponent"]
    }, {
      path: 'arcade-c2caverageanalyze',
      component: _home_arcade_arcade_c2caverageanalyze_arcade_c2caverageanalyze_component__WEBPACK_IMPORTED_MODULE_13__["ArcadeC2caverageanalyzeComponent"]
    }, {
      path: 'arcade-decaymetrics',
      component: _home_arcade_arcade_decaymetrics_arcade_decaymetrics_component__WEBPACK_IMPORTED_MODULE_14__["ArcadeDecaymetricsComponent"]
    }, {
      path: 'arcade-smelldensityanalyzer',
      component: _home_arcade_arcade_smelldensitianalyzer_arcade_smelldensitianalyzer_component__WEBPACK_IMPORTED_MODULE_15__["ArcadeSmelldensitianalyzerComponent"]
    }, {
      path: 'arcade-smellevolutionanalyzer',
      component: _home_arcade_arcade_smellevolutionanalyzer_arcade_smellevolutionanalyzer_component__WEBPACK_IMPORTED_MODULE_16__["ArcadeSmellevolutionanalyzerComponent"]
    }, {
      path: 'arcade-pipeextractor',
      component: _home_arcade_arcade_pipeextractor_arcade_pipeextractor_component__WEBPACK_IMPORTED_MODULE_17__["ArcadePipeextractorComponent"]
    }, {
      path: 'arcade-cleanupcodemaat',
      component: _home_arcade_arcade_cleanupcodemaat_arcade_cleanupcodemaat_component__WEBPACK_IMPORTED_MODULE_30__["ArcadeCleanupcodemaatComponent"]
    }, {
      path: 'arcade-batchclonefinder',
      component: _home_arcade_arcade_batchclonefinder_arcade_batchclonefinder_component__WEBPACK_IMPORTED_MODULE_31__["ArcadeBatchclonefinderComponent"]
    }, {
      path: 'arcade-depfindrunner',
      component: _home_arcade_arcade_depfindrunner_arcade_depfindrunner_component__WEBPACK_IMPORTED_MODULE_32__["ArcadeDepfindrunnerComponent"]
    }, {
      path: 'arcade-dependencyfinderprocessing',
      component: _home_arcade_arcade_dependencyfinderprocessing_arcade_dependencyfinderprocessing_component__WEBPACK_IMPORTED_MODULE_33__["ArcadeDependencyfinderprocessingComponent"]
    }, //-------------Mallet Components ---------------------------
    {
      path: 'mallet-importdir',
      component: _home_mallet_mallet_importdir_mallet_importdir_component__WEBPACK_IMPORTED_MODULE_18__["MalletImportdirComponent"]
    }, {
      path: 'mallet-traintopics',
      component: _home_mallet_mallet_traintopics_mallet_traintopics_component__WEBPACK_IMPORTED_MODULE_19__["MalletTraintopicsComponent"]
    }, {
      path: 'mallet-importfile',
      component: _home_mallet_mallet_importfile_mallet_importfile_component__WEBPACK_IMPORTED_MODULE_21__["MalletImportfileComponent"]
    }, {
      path: 'mallet-trainclassifier',
      component: _home_mallet_mallet_trainclassifier_mallet_trainclassifier_component__WEBPACK_IMPORTED_MODULE_22__["MalletTrainclassifierComponent"]
    }, {
      path: 'mallet-infertopics',
      component: _home_mallet_mallet_infertopics_mallet_infertopics_component__WEBPACK_IMPORTED_MODULE_23__["MalletInfertopicsComponent"]
    }, {
      path: 'mallet-hlda',
      component: _home_mallet_mallet_hlda_mallet_hlda_component__WEBPACK_IMPORTED_MODULE_24__["MalletHldaComponent"]
    }, {
      path: 'mallet-prune',
      component: _home_mallet_mallet_prune_mallet_prune_component__WEBPACK_IMPORTED_MODULE_25__["MalletPruneComponent"]
    }, {
      path: 'mallet-split',
      component: _home_mallet_mallet_split_mallet_split_component__WEBPACK_IMPORTED_MODULE_26__["MalletSplitComponent"]
    }, //-------------CodeMaat Components ---------------------------
    {
      path: 'codemaat-vcs',
      component: _home_codemaat_codemaat_vcs_codemaat_vcs_component__WEBPACK_IMPORTED_MODULE_27__["CodemaatVcsComponent"]
    }, //-------------Git Components ---------------------------
    {
      path: 'git-log',
      component: _home_git_git_log_git_log_component__WEBPACK_IMPORTED_MODULE_28__["GitLogComponent"]
    }, //-------------Linux Components ---------------------------
    {
      path: 'linux-sed',
      component: _home_linux_linux_sed_linux_sed_component__WEBPACK_IMPORTED_MODULE_29__["LinuxSedComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9hcHAuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Sain';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular-datatables */
    "./node_modules/angular-datatables/index.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _home_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./home/header/header.component */
    "./src/app/home/header/header.component.ts");
    /* harmony import */


    var _home_header_header_one_header_one_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./home/header/header-one/header-one.component */
    "./src/app/home/header/header-one/header-one.component.ts");
    /* harmony import */


    var _home_header_header_two_header_two_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./home/header/header-two/header-two.component */
    "./src/app/home/header/header-two/header-two.component.ts");
    /* harmony import */


    var _home_account_account_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./home/account/account.component */
    "./src/app/home/account/account.component.ts");
    /* harmony import */


    var _home_account_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./home/account/login/login.component */
    "./src/app/home/account/login/login.component.ts");
    /* harmony import */


    var _home_account_register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./home/account/register/register.component */
    "./src/app/home/account/register/register.component.ts");
    /* harmony import */


    var _home_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./home/contact-us/contact-us.component */
    "./src/app/home/contact-us/contact-us.component.ts");
    /* harmony import */


    var _home_arcade_arcade_depsbuilder_arcade_depsbuilder_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./home/arcade/arcade-depsbuilder/arcade-depsbuilder.component */
    "./src/app/home/arcade/arcade-depsbuilder/arcade-depsbuilder.component.ts");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _auth_guard_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./auth-guard.service */
    "./src/app/auth-guard.service.ts");
    /* harmony import */


    var _shared_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./shared/loading-spinner/loading-spinner.component */
    "./src/app/shared/loading-spinner/loading-spinner.component.ts");
    /* harmony import */


    var _home_header_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./home/header/footer/footer.component */
    "./src/app/home/header/footer/footer.component.ts");
    /* harmony import */


    var _home_arcade_arcade_acdc_arcade_acdc_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./home/arcade/arcade-acdc/arcade-acdc.component */
    "./src/app/home/arcade/arcade-acdc/arcade-acdc.component.ts");
    /* harmony import */


    var _home_components_list_components_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./home/components-list/components-list.component */
    "./src/app/home/components-list/components-list.component.ts");
    /* harmony import */


    var _home_arcade_arcade_archsmelldetector_arcade_archsmelldetector_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./home/arcade/arcade-archsmelldetector/arcade-archsmelldetector.component */
    "./src/app/home/arcade/arcade-archsmelldetector/arcade-archsmelldetector.component.ts");
    /* harmony import */


    var _home_arcade_arcade_pkg_arcade_pkg_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./home/arcade/arcade-pkg/arcade-pkg.component */
    "./src/app/home/arcade/arcade-pkg/arcade-pkg.component.ts");
    /* harmony import */


    var _home_arcade_arcade_a2a_arcade_a2a_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./home/arcade/arcade-a2a/arcade-a2a.component */
    "./src/app/home/arcade/arcade-a2a/arcade-a2a.component.ts");
    /* harmony import */


    var _home_arcade_arcade_cvg_arcade_cvg_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./home/arcade/arcade-cvg/arcade-cvg.component */
    "./src/app/home/arcade/arcade-cvg/arcade-cvg.component.ts");
    /* harmony import */


    var _home_arcade_arcade_c2caverageanalyze_arcade_c2caverageanalyze_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./home/arcade/arcade-c2caverageanalyze/arcade-c2caverageanalyze.component */
    "./src/app/home/arcade/arcade-c2caverageanalyze/arcade-c2caverageanalyze.component.ts");
    /* harmony import */


    var _home_arcade_arcade_decaymetrics_arcade_decaymetrics_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./home/arcade/arcade-decaymetrics/arcade-decaymetrics.component */
    "./src/app/home/arcade/arcade-decaymetrics/arcade-decaymetrics.component.ts");
    /* harmony import */


    var _home_arcade_arcade_smelldensitianalyzer_arcade_smelldensitianalyzer_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./home/arcade/arcade-smelldensitianalyzer/arcade-smelldensitianalyzer.component */
    "./src/app/home/arcade/arcade-smelldensitianalyzer/arcade-smelldensitianalyzer.component.ts");
    /* harmony import */


    var _home_arcade_arcade_smellevolutionanalyzer_arcade_smellevolutionanalyzer_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./home/arcade/arcade-smellevolutionanalyzer/arcade-smellevolutionanalyzer.component */
    "./src/app/home/arcade/arcade-smellevolutionanalyzer/arcade-smellevolutionanalyzer.component.ts");
    /* harmony import */


    var _home_arcade_arcade_pipeextractor_arcade_pipeextractor_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./home/arcade/arcade-pipeextractor/arcade-pipeextractor.component */
    "./src/app/home/arcade/arcade-pipeextractor/arcade-pipeextractor.component.ts");
    /* harmony import */


    var _home_mallet_mallet_importdir_mallet_importdir_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./home/mallet/mallet-importdir/mallet-importdir.component */
    "./src/app/home/mallet/mallet-importdir/mallet-importdir.component.ts");
    /* harmony import */


    var _home_mallet_mallet_traintopics_mallet_traintopics_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./home/mallet/mallet-traintopics/mallet-traintopics.component */
    "./src/app/home/mallet/mallet-traintopics/mallet-traintopics.component.ts");
    /* harmony import */


    var _home_arcade_arcade_arc_arcade_arc_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./home/arcade/arcade-arc/arcade-arc.component */
    "./src/app/home/arcade/arcade-arc/arcade-arc.component.ts");
    /* harmony import */


    var _home_mallet_mallet_importfile_mallet_importfile_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./home/mallet/mallet-importfile/mallet-importfile.component */
    "./src/app/home/mallet/mallet-importfile/mallet-importfile.component.ts");
    /* harmony import */


    var _home_mallet_mallet_trainclassifier_mallet_trainclassifier_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./home/mallet/mallet-trainclassifier/mallet-trainclassifier.component */
    "./src/app/home/mallet/mallet-trainclassifier/mallet-trainclassifier.component.ts");
    /* harmony import */


    var _home_mallet_mallet_infertopics_mallet_infertopics_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./home/mallet/mallet-infertopics/mallet-infertopics.component */
    "./src/app/home/mallet/mallet-infertopics/mallet-infertopics.component.ts");
    /* harmony import */


    var _home_mallet_mallet_hlda_mallet_hlda_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./home/mallet/mallet-hlda/mallet-hlda.component */
    "./src/app/home/mallet/mallet-hlda/mallet-hlda.component.ts");
    /* harmony import */


    var _home_mallet_mallet_prune_mallet_prune_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./home/mallet/mallet-prune/mallet-prune.component */
    "./src/app/home/mallet/mallet-prune/mallet-prune.component.ts");
    /* harmony import */


    var _home_mallet_mallet_split_mallet_split_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./home/mallet/mallet-split/mallet-split.component */
    "./src/app/home/mallet/mallet-split/mallet-split.component.ts");
    /* harmony import */


    var _home_codemaat_codemaat_vcs_codemaat_vcs_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./home/codemaat/codemaat-vcs/codemaat-vcs.component */
    "./src/app/home/codemaat/codemaat-vcs/codemaat-vcs.component.ts");
    /* harmony import */


    var _home_git_git_log_git_log_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./home/git/git-log/git-log.component */
    "./src/app/home/git/git-log/git-log.component.ts");
    /* harmony import */


    var _home_linux_linux_sed_linux_sed_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./home/linux/linux-sed/linux-sed.component */
    "./src/app/home/linux/linux-sed/linux-sed.component.ts");
    /* harmony import */


    var _home_arcade_arcade_cleanupcodemaat_arcade_cleanupcodemaat_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./home/arcade/arcade-cleanupcodemaat/arcade-cleanupcodemaat.component */
    "./src/app/home/arcade/arcade-cleanupcodemaat/arcade-cleanupcodemaat.component.ts");
    /* harmony import */


    var _home_arcade_arcade_batchclonefinder_arcade_batchclonefinder_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ./home/arcade/arcade-batchclonefinder/arcade-batchclonefinder.component */
    "./src/app/home/arcade/arcade-batchclonefinder/arcade-batchclonefinder.component.ts");
    /* harmony import */


    var _home_arcade_arcade_depfindrunner_arcade_depfindrunner_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! ./home/arcade/arcade-depfindrunner/arcade-depfindrunner.component */
    "./src/app/home/arcade/arcade-depfindrunner/arcade-depfindrunner.component.ts");
    /* harmony import */


    var _home_arcade_arcade_dependencyfinderprocessing_arcade_dependencyfinderprocessing_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ./home/arcade/arcade-dependencyfinderprocessing/arcade-dependencyfinderprocessing.component */
    "./src/app/home/arcade/arcade-dependencyfinderprocessing/arcade-dependencyfinderprocessing.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _home_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _home_header_header_one_header_one_component__WEBPACK_IMPORTED_MODULE_10__["HeaderOneComponent"], _home_header_header_two_header_two_component__WEBPACK_IMPORTED_MODULE_11__["HeaderTwoComponent"], _home_account_account_component__WEBPACK_IMPORTED_MODULE_12__["AccountComponent"], _home_account_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"], _home_account_register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"], _home_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_15__["ContactUsComponent"], _home_arcade_arcade_depsbuilder_arcade_depsbuilder_component__WEBPACK_IMPORTED_MODULE_16__["ArcadeDepsBuilderComponent"], _shared_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_19__["LoadingSpinnerComponent"], _home_header_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__["FooterComponent"], _home_arcade_arcade_acdc_arcade_acdc_component__WEBPACK_IMPORTED_MODULE_21__["ArcadeAcdcComponent"], _home_components_list_components_list_component__WEBPACK_IMPORTED_MODULE_22__["ComponentsListComponent"], _home_arcade_arcade_archsmelldetector_arcade_archsmelldetector_component__WEBPACK_IMPORTED_MODULE_23__["ArcadeArchsmelldetectorComponent"], _home_arcade_arcade_pkg_arcade_pkg_component__WEBPACK_IMPORTED_MODULE_24__["ArcadePkgComponent"], _home_arcade_arcade_a2a_arcade_a2a_component__WEBPACK_IMPORTED_MODULE_25__["ArcadeA2aComponent"], _home_arcade_arcade_cvg_arcade_cvg_component__WEBPACK_IMPORTED_MODULE_26__["ArcadeCvgComponent"], _home_arcade_arcade_c2caverageanalyze_arcade_c2caverageanalyze_component__WEBPACK_IMPORTED_MODULE_27__["ArcadeC2caverageanalyzeComponent"], _home_arcade_arcade_decaymetrics_arcade_decaymetrics_component__WEBPACK_IMPORTED_MODULE_28__["ArcadeDecaymetricsComponent"], _home_arcade_arcade_smelldensitianalyzer_arcade_smelldensitianalyzer_component__WEBPACK_IMPORTED_MODULE_29__["ArcadeSmelldensitianalyzerComponent"], _home_arcade_arcade_smellevolutionanalyzer_arcade_smellevolutionanalyzer_component__WEBPACK_IMPORTED_MODULE_30__["ArcadeSmellevolutionanalyzerComponent"], _home_arcade_arcade_pipeextractor_arcade_pipeextractor_component__WEBPACK_IMPORTED_MODULE_31__["ArcadePipeextractorComponent"], _home_mallet_mallet_importdir_mallet_importdir_component__WEBPACK_IMPORTED_MODULE_32__["MalletImportdirComponent"], _home_mallet_mallet_traintopics_mallet_traintopics_component__WEBPACK_IMPORTED_MODULE_33__["MalletTraintopicsComponent"], _home_arcade_arcade_arc_arcade_arc_component__WEBPACK_IMPORTED_MODULE_34__["ArcadeArcComponent"], _home_mallet_mallet_importfile_mallet_importfile_component__WEBPACK_IMPORTED_MODULE_35__["MalletImportfileComponent"], _home_mallet_mallet_trainclassifier_mallet_trainclassifier_component__WEBPACK_IMPORTED_MODULE_36__["MalletTrainclassifierComponent"], _home_mallet_mallet_infertopics_mallet_infertopics_component__WEBPACK_IMPORTED_MODULE_37__["MalletInfertopicsComponent"], _home_mallet_mallet_hlda_mallet_hlda_component__WEBPACK_IMPORTED_MODULE_38__["MalletHldaComponent"], _home_mallet_mallet_prune_mallet_prune_component__WEBPACK_IMPORTED_MODULE_39__["MalletPruneComponent"], _home_mallet_mallet_split_mallet_split_component__WEBPACK_IMPORTED_MODULE_40__["MalletSplitComponent"], _home_codemaat_codemaat_vcs_codemaat_vcs_component__WEBPACK_IMPORTED_MODULE_41__["CodemaatVcsComponent"], _home_git_git_log_git_log_component__WEBPACK_IMPORTED_MODULE_42__["GitLogComponent"], _home_linux_linux_sed_linux_sed_component__WEBPACK_IMPORTED_MODULE_43__["LinuxSedComponent"], _home_arcade_arcade_cleanupcodemaat_arcade_cleanupcodemaat_component__WEBPACK_IMPORTED_MODULE_44__["ArcadeCleanupcodemaatComponent"], _home_arcade_arcade_batchclonefinder_arcade_batchclonefinder_component__WEBPACK_IMPORTED_MODULE_45__["ArcadeBatchclonefinderComponent"], _home_arcade_arcade_depfindrunner_arcade_depfindrunner_component__WEBPACK_IMPORTED_MODULE_46__["ArcadeDepfindrunnerComponent"], _home_arcade_arcade_dependencyfinderprocessing_arcade_dependencyfinderprocessing_component__WEBPACK_IMPORTED_MODULE_47__["ArcadeDependencyfinderprocessingComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"]],
      providers: [_authentication_service__WEBPACK_IMPORTED_MODULE_17__["AuthenticationService"], _auth_guard_service__WEBPACK_IMPORTED_MODULE_18__["AuthGuardService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth-guard.service.ts":
  /*!***************************************!*\
    !*** ./src/app/auth-guard.service.ts ***!
    \***************************************/

  /*! exports provided: AuthGuardService */

  /***/
  function srcAppAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
      return AuthGuardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./authentication.service */
    "./src/app/authentication.service.ts");

    var AuthGuardService =
    /*#__PURE__*/
    function () {
      function AuthGuardService(auth, router) {
        _classCallCheck(this, AuthGuardService);

        this.auth = auth;
        this.router = router;
      }

      _createClass(AuthGuardService, [{
        key: "canActivate",
        value: function canActivate() {
          if (!this.auth.isLoggedIn()) {
            this.router.navigateByUrl('/');
            return false;
          }

          return true;
        }
      }]);

      return AuthGuardService;
    }();

    AuthGuardService.ctorParameters = function () {
      return [{
        type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuardService);
    /***/
  },

  /***/
  "./src/app/authentication.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/authentication.service.ts ***!
    \*******************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcAppAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");

    var AuthenticationService =
    /*#__PURE__*/
    function () {
      function AuthenticationService(http, router) {
        _classCallCheck(this, AuthenticationService);

        this.http = http;
        this.router = router;
      }

      _createClass(AuthenticationService, [{
        key: "saveToken",
        value: function saveToken(token) {
          localStorage.setItem('usertoken', token);
          this.token = token;
        }
      }, {
        key: "testConnection",
        value: function testConnection() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].auth_url + '/account');
        }
      }, {
        key: "getToken",
        value: function getToken() {
          if (!this.token) {
            this.token = localStorage.getItem('usertoken');
          }

          return this.token;
        }
      }, {
        key: "getUserDetails",
        value: function getUserDetails() {
          var token = this.getToken();

          if (token) {
            var payload = token.split('.')[1];
            payload = window.atob(payload);
            return JSON.parse(payload);
          } else {
            return null;
          }
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          var user = this.getUserDetails();
          if (user) return user.expire > Date.now() / 1000;else return false;
        }
      }, {
        key: "register",
        value: function register(user) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].auth_url + "/account/register", user);
        }
      }, {
        key: "login",
        value: function login(user) {
          var _this = this;

          var base = this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].auth_url + "/account/login", user);
          var request = base.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            if (data.token) {
              _this.saveToken(data.token);
            }

            return data;
          }));
          return request;
        }
      }, {
        key: "logout",
        value: function logout() {
          this.token = null;
          window.localStorage.removeItem('usertoken');
          this.router.navigateByUrl('/login');
        }
      }, {
        key: "handleError",
        value: function handleError(errorMessage) {
          var error = 'Undefined error';

          if (errorMessage.error) {
            var e = JSON.stringify(errorMessage.error);
            error = JSON.parse(e)["error"];
          }

          return error;
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthenticationService);
    /***/
  },

  /***/
  "./src/app/home/account/account.component.css":
  /*!****************************************************!*\
    !*** ./src/app/home/account/account.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeAccountAccountComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hY2NvdW50L2FjY291bnQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/home/account/account.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/home/account/account.component.ts ***!
    \***************************************************/

  /*! exports provided: AccountComponent */

  /***/
  function srcAppHomeAccountAccountComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountComponent", function () {
      return AccountComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AccountComponent =
    /*#__PURE__*/
    function () {
      function AccountComponent() {
        _classCallCheck(this, AccountComponent);
      }

      _createClass(AccountComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AccountComponent;
    }();

    AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-account',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./account.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/account/account.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./account.component.css */
      "./src/app/home/account/account.component.css")).default]
    })], AccountComponent);
    /***/
  },

  /***/
  "./src/app/home/account/login/login.component.css":
  /*!********************************************************!*\
    !*** ./src/app/home/account/login/login.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeAccountLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hY2NvdW50L2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/home/account/login/login.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/home/account/login/login.component.ts ***!
    \*******************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppHomeAccountLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../authentication.service */
    "./src/app/authentication.service.ts");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(auth, router, formBuilder) {
        _classCallCheck(this, LoginComponent);

        this.auth = auth;
        this.router = router;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.error = null;
        this.isLoading = false;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          if (this.auth.isLoggedIn()) {
            this.router.navigate(['/']);
          }

          this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]]
          });
          this.auth.testConnection().subscribe(function (resData) {}, function (errorMessage) {
            _this2.error = 'Could not connect to sain authentication service, please download at \n https://hub.docker.com/repository/docker/nsfsain/sain-auth-service, start image, and set port to 3000';
          });
        }
      }, {
        key: "login",
        value: function login() {
          var _this3 = this;

          this.submitted = true; // stop here if form is invalid

          if (this.loginForm.invalid) {
            return;
          }

          this.isLoading = true;
          this.auth.login(this.loginForm.value).subscribe(function (resData) {
            _this3.router.navigate(['/componentslist']);
          }, function (errorMessage) {
            _this3.error = _this3.auth.handleError(errorMessage);
          });
          this.isLoading = false;
        }
      }, {
        key: "f",
        get: function get() {
          return this.loginForm.controls;
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/account/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/home/account/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/home/account/register/register.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/home/account/register/register.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeAccountRegisterRegisterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hY2NvdW50L3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/home/account/register/register.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/home/account/register/register.component.ts ***!
    \*************************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppHomeAccountRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../_helpers/must-match.validator */
    "./src/app/_helpers/must-match.validator.ts");

    var RegisterComponent =
    /*#__PURE__*/
    function () {
      function RegisterComponent(auth, router, formBuilder) {
        _classCallCheck(this, RegisterComponent);

        this.auth = auth;
        this.router = router;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.isLoading = false;
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.registerForm = this.formBuilder.group({
            firstname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          }, {
            validator: Object(_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_5__["MustMatch"])('password', 'confirmPassword')
          });
          this.auth.testConnection().subscribe(function (resData) {}, function (errorMessage) {
            _this4.error = 'Could not connect to sain authentication service, please download at \n https://hub.docker.com/repository/docker/nsfsain/sain-auth-service, start image, \nand set port to 3000';
          });
        }
      }, {
        key: "register",
        value: function register() {
          var _this5 = this;

          this.submitted = true;

          if (!this.registerForm.valid) {
            return;
          }

          this.isLoading = true;
          this.auth.register(this.registerForm.value).subscribe(function (resData) {
            _this5.router.navigate(['/login']);
          }, function (errorMessage) {
            _this5.error = _this5.auth.handleError(errorMessage);
          });
          this.isLoading = false;
        }
      }, {
        key: "f",
        get: function get() {
          return this.registerForm.controls;
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }];
    };

    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/account/register/register.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.component.css */
      "./src/app/home/account/register/register.component.css")).default]
    })], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/home/arcade/arcade-a2a/arcade-a2a.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/home/arcade/arcade-a2a/arcade-a2a.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeArcadeArcadeA2aArcadeA2aComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcmNhZGUtYTJhL2FyY2FkZS1hMmEuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/home/arcade/arcade-a2a/arcade-a2a.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/home/arcade/arcade-a2a/arcade-a2a.component.ts ***!
    \****************************************************************/

  /*! exports provided: ArcadeA2aComponent */

  /***/
  function srcAppHomeArcadeArcadeA2aArcadeA2aComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArcadeA2aComponent", function () {
      return ArcadeA2aComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _arcade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../arcade.service */
    "./src/app/home/arcade/arcade.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var ArcadeA2aComponent =
    /*#__PURE__*/
    function () {
      function ArcadeA2aComponent(auth, arcade, formBuilder) {
        _classCallCheck(this, ArcadeA2aComponent);

        this.auth = auth;
        this.arcade = arcade;
        this.formBuilder = formBuilder;
        this.results = null;
        this.submitted = false;
        this.isLoading = false;
        this.error = null;
      }

      _createClass(ArcadeA2aComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.dataForm = this.formBuilder.group({
            clusteredDir: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            distOp: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });

          if (this.isLoading == false) {
            this.arcade.testA2aConnection().subscribe(function (resData) {}, function (errorMessage) {
              _this6.error = 'Could not connect to A2a service, \n please download at https://hub.docker.com/repository/docker/nsfsain/arcade-a2a-service, start image, and set port to 3005';
            });
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this7 = this;

          if (!this.dataForm.valid //||
          // !this.historyRevisionFile ||
          // !this.structurl_DSMFile
          ) {
              return;
            }

          var data = new FormData();
          data.append("clusteredDir", this.dataForm.get("clusteredDir").value);
          data.append("distOp", this.dataForm.get("distOp").value);
          this.submitted = true;
          this.isLoading = true;
          this.arcade.runA2a(data).subscribe(function (resData) {
            _this7.results = resData;
            console.log(_this7.results);
            _this7.isLoading = false;
          }, function (errorMessage) {
            console.log(errorMessage);
            _this7.error = 'Unable to execute from back-end';
            _this7.isLoading = false;
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.dataForm.controls;
        }
      }]);

      return ArcadeA2aComponent;
    }();

    ArcadeA2aComponent.ctorParameters = function () {
      return [{
        type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _arcade_service__WEBPACK_IMPORTED_MODULE_3__["ArcadeService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    ArcadeA2aComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-arcade-a2a',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./arcade-a2a.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/arcade/arcade-a2a/arcade-a2a.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./arcade-a2a.component.css */
      "./src/app/home/arcade/arcade-a2a/arcade-a2a.component.css")).default]
    })], ArcadeA2aComponent);
    /***/
  },

  /***/
  "./src/app/home/arcade/arcade-acdc/arcade-acdc.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/home/arcade/arcade-acdc/arcade-acdc.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeArcadeArcadeAcdcArcadeAcdcComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".font-double{\r\n    font-size:1.2rem;\r\n}\r\n.font-single{\r\n    font-size:1.05rem;\r\n}\r\n.height-400{\r\n    height:250px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFyY2FkZS1hY2RjL2FyY2FkZS1hY2RjLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJhcmNhZGUtYWNkYy9hcmNhZGUtYWNkYy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvbnQtZG91Ymxle1xyXG4gICAgZm9udC1zaXplOjEuMnJlbTtcclxufVxyXG4uZm9udC1zaW5nbGV7XHJcbiAgICBmb250LXNpemU6MS4wNXJlbTtcclxufVxyXG4uaGVpZ2h0LTQwMHtcclxuICAgIGhlaWdodDoyNTBweDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/arcade/arcade-acdc/arcade-acdc.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/home/arcade/arcade-acdc/arcade-acdc.component.ts ***!
    \******************************************************************/

  /*! exports provided: ArcadeAcdcComponent */

  /***/
  function srcAppHomeArcadeArcadeAcdcArcadeAcdcComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArcadeAcdcComponent", function () {
      return ArcadeAcdcComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _arcade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../arcade.service */
    "./src/app/home/arcade/arcade.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var ArcadeAcdcComponent =
    /*#__PURE__*/
    function () {
      function ArcadeAcdcComponent(auth, arcade, formBuilder) {
        _classCallCheck(this, ArcadeAcdcComponent);

        this.auth = auth;
        this.arcade = arcade;
        this.formBuilder = formBuilder;
        this.results = null;
        this.submitted = false;
        this.isLoading = false;
        this.error = null;
      }

      _createClass(ArcadeAcdcComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.dataForm = this.formBuilder.group({
            depsFile: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            clusteredFile: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });

          if (this.isLoading == false) {
            this.arcade.testAcdcConnection().subscribe(function (resData) {}, function (errorMessage) {
              _this8.error = 'Could not connect to Acdc service, \n please download at https://hub.docker.com/repository/docker/nsfsain/arcade-acdc-service, start image, and set port to 3002';
            });
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this9 = this;

          if (!this.dataForm.valid //||
          // !this.historyRevisionFile ||
          // !this.structurl_DSMFile
          ) {
              return;
            }

          var data = new FormData();
          data.append("depsFile", this.dataForm.get("depsFile").value);
          data.append("clusteredFile", this.dataForm.get("clusteredFile").value);
          this.submitted = true;
          this.isLoading = true;
          this.arcade.runAcdc(data).subscribe(function (resData) {
            _this9.results = resData;
            console.log(_this9.results);
            _this9.isLoading = false;
          }, function (errorMessage) {
            console.log(errorMessage);
            _this9.error = 'Unable to execute from back-end';
            _this9.isLoading = false;
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.dataForm.controls;
        }
      }]);

      return ArcadeAcdcComponent;
    }();

    ArcadeAcdcComponent.ctorParameters = function () {
      return [{
        type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _arcade_service__WEBPACK_IMPORTED_MODULE_3__["ArcadeService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    ArcadeAcdcComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-arcade-acdc',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./arcade-acdc.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/arcade/arcade-acdc/arcade-acdc.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./arcade-acdc.component.css */
      "./src/app/home/arcade/arcade-acdc/arcade-acdc.component.css")).default]
    })], ArcadeAcdcComponent);
    /***/
  },

  /***/
  "./src/app/home/arcade/arcade-arc/arcade-arc.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/home/arcade/arcade-arc/arcade-arc.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeArcadeArcadeArcArcadeArcComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcmNhZGUtYXJjL2FyY2FkZS1hcmMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/home/arcade/arcade-arc/arcade-arc.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/home/arcade/arcade-arc/arcade-arc.component.ts ***!
    \****************************************************************/

  /*! exports provided: ArcadeArcComponent */

  /***/
  function srcAppHomeArcadeArcadeArcArcadeArcComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArcadeArcComponent", function () {
      return ArcadeArcComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _arcade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../arcade.service */
    "./src/app/home/arcade/arcade.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var ArcadeArcComponent =
    /*#__PURE__*/
    function () {
      function ArcadeArcComponent(auth, arcade, formBuilder) {
        _classCallCheck(this, ArcadeArcComponent);

        this.auth = auth;
        this.arcade = arcade;
        this.formBuilder = formBuilder;
        this.results = null;
        this.submitted = false;
        this.isLoading = false;
        this.error = null;
      }

      _createClass(ArcadeArcComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.dataForm = this.formBuilder.group({
            srcDir: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            outputDir: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            classDir: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });

          if (this.isLoading == false) {
            this.arcade.testArcConnection().subscribe(function (resData) {}, function (errorMessage) {
              _this10.error = 'Could not connect to Arc service, \n please download at https://hub.docker.com/repository/docker/nsfsain/arcade-arc-service, start image, and set port to 3014';
            });
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this11 = this;

          if (!this.dataForm.valid) {
            return;
          }

          var data = new FormData();
          data.append("srcDir", this.dataForm.get("srcDir").value);
          data.append("outputDir", this.dataForm.get("outputDir").value);
          data.append("classDir", this.dataForm.get("classDir").value);
          this.submitted = true;
          this.isLoading = true;
          this.arcade.runArc(data).subscribe(function (resData) {
            _this11.results = resData;
            console.log(_this11.results);
            _this11.isLoading = false;
          }, function (errorMessage) {
            console.log(errorMessage);
            _this11.error = 'Unable to execute from back-end';
            _this11.isLoading = false;
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.dataForm.controls;
        }
      }]);

      return ArcadeArcComponent;
    }();

    ArcadeArcComponent.ctorParameters = function () {
      return [{
        type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _arcade_service__WEBPACK_IMPORTED_MODULE_3__["ArcadeService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    ArcadeArcComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-arcade-arc',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./arcade-arc.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/arcade/arcade-arc/arcade-arc.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./arcade-arc.component.css */
      "./src/app/home/arcade/arcade-arc/arcade-arc.component.css")).default]
    })], ArcadeArcComponent);
    /***/
  },

  /***/
  "./src/app/home/arcade/arcade-archsmelldetector/arcade-archsmelldetector.component.css":
  /*!*********************************************************************************************!*\
    !*** ./src/app/home/arcade/arcade-archsmelldetector/arcade-archsmelldetector.component.css ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeArcadeArcadeArchsmelldetectorArcadeArchsmelldetectorComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcmNhZGUtYXJjaHNtZWxsZGV0ZWN0b3IvYXJjYWRlLWFyY2hzbWVsbGRldGVjdG9yLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/home/arcade/arcade-archsmelldetector/arcade-archsmelldetector.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/home/arcade/arcade-archsmelldetector/arcade-archsmelldetector.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: ArcadeArchsmelldetectorComponent */

  /***/
  function srcAppHomeArcadeArcadeArchsmelldetectorArcadeArchsmelldetectorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArcadeArchsmelldetectorComponent", function () {
      return ArcadeArchsmelldetectorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _arcade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../arcade.service */
    "./src/app/home/arcade/arcade.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var ArcadeArchsmelldetectorComponent =
    /*#__PURE__*/
    function () {
      function ArcadeArchsmelldetectorComponent(auth, arcade, formBuilder) {
        _classCallCheck(this, ArcadeArchsmelldetectorComponent);

        this.auth = auth;
        this.arcade = arcade;
        this.formBuilder = formBuilder;
        this.results = null;
        this.submitted = false;
        this.isLoading = false;
        this.error = null;
      }

      _createClass(ArcadeArchsmelldetectorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.dataForm = this.formBuilder.group({
            depsFile: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            clusteredFile: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            smellFile: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });

          if (this.isLoading == false) {
            this.arcade.testArchsmelldetectorConnection().subscribe(function (resData) {}, function (errorMessage) {
              _this12.error = 'Could not connect to Archsmelldetector service, \n please download at https://hub.docker.com/repository/docker/nsfsain/arcade-archsmelldetector-service, start image, and set port to 3003';
            });
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this13 = this;

          if (!this.dataForm.valid //||
          // !this.historyRevisionFile ||
          // !this.structurl_DSMFile
          ) {
              return;
            }

          var data = new FormData();
          data.append("depsFile", this.dataForm.get("depsFile").value);
          data.append("clusteredFile", this.dataForm.get("clusteredFile").value);
          data.append("smellFile", this.dataForm.get("smellFile").value);
          this.submitted = true;
          this.isLoading = true;
          this.arcade.runArchsmelldetector(data).subscribe(function (resData) {
            _this13.results = resData;
            console.log(_this13.results);
            _this13.isLoading = false;
          }, function (errorMessage) {
            console.log(errorMessage);
            _this13.error = 'Unable to execute from back-end';
            _this13.isLoading = false;
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.dataForm.controls;
        }
      }]);

      return ArcadeArchsmelldetectorComponent;
    }();

    ArcadeArchsmelldetectorComponent.ctorParameters = function () {
      return [{
        type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _arcade_service__WEBPACK_IMPORTED_MODULE_3__["ArcadeService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    ArcadeArchsmelldetectorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-arcade-archsmelldetector',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./arcade-archsmelldetector.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/arcade/arcade-archsmelldetector/arcade-archsmelldetector.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./arcade-archsmelldetector.component.css */
      "./src/app/home/arcade/arcade-archsmelldetector/arcade-archsmelldetector.component.css")).default]
    })], ArcadeArchsmelldetectorComponent);
    /***/
  },

  /***/
  "./src/app/home/arcade/arcade-batchclonefinder/arcade-batchclonefinder.component.css":
  /*!*******************************************************************************************!*\
    !*** ./src/app/home/arcade/arcade-batchclonefinder/arcade-batchclonefinder.component.css ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeArcadeArcadeBatchclonefinderArcadeBatchclonefinderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcmNhZGUtYmF0Y2hjbG9uZWZpbmRlci9hcmNhZGUtYmF0Y2hjbG9uZWZpbmRlci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/home/arcade/arcade-batchclonefinder/arcade-batchclonefinder.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/home/arcade/arcade-batchclonefinder/arcade-batchclonefinder.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: ArcadeBatchclonefinderComponent */

  /***/
  function srcAppHomeArcadeArcadeBatchclonefinderArcadeBatchclonefinderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArcadeBatchclonefinderComponent", function () {
      return ArcadeBatchclonefinderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _arcade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../arcade.service */
    "./src/app/home/arcade/arcade.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var ArcadeBatchclonefinderComponent =
    /*#__PURE__*/
    function () {
      function ArcadeBatchclonefinderComponent(auth, arcade, formBuilder) {
        _classCallCheck(this, ArcadeBatchclonefinderComponent);

        this.auth = auth;
        this.arcade = arcade;
        this.formBuilder = formBuilder;
        this.results = null;
        this.submitted = false;
        this.isLoading = false;
        this.error = null;
      }

      _createClass(ArcadeBatchclonefinderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          this.dataForm = this.formBuilder.group({
            inputDir: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            outputDir: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });

          if (this.isLoading == false) {
            this.arcade.tesbatchCloneFinderConnection().subscribe(function (resData) {}, function (errorMessage) {
              _this14.error = 'Could not connect to Arcade Batch Clone Finder service, \n please download at https://hub.docker.com/repository/docker/nsfsain/arcade-batchclonefinder-service, start image, and set port to 3025';
            });
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this15 = this;

          if (!this.dataForm.valid) {
            return;
          }

          var data = new FormData();
          data.append("inputDir", this.dataForm.get("inputDir").value);
          data.append("outputDir", this.dataForm.get("outputDir").value);
          this.submitted = true;
          this.isLoading = true;
          this.arcade.runbatchCloneFinder(data).subscribe(function (resData) {
            _this15.results = resData;
            console.log(_this15.results);
            _this15.isLoading = false;
          }, function (errorMessage) {
            console.log(errorMessage);
            _this15.error = 'Unable to execute from back-end';
            _this15.isLoading = false;
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.dataForm.controls;
        }
      }]);

      return ArcadeBatchclonefinderComponent;
    }();

    ArcadeBatchclonefinderComponent.ctorParameters = function () {
      return [{
        type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _arcade_service__WEBPACK_IMPORTED_MODULE_3__["ArcadeService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    ArcadeBatchclonefinderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-arcade-batchclonefinder',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./arcade-batchclonefinder.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/arcade/arcade-batchclonefinder/arcade-batchclonefinder.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./arcade-batchclonefinder.component.css */
      "./src/app/home/arcade/arcade-batchclonefinder/arcade-batchclonefinder.component.css")).default]
    })], ArcadeBatchclonefinderComponent);
    /***/
  },

  /***/
  "./src/app/home/arcade/arcade-c2caverageanalyze/arcade-c2caverageanalyze.component.css":
  /*!*********************************************************************************************!*\
    !*** ./src/app/home/arcade/arcade-c2caverageanalyze/arcade-c2caverageanalyze.component.css ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeArcadeArcadeC2caverageanalyzeArcadeC2caverageanalyzeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcmNhZGUtYzJjYXZlcmFnZWFuYWx5emUvYXJjYWRlLWMyY2F2ZXJhZ2VhbmFseXplLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/home/arcade/arcade-c2caverageanalyze/arcade-c2caverageanalyze.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/home/arcade/arcade-c2caverageanalyze/arcade-c2caverageanalyze.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: ArcadeC2caverageanalyzeComponent */

  /***/
  function srcAppHomeArcadeArcadeC2caverageanalyzeArcadeC2caverageanalyzeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArcadeC2caverageanalyzeComponent", function () {
      return ArcadeC2caverageanalyzeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _arcade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../arcade.service */
    "./src/app/home/arcade/arcade.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var ArcadeC2caverageanalyzeComponent =
    /*#__PURE__*/
    function () {
      function ArcadeC2caverageanalyzeComponent(auth, arcade, formBuilder) {
        _classCallCheck(this, ArcadeC2caverageanalyzeComponent);

        this.auth = auth;
        this.arcade = arcade;
        this.formBuilder = formBuilder;
        this.results = null;
        this.submitted = false;
        this.isLoading = false;
        this.error = null;
      }

      _createClass(ArcadeC2caverageanalyzeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          this.dataForm = this.formBuilder.group({
            cvglogFile: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });

          if (this.isLoading == false) {
            this.arcade.testC2cAverageAnalyzeConnection().subscribe(function (resData) {}, function (errorMessage) {
              _this16.error = 'Could not connect to C2cAverageAnalyze service, \n please download at https://hub.docker.com/repository/docker/nsfsain/arcade-c2caverageanalyze-service, start image, and set port to 3007';
            });
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this17 = this;

          if (!this.dataForm.valid //||
          ) {
              return;
            }

          var data = new FormData();
          data.append("cvglogFile", this.dataForm.get("cvglogFile").value);
          this.submitted = true;
          this.isLoading = true;
          this.arcade.runC2cAverageAnalyze(data).subscribe(function (resData) {
            _this17.results = resData;
            console.log(_this17.results);
            _this17.isLoading = false;
          }, function (errorMessage) {
            console.log(errorMessage);
            _this17.error = 'Unable to execute from back-end';
            _this17.isLoading = false;
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.dataForm.controls;
        }
      }]);

      return ArcadeC2caverageanalyzeComponent;
    }();

    ArcadeC2caverageanalyzeComponent.ctorParameters = function () {
      return [{
        type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _arcade_service__WEBPACK_IMPORTED_MODULE_3__["ArcadeService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    ArcadeC2caverageanalyzeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-arcade-c2caverageanalyze',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./arcade-c2caverageanalyze.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/arcade/arcade-c2caverageanalyze/arcade-c2caverageanalyze.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./arcade-c2caverageanalyze.component.css */
      "./src/app/home/arcade/arcade-c2caverageanalyze/arcade-c2caverageanalyze.component.css")).default]
    })], ArcadeC2caverageanalyzeComponent);
    /***/
  },

  /***/
  "./src/app/home/arcade/arcade-cleanupcodemaat/arcade-cleanupcodemaat.component.css":
  /*!*****************************************************************************************!*\
    !*** ./src/app/home/arcade/arcade-cleanupcodemaat/arcade-cleanupcodemaat.component.css ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeArcadeArcadeCleanupcodemaatArcadeCleanupcodemaatComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcmNhZGUtY2xlYW51cGNvZGVtYWF0L2FyY2FkZS1jbGVhbnVwY29kZW1hYXQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/home/arcade/arcade-cleanupcodemaat/arcade-cleanupcodemaat.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/home/arcade/arcade-cleanupcodemaat/arcade-cleanupcodemaat.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: ArcadeCleanupcodemaatComponent */

  /***/
  function srcAppHomeArcadeArcadeCleanupcodemaatArcadeCleanupcodemaatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArcadeCleanupcodemaatComponent", function () {
      return ArcadeCleanupcodemaatComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _arcade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../arcade.service */
    "./src/app/home/arcade/arcade.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var ArcadeCleanupcodemaatComponent =
    /*#__PURE__*/
    function () {
      function ArcadeCleanupcodemaatComponent(auth, arcade, formBuilder) {
        _classCallCheck(this, ArcadeCleanupcodemaatComponent);

        this.auth = auth;
        this.arcade = arcade;
        this.formBuilder = formBuilder;
        this.results = null;
        this.submitted = false;
        this.isLoading = false;
        this.error = null;
      }

      _createClass(ArcadeCleanupcodemaatComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this18 = this;

          this.dataForm = this.formBuilder.group({
            inputDir: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });

          if (this.isLoading == false) {
            this.arcade.tesCleanupCodeMaatConnection().subscribe(function (resData) {}, function (errorMessage) {
              _this18.error = 'Could not connect to Clean-up Code-Maat service, \n please download at https://hub.docker.com/repository/docker/nsfsain/arcade-cleanupcodemaat-service, start image, and set port to 3024';
            });
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this19 = this;

          if (!this.dataForm.valid) {
            return;
          }

          var data = new FormData();
          data.append("inputDir", this.dataForm.get("inputDir").value);
          this.submitted = true;
          this.isLoading = true;
          this.arcade.runCleanupCodeMaat(data).subscribe(function (resData) {
            _this19.results = resData;
            console.log(_this19.results);
            _this19.isLoading = false;
          }, function (errorMessage) {
            console.log(errorMessage);
            _this19.error = 'Unable to execute from back-end';
            _this19.isLoading = false;
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.dataForm.controls;
        }
      }]);

      return ArcadeCleanupcodemaatComponent;
    }();

    ArcadeCleanupcodemaatComponent.ctorParameters = function () {
      return [{
        type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _arcade_service__WEBPACK_IMPORTED_MODULE_3__["ArcadeService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    ArcadeCleanupcodemaatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-arcade-cleanupcodemaat',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./arcade-cleanupcodemaat.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/arcade/arcade-cleanupcodemaat/arcade-cleanupcodemaat.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./arcade-cleanupcodemaat.component.css */
      "./src/app/home/arcade/arcade-cleanupcodemaat/arcade-cleanupcodemaat.component.css")).default]
    })], ArcadeCleanupcodemaatComponent);
    /***/
  },

  /***/
  "./src/app/home/arcade/arcade-cvg/arcade-cvg.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/home/arcade/arcade-cvg/arcade-cvg.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeArcadeArcadeCvgArcadeCvgComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcmNhZGUtY3ZnL2FyY2FkZS1jdmcuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/home/arcade/arcade-cvg/arcade-cvg.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/home/arcade/arcade-cvg/arcade-cvg.component.ts ***!
    \****************************************************************/

  /*! exports provided: ArcadeCvgComponent */

  /***/
  function srcAppHomeArcadeArcadeCvgArcadeCvgComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArcadeCvgComponent", function () {
      return ArcadeCvgComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _arcade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../arcade.service */
    "./src/app/home/arcade/arcade.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var ArcadeCvgComponent =
    /*#__PURE__*/
    function () {
      function ArcadeCvgComponent(auth, arcade, formBuilder) {
        _classCallCheck(this, ArcadeCvgComponent);

        this.auth = auth;
        this.arcade = arcade;
        this.formBuilder = formBuilder;
        this.results = null;
        this.submitted = false;
        this.isLoading = false;
        this.error = null;
      }

      _createClass(ArcadeCvgComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this20 = this;

          this.dataForm = this.formBuilder.group({
            clusterDir: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });

          if (this.isLoading == false) {
            this.arcade.testCvgConnection().subscribe(function (resData) {}, function (errorMessage) {
              _this20.error = 'Could not connect to cvg service, \n please download at https://hub.docker.com/repository/docker/nsfsain/arcade-cvg-service, start image, and set port to 3006';
            });
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this21 = this;

          if (!this.dataForm.valid //||
          ) {
              return;
            }

          var data = new FormData();
          data.append("clusterDir", this.dataForm.get("clusterDir").value);
          this.submitted = true;
          this.isLoading = true;
          this.arcade.runCvg(data).subscribe(function (resData) {
            _this21.results = resData;
            console.log(_this21.results);
            _this21.isLoading = false;
          }, function (errorMessage) {
            console.log(errorMessage);
            _this21.error = 'Unable to execute from back-end';
            _this21.isLoading = false;
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.dataForm.controls;
        }
      }]);

      return ArcadeCvgComponent;
    }();

    ArcadeCvgComponent.ctorParameters = function () {
      return [{
        type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _arcade_service__WEBPACK_IMPORTED_MODULE_3__["ArcadeService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    ArcadeCvgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-arcade-cvg',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./arcade-cvg.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/arcade/arcade-cvg/arcade-cvg.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./arcade-cvg.component.css */
      "./src/app/home/arcade/arcade-cvg/arcade-cvg.component.css")).default]
    })], ArcadeCvgComponent);
    /***/
  },

  /***/
  "./src/app/home/arcade/arcade-decaymetrics/arcade-decaymetrics.component.css":
  /*!***********************************************************************************!*\
    !*** ./src/app/home/arcade/arcade-decaymetrics/arcade-decaymetrics.component.css ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeArcadeArcadeDecaymetricsArcadeDecaymetricsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcmNhZGUtZGVjYXltZXRyaWNzL2FyY2FkZS1kZWNheW1ldHJpY3MuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/home/arcade/arcade-decaymetrics/arcade-decaymetrics.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/home/arcade/arcade-decaymetrics/arcade-decaymetrics.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: ArcadeDecaymetricsComponent */

  /***/
  function srcAppHomeArcadeArcadeDecaymetricsArcadeDecaymetricsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArcadeDecaymetricsComponent", function () {
      return ArcadeDecaymetricsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _arcade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../arcade.service */
    "./src/app/home/arcade/arcade.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var ArcadeDecaymetricsComponent =
    /*#__PURE__*/
    function () {
      function ArcadeDecaymetricsComponent(auth, arcade, formBuilder) {
        _classCallCheck(this, ArcadeDecaymetricsComponent);

        this.auth = auth;
        this.arcade = arcade;
        this.formBuilder = formBuilder;
        this.language = "java";
        this.results = null;
        this.submitted = false;
        this.isLoading = false;
        this.error = null;
      }

      _createClass(ArcadeDecaymetricsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this22 = this;

          this.dataForm = this.formBuilder.group({
            depsDir: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            clusterDir: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });

          if (this.isLoading == false) {
            this.arcade.testDecaymetricsConnection().subscribe(function (resData) {}, function (errorMessage) {
              _this22.error = 'Could not connect to Decaymetrics service, \n please download at https://hub.docker.com/repository/docker/nsfsain/arcade-decaymetrics-service, start image, and set port to 3008';
            });
          }
        }
      }, {
        key: "onRadioChange",
        value: function onRadioChange(language) {
          this.language = language;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this23 = this;

          if (!this.dataForm.valid) {
            return;
          }

          var data = new FormData();
          data.append("depsDir", this.dataForm.get("depsDir").value);
          data.append("clusterDir", this.dataForm.get("clusterDir").value);
          this.submitted = true;
          this.isLoading = true;
          this.arcade.runDecaymetrics(data).subscribe(function (resData) {
            _this23.results = resData;
            console.log(_this23.results);
            _this23.isLoading = false;
          }, function (errorMessage) {
            console.log(errorMessage);
            _this23.error = 'Unable to execute from back-end';
            _this23.isLoading = false;
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.dataForm.controls;
        }
      }]);

      return ArcadeDecaymetricsComponent;
    }();

    ArcadeDecaymetricsComponent.ctorParameters = function () {
      return [{
        type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _arcade_service__WEBPACK_IMPORTED_MODULE_3__["ArcadeService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    ArcadeDecaymetricsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-arcade-decaymetrics',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./arcade-decaymetrics.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/arcade/arcade-decaymetrics/arcade-decaymetrics.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./arcade-decaymetrics.component.css */
      "./src/app/home/arcade/arcade-decaymetrics/arcade-decaymetrics.component.css")).default]
    })], ArcadeDecaymetricsComponent);
    /***/
  },

  /***/
  "./src/app/home/arcade/arcade-dependencyfinderprocessing/arcade-dependencyfinderprocessing.component.css":
  /*!***************************************************************************************************************!*\
    !*** ./src/app/home/arcade/arcade-dependencyfinderprocessing/arcade-dependencyfinderprocessing.component.css ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeArcadeArcadeDependencyfinderprocessingArcadeDependencyfinderprocessingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcmNhZGUtZGVwZW5kZW5jeWZpbmRlcnByb2Nlc3NpbmcvYXJjYWRlLWRlcGVuZGVuY3lmaW5kZXJwcm9jZXNzaW5nLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/home/arcade/arcade-dependencyfinderprocessing/arcade-dependencyfinderprocessing.component.ts":
  /*!**************************************************************************************************************!*\
    !*** ./src/app/home/arcade/arcade-dependencyfinderprocessing/arcade-dependencyfinderprocessing.component.ts ***!
    \**************************************************************************************************************/

  /*! exports provided: ArcadeDependencyfinderprocessingComponent */

  /***/
  function srcAppHomeArcadeArcadeDependencyfinderprocessingArcadeDependencyfinderprocessingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArcadeDependencyfinderprocessingComponent", function () {
      return ArcadeDependencyfinderprocessingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _arcade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../arcade.service */
    "./src/app/home/arcade/arcade.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var ArcadeDependencyfinderprocessingComponent =
    /*#__PURE__*/
    function () {
      function ArcadeDependencyfinderprocessingComponent(auth, arcade, formBuilder) {
        _classCallCheck(this, ArcadeDependencyfinderprocessingComponent);

        this.auth = auth;
        this.arcade = arcade;
        this.formBuilder = formBuilder;
        this.results = null;
        this.submitted = false;
        this.isLoading = false;
        this.error = null;
      }

      _createClass(ArcadeDependencyfinderprocessingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this24 = this;

          this.dataForm = this.formBuilder.group({
            inputDir: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            outputDir: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            depFinderDir: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            clusterDir: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            cloneDir: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            logicalDepFile: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            packageName: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });

          if (this.isLoading == false) {
            this.arcade.testdependencyFinderProcessingConnection().subscribe(function (resData) {}, function (errorMessage) {
              _this24.error = 'Could not connect to Arcade DependencyFinderProcessingConnection service, \n please download at https://hub.docker.com/repository/docker/nsfsain/arcade-dependencyfinderprocessing-service, start image, and set port to 3027';
            });
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this25 = this;

          if (!this.dataForm.valid) {
            return;
          }

          var data = new FormData();
          data.append("inputDir", this.dataForm.get("inputDir").value);
          data.append("outputDir", this.dataForm.get("outputDir").value);
          data.append("clusterDir", this.dataForm.get("clusterDir").value);
          data.append("depFinderDir", this.dataForm.get("depFinderDir").value);
          data.append("cloneDir", this.dataForm.get("cloneDir").value);
          data.append("logicalDepFile", this.dataForm.get("logicalDepFile").value);
          data.append("packageName", this.dataForm.get("packageName").value);
          this.submitted = true;
          this.isLoading = true;
          this.arcade.rundependencyFinderProcessing(data).subscribe(function (resData) {
            _this25.results = resData;
            console.log(_this25.results);
            _this25.isLoading = false;
          }, function (errorMessage) {
            console.log(errorMessage);
            _this25.error = 'Unable to execute from back-end';
            _this25.isLoading = false;
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.dataForm.controls;
        }
      }]);

      return ArcadeDependencyfinderprocessingComponent;
    }();

    ArcadeDependencyfinderprocessingComponent.ctorParameters = function () {
      return [{
        type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _arcade_service__WEBPACK_IMPORTED_MODULE_3__["ArcadeService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    ArcadeDependencyfinderprocessingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-arcade-dependencyfinderprocessing',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./arcade-dependencyfinderprocessing.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/arcade/arcade-dependencyfinderprocessing/arcade-dependencyfinderprocessing.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./arcade-dependencyfinderprocessing.component.css */
      "./src/app/home/arcade/arcade-dependencyfinderprocessing/arcade-dependencyfinderprocessing.component.css")).default]
    })], ArcadeDependencyfinderprocessingComponent);
    /***/
  },

  /***/
  "./src/app/home/arcade/arcade-depfindrunner/arcade-depfindrunner.component.css":
  /*!*************************************************************************************!*\
    !*** ./src/app/home/arcade/arcade-depfindrunner/arcade-depfindrunner.component.css ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeArcadeArcadeDepfindrunnerArcadeDepfindrunnerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcmNhZGUtZGVwZmluZHJ1bm5lci9hcmNhZGUtZGVwZmluZHJ1bm5lci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/home/arcade/arcade-depfindrunner/arcade-depfindrunner.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/home/arcade/arcade-depfindrunner/arcade-depfindrunner.component.ts ***!
    \************************************************************************************/

  /*! exports provided: ArcadeDepfindrunnerComponent */

  /***/
  function srcAppHomeArcadeArcadeDepfindrunnerArcadeDepfindrunnerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArcadeDepfindrunnerComponent", function () {
      return ArcadeDepfindrunnerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _arcade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../arcade.service */
    "./src/app/home/arcade/arcade.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var ArcadeDepfindrunnerComponent =
    /*#__PURE__*/
    function () {
      function ArcadeDepfindrunnerComponent(auth, arcade, formBuilder) {
        _classCallCheck(this, ArcadeDepfindrunnerComponent);

        this.auth = auth;
        this.arcade = arcade;
        this.formBuilder = formBuilder;
        this.results = null;
        this.submitted = false;
        this.isLoading = false;
        this.error = null;
      }

      _createClass(ArcadeDepfindrunnerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this26 = this;

          this.dataForm = this.formBuilder.group({
            inputDir: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            outputDir: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            classDir: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });

          if (this.isLoading == false) {
            this.arcade.testdepFindRunnerConnection().subscribe(function (resData) {}, function (errorMessage) {
              _this26.error = 'Could not connect to Arcade Depfindrunner service, \n please download at https://hub.docker.com/repository/docker/nsfsain/arcade-depfindrunner-service, start image, and set port to 3026';
            });
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this27 = this;

          if (!this.dataForm.valid) {
            return;
          }

          var data = new FormData();
          data.append("inputDir", this.dataForm.get("inputDir").value);
          data.append("outputDir", this.dataForm.get("outputDir").value);
          data.append("classDir", this.dataForm.get("classDir").value);
          this.submitted = true;
          this.isLoading = true;
          this.arcade.rundepFindRunner(data).subscribe(function (resData) {
            _this27.results = resData;
            console.log(_this27.results);
            _this27.isLoading = false;
          }, function (errorMessage) {
            console.log(errorMessage);
            _this27.error = 'Unable to execute from back-end';
            _this27.isLoading = false;
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.dataForm.controls;
        }
      }]);

      return ArcadeDepfindrunnerComponent;
    }();

    ArcadeDepfindrunnerComponent.ctorParameters = function () {
      return [{
        type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _arcade_service__WEBPACK_IMPORTED_MODULE_3__["ArcadeService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    ArcadeDepfindrunnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-arcade-depfindrunner',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./arcade-depfindrunner.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/arcade/arcade-depfindrunner/arcade-depfindrunner.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./arcade-depfindrunner.component.css */
      "./src/app/home/arcade/arcade-depfindrunner/arcade-depfindrunner.component.css")).default]
    })], ArcadeDepfindrunnerComponent);
    /***/
  },

  /***/
  "./src/app/home/arcade/arcade-depsbuilder/arcade-depsbuilder.component.css":
  /*!*********************************************************************************!*\
    !*** ./src/app/home/arcade/arcade-depsbuilder/arcade-depsbuilder.component.css ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeArcadeArcadeDepsbuilderArcadeDepsbuilderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".font-double{\r\n    font-size:1.2rem;\r\n}\r\n.font-single{\r\n    font-size:1.05rem;\r\n}\r\n.height-400{\r\n    height:250px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFyY2FkZS1kZXBzYnVpbGRlci9hcmNhZGUtZGVwc2J1aWxkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6ImFyY2FkZS1kZXBzYnVpbGRlci9hcmNhZGUtZGVwc2J1aWxkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb250LWRvdWJsZXtcclxuICAgIGZvbnQtc2l6ZToxLjJyZW07XHJcbn1cclxuLmZvbnQtc2luZ2xle1xyXG4gICAgZm9udC1zaXplOjEuMDVyZW07XHJcbn1cclxuLmhlaWdodC00MDB7XHJcbiAgICBoZWlnaHQ6MjUwcHg7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/arcade/arcade-depsbuilder/arcade-depsbuilder.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/home/arcade/arcade-depsbuilder/arcade-depsbuilder.component.ts ***!
    \********************************************************************************/

  /*! exports provided: ArcadeDepsBuilderComponent */

  /***/
  function srcAppHomeArcadeArcadeDepsbuilderArcadeDepsbuilderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArcadeDepsBuilderComponent", function () {
      return ArcadeDepsBuilderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _arcade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../arcade.service */
    "./src/app/home/arcade/arcade.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var ArcadeDepsBuilderComponent =
    /*#__PURE__*/
    function () {
      function ArcadeDepsBuilderComponent(auth, arcade, formBuilder) {
        _classCallCheck(this, ArcadeDepsBuilderComponent);

        this.auth = auth;
        this.arcade = arcade;
        this.formBuilder = formBuilder;
        this.language = "java";
        this.results = null;
        this.submitted = false;
        this.isLoading = false;
        this.error = null;
      }

      _createClass(ArcadeDepsBuilderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this28 = this;

          this.dataForm = this.formBuilder.group({
            language: ['java', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            classpath: ["Classpath", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            srcDir: ["Source Dir", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            depsFile: ['Deps File', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });

          if (this.isLoading == false) {
            this.arcade.testdepsBuilderConnection().subscribe(function (resData) {}, function (errorMessage) {
              _this28.error = 'Could not connect to Depsbuilder service, \n please download at https://hub.docker.com/repository/docker/nsfsain/arcade-depsbuilders-service, start image, and set port to 3001';
            });
          }
        }
      }, {
        key: "onRadioChange",
        value: function onRadioChange(language) {
          this.language = language;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this29 = this;

          if (!this.dataForm.valid) {
            return;
          }

          this.dataForm.controls['language'].setValue(this.language);
          var data = new FormData();
          data.append("language", this.dataForm.get("language").value);
          data.append("classpath", this.dataForm.get("classpath").value);
          data.append("depsFile", this.dataForm.get("depsFile").value);
          data.append("srcDir", this.dataForm.get("srcDir").value);
          this.submitted = true;
          this.isLoading = true;
          this.arcade.rundepsBuilder(data).subscribe(function (resData) {
            _this29.results = resData;
            console.log(_this29.results);
            _this29.isLoading = false;
          }, function (errorMessage) {
            console.log(errorMessage);
            _this29.error = 'Unable to execute from back-end';
            _this29.isLoading = false;
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.dataForm.controls;
        }
      }]);

      return ArcadeDepsBuilderComponent;
    }();

    ArcadeDepsBuilderComponent.ctorParameters = function () {
      return [{
        type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _arcade_service__WEBPACK_IMPORTED_MODULE_3__["ArcadeService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    ArcadeDepsBuilderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-arcade-depsbuilder',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./arcade-depsbuilder.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/arcade/arcade-depsbuilder/arcade-depsbuilder.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./arcade-depsbuilder.component.css */
      "./src/app/home/arcade/arcade-depsbuilder/arcade-depsbuilder.component.css")).default]
    })], ArcadeDepsBuilderComponent);
    /***/
  },

  /***/
  "./src/app/home/arcade/arcade-pipeextractor/arcade-pipeextractor.component.css":
  /*!*************************************************************************************!*\
    !*** ./src/app/home/arcade/arcade-pipeextractor/arcade-pipeextractor.component.css ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeArcadeArcadePipeextractorArcadePipeextractorComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcmNhZGUtcGlwZWV4dHJhY3Rvci9hcmNhZGUtcGlwZWV4dHJhY3Rvci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/home/arcade/arcade-pipeextractor/arcade-pipeextractor.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/home/arcade/arcade-pipeextractor/arcade-pipeextractor.component.ts ***!
    \************************************************************************************/

  /*! exports provided: ArcadePipeextractorComponent */

  /***/
  function srcAppHomeArcadeArcadePipeextractorArcadePipeextractorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArcadePipeextractorComponent", function () {
      return ArcadePipeextractorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _arcade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../arcade.service */
    "./src/app/home/arcade/arcade.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var ArcadePipeextractorComponent =
    /*#__PURE__*/
    function () {
      function ArcadePipeextractorComponent(auth, arcade, formBuilder) {
        _classCallCheck(this, ArcadePipeextractorComponent);

        this.auth = auth;
        this.arcade = arcade;
        this.formBuilder = formBuilder;
        this.results = null;
        this.submitted = false;
        this.isLoading = false;
        this.error = null;
      }

      _createClass(ArcadePipeextractorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this30 = this;

          this.dataForm = this.formBuilder.group({
            srcDir: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            outputDir: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });

          if (this.isLoading == false) {
            this.arcade.testPipeExtractorConnection().subscribe(function (resData) {}, function (errorMessage) {
              _this30.error = 'Could not connect to PipeExtractor service, \n please download at https://hub.docker.com/repository/docker/nsfsain/arcade-pipeextractor-service, start image, and set port to 3011';
            });
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this31 = this;

          if (!this.dataForm.valid) {
            return;
          }

          var data = new FormData();
          data.append("srcDir", this.dataForm.get("srcDir").value);
          data.append("outputDir", this.dataForm.get("outputDir").value);
          this.submitted = true;
          this.isLoading = true;
          this.arcade.runPipeExtractor(data).subscribe(function (resData) {
            _this31.results = resData;
            console.log(_this31.results);
            _this31.isLoading = false;
          }, function (errorMessage) {
            console.log(errorMessage);
            _this31.error = 'Unable to execute from back-end';
            _this31.isLoading = false;
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.dataForm.controls;
        }
      }]);

      return ArcadePipeextractorComponent;
    }();

    ArcadePipeextractorComponent.ctorParameters = function () {
      return [{
        type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _arcade_service__WEBPACK_IMPORTED_MODULE_3__["ArcadeService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    ArcadePipeextractorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-arcade-pipeextractor',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./arcade-pipeextractor.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/arcade/arcade-pipeextractor/arcade-pipeextractor.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./arcade-pipeextractor.component.css */
      "./src/app/home/arcade/arcade-pipeextractor/arcade-pipeextractor.component.css")).default]
    })], ArcadePipeextractorComponent);
    /***/
  },

  /***/
  "./src/app/home/arcade/arcade-pkg/arcade-pkg.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/home/arcade/arcade-pkg/arcade-pkg.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeArcadeArcadePkgArcadePkgComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcmNhZGUtcGtnL2FyY2FkZS1wa2cuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/home/arcade/arcade-pkg/arcade-pkg.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/home/arcade/arcade-pkg/arcade-pkg.component.ts ***!
    \****************************************************************/

  /*! exports provided: ArcadePkgComponent */

  /***/
  function srcAppHomeArcadeArcadePkgArcadePkgComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArcadePkgComponent", function () {
      return ArcadePkgComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _arcade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../arcade.service */
    "./src/app/home/arcade/arcade.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var ArcadePkgComponent =
    /*#__PURE__*/
    function () {
      function ArcadePkgComponent(auth, arcade, formBuilder) {
        _classCallCheck(this, ArcadePkgComponent);

        this.auth = auth;
        this.arcade = arcade;
        this.formBuilder = formBuilder;
        this.results = null;
        this.submitted = false;
        this.isLoading = false;
        this.error = null;
      }

      _createClass(ArcadePkgComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this32 = this;

          this.dataForm = this.formBuilder.group({
            depsDir: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            pkgprefixes: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });

          if (this.isLoading == false) {
            this.arcade.testPkgConnection().subscribe(function (resData) {}, function (errorMessage) {
              _this32.error = 'Could not connect to pkg service, \n please download at https://hub.docker.com/repository/docker/nsfsain/arcade-pkg-service, start image, and set port to 3004';
            });
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this33 = this;

          if (!this.dataForm.valid //||
          // !this.historyRevisionFile ||
          // !this.structurl_DSMFile
          ) {
              return;
            }

          var data = new FormData();
          data.append("depsDir", this.dataForm.get("depsDir").value);
          data.append("pkgprefixes", this.dataForm.get("pkgprefixes").value);
          this.submitted = true;
          this.isLoading = true;
          this.arcade.runPkg(data).subscribe(function (resData) {
            _this33.results = resData;
            console.log(_this33.results);
            _this33.isLoading = false;
          }, function (errorMessage) {
            console.log(errorMessage);
            _this33.error = 'Unable to execute from back-end';
            _this33.isLoading = false;
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.dataForm.controls;
        }
      }]);

      return ArcadePkgComponent;
    }();

    ArcadePkgComponent.ctorParameters = function () {
      return [{
        type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _arcade_service__WEBPACK_IMPORTED_MODULE_3__["ArcadeService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    ArcadePkgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-arcade-pkg',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./arcade-pkg.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/arcade/arcade-pkg/arcade-pkg.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./arcade-pkg.component.css */
      "./src/app/home/arcade/arcade-pkg/arcade-pkg.component.css")).default]
    })], ArcadePkgComponent);
    /***/
  },

  /***/
  "./src/app/home/arcade/arcade-smelldensitianalyzer/arcade-smelldensitianalyzer.component.css":
  /*!***************************************************************************************************!*\
    !*** ./src/app/home/arcade/arcade-smelldensitianalyzer/arcade-smelldensitianalyzer.component.css ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeArcadeArcadeSmelldensitianalyzerArcadeSmelldensitianalyzerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcmNhZGUtc21lbGxkZW5zaXRpYW5hbHl6ZXIvYXJjYWRlLXNtZWxsZGVuc2l0aWFuYWx5emVyLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/home/arcade/arcade-smelldensitianalyzer/arcade-smelldensitianalyzer.component.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/home/arcade/arcade-smelldensitianalyzer/arcade-smelldensitianalyzer.component.ts ***!
    \**************************************************************************************************/

  /*! exports provided: ArcadeSmelldensitianalyzerComponent */

  /***/
  function srcAppHomeArcadeArcadeSmelldensitianalyzerArcadeSmelldensitianalyzerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArcadeSmelldensitianalyzerComponent", function () {
      return ArcadeSmelldensitianalyzerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _arcade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../arcade.service */
    "./src/app/home/arcade/arcade.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var ArcadeSmelldensitianalyzerComponent =
    /*#__PURE__*/
    function () {
      function ArcadeSmelldensitianalyzerComponent(auth, arcade, formBuilder) {
        _classCallCheck(this, ArcadeSmelldensitianalyzerComponent);

        this.auth = auth;
        this.arcade = arcade;
        this.formBuilder = formBuilder;
        this.results = null;
        this.submitted = false;
        this.isLoading = false;
        this.error = null;
      }

      _createClass(ArcadeSmelldensitianalyzerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this34 = this;

          this.dataForm = this.formBuilder.group({
            smellsDir: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            clusteredDir: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });

          if (this.isLoading == false) {
            this.arcade.testSmellDensityAnalyzerConnection().subscribe(function (resData) {}, function (errorMessage) {
              _this34.error = 'Could not connect to Smelldensityanalyzer service, \n please download at https://hub.docker.com/repository/docker/nsfsain/arcade-smelldensitianalyzer-service, start image, and set port to 3009';
            });
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this35 = this;

          if (!this.dataForm.valid) {
            return;
          }

          var data = new FormData();
          data.append("smellsDir", this.dataForm.get("smellsDir").value);
          data.append("clusteredDir", this.dataForm.get("clusteredDir").value);
          this.submitted = true;
          this.isLoading = true;
          this.arcade.runSmellDensityAnalyzer(data).subscribe(function (resData) {
            _this35.results = resData;
            console.log(_this35.results);
            _this35.isLoading = false;
          }, function (errorMessage) {
            console.log(errorMessage);
            _this35.error = 'Unable to execute from back-end';
            _this35.isLoading = false;
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.dataForm.controls;
        }
      }]);

      return ArcadeSmelldensitianalyzerComponent;
    }();

    ArcadeSmelldensitianalyzerComponent.ctorParameters = function () {
      return [{
        type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _arcade_service__WEBPACK_IMPORTED_MODULE_3__["ArcadeService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    ArcadeSmelldensitianalyzerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-arcade-smelldensitianalyzer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./arcade-smelldensitianalyzer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/arcade/arcade-smelldensitianalyzer/arcade-smelldensitianalyzer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./arcade-smelldensitianalyzer.component.css */
      "./src/app/home/arcade/arcade-smelldensitianalyzer/arcade-smelldensitianalyzer.component.css")).default]
    })], ArcadeSmelldensitianalyzerComponent);
    /***/
  },

  /***/
  "./src/app/home/arcade/arcade-smellevolutionanalyzer/arcade-smellevolutionanalyzer.component.css":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/home/arcade/arcade-smellevolutionanalyzer/arcade-smellevolutionanalyzer.component.css ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeArcadeArcadeSmellevolutionanalyzerArcadeSmellevolutionanalyzerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcmNhZGUtc21lbGxldm9sdXRpb25hbmFseXplci9hcmNhZGUtc21lbGxldm9sdXRpb25hbmFseXplci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/home/arcade/arcade-smellevolutionanalyzer/arcade-smellevolutionanalyzer.component.ts":
  /*!******************************************************************************************************!*\
    !*** ./src/app/home/arcade/arcade-smellevolutionanalyzer/arcade-smellevolutionanalyzer.component.ts ***!
    \******************************************************************************************************/

  /*! exports provided: ArcadeSmellevolutionanalyzerComponent */

  /***/
  function srcAppHomeArcadeArcadeSmellevolutionanalyzerArcadeSmellevolutionanalyzerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArcadeSmellevolutionanalyzerComponent", function () {
      return ArcadeSmellevolutionanalyzerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _arcade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../arcade.service */
    "./src/app/home/arcade/arcade.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var ArcadeSmellevolutionanalyzerComponent =
    /*#__PURE__*/
    function () {
      function ArcadeSmellevolutionanalyzerComponent(auth, arcade, formBuilder) {
        _classCallCheck(this, ArcadeSmellevolutionanalyzerComponent);

        this.auth = auth;
        this.arcade = arcade;
        this.formBuilder = formBuilder;
        this.results = null;
        this.submitted = false;
        this.isLoading = false;
        this.error = null;
      }

      _createClass(ArcadeSmellevolutionanalyzerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this36 = this;

          this.dataForm = this.formBuilder.group({
            smellsDir: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });

          if (this.isLoading == false) {
            this.arcade.testSmellEvolutionAnalyzerConnection().subscribe(function (resData) {}, function (errorMessage) {
              _this36.error = 'Could not connect to Smellevolutionanalyzer service, \n please download at https://hub.docker.com/repository/docker/nsfsain/arcade-smellevolutionanalyzer-service, start image, and set port to 3010';
            });
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this37 = this;

          if (!this.dataForm.valid) {
            return;
          }

          var data = new FormData();
          data.append("smellsDir", this.dataForm.get("smellsDir").value);
          this.submitted = true;
          this.isLoading = true;
          this.arcade.runSmellEvolutionAnalyzer(data).subscribe(function (resData) {
            _this37.results = resData;
            console.log(_this37.results);
            _this37.isLoading = false;
          }, function (errorMessage) {
            console.log(errorMessage);
            _this37.error = 'Unable to execute from back-end';
            _this37.isLoading = false;
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.dataForm.controls;
        }
      }]);

      return ArcadeSmellevolutionanalyzerComponent;
    }();

    ArcadeSmellevolutionanalyzerComponent.ctorParameters = function () {
      return [{
        type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _arcade_service__WEBPACK_IMPORTED_MODULE_3__["ArcadeService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    ArcadeSmellevolutionanalyzerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-arcade-smellevolutionanalyzer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./arcade-smellevolutionanalyzer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/arcade/arcade-smellevolutionanalyzer/arcade-smellevolutionanalyzer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./arcade-smellevolutionanalyzer.component.css */
      "./src/app/home/arcade/arcade-smellevolutionanalyzer/arcade-smellevolutionanalyzer.component.css")).default]
    })], ArcadeSmellevolutionanalyzerComponent);
    /***/
  },

  /***/
  "./src/app/home/arcade/arcade.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/home/arcade/arcade.service.ts ***!
    \***********************************************/

  /*! exports provided: ArcadeService */

  /***/
  function srcAppHomeArcadeArcadeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArcadeService", function () {
      return ArcadeService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ArcadeService =
    /*#__PURE__*/
    function () {
      function ArcadeService(http) {
        _classCallCheck(this, ArcadeService);

        this.http = http;
      } //depsBuilder


      _createClass(ArcadeService, [{
        key: "testdepsBuilderConnection",
        value: function testdepsBuilderConnection() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].arcade_depsbuilder_url + '/engine/arcade');
        }
      }, {
        key: "rundepsBuilder",
        value: function rundepsBuilder(data) {
          // return this.http.post('http://localhost:3000/engine/arcade/depsBuilder',data);
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].arcade_depsbuilder_url + '/engine/arcade/depsBuilder', data);
        } //acdc

      }, {
        key: "testAcdcConnection",
        value: function testAcdcConnection() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].arcade_acdc_url + '/engine/arcade');
        }
      }, {
        key: "runAcdc",
        value: function runAcdc(data) {
          // return this.http.post('http://localhost:3000/engine/arcade/acdc',data);
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].arcade_acdc_url + '/engine/arcade/acdc', data);
        } //archsmelldetector

      }, {
        key: "testArchsmelldetectorConnection",
        value: function testArchsmelldetectorConnection() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].arcade_archsmelldetector_url + '/engine/arcade');
        }
      }, {
        key: "runArchsmelldetector",
        value: function runArchsmelldetector(data) {
          // return this.http.post('http://localhost:3000/engine/arcade/archsmelldetector',data);
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].arcade_archsmelldetector_url + '/engine/arcade/archsmelldetector', data);
        } //arc

      }, {
        key: "testArcConnection",
        value: function testArcConnection() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].arcade_arc_url + '/engine/arcade');
        }
      }, {
        key: "runArc",
        value: function runArc(data) {
          // return this.http.post('http://localhost:3000/engine/arcade/arc',data);
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].arcade_arc_url + '/engine/arcade/arc', data);
        } //pkg

      }, {
        key: "testPkgConnection",
        value: function testPkgConnection() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].arcade_pkg_url + '/engine/arcade');
        }
      }, {
        key: "runPkg",
        value: function runPkg(data) {
          // return this.http.post('http://localhost:3000/engine/arcade/pkg',data);
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].arcade_pkg_url + '/engine/arcade/pkg', data);
        } //a2a

      }, {
        key: "testA2aConnection",
        value: function testA2aConnection() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].arcade_a2a_url + '/engine/arcade');
        }
      }, {
        key: "runA2a",
        value: function runA2a(data) {
          // return this.http.post('http://localhost:3000/engine/arcade/a2a',data);
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].arcade_a2a_url + '/engine/arcade/a2a', data);
        } //cvg

      }, {
        key: "testCvgConnection",
        value: function testCvgConnection() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].arcade_cvg_url + '/engine/arcade');
        }
      }, {
        key: "runCvg",
        value: function runCvg(data) {
          // return this.http.post('http://localhost:3000/engine/arcade/cvg',data);
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].arcade_cvg_url + '/engine/arcade/cvg', data);
        } //c2caverageanalyze

      }, {
        key: "testC2cAverageAnalyzeConnection",
        value: function testC2cAverageAnalyzeConnection() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].arcade_c2caverageanalyze_url + '/engine/arcade');
        }
      }, {
        key: "runC2cAverageAnalyze",
        value: function runC2cAverageAnalyze(data) {
          // return this.http.post('http://localhost:3000/engine/arcade/c2caverageanalyze',data);
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].arcade_c2caverageanalyze_url + '/engine/arcade/c2caverageanalyze', data);
        } //decaymetrics

      }, {
        key: "testDecaymetricsConnection",
        value: function testDecaymetricsConnection() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].arcade_decaymetrics_url + '/engine/arcade');
        }
      }, {
        key: "runDecaymetrics",
        value: function runDecaymetrics(data) {
          // return this.http.post('http://localhost:3000/engine/arcade/decaymetrics',data);
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].arcade_decaymetrics_url + '/engine/arcade/decaymetrics', data);
        } //smelldensityanalyzer

      }, {
        key: "testSmellDensityAnalyzerConnection",
        value: function testSmellDensityAnalyzerConnection() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].arcade_smelldensityanalyzer_url + '/engine/arcade');
        }
      }, {
        key: "runSmellDensityAnalyzer",
        value: function runSmellDensityAnalyzer(data) {
          // return this.http.post('http://localhost:3000/engine/arcade/smelldensityanalyzer',data);
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].arcade_smelldensityanalyzer_url + '/engine/arcade/smelldensityanalyzer', data);
        } //smellevolutionanalyzer

      }, {
        key: "testSmellEvolutionAnalyzerConnection",
        value: function testSmellEvolutionAnalyzerConnection() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].arcade_smellevolutionanalyzer_url + '/engine/arcade');
        }
      }, {
        key: "runSmellEvolutionAnalyzer",
        value: function runSmellEvolutionAnalyzer(data) {
          // return this.http.post('http://localhost:3000/engine/arcade/smellevolutionanalyzer',data);
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].arcade_smellevolutionanalyzer_url + '/engine/arcade/smellevolutionanalyzer', data);
        } //pipeextractor

      }, {
        key: "testPipeExtractorConnection",
        value: function testPipeExtractorConnection() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].arcade_pipeextractor_url + '/engine/arcade');
        }
      }, {
        key: "runPipeExtractor",
        value: function runPipeExtractor(data) {
          // return this.http.post('http://localhost:3000/engine/arcade/pipeextractor',data);
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].arcade_pipeextractor_url + '/engine/arcade/pipeextractor', data);
        } //cleanupcodemaat

      }, {
        key: "tesCleanupCodeMaatConnection",
        value: function tesCleanupCodeMaatConnection() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].arcade_cleanupcodemaat_url + '/engine/arcade');
        }
      }, {
        key: "runCleanupCodeMaat",
        value: function runCleanupCodeMaat(data) {
          // return this.http.post('http://localhost:3000/engine/arcade/cleanupcodemaat',data);
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].arcade_cleanupcodemaat_url + '/engine/arcade/cleanupcodemaat', data);
        } //batchclonefinder

      }, {
        key: "tesbatchCloneFinderConnection",
        value: function tesbatchCloneFinderConnection() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].arcade_batchclonefinder_url + '/engine/arcade');
        }
      }, {
        key: "runbatchCloneFinder",
        value: function runbatchCloneFinder(data) {
          // return this.http.post('http://localhost:3000/engine/arcade/batchclonefinder',data);
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].arcade_batchclonefinder_url + '/engine/arcade/batchclonefinder', data);
        } //depfindrunner

      }, {
        key: "testdepFindRunnerConnection",
        value: function testdepFindRunnerConnection() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].arcade_depfindrunner_url + '/engine/arcade');
        }
      }, {
        key: "rundepFindRunner",
        value: function rundepFindRunner(data) {
          // return this.http.post('http://localhost:3000/engine/arcade/depfindrunner',data);
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].arcade_depfindrunner_url + '/engine/arcade/depfindrunner', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["timeout"])(3600000));
        } //dependencyfinderprocessing

      }, {
        key: "testdependencyFinderProcessingConnection",
        value: function testdependencyFinderProcessingConnection() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].arcade_dependencyfinderprocessing_url + '/engine/arcade');
        }
      }, {
        key: "rundependencyFinderProcessing",
        value: function rundependencyFinderProcessing(data) {
          // return this.http.post('http://localhost:3000/engine/arcade/dependencyfinderprocessing',data);
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].arcade_dependencyfinderprocessing_url + '/engine/arcade/dependencyfinderprocessing', data);
        }
      }]);

      return ArcadeService;
    }();

    ArcadeService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ArcadeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ArcadeService);
    /***/
  },

  /***/
  "./src/app/home/codemaat/codemaat-vcs/codemaat-vcs.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/home/codemaat/codemaat-vcs/codemaat-vcs.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeCodemaatCodemaatVcsCodemaatVcsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9jb2RlbWFhdC9jb2RlbWFhdC12Y3MvY29kZW1hYXQtdmNzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/home/codemaat/codemaat-vcs/codemaat-vcs.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/home/codemaat/codemaat-vcs/codemaat-vcs.component.ts ***!
    \**********************************************************************/

  /*! exports provided: CodemaatVcsComponent */

  /***/
  function srcAppHomeCodemaatCodemaatVcsCodemaatVcsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CodemaatVcsComponent", function () {
      return CodemaatVcsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _codemaat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../codemaat.service */
    "./src/app/home/codemaat/codemaat.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var CodemaatVcsComponent =
    /*#__PURE__*/
    function () {
      function CodemaatVcsComponent(auth, codemaat, formBuilder) {
        _classCallCheck(this, CodemaatVcsComponent);

        this.auth = auth;
        this.codemaat = codemaat;
        this.formBuilder = formBuilder;
        this.results = null;
        this.submitted = false;
        this.isLoading = false;
        this.error = null;
      }

      _createClass(CodemaatVcsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this38 = this;

          this.dataForm = this.formBuilder.group({
            inputLogFile: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            outputFile: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            versionControlType: ["git2", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            analysis: ["authors", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            inputEncoding: ["UTF-8", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            maxRows: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            minRevisions: [5, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            minSharedRevisions: [5, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            minCouplings: [30, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            maxCouplings: [100, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            maxChangeSetSize: [30, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            groupFile: ["null", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            regex: ["null", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            temporalPeriod: ["null", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            agetimeNow: ["0", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });

          if (this.isLoading == false) {
            this.codemaat.testvcsConnection().subscribe(function (resData) {}, function (errorMessage) {
              _this38.error = 'Could not connect to Code Maat vcs service, \n please download at https://hub.docker.com/repository/docker/nsfsain/codemaat-vcs-service, start image, and set port to 3021';
            });
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this39 = this;

          if (!this.dataForm.valid) {
            return;
          }

          var data = new FormData();
          data.append("inputLogFile", this.dataForm.get("inputLogFile").value);
          data.append("outputFile", this.dataForm.get("outputFile").value);
          data.append("versionControlType", this.dataForm.get("versionControlType").value);
          data.append("analysis", this.dataForm.get("analysis").value);
          data.append("inputEncoding", this.dataForm.get("inputEncoding").value);
          data.append("maxRows", this.dataForm.get("maxRows").value);
          data.append("minRevisions", this.dataForm.get("minRevisions").value);
          data.append("minSharedRevisions", this.dataForm.get("minSharedRevisions").value);
          data.append("minCouplings", this.dataForm.get("minCouplings").value);
          data.append("maxCouplings", this.dataForm.get("maxCouplings").value);
          data.append("maxChangeSetSize", this.dataForm.get("maxChangeSetSize").value);
          data.append("groupFile", this.dataForm.get("groupFile").value);
          data.append("regex", this.dataForm.get("regex").value);
          data.append("temporalPeriod", this.dataForm.get("temporalPeriod").value);
          data.append("agetimeNow", this.dataForm.get("agetimeNow").value);
          this.submitted = true;
          this.isLoading = true;
          this.codemaat.runvcs(data).subscribe(function (resData) {
            _this39.results = resData;
            console.log(_this39.results);
            _this39.isLoading = false;
          }, function (errorMessage) {
            console.log(errorMessage);
            _this39.error = 'Unable to execute from back-end';
            _this39.isLoading = false;
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.dataForm.controls;
        }
      }]);

      return CodemaatVcsComponent;
    }();

    CodemaatVcsComponent.ctorParameters = function () {
      return [{
        type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _codemaat_service__WEBPACK_IMPORTED_MODULE_3__["CodeMaatService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    CodemaatVcsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-codemaat-vcs',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./codemaat-vcs.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/codemaat/codemaat-vcs/codemaat-vcs.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./codemaat-vcs.component.css */
      "./src/app/home/codemaat/codemaat-vcs/codemaat-vcs.component.css")).default]
    })], CodemaatVcsComponent);
    /***/
  },

  /***/
  "./src/app/home/codemaat/codemaat.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/home/codemaat/codemaat.service.ts ***!
    \***************************************************/

  /*! exports provided: CodeMaatService */

  /***/
  function srcAppHomeCodemaatCodemaatServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CodeMaatService", function () {
      return CodeMaatService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var CodeMaatService =
    /*#__PURE__*/
    function () {
      function CodeMaatService(http) {
        _classCallCheck(this, CodeMaatService);

        this.http = http;
      } //depsBuilder


      _createClass(CodeMaatService, [{
        key: "testvcsConnection",
        value: function testvcsConnection() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].codemaat_vcs_url + '/engine/codemaat');
        }
      }, {
        key: "runvcs",
        value: function runvcs(data) {
          // return this.http.post('http://localhost:3000/engine/codemaat/vcs',data);
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].codemaat_vcs_url + '/engine/codemaat/vcs', data);
        }
      }]);

      return CodeMaatService;
    }();

    CodeMaatService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CodeMaatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CodeMaatService);
    /***/
  },

  /***/
  "./src/app/home/components-list/components-list.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/home/components-list/components-list.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeComponentsListComponentsListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".tactics-button {\r\n\r\n    cursor: pointer;\r\n    float: right;\r\n    font: 16px Arial, Helvetica, sans-serif;\r\n    font-weight: bold;\r\n    height: 30px;\r\n    margin: 4px 4px 0;\r\n    text-shadow: 0 -1px 0 rgba(0,0,0,.3);\r\n    min-width: 140px;\r\n    height:34px;\r\n    outline: none;\r\n\r\n    box-shadow: -1px -1px 1px rgba(255,255,255,.5), 1px 1px 0 rgba(0,0,0,.4);\r\n    -moz-box-shadow: -1px -1px 1px rgba(255,255,255,.5), 1px 1px 0 rgba(0,0,0,.2);\r\n    -webkit-box-shadow: -1px -1px 1px rgba(255,255,255,.5), 1px 1px 0 rgba(0,0,0,.4);\r\n}\r\n\r\n/*================== row styles=========================================*/\r\n\r\n.row-details {\r\n    margin-top: 40px;\r\n    margin-bottom: 40px;\r\n    border: 2px double #D1D3D4;\r\n    padding-bottom: 20px;\r\n    padding-top: 20px;\r\n    min-width: 800px;\r\n}\r\n\r\n.row-caption {\r\n    position: absolute;\r\n    top: -33px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    font-size: 16px;\r\n    border-radius: 0px 15px 0px 0px;\r\n    border: 1px solid #D1D3D4;\r\n    background: -webkit-gradient( linear,left top, left bottom, color-stop(0, rgb(243,243,243)), color-stop(1, rgb(225,225,225)));\r\n    min-width: 200px;\r\n    max-width: 550px;\r\n    overflow: hidden;\r\n    box-shadow: -1px -1px 2px rgba(0,0,0,.3), 0 0 1px rgba(0,0,0,.2);\r\n    -webkit-box-shadow: -1px -1px 2px rgba(0,0,0,.3), 0 0 1px rgba(0,0,0,.2);\r\n    -moz-box-shadow: -1px -1px 2px rgba(0,0,0,.3), 0 0 1px rgba(0,0,0,.2);\r\n    text-align: center;\r\n}\r\n\r\n.row-caption .secton-label-left {\r\n        height: 100%;\r\n        border-right: 1px solid rgba(255,255,255,.8);\r\n        padding: 5px;\r\n    }\r\n\r\n.row-caption .secton-label-right {\r\n        height: 100%;\r\n        border-left: 1px solid rgba(0,0,0,.2);\r\n        padding: 5px;\r\n    }\r\n\r\n.row-caption-right {\r\n    right: 15px;\r\n    border-radius: 15px 0px 0px 0px;\r\n    padding-left: 15px;\r\n}\r\n\r\n/*==============================================snippets details  ============================================================*/\r\n\r\n.file-information {\r\n    background: #e1e1e1; /* Fallback color for non-css3 browsers */\r\n    width: 100%;\r\n\r\n    /* Gradients */\r\n    background: -webkit-gradient( linear,left top, left bottom, color-stop(0, rgb(243,243,243)), color-stop(1, rgb(225,225,225)));\r\n    /* Rounded Corners */\r\n    border-radius: 17px;\r\n    -webkit-border-radius: 17px;\r\n    -moz-border-radius: 17px;\r\n    /* Shadows */\r\n    box-shadow: 1px 1px 2px rgba(0,0,0,.3), 0 0 2px rgba(0,0,0,.3);\r\n    -webkit-box-shadow: 1px 1px 2px rgba(0,0,0,.3), 0 0 2px rgba(0,0,0,.3);\r\n    -moz-box-shadow: 1px 1px 2px rgba(0,0,0,.3), 0 0 2px rgba(0,0,0,.3);\r\n}\r\n\r\n.information-label {\r\n    background: #fafafa; /* Fallback color for non-css3 browsers */\r\n    /* Gradients */\r\n    background: -webkit-gradient( linear, left bottom, left top, color-stop(0, rgb(250,250,250)), color-stop(1, rgb(230,230,230)));\r\n    border: 0;\r\n    border-bottom: 1px solid #fff;\r\n    border-right: 1px solid rgba(255,255,255,.8);\r\n    font-size: 16px;\r\n    height:inherit;\r\n    min-width: 150px;\r\n    /* Rounded Corners */\r\n    border-radius: 17px;\r\n    -webkit-border-radius: 17px;\r\n    -moz-border-radius: 17px;\r\n    /* Shadows */\r\n    box-shadow: -1px -1px 2px rgba(0,0,0,.3), 0 0 1px rgba(0,0,0,.2);\r\n    -webkit-box-shadow: -1px -1px 2px rgba(0,0,0,.3), 0 0 1px rgba(0,0,0,.2);\r\n    -moz-box-shadow: -1px -1px 2px rgba(0,0,0,.3), 0 0 1px rgba(0,0,0,.2);\r\n    text-align: center;\r\n}\r\n\r\n.information-label .secton-label-left {\r\n        height: 100%;\r\n        border-right: 1px solid rgba(255,255,255,.8);\r\n        padding: 5px;\r\n    }\r\n\r\n.information-label .secton-label-right {\r\n        height: 100%;\r\n        border-left: 1px solid rgba(0,0,0,.2);\r\n        padding: 5px;\r\n    }\r\n\r\n.snippet-caption {\r\n    position: relative;\r\n    margin-top: 10px;\r\n    margin-bottom: 5px;\r\n    padding-left: 15px;\r\n    font-size: 16px;\r\n    border-radius: 1px 20px 0px 20px;\r\n    border: 1px solid #D1D3D4;\r\n    min-width: 200px;\r\n    background: -webkit-gradient( linear, left bottom, left top, color-stop(0, rgb(250,250,250)), color-stop(1, rgb(230,230,230)));\r\n    box-shadow: -1px -1px 1px rgba(255,255,255,.5), 1px 1px 0 rgba(0,0,0,.4);\r\n    -moz-box-shadow: -1px -1px 1px rgba(255,255,255,.5), 1px 1px 0 rgba(0,0,0,.2);\r\n    -webkit-box-shadow: -1px -1px 1px rgba(255,255,255,.5), 1px 1px 0 rgba(0,0,0,.4);\r\n}\r\n\r\n.snippet-codes {\r\n    position: relative;\r\n    top: -5px;\r\n    border: 2px solid #D1D3D4;\r\n    border-top-left-radius: 30px;\r\n    border-top-right-radius: 0px;\r\n    width: 100%;\r\n    padding: 10px 20px;\r\n    min-height: 100px;\r\n}\r\n\r\n.snippet-id-label {\r\n\r\n    background: -webkit-gradient( linear,left top, left bottom, color-stop(0, rgb(243,243,243)), color-stop(1, rgb(225,225,225)));\r\n    border: 0;\r\n    border-bottom: 1px solid #fff;\r\n    border-right: 1px solid rgba(255,255,255,.8);\r\n    font-size: 16px;\r\n    margin: 4px;\r\n    padding: 5px;\r\n    width: 32px;\r\n    margin-right: 40px;\r\n    padding-left: 10px;\r\n    /* Rounded Corners */\r\n    border-radius: 20px;\r\n    -webkit-border-radius: 20px;\r\n    -moz-border-radius: 20px;\r\n    /* Shadows */\r\n    box-shadow: -1px -1px 2px rgba(0,0,0,.3), 0 0 1px rgba(0,0,0,.2);\r\n    -webkit-box-shadow: -1px -1px 2px rgba(0,0,0,.3), 0 0 1px rgba(0,0,0,.2);\r\n    -moz-box-shadow: -1px -1px 2px rgba(0,0,0,.3), 0 0 1px rgba(0,0,0,.2);\r\n}\r\n\r\n/*======================= close  buttons styles =================================*/\r\n\r\n.close-button {\r\n    position: absolute;\r\n    right: 11px;\r\n    top: 9px;\r\n    background: #44921f; /* Fallback color for non-css3 browsers */\r\n    /* Gradients */\r\n    background: -moz-linear-gradient( center top, rgb(79,188,32) 0%, rgb(73,157,34) 15%, rgb(62,135,28) 88%, rgb(49,114,21) 100%);\r\n    border: 0;\r\n    color: #eee;\r\n    cursor: pointer;\r\n    font: 16px Arial, Helvetica, sans-serif;\r\n    font-weight: bold;\r\n    margin: 4px 4px 0;\r\n    text-shadow: 0 -1px 0 rgba(0,0,0,.3);\r\n    width: 35px;\r\n    height: 20px;\r\n    outline: none;\r\n    /* Rounded Corners */\r\n    border-radius: 10px 0 0 0;\r\n    -webkit-border-radius: 10px 0 0 0;\r\n    -moz-border-radius: 10px 0 0 0;\r\n    /* Shadows */\r\n    box-shadow: -1px -1px 1px rgba(255,255,255,.5), 1px 1px 0 rgba(0,0,0,.4);\r\n    -moz-box-shadow: -1px -1px 1px rgba(255,255,255,.5), 1px 1px 0 rgba(0,0,0,.2);\r\n    -webkit-box-shadow: -1px -1px 1px rgba(255,255,255,.5), 1px 1px 0 rgba(0,0,0,.4);\r\n}\r\n\r\n.close-button:hover {\r\n    background: #4ea923; /* Fallback color for non-css3 browsers */\r\n    /* Gradients */\r\n    background: -moz-linear-gradient( center top, rgb(89,222,27) 0%, rgb(83,179,38) 15%, rgb(66,143,27) 80%, rgb(54,120,22) 100%);\r\n}\r\n\r\n.close-button:active {\r\n    background: #4ea923; /* Fallback color for non-css3 browsers */\r\n    /* Gradients */\r\n    background: -moz-linear-gradient( center bottom, rgb(89,222,27) 0%, rgb(83,179,38) 15%, rgb(66,143,27) 80%, rgb(54,120,22) 100%);\r\n}\r\n\r\n.description{\r\n    font-family: \"Lucida Sans\", sans-serif;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMtbGlzdC9jb21wb25lbnRzLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLHVDQUF1QztJQUN2QyxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxhQUFhOztJQUViLHdFQUF3RTtJQUN4RSw2RUFBNkU7SUFDN0UsZ0ZBQWdGO0FBQ3BGOztBQUVBLHlFQUF5RTs7QUFDekU7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsK0JBQStCO0lBQy9CLHlCQUF5QjtJQUN6Qiw2SEFBNkg7SUFDN0gsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZ0VBQWdFO0lBQ2hFLHdFQUF3RTtJQUN4RSxxRUFBcUU7SUFDckUsa0JBQWtCO0FBQ3RCOztBQUVJO1FBQ0ksWUFBWTtRQUNaLDRDQUE0QztRQUM1QyxZQUFZO0lBQ2hCOztBQUVBO1FBQ0ksWUFBWTtRQUNaLHFDQUFxQztRQUNyQyxZQUFZO0lBQ2hCOztBQUVKO0lBQ0ksV0FBVztJQUNYLCtCQUErQjtJQUMvQixrQkFBa0I7QUFDdEI7O0FBR0EsK0hBQStIOztBQUUvSDtJQUNJLG1CQUFtQixFQUFFLHlDQUF5QztJQUM5RCxXQUFXOztJQUVYLGNBQWM7SUFDZCw2SEFBNkg7SUFDN0gsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0Isd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWiw4REFBOEQ7SUFDOUQsc0VBQXNFO0lBQ3RFLG1FQUFtRTtBQUN2RTs7QUFFQTtJQUNJLG1CQUFtQixFQUFFLHlDQUF5QztJQUM5RCxjQUFjO0lBQ2QsOEhBQThIO0lBQzlILFNBQVM7SUFDVCw2QkFBNkI7SUFDN0IsNENBQTRDO0lBQzVDLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osZ0VBQWdFO0lBQ2hFLHdFQUF3RTtJQUN4RSxxRUFBcUU7SUFDckUsa0JBQWtCO0FBQ3RCOztBQUVJO1FBQ0ksWUFBWTtRQUNaLDRDQUE0QztRQUM1QyxZQUFZO0lBQ2hCOztBQUVBO1FBQ0ksWUFBWTtRQUNaLHFDQUFxQztRQUNyQyxZQUFZO0lBQ2hCOztBQUVKO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQ0FBZ0M7SUFDaEMseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQiw4SEFBOEg7SUFDOUgsd0VBQXdFO0lBQ3hFLDZFQUE2RTtJQUM3RSxnRkFBZ0Y7QUFDcEY7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULHlCQUF5QjtJQUN6Qiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLDZIQUE2SDtJQUM3SCxTQUFTO0lBQ1QsNkJBQTZCO0lBQzdCLDRDQUE0QztJQUM1QyxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLGdFQUFnRTtJQUNoRSx3RUFBd0U7SUFDeEUscUVBQXFFO0FBQ3pFOztBQUVBLGtGQUFrRjs7QUFDbEY7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFFBQVE7SUFDUixtQkFBbUIsRUFBRSx5Q0FBeUM7SUFDOUQsY0FBYztJQUVkLDZIQUE2SDtJQUM3SCxTQUFTO0lBQ1QsV0FBVztJQUNYLGVBQWU7SUFDZix1Q0FBdUM7SUFDdkMsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixvQ0FBb0M7SUFDcEMsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixpQ0FBaUM7SUFDakMsOEJBQThCO0lBQzlCLFlBQVk7SUFDWix3RUFBd0U7SUFDeEUsNkVBQTZFO0lBQzdFLGdGQUFnRjtBQUNwRjs7QUFFQTtJQUNJLG1CQUFtQixFQUFFLHlDQUF5QztJQUM5RCxjQUFjO0lBRWQsNkhBQTZIO0FBQ2pJOztBQUVBO0lBQ0ksbUJBQW1CLEVBQUUseUNBQXlDO0lBQzlELGNBQWM7SUFFZCxnSUFBZ0k7QUFDcEk7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUMiLCJmaWxlIjoiLi4vY29tcG9uZW50cy1saXN0L2NvbXBvbmVudHMtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhY3RpY3MtYnV0dG9uIHtcclxuXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBmb250OiAxNnB4IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbjogNHB4IDRweCAwO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgLTFweCAwIHJnYmEoMCwwLDAsLjMpO1xyXG4gICAgbWluLXdpZHRoOiAxNDBweDtcclxuICAgIGhlaWdodDozNHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuXHJcbiAgICBib3gtc2hhZG93OiAtMXB4IC0xcHggMXB4IHJnYmEoMjU1LDI1NSwyNTUsLjUpLCAxcHggMXB4IDAgcmdiYSgwLDAsMCwuNCk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IC0xcHggLTFweCAxcHggcmdiYSgyNTUsMjU1LDI1NSwuNSksIDFweCAxcHggMCByZ2JhKDAsMCwwLC4yKTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTFweCAtMXB4IDFweCByZ2JhKDI1NSwyNTUsMjU1LC41KSwgMXB4IDFweCAwIHJnYmEoMCwwLDAsLjQpO1xyXG59XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PSByb3cgc3R5bGVzPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4ucm93LWRldGFpbHMge1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICBib3JkZXI6IDJweCBkb3VibGUgI0QxRDNENDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBtaW4td2lkdGg6IDgwMHB4O1xyXG59XHJcblxyXG4ucm93LWNhcHRpb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMzNweDtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDE1cHggMHB4IDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEMUQzRDQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KCBsaW5lYXIsbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAsIHJnYigyNDMsMjQzLDI0MykpLCBjb2xvci1zdG9wKDEsIHJnYigyMjUsMjI1LDIyNSkpKTtcclxuICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDU1MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJveC1zaGFkb3c6IC0xcHggLTFweCAycHggcmdiYSgwLDAsMCwuMyksIDAgMCAxcHggcmdiYSgwLDAsMCwuMik7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0xcHggLTFweCAycHggcmdiYSgwLDAsMCwuMyksIDAgMCAxcHggcmdiYSgwLDAsMCwuMik7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IC0xcHggLTFweCAycHggcmdiYSgwLDAsMCwuMyksIDAgMCAxcHggcmdiYSgwLDAsMCwuMik7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiAgICAucm93LWNhcHRpb24gLnNlY3Rvbi1sYWJlbC1sZWZ0IHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuOCk7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5yb3ctY2FwdGlvbiAuc2VjdG9uLWxhYmVsLXJpZ2h0IHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4yKTtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB9XHJcblxyXG4ucm93LWNhcHRpb24tcmlnaHQge1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4IDBweCAwcHggMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09c25pcHBldHMgZGV0YWlscyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbi5maWxlLWluZm9ybWF0aW9uIHtcclxuICAgIGJhY2tncm91bmQ6ICNlMWUxZTE7IC8qIEZhbGxiYWNrIGNvbG9yIGZvciBub24tY3NzMyBicm93c2VycyAqL1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgLyogR3JhZGllbnRzICovXHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KCBsaW5lYXIsbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAsIHJnYigyNDMsMjQzLDI0MykpLCBjb2xvci1zdG9wKDEsIHJnYigyMjUsMjI1LDIyNSkpKTtcclxuICAgIC8qIFJvdW5kZWQgQ29ybmVycyAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTdweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTdweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTdweDtcclxuICAgIC8qIFNoYWRvd3MgKi9cclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMCwwLDAsLjMpLCAwIDAgMnB4IHJnYmEoMCwwLDAsLjMpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDAsMCwwLC4zKSwgMCAwIDJweCByZ2JhKDAsMCwwLC4zKTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgwLDAsMCwuMyksIDAgMCAycHggcmdiYSgwLDAsMCwuMyk7XHJcbn1cclxuXHJcbi5pbmZvcm1hdGlvbi1sYWJlbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhOyAvKiBGYWxsYmFjayBjb2xvciBmb3Igbm9uLWNzczMgYnJvd3NlcnMgKi9cclxuICAgIC8qIEdyYWRpZW50cyAqL1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudCggbGluZWFyLCBsZWZ0IGJvdHRvbSwgbGVmdCB0b3AsIGNvbG9yLXN0b3AoMCwgcmdiKDI1MCwyNTAsMjUwKSksIGNvbG9yLXN0b3AoMSwgcmdiKDIzMCwyMzAsMjMwKSkpO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC44KTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGhlaWdodDppbmhlcml0O1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIC8qIFJvdW5kZWQgQ29ybmVycyAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTdweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTdweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTdweDtcclxuICAgIC8qIFNoYWRvd3MgKi9cclxuICAgIGJveC1zaGFkb3c6IC0xcHggLTFweCAycHggcmdiYSgwLDAsMCwuMyksIDAgMCAxcHggcmdiYSgwLDAsMCwuMik7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0xcHggLTFweCAycHggcmdiYSgwLDAsMCwuMyksIDAgMCAxcHggcmdiYSgwLDAsMCwuMik7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IC0xcHggLTFweCAycHggcmdiYSgwLDAsMCwuMyksIDAgMCAxcHggcmdiYSgwLDAsMCwuMik7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiAgICAuaW5mb3JtYXRpb24tbGFiZWwgLnNlY3Rvbi1sYWJlbC1sZWZ0IHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuOCk7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pbmZvcm1hdGlvbi1sYWJlbCAuc2VjdG9uLWxhYmVsLXJpZ2h0IHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4yKTtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB9XHJcblxyXG4uc25pcHBldC1jYXB0aW9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcHggMjBweCAwcHggMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEMUQzRDQ7XHJcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudCggbGluZWFyLCBsZWZ0IGJvdHRvbSwgbGVmdCB0b3AsIGNvbG9yLXN0b3AoMCwgcmdiKDI1MCwyNTAsMjUwKSksIGNvbG9yLXN0b3AoMSwgcmdiKDIzMCwyMzAsMjMwKSkpO1xyXG4gICAgYm94LXNoYWRvdzogLTFweCAtMXB4IDFweCByZ2JhKDI1NSwyNTUsMjU1LC41KSwgMXB4IDFweCAwIHJnYmEoMCwwLDAsLjQpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAtMXB4IC0xcHggMXB4IHJnYmEoMjU1LDI1NSwyNTUsLjUpLCAxcHggMXB4IDAgcmdiYSgwLDAsMCwuMik7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0xcHggLTFweCAxcHggcmdiYSgyNTUsMjU1LDI1NSwuNSksIDFweCAxcHggMCByZ2JhKDAsMCwwLC40KTtcclxufVxyXG5cclxuLnNuaXBwZXQtY29kZXMge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtNXB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI0QxRDNENDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLnNuaXBwZXQtaWQtbGFiZWwge1xyXG5cclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQoIGxpbmVhcixsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCwgcmdiKDI0MywyNDMsMjQzKSksIGNvbG9yLXN0b3AoMSwgcmdiKDIyNSwyMjUsMjI1KSkpO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC44KTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbjogNHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAvKiBSb3VuZGVkIENvcm5lcnMgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAvKiBTaGFkb3dzICovXHJcbiAgICBib3gtc2hhZG93OiAtMXB4IC0xcHggMnB4IHJnYmEoMCwwLDAsLjMpLCAwIDAgMXB4IHJnYmEoMCwwLDAsLjIpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IC0xcHggMnB4IHJnYmEoMCwwLDAsLjMpLCAwIDAgMXB4IHJnYmEoMCwwLDAsLjIpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAtMXB4IC0xcHggMnB4IHJnYmEoMCwwLDAsLjMpLCAwIDAgMXB4IHJnYmEoMCwwLDAsLjIpO1xyXG59XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09IGNsb3NlICBidXR0b25zIHN0eWxlcyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4uY2xvc2UtYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMXB4O1xyXG4gICAgdG9wOiA5cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDQ5MjFmOyAvKiBGYWxsYmFjayBjb2xvciBmb3Igbm9uLWNzczMgYnJvd3NlcnMgKi9cclxuICAgIC8qIEdyYWRpZW50cyAqL1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudCggbGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCwgcmdiKDc5LDE4OCwzMikpLCBjb2xvci1zdG9wKDAuMTUsIHJnYig3MywxNTcsMzQpKSwgY29sb3Itc3RvcCgwLjg4LCByZ2IoNjIsMTM1LDI4KSksIGNvbG9yLXN0b3AoMSwgcmdiKDQ5LDExNCwyMSkpKTtcclxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KCBjZW50ZXIgdG9wLCByZ2IoNzksMTg4LDMyKSAwJSwgcmdiKDczLDE1NywzNCkgMTUlLCByZ2IoNjIsMTM1LDI4KSA4OCUsIHJnYig0OSwxMTQsMjEpIDEwMCUpO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgY29sb3I6ICNlZWU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250OiAxNnB4IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbjogNHB4IDRweCAwO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgLTFweCAwIHJnYmEoMCwwLDAsLjMpO1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgLyogUm91bmRlZCBDb3JuZXJzICovXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDAgMCAwO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4IDAgMCAwO1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAxMHB4IDAgMCAwO1xyXG4gICAgLyogU2hhZG93cyAqL1xyXG4gICAgYm94LXNoYWRvdzogLTFweCAtMXB4IDFweCByZ2JhKDI1NSwyNTUsMjU1LC41KSwgMXB4IDFweCAwIHJnYmEoMCwwLDAsLjQpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAtMXB4IC0xcHggMXB4IHJnYmEoMjU1LDI1NSwyNTUsLjUpLCAxcHggMXB4IDAgcmdiYSgwLDAsMCwuMik7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0xcHggLTFweCAxcHggcmdiYSgyNTUsMjU1LDI1NSwuNSksIDFweCAxcHggMCByZ2JhKDAsMCwwLC40KTtcclxufVxyXG5cclxuLmNsb3NlLWJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNGVhOTIzOyAvKiBGYWxsYmFjayBjb2xvciBmb3Igbm9uLWNzczMgYnJvd3NlcnMgKi9cclxuICAgIC8qIEdyYWRpZW50cyAqL1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudCggbGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCwgcmdiKDg5LDIyMiwyNykpLCBjb2xvci1zdG9wKDAuMTUsIHJnYig4MywxNzksMzgpKSwgY29sb3Itc3RvcCgwLjgsIHJnYig2NiwxNDMsMjcpKSwgY29sb3Itc3RvcCgxLCByZ2IoNTQsMTIwLDIyKSkpO1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoIGNlbnRlciB0b3AsIHJnYig4OSwyMjIsMjcpIDAlLCByZ2IoODMsMTc5LDM4KSAxNSUsIHJnYig2NiwxNDMsMjcpIDgwJSwgcmdiKDU0LDEyMCwyMikgMTAwJSk7XHJcbn1cclxuXHJcbi5jbG9zZS1idXR0b246YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICM0ZWE5MjM7IC8qIEZhbGxiYWNrIGNvbG9yIGZvciBub24tY3NzMyBicm93c2VycyAqL1xyXG4gICAgLyogR3JhZGllbnRzICovXHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KCBsaW5lYXIsIGxlZnQgYm90dG9tLCBsZWZ0IHRvcCwgY29sb3Itc3RvcCgwLCByZ2IoODksMjIyLDI3KSksIGNvbG9yLXN0b3AoMC4xNSwgcmdiKDgzLDE3OSwzOCkpLCBjb2xvci1zdG9wKDAuOCwgcmdiKDY2LDE0MywyNykpLCBjb2xvci1zdG9wKDEsIHJnYig1NCwxMjAsMjIpKSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCggY2VudGVyIGJvdHRvbSwgcmdiKDg5LDIyMiwyNykgMCUsIHJnYig4MywxNzksMzgpIDE1JSwgcmdiKDY2LDE0MywyNykgODAlLCByZ2IoNTQsMTIwLDIyKSAxMDAlKTtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9ue1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/components-list/components-list.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/home/components-list/components-list.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ComponentsListComponent */

  /***/
  function srcAppHomeComponentsListComponentsListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsListComponent", function () {
      return ComponentsListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ComponentsListComponent =
    /*#__PURE__*/
    function () {
      function ComponentsListComponent() {
        _classCallCheck(this, ComponentsListComponent);
      }

      _createClass(ComponentsListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ComponentsListComponent;
    }();

    ComponentsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-components-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./components-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/components-list/components-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./components-list.component.css */
      "./src/app/home/components-list/components-list.component.css")).default]
    })], ComponentsListComponent);
    /***/
  },

  /***/
  "./src/app/home/contact-us/contact-us.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/home/contact-us/contact-us.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeContactUsContactUsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/home/contact-us/contact-us.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/home/contact-us/contact-us.component.ts ***!
    \*********************************************************/

  /*! exports provided: ContactUsComponent */

  /***/
  function srcAppHomeContactUsContactUsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function () {
      return ContactUsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ContactUsComponent =
    /*#__PURE__*/
    function () {
      function ContactUsComponent() {
        _classCallCheck(this, ContactUsComponent);
      }

      _createClass(ContactUsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactUsComponent;
    }();

    ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact-us',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact-us.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/contact-us/contact-us.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact-us.component.css */
      "./src/app/home/contact-us/contact-us.component.css")).default]
    })], ContactUsComponent);
    /***/
  },

  /***/
  "./src/app/home/git/git-log/git-log.component.css":
  /*!********************************************************!*\
    !*** ./src/app/home/git/git-log/git-log.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeGitGitLogGitLogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9naXQvZ2l0LWxvZy9naXQtbG9nLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/home/git/git-log/git-log.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/home/git/git-log/git-log.component.ts ***!
    \*******************************************************/

  /*! exports provided: GitLogComponent */

  /***/
  function srcAppHomeGitGitLogGitLogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GitLogComponent", function () {
      return GitLogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _git_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../git.service */
    "./src/app/home/git/git.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var GitLogComponent =
    /*#__PURE__*/
    function () {
      function GitLogComponent(auth, git, formBuilder) {
        _classCallCheck(this, GitLogComponent);

        this.auth = auth;
        this.git = git;
        this.formBuilder = formBuilder;
        this.results = null;
        this.submitted = false;
        this.isLoading = false;
        this.error = null;
      }

      _createClass(GitLogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this40 = this;

          this.dataForm = this.formBuilder.group({
            gitRepoURL: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            shallowSince: ["null", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            follow: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            source: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            fulldiff: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            logsize: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            numstat: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            norenames: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            allmatch: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            invertgrep: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            regexpIgnorecase: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            basicRegexp: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            extendedRegexp: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            fixedstrings: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            perlRegexp: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            removeEmpty: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            merges: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            nominParents: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            nomaxParents: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            firstParent: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            reflog: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            alternateRefs: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            singleworktree: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            ignoremissing: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            boundary: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            all: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            optionalParams: ["null", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });

          if (this.isLoading == false) {
            this.git.testgitlogConnection().subscribe(function (resData) {}, function (errorMessage) {
              _this40.error = 'Could not connect to Git Log service, \n please download at https://hub.docker.com/repository/docker/nsfsain/git-log-service, start image, and set port to 3022';
            });
          }
        }
      }, {
        key: "followCheckbox",
        value: function followCheckbox(follow) {
          this.follow = follow;
        }
      }, {
        key: "sourceCheckbox",
        value: function sourceCheckbox(source) {
          this.source = source;
        }
      }, {
        key: "fulldiffCheckbox",
        value: function fulldiffCheckbox(fulldiff) {
          this.fulldiff = fulldiff;
        }
      }, {
        key: "logsizeCheckbox",
        value: function logsizeCheckbox(logsize) {
          this.logsize = logsize;
        }
      }, {
        key: "numstatCheckbox",
        value: function numstatCheckbox(numstat) {
          this.numstat = numstat;
        }
      }, {
        key: "norenamesCheckbox",
        value: function norenamesCheckbox(norenames) {
          this.norenames = norenames;
        }
      }, {
        key: "allmatchCheckbox",
        value: function allmatchCheckbox(allmatch) {
          this.allmatch = allmatch;
        }
      }, {
        key: "invertgrepCheckbox",
        value: function invertgrepCheckbox(invertgrep) {
          this.invertgrep = invertgrep;
        }
      }, {
        key: "regexpIgnorecaseCheckbox",
        value: function regexpIgnorecaseCheckbox(regexpIgnorecase) {
          this.regexpIgnorecase = regexpIgnorecase;
        }
      }, {
        key: "basicRegexpCheckbox",
        value: function basicRegexpCheckbox(basicRegexp) {
          this.basicRegexp = basicRegexp;
        }
      }, {
        key: "extendedRegexpCheckbox",
        value: function extendedRegexpCheckbox(extendedRegexp) {
          this.extendedRegexp = extendedRegexp;
        }
      }, {
        key: "fixedstringsCheckbox",
        value: function fixedstringsCheckbox(fixedstrings) {
          this.fixedstrings = fixedstrings;
        }
      }, {
        key: "perlRegexpCheckbox",
        value: function perlRegexpCheckbox(perlRegexp) {
          this.perlRegexp = perlRegexp;
        }
      }, {
        key: "removeEmptyCheckbox",
        value: function removeEmptyCheckbox(removeEmpty) {
          this.removeEmpty = removeEmpty;
        }
      }, {
        key: "mergesCheckbox",
        value: function mergesCheckbox(merges) {
          this.merges = merges;
        }
      }, {
        key: "nominParentsCheckbox",
        value: function nominParentsCheckbox(nominParents) {
          this.nominParents = nominParents;
        }
      }, {
        key: "nomaxParentsCheckbox",
        value: function nomaxParentsCheckbox(nomaxParents) {
          this.nomaxParents = nomaxParents;
        }
      }, {
        key: "firstParentCheckbox",
        value: function firstParentCheckbox(firstParent) {
          this.firstParent = firstParent;
        }
      }, {
        key: "reflogCheckbox",
        value: function reflogCheckbox(reflog) {
          this.reflog = reflog;
        }
      }, {
        key: "alternateRefsCheckbox",
        value: function alternateRefsCheckbox(alternateRefs) {
          this.alternateRefs = alternateRefs;
        }
      }, {
        key: "singleworktreeCheckbox",
        value: function singleworktreeCheckbox(singleworktree) {
          this.singleworktree = singleworktree;
        }
      }, {
        key: "ignoremissingCheckbox",
        value: function ignoremissingCheckbox(ignoremissing) {
          this.ignoremissing = ignoremissing;
        }
      }, {
        key: "boundaryCheckbox",
        value: function boundaryCheckbox(boundary) {
          this.boundary = boundary;
        }
      }, {
        key: "allCheckbox",
        value: function allCheckbox(all) {
          this.all = all;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this41 = this;

          if (!this.dataForm.valid) {
            return;
          }

          var data = new FormData();
          data.append("gitRepoURL", this.dataForm.get("gitRepoURL").value);
          data.append("shallowSince", this.dataForm.get("shallowSince").value);
          data.append("follow", this.dataForm.get("follow").value);
          data.append("source", this.dataForm.get("source").value);
          data.append("fulldiff", this.dataForm.get("fulldiff").value);
          data.append("logsize", this.dataForm.get("logsize").value);
          data.append("numstat", this.dataForm.get("numstat").value);
          data.append("extendedRegexp", this.dataForm.get("extendedRegexp").value);
          data.append("norenames", this.dataForm.get("norenames").value);
          data.append("allmatch", this.dataForm.get("allmatch").value);
          data.append("invertgrep", this.dataForm.get("invertgrep").value);
          data.append("regexpIgnorecase", this.dataForm.get("regexpIgnorecase").value);
          data.append("basicRegexp", this.dataForm.get("basicRegexp").value);
          data.append("fixedstrings", this.dataForm.get("fixedstrings").value);
          data.append("perlRegexp", this.dataForm.get("perlRegexp").value);
          data.append("removeEmpty", this.dataForm.get("removeEmpty").value);
          data.append("merges", this.dataForm.get("merges").value);
          data.append("nominParents", this.dataForm.get("nominParents").value);
          data.append("nomaxParents", this.dataForm.get("nomaxParents").value);
          data.append("firstParent", this.dataForm.get("firstParent").value);
          data.append("reflog", this.dataForm.get("reflog").value);
          data.append("alternateRefs", this.dataForm.get("alternateRefs").value);
          data.append("singleworktree", this.dataForm.get("singleworktree").value);
          data.append("ignoremissing", this.dataForm.get("ignoremissing").value);
          data.append("boundary", this.dataForm.get("boundary").value);
          data.append("all", this.dataForm.get("all").value);
          data.append("optionalParams", this.dataForm.get("optionalParams").value);
          this.submitted = true;
          this.isLoading = true;
          this.git.rungitlog(data).subscribe(function (resData) {
            _this41.results = resData;
            console.log(_this41.results);
            _this41.isLoading = false;
          }, function (errorMessage) {
            console.log(errorMessage);
            _this41.error = 'Unable to execute from back-end';
            _this41.isLoading = false;
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.dataForm.controls;
        }
      }]);

      return GitLogComponent;
    }();

    GitLogComponent.ctorParameters = function () {
      return [{
        type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _git_service__WEBPACK_IMPORTED_MODULE_3__["GitService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    GitLogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-git-log',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./git-log.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/git/git-log/git-log.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./git-log.component.css */
      "./src/app/home/git/git-log/git-log.component.css")).default]
    })], GitLogComponent);
    /***/
  },

  /***/
  "./src/app/home/git/git.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/home/git/git.service.ts ***!
    \*****************************************/

  /*! exports provided: GitService */

  /***/
  function srcAppHomeGitGitServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GitService", function () {
      return GitService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var GitService =
    /*#__PURE__*/
    function () {
      function GitService(http) {
        _classCallCheck(this, GitService);

        this.http = http;
      } //depsBuilder


      _createClass(GitService, [{
        key: "testgitlogConnection",
        value: function testgitlogConnection() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].git_log_url + '/engine/git');
        }
      }, {
        key: "rungitlog",
        value: function rungitlog(data) {
          // return this.http.post('http://localhost:3000/engine/git/log',data);
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].git_log_url + '/engine/git/log', data);
        }
      }]);

      return GitService;
    }();

    GitService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    GitService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], GitService);
    /***/
  },

  /***/
  "./src/app/home/header/footer/footer.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/home/header/footer/footer.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHeaderFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9oZWFkZXIvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/home/header/footer/footer.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/home/header/footer/footer.component.ts ***!
    \********************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppHomeHeaderFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/header/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/home/header/footer/footer.component.css")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/home/header/header-one/header-one.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/home/header/header-one/header-one.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHeaderHeaderOneHeaderOneComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".logo{\r\n    max-height: inherit;\r\n    max-width: 140px;\r\n    margin-right: 50px;\r\n}\r\n\r\n.nav-link-local{\r\n    font-size: 18px;\r\n    font-weight: 400;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2hlYWRlci9oZWFkZXItb25lL2hlYWRlci1vbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQiIsImZpbGUiOiIuLi9oZWFkZXIvaGVhZGVyLW9uZS9oZWFkZXItb25lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb3tcclxuICAgIG1heC1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBtYXgtd2lkdGg6IDE0MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4ubmF2LWxpbmstbG9jYWx7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home/header/header-one/header-one.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/home/header/header-one/header-one.component.ts ***!
    \****************************************************************/

  /*! exports provided: HeaderOneComponent */

  /***/
  function srcAppHomeHeaderHeaderOneHeaderOneComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderOneComponent", function () {
      return HeaderOneComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../authentication.service */
    "./src/app/authentication.service.ts");

    var HeaderOneComponent =
    /*#__PURE__*/
    function () {
      function HeaderOneComponent(auth) {
        _classCallCheck(this, HeaderOneComponent);

        this.auth = auth;
      }

      _createClass(HeaderOneComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderOneComponent;
    }();

    HeaderOneComponent.ctorParameters = function () {
      return [{
        type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }];
    };

    HeaderOneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header-one',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header-one.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/header/header-one/header-one.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header-one.component.css */
      "./src/app/home/header/header-one/header-one.component.css")).default]
    })], HeaderOneComponent);
    /***/
  },

  /***/
  "./src/app/home/header/header-two/header-two.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/home/header/header-two/header-two.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHeaderHeaderTwoHeaderTwoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9oZWFkZXIvaGVhZGVyLXR3by9oZWFkZXItdHdvLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/home/header/header-two/header-two.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/home/header/header-two/header-two.component.ts ***!
    \****************************************************************/

  /*! exports provided: HeaderTwoComponent */

  /***/
  function srcAppHomeHeaderHeaderTwoHeaderTwoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderTwoComponent", function () {
      return HeaderTwoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderTwoComponent =
    /*#__PURE__*/
    function () {
      function HeaderTwoComponent() {
        _classCallCheck(this, HeaderTwoComponent);
      }

      _createClass(HeaderTwoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderTwoComponent;
    }();

    HeaderTwoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header-two',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header-two.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/header/header-two/header-two.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header-two.component.css */
      "./src/app/home/header/header-two/header-two.component.css")).default]
    })], HeaderTwoComponent);
    /***/
  },

  /***/
  "./src/app/home/header/header.component.css":
  /*!**************************************************!*\
    !*** ./src/app/home/header/header.component.css ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/home/header/header.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/home/header/header.component.ts ***!
    \*************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHomeHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/home/header/header.component.css")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9ob21lLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/home/linux/linux-sed/linux-sed.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/home/linux/linux-sed/linux-sed.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeLinuxLinuxSedLinuxSedComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9saW51eC9saW51eC1zZWQvbGludXgtc2VkLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/home/linux/linux-sed/linux-sed.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/home/linux/linux-sed/linux-sed.component.ts ***!
    \*************************************************************/

  /*! exports provided: LinuxSedComponent */

  /***/
  function srcAppHomeLinuxLinuxSedLinuxSedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LinuxSedComponent", function () {
      return LinuxSedComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _linux_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../linux.service */
    "./src/app/home/linux/linux.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var LinuxSedComponent =
    /*#__PURE__*/
    function () {
      function LinuxSedComponent(auth, linux, formBuilder) {
        _classCallCheck(this, LinuxSedComponent);

        this.auth = auth;
        this.linux = linux;
        this.formBuilder = formBuilder;
        this.results = null;
        this.submitted = false;
        this.isLoading = false;
        this.error = null;
      }

      _createClass(LinuxSedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this42 = this;

          this.dataForm = this.formBuilder.group({
            inputFile: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            sedCommand: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            extendedRegex: ["null", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            sedCommandFile: ["null", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });

          if (this.isLoading == false) {
            this.linux.testsedConnection().subscribe(function (resData) {}, function (errorMessage) {
              _this42.error = 'Could not connect to Linux Sed service, \n please download at https://hub.docker.com/repository/docker/nsfsain/linux-sed-service, start image, and set port to 3023';
            });
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this43 = this;

          if (!this.dataForm.valid) {
            return;
          }

          var data = new FormData();
          data.append("inputFile", this.dataForm.get("inputFile").value);
          data.append("sedCommand", this.dataForm.get("sedCommand").value);
          data.append("extendedRegex", this.dataForm.get("extendedRegex").value);
          data.append("sedCommandFile", this.dataForm.get("sedCommandFile").value);
          this.submitted = true;
          this.isLoading = true;
          this.linux.runsed(data).subscribe(function (resData) {
            _this43.results = resData;
            console.log(_this43.results);
            _this43.isLoading = false;
          }, function (errorMessage) {
            console.log(errorMessage);
            _this43.error = 'Unable to execute from back-end';
            _this43.isLoading = false;
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.dataForm.controls;
        }
      }]);

      return LinuxSedComponent;
    }();

    LinuxSedComponent.ctorParameters = function () {
      return [{
        type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _linux_service__WEBPACK_IMPORTED_MODULE_3__["LinuxService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    LinuxSedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-linux-sed',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./linux-sed.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/linux/linux-sed/linux-sed.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./linux-sed.component.css */
      "./src/app/home/linux/linux-sed/linux-sed.component.css")).default]
    })], LinuxSedComponent);
    /***/
  },

  /***/
  "./src/app/home/linux/linux.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/linux/linux.service.ts ***!
    \*********************************************/

  /*! exports provided: LinuxService */

  /***/
  function srcAppHomeLinuxLinuxServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LinuxService", function () {
      return LinuxService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var LinuxService =
    /*#__PURE__*/
    function () {
      function LinuxService(http) {
        _classCallCheck(this, LinuxService);

        this.http = http;
      } //depsBuilder


      _createClass(LinuxService, [{
        key: "testsedConnection",
        value: function testsedConnection() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].linux_sed_url + '/engine/linux');
        }
      }, {
        key: "runsed",
        value: function runsed(data) {
          // return this.http.post('http://localhost:3000/engine/linux/sed',data);
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].linux_sed_url + '/engine/linux/sed', data);
        }
      }]);

      return LinuxService;
    }();

    LinuxService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    LinuxService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LinuxService);
    /***/
  },

  /***/
  "./src/app/home/mallet/mallet-hlda/mallet-hlda.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/home/mallet/mallet-hlda/mallet-hlda.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeMalletMalletHldaMalletHldaComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9tYWxsZXQvbWFsbGV0LWhsZGEvbWFsbGV0LWhsZGEuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/home/mallet/mallet-hlda/mallet-hlda.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/home/mallet/mallet-hlda/mallet-hlda.component.ts ***!
    \******************************************************************/

  /*! exports provided: MalletHldaComponent */

  /***/
  function srcAppHomeMalletMalletHldaMalletHldaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MalletHldaComponent", function () {
      return MalletHldaComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _mallet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../mallet.service */
    "./src/app/home/mallet/mallet.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var MalletHldaComponent =
    /*#__PURE__*/
    function () {
      function MalletHldaComponent(auth, mallet, formBuilder) {
        _classCallCheck(this, MalletHldaComponent);

        this.auth = auth;
        this.mallet = mallet;
        this.formBuilder = formBuilder;
        this.results = null;
        this.submitted = false;
        this.isLoading = false;
        this.error = null;
      }

      _createClass(MalletHldaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this44 = this;

          this.dataForm = this.formBuilder.group({
            inputFile: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            prefixCode: ["null", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            testingFile: ["null", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            outputState: ["null", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            randomSeed: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            showProgress: ["true", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            showTopicsInterval: [50, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            numtopwords: [20, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            numLevels: [3, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            alpha: [10.0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            gamma: [1.0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            eta: [0.1, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });

          if (this.isLoading == false) {
            this.mallet.testhldasConnection().subscribe(function (resData) {}, function (errorMessage) {
              _this44.error = 'Could not connect to Mallet hlda service, \n please download at https://hub.docker.com/repository/docker/nsfsain/mallet-hlda-service, start image, and set port to 3018';
            });
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this45 = this;

          if (!this.dataForm.valid) {
            return;
          }

          var data = new FormData();
          data.append("inputFile", this.dataForm.get("inputFile").value);
          data.append("prefixCode", this.dataForm.get("prefixCode").value);
          data.append("testingFile", this.dataForm.get("testingFile").value);
          data.append("outputState", this.dataForm.get("outputState").value);
          data.append("randomSeed", this.dataForm.get("randomSeed").value);
          data.append("showProgress", this.dataForm.get("showProgress").value);
          data.append("showTopicsInterval", this.dataForm.get("showTopicsInterval").value);
          data.append("numtopwords", this.dataForm.get("numtopwords").value);
          data.append("numLevels", this.dataForm.get("numLevels").value);
          data.append("alpha", this.dataForm.get("alpha").value);
          data.append("gamma", this.dataForm.get("gamma").value);
          data.append("eta", this.dataForm.get("eta").value);
          this.submitted = true;
          this.isLoading = true;
          this.mallet.runhlda(data).subscribe(function (resData) {
            _this45.results = resData;
            console.log(_this45.results);
            _this45.isLoading = false;
          }, function (errorMessage) {
            console.log(errorMessage);
            _this45.error = 'Unable to execute from back-end';
            _this45.isLoading = false;
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.dataForm.controls;
        }
      }]);

      return MalletHldaComponent;
    }();

    MalletHldaComponent.ctorParameters = function () {
      return [{
        type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _mallet_service__WEBPACK_IMPORTED_MODULE_3__["MalletService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    MalletHldaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mallet-hlda',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mallet-hlda.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/mallet/mallet-hlda/mallet-hlda.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mallet-hlda.component.css */
      "./src/app/home/mallet/mallet-hlda/mallet-hlda.component.css")).default]
    })], MalletHldaComponent);
    /***/
  },

  /***/
  "./src/app/home/mallet/mallet-importdir/mallet-importdir.component.css":
  /*!*****************************************************************************!*\
    !*** ./src/app/home/mallet/mallet-importdir/mallet-importdir.component.css ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeMalletMalletImportdirMalletImportdirComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9tYWxsZXQvbWFsbGV0LWltcG9ydGRpci9tYWxsZXQtaW1wb3J0ZGlyLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/home/mallet/mallet-importdir/mallet-importdir.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/home/mallet/mallet-importdir/mallet-importdir.component.ts ***!
    \****************************************************************************/

  /*! exports provided: MalletImportdirComponent */

  /***/
  function srcAppHomeMalletMalletImportdirMalletImportdirComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MalletImportdirComponent", function () {
      return MalletImportdirComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _mallet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../mallet.service */
    "./src/app/home/mallet/mallet.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var MalletImportdirComponent =
    /*#__PURE__*/
    function () {
      function MalletImportdirComponent(auth, mallet, formBuilder) {
        _classCallCheck(this, MalletImportdirComponent);

        this.auth = auth;
        this.mallet = mallet;
        this.formBuilder = formBuilder;
        this.results = null;
        this.submitted = false;
        this.isLoading = false;
        this.error = null;
      }

      _createClass(MalletImportdirComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this46 = this;

          this.dataForm = this.formBuilder.group({
            srcDir: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            outputFile: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            removeStopwords: ["TRUE", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            keepSequence: ["TRUE", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            prefixCode: ["null", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            preserveCase: ["FALSE", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            stoplistFile: ["null", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            extraStopwords: ["null", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            skipHeader: ["FALSE", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            skipHtml: ["FALSE", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            binaryFeatures: ["FALSE", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            gramSizes: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            keepSequenceBigrams: ["FALSE", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            saveTextinSource: ["FALSE", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            stringPipe: ["null", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            tokenPipe: ["null", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            fvPipe: ["null", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            encoding: ["UTF-8", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            tokenRegex: ["\\p{Alpha}+", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            printOutput: ["FALSE", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            usePipefromFile: ["null", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });

          if (this.isLoading == false) {
            this.mallet.testimportdirConnection().subscribe(function (resData) {}, function (errorMessage) {
              _this46.error = 'Could not connect to Topic Model Generator service, \n please download at https://hub.docker.com/repository/docker/nsfsain/mallet-importdir-service, start image, and set port to 3012';
            });
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this47 = this;

          if (!this.dataForm.valid) {
            return;
          }

          var data = new FormData();
          data.append("srcDir", this.dataForm.get("srcDir").value);
          data.append("outputFile", this.dataForm.get("outputFile").value);
          data.append("removeStopwords", this.dataForm.get("removeStopwords").value);
          data.append("keepSequence", this.dataForm.get("keepSequence").value);
          data.append("prefixCode", this.dataForm.get("prefixCode").value);
          data.append("preserveCase", this.dataForm.get("preserveCase").value);
          data.append("stoplistFile", this.dataForm.get("stoplistFile").value);
          data.append("extraStopwords", this.dataForm.get("extraStopwords").value);
          data.append("skipHeader", this.dataForm.get("skipHeader").value);
          data.append("skipHtml", this.dataForm.get("skipHtml").value);
          data.append("binaryFeatures", this.dataForm.get("binaryFeatures").value);
          data.append("gramSizes", this.dataForm.get("gramSizes").value);
          data.append("keepSequenceBigrams", this.dataForm.get("keepSequenceBigrams").value);
          data.append("saveTextinSource", this.dataForm.get("saveTextinSource").value);
          data.append("stringPipe", this.dataForm.get("stringPipe").value);
          data.append("tokenPipe", this.dataForm.get("tokenPipe").value);
          data.append("fvPipe", this.dataForm.get("fvPipe").value);
          data.append("encoding", this.dataForm.get("encoding").value);
          data.append("tokenRegex", this.dataForm.get("tokenRegex").value);
          data.append("printOutput", this.dataForm.get("printOutput").value);
          data.append("usePipefromFile", this.dataForm.get("usePipefromFile").value);
          this.submitted = true;
          this.isLoading = true;
          this.mallet.runimportdir(data).subscribe(function (resData) {
            _this47.results = resData;
            console.log(_this47.results);
            _this47.isLoading = false;
          }, function (errorMessage) {
            console.log(errorMessage);
            _this47.error = 'Unable to execute from back-end';
            _this47.isLoading = false;
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.dataForm.controls;
        }
      }]);

      return MalletImportdirComponent;
    }();

    MalletImportdirComponent.ctorParameters = function () {
      return [{
        type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _mallet_service__WEBPACK_IMPORTED_MODULE_3__["MalletService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    MalletImportdirComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mallet-importdir',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mallet-importdir.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/mallet/mallet-importdir/mallet-importdir.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mallet-importdir.component.css */
      "./src/app/home/mallet/mallet-importdir/mallet-importdir.component.css")).default]
    })], MalletImportdirComponent);
    /***/
  },

  /***/
  "./src/app/home/mallet/mallet-importfile/mallet-importfile.component.css":
  /*!*******************************************************************************!*\
    !*** ./src/app/home/mallet/mallet-importfile/mallet-importfile.component.css ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeMalletMalletImportfileMalletImportfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9tYWxsZXQvbWFsbGV0LWltcG9ydGZpbGUvbWFsbGV0LWltcG9ydGZpbGUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/home/mallet/mallet-importfile/mallet-importfile.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/home/mallet/mallet-importfile/mallet-importfile.component.ts ***!
    \******************************************************************************/

  /*! exports provided: MalletImportfileComponent */

  /***/
  function srcAppHomeMalletMalletImportfileMalletImportfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MalletImportfileComponent", function () {
      return MalletImportfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _mallet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../mallet.service */
    "./src/app/home/mallet/mallet.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var MalletImportfileComponent =
    /*#__PURE__*/
    function () {
      function MalletImportfileComponent(auth, mallet, formBuilder) {
        _classCallCheck(this, MalletImportfileComponent);

        this.auth = auth;
        this.mallet = mallet;
        this.formBuilder = formBuilder;
        this.results = null;
        this.submitted = false;
        this.isLoading = false;
        this.error = null;
      }

      _createClass(MalletImportfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this48 = this;

          this.dataForm = this.formBuilder.group({
            inputFile: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            outputFile: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            prefixCode: ["null", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            lineRegex: ["^(\\S*)[\\s,]*(\\S*)[\\s,]*(.*)$", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            label: [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            name: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            data: [3, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            keepSequence: ["FALSE", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            keepSequenceBigrams: ["FALSE", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            removeStopwords: ["FALSE", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            preserveCase: ["FALSE", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            encoding: ["UTF-8", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            tokenRegex: ["\\p{Alpha}+", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            printOutput: ["FALSE", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            usePipefromFile: ["null", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            stoplistFile: ["null", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            extraStopwords: ["null", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });

          if (this.isLoading == false) {
            this.mallet.testimportfileConnection().subscribe(function (resData) {}, function (errorMessage) {
              _this48.error = 'Could not connect to Mallet import-file service, \n please download at https://hub.docker.com/repository/docker/nsfsain/mallet-importfile-service, start image, and set port to 3015';
            });
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this49 = this;

          if (!this.dataForm.valid) {
            return;
          }

          var data = new FormData();
          data.append("inputFile", this.dataForm.get("inputFile").value);
          data.append("outputFile", this.dataForm.get("outputFile").value);
          data.append("removeStopwords", this.dataForm.get("removeStopwords").value);
          data.append("keepSequence", this.dataForm.get("keepSequence").value);
          data.append("prefixCode", this.dataForm.get("prefixCode").value);
          data.append("preserveCase", this.dataForm.get("preserveCase").value);
          data.append("stoplistFile", this.dataForm.get("stoplistFile").value);
          data.append("extraStopwords", this.dataForm.get("extraStopwords").value);
          data.append("lineRegex", this.dataForm.get("lineRegex").value);
          data.append("label", this.dataForm.get("label").value);
          data.append("name", this.dataForm.get("name").value);
          data.append("data", this.dataForm.get("data").value);
          data.append("keepSequenceBigrams", this.dataForm.get("keepSequenceBigrams").value);
          data.append("encoding", this.dataForm.get("encoding").value);
          data.append("tokenRegex", this.dataForm.get("tokenRegex").value);
          data.append("printOutput", this.dataForm.get("printOutput").value);
          data.append("usePipefromFile", this.dataForm.get("usePipefromFile").value);
          this.submitted = true;
          this.isLoading = true;
          this.mallet.runimportfile(data).subscribe(function (resData) {
            _this49.results = resData;
            console.log(_this49.results);
            _this49.isLoading = false;
          }, function (errorMessage) {
            console.log(errorMessage);
            _this49.error = 'Unable to execute from back-end';
            _this49.isLoading = false;
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.dataForm.controls;
        }
      }]);

      return MalletImportfileComponent;
    }();

    MalletImportfileComponent.ctorParameters = function () {
      return [{
        type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _mallet_service__WEBPACK_IMPORTED_MODULE_3__["MalletService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    MalletImportfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mallet-importfile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mallet-importfile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/mallet/mallet-importfile/mallet-importfile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mallet-importfile.component.css */
      "./src/app/home/mallet/mallet-importfile/mallet-importfile.component.css")).default]
    })], MalletImportfileComponent);
    /***/
  },

  /***/
  "./src/app/home/mallet/mallet-infertopics/mallet-infertopics.component.css":
  /*!*********************************************************************************!*\
    !*** ./src/app/home/mallet/mallet-infertopics/mallet-infertopics.component.css ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeMalletMalletInfertopicsMalletInfertopicsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9tYWxsZXQvbWFsbGV0LWluZmVydG9waWNzL21hbGxldC1pbmZlcnRvcGljcy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/home/mallet/mallet-infertopics/mallet-infertopics.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/home/mallet/mallet-infertopics/mallet-infertopics.component.ts ***!
    \********************************************************************************/

  /*! exports provided: MalletInfertopicsComponent */

  /***/
  function srcAppHomeMalletMalletInfertopicsMalletInfertopicsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MalletInfertopicsComponent", function () {
      return MalletInfertopicsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _mallet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../mallet.service */
    "./src/app/home/mallet/mallet.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var MalletInfertopicsComponent =
    /*#__PURE__*/
    function () {
      function MalletInfertopicsComponent(auth, mallet, formBuilder) {
        _classCallCheck(this, MalletInfertopicsComponent);

        this.auth = auth;
        this.mallet = mallet;
        this.formBuilder = formBuilder;
        this.results = null;
        this.submitted = false;
        this.isLoading = false;
        this.error = null;
      }

      _createClass(MalletInfertopicsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this50 = this;

          this.dataForm = this.formBuilder.group({
            prefixCode: ["null", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            inputFile: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            outputDocTopics: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            inferencerFilename: ["null", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            doctopicsThreshold: [0.0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            docTopicsMax: [-1, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            numIterations: [1000, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            sampleInterval: [10, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            burnIn: [10, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            randomSeed: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });

          if (this.isLoading == false) {
            this.mallet.testinfertopicsConnection().subscribe(function (resData) {}, function (errorMessage) {
              _this50.error = 'Could not connect to Mallet Infer Topics service, \n please download at https://hub.docker.com/repository/docker/nsfsain/mallet-infertopics-service, start image, and set port to 3017';
            });
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this51 = this;

          if (!this.dataForm.valid) {
            return;
          }

          var data = new FormData();
          data.append("prefixCode", this.dataForm.get("prefixCode").value);
          data.append("inputFile", this.dataForm.get("inputFile").value);
          data.append("outputDocTopics", this.dataForm.get("outputDocTopics").value);
          data.append("inferencerFilename", this.dataForm.get("inferencerFilename").value);
          data.append("doctopicsThreshold", this.dataForm.get("doctopicsThreshold").value);
          data.append("numIterations", this.dataForm.get("numIterations").value);
          data.append("sampleInterval", this.dataForm.get("sampleInterval").value);
          data.append("burnIn", this.dataForm.get("burnIn").value);
          data.append("randomSeed", this.dataForm.get("randomSeed").value);
          this.submitted = true;
          this.isLoading = true;
          this.mallet.runinfertopics(data).subscribe(function (resData) {
            _this51.results = resData;
            console.log(_this51.results);
            _this51.isLoading = false;
          }, function (errorMessage) {
            console.log(errorMessage);
            _this51.error = 'Unable to execute from back-end';
            _this51.isLoading = false;
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.dataForm.controls;
        }
      }]);

      return MalletInfertopicsComponent;
    }();

    MalletInfertopicsComponent.ctorParameters = function () {
      return [{
        type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _mallet_service__WEBPACK_IMPORTED_MODULE_3__["MalletService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    MalletInfertopicsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mallet-infertopics',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mallet-infertopics.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/mallet/mallet-infertopics/mallet-infertopics.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mallet-infertopics.component.css */
      "./src/app/home/mallet/mallet-infertopics/mallet-infertopics.component.css")).default]
    })], MalletInfertopicsComponent);
    /***/
  },

  /***/
  "./src/app/home/mallet/mallet-prune/mallet-prune.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/home/mallet/mallet-prune/mallet-prune.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeMalletMalletPruneMalletPruneComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9tYWxsZXQvbWFsbGV0LXBydW5lL21hbGxldC1wcnVuZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/home/mallet/mallet-prune/mallet-prune.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/home/mallet/mallet-prune/mallet-prune.component.ts ***!
    \********************************************************************/

  /*! exports provided: MalletPruneComponent */

  /***/
  function srcAppHomeMalletMalletPruneMalletPruneComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MalletPruneComponent", function () {
      return MalletPruneComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _mallet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../mallet.service */
    "./src/app/home/mallet/mallet.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var MalletPruneComponent =
    /*#__PURE__*/
    function () {
      function MalletPruneComponent(auth, mallet, formBuilder) {
        _classCallCheck(this, MalletPruneComponent);

        this.auth = auth;
        this.mallet = mallet;
        this.formBuilder = formBuilder;
        this.results = null;
        this.submitted = false;
        this.isLoading = false;
        this.error = null;
      }

      _createClass(MalletPruneComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this52 = this;

          this.dataForm = this.formBuilder.group({
            prefixCode: ["null", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            inputFile: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            outputFile: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            trainingPortion: [1.0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            validationPortion: [0.0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            randomSeed: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            trainingFile: ["null", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            testingFile: ["null", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            validationFile: ["null", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            pruneInfogain: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            pruneCount: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            vectorToSequence: ["false", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            hideTargets: ["false", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            revealTargets: ["false", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });

          if (this.isLoading == false) {
            this.mallet.testpruneConnection().subscribe(function (resData) {}, function (errorMessage) {
              _this52.error = 'Could not connect to Mallet Prune service, \n please download at https://hub.docker.com/repository/docker/nsfsain/mallet-prune-service, start image, and set port to 3019';
            });
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this53 = this;

          if (!this.dataForm.valid) {
            return;
          }

          var data = new FormData();
          data.append("prefixCode", this.dataForm.get("prefixCode").value);
          data.append("inputFile", this.dataForm.get("inputFile").value);
          data.append("outputFile", this.dataForm.get("outputFile").value);
          data.append("randomSeed", this.dataForm.get("randomSeed").value);
          data.append("trainingPortion", this.dataForm.get("trainingPortion").value);
          data.append("validationPortion", this.dataForm.get("validationPortion").value);
          data.append("trainingFile", this.dataForm.get("trainingFile").value);
          data.append("testingFile", this.dataForm.get("testingFile").value);
          data.append("validationFile", this.dataForm.get("validationFile").value);
          data.append("pruneInfogain", this.dataForm.get("pruneInfogain").value);
          data.append("pruneCount", this.dataForm.get("pruneCount").value);
          data.append("vectorToSequence", this.dataForm.get("vectorToSequence").value);
          data.append("hideTargets", this.dataForm.get("hideTargets").value);
          data.append("revealTargets", this.dataForm.get("revealTargets").value);
          this.submitted = true;
          this.isLoading = true;
          this.mallet.runprune(data).subscribe(function (resData) {
            _this53.results = resData;
            console.log(_this53.results);
            _this53.isLoading = false;
          }, function (errorMessage) {
            console.log(errorMessage);
            _this53.error = 'Unable to execute from back-end';
            _this53.isLoading = false;
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.dataForm.controls;
        }
      }]);

      return MalletPruneComponent;
    }();

    MalletPruneComponent.ctorParameters = function () {
      return [{
        type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _mallet_service__WEBPACK_IMPORTED_MODULE_3__["MalletService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    MalletPruneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mallet-prune',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mallet-prune.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/mallet/mallet-prune/mallet-prune.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mallet-prune.component.css */
      "./src/app/home/mallet/mallet-prune/mallet-prune.component.css")).default]
    })], MalletPruneComponent);
    /***/
  },

  /***/
  "./src/app/home/mallet/mallet-split/mallet-split.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/home/mallet/mallet-split/mallet-split.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeMalletMalletSplitMalletSplitComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9tYWxsZXQvbWFsbGV0LXNwbGl0L21hbGxldC1zcGxpdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/home/mallet/mallet-split/mallet-split.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/home/mallet/mallet-split/mallet-split.component.ts ***!
    \********************************************************************/

  /*! exports provided: MalletSplitComponent */

  /***/
  function srcAppHomeMalletMalletSplitMalletSplitComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MalletSplitComponent", function () {
      return MalletSplitComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _mallet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../mallet.service */
    "./src/app/home/mallet/mallet.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var MalletSplitComponent =
    /*#__PURE__*/
    function () {
      function MalletSplitComponent(auth, mallet, formBuilder) {
        _classCallCheck(this, MalletSplitComponent);

        this.auth = auth;
        this.mallet = mallet;
        this.formBuilder = formBuilder;
        this.results = null;
        this.submitted = false;
        this.isLoading = false;
        this.error = null;
      }

      _createClass(MalletSplitComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this54 = this;

          this.dataForm = this.formBuilder.group({
            prefixCode: ["null", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            inputFile: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            outputFile: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            trainingPortion: [1.0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            validationPortion: [0.0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            randomSeed: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            trainingFile: ["null", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            testingFile: ["null", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            validationFile: ["null", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            pruneInfogain: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            pruneCount: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            vectorToSequence: ["false", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            hideTargets: ["false", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            revealTargets: ["false", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });

          if (this.isLoading == false) {
            this.mallet.testsplitConnection().subscribe(function (resData) {}, function (errorMessage) {
              _this54.error = 'Could not connect to Mallet Split service, \n please download at https://hub.docker.com/repository/docker/nsfsain/mallet-split-service, start image, and set port to 3020';
            });
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this55 = this;

          if (!this.dataForm.valid) {
            return;
          }

          var data = new FormData();
          data.append("prefixCode", this.dataForm.get("prefixCode").value);
          data.append("inputFile", this.dataForm.get("inputFile").value);
          data.append("outputFile", this.dataForm.get("outputFile").value);
          data.append("randomSeed", this.dataForm.get("randomSeed").value);
          data.append("trainingPortion", this.dataForm.get("trainingPortion").value);
          data.append("validationPortion", this.dataForm.get("validationPortion").value);
          data.append("trainingFile", this.dataForm.get("trainingFile").value);
          data.append("testingFile", this.dataForm.get("testingFile").value);
          data.append("validationFile", this.dataForm.get("validationFile").value);
          data.append("pruneInfogain", this.dataForm.get("pruneInfogain").value);
          data.append("pruneCount", this.dataForm.get("pruneCount").value);
          data.append("vectorToSequence", this.dataForm.get("vectorToSequence").value);
          data.append("hideTargets", this.dataForm.get("hideTargets").value);
          data.append("revealTargets", this.dataForm.get("revealTargets").value);
          this.submitted = true;
          this.isLoading = true;
          this.mallet.runsplit(data).subscribe(function (resData) {
            _this55.results = resData;
            console.log(_this55.results);
            _this55.isLoading = false;
          }, function (errorMessage) {
            console.log(errorMessage);
            _this55.error = 'Unable to execute from back-end';
            _this55.isLoading = false;
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.dataForm.controls;
        }
      }]);

      return MalletSplitComponent;
    }();

    MalletSplitComponent.ctorParameters = function () {
      return [{
        type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _mallet_service__WEBPACK_IMPORTED_MODULE_3__["MalletService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    MalletSplitComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mallet-split',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mallet-split.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/mallet/mallet-split/mallet-split.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mallet-split.component.css */
      "./src/app/home/mallet/mallet-split/mallet-split.component.css")).default]
    })], MalletSplitComponent);
    /***/
  },

  /***/
  "./src/app/home/mallet/mallet-trainclassifier/mallet-trainclassifier.component.css":
  /*!*****************************************************************************************!*\
    !*** ./src/app/home/mallet/mallet-trainclassifier/mallet-trainclassifier.component.css ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeMalletMalletTrainclassifierMalletTrainclassifierComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9tYWxsZXQvbWFsbGV0LXRyYWluY2xhc3NpZmllci9tYWxsZXQtdHJhaW5jbGFzc2lmaWVyLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/home/mallet/mallet-trainclassifier/mallet-trainclassifier.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/home/mallet/mallet-trainclassifier/mallet-trainclassifier.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: MalletTrainclassifierComponent */

  /***/
  function srcAppHomeMalletMalletTrainclassifierMalletTrainclassifierComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MalletTrainclassifierComponent", function () {
      return MalletTrainclassifierComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _mallet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../mallet.service */
    "./src/app/home/mallet/mallet.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var MalletTrainclassifierComponent =
    /*#__PURE__*/
    function () {
      function MalletTrainclassifierComponent(auth, mallet, formBuilder) {
        _classCallCheck(this, MalletTrainclassifierComponent);

        this.auth = auth;
        this.mallet = mallet;
        this.formBuilder = formBuilder;
        this.results = null;
        this.submitted = false;
        this.isLoading = false;
        this.error = null;
      }

      _createClass(MalletTrainclassifierComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this56 = this;

          this.dataForm = this.formBuilder.group({
            inputFile: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            outputClassifier: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            prefixCode: ["null", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            report: ["test:accuracy test:confusion train:accuracy", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            trainer: ["new NaiveBayesTrainer()", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            trainingPortion: [1.0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            validationPortion: [0.0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            unlabeledPortion: [0.0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            randomSeed: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            numTrials: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            classifierEvaluator: ["null", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            verbosity: [-1, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            noOverwriteProgressMessages: ["false", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            crossValidation: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            trainingFile: ["null", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            testingFile: ["null", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            validationFile: ["null", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });

          if (this.isLoading == false) {
            this.mallet.testtrainclassifierConnection().subscribe(function (resData) {}, function (errorMessage) {
              _this56.error = 'Could not connect to Mallet Train Topics service, \n please download at https://hub.docker.com/repository/docker/nsfsain/mallet-traintopics-service, start image, and set port to 3013';
            });
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this57 = this;

          if (!this.dataForm.valid) {
            return;
          }

          var data = new FormData();
          data.append("inputFile", this.dataForm.get("inputFile").value);
          data.append("outputClassifier", this.dataForm.get("outputClassifier").value);
          data.append("prefixCode", this.dataForm.get("prefixCode").value);
          data.append("report", this.dataForm.get("report").value);
          data.append("trainer", this.dataForm.get("trainer").value);
          data.append("trainingPortion", this.dataForm.get("trainingPortion").value);
          data.append("validationPortion", this.dataForm.get("validationPortion").value);
          data.append("unlabeledPortion", this.dataForm.get("unlabeledPortion").value);
          data.append("randomSeed", this.dataForm.get("randomSeed").value);
          data.append("numTrials", this.dataForm.get("numTrials").value);
          data.append("classifierEvaluator", this.dataForm.get("classifierEvaluator").value);
          data.append("verbosity", this.dataForm.get("verbosity").value);
          data.append("noOverwriteProgressMessages", this.dataForm.get("noOverwriteProgressMessages").value);
          data.append("crossValidation", this.dataForm.get("crossValidation").value);
          data.append("trainingFile", this.dataForm.get("trainingFile").value);
          data.append("testingFile", this.dataForm.get("testingFile").value);
          data.append("validationFile", this.dataForm.get("validationFile").value);
          this.submitted = true;
          this.isLoading = true;
          this.mallet.runtrainclassifier(data).subscribe(function (resData) {
            _this57.results = resData;
            console.log(_this57.results);
            _this57.isLoading = false;
          }, function (errorMessage) {
            console.log(errorMessage);
            _this57.error = 'Unable to execute from back-end';
            _this57.isLoading = false;
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.dataForm.controls;
        }
      }]);

      return MalletTrainclassifierComponent;
    }();

    MalletTrainclassifierComponent.ctorParameters = function () {
      return [{
        type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _mallet_service__WEBPACK_IMPORTED_MODULE_3__["MalletService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    MalletTrainclassifierComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mallet-trainclassifier',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mallet-trainclassifier.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/mallet/mallet-trainclassifier/mallet-trainclassifier.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mallet-trainclassifier.component.css */
      "./src/app/home/mallet/mallet-trainclassifier/mallet-trainclassifier.component.css")).default]
    })], MalletTrainclassifierComponent);
    /***/
  },

  /***/
  "./src/app/home/mallet/mallet-traintopics/mallet-traintopics.component.css":
  /*!*********************************************************************************!*\
    !*** ./src/app/home/mallet/mallet-traintopics/mallet-traintopics.component.css ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeMalletMalletTraintopicsMalletTraintopicsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9tYWxsZXQvbWFsbGV0LXRyYWludG9waWNzL21hbGxldC10cmFpbnRvcGljcy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/home/mallet/mallet-traintopics/mallet-traintopics.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/home/mallet/mallet-traintopics/mallet-traintopics.component.ts ***!
    \********************************************************************************/

  /*! exports provided: MalletTraintopicsComponent */

  /***/
  function srcAppHomeMalletMalletTraintopicsMalletTraintopicsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MalletTraintopicsComponent", function () {
      return MalletTraintopicsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _mallet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../mallet.service */
    "./src/app/home/mallet/mallet.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var MalletTraintopicsComponent =
    /*#__PURE__*/
    function () {
      function MalletTraintopicsComponent(auth, mallet, formBuilder) {
        _classCallCheck(this, MalletTraintopicsComponent);

        this.auth = auth;
        this.mallet = mallet;
        this.formBuilder = formBuilder;
        this.results = null;
        this.submitted = false;
        this.isLoading = false;
        this.error = null;
      }

      _createClass(MalletTraintopicsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this58 = this;

          this.dataForm = this.formBuilder.group({
            topicmodelFile: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            inferencerFilename: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            numtopwords: [20, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            numTopics: [10, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            numThreads: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            numIterations: [1000, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            doctopicsThreshold: [0.0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            prefixCode: ["null", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            docTopicsMax: [-1, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            randomSeed: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            usePam: ["false", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            useNgrams: ["false", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            showTopicsInterval: [50, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            outputModelInterval: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            alpha: [50.0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            outputStateInterval: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            optimizeInterval: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            beta: [0.01, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            optimizeBurnin: [200, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            useSymmetricAlpha: ["false", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            gamma: [0.01, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            delta: [0.03, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            delta1: [0.2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            delta2: [1000.0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            pamNumSupertopics: [10, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            pamNumSubtopics: [20, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            languageInput: ["null", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            testing: ["null", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            outputModel: ["null", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            inputModel: ["null", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            evaluatorFilename: ["null", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            outputState: ["null", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            outputTopicKeys: ["null", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            topicWordWeightsFile: ["null", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            wordTopicCountsFile: ["null", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            xmlTopicReport: ["null", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            xmlTopicPhraseReport: ["null", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            outputDocTopics: ["null", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });

          if (this.isLoading == false) {
            this.mallet.testtraintopicsConnection().subscribe(function (resData) {}, function (errorMessage) {
              _this58.error = 'Could not connect to Mallet Train Topics service, \n please download at https://hub.docker.com/repository/docker/nsfsain/mallet-traintopics-service, start image, and set port to 3013';
            });
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this59 = this;

          if (!this.dataForm.valid) {
            return;
          }

          var data = new FormData();
          data.append("topicmodelFile", this.dataForm.get("topicmodelFile").value);
          data.append("inferencerFilename", this.dataForm.get("inferencerFilename").value);
          data.append("numtopwords", this.dataForm.get("numtopwords").value);
          data.append("numTopics", this.dataForm.get("numTopics").value);
          data.append("numThreads", this.dataForm.get("numThreads").value);
          data.append("numIterations", this.dataForm.get("numIterations").value);
          data.append("doctopicsThreshold", this.dataForm.get("doctopicsThreshold").value);
          data.append("prefixCode", this.dataForm.get("prefixCode").value);
          data.append("docTopicsMax", this.dataForm.get("docTopicsMax").value);
          data.append("randomSeed", this.dataForm.get("randomSeed").value);
          data.append("usePam", this.dataForm.get("usePam").value);
          data.append("useNgrams", this.dataForm.get("useNgrams").value);
          data.append("showTopicsInterval", this.dataForm.get("showTopicsInterval").value);
          data.append("outputModelInterval", this.dataForm.get("outputModelInterval").value);
          data.append("alpha", this.dataForm.get("alpha").value);
          data.append("outputStateInterval", this.dataForm.get("outputStateInterval").value);
          data.append("optimizeInterval", this.dataForm.get("optimizeInterval").value);
          data.append("beta", this.dataForm.get("beta").value);
          data.append("optimizeBurnin", this.dataForm.get("optimizeBurnin").value);
          data.append("useSymmetricAlpha", this.dataForm.get("useSymmetricAlpha").value);
          data.append("gamma", this.dataForm.get("gamma").value);
          data.append("delta", this.dataForm.get("delta").value);
          data.append("delta1", this.dataForm.get("delta1").value);
          data.append("delta2", this.dataForm.get("delta2").value);
          data.append("pamNumSupertopics", this.dataForm.get("pamNumSupertopics").value);
          data.append("pamNumSubtopics", this.dataForm.get("pamNumSubtopics").value);
          data.append("languageInput", this.dataForm.get("languageInput").value);
          data.append("testing", this.dataForm.get("testing").value);
          data.append("outputModel", this.dataForm.get("outputModel").value);
          data.append("inputModel", this.dataForm.get("inputModel").value);
          data.append("evaluatorFilename", this.dataForm.get("evaluatorFilename").value);
          data.append("outputState", this.dataForm.get("outputState").value);
          data.append("topicWordWeightsFile", this.dataForm.get("topicWordWeightsFile").value);
          data.append("outputTopicKeys", this.dataForm.get("outputTopicKeys").value);
          data.append("wordTopicCountsFile", this.dataForm.get("wordTopicCountsFile").value);
          data.append("xmlTopicReport", this.dataForm.get("xmlTopicReport").value);
          data.append("xmlTopicPhraseReport", this.dataForm.get("xmlTopicPhraseReport").value);
          data.append("outputDocTopics", this.dataForm.get("outputDocTopics").value);
          this.submitted = true;
          this.isLoading = true;
          this.mallet.runtraintopics(data).subscribe(function (resData) {
            _this59.results = resData;
            console.log(_this59.results);
            _this59.isLoading = false;
          }, function (errorMessage) {
            console.log(errorMessage);
            _this59.error = 'Unable to execute from back-end';
            _this59.isLoading = false;
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.dataForm.controls;
        }
      }]);

      return MalletTraintopicsComponent;
    }();

    MalletTraintopicsComponent.ctorParameters = function () {
      return [{
        type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _mallet_service__WEBPACK_IMPORTED_MODULE_3__["MalletService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    MalletTraintopicsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mallet-traintopics',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mallet-traintopics.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/mallet/mallet-traintopics/mallet-traintopics.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mallet-traintopics.component.css */
      "./src/app/home/mallet/mallet-traintopics/mallet-traintopics.component.css")).default]
    })], MalletTraintopicsComponent);
    /***/
  },

  /***/
  "./src/app/home/mallet/mallet.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/home/mallet/mallet.service.ts ***!
    \***********************************************/

  /*! exports provided: MalletService */

  /***/
  function srcAppHomeMalletMalletServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MalletService", function () {
      return MalletService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var MalletService =
    /*#__PURE__*/
    function () {
      function MalletService(http) {
        _classCallCheck(this, MalletService);

        this.http = http;
      } //import-dir


      _createClass(MalletService, [{
        key: "testimportdirConnection",
        value: function testimportdirConnection() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].mallet_importdir_url + '/engine/mallet');
        }
      }, {
        key: "runimportdir",
        value: function runimportdir(data) {
          // return this.http.post('http://localhost:3012//engine/mallet/topicmodel',data);
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].mallet_importdir_url + '/engine/mallet/topicmodel', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["timeout"])(2400000));
        } //train-topics

      }, {
        key: "testtraintopicsConnection",
        value: function testtraintopicsConnection() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].mallet_traintopics_url + '/engine/mallet');
        }
      }, {
        key: "runtraintopics",
        value: function runtraintopics(data) {
          // return this.http.post('http://localhost:3012//engine/mallet/traintopics',data);
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].mallet_traintopics_url + '/engine/mallet/traintopics', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["timeout"])(2400000));
        } //import-file

      }, {
        key: "testimportfileConnection",
        value: function testimportfileConnection() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].mallet_importfile_url + '/engine/mallet');
        }
      }, {
        key: "runimportfile",
        value: function runimportfile(data) {
          // return this.http.post('http://localhost:3012//engine/mallet/importfile',data);
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].mallet_importfile_url + '/engine/mallet/importfile', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["timeout"])(2400000));
        } //train-classifier

      }, {
        key: "testtrainclassifierConnection",
        value: function testtrainclassifierConnection() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].mallet_trainclassifier_url + '/engine/mallet');
        }
      }, {
        key: "runtrainclassifier",
        value: function runtrainclassifier(data) {
          // return this.http.post('http://localhost:3012//engine/mallet/trainclassifier',data);
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].mallet_trainclassifier_url + '/engine/mallet/trainclassifier', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["timeout"])(2400000));
        } //infer-topics

      }, {
        key: "testinfertopicsConnection",
        value: function testinfertopicsConnection() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].mallet_infertopics_url + '/engine/mallet');
        }
      }, {
        key: "runinfertopics",
        value: function runinfertopics(data) {
          // return this.http.post('http://localhost:3012//engine/mallet/infertopics',data);
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].mallet_infertopics_url + '/engine/mallet/infertopics', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["timeout"])(2400000));
        } //hlda

      }, {
        key: "testhldasConnection",
        value: function testhldasConnection() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].mallet_hlda_url + '/engine/mallet');
        }
      }, {
        key: "runhlda",
        value: function runhlda(data) {
          // return this.http.post('http://localhost:3012//engine/mallet/hlda',data);
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].mallet_hlda_url + '/engine/mallet/hlda', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["timeout"])(2400000));
        } //prune

      }, {
        key: "testpruneConnection",
        value: function testpruneConnection() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].mallet_prune_url + '/engine/mallet');
        }
      }, {
        key: "runprune",
        value: function runprune(data) {
          // return this.http.post('http://localhost:3012//engine/mallet/prune',data);
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].mallet_prune_url + '/engine/mallet/prune', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["timeout"])(2400000));
        } //prune

      }, {
        key: "testsplitConnection",
        value: function testsplitConnection() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].mallet_split_url + '/engine/mallet');
        }
      }, {
        key: "runsplit",
        value: function runsplit(data) {
          // return this.http.post('http://localhost:3012//engine/mallet/split',data);
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].mallet_split_url + '/engine/mallet/split', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["timeout"])(2400000));
        }
      }]);

      return MalletService;
    }();

    MalletService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    MalletService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], MalletService);
    /***/
  },

  /***/
  "./src/app/shared/loading-spinner/loading-spinner.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/shared/loading-spinner/loading-spinner.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedLoadingSpinnerLoadingSpinnerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".lds-ring {\r\n    display: inline-block;\r\n    position: relative;\r\n    width: 80px;\r\n    height: 80px;\r\n  }\r\n  .lds-ring div {\r\n    box-sizing: border-box;\r\n    display: block;\r\n    position: absolute;\r\n    width: 64px;\r\n    height: 64px;\r\n    margin: 8px;\r\n    border: 8px solid var(--primary);\r\n    border-radius: 50%;\r\n    -webkit-animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n            animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n    border-color: var(--primary) transparent transparent transparent;\r\n  }\r\n  .lds-ring div:nth-child(1) {\r\n    -webkit-animation-delay: -0.45s;\r\n            animation-delay: -0.45s;\r\n  }\r\n  .lds-ring div:nth-child(2) {\r\n    -webkit-animation-delay: -0.3s;\r\n            animation-delay: -0.3s;\r\n  }\r\n  .lds-ring div:nth-child(3) {\r\n    -webkit-animation-delay: -0.15s;\r\n            animation-delay: -0.15s;\r\n  }\r\n  @-webkit-keyframes lds-ring {\r\n    0% {\r\n      -webkit-transform: rotate(0deg);\r\n              transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      -webkit-transform: rotate(360deg);\r\n              transform: rotate(360deg);\r\n    }\r\n  }\r\n  @keyframes lds-ring {\r\n    0% {\r\n      -webkit-transform: rotate(0deg);\r\n              transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      -webkit-transform: rotate(360deg);\r\n              transform: rotate(360deg);\r\n    }\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NoYXJlZC9sb2FkaW5nLXNwaW5uZXIvbG9hZGluZy1zcGlubmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7RUFDQTtJQUNFLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLGdDQUFnQztJQUNoQyxrQkFBa0I7SUFDbEIsc0VBQThEO1lBQTlELDhEQUE4RDtJQUM5RCxnRUFBZ0U7RUFDbEU7RUFDQTtJQUNFLCtCQUF1QjtZQUF2Qix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLDhCQUFzQjtZQUF0QixzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLCtCQUF1QjtZQUF2Qix1QkFBdUI7RUFDekI7RUFDQTtJQUNFO01BQ0UsK0JBQXVCO2NBQXZCLHVCQUF1QjtJQUN6QjtJQUNBO01BQ0UsaUNBQXlCO2NBQXpCLHlCQUF5QjtJQUMzQjtFQUNGO0VBUEE7SUFDRTtNQUNFLCtCQUF1QjtjQUF2Qix1QkFBdUI7SUFDekI7SUFDQTtNQUNFLGlDQUF5QjtjQUF6Qix5QkFBeUI7SUFDM0I7RUFDRiIsImZpbGUiOiIuLi8uLi9zaGFyZWQvbG9hZGluZy1zcGlubmVyL2xvYWRpbmctc3Bpbm5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxkcy1yaW5nIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gIH1cclxuICAubGRzLXJpbmcgZGl2IHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA2NHB4O1xyXG4gICAgaGVpZ2h0OiA2NHB4O1xyXG4gICAgbWFyZ2luOiA4cHg7XHJcbiAgICBib3JkZXI6IDhweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGFuaW1hdGlvbjogbGRzLXJpbmcgMS4ycyBjdWJpYy1iZXppZXIoMC41LCAwLCAwLjUsIDEpIGluZmluaXRlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgLmxkcy1yaW5nIGRpdjpudGgtY2hpbGQoMSkge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC40NXM7XHJcbiAgfVxyXG4gIC5sZHMtcmluZyBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuM3M7XHJcbiAgfVxyXG4gIC5sZHMtcmluZyBkaXY6bnRoLWNoaWxkKDMpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMTVzO1xyXG4gIH1cclxuICBAa2V5ZnJhbWVzIGxkcy1yaW5nIHtcclxuICAgIDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxuICB9XHJcbiAgIl19 */";
    /***/
  },

  /***/
  "./src/app/shared/loading-spinner/loading-spinner.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/shared/loading-spinner/loading-spinner.component.ts ***!
    \*********************************************************************/

  /*! exports provided: LoadingSpinnerComponent */

  /***/
  function srcAppSharedLoadingSpinnerLoadingSpinnerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingSpinnerComponent", function () {
      return LoadingSpinnerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LoadingSpinnerComponent =
    /*#__PURE__*/
    function () {
      function LoadingSpinnerComponent() {
        _classCallCheck(this, LoadingSpinnerComponent);
      }

      _createClass(LoadingSpinnerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoadingSpinnerComponent;
    }();

    LoadingSpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-loading-spinner',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./loading-spinner.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/loading-spinner/loading-spinner.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./loading-spinner.component.css */
      "./src/app/shared/loading-spinner/loading-spinner.component.css")).default]
    })], LoadingSpinnerComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      auth_url: 'http://localhost:3000',
      arcade_depsbuilder_url: 'http://localhost:3001',
      arcade_acdc_url: 'http://localhost:3002',
      arcade_archsmelldetector_url: 'http://localhost:3003',
      arcade_pkg_url: 'http://localhost:3004',
      arcade_a2a_url: 'http://localhost:3005',
      arcade_cvg_url: 'http://localhost:3006',
      arcade_c2caverageanalyze_url: 'http://localhost:3007',
      arcade_decaymetrics_url: 'http://localhost:3008',
      arcade_smelldensityanalyzer_url: 'http://localhost:3009',
      arcade_smellevolutionanalyzer_url: 'http://localhost:3010',
      arcade_pipeextractor_url: 'http://localhost:3011',
      mallet_importdir_url: 'http://localhost:3012',
      mallet_traintopics_url: 'http://localhost:3013',
      arcade_arc_url: 'http://localhost:3014',
      mallet_importfile_url: 'http://localhost:3015',
      mallet_trainclassifier_url: 'http://localhost:3016',
      mallet_infertopics_url: 'http://localhost:3017',
      mallet_hlda_url: 'http://localhost:3018',
      mallet_prune_url: 'http://localhost:3019',
      mallet_split_url: 'http://localhost:3020',
      codemaat_vcs_url: 'http://localhost:3021',
      git_log_url: 'http://localhost:3022',
      linux_sed_url: 'http://localhost:3023',
      arcade_cleanupcodemaat_url: 'http://localhost:3024',
      arcade_batchclonefinder_url: 'http://localhost:3025',
      arcade_depfindrunner_url: 'http://localhost:3026',
      arcade_dependencyfinderprocessing_url: 'http://localhost:3027'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\KP\Downloads\DockerBuild\SAIN-frontend\Angular\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map