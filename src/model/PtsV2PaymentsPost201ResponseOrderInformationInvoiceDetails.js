/**
 * CyberSource Merged Spec
 * All CyberSource API specs merged together. These are available at https://developer.cybersource.com/api/reference/api-reference.html
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PtsV2PaymentsPost201ResponseOrderInformationInvoiceDetails = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PtsV2PaymentsPost201ResponseOrderInformationInvoiceDetails model module.
   * @module model/PtsV2PaymentsPost201ResponseOrderInformationInvoiceDetails
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PtsV2PaymentsPost201ResponseOrderInformationInvoiceDetails</code>.
   * @alias module:model/PtsV2PaymentsPost201ResponseOrderInformationInvoiceDetails
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>PtsV2PaymentsPost201ResponseOrderInformationInvoiceDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PtsV2PaymentsPost201ResponseOrderInformationInvoiceDetails} obj Optional instance to populate.
   * @return {module:model/PtsV2PaymentsPost201ResponseOrderInformationInvoiceDetails} The populated <code>PtsV2PaymentsPost201ResponseOrderInformationInvoiceDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('level3TransmissionStatus')) {
        obj['level3TransmissionStatus'] = ApiClient.convertToType(data['level3TransmissionStatus'], 'Boolean');
      }
      if (data.hasOwnProperty('salesSlipNumber')) {
        obj['salesSlipNumber'] = ApiClient.convertToType(data['salesSlipNumber'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Indicates whether CyberSource sent the Level III information to the processor. The possible values are:  If your account is not enabled for Level III data or if you did not include the purchasing level field in your request, CyberSource does not include the Level III data in the request sent to the processor.  For processor-specific information, see the `bill_purchasing_level3_enabled` field description in [Level II and Level III Processing Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/Level_2_3_SCMP_API/html)  Possible values: - **true** - **false** 
   * @member {Boolean} level3TransmissionStatus
   */
  exports.prototype['level3TransmissionStatus'] = undefined;
  /**
   * Transaction identifier that CyberSource generates. You have the option of printing the sales slip number on the receipt. This field is supported only on Cybersource through Visanet and JCN gateway. 
   * @member {Number} salesSlipNumber
   */
  exports.prototype['salesSlipNumber'] = undefined;



  return exports;
}));


